import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {getUserMatches} from '../store/matches'

function Matches() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  const sessionUser = useSelector(state=> state.session.user)
  const matchesState = useSelector(state=> state.matches)
  const matches = Object.values(matchesState)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
    dispatch(getUserMatches(sessionUser.id))
    .then((val)=> setIsLoaded(true))


  }, []);



  return (
    <>
    {isLoaded &&
    <div>
      <h1>Matches: </h1>
      {matches.length >= 1 &&  matches.map((match,i)=>(
        <div key ={i}>
            <div>
                <img src={match.user.id == sessionUser.id ? match.user2.profileImages[0]?.imgUrl : match.user.profileImages[0]?.imgUrl } />
            </div>
            <div>
                <h3>{match.user.id == sessionUser.id ? match.user2.name : match.user.name}</h3>
            </div>
        </div>
      )) }
      </div>
      }
    </>
  );
}

export default Matches
