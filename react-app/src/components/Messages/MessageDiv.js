import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import * as messageActions from "../../store/messages";

const MessageDivs = ({ message }) => {
	const dispatch = useDispatch();
    
	const [user, setUser] = useState();
	const [disabled, setDisabled] = useState(true);
	const [currentMessage, setCurrentMessage] = useState(message.content);

	// const editMessage = async (e) => {
	// 	e.preventDefault();
	// 	if (message) {
	// 		const messageData = { 
    //             id: messageId, 
    //             message, 
    //             match_id: matchId };

	// 		const res = await dispatch(messageActions.editMessage(messageData));
	// 	}
	// 	setDisabled(true);
	// };

    // const deleteMessage = async () => {
	// 	const res = await dispatch(messageActions.removeMessage(messageId));
	// 	if (res.id) {
	// 		await dispatch(matchActions.getAllMatches(res));
	// 	}
	// };

	return (
		<div className="chat-div-ctrl">
			<div className="chat-message-ctrl">
				<div className="chat-user-wrap">
					<div className="chat-username">
						{message.user.name}
					</div>
				</div>

				<form>
                    {/* onSubmit={editMessage} */}
					<input
						className="chat-div-input"
						type="text"
						value={currentMessage}
						onChange={(e) => setCurrentMessage(e.target.value)}
						disabled={disabled}
					/>
				</form>
			</div>
            {/* <button
					className="delete-msg"
					type="submit"
					onClick={deleteMessage}
				>
					Delete
			</button> */}
		</div>
	);
};

export default MessageDivs;