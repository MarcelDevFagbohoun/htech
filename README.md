# HTech Global — Site Web

Site officiel de HTech Global, développé avec React + Bootstrap (frontend) et Node.js + Express (backend).

---

## Structure du projet

```
htech/
├── public/
│   ├── index.html
│   ├── logo.png
│   └── marcel.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Services.jsx / Services.css
│   │   ├── Founder.jsx / Founder.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Footer.jsx / Footer.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── package.json
```

---

## Installation & Lancement

### 1. Frontend React

```bash
# À la racine du projet
npm install
npm start
```
Le site sera accessible sur http://localhost:3000

### 2. Backend Node.js

```bash
cd backend
npm install
```

Créer le fichier `.env` dans le dossier `backend/` :
```
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application
PORT=5000
```

> **Important** : Pour Gmail, utilisez un "Mot de passe d'application" (pas votre mot de passe habituel).
> Activez la vérification en 2 étapes → Sécurité → Mots de passe des applications.

```bash
# Lancer le backend
npm start

# Ou en mode développement (rechargement automatique)
npm run dev
```
Le backend sera accessible sur http://localhost:5000

---

## Fonctionnalités

- Page d'accueil avec statistiques et animations
- Section Services (4 services au survol)
- Page Fondateur avec photo et biographie
- Formulaire de contact avec envoi d'email (nodemailer)
  - Email reçu par HTech Global
  - Email de confirmation envoyé au client
- Navbar fixe avec scroll fluide
- Design responsive (mobile, tablette, desktop)

---

## Déploiement

### Frontend
```bash
npm run build
# Déployer le dossier build/ sur Netlify, Vercel, etc.
```

### Backend
Déployer sur Railway, Render, ou VPS.
Mettre à jour l'URL dans `src/components/Contact.jsx` :
```js
const res = await fetch('https://votre-backend.com/api/contact', ...);
```

---

HTech Global © 2026
