# AppleBox Website (Frontend)

Static marketing site for **AppleBox Production Services** — film & TVC
production services in Saudi Arabia. Live at **https://www.applebox.sa**.

No build step, no framework: hand-written HTML, CSS, and vanilla JavaScript,
served from **GitHub Pages**.

## Structure

```
applebox-site/
├── index.html          # Single-page app (all sections in one document)
├── styles.css          # Main stylesheet
├── styles-rtl.css      # RTL/Arabic styles (see "Bilingual" note below)
├── script.js           # Navigation, gallery, contact form, BTS carousel, etc.
├── robots.txt          # Points crawlers at the sitemap
├── sitemap.xml         # https://www.applebox.sa/
├── files/              # Downloadable company profile
└── pages/              # All media (images, video, brochures, fonts, logos)
    ├── homepage/        ├── aboutpage/    ├── servicepage/
    ├── projectpage/     ├── fleets/       └── brandimage/
```

## Pages / navigation

The site is a client-side SPA: `showPage(id)` in `script.js` toggles the
`.page` sections and updates the URL hash (`#home`, `#about`, `#services`,
`#fleet`, `#projects`, `#contact`). Browser back/forward is supported via
`popstate`.

## Contact form

The form posts JSON to the backend mailer:

```
POST https://applebox-backend.onrender.com/send-email
```

(See `applebox-backend/` for the server.) A hidden honeypot field
(`companyWebsite`) traps bots both client- and server-side.

## SEO

- `robots.txt` and `sitemap.xml` reference the canonical `https://www.applebox.sa/`.
- `index.html` includes a JSON-LD `LocalBusiness` schema, Open Graph, and
  Twitter Card tags. Keep these in sync if contact details or social links change.

## Bilingual (Arabic) — currently inactive

`script.js` ships a full EN/AR translation dictionary and `styles-rtl.css`
contains RTL styles, but **no language toggle is wired into the UI** and most
visible strings are not yet tagged with `data-i18n`. The site renders in English
only. To enable Arabic later: add a language toggle button (`.lang-btn[data-lang]`),
tag all visible strings with `data-i18n`, and verify RTL layout.

## Media optimization

Several images/videos are large. See **OPTIMIZATION.md** for concrete
compression steps before any future media refresh.

## Deployment (GitHub Pages)

Push to the configured Pages branch. Custom domain `www.applebox.sa` is served
over the Pages CDN. After changing `robots.txt`/`sitemap.xml`, re-submit the
sitemap in Google Search Console.
