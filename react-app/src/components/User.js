import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {newMatch} from '../store/matches'

function User() {
  const sessionUser = useSelector(state => state.session.user)
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
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>

      <li>
        <strong>Name</strong> {user.name}
      </li>
    </ul>
    <button onClick={handleLike}>Like</button>
    </>
  );
}
export default User;
