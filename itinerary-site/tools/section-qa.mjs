#!/usr/bin/env node
// Extract each <section id="..."> from a built page into its own standalone file, so any part of
// the site can be screenshotted from the top of a fresh document (the Browser pane will not
// repaint after a programmatic scroll).
//   node tools/section-qa.mjs index            -> site/_s-index-<id>.html
//   node tools/section-qa.mjs southern-warmth  -> site/_s-southern-warmth-<id>.html
import { readFileSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE = join(ROOT, 'site');
const page = process.argv[2] || 'index';

for (const f of readdirSync(SITE)) if (f.startsWith(`_s-${page}-`)) unlinkSync(join(SITE, f));

const html = readFileSync(join(SITE, `${page}.html`), 'utf8');
const out = [];
for (const m of html.matchAll(/<section class="[^"]*" id="([^"]+)">([\s\S]*?)<\/section>/g)) {
  const [, id, inner] = m;
  writeFileSync(join(SITE, `_s-${page}-${id}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${page} · ${id}</title>
<link rel="stylesheet" href="assets/site.css"></head><body>
<main><section class="sec" id="${id}">${inner}</section></main>
<script src="assets/site.js"></script></body></html>`);
  out.push(id);
}
console.log(`${page}: ${out.map((id) => `_s-${page}-${id}.html`).join(' ')}`);
