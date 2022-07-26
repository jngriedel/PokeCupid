import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import * as messageActions from "../../store/messages";

const MessageDivs = ({ message }) => {
	const dispatch = useDispatch();
    
	const [user, setUser] = useState();
	const [disabled, setDisabled] = useState(true);
	const [currentMessage, setCurrentMessage] = useState(message.content);
    const [editMssg, setEditMssg] = useState(false);

	const editMessage = async (e) => {
		e.preventDefault();
        return;
		// if (message) {
		// 	const messageData = { 
        //         id: messageId, 
        //         message, 
        //         match_id: matchId };

		// 	const res = await dispatch(messageActions.editMessage(messageData));
		// }
		// setDisabled(true);
	};

    const deleteMessage = async () => {
        return;
		// const res = await dispatch(messageActions.removeMessage(messageId));
		// if (res.id) {
		// 	await dispatch(matchActions.getAllMatches(res));
		// }
	};

	return (
		<div className="chat-div-ctrl">
			<div className="chat-message-ctrl">
				<div className="chat-user-wrap">
					<div className="chat-username">
						{message.user.name}
					</div>
				</div>
                {!editMssg && 
                <div>
                    <p>
                    {message.content}
                    </p>
                    <button onClick={()=> setEditMssg(true)}> Edit </button>
                    <button
					className="delete-msg"
					onClick={deleteMessage}
				    >
					Delete
			        </button>
                </div>
                }
                {editMssg &&
                    <form onSubmit={editMessage}>
                        <input
                            className="chat-div-input"
                            type="text"
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                        />
                        <button>Save</button>
                        <button onClick={()=> setEditMssg(false)}> Cancel </button>
                    </form>}
				
			</div>
		</div>
	);
};

export default MessageDivs;