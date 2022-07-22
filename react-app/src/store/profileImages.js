// constants
const ADD_IMG = 'session/ADD_IMG'
const REMOVE_IMG = 'session/REMOVE_IMG';
const CHANGE_IMG = 'session/CHANGE_IMG';
const SET_IMAGES = 'session/SET_IMAGES'

const addImage = (image) => ({
  type: ADD_IMG,
  payload: image
});

const removeImage = (image) => ({
  type: REMOVE_IMG,
  payload: image
})

const setImages = (images) => ({
    type: SET_IMAGES,
    payload: images
})

const initialState = { profileImages: null };


export const getUserImages = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/images`);


  if (response.ok) {
    const data = await response.json();
    console.log(data.images)
    dispatch(setImages(data.images))
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





export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMG:
      return { user: action.payload }
    case REMOVE_IMG:
      return { user: null }
    case SET_IMAGES:
        const newState = {}
        action.payload.forEach((image)=>{
            newState[image.id] = image
        })
        return newState
    default:
      return state;
  }
}
