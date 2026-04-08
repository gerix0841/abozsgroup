import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';

const AboutApp = () => {
  const { appId } = useParams();
  const app = apps.find(a => a.id === appId);

  if (!app) return <div className="container">App not found</div>;

  return (
    <div className="container about-page">
      <header className="about-hero">
        <img src={app.icon} alt={app.title} className="about-main-icon" />
        <h1>{app.title}</h1>
        <p className="about-tagline">{app.description}</p>
        <div className="about-actions">
          <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Download on Play Store
          </a>
        </div>
      </header>

      <section className="screenshot-gallery">
        {app.screenshots.map((src, index) => (
          <img key={index} src={src} alt="App Screenshot" className="screenshot" />
        ))}
      </section>

      <section className="detailed-info">
        <h2>About the App</h2>
        <div className="description-text">
          {app.longDescription}
        </div>
      </section>
    </div>
  );
};

export default AboutApp;