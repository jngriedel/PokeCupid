import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <ul>
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
