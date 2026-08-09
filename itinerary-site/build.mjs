#!/usr/bin/env node
// Static site builder — zero dependencies. Reads content/ and emits site/.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { entities } from './content/entities.mjs';
import { itineraries, shared, recommendation, wishlist } from './content/itineraries.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'site');

// ── media ───────────────────────────────────────────────────────────
let media = {};
const mediaPath = join(ROOT, 'content/media.json');
if (existsSync(mediaPath)) media = JSON.parse(readFileSync(mediaPath, 'utf8'));

const CATEGORY_ORDER = ['exterior', 'setting', 'room', 'bath', 'dining', 'food', 'activity', 'people', 'wildlife', 'detail'];
const CATEGORY_LABEL = {
  exterior: 'The building', setting: 'The setting', room: 'The rooms', bath: 'The baths',
  dining: 'Where you eat', food: 'The food', activity: 'The experience', people: 'The people',
  wildlife: 'The wildlife', detail: 'Details',
};

const shots = (slug) => media[slug] || [];
const hasShots = (slug) => shots(slug).length > 0;

/** Order an entity's photos so the gallery tells a story rather than dumping a folder. */
function ordered(slug) {
  const list = [...shots(slug)];
  list.sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category), bi = CATEGORY_ORDER.indexOf(b.category);
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  });
  return list;
}

/** One representative photo — prefers a wide establishing shot. */
function cover(slug) {
  const list = shots(slug);
  if (!list.length) return null;
  const pref = ['setting', 'exterior', 'wildlife', 'activity', 'room', 'dining', 'food'];
  for (const c of pref) {
    const hit = list.find((s) => s.category === c && s.w >= s.h);
    if (hit) return hit;
  }
  return list.find((s) => s.w >= s.h) || list[0];
}

// ── html helpers ────────────────────────────────────────────────────
const esc = (s = '') => String(s).replace(/&(?![a-z#]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** A single figure. `sizes` drives which file the browser picks. */
function img(shot, { className = '', sizes = '(max-width: 700px) 100vw, 33vw', eager = false } = {}) {
  if (!shot) return '';
  const ratio = shot.w && shot.h ? (shot.h / shot.w) * 100 : 66;
  return `<button class="shot ${className}" style="--ar:${ratio.toFixed(2)}%" data-full="img/${esc(shot.file)}" data-caption="${esc(shot.caption)}" data-source="${esc(shot.sourceUrl || '')}" aria-label="${esc(shot.caption)}">
  <img src="img/${esc(shot.thumb || shot.file)}" srcset="img/${esc(shot.thumb || shot.file)} 640w, img/${esc(shot.file)} 1600w" sizes="${sizes}" width="${shot.w || 1600}" height="${shot.h || 1067}" alt="${esc(shot.caption)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">
</button>`;
}

function placeholder(label) {
  return `<div class="shot placeholder" style="--ar:66%"><span>${esc(label)}</span></div>`;
}

/** Full gallery for an entity, grouped by category with headings. */
function gallery(slug, { grouped = true, max = 99 } = {}) {
  const list = ordered(slug).slice(0, max);
  if (!list.length) return placeholder('Photos being sourced');
  if (!grouped) return `<div class="grid">${list.map((s) => img(s)).join('')}</div>`;

  const groups = new Map();
  for (const s of list) {
    const k = s.category || 'detail';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(s);
  }
  const keys = [...groups.keys()].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a), bi = CATEGORY_ORDER.indexOf(b);
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  });
  // A single small group reads better merged than as a lonely heading.
  if (keys.length <= 2) return `<div class="grid">${list.map((s) => img(s)).join('')}</div>`;
  return keys.map((k) => `<div class="galgroup">
    <h4 class="galhead">${esc(CATEGORY_LABEL[k] || k)}</h4>
    <div class="grid">${groups.get(k).map((s) => img(s)).join('')}</div>
  </div>`).join('');
}

/** A row of covers for a list of entities — renders nothing at all when empty,
 *  so a not-yet-sourced entity never leaves a hole in the layout. */
function coverRow(slugs, sizes = '(max-width:700px) 100vw, 30vw') {
  const picks = slugs.map((s) => cover(s)).filter(Boolean);
  if (!picks.length) return '';
  return `<div class="grid grid-3">${picks.map((s) => img(s, { sizes })).join('')}</div>`;
}

/** Small inline photo row used on day cards. */
function strip(refs) {
  const picks = refs.flatMap((r) => {
    const list = ordered(r);
    return list.length ? [{ ...list[0], _slug: r }] : [];
  }).slice(0, 4);
  if (!picks.length) return '';
  return `<div class="strip">${picks.map((s) => img(s, { className: 'stripshot', sizes: '(max-width: 700px) 45vw, 180px' })).join('')}</div>`;
}

const badgeHtml = (b = []) => b.map((x) => `<span class="badge${/👍|seeds/i.test(x) ? ' badge-seed' : ''}">${esc(x)}</span>`).join('');

function entityCard(slug, { level = 3 } = {}) {
  const e = entities[slug];
  if (!e) return `<!-- missing entity ${slug} -->`;
  const H = `h${level}`;
  const facts = e.facts?.length
    ? `<dl class="facts">${e.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('')}</dl>`
    : '';
  const gf = e.gf ? `<p class="gf"><span class="gf-tag">GF</span> ${e.gf}</p>` : '';
  const meta = [e.location, e.rate].filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join('<i>·</i>');
  return `<article class="entity" id="${esc(slug)}">
  <header class="entity-head">
    <${H}>${esc(e.name)}</${H}>
    <p class="entity-meta">${meta}</p>
    <p class="badges">${badgeHtml(e.badges)}</p>
  </header>
  <div class="entity-body">
    <p class="lede">${e.blurb}</p>
    ${facts}
    ${gf}
    ${e.url ? `<p class="src"><a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))} ↗</a></p>` : ''}
  </div>
  <div class="entity-gallery">${gallery(slug)}</div>
</article>`;
}

function placeCard(slug) {
  const e = entities[slug];
  if (!e) return '';
  const list = ordered(slug);
  return `<article class="place" id="${esc(slug)}">
  <div class="place-shots">${list.length ? list.slice(0, 4).map((s, i) => img(s, { className: i === 0 ? 'lead' : '', sizes: '(max-width: 700px) 50vw, 25vw' })).join('') : placeholder('Photos being sourced')}</div>
  <div class="place-text"><h3>${esc(e.name)}</h3><p class="place-loc">${esc(e.location || '')}</p><p>${e.blurb}</p></div>
</article>`;
}

// ── page chrome ─────────────────────────────────────────────────────
function shell({ title, desc, body, active = '', page = '' }) {
  const nav = itineraries.map((it) =>
    `<a href="${it.slug}.html" class="${active === it.slug ? 'on' : ''}"><b>${it.num}</b><span>${esc(it.title)}</span></a>`
  ).join('');
  return `<!doctype html>
<html lang="en" data-page="${esc(page)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="${esc(desc)}">
<title>${esc(title)}</title>
<link rel="stylesheet" href="assets/site.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍁</text></svg>">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<nav class="nav">
  <a href="index.html" class="nav-home ${active === '' ? 'on' : ''}"><span class="mark">🍁</span><span class="nav-title">Japan 2026</span></a>
  <div class="nav-links">${nav}</div>
  <button class="theme" type="button" aria-label="Toggle light and dark">◐</button>
</nav>
<main id="main">
${body}
</main>
<footer class="foot">
  <p>Built from <code>Itinerary Designs.md</code> · photography sourced from each property, operator and tourism board, credited on every image · for private trip planning</p>
</footer>
<div class="lightbox" hidden>
  <button class="lb-close" aria-label="Close">✕</button>
  <button class="lb-prev" aria-label="Previous">‹</button>
  <button class="lb-next" aria-label="Next">›</button>
  <figure><img alt=""><figcaption><span class="lb-cap"></span> <a class="lb-src" target="_blank" rel="noopener">source ↗</a></figcaption></figure>
</div>
<script src="assets/site.js"></script>
</body>
</html>`;
}

// ── index ───────────────────────────────────────────────────────────
function buildIndex() {
  // Prefer these six; backfill from any wide shot so the band is always full.
  const heroPicks = ['eikando', 'gora-kadan', 'ezo-momonga', 'aso-caldera', 'kenrokuen', 'sankara-yakushima'];
  const heroShots = heroPicks.map((s) => cover(s)).filter(Boolean);
  if (heroShots.length < 6) {
    const seen = new Set(heroShots.map((s) => s.file));
    for (const slug of Object.keys(media)) {
      if (heroShots.length >= 6) break;
      if (heroPicks.includes(slug)) continue;
      const c = cover(slug);
      if (c && !seen.has(c.file)) { heroShots.push(c); seen.add(c.file); }
    }
  }

  const glanceRows = itineraries.map((it) => `<tr>
    <td class="c-num"><a href="${it.slug}.html">${it.num}</a></td>
    <td class="c-name"><a href="${it.slug}.html">${esc(it.title)}</a><small>${esc(it.bestFor)}</small></td>
    <td>${esc(it.dates)}</td>
    <td class="c-route">${it.route.map((r) => esc(r)).join(' → ')}</td>
    <td class="c-cost">${esc(it.cost)}</td>
    <td><span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span></td>
  </tr>`).join('');

  const cards = itineraries.map((it) => {
    const mos = it.heroCard.map((s) => cover(s)).filter(Boolean);
    const shotsHtml = mos.length
      ? mos.slice(0, 3).map((s, i) => img(s, { className: i === 0 ? 'lead' : '', sizes: '(max-width: 700px) 100vw, 40vw', eager: it.num <= 2 })).join('')
      : placeholder('Photos being sourced');
    // A div, not an anchor: the shots are lightbox buttons, and a <button> inside an <a>
    // is invalid HTML and ambiguous for keyboard users. The title and "See it" already link.
    return `<article class="card">
    <div class="card-shots">${shotsHtml}</div>
    <div class="card-text">
      <p class="card-num">Itinerary ${it.num}</p>
      <h3><a href="${it.slug}.html">${esc(it.title)}</a></h3>
      <p class="card-tag">${esc(it.tagline)}</p>
      <p class="card-meta"><span>${esc(it.dates)}</span><i>·</i><span>${esc(it.length)}</span><i>·</i><span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span></p>
      <p class="card-route">${it.route.map((r) => `<span>${esc(r)}</span>`).join('<i>→</i>')}</p>
      <p>${it.pitch}</p>
      <p class="card-foot"><b>${esc(it.cost)}</b> <small>estimated, per couple</small> <a class="go" href="${it.slug}.html">See it →</a></p>
    </div>
  </article>`;
  }).join('');

  const MARK = { yes: ['✓', 'y', 'included'], part: ['~', 'p', 'partly'], no: ['—', 'n', 'not included'] };
  const wishHtml = wishlist.map((w) => {
    const cells = itineraries.map((it) => {
      let state = w.manual?.[it.num];
      if (!state) {
        const need = Array.isArray(w.has) ? w.has : [w.has];
        const pool = [...it.stays, ...(it.altStays || []), ...it.dining, ...it.doing, ...it.places];
        state = need.some((s) => pool.includes(s)) ? 'yes' : 'no';
      }
      const [glyph, cls, label] = MARK[state];
      const why = w.why?.[it.num];
      return `<td class="w w-${cls}"${why ? ` title="${esc(why)}"` : ''}><span aria-label="${label}">${glyph}</span>${why ? `<em>${esc(why)}</em>` : ''}</td>`;
    }).join('');
    return `<tr><th scope="row">${esc(w.label)}<small>${esc(w.note)}</small></th>${cells}</tr>`;
  }).join('');

  const recs = recommendation.map(([want, why, n]) => {
    const it = itineraries.find((x) => x.num === n);
    return `<li><span class="rec-want">${esc(want)}</span><a class="rec-pick" href="${it.slug}.html">Itinerary ${n} — ${esc(it.title)}</a><span class="rec-why">${esc(why)}</span></li>`;
  }).join('');

  const body = `
<header class="hero hero-index">
  ${heroShots.length >= 3 ? `<div class="hero-collage" style="--cols:${Math.min(heroShots.length, 6)}">${heroShots.slice(0, 6).map((s) => img(s, { sizes: '17vw', eager: true })).join('')}</div>` : ''}
  <div class="hero-inner">
    <p class="kicker">Oct 25 – Dec 3, 2026 · two travellers · from SFO</p>
    <h1>Five ways to see Japan</h1>
    <p class="hero-sub">Same country, same fortnight-ish, five genuinely different trips. Every hotel, restaurant, workshop and temple below is photographed so you can judge it before you book it.</p>
    <p class="hero-jump">${itineraries.map((it) => `<a href="${it.slug}.html">${it.num}. ${esc(it.title)}</a>`).join('')}</p>
  </div>
</header>

<section class="sec" id="glance">
  <h2>The five at a glance</h2>
  <div class="tablewrap"><table class="glance">
    <thead><tr><th>#</th><th>Itinerary</th><th>Dates</th><th>Route</th><th>Est. total</th><th>Temp</th></tr></thead>
    <tbody>${glanceRows}</tbody>
  </table></div>
  <div class="note note-note"><h3>Why the dates matter</h3><p>${shared.dateLogic}</p></div>
</section>

<section class="sec" id="trips">
  <h2>The trips</h2>
  <div class="cards">${cards}</div>
</section>

<section class="sec" id="wishlist">
  <h2>Against your wish list</h2>
  <p class="sec-sub">Every item from <code>seeds.md</code>, checked off trip by trip. Hover or tap a partial mark for the caveat.</p>
  <div class="tablewrap"><table class="wish">
    <thead><tr><th>You asked for</th>${itineraries.map((it) => `<th class="wcol"><a href="${it.slug}.html"><b>${it.num}</b><span>${esc(it.title)}</span></a></th>`).join('')}</tr></thead>
    <tbody>${wishHtml}</tbody>
  </table></div>
</section>

<section class="sec" id="choose">
  <h2>How to choose</h2>
  <ul class="recs">${recs}</ul>
</section>

<section class="sec sec-alt" id="foundations">
  <h2>Shared foundations</h2>
  <p class="sec-sub">True of every itinerary above.</p>

  <div class="found">
    <h3>${esc(shared.flights.title)}</h3>
    <p class="sub">${esc(shared.flights.sub)}</p>
    <ul class="ticks">${shared.flights.points.map((p) => `<li>${p}</li>`).join('')}</ul>
    ${ordered('ana-the-room').length ? `<div class="grid grid-3">${ordered('ana-the-room').slice(0, 3).map((s) => img(s, { sizes: '(max-width:700px) 100vw, 30vw' })).join('')}</div>` : ''}
  </div>

  <div class="found">
    <h3>${esc(shared.transportTable.title)}</h3>
    <div class="tablewrap"><table class="compare">
      <thead><tr><th>Factor</th><th>Green Car rail</th><th>Self-drive</th></tr></thead>
      <tbody>${shared.transportTable.rows.map(([a, b, c]) => `<tr><th scope="row">${a}</th><td>${b}</td><td>${c}</td></tr>`).join('')}</tbody>
    </table></div>
    <p class="after">${shared.transportTable.note}</p>
    ${coverRow(['gran-class', 'shinkansen-green-car', 'lexus-nx-japan'])}
  </div>

  <div class="found">
    <h3>${esc(shared.glutenFree.title)}</h3>
    <p class="sub">${esc(shared.glutenFree.sub)}</p>
    <ul class="ticks">${shared.glutenFree.points.map((p) => `<li>${p}</li>`).join('')}</ul>
  </div>

  <div class="found">
    <h3>Cost model</h3>
    <p>${shared.costModel}</p>
  </div>

  <div class="found">
    <h3>${esc(shared.bookNow.title)}</h3>
    <p class="sub">${esc(shared.bookNow.sub)}</p>
    <ol class="booknow">${shared.bookNow.groups.map(([w, t]) => `<li><b>${esc(w)}</b><span>${esc(t)}</span></li>`).join('')}</ol>
  </div>
</section>`;

  return shell({ title: 'Japan 2026 — five itineraries', desc: 'Five illustrated Japan itineraries for Oct–Dec 2026.', body, page: 'index' });
}

// ── itinerary page ──────────────────────────────────────────────────
function buildItinerary(it) {
  const heroShot = cover(it.hero);
  const dayRows = it.days.map((d) => `<div class="day${d.span ? ' day-span' : ''}">
    <div class="day-when"><span class="day-date">${esc(d.date)}</span><span class="day-where">${esc(d.where)}</span></div>
    <div class="day-what"><p>${d.text}</p>${strip(d.ref || [])}</div>
  </div>`).join('');

  const section = (id, title, sub, slugs, level) => {
    if (!slugs?.length) return '';
    return `<section class="sec" id="${id}">
      <h2>${esc(title)}</h2>
      ${sub ? `<p class="sec-sub">${sub}</p>` : ''}
      ${slugs.map((s) => entityCard(s, { level })).join('')}
    </section>`;
  };

  const placesSec = it.places?.length ? `<section class="sec sec-alt" id="places">
    <h2>Where you actually are</h2>
    <p class="sec-sub">The temples, gardens, lakes and landscapes this route passes through — shown in the season you would see them.</p>
    <div class="places">${it.places.map((s) => placeCard(s)).join('')}</div>
  </section>` : '';

  const altSec = it.altStays?.length ? `<section class="sec" id="alts">
    <h2>The levers</h2>
    <p class="sec-sub">Swaps that move the number materially, up or down.</p>
    ${it.altStays.map((s) => entityCard(s, { level: 3 })).join('')}
  </section>` : '';

  const body = `
<header class="hero hero-itin">
  ${heroShot ? `<img class="hero-bg" src="img/${esc(heroShot.file)}" alt="${esc(heroShot.caption)}" fetchpriority="high">` : '<div class="hero-bg hero-bg-empty"></div>'}
  <div class="hero-inner">
    <p class="kicker">Itinerary ${it.num}</p>
    <h1>${esc(it.title)}</h1>
    <p class="hero-sub">${esc(it.tagline)}</p>
    <p class="hero-facts">
      <span><b>${esc(it.dates)}</b></span>
      <span>${esc(it.length)}</span>
      <span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span>
      <span><b>${esc(it.cost)}</b> per couple</span>
    </p>
    <p class="hero-route">${it.route.map((r) => `<span>${esc(r)}</span>`).join('<i>→</i>')}<em>${esc(it.routeNote)}</em></p>
  </div>
  ${heroShot ? `<p class="hero-credit">${esc(heroShot.caption)}</p>` : ''}
</header>

<nav class="subnav">
  <a href="#pitch">The idea</a><a href="#stays">Where you sleep</a><a href="#dining">Where you eat</a>
  <a href="#doing">What you do</a><a href="#places">Where you are</a><a href="#days">Day by day</a><a href="#cost">What it costs</a>
</nav>

<section class="sec" id="pitch">
  <div class="pitch"><p class="lede lede-big">${it.pitch}</p></div>
  <div class="transport">
    <h3><span class="mode">${esc(it.transport.mode)}</span></h3>
    <p>${it.transport.text}</p>
    ${coverRow(it.transport.ref || [])}
  </div>
</section>

${section('stays', 'Where you sleep', 'The biggest single line in the budget, and the thing hardest to judge from a rate. Every property below is shown inside and out.', it.stays, 3)}
${altSec}
${section('dining', 'Where you eat', 'Marquee dinners. Gluten-free status is stated for each, because that decides more of this list than the stars do.', it.dining, 3)}
${section('doing', 'What you do', 'The experiences — mostly hands-on, mostly things you cannot do anywhere else.', it.doing, 3)}
${placesSec}

<section class="sec" id="days">
  <h2>Day by day</h2>
  <p class="sec-sub">${esc(it.dates)} · ${esc(it.length)}</p>
  <div class="days">${dayRows}</div>
</section>

<section class="sec sec-alt" id="cost">
  <h2>What it costs</h2>
  <div class="tablewrap"><table class="costs">
    <tbody>${it.costRows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${esc(v)}</td></tr>`).join('')}</tbody>
    <tfoot><tr><th scope="row">Total, per couple</th><td>${esc(it.costTotal)}</td></tr></tfoot>
  </table></div>
  <p class="after">${it.levers}</p>
  <div class="note note-${it.verdictTone}"><h3>${it.verdictTone === 'warn' ? 'Read this before choosing' : 'The verdict'}</h3><p>${it.verdict}</p></div>
</section>

<nav class="pager">
  ${itineraries.filter((x) => x.num !== it.num).map((x) => `<a href="${x.slug}.html"><span>Itinerary ${x.num}</span><b>${esc(x.title)}</b><em>${esc(x.cost)}</em></a>`).join('')}
</nav>`;

  return shell({ title: `${it.num}. ${it.title} — Japan 2026`, desc: it.tagline, body, active: it.slug, page: 'itinerary' });
}

// ── write ───────────────────────────────────────────────────────────
mkdirSync(OUT, { recursive: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
writeFileSync(join(OUT, 'index.html'), buildIndex());
for (const it of itineraries) writeFileSync(join(OUT, `${it.slug}.html`), buildItinerary(it));

for (const f of readdirSync(join(ROOT, 'assets-src'))) {
  copyFileSync(join(ROOT, 'assets-src', f), join(OUT, 'assets', f));
}

const total = Object.values(media).reduce((n, l) => n + l.length, 0);
const withPhotos = Object.keys(entities).filter((s) => hasShots(s)).length;
console.log(`built ${itineraries.length + 1} pages · ${total} photos across ${withPhotos}/${Object.keys(entities).length} entities`);
