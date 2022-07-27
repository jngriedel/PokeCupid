// constants
const ADD_MATCH = 'session/ADD_MATCH'
const REMOVE_MATCH = 'session/REMOVE_MATCH';

const GET_MATCHES = 'session/SET_MATCHES'

const addMatch = (match) => ({
  type: ADD_MATCH,
  payload: match
});

const removeMatch = (matchId) => ({
  type: REMOVE_MATCH,
  payload: matchId
})

const getMatches = (matches) => ({
    type: GET_MATCHES,
    payload: matches
})




const initialState = { matches: null };



export const getUserMatches = (userId) => async (dispatch) => {

  const response = await fetch(`/api/matches/${userId}`);

  if (response.ok) {
    const data = await response.json();

    dispatch(getMatches(data.userMatches))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}
export const newMatch = (liker, liked) => async (dispatch) => {
    const response = await fetch(`/api/matches/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            liker,
            liked
          })
        })
        if (response.ok) {
        const data = await response.json();
        if (data.match) dispatch(addMatch(data.match))
        return null;
      }
      else {
        return ['An error occurred. Please try again.']
      }
}

export const unMatch = (matchId) => async (dispatch) => {
    const response = await fetch(`/api/matches/${matchId}`, {
    method: 'DELETE'}
    )
    if (response.ok) {
    const data = await response.json();

    dispatch(removeMatch(data.matchId))
    return null;
  }
  else {
    return ['An error occurred. Please try again.']
  }

}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MATCH: {
      const newState = {...state}
      newState[action.payload.id] = action.payload
      return newState
    }
    case REMOVE_MATCH: {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }
    case GET_MATCHES: {
        const newState = {}
        const matchArr = action.payload
        matchArr.sort((a,b)=> (a.matchTime < b.matchTime) ? 1: -1)
        matchArr.forEach((match)=>{
            newState[match.id] = match
        })
        return newState
    }

    default:
      return state;
  }
}
