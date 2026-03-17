import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.3)', borderBottomColor: 'rgba(255,255,255,0.15)' }}>
            Travaillons ensemble
          </span>
          <h2 className="contact-title">
            Parlons de<br />
            <em>votre projet</em>
          </h2>
          <p className="contact-desc">
            Vous avez une idée, un besoin ou une question ? Notre équipe vous répond
            dans les 24 heures. Aucun projet n'est trop petit.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-label">WhatsApp</span>
              <a href="https://wa.me/0152933715" target="_blank" rel="noreferrer" className="contact-detail-value">
                +01 52 93 37 15
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Facebook</span>
              <a href="https://facebook.com/profile.php?id=61582188463438" target="_blank" rel="noreferrer" className="contact-detail-value">
                HTech Global
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Twitter / X</span>
              <a href="https://x.com/HMarcel1601" target="_blank" rel="noreferrer" className="contact-detail-value">
                @HMarcel1601
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Entreprise</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou votre besoin..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="btn-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p className="form-success">Message envoyé avec succès ! Nous vous recontactons très bientôt.</p>
            )}
            {status === 'error' && (
              <p className="form-error">Une erreur est survenue. Contactez-nous directement sur WhatsApp.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
