import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getUserImages } from "../../store/profileImages";
// import { io } from "socket.io-client";
import * as messagesActions from "../../store/messages";
// let socketD;

const MessageDivs = ({ message, socket }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  // const userImages = useSelector((state) => state.profileImages);
  // const userImagesAll = Object.values(userImages);

  // const userAvatar = userImagesAll[0];

  // const [user, setUser] = useState();
  // const [disabled, setDisabled] = useState(true);
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
          {/* <div className="chat-avatar">
            {userImagesArr[0] && <img src={userImagesArr[0].imgUrl}></img>}
            {userImagesArr.length == 0 && (
              <img src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"></img>
            )}
          </div> */}
        </div>
        {!editMssg && (

          <div className="chat-content-options">
            <p
              className={
                message.user.id === sessionUser.id
                  ? "chatMessageUser"
                  : "chatMessageOther"
              }
            >
              {message.content}
            </p>


            <button
              className="edit-msg"
              onClick={() => setEditMssg(true)}
              style={{
                visibility:
                  message.userId === sessionUser.id ? "visible" : "hidden",
              }}
            >
              {" "}
              <i class="fas fa-edit"></i>{" "}
            </button>
            <button
              className="delete-msg"
              onClick={() => deleteMessage(message.id)}
              style={{
                visibility:
                  message.userId === sessionUser.id ? "visible" : "hidden",
              }}
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        )}

        {editMssg && ( 
          <>
            <div
              className="chat-countdown"
              style={{ visibility: currentMessage.length === 0 ? "hidden" : "visible" }}
            >
              {currentMessage.length} / 200
            </div>
          <form className="chat-edit-div" onSubmit={editMessage}>
            <input
              className="chat-div-input"
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            {currentMessage && currentMessage.length <= 200 && (
              <button className="save-msg">
                <i class="fas fa-save"></i>
              </button>
            )}
            <button
              className="cancel-save-msg"
              onClick={() => setEditMssg(false)}
            >
              <i class="fas fa-ban"></i>
            </button>
          </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageDivs;
