import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
  return (
    <div className="card" style={{ '--card-accent': app.iconGradient }}>
      <div className="app-icon-wrapper">
        <img src={app.icon} alt={`${app.title} icon`} className="app-icon-image" />
      </div>
      <h2>{app.title}</h2>
      <p>{app.description}</p>

      <div className="card-actions">
        <Link to={`/about/${app.id}`} className="btn btn-primary">
          More Info
        </Link>
        <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-play">
          Google Play
        </a>
      </div>
      <Link to={`/privacy-policy/${app.id}`} className="privacy-link">
        Privacy Policy
      </Link>
    </div>
  );
};

export default AppCard;