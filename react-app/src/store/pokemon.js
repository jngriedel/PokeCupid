// constants

const GET_POKEMON = "session/GET_POKEMON";

const getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  payload: pokemon,
});

const initialState = {};

export const getAllPokemon = () => async (dispatch) => {
  const response = await fetch(`/api/pokemon`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getPokemon(data));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON: {
      const newState = {};
      action.payload.forEach((pokemon) => {
        newState[pokemon.id] = pokemon;
      });
      return newState;
    }

    default:
      return state;
  }
}
