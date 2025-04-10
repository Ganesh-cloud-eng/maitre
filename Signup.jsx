// src/pages/Signup.jsx
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="signup-button">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
