import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { newMatch } from "../store/matches";
import "./Discover.css";

function Discover() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [empty, setEmpty] = useState("");
  const [userGrabbed, setUserGrabbed] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData?.users);
    }
    fetchData();
    setUserGrabbed(true);
  }, []);

  useEffect(() => {
    if (users) {
      setCurrent(users[index]);
    } else {
      setUserGrabbed(false);
    }
  });

  console.log(current);

  const results = [];
  users?.map((user) => {
    let count = 0;
    for (let i = 0; i <= 19; i++) {
      if (user?.answers[i].content === sessionUser?.answers[i].content) {
        count++;
      }
    }
    let result = ((count / 20) * 100).toFixed() + "%";
    results.push(result);
  });

  const handlePass = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
      setCurrent(users[index]);
    } else {
      setUserGrabbed(false);
      setEmpty(
        "You've reached the end of all the users at the moment, please check back later!"
      );
    }
  };

  const handleLike = () => {
    dispatch(newMatch(sessionUser.id, current?.id));
    if (index < users.length - 1) {
      setIndex(index + 1);
      setCurrent(users[index]);
    } else {
      setUserGrabbed(false);
      setEmpty(
        "You've reached the end of all the users at the moment, please check back later!"
      );
    }
  };

  return (
    <>
      <h1>Discover: </h1>
      {userGrabbed && (
        <li key={current?.id}>
          <div className="discover-div">
            <NavLink to={`/users/${current?.id}`} className="discover-name">
              {current?.name}
            </NavLink>
            <p>Match Percentage: {results[index]}</p>
            <NavLink to={`/users/${current?.id}`}>
              {!current?.profileImages[0] && (
                <img
                  className="discover-images"
                  src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
                ></img>
              )}
              {current?.profileImages[0] && (
                <img
                  className="discover-images"
                  src={current?.profileImages[0]?.imgUrl}
                ></img>
              )}
            </NavLink>
            <p>"{current?.bio}"</p>
            <button className="discover-like" onClick={handleLike}>
              <i className="fa-solid fa-heart"></i>
              Like
            </button>
            <button onClick={handlePass}>
              <i className="fa-solid fa-x"></i>Pass
            </button>
          </div>
        </li>
      )}
      <p>{empty}</p>
    </>
  );
}

export default Discover;
