import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserImages} from '../store/profileImages'

function Profile() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user)
   const userImages = useSelector(state => state.profileImages)

   const [errors, setErrors] = useState([]);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [gender, setGender] = useState('Male');
   const [bio, setBio] = useState('');
   const [pokemonId, setPokemonId] = useState(1);
   const [image, setImage] = useState(null);
  // const [imageLoading, setImageLoading] = useState(false);

   useEffect(()=>{
    dispatch(getUserImages(sessionUser?.id))
   },[])

const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }


  const addNewProfImg = () => {
    return
  }

 return (
    <>
    { sessionUser &&
    <div className='profileMain'>
        <div>
            {sessionUser?.name}
        </div>
        <div>
        <form onSubmit={addNewProfImg}>
        <label>Add new Profile Image:</label>
        <input
                name='image'
                type="file"
                accept="image/*"
                onChange={updateImage}
              ></input>
            <button type='submit'>Upload</button>
            </form>
      </div>
        <div>
            <h1>{userImages[1]?.title}</h1>
            <img src={userImages[1]?.imgUrl}/>
        </div>
        <div>
            {sessionUser?.bio}
        </div>

        <div>
            {sessionUser?.gender}
        </div>


    </div>
    }
    </>
 )
}
export default Profile;
