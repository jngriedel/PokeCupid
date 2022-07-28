import React, { useState } from 'react';
import { ChatModal } from '../../context/ChatModal';
import MessageInput from './MessageInput';
import MessageDivs from './MessageDiv';
// import "./index.css";

function MessagingModal() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}
        className='messagebutton'>
        Chat with this trainer!
      </button> */}
          {showModal && (
            <ChatModal onClose={() => setShowModal(false)}>
              <MessageDivs />
              <MessageInput />
            </ChatModal>
          )}
    </>
  );
}

export default MessagingModal;