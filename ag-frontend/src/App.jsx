import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './index.css';

/**
 * Main Application Component
 * Using React Router for seamless navigation.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy/:appId?" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;