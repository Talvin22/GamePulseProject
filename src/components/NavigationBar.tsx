// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import img from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">

      <div className="navbar-content">
        <div className="navbar-logo" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src={img} alt="Logo" />
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/rating">Rating</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
