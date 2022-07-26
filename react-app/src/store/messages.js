
const GET_MESSAGES = "messages/GET_MESSAGES";
const ADD_EDIT_MESSAGE = "messages/ADD_EDIT_MESSAGE";
const DELETE_MESSAGE = "messages/DELETE_MESSAGE";
const CLEAR_MESSAGES = "messages/CLEAR_MESSAGES";

export const getMessages = (messages) => {
	return {
		type: GET_MESSAGES,
		messages,
	};
};

export const addEditMessage = (message) => {
	return {
		type: ADD_EDIT_MESSAGE,
		message,
	};
};

export const deleteMessage = (messageId) => {
	return {
		type: DELETE_MESSAGE,
		messageId,
	};
};

export const clearMessages = () => ({
	type: CLEAR_MESSAGES,
});


export const editMessage = (message) => async (dispatch) => {
	const res = await fetch(`/api/messages/${message.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(message),
	});
	if (res.ok) {
		const data = await res.json();
		dispatch(addEditMessage(data.message));
		return data.message;
	} else {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	}
};

export const removeMessage = (messageId) => async (dispatch) => {
	const res = await fetch(`/api/messages/${messageId}`, {
		method: "DELETE",
	});
	if (res.ok) {
		const data = await res.json();
		dispatch(deleteMessage(messageId));
		return data.match;
        //get match from data?
	} else {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
            
		}
	}
};

const initialState = {};

export default function reducer(state = initialState, action) {

	let newState;

	switch (action.type) {

		case GET_MESSAGES:
			newState = {...state};
			action.messages.forEach((message) => {
				newState[message.id] = message;
			});
			return newState;

		case ADD_EDIT_MESSAGE:
			newState = { ...state };
			newState[action.message.id] = action.message;
			return newState;

		case DELETE_MESSAGE:
            newState = { ...state };
            action.messages.forEach((message) => {
                delete newState[message.id];
            })
            return newState;  

		case CLEAR_MESSAGES:
			return {};

		default:
			return state;
	}
}
