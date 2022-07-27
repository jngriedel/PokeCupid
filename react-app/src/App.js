
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Profile from './components/Profile';
// import Messages from './components/Messages/MessageRoom';
import MessageInput from './components/Messages/MessageInput';
import FakeHome from './components/FakeHome';
import Discover from "./components/Discover";
import Matches from './components/Matches';
import Splash from './components/Splash/Splash';

import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
      <Route path="/" exact={true}>
          <Splash />
        </Route>
        {/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/discover" exact={true}>
          <Discover />
        </ProtectedRoute>
        <ProtectedRoute path="/matches" exact={true}>
          <Matches/>
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>

        {/* <ProtectedRoute path='/' exact={true} >
          <FakeHome/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/messages' exact={true} >
          <MessageInput/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
