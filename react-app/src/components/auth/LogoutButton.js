import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/");
  };

  return (
    <button className="logout-button" 
    onClick={onLogout}>
      {() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
      <i className="fas fa-sign-out"></i>Logout
    </button>
  );
};

export default LogoutButton;
