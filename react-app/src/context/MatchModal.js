import React, { useContext, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import loveball from "../images/loveball.png";
import matchtext from "../images/matchtext.png";
import { getUserImages } from "../store/profileImages";
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
  }, []);

  const modalNode = useContext(MatchModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="matchmodal">
      {/* <h1 id="matchMessage">It's a Match! </h1> */}
      <img className="match-title" src={matchtext}></img>
      <div className="matchmodal-img">
        {userImagesArr[0] && (
          <img className="match-user1" src={userImagesArr[0].imgUrl}></img>
        )}
        {userImagesArr.length == 0 && (
          <img
            className="match-user1"
            src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
          ></img>
        )}

        <img className="match-loveball" src={loveball}></img>

        {matchModalMatch.user.profileImages[0].imgUrl ? (
          <img
            className="match-user2"
            src={matchModalMatch.user.profileImages[0].imgUrl}
          />
        ) : (
          <img
            className="match-user2"
            src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
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
