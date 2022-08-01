import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getUserMatches } from "../store/matches";
import Match from "./Match";
import "./Matches.css";
import "./Messages/Messages.css";

function Matches() {
  // const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const matchesState = useSelector((state) => state.matches);
  const matches = Object.values(matchesState);

  if (matches.length !== 0) {
    matches.sort((a, b) => {
      var dateA = new Date(a.matchTime),
        dateB = new Date(b.matchTime);
      return dateB - dateA;
    });
  }

  useEffect(() => {
    dispatch(getUserMatches(sessionUser.id)).then((val) => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    });
  }, [dispatch, sessionUser]);

  return (
    <>
      {isLoaded && (
        <div className="matches-main">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@600&family=Nanum+Gothic&display=swap');
          </style>
          <div className="matches-title-div">
            <h1 className="matches-title">
              <i class="fas fa-comments"></i> Chat with your Matches!
            </h1>
          </div>
          <div className="matches-title-footer"></div>

          <div className="all-matches-container">
            {matches.length >= 1 &&
              matches.map((match, i) => <Match key={i} match={match} />)}

            {matches.length === 0 && (
              <>
                <h2
                  className={
                    matches.length === 0 ? "no-matches" : "no-matches-hidden"
                  }
                >
                  Looks empty in here! Go get matching!
                </h2>
                <img
                  alt="pikachu"
                  className={
                    matches.length === 0
                      ? "no-matches-img"
                      : "no-matches-img-hidden"
                  }
                  src="https://i.pinimg.com/originals/38/a6/cd/38a6cdd99f2715d94104a2643a884dc9.png"
                ></img>
              </>

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
