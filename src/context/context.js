import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const API = 'https://api-js401.herokuapp.com';

export const LoginContext = React.createContext();

let secret = 'supersecret';

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (username, password) => {
    try {
      let res = await superagent.post(`${API}/signin`).set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
      await validateToken(res.body.token);
    } catch (e) {
      console.error(e.message);
    }
  };

  const validateToken = (token) => {
    try {
      let user = jwt.verify(token, secret);
      console.log('all good');
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const setLoginState = (loggedIn, token, user) => {
    setUser(user);
    cookie.save('auth', token);
    setLoggedIn(!loggedIn);
  };

  const state = {
    loggedIn,
    login,
    logout,
    user,
  };

  return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
}

export default LoginProvider;
