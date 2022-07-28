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
    .then((val)=>{
      setTimeout(() => {
        setIsLoaded(true)
      }, 1000)
    })


  }, []);



  return (
    <>
    {isLoaded &&
    <div className='matches-main'>
      <div className='message-title'>
        <h1>Matches: </h1>
      </div>
      {matches.length >= 1 &&  matches.map((match,i)=>(
            <div key={i}>
            <Match match={match}/>
            </div>
      )) }
      {matches.length == 0 &&
      <h2>Looks Empty in Here! Go get matching!</h2>}
      </div>
      }
      {!isLoaded && <div className="loadHold">
      <div className="loader"></div>
      </div>}
    </>
  );
}

export default Matches
