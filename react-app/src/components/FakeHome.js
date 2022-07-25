import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getAllPokemon} from '../store/pokemon'
function FakeHome() {
    const dispatch = useDispatch()
   
  return (
    <h1>My Home PlaceHolder</h1>
  );
}
export default FakeHome;
