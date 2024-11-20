import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Clear error if validation passes
    setError("");
    console.log("Email:", email, "Password:", password);
    navigate('/')
    
    // Further authentication logic here, e.g., API call
  };

  return (
    <div className="img-container">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>

        <p>Don't have an Account <Link to={'/signup'}>Sign up</Link></p>
      </form>
    
    </div>
    </div>

  );
};

export default Login;
