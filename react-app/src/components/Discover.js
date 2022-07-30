import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { newMatch } from "../store/matches";
import "./Discover.css";

function Discover() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // const [empty, setEmpty] = useState(false);
  const [userGrabbed, setUserGrabbed] = useState(true);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData?.users);
    }
    fetchData().then((res) => {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    });
  }, []);

  useEffect(() => {
    if (users) {
      setCurrent(users[index]);

      // if(users.length == 0) setEmpty(true)
    } else {
      setUserGrabbed(false);
    }
  }, [users, index]);

  const results = [];
  users?.map((user) => {
    let count = 0;
    for (let i = 0; i <= 19; i++) {
      if (user?.answers[i]?.content === sessionUser?.answers[i]?.content) {
        count++;
      }
    }
    let result = ((count / 20) * 100).toFixed() + "%";
    results.push(result);
    return result;
  });

  const handlePass = async (passedId) => {
    const response = await fetch(`/api/matches/pass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passedId,
        liker: sessionUser.id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.message) {
        if (index < users.length - 1) {
          setIndex(index + 1);
          setCurrent(users[index]);
        } else {
          setUserGrabbed(false);
          setIndex(index + 1);
        }
      }
      return null;
    } else {
      return ["An error occurred. Please try again."];
    }
  };

  const handleLike = () => {
    dispatch(newMatch(sessionUser.id, current?.id));
    if (index < users.length - 1) {
      setIndex(index + 1);
      setCurrent(users[index]);
    } else {
      setUserGrabbed(false);
      setIndex(index + 1);
    }
  };

  return (
    <>
      {userGrabbed && loaded && users.length >= 1 && (
        <div>
          <div className="discover-title-div">
            <h1 className="discover-title">
              <i className="fa-solid fa-magnifying-glass"></i>Discover
            </h1>
          </div>
          <div className="discover-title-footer"></div>

          <li key={current?.id}>
            <div className="discover-div">
              <NavLink
                to={`/users/${current?.id}`}
                className="discover-navlink"
              >
                <p className="discover-name">{current?.name}</p>
              </NavLink>
              <p className="discover-gender">{current?.gender}</p>
              <button className="match-percentage">{results[index]}</button>
              <div className="img-bio-wrapper">
                <NavLink
                  to={`/users/${current?.id}`}
                  className="discover-navlink"
                >
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
                <div className="bio-discover-wrapper">
                  <div className="bio-discover-title-div">
                    <p className="bio-discover-title">Biography</p>
                  </div>
                  <p className="bio-discover">"{current?.bio}"</p>
                </div>
              </div>
              <div className="discover-buttons">
                <button
                  className="discover-pass"
                  onClick={() => {
                    handlePass(current?.id);
                  }}
                >
                  <i className="fa-solid fa-x discover-x"></i>PASS
                </button>
                <button className="discover-like" onClick={handleLike}>
                  <i className="fa-solid fa-heart discover-heart"></i>
                  LIKE
                </button>
              </div>
            </div>
          </li>
        </div>
      )}

      {loaded && (
        <>
          <p
            className="out-of-matches"
            style={{
              visibility:
                users.length == 0 || index == users.length
                  ? "visible"
                  : "hidden",
            }}
          >
            {
              "You've reached the end of all the users for the moment, please check back later!"
            }
          </p>
        </>
      )}

      {!loaded && (
        <div className="loadHoldDiscover">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Discover;
