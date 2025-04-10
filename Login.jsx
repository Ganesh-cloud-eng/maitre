import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" /><br />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" /><br />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;