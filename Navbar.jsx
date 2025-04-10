import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/7bcb2de0ae78c46518d7f5798af3a180bdc05e6c/assets/restaurant_48px.svg"
            alt="Logo"
            className="logo-img"
          />
           Foods Restaurant
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          {/* <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link> */}
          <Link to="/cart" className="cart-link" title="View Cart">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
