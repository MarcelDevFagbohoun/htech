import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="HTech Global" className="footer-logo" />
            <p className="footer-tagline">
              Transformer vos défis en solutions numériques.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#accueil">Accueil</a>
              <a href="#services">Services</a>
              <a href="#fondateur">Fondateur</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Liens</span>
              <a href="https://adeib.site" target="_blank" rel="noreferrer">ADEIB</a>
              <a href="https://facebook.com/profile.php?id=61582188463438" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://x.com/HMarcel1601" target="_blank" rel="noreferrer">Twitter / X</a>
              <a href="https://wa.me/0152933715" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} HTech Global. Créé en 2026 — Tous droits réservés.</p>
          <p className="footer-made">Fait avec passion par HTech Global</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
