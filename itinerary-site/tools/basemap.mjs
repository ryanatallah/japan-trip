// The hotel-centred map for each base — an isochrone rose, not a road map.
//
// Why not a geographic map. The question this page answers is "how far is that from where I am
// sleeping, and how do I get there". On a true-scale map of the Tokyo base, Ome and Karuizawa
// are 47km and 140km out, which squashes every city stop into a single pixel — the exact
// information you wanted is the part that disappears. So:
//
//   BEARING is true.   Each stop sits at its real compass direction from the hotel.
//   RADIUS is time.    Distance from the centre is door-to-door travel minutes, log-scaled so
//                      that a 3-minute walk and a 5-minute walk are still distinguishable.
//
// That makes the rings the useful thing on the page: everything inside the 15-minute ring needs
// no planning, and everything outside the hour ring costs you a morning.
//
// Dots are numbered and the detail lives in the list beside the figure — with ten to fourteen
// stops per base, labelling in place would collide no matter how it was nudged.

const W = 560, H = 560;
const CX = W / 2, CY = H / 2;
const R = 224;             // radius of the outermost ring
const T = 8;               // log softening constant — smaller spreads the near stops further
const DOT = 15;            // hit radius used for the overlap relaxation

const LADDER = [5, 10, 15, 20, 30, 45, 60, 90, 120, 150, 180, 240];
/** Nothing plots closer in than this, or it disappears under the centre marker. */
const MIN_R = 38;

const toRad = (d) => (d * Math.PI) / 180;

/** Log scale so walking distances stay legible next to two-hour day trips. */
const radiusFor = (min, max) => Math.max(MIN_R, R * (Math.log(1 + min / T) / Math.log(1 + max / T)));

const clock = (min) => (min < 60
  ? `${min} min`
  : min % 60 === 0 ? `${min / 60} h` : `${Math.floor(min / 60)}h ${min % 60}`);

/** Unit vector from the hotel toward a stop. dy is positive northward. */
function heading(from, to) {
  const midLat = toRad((from[1] + to[1]) / 2);
  const dx = (to[0] - from[0]) * Math.cos(midLat);
  const dy = to[1] - from[1];
  const len = Math.hypot(dx, dy);
  if (!len) return [0, -1];
  return [dx / len, dy / len];
}

/**
 * Pick four rings whose radii land near a quarter, half, three-quarters and all of R, so the
 * spacing reads evenly however lopsided the underlying times are.
 */
function ringsFor(max) {
  const picks = new Set([max]);
  for (const target of [0.28, 0.52, 0.76]) {
    let best = null, bestGap = Infinity;
    for (const v of LADDER) {
      if (v >= max) continue;
      const gap = Math.abs(radiusFor(v, max) / R - target);
      if (gap < bestGap) { bestGap = gap; best = v; }
    }
    if (best != null) picks.add(best);
  }
  return [...picks].sort((a, b) => a - b);
}

/**
 * Nudge coincident dots apart *tangentially only*, so the radius — which is the data — never
 * moves. Two stops on the same bearing at the same travel time genuinely do overlap; rotating
 * one of them a few degrees is the honest fix.
 */
function relax(pts) {
  for (let pass = 0; pass < 60; pass++) {
    let moved = false;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        if (d >= DOT * 2 || d === 0) continue;
        // rotate each a little, in opposite directions, around the centre
        const step = (DOT * 2 - d) / Math.max(a.r, b.r, 1) / 2;
        a.a -= step; b.a += step;
        a.x = CX + Math.sin(a.a) * a.r; a.y = CY - Math.cos(a.a) * a.r;
        b.x = CX + Math.sin(b.a) * b.r; b.y = CY - Math.cos(b.a) * b.r;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return pts;
}

/** Lay out one base. Returns the placed points so the list can share the numbering. */
export function placeBase(base) {
  const max = Math.max(...base.pois.map((p) => p.min));
  const pts = base.pois.map((p, i) => {
    const [ux, uy] = heading(base.at, p.at);
    const r = radiusFor(p.min, max);
    // angle measured clockwise from north, which is what the sin/cos placement below expects
    const a = Math.atan2(ux, uy);
    return { i, n: i + 1, poi: p, r, a, x: CX + ux * r, y: CY - uy * r };
  });
  return { pts: relax(pts), rings: ringsFor(max), max };
}

export function renderRose(base, placed) {
  const { pts, rings, max } = placed;

  // Circles under everything, their labels over everything — a dot landing due north would
  // otherwise bury the one number that explains the whole figure.
  const ringCircles = rings.map((v) => `<circle class="ring" cx="${CX}" cy="${CY}" r="${radiusFor(v, max).toFixed(1)}"/>`).join('');
  const ringLabels = rings.map((v) => {
    const r = radiusFor(v, max);
    return `<text class="ring-t" x="${CX + 5}" y="${(CY - r + 15).toFixed(1)}">${clock(v)}</text>`;
  }).join('');

  // Four faint spokes, so a bearing can actually be read off the figure.
  const spokes = [0, 90, 180, 270].map((deg) => {
    const a = toRad(deg);
    return `<line class="spoke" x1="${CX}" y1="${CY}" x2="${(CX + Math.sin(a) * R).toFixed(1)}" y2="${(CY - Math.cos(a) * R).toFixed(1)}"/>`;
  }).join('');

  const dots = pts.map((p) => `<g class="b-stop${p.poi.mode === 'walk' ? ' is-walk' : ''}">
      <line class="b-spur" x1="${CX}" y1="${CY}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"/>
      <circle class="b-halo" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="16"/>
      <circle class="b-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="12.5"/>
      <text class="b-num" x="${p.x.toFixed(1)}" y="${(p.y + 5.2).toFixed(1)}" text-anchor="middle">${p.n}</text>
    </g>`).join('');

  const names = pts.map((p) => `${p.n} ${p.poi.name}`).join(', ');

  // The hotel is named in the heading directly above the figure, so the centre marker carries no
  // label of its own — one was there, and every short walk collided with it.
  return `<svg class="rose" viewBox="0 0 ${W} ${H}" role="img" aria-label="Travel time from ${base.hotel || base.name} to each stop. ${names}.">
    <g class="rings">${ringCircles}${spokes}</g>
    <text class="compass" x="${CX}" y="${CY - R - 12}" text-anchor="middle">N</text>
    <g class="spurs">${dots}</g>
    <circle class="b-home-halo" cx="${CX}" cy="${CY}" r="19"/>
    <circle class="b-home" cx="${CX}" cy="${CY}" r="12"/>
    <g class="ringlabels">${ringLabels}</g>
  </svg>`;
}

export { clock };
