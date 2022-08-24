import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../auth/LoginForm/LoginIndex";
import "./Splash.css";
import logo from '../../images/pokecupidtextbw.png';
import splash1 from "../../images/splash1.png";
import splash2 from "../../images/splash2.png";
import splash3 from "../../images/splash3.png";
import splash4 from "../../images/splash4.png";
import splash5 from "../../images/splash5.png";


function Splash() {
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
      return <Redirect to={"/discover"} />;
    }

  return (
    <div className="splashPage">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@600&family=Libre+Franklin:wght@800&family=Nanum+Gothic&display=swap');
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
      <div className="splash-content">
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
            <li><NavLink to="/sign-up" id="splashSignup"> JOIN POKÉCUPID </NavLink></li>
          </div>
        </div>
          <div id = "splash-slides">
              <div>
                <img id="spl-1" alt="two trainers in love" src= {splash1}></img>
              </div>
              <div>
                <img id="spl-2" alt="two trainers posing happily" src= {splash2}></img>
              </div>
              <div>
                <img id="spl-3" alt="a family with their child dressed as a pokemon" src= {splash3}></img>
              </div>
              <div>
                <img id="spl-4" alt="two trainers ready for battle" src= {splash4}></img>
              </div>
              <div>
                <img id="spl-5" alt="two trainers about to face-off" src= {splash5}></img>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Splash;
