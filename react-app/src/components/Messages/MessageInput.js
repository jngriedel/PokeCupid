import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from 'socket.io-client';
import * as messagesActions from '../../store/messages';
import MessageDivs from "./MessageDiv";
let socket;

//return the message to dict inside the addMessage, then add it on the socket


const MessageInput = ({matchId}) => {

	const user = useSelector((state) => state.session?.user);
    const [message, setMessage] = useState('');
    const messagesObject = useSelector((state) => state.messages);
    const stateMessages = Object.values(messagesObject);
    const [messages, setMessages] = useState([])

    const dispatch = useDispatch();


    useEffect(() => {
        // if (user){
            //     dispatch(messagesActions.getMatchMessages(matchId))



            // }

            socket = io();

            socket.on("chat", (chat) => {
                setMessages(messages => [...messages, chat])
            })
            // when component unmounts, disconnect
            return (() => {
                socket.disconnect()
            })
        }, [])

        const handleSubmitMsg = async (e) => {
            e.preventDefault();
            // const res = await dispatch(messagesActions.addMessage(message, matchId))


            // console.log(res)
            socket.emit("chat", { user: user.name, msg: message })
            setMessage('');
            console.log(messages)



        };



	return (
        messages &&
        <div>
            <div>
                {messages.map((message, i) =>
					(
                        <div key={i}>
                            {/* <MessageDivs message={message} matchId={matchId}/> */}
                            {message.content}

                        </div>
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
