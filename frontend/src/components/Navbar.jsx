import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo('accueil')}>
          <img src="/logo.png" alt="HTech Global" className="nav-logo-img" />
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <li onClick={() => scrollTo('accueil')}>Accueil</li>
          <li onClick={() => scrollTo('services')}>Services</li>
          <li onClick={() => scrollTo('fondateur')}>Fondateur</li>
          <li onClick={() => scrollTo('contact')}>
            <button className="nav-cta">Nous contacter</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
