import React, { useEffect, useState } from "react";
import "./Discover.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Discover() {
  const [users, setUsers] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users?.map((user) => {
    return (
      <li key={user?.id}>
        <div className="discover-div">
          <NavLink to={`/users/${user?.id}`} className="discover-name">
            {user?.name}
          </NavLink>
          <NavLink to={`/users/${user?.id}`}>
            <img className="discover-images" src={user.profileImages}></img>
          </NavLink>
          {/* <p>{user.title}</p> */}
        </div>
      </li>
    );
  });

  return (
    <>
      <h1>Discover: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default Discover;
