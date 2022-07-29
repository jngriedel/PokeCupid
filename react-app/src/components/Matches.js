import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserMatches } from "../store/matches";
import Match from "./Match";
import "./Matches.css";
import "./Messages/Messages.css";

function Matches() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const matchesState = useSelector((state) => state.matches);
  const matches = Object.values(matchesState);

  if(matches) {
  matches.sort((a, b) => {
    var dateA = new Date(a.matchTime),
      dateB = new Date(b.matchTime);
    return dateB - dateA;
  });
}

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
    dispatch(getUserMatches(sessionUser.id)).then((val) => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    });
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="matches-main">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@600&family=Nanum+Gothic&display=swap');
          </style>
          <div className="message-titlebar">
            <h2 className="pageTitle">Your Matches </h2>
          </div>
          <div className="all-matches-container">
            {matches.length >= 1 &&
              matches.map((match, i) => <Match key={i} match={match} />)}
            {matches.length == 0 && (
              <h2>Looks Empty in Here! Go get matching!</h2>
            )}
          </div>
        </div>
      )}
      {!isLoaded && (
        <div className="loadHold">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Matches;
