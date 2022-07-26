import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import Messages from "./MessageRoom";
import MessageInput from "./MessageInput";

import * as matchesActions from "../../../store/matches";
import * as messagesActions from "../../../store/messages";

let socket;

const Message = () => {

	const dispatch = useDispatch();
    const { userId } = useParams();
	const [message, setMessage] = useState("");

	// const handleSubmitMsg = async (e) => {
	// 	e.preventDefault();
	// 	if (message) {
	// 		const messageData = {
	// 			pc_id: channelId,
	// 			message,
	// 		};
	// 		socket.emit("send_message", messageData);
	// 		setMessage("");
	// 	}
	// };

	// useEffect(() => {
	// 	socket = io();

	// 	socket.emit("message_match", userId);

	// 	socket.on("receive_message", (data) => {
	// 		dispatch(messagesActions.addEditMessage(data.chat));
	// 	});

	// 	socket.on("edit_message", (data) => {
	// 		dispatch(messagesActions.addEditMessage(data.chat));
	// 	});

	// 	socket.on("delete_message", (data) => {
	// 		dispatch(messagesActions.deleteMessage(data.chat_id));
	// 	});

	// 	return () => {
	// 		socket.emit("leave_page", channelId);
	// 		socket.disconnect();
	// 	};
	// }, [channelId, dispatch]);

	if (matchId) {
		return (
			<div className="chat-ctrl">
				<Messages socket={socket} />
				<InputMessage chat={chat} setMessage={setMessage} handleSubmit={handleSubmit} />
			</div>
		);

	} else {
		return (
			<div className="chat-ctrl">
				<p> Match with this user to message them!</p>
			</div>
		)
	}
};

export default Message;
