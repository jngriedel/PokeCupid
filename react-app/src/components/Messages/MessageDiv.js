import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import * as messagesActions from "../../store/messages";
// let socketD;

const MessageDivs = ({ message, socket }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [user, setUser] = useState();
  const [disabled, setDisabled] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(message.content);
  const [editMssg, setEditMssg] = useState(false);

//   useEffect(() => {

//    socketD = io();
//    receive
//     socketD.on('delete', (messageId) =>{
//         console.log('Connected')
//         dispatch(messagesActions.deleteMessage(messageId))
//     })

//     return (() => {
//     socketD.disconnect()

//     })
//     }, [])

  const editMessage = async (e) => {
    e.preventDefault();

    const messageData = {
      id: message.id,
      message: currentMessage,
    };

    await dispatch(messagesActions.editMessage(messageData)).then((res) =>
      setEditMssg(false)
    );
  };

  const deleteMessage = async () => {
    const res = await dispatch(messagesActions.removeMessage(message.id));
    socket.emit("delete", res);
  };

  return (
    <div className="chat-div-ctrl">
      <div className="chat-message-ctrl">
        <div className="chat-user-wrap">
          <div className="chat-username">{message.user.name}</div>
        </div>
        {!editMssg && (
          <div>
            <p>{message.content}</p>
            <button
              onClick={() => setEditMssg(true)}
              style={{
                visibility:
                  message.userId === sessionUser.id ? "visible" : "hidden",
              }}
            >
              {" "}
              Edit{" "}
            </button>
            <button
              className="delete-msg"
              onClick={() => deleteMessage(message.id)}
              style={{
                visibility:
                  message.userId === sessionUser.id ? "visible" : "hidden",
              }}
            >
              Delete
            </button>
          </div>
        )}
        {editMssg && (
          <form onSubmit={editMessage}>
            <input
              className="chat-div-input"
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button>Save</button>
            <button onClick={() => setEditMssg(false)}> Cancel </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MessageDivs;
