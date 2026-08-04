#!/usr/bin/env node
/**
 * AppleBox — static route generator
 * ---------------------------------
 * `index.html` is the single source of truth for markup and content.
 *
 * The site renders six sections (`.page`) and shows one at a time via the
 * `active` class. This script emits one real HTML document per section so that
 * /about, /services, /fleet, /projects and /contact are genuine URLs that return
 * HTTP 200 on a direct visit, each with its own <title>, meta description and
 * canonical instead of sharing the homepage's.
 *
 * Run after ANY edit to index.html:
 *     node build.js
 *
 * Zero dependencies. Every substitution is asserted — if index.html changes
 * shape in a way this script no longer understands, the build fails loudly
 * rather than silently shipping wrong metadata.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const SITE = 'https://www.applebox.sa';
const SRC = path.join(__dirname, 'index.html');

/* Home is the source document, so it is listed for metadata reference only —
   it is never regenerated. The other five are emitted as <slug>.html. */
const ROUTES = [
  {
    slug: 'about',
    section: 'page-about',
    title: 'About AppleBox | Production Partner in Saudi Arabia',
    description:
      'For 7+ years AppleBox has been the production partner behind some of the most demanding shoots in Saudi Arabia — from planning to on-set execution.',
    ogTitle: 'About AppleBox Production Services',
    ogDescription:
      'The production partner behind some of the most demanding shoots in Saudi Arabia.'
  },
  {
    slug: 'services',
    section: 'page-services',
    title: 'Production Services in Saudi Arabia | AppleBox',
    description:
      'Full production management, unit production, equipment and fleet rentals, and on-set catering — available independently or as one complete setup.',
    ogTitle: 'AppleBox Production Services',
    ogDescription:
      'Full production management, unit production, rentals and catering across Saudi Arabia.'
  },
  {
    slug: 'fleet',
    section: 'page-fleet',
    title: 'Production Fleet Rental in Saudi Arabia | AppleBox',
    description:
      'A purpose-built fleet for real production demands: unit vans and trucks, wardrobe trucks, support vans, hygiene units and crew transport.',
    ogTitle: 'The AppleBox Fleet — Built for Production',
    ogDescription:
      'Unit trucks, wardrobe, hygiene units, talent facilities and crew transport. Production-ready across Saudi Arabia.'
  },
  {
    slug: 'projects',
    section: 'page-projects',
    title: 'Projects | Film & TVC Productions in Saudi Arabia',
    description:
      'From international feature films to local TVCs — a selection of productions AppleBox has powered across Saudi Arabia.',
    ogTitle: 'AppleBox Selected Work',
    ogDescription:
      'Feature films, TVCs and campaigns powered by AppleBox across Saudi Arabia.'
  },
  {
    slug: 'contact',
    section: 'page-contact',
    title: 'Contact AppleBox | Production Services Saudi Arabia',
    description:
      "Tell us about your production — a brief overview is enough. We'll respond within 24 hours with an initial proposal. Riyadh-based, operating Saudi Arabia-wide.",
    ogTitle: 'Get in Touch with AppleBox',
    ogDescription:
      "Tell us about your production. We'll respond within 24 hours with an initial proposal."
  }
];

/**
 * Replace exactly one occurrence of `pattern`, asserting that it matched.
 * A silent no-op here would ship a page with the homepage's metadata, which is
 * the precise bug this script exists to fix — so treat a miss as fatal.
 *
 * `replacement` may be a string, which is inserted literally (so a `$` in a
 * title can never be read as a substitution pattern), or a function, which
 * receives the match and its capture groups in the usual way.
 */
function replaceOnce(html, pattern, replacement, label, route) {
  if (!pattern.test(html)) {
    throw new Error(
      `[build] ${route}: could not find ${label} in index.html.\n` +
        `        Pattern: ${pattern}\n` +
        `        index.html has changed shape — update build.js to match.`
    );
  }
  const replacer =
    typeof replacement === 'function' ? replacement : () => replacement;
  return html.replace(pattern, replacer);
}

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildRoute(source, route) {
  let html = source;
  const url = `${SITE}/${route.slug}`;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);
  const ogTitle = escapeAttr(route.ogTitle);
  const ogDescription = escapeAttr(route.ogDescription);

  /* ── Head: per-page identity ───────────────────────────────── */
  html = replaceOnce(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${title}</title>`,
    '<title>',
    route.slug
  );

  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${url}">`,
    'canonical link',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${description}">`,
    'meta description',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta property="og:title"\s+content="[^"]*">/,
    `<meta property="og:title"       content="${ogTitle}">`,
    'og:title',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${ogDescription}">`,
    'og:description',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta property="og:url"\s+content="[^"]*">/,
    `<meta property="og:url"         content="${url}">`,
    'og:url',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta name="twitter:title"\s+content="[^"]*">/,
    `<meta name="twitter:title"       content="${ogTitle}">`,
    'twitter:title',
    route.slug
  );

  html = replaceOnce(
    html,
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${ogDescription}">`,
    'twitter:description',
    route.slug
  );

  /* ── Body: pre-activate this route's section ───────────────────
     Without this, a direct visit renders the homepage until JS runs.
     Doing it in the markup means the correct section is the one that
     paints first, and is what a crawler sees without executing JS.   */
  html = replaceOnce(
    html,
    /(<main id="page-home" class="page)\s+active(">)/,
    (m, open, close) => open + close,
    'home section active class',
    route.slug
  );

  const sectionPattern = new RegExp(
    `(<(?:main|div) id="${route.section}" class="page)(">)`
  );
  html = replaceOnce(
    html,
    sectionPattern,
    (m, open, close) => open + ' active' + close,
    `section #${route.section}`,
    route.slug
  );

  /* Tell the runtime which route this document was built for, so client-side
     navigation and the History API stay in sync with the served URL. */
  html = replaceOnce(
    html,
    /<html lang="en" dir="ltr">/,
    `<html lang="en" dir="ltr" data-route="${route.slug}">`,
    '<html> tag',
    route.slug
  );

  return html;
}

/* Search engines truncate beyond roughly these lengths, so a title or
   description that overruns is a real defect, not a style nit. Asserted at
   build time so it cannot creep back in unnoticed. */
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

function checkLengths() {
  const problems = [];

  for (const route of ROUTES) {
    if (route.title.length > MAX_TITLE) {
      problems.push(
        `  ${route.slug}: title is ${route.title.length} chars (max ${MAX_TITLE})`
      );
    }
    if (route.description.length > MAX_DESCRIPTION) {
      problems.push(
        `  ${route.slug}: description is ${route.description.length} chars (max ${MAX_DESCRIPTION})`
      );
    }
  }

  if (problems.length) {
    throw new Error('[build] metadata too long:\n' + problems.join('\n'));
  }
}

/**
 * `script.js` carries its own copy of the route titles and descriptions, used
 * when navigating client-side. If the two tables drift, a page shows one title
 * on load and a different one after a click. Fail the build instead.
 */
function checkScriptInSync() {
  const scriptPath = path.join(__dirname, 'script.js');
  if (!fs.existsSync(scriptPath)) {
    throw new Error(`[build] script.js not found at ${scriptPath}`);
  }

  const script = fs.readFileSync(scriptPath, 'utf8');
  const problems = [];

  for (const route of ROUTES) {
    const block = new RegExp(
      `\\b${route.slug}:\\s*\\{[^}]*?title:\\s*(['"])([\\s\\S]*?)\\1[^}]*?description:\\s*(['"])([\\s\\S]*?)\\3`
    );
    const found = script.match(block);

    if (!found) {
      problems.push(`  ${route.slug}: no ROUTES entry found in script.js`);
      continue;
    }
    if (found[2] !== route.title) {
      problems.push(
        `  ${route.slug}: title differs\n` +
          `      build.js  : ${route.title}\n` +
          `      script.js : ${found[2]}`
      );
    }
    if (found[4] !== route.description) {
      problems.push(
        `  ${route.slug}: description differs\n` +
          `      build.js  : ${route.description}\n` +
          `      script.js : ${found[4]}`
      );
    }
  }

  if (problems.length) {
    throw new Error(
      '[build] ROUTES in script.js is out of sync with build.js:\n' +
        problems.join('\n') +
        '\n        Update script.js so both tables match.'
    );
  }
}

function main() {
  if (!fs.existsSync(SRC)) {
    throw new Error(`[build] source not found: ${SRC}`);
  }

  checkLengths();
  checkScriptInSync();

  const source = fs.readFileSync(SRC, 'utf8');
  const written = [];

  for (const route of ROUTES) {
    const out = buildRoute(source, route);
    const dest = path.join(__dirname, `${route.slug}.html`);
    fs.writeFileSync(dest, out, 'utf8');
    written.push(`${route.slug}.html`);
  }

  /* Keep the sitemap in lockstep with the routes that actually exist. */
  writeSitemap();

  console.log(`[build] generated ${written.length} route documents:`);
  written.forEach((f) => console.log(`        ${f}`));
  console.log('[build] sitemap.xml updated');
}

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { loc: `${SITE}/`, priority: '1.0' },
    ...ROUTES.map((r) => ({ loc: `${SITE}/${r.slug}`, priority: '0.8' }))
  ];

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map(
        (e) =>
          '  <url>\n' +
          `    <loc>${e.loc}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          '    <changefreq>monthly</changefreq>\n' +
          `    <priority>${e.priority}</priority>\n` +
          '  </url>'
      )
      .join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
}

main();
