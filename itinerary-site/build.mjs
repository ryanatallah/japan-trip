#!/usr/bin/env node
// Static site builder — zero dependencies. Reads content/ and emits site/.
//
// Six top-level pages:
//   index.html    the plan            buildPlan()      <- content/plan.mjs
//   issues.html   what is still open  buildIssues()    <- content/issues.mjs
//   bases.html    where you sleep     buildBases()     <- content/bases.mjs
//   days.html     how each day runs   buildDays()      <- content/days.mjs
//   history.html  how it got here     buildHistory()   <- content/history.mjs
//   archive.html  the six that lost   buildArchive()   <- content/alternates.mjs + shared.mjs
//
// plus one page per archived alternate, and a redirect stub at the URL the plan used to live at.
//
// The split is by reading mode, not by subject. The plan is read once at a desk before booking;
// issues is a working list you come back to; bases answers "how far is that from the hotel"; days
// is read on the day, on a phone. All four describe the same fifteen nights, and the day-by-day on
// the plan borrows its leave-by line from days.mjs's arithmetic so the two can never drift.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { entities } from './content/entities.mjs';
import { plan } from './content/plan.mjs';
import { alternates, recommendation, wishlist } from './content/alternates.mjs';
import { shared } from './content/shared.mjs';
import { revisions } from './content/history.mjs';
import { itineraries } from './content/itineraries.mjs';
import { bases } from './content/bases.mjs';
import { days as runDays, standing, legs } from './content/days.mjs';
import { issues, summary as issueSummary, GROUPS as ISSUE_GROUPS } from './content/issues.mjs';
import { renderMap } from './tools/map.mjs';
import { placeBase, renderRose } from './tools/basemap.mjs';
import { dayJourneys, daySummary, sortedFixed, toClock, dur } from './tools/schedule.mjs';

const WORDS = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'site');

// The URL the plan lived at while it was still "Itinerary 1B". Kept as a redirect stub so links
// already shared do not dead-end.
const OLD_PLAN_SLUG = 'momiji-with-a-detour';

/** The plan is index.html; every archived alternate is <slug>.html. */
const href = (it) => (it.slug === plan.slug ? 'index.html' : `${it.slug}.html`);

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
  return `<button class="shot ${className}" style="--ar:${ratio.toFixed(2)}%" data-full="img/${esc(shot.file)}" data-caption="${esc(shot.caption)}" data-credit="${esc(shot.credit || '')}" data-source="${esc(shot.sourceUrl || '')}" aria-label="${esc(shot.caption)}">
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

/** Three photos drawn from one or more entities — used where a section has few refs but wants a
 *  full band rather than coverRow's single, lonely image. */
function photoRow(slugs, n = 3) {
  const picks = slugs.flatMap((s) => ordered(s)).slice(0, n);
  if (!picks.length) return '';
  return `<div class="grid grid-3">${picks.map((s) => img(s, { sizes: '(max-width:700px) 100vw, 30vw' })).join('')}</div>`;
}

/** Small inline photo row used on day cards. */
function strip(refs) {
  // cover() ranks wildlife and establishing shots first, which reads far better as a
  // day-card lead than ordered()'s gallery sequence (that one leads with process shots).
  const picks = refs.flatMap((r) => {
    const c = cover(r) || ordered(r)[0];
    return c ? [{ ...c, _slug: r }] : [];
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

// ── the outline rail ────────────────────────────────────────────────
// The left rail is read back out of the HTML the page just generated, rather than kept as a
// second hand-written list beside it. The old horizontal subnav was that second list, and it
// had already drifted: it never learned about the "Still on the table" section.
//
//   tier 1  <section class="sec" id>   labelled by its own <h2>
//   tier 2  the id-bearing cards in it — .entity, .place, .brief — labelled by their <h3>
//
// There is a tier 3 on these pages (h4.galhead: "The building", "The setting", "The rooms") but
// it is photo-category captions, repeated inside every gallery. It is furniture, not structure,
// and putting eighty of them in a navigation would bury the thirty entries that mean something.
const SECTION_LABEL = { pitch: 'The idea' };   // the one section with no heading of its own
// `sheet`, `base` and `issue` are the card types on the three operational pages. A day sheet's
// <h3> leads with its date for exactly this reason — the outline entry has to read "Fri 6 · SFO →
// HND" rather than "SFO → HND", or seventeen of them are indistinguishable in a sidebar.
const CARD_OPEN = /<(?:article|div) class="(?:entity|place|brief|sheet|issue)[^"]*" id="([^"]+)"[^>]*>/g;
const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Slice `html` at every match of `re`, returning [captured-id, chunk-up-to-the-next-match]. */
function blocks(html, re) {
  const hits = [...html.matchAll(re)];
  return hits.map((m, i) => [m[1], html.slice(m.index, i + 1 < hits.length ? hits[i + 1].index : html.length)]);
}

function outlineOf(body) {
  return blocks(body, /<section class="sec[^"]*" id="([^"]+)"[^>]*>/g).map(([id, sec]) => ({
    id,
    label: SECTION_LABEL[id] || stripTags(sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] || id),
    kids: blocks(sec, CARD_OPEN).flatMap(([kid, card]) => {
      const h3 = card.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
      return h3 ? [{ id: kid, label: stripTags(h3[1]) }] : [];
    }),
  }));
}

// Reads as an indented outline at 15px, which "☰" does not.
const OL_ICON = `<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"><circle cx="1.6" cy="3" r="1.3"/><rect x="4.6" y="2.25" width="9.8" height="1.5" rx=".75"/><circle cx="4.6" cy="8" r="1.3"/><rect x="7.6" y="7.25" width="6.8" height="1.5" rx=".75"/><circle cx="4.6" cy="13" r="1.3"/><rect x="7.6" y="12.25" width="6.8" height="1.5" rx=".75"/></svg>`;

// Points right; CSS rotates it a quarter turn when the section is open.
const CHEVRON = `<svg class="chev" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M4.25 2.25 8 6l-3.75 3.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Labels arrive already HTML-escaped (they were escaped on the way into the page), so they are
// emitted, not re-escaped — including into aria-label, where entities resolve the same way.
function outlineNav(items) {
  const rows = items.map((s) => {
    const twisty = s.kids.length
      ? `<button class="ol-tw" type="button" aria-expanded="false" aria-label="Show what is inside ${s.label}">${CHEVRON}</button>`
      : '<span class="ol-tw" aria-hidden="true"></span>';
    const sub = s.kids.length ? `<div class="ol-wrap"><ol class="ol-sub">${s.kids.map((k) =>
      `<li><a href="#${esc(k.id)}" data-t="${esc(k.id)}">${k.label}</a></li>`).join('')}</ol></div>` : '';
    return `<li class="ol-sec${s.kids.length ? ' has-sub' : ''}">
      <div class="ol-row">${twisty}<a href="#${esc(s.id)}" data-t="${esc(s.id)}">${s.label}</a></div>${sub}
    </li>`;
  }).join('');
  return `<nav class="outline" id="outline" aria-label="Outline">
  <div class="ol-head"><span>Outline</span><button class="ol-close" type="button" aria-label="Close the outline">✕</button></div>
  <ol class="ol-list">${rows}</ol>
</nav>
<div class="ol-scrim"></div>
<button class="crumb" type="button" aria-controls="outline" aria-expanded="false">
  <span class="ol-ic" aria-hidden="true">${OL_ICON}</span>
  <span class="crumb-tx"><b>${items[0]?.label || 'Outline'}</b><em></em></span>
  <span class="crumb-caret">${CHEVRON}</span>
</button>`;
}

// ── page chrome ─────────────────────────────────────────────────────
// `section` is which of the three top-level pages this is: 'plan' | 'history' | 'archive'.
// `chips` adds the seven-itinerary strip — the navigation across the comparison, which belongs
// only to the archive. `active` marks the current itinerary within that strip.
// Six of them now, which is more than fits a phone at full length — so each carries a short form
// too, and the bar scrolls horizontally as a backstop.
const TOP = [
  ['index.html', 'Itinerary', 'plan', 'Trip'],
  ['issues.html', 'Issues', 'issues', 'Issues'],
  ['bases.html', 'Bases', 'bases', 'Bases'],
  ['days.html', 'Day sheets', 'days', 'Days'],
  ['history.html', 'Change history', 'history', 'History'],
  ['archive.html', 'Archive', 'archive', 'Archive'],
];

function shell({ title, desc, body, active = '', page = '', section = 'plan', chips = false, rail = false }) {
  const top = TOP.map(([url, label, key, short]) =>
    `<a href="${url}"${section === key ? ' class="on" aria-current="page"' : ''}><span class="t-long">${label}</span><span class="t-short">${short}</span></a>`
  ).join('');
  const chipbar = chips ? `<nav class="itinbar" aria-label="The seven itineraries">
  <span class="itinbar-label">Compare</span>
  ${itineraries.map((it) => `<a href="${href(it)}" class="${active === it.slug ? 'on' : ''}${it.slug === plan.slug ? ' is-plan' : ''}"><b>${it.num}</b><span>${esc(it.title)}</span></a>`).join('')}
</nav>` : '';
  return `<!doctype html>
<html lang="en" data-page="${esc(page)}"${rail ? ' data-rail' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
<link rel="stylesheet" href="assets/site.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍁</text></svg>">
<!-- Theme and outline state decided before first paint: both move the layout, and applying
     them from site.js at the end of <body> showed the wrong one for a frame. -->
<script>(()=>{try{const r=document.documentElement,t=localStorage.getItem('jp26-theme');if(t)r.setAttribute('data-theme',t);
r.setAttribute('data-outline',innerWidth>=1180?(localStorage.getItem('jp26-outline')||'on'):'off');}catch(e){}})()</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<nav class="nav">
  <a href="index.html" class="nav-home"><span class="mark">🍁</span><span class="nav-title">Japan 2026</span></a>
  <div class="navtop">${top}</div>
  ${rail ? `<button class="ol-toggle" type="button" aria-controls="outline" aria-expanded="true" aria-label="Toggle the outline"><span class="ol-ic">${OL_ICON}</span></button>` : ''}
  <button class="theme" type="button" aria-label="Toggle light and dark">◐</button>
</nav>
${chipbar}
${rail ? outlineNav(outlineOf(body)) : ''}
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
  <figure><img alt=""><figcaption><span class="lb-cap"></span> <span class="lb-credit"></span> <a class="lb-src" target="_blank" rel="noopener">source ↗</a></figcaption></figure>
</div>
<script src="assets/site.js"></script>
</body>
</html>`;
}

// ── archive ─────────────────────────────────────────────────────────
// The old front page, reframed. It still compares all seven — a comparison with the winner
// removed cannot be read — but the plan's row, card and column link to index.html and are badged.
function buildArchive() {
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

  const isPlan = (it) => it.slug === plan.slug;

  const glanceRows = itineraries.map((it) => `<tr${isPlan(it) ? ' class="row-plan"' : ''}>
    <td class="c-num"><a href="${href(it)}">${it.num}</a></td>
    <td class="c-name"><a href="${href(it)}">${esc(it.title)}</a>${isPlan(it) ? '<b class="tag-plan">The plan</b>' : ''}<small>${esc(it.bestFor)}</small></td>
    <td>${esc(it.dates)}</td>
    <td class="c-route">${it.route.map((r) => esc(r)).join(' → ')}</td>
    <td class="c-cost">${esc(it.cost)}</td>
    <td><span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span></td>
  </tr>`).join('');

  const cards = itineraries.map((it, i) => {
    const mos = it.heroCard.map((s) => cover(s)).filter(Boolean);
    const shotsHtml = mos.length
      ? mos.slice(0, 3).map((s, n) => img(s, { className: n === 0 ? 'lead' : '', sizes: '(max-width: 700px) 100vw, 40vw', eager: i < 2 })).join('')
      : placeholder('Photos being sourced');
    // A div, not an anchor: the shots are lightbox buttons, and a <button> inside an <a>
    // is invalid HTML and ambiguous for keyboard users. The title and "See it" already link.
    return `<article class="card${isPlan(it) ? ' card-plan' : ''}">
    <div class="card-shots">${shotsHtml}</div>
    <div class="card-text">
      <p class="card-num">Itinerary ${it.num}${isPlan(it) ? ' <b class="tag-plan">The plan</b>' : it.variantOf ? ` <em>· fork of ${it.variantOf}</em>` : ''}</p>
      <h3><a href="${href(it)}">${esc(it.title)}</a></h3>
      <p class="card-tag">${esc(it.tagline)}</p>
      <p class="card-meta"><span>${esc(it.dates)}</span><i>·</i><span>${esc(it.length)}</span><i>·</i><span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span></p>
      <p class="card-route">${it.route.map((r) => `<span>${esc(r)}</span>`).join('<i>→</i>')}</p>
      <p>${it.pitch}</p>
      <p class="card-foot"><b>${esc(it.cost)}</b> <small>estimated, per couple</small> <a class="go" href="${href(it)}">${isPlan(it) ? 'Open the plan →' : 'See it →'}</a></p>
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
      // The plan's cells are marked per-cell rather than by column position, so the band stays
      // on the right column if the array order ever changes.
      return `<td class="w w-${cls}${isPlan(it) ? ' w-plan' : ''}"${why ? ` title="${esc(why)}"` : ''}><span aria-label="${label}">${glyph}</span>${why ? `<em>${esc(why)}</em>` : ''}</td>`;
    }).join('');
    return `<tr><th scope="row">${esc(w.label)}<small>${esc(w.note)}</small></th>${cells}</tr>`;
  }).join('');

  const cutEntities = Object.entries(entities).filter(([, e]) => e.cut);
  const cutHtml = cutEntities.map(([slug, e]) => {
    const list = ordered(slug).slice(0, 3);
    return `<article class="cutcard">
      <div class="cut-shots">${list.length ? list.map((s) => img(s, { sizes: '(max-width:700px) 33vw, 140px' })).join('') : ''}</div>
      <div class="cut-text"><h3>${esc(e.name)}</h3><p class="cut-loc">${esc(e.location || '')}${e.rate ? ` · ${esc(e.rate)}` : ''}</p><p class="cut-why">${e.cut}</p></div>
    </article>`;
  }).join('');

  const recs = recommendation.map(([want, why, n]) => {
    const it = itineraries.find((x) => x.num === n);
    return `<li${isPlan(it) ? ' class="rec-plan"' : ''}><span class="rec-want">${esc(want)}</span><a class="rec-pick" href="${href(it)}">Itinerary ${n} — ${esc(it.title)}${isPlan(it) ? ' ✓' : ''}</a><span class="rec-why">${esc(why)}</span></li>`;
  }).join('');

  const body = `
<header class="hero hero-index">
  ${heroShots.length >= 3 ? `<div class="hero-collage" style="--cols:${Math.min(heroShots.length, 6)}">${heroShots.slice(0, 6).map((s) => img(s, { sizes: '17vw', eager: true })).join('')}</div>` : ''}
  <div class="hero-inner">
    <p class="kicker">The archive · decided ${esc(plan.decided)}</p>
    <h1>${WORDS[itineraries.length] || itineraries.length} ways to see Japan</h1>
    <p class="hero-sub">The whole comparison, kept as it read on the day the choice was made. <strong>Itinerary ${plan.num} — ${esc(plan.title)}</strong> won; the other six are here with their photographs, their costs and their honest verdicts, because a decision you cannot re-examine is not a decision.</p>
    <p class="hero-jump"><a class="jump-plan" href="index.html">→ Open the plan</a>${alternates.map((it) => `<a href="${href(it)}">${it.num}. ${esc(it.title)}</a>`).join('')}</p>
  </div>
</header>

<div class="archnote">
  <p><b>This is the archive.</b> Nothing here is being kept up to date — the six routes below hold the dates, costs and verdicts they had on ${esc(plan.decided)}. For the trip that is actually happening, see <a href="index.html">the itinerary</a>; for what has changed since, <a href="history.html">the change history</a>.</p>
</div>

<section class="sec" id="glance">
  <h2>The ${WORDS[itineraries.length] || itineraries.length} at a glance</h2>
  <div class="tablewrap"><table class="glance">
    <thead><tr><th>#</th><th>Itinerary</th><th>Dates</th><th>Route</th><th>Est. total</th><th>Temp</th></tr></thead>
    <tbody>${glanceRows}</tbody>
  </table></div>
  <div class="note note-good"><h3>Dated around Thanksgiving</h3><p>${shared.colorado}</p></div>
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
    <thead><tr><th>You asked for</th>${itineraries.map((it) => `<th class="wcol${isPlan(it) ? ' wcol-plan' : ''}"><a href="${href(it)}"><b>${it.num}</b><span>${esc(it.title)}</span></a></th>`).join('')}</tr></thead>
    <tbody>${wishHtml}</tbody>
  </table></div>
</section>

<section class="sec" id="choose">
  <h2>How the choice was framed</h2>
  <p class="sec-sub">The question each itinerary answered best. The first line is the one that won.</p>
  <ul class="recs">${recs}</ul>
</section>

<section class="sec" id="cut">
  <h2>Cut from the plan</h2>
  <p class="sec-sub">Removed at your request. Kept here with their photos so the decision is reversible — say the word and any of them goes back in.</p>
  <div class="cuts">${cutHtml}</div>
</section>

<section class="sec sec-alt" id="foundations">
  <h2>Shared foundations</h2>
  <p class="sec-sub">True of all seven itineraries above. The plan states the same material in its own terms — named to its actual flights, kitchens and dates — on <a href="index.html">the itinerary page</a>.</p>

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
    <!-- The text carries inline markup on purpose (the Picchio deadline is bolded): not escaped. -->
    <ol class="booknow">${shared.bookNow.groups.map(([w, t]) => `<li><b>${esc(w)}</b><span>${t}</span></li>`).join('')}</ol>
  </div>
</section>`;

  return shell({
    title: 'Archive — the seven itineraries · Japan 2026',
    desc: `The ${itineraries.length}-way comparison behind the plan, kept as it read on ${plan.decided}.`,
    body, page: 'archive', section: 'archive', chips: true,
  });
}

// ── pieces shared by the plan page and the archived alternates ───────
// `runbook: true` threads the derived leave-by line onto each day card. Only the plan gets it —
// the archived alternates run on different dates, so the runbook's arithmetic does not describe
// them and a borrowed clock time would be a lie.
const daysHtml = (it, { runbook = false } = {}) => it.days.map((d) => {
  const rd = runbook ? runDays.find((r) => r.date === d.date) : null;
  const line = rd ? daySummary(rd) : null;
  return `<div class="day${d.span ? ' day-span' : ''}">
    <div class="day-when"><span class="day-date">${esc(d.date)}</span><span class="day-where">${esc(d.where)}</span></div>
    <div class="day-what"><p>${d.text}</p>${line
      ? `<p class="day-run"><a href="days.html#${dayId(rd)}"><span class="run-tag">Runs</span>${esc(line)}</a></p>`
      : ''}${strip(d.ref || [])}</div>
  </div>`;
}).join('');

function entitySection(id, title, sub, slugs, { level = 3, alt = false, lead = '' } = {}) {
  if (!slugs?.length) return '';
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="${id}">
      <h2>${esc(title)}</h2>
      ${sub ? `<p class="sec-sub">${sub}</p>` : ''}
      ${lead}
      ${slugs.map((s) => entityCard(s, { level })).join('')}
    </section>`;
}

const placesSection = (it) => (it.places?.length ? `<section class="sec sec-alt" id="places">
    <h2>Where you actually are</h2>
    <p class="sec-sub">The temples, gardens, lakes and landscapes this route passes through — shown in the season you would see them.</p>
    <div class="places">${it.places.map((s) => placeCard(s)).join('')}</div>
  </section>` : '');

const heroBg = (shot) => (shot
  ? `<img class="hero-bg" src="img/${esc(shot.file)}" alt="${esc(shot.caption)}" fetchpriority="high">`
  : '<div class="hero-bg hero-bg-empty"></div>');

const heroFacts = (it) => `<p class="hero-facts">
      <span><b>${esc(it.dates)}</b></span>
      <span>${esc(it.length)}</span>
      <span class="temp temp-${it.tempStatus}">${esc(it.temp)}</span>
      <span><b>${esc(it.cost)}</b> per couple</span>
    </p>
    <p class="hero-route">${it.route.map((r) => `<span>${esc(r)}</span>`).join('<i>→</i>')}<em>${esc(it.routeNote)}</em></p>`;

const costTable = (it) => `<div class="tablewrap"><table class="costs">
    <tbody>${it.costRows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${esc(v)}</td></tr>`).join('')}</tbody>
    <tfoot><tr><th scope="row">Total, per couple</th><td>${esc(it.costTotal)}</td></tr></tfoot>
  </table></div>`;

// ── the plan ────────────────────────────────────────────────────────
// Same furniture as an itinerary page, but the material that used to sit in a "shared
// foundations" block on the old index is threaded into the sections it belongs to: flights
// after the map, the gluten-free brief at the head of the dining list, the cost model under
// the cost table, the booking calendar last, where it is actionable.
function buildPlan() {
  const it = plan;
  const heroShot = cover(it.hero);

  const body = `
<header class="hero hero-itin hero-plan">
  ${heroBg(heroShot)}
  <div class="hero-inner">
    <p class="kicker">The plan · decided ${esc(it.decided)}</p>
    <h1>${esc(it.title)}</h1>
    <p class="hero-sub">${esc(it.tagline)}</p>
    ${heroFacts(it)}
  </div>
  ${heroShot ? `<p class="hero-credit">${esc(heroShot.caption)}</p>` : ''}
</header>

<section class="sec" id="pitch">
  <div class="pitch"><p class="lede lede-big">${it.pitch}</p></div>
  ${renderMap(it.slug)}
</section>

<section class="sec sec-alt" id="flights">
  <h2>${esc(it.flights.title)}</h2>
  <p class="sec-sub">${esc(it.flights.sub)}</p>
  <ul class="ticks">${it.flights.points.map((p) => `<li>${p}</li>`).join('')}</ul>
  ${photoRow(it.flights.ref || [])}
</section>

<section class="sec" id="transport">
  <h2>Getting around</h2>
  <div class="transport">
    <h3><span class="mode">${esc(it.transport.mode)}</span></h3>
    <p>${it.transport.text}</p>
  </div>
  <ul class="ticks">${(it.transport.points || []).map((p) => `<li>${p}</li>`).join('')}</ul>
  ${photoRow(it.transport.ref || [])}
</section>

${entitySection('stays', 'Where you sleep', 'The biggest single line in the budget, and the thing hardest to judge from a rate. Every property below is shown inside and out.', it.stays)}

${entitySection('dining', 'Where you eat', 'Six of the fifteen dinners are set menus inside a hotel stay. These are the rest — and the gluten-free position on each, which decided more of this list than the stars did.', it.dining, {
    lead: `<div class="brief" id="gf">
      <h3>${esc(it.glutenFree.title)}</h3>
      <p class="sub">${esc(it.glutenFree.sub)}</p>
      <ul class="ticks">${it.glutenFree.points.map((p) => `<li>${p}</li>`).join('')}</ul>
    </div>`,
  })}

${entitySection('doing', 'What you do', 'The experiences — mostly hands-on, mostly things you cannot do anywhere else.', it.doing)}
${placesSection(it)}

<section class="sec" id="days">
  <h2>Day by day</h2>
  <p class="sec-sub">${esc(it.dates)} · ${esc(it.length)} · leave-by times come from <a href="days.html">the day sheets</a></p>
  <div class="days">${daysHtml(it, { runbook: true })}</div>
</section>

<section class="sec sec-alt" id="cost">
  <h2>What it costs</h2>
  ${costTable(it)}
  <p class="after">${it.costModel}</p>
  <div class="note note-${it.verdictTone}"><h3>Why this one</h3><p>${it.verdict}</p></div>
</section>

<section class="sec" id="book">
  <h2>${esc(it.bookNow.title)}</h2>
  <p class="sec-sub">${esc(it.bookNow.sub)}</p>
  <ol class="booknow">${it.bookNow.groups.map(([w, t]) => `<li><b>${esc(w)}</b><span>${t}</span></li>`).join('')}</ol>
</section>

<nav class="pager pager-plan">
  <a href="history.html"><span>How it got here</span><b>Change history</b><em>${revisions.length} entries · latest ${esc(revisions[0].when)}</em></a>
  <a href="archive.html"><span>The six that lost</span><b>Archive</b><em>The full comparison, frozen</em></a>
</nav>`;

  return shell({
    title: `The plan — ${it.title} · Japan 2026`,
    desc: `${it.length}, ${it.dates}. ${it.tagline}`,
    body, page: 'plan', section: 'plan', rail: true,
  });
}

// ── the runbook ─────────────────────────────────────────────────────
// Everything on these pages derives from content/bases.mjs and content/days.mjs. Nothing here
// clock time somebody typed: the leave-by figures come out of tools/schedule.mjs, and the
// distances on the base maps come out of the same `min` values that drive those figures.
const dayId = (d) => `d-${d.date.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

const MODE = {
  walk: 'on foot', metro: 'metro', rail: 'rail', bus: 'bus',
  boat: 'boat', ropeway: 'ropeway', car: 'car', air: 'air',
};

const MEAL_LABEL = { b: 'Breakfast', l: 'Lunch', d: 'Dinner' };
const MEAL_STATUS = {
  included: ['Included', 'in'],
  booked: ['Booked', 'bk'],
  open: ['Open', 'op'],
  flight: ['On board', 'fl'],
  none: ['None', 'no'],
};

/** One base: the isochrone rose, and the list that carries everything the rose cannot. */
function baseCard(base) {
  const placed = placeBase(base);
  const rows = placed.pts.map((p) => {
    const o = p.poi;
    const bits = [
      o.via ? `<span class="p-via">${o.via}</span>` : '',
      o.hours ? `<span class="p-hours"><b>Hours</b> ${o.hours}</span>` : '',
      o.book ? `<span class="p-book"><b>Booking</b> ${o.book}</span>` : '',
      o.warn ? `<span class="p-warn">${o.warn}</span>` : '',
      o.why ? `<span class="p-why">${o.why}</span>` : '',
    ].filter(Boolean).join('');
    return `<li class="poi${o.mode === 'walk' ? ' poi-walk' : ''}">
      <span class="p-n">${p.n}</span>
      <div class="p-body">
        <p class="p-head"><b>${esc(o.name)}</b>
          <span class="p-time">${dur(o.min)}</span>
          <span class="p-mode">${esc(MODE[o.mode] || o.mode)}</span>
          ${o.confirm ? '<span class="p-check">confirm</span>' : ''}</p>
        ${bits ? `<p class="p-meta">${bits}</p>` : ''}
      </div>
    </li>`;
  }).join('');

  // No heading of its own — the enclosing <section> carries the hotel name as its <h2>, which is
  // what the outline rail reads. A duplicate <h3> here put the name in the sidebar twice.
  const e = entities[base.entity];
  return `<div class="base">
    <header class="base-head">
      <p class="base-meta"><b>${esc(base.hotel)}</b><i>·</i><span>${esc(base.where)}</span><i>·</i><span>${esc(base.dates)}</span></p>
      <p class="base-times">Check in ${esc(base.checkIn)} · check out ${esc(base.checkOut)}${base.checkConfirm ? ' <span class="p-check">confirm</span>' : ''}${e ? ` · <a href="index.html#${esc(base.entity)}">see the hotel →</a>` : ''}</p>
    </header>
    <p class="base-lede">${base.lede}</p>
    <div class="base-grid">
      <figure class="rosefig">
        ${renderRose(base, placed)}
        <figcaption><b>${esc(base.hotel)}</b> is the centre. Direction is true; distance out is <b>door-to-door travel time</b>, not kilometres. Hollow dots are walkable.</figcaption>
      </figure>
      <ol class="pois">${rows}</ol>
    </div>
  </div>`;
}

/** One day sheet: the spine of fixed points, the journeys between them, and the meal plan. */
function daySheet(d) {
  const base = bases.find((b) => b.id === d.base);
  const fixed = sortedFixed(d);

  const fixedHtml = fixed.length ? `<ol class="fixed">${fixed.map((f) => `<li class="fx fx-${esc(f.kind || 'note')}">
      <span class="fx-t">${esc(f.t)}</span>
      <span class="fx-w">${esc(f.what)}${f.confirm ? ' <span class="p-check">confirm</span>' : ''}${f.note ? `<em>${f.note}</em>` : ''}</span>
    </li>`).join('')}</ol>` : '<p class="none">Nothing with a clock time.</p>';

  const journeys = dayJourneys(d);
  const movesHtml = journeys.length ? journeys.map((j) => {
    const legs = j.legs.map((m) => `<li class="leg">
        <span class="leg-mode">${esc(MODE[m.mode] || m.mode)}</span>
        <span class="leg-route">${esc(m.from)} → ${esc(m.to)}<span class="leg-min">${dur(m.min)}</span></span>
        ${m.note ? `<em>${m.note}</em>` : ''}
      </li>`).join('');
    const head = j.leaveBy == null ? '' : `<p class="j-leave">
        <span class="j-clock">${toClock(j.leaveBy)}</span>
        <span class="j-word">${j.derived ? 'leave by' : 'leave'}</span>
        <span class="j-tail">${dur(j.total)}${j.anchor ? ` · for ${esc(j.anchor.t)} ${esc(j.anchor.what.replace(/^./, (c) => c.toLowerCase()))}` : ''}</span>
      </p>`;
    return `<div class="journey${j.derived ? ' is-derived' : ''}">${head}<ul class="legs">${legs}</ul></div>`;
  }).join('') : `<p class="none">${esc(d.noMoves || 'You stay put.')}</p>`;

  const mealsHtml = ['b', 'l', 'd'].map((k) => {
    const m = d.meals?.[k];
    if (!m) return '';
    const [label, cls] = MEAL_STATUS[m.status] || MEAL_STATUS.open;
    return `<li class="meal meal-${cls}">
      <span class="m-k">${MEAL_LABEL[k]}</span>
      <span class="m-w"><b>${esc(m.where || '—')}</b>${m.at ? ` <span class="m-at">${esc(m.at)}</span>` : ''}<span class="m-s">${label}</span>
      ${m.note ? `<em>${m.note}</em>` : ''}${m.warn ? `<em class="m-warn">${m.warn}</em>` : ''}</span>
    </li>`;
  }).join('');

  // The date lives inside the <h3> so the outline rail reads "Fri 6 · SFO → HND" rather than
  // seventeen indistinguishable titles. outlineOf() strips the tags and keeps the text.
  return `<article class="sheet${d.transfer ? ' sheet-move' : ''}" id="${dayId(d)}">
    <header class="sheet-head">
      <h3><b class="sheet-date">${esc(d.date)}</b> <span class="sheet-title">${esc(d.title)}</span></h3>
      <p class="sheet-base"><span class="sheet-dow">${esc(d.dow)}</span>${base
        ? ` · ${d.transfer ? 'ends at' : 'based at'} <a href="bases.html#base-${esc(base.id)}">${esc(base.hotel)}</a> · ${esc(d.where)}`
        : ` · ${esc(d.where)}`}</p>
    </header>
    <div class="sheet-grid">
      <div class="sheet-col">
        <h4>Fixed points</h4>
        ${fixedHtml}
      </div>
      <div class="sheet-col">
        <h4>Getting there</h4>
        ${movesHtml}
      </div>
      <div class="sheet-col">
        <h4>Meals</h4>
        <ul class="meals">${mealsHtml}</ul>
      </div>
    </div>
    ${d.notes?.length ? `<div class="sheet-notes"><ul class="ticks">${d.notes.map((n) => `<li>${n}</li>`).join('')}</ul></div>` : ''}
  </article>`;
}

// ── issues ──────────────────────────────────────────────────────────
// The working list. Deliberately the plainest page on the site: no photography except where an
// issue is a choice between two hotels, because this is the one page read to do something rather
// than to look at something.
const KIND_LABEL = { decide: 'Decide', book: 'Book', waiting: 'Waiting' };

function issueCard(i) {
  const done = Boolean(i.resolved);
  return `<article class="issue${done ? ' issue-done' : ''}" id="i-${esc(i.id)}">
    <header class="issue-head">
      <p class="issue-tags">
        <span class="itag itag-${esc(i.kind)}">${done ? 'Resolved' : esc(KIND_LABEL[i.kind] || i.kind)}</span>
        ${i.by && !done ? `<span class="itag itag-by">${esc(i.by)}</span>` : ''}
        ${i.affects ? `<span class="itag itag-days">${esc(i.affects)}</span>` : ''}
      </p>
      <h3>${esc(i.title)}</h3>
    </header>
    <div class="issue-body">
      <p>${i.body}</p>
      ${i.resolved ? `<p class="issue-res"><b>Resolved</b> ${i.resolved}</p>` : ''}
      ${i.next ? `<p class="issue-next"><b>Next</b> ${i.next}</p>` : ''}
    </div>
    ${i.entity ? `<div class="issue-entity">${entityCard(i.entity, { level: 4 })}</div>` : ''}
  </article>`;
}

function buildIssues() {
  const open = issues.filter((i) => !i.resolved);
  const done = issues.filter((i) => i.resolved);
  const count = (k) => open.filter((i) => i.kind === k).length;

  const groups = ISSUE_GROUPS.map(([kind, label, sub]) => {
    const list = open.filter((i) => i.kind === kind);
    if (!list.length) return '';
    return `<section class="sec" id="${kind}">
      <h2>${esc(label)}</h2>
      <p class="sec-sub">${esc(sub)}</p>
      <div class="issues">${list.map(issueCard).join('')}</div>
    </section>`;
  }).join('');

  const body = `
<header class="hero hero-plain">
  <div class="hero-inner">
    <p class="kicker">Open issues · ${esc(plan.dates)}</p>
    <h1>${esc(issueSummary.title)}</h1>
    <p class="hero-sub">${esc(issueSummary.sub)}</p>
    <p class="tally">
      <span class="ty ty-decide"><b>${count('decide')}</b> to decide</span>
      <span class="ty ty-book"><b>${count('book')}</b> to book</span>
      <span class="ty ty-waiting"><b>${count('waiting')}</b> waiting on a reply</span>
      <span class="ty ty-done"><b>${done.length}</b> resolved</span>
    </p>
  </div>
</header>

${groups}

${done.length ? `<section class="sec sec-alt" id="resolved">
  <h2>Resolved</h2>
  <p class="sec-sub">Kept, with the reasoning. A decision you cannot see the argument for is one you will make again in three weeks.</p>
  <div class="issues">${done.map(issueCard).join('')}</div>
</section>` : ''}

<nav class="pager pager-plan">
  <a href="index.html"><span>The trip itself</span><b>Itinerary</b><em>${esc(plan.dates)} · ${esc(plan.cost)}</em></a>
  <a href="days.html"><span>Where these bite</span><b>Day sheets</b><em>${runDays.length} days</em></a>
</nav>`;

  return shell({
    title: 'Open issues — Japan 2026',
    desc: `${open.length} open questions on the ${plan.dates} trip: decisions, bookings and replies still outstanding.`,
    body, page: 'issues', section: 'issues', rail: true,
  });
}

// ── bases ───────────────────────────────────────────────────────────
// One section per hotel, so the outline rail lists the four of them.
function buildBases() {
  const body = `
<header class="hero hero-plain">
  <div class="hero-inner">
    <p class="kicker">The four bases · ${esc(plan.length)}</p>
    <h1>Where you sleep, and how far everything is</h1>
    <p class="hero-sub"><strong>Bearing is true and distance is time.</strong> Each stop sits at its real compass direction from the hotel, but its distance from the centre is door-to-door travel minutes on a log scale — so a three-minute walk and a two-hour day trip can share one figure. It is the question you actually ask standing in a lobby, and a true-scale map cannot answer it: on one of Tokyo, Karuizawa is 140km out and everything in the city collapses to a dot.</p>
  </div>
</header>

${bases.map((b, i) => `<section class="sec${i % 2 ? ' sec-alt' : ''}" id="base-${esc(b.id)}">
  <h2>${esc(b.name)}</h2>
  ${baseCard(b)}
</section>`).join('')}

<nav class="pager pager-plan">
  <a href="days.html"><span>What happens at each</span><b>Day sheets</b><em>${runDays.length} days</em></a>
  <a href="index.html"><span>The trip itself</span><b>Itinerary</b><em>${esc(plan.dates)} · ${esc(plan.cost)}</em></a>
</nav>`;

  return shell({
    title: 'The four bases — Japan 2026',
    desc: 'Hotel-centred travel-time maps for Aman Tokyo, Gora Kadan, Tobira Onsen Myojinkan and SOWAKA.',
    body, page: 'bases', section: 'bases', rail: true,
  });
}

// ── day sheets ──────────────────────────────────────────────────────
// Grouped into six legs, which is what gives the outline two useful tiers: the leg you are in,
// and the day within it. A flat list of seventeen would be a wall in a sidebar.
function buildDays() {
  const sections = legs().map((leg) => `<section class="sec${leg.base ? '' : ' sec-alt'}" id="leg-${esc(leg.id)}">
    <h2>${esc(leg.label)}</h2>
    <p class="sec-sub">${esc(leg.span)}${leg.days.length > 1 ? ` · ${leg.days.length} days` : ''}${leg.base
      ? ` · <a href="bases.html#base-${esc(leg.base)}">${esc(bases.find((b) => b.id === leg.base)?.hotel || '')}</a>`
      : ''}</p>
    <div class="sheets">${leg.days.map(daySheet).join('')}</div>
  </section>`).join('');

  const body = `
<header class="hero hero-plain">
  <div class="hero-inner">
    <p class="kicker">Day sheets · ${esc(plan.dates)}</p>
    <h1>How each day actually runs</h1>
    <p class="hero-sub">Fixed points, journeys and the meal plan, one sheet per day. Times marked <em>leave by</em> are derived — the fixed point minus the journey minus its buffer — so they move on their own if a duration changes, rather than sitting there being quietly wrong.</p>
  </div>
</header>

${sections}

<section class="sec" id="standing">
  <h2>${esc(standing.title)}</h2>
  <p class="sec-sub">${esc(standing.sub)}</p>
  <div class="tablewrap"><table class="standing">
    <thead><tr><th>What</th><th>The constraint</th><th>Bites on</th></tr></thead>
    <tbody>${standing.rows.map(([what, rule, when]) => `<tr>
      <th scope="row">${esc(what)}</th><td>${esc(rule)}</td><td class="c-when">${esc(when)}</td>
    </tr>`).join('')}</tbody>
  </table></div>
</section>

<nav class="pager pager-plan">
  <a href="bases.html"><span>How far everything is</span><b>Bases</b><em>${bases.length} hotels</em></a>
  <a href="issues.html"><span>What is still open</span><b>Issues</b><em>${issues.filter((i) => !i.resolved).length} outstanding</em></a>
</nav>`;

  return shell({
    title: 'Day sheets — Japan 2026',
    desc: `Fixed points, leave-by times and meals for each of the ${runDays.length} days, ${plan.dates}.`,
    body, page: 'days', section: 'days', rail: true,
  });
}

// ── change history ──────────────────────────────────────────────────
function buildHistory() {
  const entries = revisions.map((r) => `<article class="rev">
    <div class="rev-when"><time datetime="${esc(r.date)}">${esc(r.when)}</time></div>
    <div class="rev-body">
      <h3>${esc(r.title)}</h3>
      <p class="rev-tags">${(r.tags || []).map((t) => `<span class="rtag rtag-${esc(t)}">${esc(t)}</span>`).join('')}${r.effect ? `<span class="rtag rtag-effect">${esc(r.effect)}</span>` : ''}</p>
      <p>${r.summary}</p>
      ${r.points?.length ? `<ul class="ticks">${r.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
    </div>
  </article>`).join('');

  const body = `
<header class="hero hero-plain">
  <div class="hero-inner">
    <p class="kicker">Change history</p>
    <h1>How the plan got here</h1>
    <p class="hero-sub">Every change to the trip, newest first — what moved, why, and what it cost. The plan is a moving target between now and November; this is the page that keeps it legible.</p>
  </div>
</header>

<section class="sec" id="log">
  <div class="revs">${entries}</div>
  <p class="after">The trip as it stands today is <a href="index.html">the itinerary</a>. The six routes that were considered and set aside are in <a href="archive.html">the archive</a>.</p>
</section>

<nav class="pager pager-plan">
  <a href="index.html"><span>The trip as it stands</span><b>Itinerary</b><em>${esc(plan.dates)} · ${esc(plan.cost)}</em></a>
  <a href="archive.html"><span>The six that lost</span><b>Archive</b><em>The full comparison, frozen</em></a>
</nav>`;

  return shell({
    title: 'Change history — Japan 2026',
    desc: 'Every change to the Japan 2026 plan, newest first.',
    body, page: 'history', section: 'history',
  });
}

// ── an archived alternate ───────────────────────────────────────────
function buildItinerary(it) {
  const heroShot = cover(it.hero);

  const body = `
<div class="archnote archnote-alt">
  <p><b>Archived alternate — this is not the plan.</b> ${esc(it.title)} was one of seven routes considered; it was set aside on ${esc(plan.decided)} and has not been updated since. The trip that is happening is <a href="index.html">${esc(plan.title)}</a>, and the full comparison is in <a href="archive.html">the archive</a>.</p>
</div>

<header class="hero hero-itin">
  ${heroBg(heroShot)}
  <div class="hero-inner">
    <p class="kicker">Itinerary ${it.num}${it.variantOf ? ` · a fork of Itinerary ${it.variantOf}` : ''} · archived</p>
    <h1>${esc(it.title)}</h1>
    <p class="hero-sub">${esc(it.tagline)}</p>
    ${heroFacts(it)}
  </div>
  ${heroShot ? `<p class="hero-credit">${esc(heroShot.caption)}</p>` : ''}
</header>

<section class="sec" id="pitch">
  <div class="pitch"><p class="lede lede-big">${it.pitch}</p></div>
  ${renderMap(it.slug)}
  <div class="transport">
    <h3><span class="mode">${esc(it.transport.mode)}</span></h3>
    <p>${it.transport.text}</p>
    ${coverRow(it.transport.ref || [])}
  </div>
</section>

${entitySection('stays', 'Where you sleep', 'The biggest single line in the budget, and the thing hardest to judge from a rate. Every property below is shown inside and out.', it.stays)}
${it.altStays?.length ? `<section class="sec" id="alts">
    <h2>The levers</h2>
    <p class="sec-sub">Swaps that move the number materially, up or down.</p>
    ${it.altStays.map((s) => entityCard(s, { level: 3 })).join('')}
  </section>` : ''}
${entitySection('dining', 'Where you eat', 'Marquee dinners. Gluten-free status is stated for each, because that decides more of this list than the stars do.', it.dining)}
${entitySection('doing', 'What you do', 'The experiences — mostly hands-on, mostly things you cannot do anywhere else.', it.doing)}
${placesSection(it)}

<section class="sec" id="days">
  <h2>Day by day</h2>
  <p class="sec-sub">${esc(it.dates)} · ${esc(it.length)}</p>
  <div class="days">${daysHtml(it)}</div>
</section>

<section class="sec sec-alt" id="cost">
  <h2>What it costs</h2>
  ${costTable(it)}
  <p class="after">${it.levers}</p>
  <div class="note note-${it.verdictTone}"><h3>${it.verdictTone === 'warn' ? 'Read this before choosing' : 'The verdict'}</h3><p>${it.verdict}</p></div>
</section>

<nav class="pager">
  <a class="pager-home" href="index.html"><span>The plan</span><b>${esc(plan.title)}</b><em>${esc(plan.dates)} · ${esc(plan.cost)}</em></a>
  ${alternates.filter((x) => x.num !== it.num).map((x) => `<a href="${href(x)}"><span>Itinerary ${x.num}</span><b>${esc(x.title)}</b><em>${esc(x.cost)}</em></a>`).join('')}
</nav>`;

  return shell({
    title: `${it.num}. ${it.title} — archived · Japan 2026`,
    desc: `Archived alternate: ${it.tagline}`,
    body, active: it.slug, page: 'itinerary', section: 'archive', chips: true, rail: true,
  });
}

// ── redirect stub ───────────────────────────────────────────────────
// The plan was published at momiji-with-a-detour.html before it became the plan.
function buildRedirect() {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=index.html">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="index.html">
<title>Moved — this itinerary is now the plan</title>
<link rel="stylesheet" href="assets/site.css">
</head>
<body>
<main id="main" class="sec">
  <h1>This one won.</h1>
  <p class="lede">Itinerary 1B is now <a href="index.html">the plan</a>, and it lives on the front page. Redirecting…</p>
  <p><a href="index.html">Open the plan</a> · <a href="archive.html">the archive</a></p>
</main>
</body>
</html>`;
}

// ── write ───────────────────────────────────────────────────────────
mkdirSync(OUT, { recursive: true });
mkdirSync(join(OUT, 'assets'), { recursive: true });
writeFileSync(join(OUT, 'index.html'), buildPlan());
writeFileSync(join(OUT, 'issues.html'), buildIssues());
writeFileSync(join(OUT, 'bases.html'), buildBases());
writeFileSync(join(OUT, 'days.html'), buildDays());
writeFileSync(join(OUT, 'history.html'), buildHistory());
writeFileSync(join(OUT, 'archive.html'), buildArchive());
for (const it of alternates) writeFileSync(join(OUT, `${it.slug}.html`), buildItinerary(it));
writeFileSync(join(OUT, `${OLD_PLAN_SLUG}.html`), buildRedirect());

for (const f of readdirSync(join(ROOT, 'assets-src'))) {
  copyFileSync(join(ROOT, 'assets-src', f), join(OUT, 'assets', f));
}

// The site is published to GitHub Pages so it can be shared by link, not found by
// search. Belt and braces: robots.txt here, plus a noindex meta on every page.
writeFileSync(join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');

const pages = 6 + alternates.length + 1;
const total = Object.values(media).reduce((n, l) => n + l.length, 0);
const withPhotos = Object.keys(entities).filter((s) => hasShots(s)).length;
const stops = bases.reduce((n, b) => n + b.pois.length, 0);
console.log(`built ${pages} pages — plan, issues, bases, days, history, archive, ${alternates.length} alternates, 1 redirect · ${total} photos across ${withPhotos}/${Object.keys(entities).length} entities · ${runDays.length} day sheets, ${stops} stops across ${bases.length} bases`);
