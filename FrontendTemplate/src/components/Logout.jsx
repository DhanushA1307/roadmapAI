import React from 'react';
import { logout } from '../AuthService';

const Logout = () => {
  const handleLogout = () => {
    logout();
    alert("You have logged out successfully!");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
