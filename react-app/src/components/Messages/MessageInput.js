import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { NavLink } from "react-router-dom";
import * as messagesActions from "../../store/messages";
import MessageDivs from "./MessageDiv";
import unown_pic from "../../images/unown.png";
let socket;

//return the message to dict inside the addMessage, then add it on the socket

const MessageInput = ({ matchId, messagesChanged, setMessagesChanged, setShowModal, notSessionUser }) => {
  const [characterLimit] = useState(200);
  const user = useSelector((state) => state.session?.user);
  const [message, setMessage] = useState("");

  const messagesObject = useSelector((state) => state.messages);
  const stateMessages = Object.values(messagesObject);
  const focusRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (focusRef) {
      focusRef.current.addEventListener("DOMNodeInserted", (e) => {
        const { currentTarget: target } = e;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(messagesActions.getMatchMessages(matchId))
      .then((res)=>{
        setTimeout(() => {
            setMessagesChanged(true)
          }, 300)
    });
    }

    socket = io();

    //receive

    socket.on("delete", (messageId) => {
      // console.log("I'm in deleted");
      dispatch(messagesActions.deleteMessage(messageId));
    });

    // socket.on("edit", (chat) => {
    //   console.log("I'm in edit");
    //   dispatch(messagesActions.addEditMessage(chat));
    // });

    //receive
    socket.on("chat", (chat) => {
      // setMessages(messages => [...messages, chat])

      dispatch(messagesActions.addEditMessage(chat));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, matchId, setMessagesChanged, user]);

  const handleSubmitMsg = async (e) => {
    e.preventDefault();
    const res = await dispatch(messagesActions.addMessage(message, matchId));

    //send

    socket.emit("chat", res);

    setMessage("");
  };

  return (
    stateMessages &&  (

      <div className="messages-container">
        <div className="chat-head">
            <div className="otheruser-head">
                <NavLink to={`/users/${notSessionUser.id}`}>
                {!notSessionUser.profileImages[0] && (
                <img
                  alt="unknown"
                  className="chat-images"
                  src={unown_pic}
                ></img>
              )}
              {notSessionUser.profileImages[0] && (
                <img
                  alt="match profile"
                  className="chat-images"
                  src={notSessionUser.profileImages[0]?.imgUrl}
                ></img>
              )}
                </NavLink>
                <h3 className="matchName">{notSessionUser.name}</h3>
            </div>
           <i onClick={()=>setShowModal(false)} class="fa-solid fa-x"></i>
        </div>
        <div className="messages-listed" ref={focusRef}>
        {!messagesChanged && <div className="chat-loading"></div>}
          {messagesChanged && stateMessages.map((message, i) => (
            <div key={i}>
              <MessageDivs
                socket={socket}
                message={message}
                matchId={matchId}
              />
            </div>
          ))}
        </div>

        <form className="chat-input-ctrl" onSubmit={handleSubmitMsg}>
          <div
            className="chat-countdown"
            style={{ visibility: message.length === 0 ? "hidden" : "visible" }}
          >
            {message.length} / {characterLimit}
          </div>
          <input
            placeholder="Write something here!"
            className="chat-input"
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='chat-submit'
            disabled={
              message.length > 200 || message.length === 0 ? true : false
            }
          >
            {" "}<i class="fas fa-paper-plane"></i>{" "}
          </button>
        </form>
      </div>
    )
  );
};

export default MessageInput;
