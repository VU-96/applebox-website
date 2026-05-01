/* ═══════════════════════════════════════════
   APPLEBOX — CONTACT FORM BACKEND  v3.0
   Node.js + Express + Nodemailer

   Environment variables required:
     SMTP_USER        — Gmail sender address
     SMTP_PASS        — Gmail app password
     RECIPIENT_EMAIL  — where inquiries are delivered (default: hello@applebox.sa)
     ALLOWED_ORIGIN   — your frontend domain, e.g. https://applebox.sa
     PORT             — HTTP port (set automatically by Render / Railway)
═══════════════════════════════════════════ */

'use strict';

const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');
const crypto     = require('crypto');

const app  = express();
const PORT = process.env.PORT || 4000;

/* ─────────────────────────────────────────
   STARTUP ENV CHECKS
   Warn loudly if required vars are missing
───────────────────────────────────────── */
const SMTP_USER       = process.env.SMTP_USER       || '';
const SMTP_PASS       = process.env.SMTP_PASS        || '';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL  || 'hello@applebox.sa';
const ALLOWED_ORIGIN  = process.env.ALLOWED_ORIGIN   || '';

if (!SMTP_USER) log.warn('SMTP_USER env var is not set — emails will fail to send.');
if (!SMTP_PASS) log.warn('SMTP_PASS env var is not set — emails will fail to send.');
if (!ALLOWED_ORIGIN) log.warn('ALLOWED_ORIGIN env var is not set — CORS is open to all origins.');

/* ─────────────────────────────────────────
   LOGGING UTILITY
───────────────────────────────────────── */
function log() {}
log.info  = (...a) => console.log( `[${new Date().toISOString()}] [INFO] `,  ...a);
log.warn  = (...a) => console.warn( `[${new Date().toISOString()}] [WARN] `,  ...a);
log.error = (...a) => console.error(`[${new Date().toISOString()}] [ERROR]`, ...a);

/* ─────────────────────────────────────────
   MIDDLEWARE
───────────────────────────────────────── */
app.use(cors({
  origin:  ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST'],
}));

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

/* Basic security headers without requiring helmet */
app.use(function (_req, res, next) {
  res.setHeader('X-Content-Type-Options',    'nosniff');
  res.setHeader('X-Frame-Options',           'DENY');
  res.setHeader('Referrer-Policy',           'no-referrer');
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  next();
});

/* ─────────────────────────────────────────
   RATE LIMITER (in-memory)
   Max 10 requests per IP per 10 minutes.
   For production scale, use express-rate-limit + Redis.
───────────────────────────────────────── */
const rateLimitMap    = new Map();
const RATE_WINDOW_MS  = 10 * 60 * 1000; /* 10 minutes */
const RATE_MAX_HITS   = 10;

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

/* Clean expired entries periodically to prevent memory leak */
setInterval(function () {
  const now = Date.now();
  rateLimitMap.forEach(function (v, k) {
    if (now > v.resetAt) rateLimitMap.delete(k);
  });
}, RATE_WINDOW_MS);

/* ─────────────────────────────────────────
   SPAM KEYWORDS
───────────────────────────────────────── */
const SPAM_KEYWORDS = ['casino', 'bitcoin', 'crypto', 'forex', 'click here', 'free money', 'make money'];

function isSpam(d) {
  const blob = [d.name, d.company, d.projectBrief].join(' ').toLowerCase();
  return SPAM_KEYWORDS.some(function (kw) { return blob.includes(kw); });
}

/* ─────────────────────────────────────────
   PRIORITY — server-side calculation only
   Never trust the client-supplied value.
───────────────────────────────────────── */
const VALID_PRIORITIES = {
  HIGH:  '🔴 HIGH PRIORITY',
  STD:   '🟡 STANDARD',
  QUICK: '🟢 QUICK RESPONSE',
};

function calcPriority(d) {
  const crew      = parseInt((d.crewSize || '').replace(/\D/g, ''), 10) || 0;
  const bigTypes  = ['Feature Film', 'International Production', 'Drama Series'];
  const isFullProd = d.supportType === 'Full Production Support' || d.supportType === 'Unit Production';
  const isBigType  = bigTypes.indexOf(d.projectType) !== -1;
  if (crew >= 50 || (isBigType && isFullProd)) return VALID_PRIORITIES.HIGH;
  if (crew >= 20 || isBigType || isFullProd)   return VALID_PRIORITIES.STD;
  return VALID_PRIORITIES.QUICK;
}

/* ─────────────────────────────────────────
   EMAIL TRANSPORTER
   Uses Gmail SMTP — requires an App Password
   (not your regular Gmail password).
   Guide: myaccount.google.com → Security → App Passwords
───────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  host:   'smtp.gmail.com',
  port:   587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  connectionTimeout: 10_000,
  greetingTimeout:   10_000,
  socketTimeout:     10_000,
});

transporter.verify(function (err) {
  if (err) {
    log.warn('SMTP verification failed:', err.message);
  } else {
    log.info('SMTP transporter ready.');
  }
});

/* ─────────────────────────────────────────
   INPUT SANITISER — strips HTML tags + encodes entities
───────────────────────────────────────── */
const ENTITY_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

function sanitise(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[&<>"']/g, function (c) { return ENTITY_MAP[c]; })
    .trim()
    .slice(0, 2000);
}

/* Also strip newlines from single-line fields to prevent header injection */
function sanitiseLine(str) {
  return sanitise(str).replace(/[\r\n]+/g, ' ');
}

/* ─────────────────────────────────────────
   EMAIL BUILDERS
───────────────────────────────────────── */
function buildPlainText(d) {
  return [
    'New Inquiry — AppleBox Production Services',
    '═══════════════════════════════════════════',
    '',
    `Priority:      ${d.priority}`,
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
    [VALID_PRIORITIES.HIGH]:  '#c0392b',
    [VALID_PRIORITIES.STD]:   '#d4a017',
    [VALID_PRIORITIES.QUICK]: '#27ae60',
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
        <p style="margin:0;font-size:11px;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;">${d.priority}</p>
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
        <p style="margin:0;font-size:11px;color:#bbb;">Sent via applebox.sa · ${new Date().toLocaleString('en-SA', { timeZone: 'Asia/Riyadh' })} KSA</p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>
</body>
</html>`.trim();
}

/* ─────────────────────────────────────────
   VALIDATION
───────────────────────────────────────── */
const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(d) {
  if (!d.name)                return { status: 400, message: 'Name is required.' };
  if (!EMAIL_RX.test(d.email)) return { status: 400, message: 'A valid email address is required.' };
  if (!d.supportType)          return { status: 400, message: 'Support type is required.' };
  return null;
}

/* ─────────────────────────────────────────
   ROUTE — POST /send-email
───────────────────────────────────────── */
app.post('/send-email', rateLimit, async function (req, res) {
  try {
    const raw = req.body || {};

    /* Sanitise all fields — single-line fields also strip newlines */
    const d = {
      name:         sanitiseLine(raw.name),
      company:      sanitiseLine(raw.company),
      email:        sanitiseLine(raw.email),
      supportType:  sanitiseLine(raw.supportType),
      projectType:  sanitiseLine(raw.projectType),
      shootDates:   sanitiseLine(raw.shootDates),
      crewSize:     sanitiseLine(raw.crewSize),
      projectBrief: sanitise(raw.projectBrief),   /* multi-line — keep newlines */
    };

    /* Priority is always calculated server-side — never trust client value */
    d.priority = calcPriority(d);

    log.info('Inquiry received', { name: d.name, supportType: d.supportType, priority: d.priority });

    /* Validate */
    const validationError = validate(d);
    if (validationError) {
      return res.status(validationError.status).json({
        success: false,
        message: validationError.message,
      });
    }

    /* Spam check — silent pass to avoid revealing detection */
    if (isSpam(d)) {
      log.warn('Spam blocked', { name: d.name, email: d.email });
      return res.status(200).json({ success: true, message: 'Request sent successfully.' });
    }

    const subject = `[${d.priority}] ${d.supportType} — ${d.name}`;

    const mailOptions = {
      from:    `"AppleBox Website" <${SMTP_USER}>`,
      to:      RECIPIENT_EMAIL,
      replyTo: d.email,
      subject: subject,
      text:    buildPlainText(d),
      html:    buildHtml(d),
    };

    /* Respond immediately — send email in background for instant UX */
    res.status(200).json({ success: true, message: 'Request sent successfully.' });

    transporter.sendMail(mailOptions)
      .then(function (info) { log.info('Email sent', { messageId: info.messageId }); })
      .catch(function (err) { log.error('Email send failed', { error: err.message }); });

  } catch (err) {
    log.error('Unexpected error in /send-email', { error: err.message });
    /* Only send error response if headers haven't been sent yet */
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  }
});

/* ─────────────────────────────────────────
   ROUTE — GET /health
───────────────────────────────────────── */
app.get('/health', function (_req, res) {
  res.status(200).json({
    status:    'ok',
    service:   'AppleBox Mailer v3.0',
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
