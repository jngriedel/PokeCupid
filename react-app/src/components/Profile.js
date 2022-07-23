import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserImages, uploadImage, deleteImage} from '../store/profileImages'

function Profile() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user)
   const userImages = useSelector(state => state.profileImages)
   const userImagesArr = Object.values(userImages)
   const [userImageCaptions, setUserImageCaptions] = useState([userImagesArr[0]?.title, userImagesArr[1]?.title, userImagesArr[2]?.title, userImagesArr[3]?.title, userImagesArr[4]?.title, userImagesArr[5]?.title ])

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


useEffect(()=> {
    if (userImagesArr) {

        setUserImageCaptions([userImagesArr[0]?.title, userImagesArr[1]?.title, userImagesArr[2]?.title, userImagesArr[3]?.title, userImagesArr[4]?.title, userImagesArr[5]?.title ])
        console.log(userImageCaptions)
    }
 },[userImages])


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


  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }
  const handleDelete = (imageId) => {
    let result = window.confirm("This photo will be gone forever. Are you Sure?");
    if (result) {
        dispatch(deleteImage(imageId))

    }
  }
  const handleEdit = (imageId) => {

        // dispatch(deleteImage(imageId))


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
      <div className='profileImages'>
        {userImagesArr[0]   &&
        <>
        {userImagesArr.map((image, i)=>
            (
        <div key = {i} >
            <div>
            <h1>{image.title}</h1>
            <button onClick={()=>handleEdit(image.id)}>Edit Caption</button>
            </div>
            <img src={image.imgUrl}/>
            <button onClick={()=>handleDelete(image.id)}>Delete</button>
        </div>
            )
        )}
        </>
        }
        {!userImagesArr[0] &&
        <><img src='https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png'/></>}
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
