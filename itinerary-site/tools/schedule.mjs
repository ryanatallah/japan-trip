// Clock arithmetic for the runbook.
//
// The whole point of content/days.mjs is that leave-by times are not typed in — they are
// subtracted from the fixed point they have to deliver you to. Change a journey duration and
// every dependent time on the page moves with it. These are the pure functions that do it.

/** Minutes per connection when a journey is a chain of separate services. */
const CONNECT = 20;
/** Default slack on top of a journey when the move does not state its own. */
const BUFFER = 15;

export const toMin = (hhmm) => {
  const [h, m] = String(hhmm).split(':').map(Number);
  return h * 60 + m;
};

export const toClock = (min) => {
  const wrapped = ((min % 1440) + 1440) % 1440;
  return `${String(Math.floor(wrapped / 60)).padStart(2, '0')}:${String(wrapped % 60).padStart(2, '0')}`;
};

/** Round a derived departure DOWN to the nearest five minutes — tidier, and never optimistic. */
export const floor5 = (min) => Math.floor(min / 5) * 5;

export const dur = (min) => (min < 60
  ? `${min} min`
  : min % 60 === 0 ? `${min / 60}h` : `${Math.floor(min / 60)}h ${String(min % 60).padStart(2, '0')}`);

/** Every fixed point on a day, keyed by id, so a move can name the one it serves. */
const fixedById = (day) => Object.fromEntries((day.fixed || []).filter((f) => f.id).map((f) => [f.id, f]));

/**
 * Group a day's moves into journeys. A run of `chain: true` moves plus the move that terminates
 * it is one journey with a single leave-by at its head — which is how you actually experience
 * Gora Kadan → Odawara → Nagoya → Matsumoto → the inn's shuttle.
 */
function journeys(day) {
  const out = [];
  let run = [];
  for (const m of day.moves || []) {
    run.push(m);
    if (!m.chain) { out.push(run); run = []; }
  }
  if (run.length) out.push(run);
  return out;
}

/**
 * Resolve one journey to { legs, travel, connect, total, leaveBy, anchor, derived }.
 * `leaveBy` is derived when the journey is anchored to a fixed point, and stated when the move
 * simply says what time you go. `null` means neither — an unanchored leg.
 */
export function resolveJourney(legs, day) {
  const byId = fixedById(day);
  const last = legs[legs.length - 1];
  const travel = legs.reduce((n, m) => n + m.min, 0);
  const connect = CONNECT * (legs.length - 1);
  const total = travel + connect;

  let leaveBy = null, anchor = null, derived = false;

  if (last.serves && byId[last.serves]) {
    anchor = byId[last.serves];
    const buffer = last.buffer ?? BUFFER;
    leaveBy = floor5(toMin(anchor.t) - total - buffer);
    derived = true;
  } else if (last.at) {
    // The stated time belongs to the last leg, so back up through anything chained before it.
    const before = legs.slice(0, -1).reduce((n, m) => n + m.min, 0) + CONNECT * (legs.length - 1);
    leaveBy = toMin(last.at) - before;
    if (legs.length > 1) leaveBy = floor5(leaveBy);
    derived = legs.length > 1;
  }

  // No `arriveAt`: it would be leaveBy + total, and leaveBy has already been floored to five
  // minutes, so it disagreed with the journey's own anchor by a couple of minutes. Nothing read
  // it. Derive it from the anchor if it is ever needed.
  return { legs, travel, connect, total, leaveBy, anchor, derived };
}

export const dayJourneys = (day) => journeys(day).map((legs) => resolveJourney(legs, day));

/**
 * The one-line summary the itinerary page borrows for each day card, so both pages read from
 * the same arithmetic. Returns null on days with nothing to catch.
 */
export function daySummary(day) {
  const js = dayJourneys(day).filter((j) => j.leaveBy != null);
  if (!js.length) return null;
  const first = js[0];
  const bits = [`Leave ${toClock(first.leaveBy)}`];
  if (first.total) bits.push(`${dur(first.total)} to ${first.legs[first.legs.length - 1].to}`);
  if (first.anchor) bits.push(`for ${first.anchor.t}`);
  return bits.join(' · ');
}

/** Fixed points sorted by clock, for rendering the spine of a day. */
export const sortedFixed = (day) => [...(day.fixed || [])].sort((a, b) => toMin(a.t) - toMin(b.t));
