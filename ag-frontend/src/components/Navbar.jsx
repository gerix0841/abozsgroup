import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Bar Component
 * Provides a consistent top menu across all pages.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Site Name - Clicking this always returns to Home */}
        <Link to="/" className="nav-logo">
          Abozs<span>Apps</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-item">Apps</Link>
          <Link to="/privacy-policy" className="nav-item">Privacy</Link>
          {/* You can add more links here as you grow (e.g., Contact, About) */}
          <a 
            href="mailto:support@abozsgroup.com" 
            className="nav-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;