import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChartLine, FaWallet, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaChartLine className="logo-icon" />
          Zerodha Clone
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          {token && (
            <>
              <li>
                <Link to="/dashboard">
                  <FaWallet /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/markets">
                  <FaChartLine /> Markets
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="navbar-right">
          {token ? (
            <>
              <span className="user-name">
                <FaUser /> {user?.name}
              </span>
              <button onClick={handleLogout} className="btn btn-logout">
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
