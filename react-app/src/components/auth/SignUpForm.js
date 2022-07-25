import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Questionnaire from '../Questionnaire';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [bio, setBio] = useState('');
  const [pokemonId, setPokemonId] = useState(1);
  const [showSignUp, setShowSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [questionAnswers, setQuestionAnswers] = useState([])
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(questionAnswers)
  }, [questionAnswers])


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(name, email, gender, bio, pokemonId,  password));

      if (data) {
        setErrors(data)
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateGender = (e) => {
    setGender(e.target.value);
  };
  const updateBio = (e) => {
    setBio(e.target.value);
  };
  const updatePokemonId = (e) => {
    setPokemonId(e.target.value);
  };


  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={updateName}
          value={name}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" onChange={updateGender} value={gender} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Bio</label>
        <textarea name="bio" onChange={updateBio} value={bio} >

        </textarea>
      </div>
      <div>
        <label>Choose a Pokemon!</label>
        <select name="pokemonId" onChange={updatePokemonId} value={pokemonId} >
          <option value="1">Bulbasaur</option>
          <option value="2">Ivysaur</option>
          <option value="3">Venusaur</option>
          <option value="4">Charmander</option>
          <option value="5">Charmeleon</option>
          <option value="6">Charizard</option>
          <option value="7">Squirtle</option>
          <option value="8">Wartortle</option>
          <option value="9">Blastoise</option>
          <option value="10">Caterpie</option>

        </select>
      </div>

      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <Questionnaire setShowSignUp={setShowSignUp} setQuestionAnswers={setQuestionAnswers}/>
      <button style={{visibility: showSignUp ? "visible" : "hidden" }} type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
