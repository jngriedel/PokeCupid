// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import MessageDivs from "../MessageDiv";

// const Messages = ({ socket }) => {
// 	const userId = parseInt(useParams().userId);
// 	const users = useSelector((state) => state.users?.byId);
// 	const user = useSelector((state) => state.users?.byId)[
// 		userId
// 	];
// 	const usersArr = Object.values(users);
// 	const matchName = usersArr.find((user) => user.id === user?.match_id);
// 	const owner = usersArr.find((user) => user.id === user?.user_id);

// 	const [match, setMatch] = useState();

// 	useEffect(() => {
// 		if (owner?.id === user?.id) {
// 			setMatch(matchName);
// 		} else {
// 			setMatch(owner);
// 		}
// 	}, [userId, matchName, owner, user?.id]);

// 	if (users[userId] && users[userId].messages.length) {
// 		return (
// 			<div className="chat-div-wrap">
// 				{users[userId]?.messages.map((messageId) => {
// 					return (
// 						<MessageDivs
// 							messageId={messageId}
// 							key={messageId}
// 							socket={socket}
// 						/>
// 					);
// 				})}
// 			</div>
// 		);
// 	} else if (!match) {
// 		return (
// 			<div className="chat-div-wrap">
//                 Match with this trainer to start chatting!
// 			</div>
// 		);
// 	} else {
// 		return (
// 			<div className="chat-div-wrap-empty">
// 				<div className="chat-empty-desc">
// 					Start chatting with
// 					{match?.username}!
// 				</div>
// 			</div>
// 		);
// 	}
// };

// export default Messages;
