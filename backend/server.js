const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' });
  }

  const mailToHTech = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `[HTech Global] Nouveau message de ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f8f8; padding: 40px; border-radius: 8px;">
        <div style="background: #111; padding: 24px; border-radius: 6px; margin-bottom: 32px; text-align: center;">
          <h1 style="color: white; font-size: 22px; margin: 0;">HTech Global</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 8px 0 0;">Nouveau message reçu</p>
        </div>

        <div style="background: white; padding: 32px; border-radius: 6px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888; width: 120px;">Nom</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111;">
                <a href="mailto:${email}" style="color: #111;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Entreprise</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111;">${company || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 13px; color: #888; margin-bottom: 10px;">Message :</p>
            <p style="font-size: 15px; color: #333; line-height: 1.7; background: #f8f8f8; padding: 16px; border-left: 3px solid #111; border-radius: 2px;">
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
        </div>

        <p style="text-align: center; font-size: 12px; color: #bbb; margin-top: 24px;">
          HTech Global · Solutions Numériques · 2026
        </p>
      </div>
    `
  };

  const mailToClient = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Votre message a bien été reçu — HTech Global`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f8f8; padding: 40px; border-radius: 8px;">
        <div style="background: #111; padding: 24px; border-radius: 6px; margin-bottom: 32px; text-align: center;">
          <h1 style="color: white; font-size: 22px; margin: 0;">HTech Global</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 8px 0 0;">Solutions Numériques</p>
        </div>

        <div style="background: white; padding: 32px; border-radius: 6px; border: 1px solid #e0e0e0;">
          <h2 style="font-size: 20px; color: #111; margin-top: 0;">Bonjour ${name},</h2>
          <p style="font-size: 15px; color: #555; line-height: 1.7;">
            Nous avons bien reçu votre message et nous vous en remercions.
            Notre équipe vous répondra dans les <strong>24 heures</strong>.
          </p>
          <p style="font-size: 15px; color: #555; line-height: 1.7;">
            En attendant, n'hésitez pas à nous rejoindre directement sur
            <a href="https://wa.me/0152933715" style="color: #111; font-weight: 600;">WhatsApp</a>
            pour toute urgence.
          </p>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f0f0f0;">
            <p style="font-size: 13px; color: #888; margin: 0;">Votre résumé :</p>
            <p style="font-size: 14px; color: #333; background: #f8f8f8; padding: 14px; border-left: 3px solid #111; margin-top: 10px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
        </div>

        <p style="text-align: center; font-size: 12px; color: #bbb; margin-top: 24px;">
          © 2026 HTech Global · Tous droits réservés
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailToHTech);
    await transporter.sendMail(mailToClient);
    res.status(200).json({ message: 'Email envoyé avec succès.' });
  } catch (err) {
    console.error('Erreur email :', err);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
  }
});

app.get('/', (req, res) => {
  res.json({ status: 'HTech Global API en ligne' });
});

app.listen(PORT, () => {
  console.log(`Serveur HTech Global démarré sur le port ${PORT}`);
});
