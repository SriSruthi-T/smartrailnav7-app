// For App Router: app/about/page.js
// For Pages Router: pages/about.js

import React from 'react';

export default function About() {
  return (
    <main className="overlay">
      <header className="header">
        <div className="nav-container container">
          <div className="logo">SmartRailNAV</div>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/stations" className="nav-link">Stations</a>
            <a href="/about" className="nav-link cta-nav">About</a>
          </nav>
        </div>
      </header>

      <section className="hero container">
        <div>
          <h1 className="hero-title">About SmartRailNAV</h1>
          <p className="hero-subtitle">
            SmartRailNAV is your all-in-one companion for navigating railway stations, exploring facilities, and planning your journey with ease.
          </p>
          <p className="hero-subtitle">
            Our goal is to make station navigation intuitive, accessible, and informative using modern web technologies and thoughtful design.
          </p>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Our Mission</h2>
        <p>
          We aim to simplify the railway travel experience by helping users discover station features,
          plan routes, and stay informed with real-time updates and accessible resources.
        </p>

        <h2 className="section-title" style={{ marginTop: '2rem' }}>Meet the Team</h2>
        <ul>
          <li><strong>Navin:</strong> Developer and Designer</li>
          <li><strong>You:</strong> (Add more contributors here)</li>
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-nav">
          <a href="/" className="footer-link">Home</a>
          <a href="/stations" className="footer-link">Stations</a>
          <a href="/about" className="footer-link">About</a>
        </div>
        <p>© 2025 SmartRailNAV. All rights reserved.</p>
      </footer>
    </main>
  );
}
