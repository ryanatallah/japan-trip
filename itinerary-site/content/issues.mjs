// OPEN ISSUES — the working list.
//
// Unlike every other content file here, this one is expected to shrink. It holds the things
// still undecided, unbooked or unanswered, and an item leaves by being moved to `resolved: ...`
// rather than deleted — a decision you cannot see the reasoning for is a decision you will
// re-litigate in three weeks.
//
// Shape
//   kind      decide  — yours to choose, nobody is waiting on anyone
//             book    — a booking that needs a specific instruction attached
//             waiting — somebody else has to answer before this can close
//   by        when the window shuts, or what it blocks. Rendered as the deadline chip.
//   affects   which days move if this changes
//   next      the literal next action, in the imperative
//   entity    optional entity slug — renders its full card inside the issue
//   resolved  set this and the issue moves to the closed list, with the reasoning kept
//
// Ordering inside each group is by urgency, not by importance.

export const issues = [
  // ── decide ─────────────────────────────────────────────────────────
  {
    id: 'alps-or-coast',
    kind: 'decide',
    title: 'The Alps, or the crab coast',
    by: 'Before either ryokan books out',
    affects: 'Sat 14 – Mon 16',
    entity: 'beniya-mukayu',
    body: `<strong>Tobira Onsen Myojinkan is the plan; Beniya Mukayu in Kaga is the alternative</strong>, and on these dates it makes a real case. Snow crab opens 6 November, so 14–16 November is already in season; Kenrokuen in Kanazawa peaks mid-November, which you would catch almost exactly; and it is two hours from Kyoto rather than three.<br><br>What you would give up is the mountains — 1,000m, the Venus Line, Shinhotaka, and Matsumoto Castle on the way in. What you would gain is a shorter transfer on both sides and a stop that is warm rather than near freezing at night.`,
    next: 'Settle it before either ryokan books out. Both are Relais &amp; Châteaux, both are small, and both go early — this is the one open question with a hard commercial deadline attached.',
  },
  {
    id: 'hakone-departure',
    kind: 'decide',
    title: 'Which Myojinkan shuttle — 15:15 or 16:30',
    by: 'At the point you book the shuttle',
    affects: 'Sat 14',
    body: `The inn's shuttle leaves Matsumoto Station at <strong>15:15 and 16:30 only</strong>, by advance reservation. Gora Kadan to Matsumoto is four legs — Odawara, Nagoya, Matsumoto — and the arithmetic puts the latest possible departure that still catches the 15:15 at <strong>10:35</strong>, twenty-five minutes before check-out, with no slack at all on three connections.<br><br><strong>The 15:15</strong> means leaving Gora at about 10:00 and buys an hour of daylight at 1,050m before dinner. <strong>The 16:30</strong> lets you use the full check-out and puts you in the inn about 17:10, more or less straight into the bath and then dinner.`,
    next: 'Pick one and reserve it. The escape hatch either way is a taxi — 30 minutes, about ¥7,000, no fixed departure — worth holding in reserve if the Shinano runs late.',
  },
  {
    id: 'arrival-gap',
    kind: 'decide',
    title: 'Nine hours between landing and the room',
    by: 'Request at booking, not on arrival',
    affects: 'Sat 7',
    body: `ANA's San Francisco–Haneda service, <strong>NH107, departs 01:20 and lands 04:50</strong>. Booked as "Friday 6 November" it is really a Thursday-night airport run, and it puts you at Aman Tokyo around 06:00 against a <strong>15:00 check-in</strong>.<br><br>Three things fix it and they are not exclusive: <strong>request early check-in when you book</strong> — a dawn arrival is exactly the case a hotel at this level accommodates; use the spa, which has the stone baths and the 30m pool and does not care what time it is; and take the <strong>Imperial Palace East Gardens</strong> at opening, ten minutes on foot, free, and open on Saturdays.`,
    next: 'Put the early-check-in request in writing at booking. Then leave the day otherwise empty — nothing with a reservation belongs on it.',
  },
  {
    id: 'alps-day',
    kind: 'decide',
    title: 'What Monday in the Alps actually is',
    by: 'Can wait until the week itself',
    affects: 'Mon 16',
    body: `Three versions, and they are not close in cost. <strong>Utsukushigahara</strong> is an hour away by road — 17km of switchbacks, a taxi or a hired car, no bus. <strong>Shinhotaka</strong> is two and a half hours <em>each way</em> — down to Matsumoto, Alpico bus to Hirayu Onsen, then the Okuhida bus — which is five hours of buses before you have looked at anything, though the ropeway does climb to 2,150m. <strong>Or stay put</strong>, which is a real answer at a ryokan like this one.`,
    next: 'No booking needed for any of them, so this can stay open. Check the Utsukushigahara Skyline is passable that morning — it closes for winter around the 20th and snow can shut it sooner.',
  },
  {
    id: 'final-morning',
    kind: 'decide',
    title: 'What the gained final morning is for',
    by: 'Can wait',
    affects: 'Sun 22',
    body: `United's KIX–SFO flight runs at <strong>18:35</strong> on the winter schedule that starts 25 October, not the 16:55 it runs in summer. With the Haruka at 80 minutes, leaving SOWAKA at <strong>14:20</strong> still puts you at the gate two and a half hours out.<br><br>That is a genuinely free morning in Kyoto and a proper lunch before you go — which the itinerary does not currently claim, and which is the natural home for whatever the week rains off.`,
    next: 'Nothing to book. Verify the 18:35 when you ticket, since it is the winter-schedule time and the summer one is three hours earlier.',
  },
  {
    id: 'eikando-day-or-night',
    kind: 'decide',
    title: 'Eikandō by day or by light-up',
    by: 'On the day',
    affects: 'Fri 20',
    body: `Eikandō sells the daytime visit and the autumn light-up as <strong>separate tickets</strong>, and clears the grounds between them — so doing both means queueing twice on the busiest evening circuit in the city. Day is 9:00–17:00 (last entry 16:00); the light-up is 17:30–21:00 (last entry 20:30).<br><br>On these dates the maples are part-turned rather than at their crest, which argues for the light-up: it flatters colour that is not yet complete.`,
    next: 'Take the light-up, skip the day, and use the afternoon for the kintsugi instead.',
  },

  // ── book ───────────────────────────────────────────────────────────
  {
    id: 'gora-kadan-halfboard',
    kind: 'book',
    title: 'Book Thursday at Gora Kadan room-and-breakfast',
    by: 'At reservation',
    affects: 'Thu 12',
    body: `The stay is three nights half board, but <strong>only two of those dinners are eaten there</strong> — Thursday is Itoh Dining by Nobu, off the property. Ryokan rates are per person with dinner included, so unless Thursday is booked room-and-breakfast you are paying for a kaiseki you will not eat.<br><br>Most ryokan will do this on request. It is the single cheapest correction on the trip and it has to happen at reservation, not on arrival.`,
    next: 'Ask explicitly, in writing, when you book the three nights.',
  },
  {
    id: 'rurikoin-booking',
    kind: 'book',
    title: 'Rurikoin opens for booking in early October',
    by: 'Early October — it sells out',
    affects: 'Thu 19',
    body: `Rurikoin's autumn season is <strong>reservation-only</strong> and they turn away anyone without one. The window opens in early October and the season sells out. Hours are 10:00–17:00 with reception closing at 16:30, ¥2,000.<br><br>Thursday the 19th currently assumes you hold a reservation. If it does not come off, that day still works — Sanzen-in's moss garden is the better of the two in early colour anyway.`,
    next: 'Put a reminder in for the first week of October and watch rurikoin.komyoji.com. The exact opening date and time were not confirmable from an English source.',
  },
  {
    id: 'takkyubin',
    kind: 'book',
    title: 'Forward the big bags Hakone → Kyoto',
    by: 'Arrange on arrival in Hakone',
    affects: 'Sat 14 – Tue 17',
    body: `The Alps leg is four trains with three connections, and the Shinano is not a train to wrestle a large case onto. Takkyubin runs hotel to hotel, next day, $15–22 a bag.<br><br>Sending them from Gora Kadan on the <strong>13th</strong> rather than the 14th gives the courier a full extra day and costs nothing — you travel the three Alps nights on overnight bags either way.`,
    next: 'Ask Gora Kadan to arrange it at check-in on the 11th, for collection on the 13th.',
  },

  // ── waiting ────────────────────────────────────────────────────────
  {
    id: 'gora-kadan-gf',
    kind: 'waiting',
    title: 'Gora Kadan gluten-free, across all three formats',
    by: 'Early October, 4–6 weeks out',
    affects: 'Wed 11, Fri 13',
    body: `Gora Kadan's public restaurant page says flatly that gluten-free is not available — that page governs the à la carte restaurant sold to <em>day visitors</em>. For staying guests who declare at reservation the record is the opposite and it is excellent. <strong>You need the second answer, in writing.</strong><br><br>Three nights means three different dinners and they are not equally safe. Charcoal-grilled beef is salt-grilled and fine; <strong>sukiyaki warishita and shabu-shabu ponzu are both soy-based</strong> and are the two worst formats on any ryokan menu. And <strong>Sushi Kadan is a separate kitchen</strong> on the same property — it inherits nothing automatically.`,
    next: 'Send the celiac brief naming each format individually, plus Sushi Kadan separately. A detailed reply is the signal the kitchen can be trusted; a vague one is a warning.',
  },
  {
    id: 'myojinkan-gf',
    kind: 'waiting',
    title: 'Myojinkan — two kitchens, chosen at booking',
    by: 'Before the booking closes the choice',
    affects: 'Sat 14 – Mon 16',
    body: `Myojinkan runs a Shinshu kaiseki room and a French room, and <strong>which one you eat in is chosen when you book, not on the day</strong> — so the brief has to cover both formats, across all three nights, before that choice is made.<br><br>The encouraging signal: the French chef is a certified Kushi Macrobiotic cook and there is a dedicated macrobiotic menu with a week's notice. Macrobiotic kitchens are vegetable-forward and already think about what is in a sauce.`,
    next: 'Send the brief with the booking, not after it, and ask what the macrobiotic menu would look like gluten-free.',
  },
  {
    id: 'kyudo-studio',
    kind: 'waiting',
    title: 'The kyudo studio publishes neither location nor dates',
    by: 'Blocks the Saturday morning',
    affects: 'Sat 21',
    body: `The one item on the trip with no fixed anything. The studio's site states no address and no schedule, so the Saturday morning is provisional until they answer — and Saturday the 21st is already the busiest day of the trip, being the start of a holiday weekend.<br><br>It is costed at $270 and it came from the seeds, so it is worth chasing rather than dropping.`,
    next: 'Email to confirm the location and which dates they run. If the answer is awkward, this is the easiest thing on the trip to cut.',
  },
  {
    id: 'seating-times',
    kind: 'waiting',
    title: 'Four seating times are assumptions, not facts',
    by: 'They arrive with each booking',
    affects: 'Tue 10, Thu 12, Fri 20, Sat 21',
    body: `<strong>L'Effervescence, Itoh Dining by Nobu, Kodaiji Jugyuan and the Heki kintsugi session</strong> are all scheduled at plausible times so the day sheets have something to subtract from — they are marked <em>confirm</em> wherever they appear. The closed days are documented; the seating times are not published and come with the reservation.<br><br>None of them is likely to break a day. The one worth watching is Thursday the 12th, where dinner has to survive a bus back from Moto-Hakone.`,
    next: 'Replace each with the real time as the bookings land. The derived leave-by times will follow on their own.',
  },
  {
    id: 'kibune-lightup',
    kind: 'waiting',
    title: 'Kibune light-up dates for 2026 are unpublished',
    by: 'Announced late in the season',
    affects: 'Sat 21',
    body: `Kibune's momiji-tōrō illumination ran <strong>7–24 November in 2025</strong>, sunset to about 21:00 — the shrine staircase, the village street and the maple tunnel all lit, with the Eizan trains dimming their lights through it. The 2026 dates were not published when this was written.<br><br>Saturday the 21st assumes the pattern repeats. If it does not, Kurama and Kibune are still worth the afternoon; you just lose the evening reason to stay late.`,
    next: 'Check nearer the time. Nothing to book either way.',
  },

  // ── resolved ───────────────────────────────────────────────────────
  {
    id: 'leffervescence-day',
    kind: 'decide',
    title: "L'Effervescence was scheduled on a day it is closed",
    affects: 'Tue 10',
    body: `Every itinerary in the original set had the three-star dinner on a Monday. <strong>L'Effervescence closes Sundays and Mondays</strong>, and is dinner-only on Tuesdays and Wednesdays.`,
    resolved: `Moved to <strong>Tuesday 10 November</strong>, alongside the Hirata forge. The two closed days went to the owl café and the Karuizawa run — which returns around 20:00 and never suited a three-star seating anyway. Worth knowing <em>why</em> the week is ordered as it is, so that nothing gets shuffled back.`,
  },
  {
    id: 'venus-line-stale',
    kind: 'waiting',
    title: 'The Venus Line note was written for the old dates',
    affects: 'Mon 16',
    body: `The Tobira Myojinkan entry said the Venus Line closed "the day before you land" — true of the itinerary's pre-Thanksgiving dates, and wrong ever since the trip moved.`,
    resolved: `Corrected. You arrive on the <strong>14th</strong> and the road closes around the <strong>20th</strong>, so the plateau is open while you are there — which is one of the arguments for these dates rather than the original ones.`,
  },
];

export const summary = {
  title: 'What is still open',
  sub: 'The live list. Everything undecided, unbooked or unanswered about the trip, in one place — an item leaves by being resolved rather than deleted, so the reasoning survives.',
};

export const GROUPS = [
  ['decide', 'Decide', 'Yours to choose. Nobody is waiting on anyone else.'],
  ['book', 'Book, with an instruction attached', 'Not just a reservation — each of these needs something said at the time of booking, and cannot be fixed afterwards.'],
  ['waiting', 'Waiting on a reply', 'Somebody else has to answer before these can close. Send them early; a detailed reply is itself the signal.'],
];
