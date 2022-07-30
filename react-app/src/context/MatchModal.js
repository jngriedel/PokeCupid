import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './MatchModal.css';

const MatchModalContext = React.createContext();

export function MatchModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <MatchModalContext.Provider value={value}>
        {children}
      </MatchModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function MatchModal({ onClose, children, matchModalMatch}) {
  const modalNode = useContext(MatchModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="matchmodal">
      <div id="chatmodal-background" onClick={onClose} />
      <h1>It's a Match! </h1>
      {/* { matchModalMatch.user.profileImages[0].imgUrl ?
       <img src={matchModalMatch.user.profileIamges[0].imgUrl} /> :
       <img src='https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png' /> } */}
      <div id="chatmodal-content">{children}</div>
    </div>,
    modalNode
  );
}
