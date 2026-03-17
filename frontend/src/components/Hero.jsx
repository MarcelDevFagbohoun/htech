import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-gradient"></div>

      <div className="hero-content">
        <div className="hero-tag animate-fadeUp">
          <span className="hero-dot"></span>
          Solutions Numériques · Depuis 2026
        </div>

        <h1 className="hero-title animate-fadeUp delay-1">
          Digitalisez votre<br />
          <span className="hero-title-outline">entreprise</span><br />
          avec HTech Global
        </h1>

        <p className="hero-subtitle animate-fadeUp delay-2">
          Nous transformons vos défis opérationnels en solutions numériques<br />
          performantes, accessibles et durables — pour toutes les entreprises.
        </p>

        <div className="hero-actions animate-fadeUp delay-3">
          <button className="btn-primary" onClick={() => scrollTo('services')}>
            Découvrir nos services
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Démarrer un projet
          </button>
        </div>

        <div className="hero-stats animate-fadeUp delay-4">
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Solutions sur mesure</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">3x</span>
            <span className="stat-label">Plus rapide à déployer</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">−60%</span>
            <span className="stat-label">Moins cher que la concurrence</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Défiler</span>
      </div>
    </section>
  );
};

export default Hero;
