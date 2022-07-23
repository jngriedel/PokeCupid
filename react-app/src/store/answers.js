const GET_ANSWERS = 'answers/GET_ANSWERS'
const CHANGE_ANSWERS = 'answers/CHANGE_ANSWERS'

export const getAnswers = answers => ({
    type: GET_ANSWERS,
    answers
});

export const changeAnswers = updatedAnswers => ({
    type: CHANGE_ANSWERS,
    updatedAnswers
});

export const getAllAnswers = userId => async dispatch => {
    const response = await csrfFetch(`/api/questionnaire/${userId}`, {
      method: 'GET',
    });
    if (response.ok) {
      const answers = await response.json();
      dispatch(getAnswers(answers))
      return answers;
    }
  }