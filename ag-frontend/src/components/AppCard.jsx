import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
  return (
    <article className="card" style={{ '--card-accent': app.iconGradient }}>
      {app.isNew && <span className="new-sticker">NEW</span>}

      <div className="card-top">
        <div className="app-icon-wrapper">
          <img src={app.icon} alt={`${app.title} icon`} className="app-icon-image" />
        </div>
        <div className="card-heading">
          <h2>{app.title}</h2>
          {app.tag && <span className="tag-chip">{app.tag}</span>}
        </div>
      </div>

      <p className="card-blurb">{app.description}</p>

      <div className="card-actions">
        <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path fill="currentColor" d="M4 3.5v17c0 .6.7 1 1.2.6l13.6-8.5c.5-.3.5-1 0-1.3L5.2 2.9C4.7 2.5 4 2.9 4 3.5Z" />
          </svg>
          Google Play
        </a>
        <Link to={`/about/${app.id}`} className="btn btn-ghost">
          Details
        </Link>
      </div>
      <Link to={`/privacy-policy/${app.id}`} className="privacy-link">
        Privacy Policy
      </Link>
    </article>
  );
};

export default AppCard;
