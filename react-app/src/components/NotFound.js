import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    setTimeout(() => {
      if (sessionUser) {
        history.push("/discover");
      } else {
        history.push("/");
      }
    }, 7000);
  }, [history, sessionUser]);

  return (
    <div className="splashPage">
      <h1 className="not-found">404: PAGE NOT FOUND</h1>
      <p className="not-found-p">
        It looks like the page you navigated to either doesn't exist, or you
        don't have the proper permissions to view. Redirecting you!{" "}
      </p>
      <img
        className="missingno"
        alt="missing number sprite"
        src="https://wiki.p-insurgence.com/images/0/09/722.png"
      ></img>
      <img
        alt="missing number text"
        className="missingno-text"
        src="https://i.imgur.com/RvMthWV.png"
      ></img>
    </div>
  );
};

export default NotFound;
