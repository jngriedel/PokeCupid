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


    const dispatch = useDispatch();


    useEffect(() => {
        if (user){
                dispatch(messagesActions.getMatchMessages(matchId))
            }

            socket = io();


            //receive

            socket.on('delete', (messageId) =>{
                console.log('Connected')
                dispatch(messagesActions.deleteMessage(messageId))
            })

            //receive
            socket.on("chat", (chat) => {
                // setMessages(messages => [...messages, chat])
                console.log('In socket 1')
                dispatch(messagesActions.addEditMessage(chat))
            })

            return (() => {
                socket.disconnect()


            })
        }, [])

        const handleSubmitMsg = async (e) => {
            e.preventDefault();
            const res = await dispatch(messagesActions.addMessage(message, matchId))

            //send

            socket.emit("chat", res)

            setMessage('');

        };



	return (
        stateMessages &&
        <div>
            <div>
                {stateMessages.map((message, i) =>
					(
                        <div key={i}>
                            <MessageDivs socket={socket}   message={message} matchId={matchId}/>

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
