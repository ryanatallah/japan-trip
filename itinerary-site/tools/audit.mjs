#!/usr/bin/env node
// Build-integrity audit: coverage gaps, missing files, orphans, caption quality, external refs.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { entities } from '../content/entities.mjs';
import { itineraries } from '../content/itineraries.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE = join(ROOT, 'site');
const media = existsSync(join(ROOT, 'content/media.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'content/media.json'), 'utf8')) : {};

const MIN = { stay: 10, restaurant: 4, experience: 4, place: 3, transport: 2 };
// Alternatives per requirement — a stay's "setting" can stand in for an exterior shot.
const NEED = {
  stay: [['exterior', 'setting'], ['room'], ['bath'], ['dining'], ['food']],
  restaurant: [['food']],
  experience: [['activity', 'wildlife', 'people', 'detail']],
};

const err = [], warn = [];

// 1. every entity referenced by an itinerary exists
const referenced = new Set();
for (const it of itineraries) {
  for (const key of ['stays', 'altStays', 'dining', 'doing', 'places']) (it[key] || []).forEach((s) => referenced.add(s));
  for (const d of it.days) (d.ref || []).forEach((s) => referenced.add(s));
  (it.transport.ref || []).forEach((s) => referenced.add(s));
  referenced.add(it.hero);
  (it.heroCard || []).forEach((s) => referenced.add(s));
}
for (const s of referenced) if (!entities[s]) err.push(`itinerary references unknown entity "${s}"`);
// Entities marked `cut` are deliberately unreferenced — they live in the "Cut from the plan"
// section on the index so the decision stays reversible.
for (const [s, e] of Object.entries(entities)) {
  if (!referenced.has(s) && !e.cut) warn.push(`entity "${s}" is never referenced by an itinerary`);
}

// 2. photo coverage
for (const [slug, e] of Object.entries(entities)) {
  const list = media[slug] || [];
  const min = MIN[e.type] ?? 3;
  if (!list.length) { err.push(`${slug} (${e.type}) — NO PHOTOS`); continue; }
  if (list.length < min) warn.push(`${slug} (${e.type}) — ${list.length} photos, want ${min}`);
  const cats = new Set(list.map((s) => s.category));
  const missing = (NEED[e.type] || []).filter((alts) => !alts.some((c) => cats.has(c))).map((alts) => alts[0]);
  if (missing.length) warn.push(`${slug} — missing category: ${missing.join(', ')}`);
  for (const s of list) {
    if (!existsSync(join(SITE, 'img', s.file))) err.push(`${slug} — missing file ${s.file}`);
    if (!existsSync(join(SITE, 'img', s.thumb))) err.push(`${slug} — missing thumb ${s.thumb}`);
    if (!s.caption || s.caption.length < 15) warn.push(`${slug}/${s.file} — weak caption: "${s.caption}"`);
    if (!s.sourceUrl) warn.push(`${slug}/${s.file} — no source URL`);
    if (s.confidence && s.confidence !== 'high') warn.push(`${slug}/${s.file} — confidence ${s.confidence}`);
  }
}

// 3. orphan image files
const used = new Set(Object.values(media).flat().flatMap((s) => [s.file, s.thumb]));
if (existsSync(join(SITE, 'img'))) {
  for (const f of readdirSync(join(SITE, 'img'))) if (!used.has(f)) warn.push(`orphan image file: ${f}`);
}

// 4. no external requests in the built HTML (portability guarantee)
for (const f of readdirSync(SITE).filter((f) => f.endsWith('.html') && !f.startsWith('_'))) {
  const html = readFileSync(join(SITE, f), 'utf8');
  const ext = [...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1])
    .filter((u) => !/^https?:\/\/(www\.)?[^"]*$/.test(u) === false);
  const bad = ext.filter((u) => !html.includes(`target="_blank"`) ? true : false);
  const assets = [...html.matchAll(/<(?:img|script|link)[^>]+(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  if (assets.length) err.push(`${f} loads external assets: ${assets.slice(0, 3).join(', ')}`);
  void bad;
}

const totals = Object.entries(media).reduce((a, [, l]) => a + l.length, 0);
console.log(`\n${totals} photos · ${Object.keys(media).length}/${Object.keys(entities).length} entities have photos\n`);
if (err.length) { console.log(`ERRORS (${err.length}):`); err.forEach((e) => console.log(`  ✗ ${e}`)); }
if (warn.length) { console.log(`\nWARNINGS (${warn.length}):`); warn.slice(0, 60).forEach((w) => console.log(`  · ${w}`)); if (warn.length > 60) console.log(`  … ${warn.length - 60} more`); }
if (!err.length && !warn.length) console.log('clean ✓');
process.exit(err.length ? 1 : 0);
