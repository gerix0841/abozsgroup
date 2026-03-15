import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
  <div className="container">
    <nav>
      <Link to="/" className="nav-link">← Back to Portfolio</Link>
    </nav>
    <article className="policy-content">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <section>
        <h2>General Information</h2>
        <p>Abozs Group build apps as Free/Commercial apps. This service is provided by Abozs Group at no cost and is intended for use as is.</p>
      </section>

      <section>
        <h2>Data Collection and Use</h2>
        <p>We do not collect or share any personal user data. For a better experience, while using our service, we may require you to provide us with certain personally identifiable information, but this is kept locally on your device.</p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>The app does use third-party services that may collect information used to identify you (e.g., Google Play Services).</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>support@abozsgroup.com</strong>.</p>
      </section>
    </article>
  </div>
);

export default PrivacyPolicy;