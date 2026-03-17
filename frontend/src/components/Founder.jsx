import React from 'react';

const Founder = () => {
  return (
    <section id="fondateur" className="founder-section">
      <div className="founder-container">
        <div className="founder-image-col">
          <div className="founder-img-wrapper">
            <img src="/marcel.jpg" alt="Marcel Houmenou Fagbohoun" className="founder-img" />
            <div className="founder-img-border"></div>
            <div className="founder-badge-float">
              Fondateur<br />& CEO
            </div>
          </div>
          <div className="founder-social">
            <a href="https://facebook.com/profile.php?id=61582188463438" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
            <span className="social-sep">·</span>
            <a href="https://x.com/HMarcel1601" target="_blank" rel="noreferrer" className="social-link">X (Twitter)</a>
            <span className="social-sep">·</span>
            <a href="https://wa.me/0152933715" target="_blank" rel="noreferrer" className="social-link">WhatsApp</a>
          </div>
        </div>

        <div className="founder-text-col">
          <span className="section-tag">Le Fondateur</span>

          <h2 className="founder-name">
            Marcel<br />
            <span className="founder-name-accent">Houmenou</span><br />
            Fagbohoun
          </h2>

          <div className="founder-role">
            <span>Fondateur & CEO, HTech Global</span>
            <span className="role-sep">·</span>
            <a href="https://adeib.site" target="_blank" rel="noreferrer" className="founder-adeib">
              Président de l'ADEIB
            </a>
          </div>

          <div className="founder-divider"></div>

          <p className="founder-bio">
            Entrepreneur engagé dans la transformation numérique du continent africain,
            Marcel Houmenou Fagbohoun a fondé HTech Global avec une conviction claire :
            la technologie doit être un levier d'émancipation économique, accessible à
            toutes les entreprises, sans distinction de taille.
          </p>

          <p className="founder-bio">
            Président de l'Association pour le Développement de l'Entrepreneuriat
            et l'Innovation au Bénin (ADEIB), il accompagne au quotidien les
            entrepreneurs locaux dans leur montée en compétences et leur digitalisation.
          </p>

          <blockquote className="founder-quote">
            "Mon objectif est d'aider les entreprises à résoudre leurs problèmes par
            des apports numériques — moins chers, très efficaces, et pensés pour durer."
          </blockquote>

          <div className="founder-badges">
            <span className="badge-item">Innovation Digitale</span>
            <span className="badge-item">Entrepreneuriat</span>
            <span className="badge-item">Développement Web</span>
            <span className="badge-item">Stratégie Numérique</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;