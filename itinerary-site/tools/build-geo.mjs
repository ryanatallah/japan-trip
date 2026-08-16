#!/usr/bin/env node
// One-time: turn a 12MB prefecture GeoJSON into a compact coastline for inline SVG.
// Source geometry (run once, then the output is committed and no network is needed):
//   curl -L -o japan.geojson https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson
//   node --stack-size=8000 tools/build-geo.mjs japan.geojson
// Douglas-Peucker simplify, drop islets below a size threshold, clip out the far
// south-west islands (no itinerary goes near Okinawa), round to 2dp.
//   node tools/build-geo.mjs <input.geojson>   ->  content/japan-outline.json
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const src = process.argv[2];
if (!src) { console.error('usage: build-geo.mjs <input.geojson>'); process.exit(1); }

const TOLERANCE = 0.02;   // degrees ≈ 1.3km — sub-pixel at our render size
const MIN_SPAN = 0.09;     // drop islets smaller than this (keeps Yakushima, ~0.35°)
const CLIP = { minLat: 29.5, maxLat: 46.2, minLon: 127.5, maxLon: 146.5 };

/** Perpendicular distance from p to the line ab. */
function dist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  const cx = a[0] + Math.max(0, Math.min(1, t)) * dx;
  const cy = a[1] + Math.max(0, Math.min(1, t)) * dy;
  return Math.hypot(p[0] - cx, p[1] - cy);
}

function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  let maxD = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = dist(pts[i], pts[0], pts[pts.length - 1]);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD <= tol) return [pts[0], pts[pts.length - 1]];
  return [...simplify(pts.slice(0, idx + 1), tol).slice(0, -1), ...simplify(pts.slice(idx), tol)];
}

const geo = JSON.parse(readFileSync(src, 'utf8'));
const rings = [];
for (const f of geo.features) {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys) {
    const outer = poly[0];                       // outer ring only; inland lakes don't matter here
    const lons = outer.map((c) => c[0]), lats = outer.map((c) => c[1]);
    const minLon = Math.min(...lons), maxLon = Math.max(...lons);
    const minLat = Math.min(...lats), maxLat = Math.max(...lats);
    if (maxLat < CLIP.minLat || minLat > CLIP.maxLat) continue;
    if (maxLon < CLIP.minLon || minLon > CLIP.maxLon) continue;
    if (maxLon - minLon < MIN_SPAN && maxLat - minLat < MIN_SPAN) continue;
    const simple = simplify(outer, TOLERANCE).map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)]);
    // collapse consecutive duplicates introduced by rounding
    const dedup = simple.filter((p, i) => i === 0 || p[0] !== simple[i - 1][0] || p[1] !== simple[i - 1][1]);
    if (dedup.length >= 4) rings.push(dedup);
  }
}

rings.sort((a, b) => b.length - a.length);
const out = { tolerance: TOLERANCE, rings };
const path = join(ROOT, 'content/japan-outline.json');
writeFileSync(path, JSON.stringify(out));
const pts = rings.reduce((n, r) => n + r.length, 0);
console.log(`${rings.length} rings, ${pts} points, ${(readFileSync(path).length / 1024).toFixed(0)}KB`);
