import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ChatModalContext = React.createContext();

export function ChatModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ChatModalContext.Provider value={value}>
        {children}
      </ChatModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function ChatModal({ onClose, children }) {
  const modalNode = useContext(ChatModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}
