import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import MessageIndex from './MessageIndex';
import "./index.css";

function MessagingModal() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}
        className='messagebutton'>
        Chat with this trainer!
      </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <MessageIndex />
            </Modal>
          )}
    </>
  );
}

export default MessagingModal;