import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as messagesActions from '../../store/messages';

import MessageDivs from "./MessageDiv";

const MessageInput = ({matchId}) => {

	const user = useSelector((state) => state.session?.user);
    const [message, setMessage] = useState('');
    const messagesObject = useSelector((state) => state.messages);
    const messages = Object.values(messagesObject);

    const dispatch = useDispatch();

    const handleSubmitMsg = async (e) => {
        dispatch(messagesActions.addMessage(message));
		e.preventDefault();
	};

    useEffect(() => {
        if (user){
            dispatch(messagesActions.getMatchMessages(matchId))
        }
    }, [])

	return (
        messages &&
        <div>
            <div>
                {messages?.map((message) =>
					(
                        <p>
                        <MessageDivs message={message}/>
                        </p>
					)
                )}
            </div>
			<form className="chat-input-ctrl" onSubmit={handleSubmitMsg}>
				<input
					className="chat-input"
					type="text"
					required
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
                <button> Send </button>
			</form>
        </div>
	);
};

export default MessageInput;
