import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import "./LoginForm.css";

const LoginForm = () => {
  // const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/discover" />;
  }

  return (
    <form onSubmit={onLogin} className="login-container">
      <div className="login-content">
        <h3 className="login-title">Enter email and password</h3>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor="email" className="login-label">
            Email
          </label>
        </div>
        <div>
          <input
            className="login-input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor="password" className="login-label">
            Password
          </label>
        </div>
        <div>
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button type="submit" id='loginBtn'>Login</button>
        </div>
        <div className="login-or">
          <div className="before-or"></div>
          <div className='login-or-txt'>or</div>
          <div className="after-or"></div>
        </div>
        <button type='button' onClick={demoUser}className="button" id="demoBtn" type="submit">
          Log In As A Guest
        </button>

      </div>
    </form>
  );
};

export default LoginForm;
