import React, { useContext, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import loveball from "../images/loveball.png";
import matchtext from "../images/matchtext.png";
import { getUserImages } from "../store/profileImages";
import unown_pic from "../images/unown.png";
import "./MatchModal.css";

const MatchModalContext = React.createContext();

export function MatchModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <MatchModalContext.Provider value={value}>
        {children}
      </MatchModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function MatchModal({ onClose, children, matchModalMatch }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);
  const userImagesArr = Object.values(userImages);

  useEffect(() => {
    dispatch(getUserImages(sessionUser?.id));
  }, [dispatch, sessionUser]);

  const modalNode = useContext(MatchModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="matchmodal">
      {/* <h1 id="matchMessage">It's a Match! </h1> */}
      <img alt="it's a match" className="match-title" src={matchtext}></img>
      <div className="matchmodal-img">
        {userImagesArr[0] && (
          <img alt="you" className="match-user1" src={userImagesArr[0].imgUrl}></img>
        )}
        {userImagesArr.length === 0 && (
          <img
            className="match-user1"
            alt="unknown"
            src={unown_pic}
          ></img>
        )}

        <img alt='heart pokeball'className="match-loveball" src={loveball}></img>

        {matchModalMatch.user.profileImages[0].imgUrl ? (
          <img
            alt="match"
            className="match-user2"
            src={matchModalMatch.user.profileImages[0].imgUrl}
          />
        ) : (
          <img
            alt="unknown"
            className="match-user2"
            src={unown_pic}
          />
        )}
      </div>
      <p className="matchmodal-p">Go Check out the matches tab to chat with your new match!</p>
      <div id="matchmodal-background" onClick={onClose} />
      <div id="matchmodal-content">{children}</div>
    </div>,
    modalNode
  );
}
