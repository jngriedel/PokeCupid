import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {getUserMatches} from '../store/matches'
import Match from './Match'
import './Matches.css'

function Matches() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const dispatch = useDispatch()
  const sessionUser = useSelector(state=> state.session.user)
  const matchesState = useSelector(state=> state.matches)
  const matches = Object.values(matchesState)

  matches.sort((a, b) =>{
    var dateA = new Date(a.matchTime), dateB = new Date(b.matchTime)
	return dateB - dateA
  } )

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
            <div key={i}>
            <Match match={match}/>
            </div>
      )) }
      </div>
      }
      {!isLoaded && <div className="loadHold">
      <div className="loader"></div>
      </div>}
    </>
  );
}

export default Matches
