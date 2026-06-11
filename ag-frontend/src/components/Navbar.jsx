import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <svg className="nav-mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="16" fill="#12162b" stroke="rgba(255,200,87,.35)" strokeWidth="2" />
            <path d="M32 10 l5.2 13.6 L51 29 l-13.8 5.4 L32 48 l-5.2-13.6 L13 29 l13.8-5.4 Z" fill="#ffc857" />
            <circle cx="45" cy="45" r="7" fill="#2dd4bf" />
          </svg>
          {/* single element so the flex gap can't split the wordmark */}
          <span className="nav-word">Abozs<span>Group</span></span>
        </Link>
        <div className="nav-links">
          <a href="mailto:abozsgroup@gmail.com" className="nav-btn">Say hi</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
