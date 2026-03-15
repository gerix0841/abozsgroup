import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
  return (
    <div className="card">
      <div className="app-icon" style={{ background: app.iconGradient }}></div>
      <h2>{app.title}</h2>
      <p>{app.description}</p>
      
      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn">
        Get it on Google Play
      </a>
      
      <Link to={`/privacy-policy/${app.id}`} className="btn btn-secondary">
        Privacy Policy
      </Link>
    </div>
  );
};

export default AppCard;