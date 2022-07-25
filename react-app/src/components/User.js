import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {newMatch} from '../store/matches'
import {getUserImages} from '../store/profileImages'

function User() {
  const sessionUser = useSelector(state => state.session.user)
  const userImages = useSelector(state => state.profileImages)
  const userImagesArr = Object.values(userImages)
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  useEffect(() => {

    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
      console.log(user)
      dispatch(getUserImages(user.id))
    })();
  }, [userId]);

  if (!user) {
    return null;
  }


  const handleLike = () => {
    dispatch(newMatch(sessionUser.id, userId))
  }

  return (
    <>

      <div>User Id</div>
      <div>{userId}</div>
      <button onClick={handleLike}>Like</button>
      <div>Name</div> {user.name}
      <div className='profileImages'>
        {userImagesArr[0]   &&
        <>
        {userImagesArr.map((image, i)=>
            (
        <div key = {i} >
            <div>
            {image.title}
            </div>
            <img src={image.imgUrl}/>

        </div>
            )
        )}
        </>
        }
        {!userImagesArr[0] &&
        <><img src='https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png'/></>}
    </div>
        <div>
            <img src={user?.pokemon?.imgUrl}/>
        </div>

      <div>
        {user.bio}
      </div>

      <div>
        {user.gender}
      </div>
    </>
  );
}
export default User;
