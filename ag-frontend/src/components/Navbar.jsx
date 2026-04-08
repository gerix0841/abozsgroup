import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Abozs<span>Group</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">Portfolio</Link>
          <a href="mailto:abozsgroup@gmail.com" className="nav-btn">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;