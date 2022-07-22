import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserImages} from '../store/profileImages'

function Profile() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user)

   const [errors, setErrors] = useState([]);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [gender, setGender] = useState('Male');
   const [bio, setBio] = useState('');
   const [pokemonId, setPokemonId] = useState(1);

   useEffect(()=>{
    dispatch(getUserImages(sessionUser?.id))
   },[])



 return (
    <>
    { sessionUser &&
    <div className='profileMain'>
        <div>
            {sessionUser?.name}
        </div>
        <div>
            <img src={sessionUser.imgUrl}/>
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
