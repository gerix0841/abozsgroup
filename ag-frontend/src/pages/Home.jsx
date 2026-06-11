import React from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

const Home = () => {
  return (
    <main>
      <header className="hero container">
        <div className="hero-copy">
          <span className="hero-kicker">✦ tiny indie studio</span>
          <h1>
            We craft <em>pocket-sized</em> worlds.
          </h1>
          <p className="hero-sub">
            Abozs Group is a tiny studio making playful mobile apps and games
            for Android — cozy idlers, party icebreakers, and the occasional
            very serious banana.
          </p>
          <div className="hero-actions">
            <a href="#shelf" className="btn btn-gold btn-big">Browse the shelf</a>
            <a href="mailto:abozsgroup@gmail.com" className="btn btn-ghost btn-big">Get in touch</a>
          </div>
        </div>

        <div className="hero-fan" aria-hidden="true">
          {apps.map((app, i) => (
            <div key={app.id} className={`fan-card fan-${i}`} style={{ '--fan-accent': app.iconGradient }}>
              <img src={app.icon} alt="" />
            </div>
          ))}
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, n) => (
            <span key={n}>
              cozy idle ✦ party games ✦ clickers ✦ no paywalls ✦ made with heart ✦
              offline friendly ✦ pixel-polished ✦ cozy idle ✦ party games ✦ clickers ✦
              no paywalls ✦ made with heart ✦ offline friendly ✦ pixel-polished ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section id="shelf" className="container shelf">
        <div className="shelf-label">
          <h2>On the shelf</h2>
          <span className="shelf-count">{apps.length} apps &amp; counting</span>
        </div>

        <div className="app-grid">
          {apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}

          <article className="card upcoming">
            <div className="card-top">
              <div className="app-icon-wrapper upcoming-icon">
                <span>✦</span>
              </div>
              <div className="card-heading">
                <h2>Something's in the oven</h2>
                <span className="tag-chip">Top secret</span>
              </div>
            </div>
            <p className="card-blurb">
              The next pocket-sized world is already being stitched together.
              Check back soon — or write to us and guess what it is.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Abozs<span>Group</span></span>
            <p>Small studio. Big play.</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:abozsgroup@gmail.com">abozsgroup@gmail.com</a>
            <p>&copy; {new Date().getFullYear()} Abozs Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
