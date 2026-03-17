import React from 'react';

const services = [
  {
    number: '01', icon: '🌐',
    title: 'Création de Sites Web',
    description: 'Sites vitrines, e-commerce et portails sur mesure. Chaque projet est conçu pour refléter votre identité et convertir vos visiteurs en clients.',
    details: ['Design responsive & moderne', 'Optimisation SEO avancée', 'Performance & rapidité']
  },
  {
    number: '02', icon: '⚙️',
    title: 'Développement de Plateformes',
    description: 'Plateformes métiers complexes, applications web et systèmes de gestion adaptés à vos processus opérationnels spécifiques.',
    details: ['Architecture scalable', 'API & intégrations tierces', 'Tableau de bord personnalisé']
  },
  {
    number: '03', icon: '💡',
    title: 'Projets Numériques',
    description: 'Accompagnement complet dans la conception et le déploiement de vos projets digitaux, de l\'idée à la mise en production.',
    details: ['Conseil & stratégie digitale', 'Prototypage rapide', 'Suivi & maintenance']
  },
  {
    number: '04', icon: '📊',
    title: 'Digitalisation d\'Activités',
    description: 'Transformez vos processus manuels en workflows numériques efficaces. Gagnez du temps et réduisez vos coûts opérationnels.',
    details: ['Automatisation des tâches', 'Outils de gestion interne', 'Formation & support continu']
  }
];

const Services = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="section-tag">Ce que nous faisons</span>
        <h2 className="section-title">
          Des solutions <em>taillées</em><br />pour votre succès
        </h2>
        <p className="section-subtitle">
          Accessibles, efficaces et déployées rapidement — nous rendons la technologie
          utile à toutes les entreprises, quelle que soit leur taille.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className="service-number">{s.number}</span>
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.description}</p>
            <ul className="service-details">
              {s.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <p>Un projet en tête ? Parlons-en.</p>
        <button className="btn-blue" onClick={() => scrollTo('contact')}>
          Demander un devis gratuit
        </button>
      </div>
    </section>
  );
};

export default Services;