import React from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

const Home = () => (
  <div className="container">
    <header className="hero">
      <h1>Abozs Apps</h1>
      <p>Innovative mobile experiences for the global market.</p>
    </header>

    <section className="app-grid">
      {apps.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
      
      {/* Placeholder for future expansion */}
      <div className="card" style={{ opacity: 0.5 }}>
        <div className="app-icon" style={{ background: '#334155' }}></div>
        <h2>More Coming Soon</h2>
        <p>I am constantly developing new tools and games. Stay tuned!</p>
      </div>
    </section>
  </div>
);

export default Home;