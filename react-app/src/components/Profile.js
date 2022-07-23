import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserImages, uploadImage} from '../store/profileImages'

function Profile() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user)
   const userImages = useSelector(state => state.profileImages)

//    const [errors, setErrors] = useState([]);
//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [gender, setGender] = useState('Male');
//    const [bio, setBio] = useState('');
//    const [pokemonId, setPokemonId] = useState(1);
   const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

   useEffect(()=>{
    dispatch(getUserImages(sessionUser?.id))
   },[])


const addNewProfImg = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    const res = await fetch(`/api/users/${sessionUser.id}/images`, {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        const data = await res.json();
        setImageLoading(false);

        await dispatch(uploadImage(data.image))

    }
    else {
        setImageLoading(false);
        // a real app would probably use more advanced
        // error handling

    }


    // const res = await dispatch(uploadImage(sessionUser.id, image))

    // if (res.ok) {
    //     await res.json();
    //     setImageLoading(false);
    //     console.log('Sucess')
    // }
    // else {
    //     setImageLoading(false);

    //     // a real app would probably use more advanced
    //     // error handling
    //     console.log('Fail');
    // }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
            {(imageLoading)&& <p>Uploading Image...</p>}
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
