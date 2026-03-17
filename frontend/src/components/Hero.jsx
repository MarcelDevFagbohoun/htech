import React from 'react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge animate-fadeUp">
            <span className="hero-dot"></span>
            Solutions Numériques · Créé 2026
          </div>

          <h1 className="hero-title animate-fadeUp delay-1">
            Transformez votre<br />
            <span className="hero-title-blue">entreprise</span><br />
            <span className="hero-title-outline">numériquement</span>
          </h1>

          <p className="hero-subtitle animate-fadeUp delay-2">
            HTech Global accompagne les entreprises dans leur transformation
            digitale — des solutions accessibles, efficaces et déployées rapidement.
          </p>

          <div className="hero-actions animate-fadeUp delay-3">
            <button className="btn-blue" onClick={() => scrollTo('services')}>
              Nos services
            </button>
            <button
              className="btn-outline"
              style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.3)' }}
              onClick={() => scrollTo('contact')}
            >
              Démarrer un projet
            </button>
          </div>

          <div className="hero-stats animate-fadeUp delay-4">
            <div className="stat-item">
              <span className="stat-num">100<span>%</span></span>
              <span className="stat-label">Sur mesure</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">−60<span>%</span></span>
              <span className="stat-label">Moins cher</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3<span>×</span></span>
              <span className="stat-label">Plus rapide</span>
            </div>
          </div>
        </div>

        <div className="hero-right animate-fadeIn delay-2">
          <div className="hero-card-stack">
            <div className="hero-card hero-card-back-2"></div>
            <div className="hero-card hero-card-back-1"></div>
            <div className="hero-card hero-card-main">
              <div className="hero-card-icon">🚀</div>
              <div className="hero-card-title">Digitalisation</div>
              <div className="hero-card-desc">
                Vos processus métiers transformés en solutions numériques performantes.
              </div>
              <div className="hero-card-tags">
                <span className="hero-card-tag">Web App</span>
                <span className="hero-card-tag">Plateforme</span>
                <span className="hero-card-tag">API</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-arrow">↓</span>
        <span>Défiler</span>
      </div>
    </section>
  );
};

export default Hero;