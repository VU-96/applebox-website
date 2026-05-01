/* ═══════════════════════════════════════════
   APPLEBOX — CONTACT FORM BACKEND  v2.0
   Node.js + Express + Nodemailer
═══════════════════════════════════════════ */

'use strict';

const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');
const crypto     = require('crypto');

const app  = express();
const PORT = process.env.PORT || 4000;

/* ─────────────────────────────────────────
   LOGGING UTILITY
───────────────────────────────────────── */
const log = {
  info:  (...a) => console.log(`[${new Date().toISOString()}] [INFO]`, ...a),
  warn:  (...a) => console.warn(`[${new Date().toISOString()}] [WARN]`, ...a),
  error: (...a) => console.error(`[${new Date().toISOString()}] [ERROR]`, ...a),
};

/* ─────────────────────────────────────────
   MIDDLEWARE
───────────────────────────────────────── */
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*', /* tighten in production */
  methods: ['GET', 'POST'],
}));
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

/* ─────────────────────────────────────────
   BASIC RATE LIMITER (in-memory)
   Allows max 5 requests per IP per 10 minutes.
   For production, replace with express-rate-limit + Redis.
───────────────────────────────────────── */
const rateLimitMap = new Map();
const RATE_WINDOW_MS  = 10 * 60 * 1000; /* 10 minutes */
const RATE_MAX_HITS   = 5;

function rateLimit(req, res, next) {
  const ip  = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const key = crypto.createHash('sha256').update(ip).digest('hex').slice(0, 12);
  const now = Date.now();

  const entry = rateLimitMap.get(key) || { count: 0, resetAt: now + RATE_WINDOW_MS };

  if (now > entry.resetAt) {
    entry.count   = 0;
    entry.resetAt = now + RATE_WINDOW_MS;
  }

  entry.count++;
  rateLimitMap.set(key, entry);

  if (entry.count > RATE_MAX_HITS) {
    log.warn('Rate limit exceeded', { key });
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a few minutes before trying again.',
    });
  }

  next();
}

/* Clean the map periodically to prevent memory leaks */
setInterval(function () {
  const now = Date.now();
  rateLimitMap.forEach(function (v, k) {
    if (now > v.resetAt) rateLimitMap.delete(k);
  });
}, RATE_WINDOW_MS);

/* ─────────────────────────────────────────
   SPAM KEYWORDS (basic honeypot check)
───────────────────────────────────────── */
const SPAM_KEYWORDS = ['casino', 'bitcoin', 'crypto', 'forex', 'click here', 'free money', 'make money'];

function isSpam(data) {
  const blob = [data.name, data.company, data.projectBrief].join(' ').toLowerCase();
  return SPAM_KEYWORDS.some(function (kw) { return blob.includes(kw); });
}

/* ─────────────────────────────────────────
   EMAIL TRANSPORTER
   Configured for Microsoft 365 / Office 365.
   Credentials come from environment variables —
   never hardcode passwords in source code.

   To run locally:
     export SMTP_PASS="your-password-here"
     npm start
───────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'applebox950@gmail.com',
    pass: process.env.SMTP_PASS   // ✅ ADD THIS LINE
  }
});

/* Verify transporter on startup */
transporter.verify(function (err) {
  if (err) {
    log.warn('SMTP verification failed — email may not send until credentials are set:', err.message);
  } else {
    log.info('SMTP transporter ready.');
  }
});

/* ─────────────────────────────────────────
   INPUT SANITISER — strips HTML tags
───────────────────────────────────────── */
function sanitise(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  }).trim().slice(0, 2000);
}

/* ─────────────────────────────────────────
   EMAIL BUILDERS
───────────────────────────────────────── */
function buildPlainText(d) {
  return [
    'New Inquiry — AppleBox Production Services',
    '═══════════════════════════════════════════',
    '',
    `Priority:      ${d.priority      || '—'}`,
    `Name:          ${d.name          || '—'}`,
    `Company:       ${d.company       || '—'}`,
    `Email:         ${d.email         || '—'}`,
    '',
    `Support Type:  ${d.supportType   || '—'}`,
    `Project Type:  ${d.projectType   || '—'}`,
    `Shoot Dates:   ${d.shootDates    || '—'}`,
    `Crew Size:     ${d.crewSize      || '—'}`,
    '',
    'Brief:',
    d.projectBrief || '—',
    '',
    '───────────────────────────────────────────',
    'Sent via applebox.sa contact form',
  ].join('\n');
}

function buildHtml(d) {
  function row(label, value) {
    return `
      <tr>
        <td style="padding:10px 20px;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#888;white-space:nowrap;border-bottom:1px solid #f0f0f0;background:#fafafa;width:160px;">${label}</td>
        <td style="padding:10px 20px;font-size:14px;color:#111;border-bottom:1px solid #f0f0f0;">${value || '<span style="color:#bbb;">—</span>'}</td>
      </tr>`;
  }

  const priorityColor = {
    '🔴 HIGH PRIORITY': '#c0392b',
    '🟡 STANDARD':      '#d4a017',
    '🟢 QUICK RESPONSE':'#27ae60',
  }[d.priority] || '#888';

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#f2f2f2;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f2;padding:40px 0;">
  <tr><td align="center">
  <table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.1);">

    <!-- HEADER -->
    <tr>
      <td style="background:#080808;padding:28px 32px 20px;">
        <p style="margin:0;font-size:24px;font-weight:700;color:#fff;letter-spacing:3px;">APPLE BOX</p>
        <p style="margin:6px 0 0;font-size:10px;color:#6abf2e;letter-spacing:3px;text-transform:uppercase;">Production Services · Saudi Arabia</p>
      </td>
    </tr>

    <!-- PRIORITY BANNER -->
    <tr>
      <td style="background:${priorityColor};padding:8px 32px;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;">${d.priority || 'NEW INQUIRY'}</p>
      </td>
    </tr>

    <!-- CONTACT FIELDS -->
    <tr><td style="padding:0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Name',         d.name)}
        ${row('Company',      d.company)}
        ${row('Email',        `<a href="mailto:${d.email}" style="color:#6abf2e;text-decoration:none;">${d.email}</a>`)}
        ${row('Support Type', d.supportType)}
        ${row('Project Type', d.projectType)}
        ${row('Shoot Dates',  d.shootDates)}
        ${row('Crew Size',    d.crewSize)}
      </table>
    </td></tr>

    <!-- BRIEF -->
    <tr>
      <td style="padding:24px 32px 28px;">
        <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#aaa;">Project Brief</p>
        <p style="margin:0;font-size:14px;line-height:1.8;color:#333;white-space:pre-wrap;">${d.projectBrief || '—'}</p>
      </td>
    </tr>

    <!-- CTA STRIP -->
    <tr>
      <td style="background:#080808;padding:20px 32px;text-align:center;">
        <a href="mailto:${d.email}" style="display:inline-block;background:#6abf2e;color:#000;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 28px;">Reply to ${d.name || 'Sender'}</a>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="padding:14px 32px;background:#f7f7f7;border-top:1px solid #eee;">
        <p style="margin:0;font-size:11px;color:#bbb;">Sent via applebox.sa contact form · ${new Date().toLocaleString('en-SA', { timeZone: 'Asia/Riyadh' })} KSA</p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>
</body>
</html>`.trim();
}

/* ─────────────────────────────────────────
   ROUTE — POST /send-email
───────────────────────────────────────── */
app.post('/send-email', rateLimit, async function (req, res) {

  /* Sanitise all incoming fields */
  const raw = req.body || {};
  const d   = {
    name:         sanitise(raw.name),
    company:      sanitise(raw.company),
    email:        sanitise(raw.email),
    supportType:  sanitise(raw.supportType),
    projectType:  sanitise(raw.projectType),
    shootDates:   sanitise(raw.shootDates),
    crewSize:     sanitise(raw.crewSize),
    projectBrief: sanitise(raw.projectBrief),
    priority:     sanitise(raw.priority),
  };

  log.info('Inquiry received', { name: d.name, supportType: d.supportType, priority: d.priority });

  /* Server-side validation */
  if (!d.name) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(d.email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }
  if (!d.supportType) {
    return res.status(400).json({ success: false, message: 'Support type is required.' });
  }

  /* Spam check */
  if (isSpam(d)) {
    log.warn('Spam blocked', { name: d.name, email: d.email });
    /* Return 200 to avoid revealing detection */
    return res.status(200).json({ success: true, message: 'Request sent successfully.' });
  }

  const subject = `[${d.priority || 'INQUIRY'}] ${d.supportType} — ${d.name}`;

const mailOptions = {
  from: '"AppleBox Website" <applebox950@gmail.com>',
  to: 'hello@applebox.sa',   // 👈 THIS is where it goes
  replyTo: d.email,
  subject: subject,
  text: buildPlainText(d),
  html: buildHtml(d),
};

  try {
    const info = await transporter.sendMail(mailOptions);
    log.info('Email sent', { messageId: info.messageId, to: mailOptions.to });
    return res.status(200).json({ success: true, message: 'Request sent successfully.' });
  } catch (err) {
    log.error('Email send failed', { error: err.message, code: err.code });
    return res.status(500).json({
      success: false,
      message: 'Failed to send your request. Please try again or contact us via WhatsApp.',
    });
  }
});

/* ─────────────────────────────────────────
   ROUTE — GET /health
───────────────────────────────────────── */
app.get('/health', function (_req, res) {
  res.status(200).json({
    status:    'ok',
    service:   'AppleBox Mailer v2.0',
    timestamp: new Date().toISOString(),
  });
});

/* ─────────────────────────────────────────
   404 CATCH-ALL
───────────────────────────────────────── */
app.use(function (_req, res) {
  res.status(404).json({ success: false, message: 'Not found.' });
});

/* ─────────────────────────────────────────
   START
───────────────────────────────────────── */
app.listen(PORT, function () {
  log.info(`AppleBox Mailer running on http://localhost:${PORT}`);
});

module.exports = app; /* for testing */
