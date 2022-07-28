import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/pokecupidtextwhite.png";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);
  // const userImagesArr = Object.values(userImages);
  // const thumbnail = userImagesArr[0].imgUrl;
  
  return (
    <main className="navigation">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap');
      </style>
      <div className="navigation-top">
        <div className="navigation-left">
          <img id="navLogo" src={logo} alt='poke'/>
        </div>
        <div className="navigation-items">
              <li><NavLink to="/profile" exact={true}className="navitem"><i className="fas fa-user"></i> My Profile</NavLink></li>

              <li><NavLink to="/discover" exact={true}className="navitem"><i className="fas fa-search"></i> Discover</NavLink></li>

              <li><NavLink to="/matches" exact={true}className="navitem"><i className="fas fa-heart"></i> My Matches</NavLink></li>
        </div>

              <div className="navigation-right">
                <p className="nav-name">
                  Welcome back, {sessionUser.name}!
                </p>
                <LogoutButton/>    
              </div>
        
      </div>
    </main>
  );
  //   <div id="navbar">
  //     <ul className="navbarList">
  //       <li id="list">
  //         <NavLink to="/" exact={true} activeClassName="active">
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/login" exact={true} activeClassName="active">
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/sign-up" exact={true} activeClassName="active">
  //           Sign Up
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/discover" exact={true} activeClassName="active">
  //           Discover
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/matches" exact={true} activeClassName="active">
  //           Matches
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/profile" exact={true} activeClassName="active">
  //           My Profile
  //         </NavLink>
  //       </li>
  //       <li>
  //         <LogoutButton />
  //       </li>
  //     </ul>
  //   </div>
  // );
};

export default NavBar;
