// Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import your CSS file for styling

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Here you can implement your registration logic, e.g., call an API
    console.log(`Registering with username: ${username}, email: ${email}, and password: ${password}`);

    // Example: Navigate to another route after successful registration
    navigate('/login'); // Replace '/login' with the actual route you want to navigate to
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <button onClick={() => navigate('/')}>back to Login</button>
      </form>
    
    </div>
  );
};

export default Registration;
