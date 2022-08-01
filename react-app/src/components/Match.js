import React, {   useState } from "react";
import {  useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getUserMatches } from "../store/matches";
import "./Matches.css";
import MessageInput from "./Messages/MessageInput";
import { ChatModal } from "../context/ChatModal";

function Match({ match }) {

  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [messagesChanged, setMessagesChanged] = useState(false)
  const matchId = match.id;
  const notSessionUser =
    match.user.id === sessionUser.id ? match.user2 : match.user;



  return (
    <>
      <div onClick={() =>{
         setShowModal(true);
         setMessagesChanged(false)}} className="matchDiv">
        {notSessionUser.profileImages[0] && (
          <div>
            <img
              alt="matchimg"
              className="matchImg"
              src={
                match.user.id === sessionUser.id
                  ? match.user2.profileImages[0]?.imgUrl
                  : match.user.profileImages[0]?.imgUrl
              }
            />
          </div>
        )}
        {!notSessionUser.profileImages[0] && (
          <div>
            <img
              alt="unknown"
              className="matchImg"
              src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
            />
          </div>
        )}
        <div>
          <h3 className="matchName">
            {match.user.id === sessionUser.id
              ? match.user2.name
              : match.user.name}
          </h3>
          <h5 className="matchBio">
            {match.user.id === sessionUser.id ? match.user2.bio : match.user.bio}
          </h5>
        </div>
      </div>
      <div></div>
      {showModal && (
        <ChatModal onClose={() => setShowModal(false)}>
          <MessageInput matchId={matchId} messagesChanged={messagesChanged} setMessagesChanged={setMessagesChanged} setShowModal={setShowModal} notSessionUser={notSessionUser} />
        </ChatModal>
      )}
    </>
  );
}

export default Match;
