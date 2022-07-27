import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  
  return (
    // <header className="nav-ele">
    //     <div class="nav-container">
    //       <div class="logo">
    //         <img id="splashLogo" src={logo} />
    //         <h1>Bottlenote</h1>
    //       </div>
    //       <nav>
    //         <ul>
    //           {/* <li>
    //           <a href="/about">About</a>
    //         </li> */}
    //           <li>
    //             <LoginFormModal className="button login" />
    //           </li>
    //           <li>
    //             <SignupFormModal className="signup-button" />
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </header>
    <div id="navbar">
      <ul className="navbarList">
        <li id="list">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/discover" exact={true} activeClassName="active">
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to="/matches" exact={true} activeClassName="active">
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" exact={true} activeClassName="active">
            My Profile
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
