import React from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

const Home = () => {
  return (
    <main className="container">
      <header className="hero">
        <span className="hero-badge">Portfolio</span>
        <h1>Our Applications</h1>
        <p>Crafting high-quality mobile experiences for Android users worldwide.</p>
      </header>

      <section className="app-grid">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}

        <div className="card upcoming">
          <div className="app-icon-wrapper upcoming-icon">
            <span>?</span>
          </div>
          <h2>Coming Soon</h2>
          <p>More exciting projects are currently in development. Stay tuned.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abozs Group. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;