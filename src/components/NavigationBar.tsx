// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import img from '../images/Logo.png';

const NavigationBar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={img} alt="Logo" />
        </Link>
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
