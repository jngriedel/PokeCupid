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
        <NavLink className="navigation-left" to="/discover">
          <img id="navLogo" src={logo} alt='poke'/>
        </NavLink>
        <div className="navigation-items">
              <li><NavLink to="/profile" exact={true}className="navitem"><i className="fas fa-user"></i> My Profile</NavLink></li>

              <li><NavLink to="/discover" exact={true}className="navitem"><i className="fas fa-search"></i> Discover</NavLink></li>

              <li><NavLink to="/matches" exact={true}className="navitem"><i className="fas fa-heart"></i> Matches</NavLink></li>
        </div>

              <div className="navigation-right">
                {sessionUser && <> <p className="nav-name">
                  Welcome back, {sessionUser.name}!
                </p>
                <LogoutButton/>
                </>}

              </div>
      </div>
    </main>
  );
};

export default NavBar;
