import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Profile from "./components/Profile";
import MessageInput from "./components/Messages/MessageInput";
import Discover from "./components/Discover";
import Matches from "./components/Matches";
import Splash from "./components/Splash/Splash";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import { authenticate } from "./store/session";

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
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Splash />
          </Route>
          <Route path="/sign-up" exact={true}>
            {/* <NavBar /> */}
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/profile" exact={true}>
            <NavBar />
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute path="/discover" exact={true}>
            <NavBar />
            <Discover />
          </ProtectedRoute>
          <ProtectedRoute path="/matches" exact={true}>
            <NavBar />
            <Matches />
          </ProtectedRoute>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <NavBar />
            <User />
          </ProtectedRoute>
          <Route>
            <NotFound path="*" exact={true} />
          </Route>
          <ProtectedRoute path="/messages" exact={true}>
            <NavBar />
            <MessageInput />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
