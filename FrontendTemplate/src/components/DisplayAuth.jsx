import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../AuthService';
import Login from './Login';
import Register from './Register';

const DisplayAuth = () => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    setAuthStatus(isAuthenticated());
  }, []);

  return (
    <div>
      {authStatus ? (
        <>
          <h1>Welcome back!</h1>
          <Logout />
        </>
      ) : (
        <>
          <h1>Please Log In</h1>
          <Login />
          <h1>Or Register</h1>
          <Register />
        </>
      )}
    </div>
  );
};

export default DisplayAuth;