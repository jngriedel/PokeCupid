// constants
const ADD_IMG = 'session/ADD_IMG'
const REMOVE_IMG = 'session/REMOVE_IMG';
const CHANGE_IMG = 'session/CHANGE_IMG';
const SET_IMAGES = 'session/SET_IMAGES'

const addImage = (image) => ({
  type: ADD_IMG,
  payload: image
});

const removeImage = (imageId) => ({
  type: REMOVE_IMG,
  payload: imageId
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
export const uploadImage = (image) => async (dispatch) => {
        dispatch(addImage(image))
}

export const deleteImage = (imageId) => async (dispatch) => {
    const response = await fetch(`/api/images/${imageId}`, {
    method: 'DELETE'}
    )
    if (response.ok) {
    const data = await response.json();
    console.log(data.imageId)
    dispatch(removeImage(data.imageId))
    return null;
  }
  else {
    return ['An error occurred. Please try again.']
  }

}




export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMG: {
      const newState = {...state}
      newState[action.payload.id] = action.payload
      return newState
    }
    case REMOVE_IMG: {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }
    case SET_IMAGES: {
        const newState = {}
        action.payload.forEach((image)=>{
            newState[image.id] = image
        })
        return newState
    }
    default:
      return state;
  }
}
