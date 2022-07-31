
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
		payload: messageId,
	};
};

export const clearMessages = () => ({
	type: CLEAR_MESSAGES,
});

export const getMatchMessages = (matchId) => async (dispatch) => {
	const res = await fetch(`/api/messages/${matchId}`);
	if (res.ok) {
		const data = await res.json();
		dispatch(getMessages(data.messages));
		return data.messages;
	} else {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	}
};

export const addMessage = (message,matchId) => async (dispatch) => {
	const res = await fetch(`/api/messages/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({message,matchId}),
	});
	if (res.ok) {
		const data = await res.json();
		dispatch(addEditMessage(data.message));

		return data.message
	} else {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	}
};

export const editMessage = (messageData) => async (dispatch) => {
	const res = await fetch(`/api/messages/${messageData.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(messageData),
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
		// const data = await res.json();
		dispatch(deleteMessage(messageId));
		return messageId

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
			newState = {};
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
                delete newState[action.payload];

            return newState;

		case CLEAR_MESSAGES:
			return {};

		default:
			return state;
	}
}
