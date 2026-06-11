import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';

const AboutApp = () => {
  const { appId } = useParams();
  const app = apps.find(a => a.id === appId);

  if (!app) return <div className="container">App not found</div>;

  return (
    <div className="container about-page">
      <nav className="crumb">
        <Link to="/" className="nav-link">← Back to the shelf</Link>
      </nav>

      <header className="about-hero" style={{ '--card-accent': app.iconGradient }}>
        <img src={app.icon} alt={app.title} className="about-main-icon" />
        <div className="about-headline">
          {app.tag && <span className="tag-chip">{app.tag}</span>}
          <h1>{app.title}</h1>
          <p className="about-tagline">{app.description}</p>
          <div className="about-actions">
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-big">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="currentColor" d="M4 3.5v17c0 .6.7 1 1.2.6l13.6-8.5c.5-.3.5-1 0-1.3L5.2 2.9C4.7 2.5 4 2.9 4 3.5Z" />
              </svg>
              Get it on Google Play
            </a>
            <Link to={`/privacy-policy/${app.id}`} className="btn btn-ghost btn-big">Privacy Policy</Link>
          </div>
        </div>
      </header>

      <section className="screenshot-gallery">
        {app.screenshots.map((src, index) => (
          <div key={index} className="phone-frame">
            <img src={src} alt={`${app.title} screenshot ${index + 1}`} className="screenshot" />
          </div>
        ))}
      </section>

      <section className="detailed-info">
        <h2>About the app</h2>
        <div className="description-text">
          {app.longDescription}
        </div>
      </section>
    </div>
  );
};

export default AboutApp;
