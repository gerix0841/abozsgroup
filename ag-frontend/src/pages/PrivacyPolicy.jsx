import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { apps } from '../data/apps';

const PrivacyPolicy = () => {
  const { appId } = useParams();
  
  // Find the specific app based on the URL ID, or default to the first one
  const app = apps.find(a => a.id === appId) || apps[0];

  return (
    <div className="container">
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" className="nav-link">← Back to Portfolio</Link>
      </nav>
      
      <article className="policy-content">
        <h1>Privacy Policy for {app.title}</h1>
        <p className="last-updated">Effective Date: {app.policy.effectiveDate}</p>
        
        {/* We use dangerouslySetInnerHTML to render the formatted policy string */}
        <div 
          className="policy-body" 
          dangerouslySetInnerHTML={{ __html: app.policy.content }} 
        />
      </article>
    </div>
  );
};

export default PrivacyPolicy;