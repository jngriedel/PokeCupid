
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {getUserMatches} from '../store/matches'
import './Matches.css'
import MessageInput from './Messages/MessageInput';
import { ChatModal } from '../context/ChatModal';
import { removeMatch } from '../store/matches'

function Match({match}) {
  // const focusRef = useRef()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state=> state.session.user)
  const [showModal, setShowModal] = useState(false)
  const [messagesChanged, setMessagesChanged] = useState(false)
  const matchId = match.id
  const notSessionUser =  match.user.id == sessionUser.id ? match.user2 : match.user

//   useEffect(() => {
//     if (focusRef) {
//         focusRef.current.addEventListener("DOMNodeInserted", (e) => {
//             const { currentTarget: target } = e;
//             target.scroll({ top: target.scrollHeight, behavior: "smooth" });
//         });
//     }
// }, []);

const handlePass = async (passedId) => {

  let result = window.confirm(
    "This person will no longer show up in your matches, and you won't be able to match again. Are you sure?"
  );

  if (result) {

  const response = await fetch(`/api/matches/unmatch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      passedId,
      liker: sessionUser.id,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    if (data.matchId) {
      dispatch(removeMatch(data.matchId))
    }
    return ;
  } else {
    return ["An error occurred. Please try again."];
  }
}
};

  return (
    <>
    <div className='unmatch-container'>
      <button onClick={()=>{handlePass(notSessionUser.id)}} type='button' className='unmatch-button'>
        Unmatch
        </button>
    </div>
      <div
      onClick={()=>{ setShowModal(true);
      setMessagesChanged(false)}}  className='matchDiv'  >
                { notSessionUser.profileImages[0] &&
                <div>
                    <img className='matchImg' src={match.user.id == sessionUser.id ? match.user2.profileImages[0]?.imgUrl : match.user.profileImages[0]?.imgUrl} />
                </div>
                }
                { !notSessionUser.profileImages[0] &&
                <div>
                    <img className='matchImg' src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png" />
                </div>
                }
                <div>
                    <h3 className='matchName'>{match.user.id == sessionUser.id ? match.user2.name : match.user.name}</h3>
                    <h5 className='matchBio'>{match.user.id == sessionUser.id ? match.user2.bio : match.user.bio}</h5>
                </div>
            </div>

    {/* { showChat &&  */}
    <div>
      {/* <button onClick={() => setShowModal(true)}
        className='messagebutton'>
        Chat with this trainer!
      </button> */}
      </div>
      {showModal && (
            <ChatModal onClose={() => setShowModal(false)}>
              <MessageInput matchId={matchId} messagesChanged={messagesChanged} setMessagesChanged={setMessagesChanged} />
            </ChatModal>
      )}

    </>
  );
}

export default Match;
