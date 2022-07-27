import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserMatches } from "../store/matches";
import "./Matches.css";
import MessageInput from "./Messages/MessageInput";

function Match({ match }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showChat, setShowChat] = useState(false);
  const matchId = match.id;

  return (
    <>
      <div onClick={() => setShowChat(true)} className="matchDiv">
        <div>
          <img
            className="matchImg"
            src={
              match.user.id == sessionUser.id
                ? match.user2.profileImages[0]?.imgUrl
                : match.user.profileImages[0]?.imgUrl
            }
          />
        </div>
        <div>
          <h3>
            {match.user.id == sessionUser.id
              ? match.user2.name
              : match.user.name}
          </h3>
        </div>
      </div>

      {showChat && (
        <div className="chatBox">
          <button onClick={() => setShowChat(false)}>Exit</button>
          <MessageInput matchId={matchId} />
        </div>
      )}
    </>
  );
}

export default Match;
