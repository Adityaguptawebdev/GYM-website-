import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  // Ensure axios is imported for making API requests
import "./Signup.css";
import './Login.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    try {
      const response = await axios.post('http://localhost:3005/api/auth/signup', {
        name,
        email,
        password,
        confirmPassword,
      });
      if (response.data.success) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
      
      alert("Unable to sign up", error.message);
    }
  };

  return (
    <div className="img-container">
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Sign in</Link></p>
      </div>
    </div>
  );
};

export default Signup;