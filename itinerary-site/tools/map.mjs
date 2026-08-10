// Renders an itinerary's route as inline SVG over a Japan coastline.
// Web Mercator, auto-framed to the route with padding. No network, no tiles.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { places, routes, modeLabel } from '../content/geo.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const outlinePath = join(ROOT, 'content/japan-outline.json');
const outline = existsSync(outlinePath) ? JSON.parse(readFileSync(outlinePath, 'utf8')) : { rings: [] };

const W = 760, H = 560, PAD = 62;
const merc = (lon, lat) => [lon, Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))* (180 / Math.PI)];

/** Frame on the route's own extent, then widen to keep the map from feeling cropped. */
function frame(pts) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  let minX = Math.min(...xs), maxX = Math.max(...xs);
  let minY = Math.min(...ys), maxY = Math.max(...ys);
  const padX = Math.max((maxX - minX) * 0.22, 1.1);
  const padY = Math.max((maxY - minY) * 0.22, 1.1);
  minX -= padX; maxX += padX; minY -= padY; maxY += padY;
  // match the viewport aspect so nothing is squashed
  const aspect = (W - PAD * 2) / (H - PAD * 2);
  const w = maxX - minX, h = maxY - minY;
  if (w / h < aspect) { const need = h * aspect - w; minX -= need / 2; maxX += need / 2; }
  else { const need = w / aspect - h; minY -= need / 2; maxY += need / 2; }
  const sx = (W - PAD * 2) / (maxX - minX);
  const sy = (H - PAD * 2) / (maxY - minY);
  const s = Math.min(sx, sy);
  return (lon, lat) => {
    const [x, y] = merc(lon, lat);
    return [PAD + (x - minX) * s + ((W - PAD * 2) - (maxX - minX) * s) / 2,
            PAD + (maxY - y) * s + ((H - PAD * 2) - (maxY - minY) * s) / 2];
  };
}

const LABEL_OFFSET = {
  right:  { dx: 15, dy: 4, anchor: 'start' },
  left:   { dx: -15, dy: 4, anchor: 'end' },
  top:    { dx: 0, dy: -15, anchor: 'middle' },
  bottom: { dx: 0, dy: 23, anchor: 'middle' },
};

/** Flights arc; ground legs run straight. */
function legPath(a, b, mode) {
  if (mode !== 'air') return `M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  const bow = Math.min(len * 0.17, 58);
  const cx = mx - (dy / len) * bow, cy = my + (dx / len) * bow;
  return `M${a[0].toFixed(1)} ${a[1].toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
}

export function renderMap(slug) {
  const route = routes[slug];
  if (!route) return '';
  const used = [
    ...route.stops.map((s) => places[s.id]),
    ...route.trips.map((t) => places[t.to]),
  ].filter(Boolean);
  const project = frame(used.map((p) => merc(p.lon, p.lat)));
  const at = (id) => { const p = places[id]; return project(p.lon, p.lat); };

  const land = outline.rings
    .map((r) => 'M' + r.map(([lon, lat]) => { const [x, y] = project(lon, lat); return `${x.toFixed(1)} ${y.toFixed(1)}`; }).join('L') + 'Z')
    .join('');

  const legs = route.stops.slice(1).map((s, i) => {
    const a = at(route.stops[i].id), b = at(s.id);
    return `<path class="leg leg-${s.mode || 'rail'}" d="${legPath(a, b, s.mode)}"/>`;
  }).join('') + (route.returnTo
    ? `<path class="leg leg-${route.returnTo.mode || 'rail'} leg-return" d="${legPath(at(route.stops[route.stops.length - 1].id), at(route.returnTo.id), route.returnTo.mode)}"/>`
    : '');

  const trips = route.trips.map((t) => {
    const a = at(t.from), b = at(t.to);
    return `<path class="trip" d="${legPath(a, b, t.mode)}"/>`;
  }).join('');

  const tripDots = route.trips.map((t) => {
    const [x, y] = at(t.to);
    const o = LABEL_OFFSET[t.at || 'right'];
    return `<g class="m-trip"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5"/>
      <text x="${(x + o.dx * 0.62).toFixed(1)}" y="${(y + o.dy * 0.72).toFixed(1)}" text-anchor="${o.anchor}">${places[t.to].name}</text></g>`;
  }).join('');

  const stopDots = route.stops.map((s, i) => {
    const [x, y] = at(s.id);
    const o = LABEL_OFFSET[s.at || 'right'];
    return `<g class="m-stop">
      <circle class="m-halo" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12"/>
      <circle class="m-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8"/>
      <text class="m-num" x="${x.toFixed(1)}" y="${(y + 3.4).toFixed(1)}" text-anchor="middle">${i + 1}</text>
      <text class="m-label" x="${(x + o.dx).toFixed(1)}" y="${(y + o.dy).toFixed(1)}" text-anchor="${o.anchor}">${places[s.id].name}<tspan class="m-nights"> · ${s.nights + (route.returnTo?.id === s.id ? route.returnTo.nights : 0)}n</tspan></text>
    </g>`;
  }).join('');

  const modes = [...new Set([...route.stops.slice(1), ...(route.returnTo ? [route.returnTo] : [])].map((s) => s.mode || 'rail'))];
  const key = modes.map((m) => `<span class="k k-${m}"><i></i>${modeLabel[m]}</span>`).join('')
    + `<span class="k k-trip"><i></i>Day trip</span>`;

  return `<figure class="map">
  <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Route map: ${route.stops.map((s) => places[s.id].name).join(' to ')}">
    <path class="land" d="${land}"/>
    <g class="trips">${trips}</g>
    <g class="legs">${legs}</g>
    ${tripDots}
    ${stopDots}
  </svg>
  <figcaption><span class="map-key">${key}</span><span class="map-note">${route.inOut}</span></figcaption>
</figure>`;
}
