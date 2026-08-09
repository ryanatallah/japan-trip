#!/usr/bin/env node
// QA contact sheets — paginated so each page fits one browser screenshot.
// Every processed photo with its caption, category and confidence.
import { readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { entities } from '../content/entities.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE = join(ROOT, 'site');
const media = existsSync(join(ROOT, 'content/media.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'content/media.json'), 'utf8')) : {};

// Each entry is a list of alternatives — an experience is covered by action shots OR wildlife.
const REQUIRED = {
  stay: [['exterior'], ['room'], ['bath'], ['dining'], ['food']],
  restaurant: [['food']],
  experience: [['activity', 'wildlife', 'people', 'detail']],
};
const PER_PAGE = 3;

for (const f of readdirSync(SITE)) if (/^_qa-\d+\.html$/.test(f)) unlinkSync(join(SITE, f));

const want = process.argv.slice(2);
const slugs = (want.length ? want : Object.keys(media)).filter((s) => media[s]?.length);
const pages = [];
for (let i = 0; i < slugs.length; i += PER_PAGE) pages.push(slugs.slice(i, i + PER_PAGE));

const CSS = `body{font:13px/1.4 -apple-system,system-ui,sans-serif;background:#15130f;color:#e8e0d4;margin:0;padding:1rem}
h1{font-size:.95rem;margin:0 0 .8rem;color:#9a8f80;font-weight:500}
h1 a{color:#e6b98a;text-decoration:none;margin-left:.5rem}
section{margin:0 0 1.4rem;border-top:1px solid #322c24;padding-top:.7rem}
h2{font-size:.95rem;margin:0 0 .55rem;display:flex;gap:.55rem;align-items:baseline;flex-wrap:wrap}
h2 small{font-weight:400;color:#9a8f80}
.miss{color:#ff8b6e;font-size:.76rem;border:1px solid #6b3125;padding:.08rem .4rem;border-radius:3px}
.ok{color:#8fbf95;font-size:.76rem;border:1px solid #2f5236;padding:.08rem .4rem;border-radius:3px}
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:.45rem}
figure{margin:0;background:#1e1a15;border-radius:3px;overflow:hidden;border:1px solid #2a251f}
figure.low{border-color:#8a5a20}
img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;background:#000}
figcaption{padding:.3rem .4rem;font-size:.68rem;color:#bcb1a1;line-height:1.32}
figcaption b{color:#e6b98a;display:block;text-transform:uppercase;font-size:.6rem;letter-spacing:.05em}
figcaption i{display:block;color:#6f665c;font-style:normal;font-size:.62rem;margin-top:.15rem}`;

pages.forEach((group, pi) => {
  const sheets = group.map((slug) => {
    const e = entities[slug] || { name: slug, type: '?' };
    const list = media[slug];
    const cats = new Set(list.map((s) => s.category));
    const missing = (REQUIRED[e.type] || []).filter((alts) => !alts.some((c) => cats.has(c))).map((alts) => alts[0]);
    return `<section>
  <h2>${slug} <small>${e.name} · ${e.type} · ${list.length} photos</small>
  ${missing.length ? `<b class="miss">missing: ${missing.join(', ')}</b>` : '<b class="ok">coverage ok</b>'}</h2>
  <div class="g">${list.map((s, i) => `<figure${s.confidence !== 'high' ? ' class="low"' : ''}>
    <img src="img/${s.thumb}" alt="">
    <figcaption><b>${i + 1}. ${s.category}</b> ${s.caption.replace(/</g, '&lt;')}<i>${s.w}×${s.h}${s.confidence !== 'high' ? ' · ' + s.confidence : ''}</i></figcaption>
  </figure>`).join('')}</div>
</section>`;
  }).join('');

  writeFileSync(join(SITE, `_qa-${pi + 1}.html`), `<!doctype html><meta charset="utf-8"><title>QA ${pi + 1}/${pages.length}</title><style>${CSS}</style>
<h1>Contact sheet ${pi + 1} of ${pages.length}${pi + 1 < pages.length ? `<a href="_qa-${pi + 2}.html">next →</a>` : ''}</h1>${sheets}`);
});

console.log(`${pages.length} QA pages (_qa-1..${pages.length}.html) · ${slugs.length} entities · ${slugs.reduce((n, s) => n + media[s].length, 0)} photos`);
