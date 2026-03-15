import React from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

const Home = () => {
  return (
    <main className="container">
      <header className="hero">
        <h1>AbozsGroup Applications</h1>
        <p>Crafting high-quality mobile experiences for Android users worldwide.</p>
      </header>

      <section className="app-grid">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
        
        <div className="card upcoming">
          <div className="app-icon-wrapper">
            {/* Empty or simple placeholder icon */}
          </div>
          <h2>Coming Soon</h2>
          <p>More exciting projects are currently in development.</p>
        </div>
      </section>

      <footer className="footer" style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.5 }}>
        <p>&copy; {new Date().getFullYear()} Abozs Group. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;