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
    affects: 'Sat 14 – Mon 16',
    entity: 'beniya-mukayu',
    body: `<strong>Tobira Onsen Myojinkan was the plan; Beniya Mukayu in Kaga was the alternative</strong>, and on these dates it made a real case. Snow crab opens 6 November, so 14–16 November is already in season; Kenrokuen in Kanazawa peaks mid-November, which you would have caught almost exactly; and it is two hours from Kyoto rather than three.<br><br>What the coast would have cost you is the mountains — 1,000m, Matsumoto Castle on the way in, and a valley with nothing in it. What it would have bought is a shorter transfer on both sides and a stop that is warm rather than near freezing at night.`,
    resolved: `<strong>The Alps.</strong> And the reading of the coast was right, for a firmer reason than an impression: Kaga's own tourism board leads Yamashiro Onsen with its two public bathhouses — <strong>Sōyu and Ko-Sōyu</strong>, rebuilt in 2008 and 2010 — and in that town the bathhouses <em>are</em> the sight. What else was there was Kutani porcelain and Kaga yuzen, and <strong>those craft modules had already been cut from this itinerary</strong>. That left crab, Kenrokuen and a shorter train — good things, but not a reason to spend three nights somewhere.<br><br><strong>One correction, and it matters at booking.</strong> Private onsen is not an argument for the Alps — if anything it runs the other way. <em>Mukayu is the one with the better private baths</em>: 16 rooms against Myojinkan's 40, and terrace suites with their own outdoor hot-spring tubs. At Myojinkan the three named baths are all communal, and <strong>the riverside open-air bath is mixed-gender</strong> — sunrise to 23:00, women-only only between 19:30 and 21:30. A private bath there means booking a room that has one, and that is now its own item on this page.<br><br>The argument that does hold is the one you led with. It is a gorge at 1,050m inside a quasi-national park, the walking starts at the front door, and it is a landscape that appears nowhere else on the trip. Kaga is a hot-spring town; Tobira is a mountain with an inn on it.`,
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
    affects: 'Mon 16',
    body: `Three versions, and they were not close in cost. <strong>Utsukushigahara</strong> is an hour away by road — 17km of switchbacks, a taxi or a hired car, no bus. <strong>Shinhotaka</strong> is two and a half hours <em>each way</em> — down to Matsumoto, Alpico bus to Hirayu Onsen, then the Okuhida bus — which is five hours of buses before you have looked at anything, though the ropeway does climb to 2,150m. <strong>Or stay put</strong>, which is a real answer at a ryokan like this one.`,
    resolved: `<strong>Stay put.</strong> It is the third of three nights and the last day before Kyoto, and it is the only day of seventeen with nothing to catch. Both mountain versions survive as a fair-weather impulse — neither needs booking — but the day is no longer built on either.<br><br><strong>What that means in practice, since Tobira is a <em>one-inn onsen</em> and there is no village to walk into.</strong> Four baths, and rotating them is most of a day: the standing bath <strong>Setsugetsuka</strong> (雪月花), where you stand chest-deep rather than sit; the large indoor-and-outdoor <strong>Hakuryu</strong> (白龍), gender-separated and open 24 hours; the reclining bath <strong>Kuuyama</strong> (空山); and the <strong>riverside open-air bath</strong> down and to the left of the entrance — mixed-gender, sunrise to 23:00, women-only 19:30–21:30.<br><br><strong>On foot, and this is close to the whole list.</strong> The inn keeps a <strong>walking path along the Usukawa</strong> with benches and tables set along it; in mid-November that is a bare-branch gorge with the water loud in it and cedar and pine still green above. Indoors the property is hung as a gallery — Japanese painting and modern sculpture — so a slow circuit is a genuine hour. Then <strong>Treatment Room Natura</strong> for a massage, the <strong>library</strong>, the second-floor river terraces, the rooftop terrace with its tea service, and <strong>Salon 1050</strong> for pastry in the afternoon. The lobby shop runs 08:00–12:00 and 16:30–21:30.<br><br><strong>Two things the inn advertises that are out of season on the 16th.</strong> Picking vegetables in its own kitchen garden, which at 1,050m is finished by mid-November; and <strong>iwana fishing in the stream, which is closed outright</strong> — Nagano's mountain-stream season runs 16 February to 30 September. Neither can carry the day, so do not let a brochure suggest otherwise.<br><br><strong>If one of you wants a real walk.</strong> The <strong>Hachibuse-yama</strong> trailhead is about 300m up the road, past the Hinoki-no-yu day-bath. It is 5.5km and roughly five and a half hours round trip to a 1,929m summit with a 360° view of the Northern Alps — but that is a mountain, not a stroll, and in mid-November at that altitude it is a winter one. It is the wrong day for it; the river path is the walk.`,
  },
  {
    id: 'final-morning',
    kind: 'decide',
    title: 'What the gained final morning is for',
    affects: 'Sun 22',
    body: `United's KIX–SFO flight runs at <strong>18:35</strong> on the winter schedule that starts 25 October, not the 16:55 it runs in summer. With the Haruka at 80 minutes, leaving SOWAKA at <strong>14:20</strong> still puts you at the gate two and a half hours out.<br><br>That is a genuinely free morning in Kyoto and a proper lunch before you go — which the itinerary did not previously claim, and which is the natural home for whatever the week rains off.`,
    resolved: `<strong>A relaxed lunch — and the least-travel version of one, which is downstairs.</strong> SOWAKA's own restaurant, <strong>Gion Loka</strong>, serves lunch 12:00–15:00 with last order at 13:30, keeps no regular closing day, and runs a seasonal kaiseki course at about ¥7,800 a head. A 12:00 seating is done by 13:30 without anyone hurrying it, the bags are already at the desk, and you walk out to the car at <strong>14:20</strong>. No train, no taxi, and no clock in the middle of the last meal of the trip.<br><br>The morning ahead of it stays deliberately empty. Check-out is 11:00 and the hotel holds luggage; Kodai-ji and the Yasaka lanes are three minutes on foot if the weather is good. That is where anything the week rained off goes — and if nothing did, a slow morning in Gion is not a consolation prize.<br><br>Two consequences, both now booking items rather than decisions: reserve Loka for the 22nd, and put it on the gluten-free brief with the rest, because a kaiseki lunch is a set menu like every other set menu on this trip. Still verify the 18:35 when you ticket — it is the winter-schedule time and the summer one is three hours earlier.`,
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
    id: 'myojinkan-room-bath',
    kind: 'book',
    title: 'A private bath at Myojinkan is a room type, not a request',
    by: 'At reservation — it cannot be added afterwards',
    affects: 'Sat 14 – Mon 16',
    body: `This fell out of settling the Alps against the coast. <strong>Myojinkan's three named baths are all communal</strong> — the standing bath Setsugetsuka, the large Hakuryu and the reclining Kuuyama — and <strong>the riverside open-air bath is mixed-gender</strong>, sunrise to 23:00, with a women-only window of only 19:30–21:30.<br><br>The private option is the room itself. Just some of the forty have their own bath — the <em>iyashi-buro</em> rooms and the SPA Living suite — in hinoki, cypress or stone, on undiluted spring water straight from the source. There is no reservable kashikiri bath here, so booking a room without one and asking on arrival gets you nothing.`,
    next: 'Book a room that has its own bath, and settle it in the same message as the kaiseki-or-French choice and the gluten-free brief. All three are booking-time decisions at this inn and none of them can be fixed on the day.',
  },
  {
    id: 'loka-final-lunch',
    kind: 'book',
    title: 'Reserve the last lunch at Gion Loka',
    by: 'With the rest of the Kyoto bookings',
    affects: 'Sun 22',
    body: `The departure day resolved to a relaxed lunch in the hotel's own restaurant. <strong>Gion Loka serves 12:00–15:00, last order 13:30, with no regular closing day</strong>, at about ¥7,800 a head for the seasonal course — so a 12:00 seating leaves 14:20 comfortably clear.<br><br>It is a set kaiseki course, which means it carries the same constraint as every other set menu on this trip: <strong>the gluten-free brief goes in at reservation</strong>, and cannot be raised on the day.`,
    next: 'Book 12:00 on Sunday 22 November through TableCheck or Ikyu, declaring gluten-free in the reservation itself. Add Loka to the early-October brief with the other kitchens.',
  },
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
