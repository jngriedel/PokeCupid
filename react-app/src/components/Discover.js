import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { newMatch } from "../store/matches";
import "./Discover.css";

function Discover() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [userGrabbed, setUserGrabbed] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  console.log(users[index]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response
        .json()
        .then((res) => setUsers(res.users))
        .then((res) => setCurrent(users[index]))
        .then(() => setUserGrabbed(true));
    }
    fetchData();
  }, []);
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
              <img
                className="discover-images"
                src={current?.profileImages[0].imgUrl}
              ></img>
            </NavLink>
            <p>"{current?.bio}"</p>
            <button
              className="discover-like"
              onClick={() => dispatch(newMatch(sessionUser.id, current?.id))}
            >
              <i className="fa-solid fa-heart"></i>
              Like
            </button>
            <button onClick={() => setIndex(index + 1)}>
              <i className="fa-solid fa-x"></i>Pass
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default Discover;
