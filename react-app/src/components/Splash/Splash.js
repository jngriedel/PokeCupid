import React from "react";
import { Navlink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../auth/LoginForm/LoginIndex";
import "./Splash.css";
import logo from '../../images/pokecupidtextbw.png';

function Splash() {
    const sessionUser = useSelector((state) => state.session.user);
  
    if (sessionUser) {
      return <Redirect to={"/discover"} />;
    }
  
  return (
    <div className="splashPage">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@800&family=Nanum+Gothic&display=swap');
      </style>
      <div className = "content">
        <div className = "header">
          <img id="splashLogo" src={logo} alt='poke'/>
          <div className = "loginbox">
            <p className = "accq">
              Have an account?
            </p>   
            <LoginFormModal/>
          </div>
        </div>
      <div className= "splashText">
        <h1 id = "splashmainText">
          A MATCH FOR EVERY SINGLE TRAINER
        </h1>
      </div>
        <div className= "splashSub">
          <p id = "splashSubtitle">
            PokéCupid is the only app that matches you on what matters to you. 
            You deserve to find the trainer you’re looking for. A world of
            dreams and adventures awaits! Let's go!
          </p>
        </div>
      </div>

    </div>
  );
}

export default Splash;
