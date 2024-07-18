// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, e.g., call an API
    console.log(`Logging in with username: ${'student'} and password: ${'1234'}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={()=> navigate('/appoitment')}>Login</button>
        <button type="submit">Registration</button>
        
      </form>

    </div>
  );
};

export default Login;
