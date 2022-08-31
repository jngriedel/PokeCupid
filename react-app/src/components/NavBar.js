import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/pokecupidtextwhite.png";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const userImages = useSelector((state) => state.profileImages);

  return (
    <main className="navigation">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');
      </style>
      <div className="navigation-top">

        <NavLink className="navigation-left" to="/discover"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
          <img id="navLogo" src={logo} alt='poke'/>
        </NavLink>
        <div className="navigation-items">
              <li><NavLink to="/profile" 
              onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
              exact={true}className="navitem"><i className="fas fa-user"></i> My Profile</NavLink></li>

              <li><NavLink to="/discover" 
              onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
              exact={true}className="navitem"><i className="fas fa-search"></i> Discover</NavLink></li>

              <li><NavLink to="/matches" 
              onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
              exact={true}className="navitem"><i className="fas fa-heart"></i> Matches</NavLink></li>

        </div>

        <div className="navigation-right">
          {sessionUser && (
            <>
              <p className="nav-name">Welcome back, {sessionUser.name}!</p>
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default NavBar;
