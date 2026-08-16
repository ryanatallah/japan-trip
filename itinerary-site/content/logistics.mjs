// THE RUNBOOK — the operational half of the plan.
//
// content/plan.mjs answers "what is this trip and why". This file answers "how does each day
// actually run": where every activity sits relative to the hotel you are sleeping in, how long
// the journey is, what time you have to leave, and what that does to the meal plan.
//
// The point of keeping it here rather than in prose is that leave-by times are DERIVED, not
// typed. A move carries a duration and the fixed point it serves; tools/runbook.mjs subtracts
// one from the other. Change a train time in one place and every dependent clock time moves.
//
// Conventions
//   at        [lon, lat] — same order as content/geo.mjs, which some entries import directly
//   min       door-to-door minutes from that base's hotel, including the walk at both ends
//   mode      walk | metro | rail | bus | boat | ropeway | car | air
//   confirm   true = not verified from an operator page; treat as an estimate and check
//
// Sources for the numbers are in tools/RUNBOOK_SOURCES.md.

import { places } from './geo.mjs';

// ── the four bases ───────────────────────────────────────────────────
// `pois` are everything the itinerary actually visits from that base, plus the transfer points
// (airport, station) that bracket the stay. Ordered near-to-far, which is also how they read.
export const bases = [
  {
    id: 'tokyo',
    entity: 'aman-tokyo',
    name: 'Aman Tokyo',
    where: 'Otemachi — floors 33 to 38 of Otemachi Tower',
    dates: 'Sat 7 – Tue 10 November · 4 nights',
    at: [139.7648, 35.6866],
    checkIn: '15:00',
    checkOut: '12:00',
    checkConfirm: true,
    lede: `Otemachi is the quietest possible base for this particular week, because three of the four days leave town. It sits on top of five subway lines and is an eight-minute walk from Tokyo Station, which is where both the Ome run and the Karuizawa run start. The cost of that is distance from the nightlife districts — Nishi-Azabu is a taxi, not a walk.`,
    pois: [
      { name: 'Imperial Palace East Gardens', at: [139.7570, 35.6852], min: 10, mode: 'walk', via: 'Straight out of the tower, through Otemon gate', hours: '9:00–16:00 · closed Mondays and Fridays', why: 'The answer to the dawn-arrival problem on Saturday — free, ten minutes away, and open before the hotel room is.' },
      { name: 'Tokyo Station', at: [139.7671, 35.6812], min: 8, mode: 'walk', via: 'Underground concourse the whole way if it rains', why: 'Both day trips start here.' },
      { name: 'Jingu Gaien ginkgo avenue', at: [139.7175, 35.6752], min: 20, mode: 'metro', via: 'Hanzomon line to Aoyama-itchome, then 5 min on foot', hours: 'Open street, always', why: 'Green-to-yellow on these dates. They gold up around 20 November.' },
      { name: 'Akiba Fukurou (owl café)', at: [139.7745, 35.6990], min: 20, mode: 'metro', via: 'Marunouchi line to Awajicho, 5 min on foot', hours: 'Roughly 12:00–19:00 · five slots a day', book: 'Reservation only, via select-type.com. Card charged at booking. Arrive 10 minutes early — the door is locked during the session.' },
      { name: 'Meiji Jingu', at: [139.6993, 35.6764], min: 25, mode: 'metro', via: 'Chiyoda line direct to Meiji-jingumae, then 5 min on foot', hours: 'Sunrise to sunset — about 6:20–16:20 in November' },
      { name: "L'Effervescence", at: [139.7205, 35.6598], min: 20, mode: 'car', via: 'Taxi to Nishi-Azabu. Thirty-plus minutes on the subway with a change, so take the cab.', hours: 'Closed Sundays and Mondays · dinner only Tue and Wed', book: 'Pocket Concierge, August–September. The personalised gluten-free menu is printed for the guest, so declare at booking.', confirm: true },
      { name: 'Hirata sword forge', at: [139.2380, 35.7880], min: 100, mode: 'rail', via: 'JR Chuo Rapid then the Ome line — about 1h25 from Tokyo Station, plus the local hop at the far end', hours: '150-minute session', book: 'Wabunka. The smiths’ calendar is irregular — ask early.', why: 'The furthest thing you do from a Tokyo base, and it is still a day trip.' },
      { name: 'Picchio, Karuizawa', at: [138.5920, 36.3555], min: 130, mode: 'rail', via: 'Hokuriku shinkansen to Karuizawa (1h10), then the free Hoshinoya shuttle from the south exit (25 min) to Tombo-no-yu, 1 min on foot', hours: 'Tour runs 16:00–17:30 in November · check in 15 minutes early at the Visitor Center', book: 'Season ends 30 November 2026 — November slots are the last of the year.' },
      { name: 'Haneda (HND)', at: [139.7798, 35.5494], min: 30, mode: 'car', via: 'Private transfer — about 25 minutes at dawn, 40 in traffic', why: 'Arrival only. You leave the country from Osaka.' },
    ],
  },

  {
    id: 'hakone',
    entity: 'gora-kadan',
    name: 'Gora Kadan',
    where: 'Gora — a former imperial villa estate, above the Tozan railway terminus',
    dates: 'Wed 11 – Fri 13 November · 3 nights',
    at: [139.0480, 35.2470],
    checkIn: '15:00',
    checkOut: '11:00',
    lede: `The most walkable base of the four and the one people misjudge. Two of the three things on the art day — the moss garden and the Open-Air Museum — are within ten minutes of the front door, and so is the teppanyaki dinner. Everything on the loop day is a single sequence of cablecar, ropeway and boat that starts one stop up the hill. The Freepass covers all of it.`,
    pois: [
      { name: 'Itoh Dining by Nobu', at: [139.0455, 35.2455], min: 6, mode: 'walk', hours: 'Teppanyaki counter', why: 'Dinner on the loop day. Salt-grilled at the counter is the most transparent celiac format of the trip.' },
      { name: 'Hakone Museum of Art (moss garden)', at: [139.0455, 35.2497], min: 8, mode: 'walk', via: 'Or one stop on the cablecar to Koen-kami', hours: '9:30–16:30 Apr–Nov · last entry 16:00 · ¥1,430', warn: 'Closed Thursdays. That is why the art day is Friday and the loop day is Thursday — if those two ever swap, the moss garden is shut.' },
      { name: 'Hakone Open-Air Museum', at: [139.0399, 35.2444], min: 10, mode: 'rail', via: 'Tozan railway one stop to Chokoku-no-Mori, 2 min on foot', hours: '9:00–17:00 daily · last entry 16:30' },
      { name: 'Owakudani', at: [139.0195, 35.2445], min: 25, mode: 'ropeway', via: 'Cablecar Gora→Sounzan 9 min, ropeway Sounzan→Owakudani 8 min', warn: 'Closes without warning on volcanic activity. Check the status page at breakfast — this is the one sight on the loop that can vanish.' },
      { name: 'Pola Museum of Art', at: [139.0113, 35.2618], min: 30, mode: 'bus', via: 'Bus from Gora towards Sengokuhara', hours: '9:00–17:00 daily · last entry 16:30' },
      { name: 'Togendai (Lake Ashi north)', at: [139.0106, 35.2237], min: 45, mode: 'ropeway', via: 'Ropeway on from Owakudani, 16 min' },
      { name: 'Hakone-Yumoto', at: [139.1060, 35.2325], min: 40, mode: 'rail', via: 'Tozan railway down the switchbacks', why: 'The gateway station — Romancecar territory.' },
      { name: 'Moto-Hakone & Hakone Shrine', at: [139.0263, 35.1963], min: 90, mode: 'boat', via: 'Boat across Lake Ashi from Togendai, 40 min, then 10 min on foot to the torii', why: 'The far end of the loop. You come back by bus, not by retracing the ropeway.' },
      { name: 'Odawara Station', at: [139.1553, 35.2564], min: 60, mode: 'rail', via: 'Tozan to Hakone-Yumoto, then Odakyu — about an hour all in', why: 'Where the Alps leg begins on the 14th.' },
    ],
  },

  {
    id: 'tobira',
    entity: 'tobira-myojinkan',
    name: 'Tobira Onsen Myojinkan',
    where: 'Iriyamabe, up the valley east of Matsumoto — 1,050m',
    dates: 'Sat 14 – Mon 16 November · 3 nights',
    at: [places.tobira.lon, places.tobira.lat],
    checkIn: '15:00',
    checkOut: '11:00',
    checkConfirm: true,
    lede: `The one base where the hotel is not near anything, and that is the point of it. Everything is reached through Matsumoto, thirty to forty-five minutes back down the valley, and the shuttle that does that run goes twice a day at fixed times. Plan around the shuttle or plan around a taxi — there is no third option.`,
    pois: [
      { name: 'Matsumoto Station', at: [137.9670, 36.2320], min: 40, mode: 'bus', via: 'Free shuttle, 35–45 min, advance reservation, departing the inn on request; taxi is 30 min and about ¥7,000', warn: 'The shuttle runs from Matsumoto at 15:15 and 16:30 only. Everything about arrival day is downstream of those two times.' },
      { name: 'Matsumoto Castle', at: [137.9690, 36.2384], min: 50, mode: 'bus', via: 'Shuttle or taxi to the station, then 15 min on foot', hours: '8:30–17:00 · last entry 16:30' },
      { name: 'Nakamachi storehouse street', at: [137.9700, 36.2340], min: 48, mode: 'bus', via: 'Ten minutes on foot from the station', hours: 'Shops roughly 10:00–17:00' },
      { name: 'Matsumoto City Museum of Art', at: [137.9740, 36.2320], min: 47, mode: 'bus', via: 'Twelve minutes on foot from the station', hours: '9:00–17:00 · last entry 16:30', warn: 'Closed Mondays. The Kusama collection is the reason to go, and Monday the 16th is the Alps day — so it has to be the Sunday.' },
      { name: 'Utsukushigahara plateau', at: [138.1330, 36.2100], min: 60, mode: 'car', via: 'About 17 km and an hour of switchbacks — a taxi or a hired car, not a bus', hours: 'Daylight only', warn: 'The Venus Line and the Utsukushigahara Skyline close for winter around 20 November, and snow can shut them earlier. Confirm the road is open the morning you go.' },
      { name: 'Shinhotaka Ropeway', at: [places.shinhotaka.lon, places.shinhotaka.lat], min: 150, mode: 'bus', via: 'Down to Matsumoto, Alpico bus to Hirayu Onsen, then the Okuhida bus on — about two and a half hours each way', hours: '8:30–16:45 to late November · 2,150m at the top', warn: 'A five-hour round trip on buses before you have looked at anything. Worth it only as a whole-day commitment, and Utsukushigahara is an hour away instead.' },
    ],
  },

  {
    id: 'kyoto',
    entity: 'sowaka',
    name: 'SOWAKA',
    where: 'Gion — Shimogawara-dori, below Kodai-ji',
    dates: 'Tue 17 – Sat 21 November · 5 nights',
    at: [135.7810, 35.0000],
    checkIn: '15:00',
    checkOut: '11:00',
    lede: `Four of the things on this week's list are within a five-minute walk of the front door — both marquee dinners, the kintsugi workshop and the Kodai-ji illumination. Everything else points north or west and runs 40 to 75 minutes each way, because the whole strategy of this Kyoto week is to leave the centre. Demachiyanagi is the hinge: Ohara, Rurikoin and Kurama all start there.`,
    pois: [
      { name: 'Kodai-ji', at: [135.7813, 34.9998], min: 3, mode: 'walk', hours: 'Autumn light-up 17:00–22:00 · last entry 21:30 · ¥600', why: 'Three minutes uphill. The illumination runs late enough to take after dinner rather than before it.' },
      { name: 'Kodaiji Jugyuan', at: [135.7805, 35.0003], min: 3, mode: 'walk', book: 'Book late August–early September for Saturday 21 November.', why: 'The farewell dinner, literally next door to the illumination.' },
      { name: 'Kikunoi Honten', at: [135.7800, 34.9985], min: 5, mode: 'walk', hours: 'Dinner 17:00, last order 19:30', book: 'Tableall or My Concierge, August–early September, declaring gluten-free in the reservation form itself.', warn: 'Closed the 1st and 3rd Tuesday of the month — in November 2026 that is the 3rd and the 17th. The 17th is your Kyoto arrival day, so this can never move earlier in the week.' },
      { name: 'Heki kintsugi — Akagane Resort 1925', at: [135.7797, 34.9990], min: 5, mode: 'walk', hours: '120 minutes, private', book: 'Wabunka. The real-gold finish is a paid upgrade — decide at booking.', why: 'A copper magnate’s 1925 villa, five minutes down the same street. No travel time at all on the Arashiyama day.' },
      { name: 'Gion (Hanamikoji)', at: [135.7752, 35.0037], min: 10, mode: 'walk' },
      { name: 'Eikando Zenrin-ji', at: [135.7947, 35.0142], min: 15, mode: 'car', via: 'Taxi; about 20 minutes by bus', hours: 'Day 9:00–17:00 (last entry 16:00) · light-up 17:30–21:00 (last entry 20:30)', warn: 'Day and night are separate tickets and the temple clears between them. Pick one — going twice in a day means queueing twice.' },
      { name: 'Kyoto Station', at: [135.7585, 34.9858], min: 20, mode: 'car', why: 'The Takao bus leaves from here, and so does the Haruka on the last morning.' },
      { name: 'Rurikoin', at: [135.8010, 35.0715], min: 40, mode: 'rail', via: 'To Demachiyanagi, then Eizan line to Yase-Hieizanguchi, 5 min on foot', hours: '10:00–17:00 · reception closes 16:30 · ¥2,000', book: 'Reservation required through the autumn season and they turn away anyone without one. The window opens in early October — watch rurikoin.komyoji.com.' },
      { name: 'Iwatayama monkey park, Arashiyama', at: [135.6773, 35.0122], min: 50, mode: 'rail', via: 'About 50 minutes to the gate — then a 20-minute climb on top', hours: '9:00–16:30 · last entry 16:00', why: 'Go at opening. The macaques are the easiest wildlife photography on the Kansai side.' },
      { name: 'Kurama & Kibune', at: [135.7630, 35.1230], min: 50, mode: 'rail', via: 'To Demachiyanagi, then 30 min on the Eizan line through the maple tunnel', hours: 'Kibune momiji-toro light-up ran 7–24 November in 2025, sunset to about 21:00', confirm: true },
      { name: 'Sanzen-in, Ohara', at: [135.8345, 35.1190], min: 60, mode: 'bus', via: 'To Demachiyanagi, then Kyoto bus 17 (about 33 min), then 10 min uphill on foot', hours: '8:30–17:00 in November · last entry 16:30' },
      { name: 'Takao — Jingo-ji and Kozan-ji', at: [135.6725, 35.0570], min: 75, mode: 'bus', via: 'To Kyoto Station, then the JR Takao–Keihoku bus, about 50 min', hours: 'Jingo-ji 9:00–16:00 · Kozan-ji 8:30–17:00', warn: 'Jingo-ji is about 400 steps up from the river. Wear something you can climb in.' },
      { name: 'Kansai (KIX)', at: [135.2441, 34.4347], min: 105, mode: 'rail', via: 'Taxi to Kyoto Station, then the Haruka limited express, about 80 min', why: 'Departure only.' },
    ],
  },
];

// ── the seventeen days ───────────────────────────────────────────────
// `fixed`  things with a clock time you cannot miss — the spine of the day
// `moves`  journeys. `serves` names the fixed point this move has to deliver you to, and the
//          renderer derives the leave-by time from it. `buffer` is slack on top of the duration.
// `meals`  b / l / d. status: included | booked | open | flight | none
export const days = [
  {
    date: 'Fri 6', dow: 'Friday', base: null, where: 'In the air',
    title: 'SFO → HND, overnight',
    fixed: [
      { t: '01:20', what: 'NH107 departs SFO', note: 'Boeing 777-300ER — the aircraft that carries The Room. 11h30 in the air.' },
    ],
    moves: [],
    noMoves: 'Eleven and a half hours of it.',
    meals: {
      b: { status: 'flight', where: 'On board' },
      l: { status: 'flight', where: 'On board' },
      d: { status: 'none', where: 'Before you go', note: 'A 01:20 departure means leaving home on Thursday evening. Eat before the airport.' },
    },
    notes: [
      `<strong>This is the detail the itinerary page glosses.</strong> ANA’s own San Francisco–Haneda service is a small-hours departure, not a morning one: <strong>01:20 out of SFO, landing 04:50 the next day</strong>. Booked as "Friday 6 November", it is really a Thursday-night airport run.`,
      `The daytime SFO→HND option is the United-operated codeshare (departs late morning, lands mid-afternoon). It is a different aircraft and a different seat — you would be giving up The Room, which is the entire reason this flight was chosen.`,
    ],
  },
  {
    date: 'Sat 7', dow: 'Saturday', base: 'tokyo', where: 'Tokyo', title: 'Land at dawn',
    fixed: [
      { t: '04:50', what: 'NH107 lands at Haneda', kind: 'arrive' },
      { t: '15:00', what: 'Room available at Aman Tokyo', kind: 'hotel', note: 'Request early check-in at booking; failing that, the spa and lounge take you.' },
    ],
    moves: [
      { from: 'Haneda', to: 'Aman Tokyo', min: 25, mode: 'car', at: '06:00', note: 'Private transfer. Empty roads at that hour — this is the fastest this journey ever is.' },
    ],
    meals: {
      b: { status: 'open', where: 'The hotel', at: '07:00', note: 'You will be in the building nine hours before the room is. Breakfast, then the spa.' },
      l: { status: 'open', where: 'Nearby' },
      d: { status: 'open', where: 'Nothing booked', note: "Correct. You have been awake for a very long time, and L'Effervescence is shut on Sundays and Mondays anyway." },
    },
    notes: [
      `<strong>The ten-hour gap is the real logistics problem of this trip, and it is on day one.</strong> You clear Haneda around 05:45 and the room is not ready until 15:00. Three things fix it, in order: ask Aman for early check-in when you book (a dawn arrival is exactly the case they accommodate); use the spa, which has the stone baths and the 30m pool and does not care what time it is; and take the <strong>Imperial Palace East Gardens</strong> at opening — ten minutes on foot, free, and open on Saturdays.`,
      `Do not schedule anything with a reservation on this day. The gentle evening is the plan, and it is the right one.`,
    ],
  },
  {
    date: 'Sun 8', dow: 'Sunday', base: 'tokyo', where: 'Tokyo', title: 'The light day',
    fixed: [
      { t: '14:00', what: 'Owl café slot', kind: 'booked', id: 'owl', confirm: true, note: 'Whatever slot you end up holding — arrive 10 minutes early, because the door locks during the session.' },
      { t: '16:20', what: 'Meiji Jingu closes at sunset', kind: 'closes' },
    ],
    moves: [
      { from: 'Aman Tokyo', to: 'Meiji Jingu', min: 25, mode: 'metro', at: '09:30' },
      { from: 'Meiji Jingu', to: 'Akiba Fukurou', min: 30, mode: 'metro', serves: 'owl', note: 'Via the Jingu Gaien ginkgo on the way out — they sit between the two.' },
    ],
    meals: {
      b: { status: 'included', where: 'Aman Tokyo' },
      l: { status: 'open', where: 'Omotesando or Aoyama' },
      d: { status: 'open', where: 'Nothing booked', note: "L'Effervescence is closed Sundays. Deliberate — this is the jet-lag day." },
    },
    notes: [
      `Meiji Jingu closes at sunset, which in mid-November is about 16:20. Everything else today is flexible, so this is a morning-first day by necessity rather than by taste.`,
    ],
  },
  {
    date: 'Mon 9', dow: 'Monday', base: 'tokyo', where: 'Karuizawa', title: 'Flying squirrels',
    fixed: [
      { t: '15:45', what: 'Check in at the Picchio Visitor Center', kind: 'booked', id: 'picchio', note: 'Fifteen minutes before the tour. The tour itself is 16:00–17:30.' },
      { t: '17:30', what: 'Tour ends', kind: 'ends' },
    ],
    moves: [
      { from: 'Aman Tokyo', to: 'Picchio, Karuizawa', min: 130, mode: 'rail', serves: 'picchio', buffer: 20, note: 'Eight minutes on foot to Tokyo Station, 1h10 on the Hokuriku shinkansen, then the free Hoshinoya shuttle 25 min from the south exit.' },
      { from: 'Picchio', to: 'Aman Tokyo', min: 130, mode: 'rail', at: '17:45', note: 'Back in Otemachi around 19:55.' },
    ],
    meals: {
      b: { status: 'included', where: 'Aman Tokyo' },
      l: { status: 'open', where: 'Early, in town', note: 'Eat before you go — you are on a train through the usual lunch hour and there is nothing at the far end.' },
      d: { status: 'open', where: 'Late, back in Tokyo', note: 'You are not in the building until nearly 20:00. No 3★ seating survives that, which is exactly why the Monday works here.' },
    },
    notes: [
      `<strong>The tightest inbound connection of the trip, and it is the one thing that cannot slip.</strong> Picchio is a 90-minute tour with a hard 16:00 start, better than 90% success rate, and the season closes 30 November. Two hours ten door to door means leaving Otemachi by <strong>13:15</strong> to be safe.`,
      `The shuttle is Hoshinoya's, free, from Karuizawa Station's <em>south</em> exit, and it takes 25 minutes to Tombo-no-yu. The Seibu bus from the north exit does the same run for ¥470 if the shuttle timing is wrong.`,
    ],
  },
  {
    date: 'Tue 10', dow: 'Tuesday', base: 'tokyo', where: 'Ome, west Tokyo', title: 'The forge, then three stars',
    fixed: [
      { t: '18:30', what: "L'Effervescence, first seating", kind: 'booked', id: 'leff', confirm: true, note: 'Confirm the actual seating time at booking — this is an assumption.' },
    ],
    moves: [
      { from: 'Aman Tokyo', to: 'Hirata forge, Ome', min: 100, mode: 'rail', at: '08:30', note: 'JR Chuo Rapid to the Ome line — about 1h25 from Tokyo Station, plus the hop at the far end.' },
      { from: 'Ome', to: "L'Effervescence", min: 110, mode: 'rail', serves: 'leff', buffer: 30, note: 'Back into town and across to Nishi-Azabu. Allow for changing out of forge clothes.' },
    ],
    meals: {
      b: { status: 'included', where: 'Aman Tokyo' },
      l: { status: 'open', where: 'Ome', note: 'The session is 150 minutes; work lunch around it.' },
      d: { status: 'booked', where: "L'Effervescence", note: 'Three stars, and the personalised gluten-free menu is printed for the guest. The one Tokyo dinner that is fully solved in advance.' },
    },
    notes: [
      `<strong>Tuesday is the only night this can happen.</strong> L'Effervescence closes Sundays and Mondays and is dinner-only on Tuesdays and Wednesdays. Sunday and Monday of this block are therefore the owl café and the Karuizawa run — which returns at 20:00 and never suited a three-star seating anyway. The plan already gets this right; it is worth knowing <em>why</em>, so that nothing gets shuffled later.`,
      `The day is long: Ome is 100 minutes out, the session is 150 minutes, and Nishi-Azabu is on the other side of the city. Build in the change of clothes.`,
    ],
  },
  {
    date: 'Wed 11', dow: 'Wednesday', base: 'hakone', where: '→ Hakone', title: 'Down to Gora',
    transfer: true,
    fixed: [
      { t: '15:00', what: 'Check in at Gora Kadan', kind: 'hotel' },
      { t: '18:00', what: 'Kaiseki, in the room', kind: 'included', note: 'Dinner service runs 17:30–21:00, last order 19:00.' },
    ],
    moves: [
      { from: 'Aman Tokyo', to: 'Gora Kadan', min: 150, mode: 'rail', at: '12:00', note: 'Romancecar from Shinjuku to Hakone-Yumoto is about 1h25, then the Tozan railway up to Gora, about 40 min. A private transfer door to door is roughly two hours.' },
    ],
    meals: {
      b: { status: 'included', where: 'Aman Tokyo' },
      l: { status: 'open', where: 'On the way, or at Hakone-Yumoto' },
      d: { status: 'included', where: 'Gora Kadan — the classic kaiseki', note: 'First of three. This is the night the standard kaiseki is served; the alternatives come later in the stay.' },
    },
    notes: [
      `Aman check-out is 12:00 and Gora Kadan check-in is 15:00, so this is a genuinely unhurried transfer — the only one on the trip that is.`,
      `<strong>Send the big bags to Kyoto from here, not from Hakone.</strong> The plan forwards them on the 14th; doing it on the 13th evening from Gora Kadan gives the courier a full extra day and you still travel the Alps leg light.`,
    ],
  },
  {
    date: 'Thu 12', dow: 'Thursday', base: 'hakone', where: 'Hakone', title: 'The loop day',
    fixed: [
      { t: '08:00', what: 'Check the Owakudani status page', kind: 'check', note: 'Volcanic activity closes the ropeway without notice. If it is shut, today becomes the art day and Friday becomes the loop.' },
      { t: '18:30', what: 'Itoh Dining by Nobu', kind: 'booked', id: 'itoh', confirm: true },
    ],
    moves: [
      { from: 'Gora Kadan', to: 'Owakudani', min: 25, mode: 'ropeway', at: '09:00', note: 'Cablecar to Sounzan, 9 min. Ropeway on, 8 min.' },
      { from: 'Owakudani', to: 'Togendai', min: 16, mode: 'ropeway', chain: true },
      { from: 'Togendai', to: 'Moto-Hakone', min: 40, mode: 'boat', chain: true, note: 'The lake crossing. Hakone Shrine and the torii in the water are 10 minutes on from the pier.' },
      { from: 'Moto-Hakone', to: 'Gora Kadan', min: 70, mode: 'bus', serves: 'itoh', buffer: 60, note: 'Bus back — you do not retrace the ropeway. Every 20–30 minutes. The hour of buffer is your time at the shrine.' },
    ],
    meals: {
      b: { status: 'included', where: 'Gora Kadan' },
      l: { status: 'open', where: 'Lakeside at Moto-Hakone' },
      d: { status: 'booked', where: 'Itoh Dining by Nobu', warn: 'This is a dinner you eat away from a half-board hotel. See the note below — it needs a booking change, not just a reservation.' },
    },
    notes: [
      `<strong>The half-board conflict, and it is worth money.</strong> Gora Kadan is booked three nights half board, but only two of those dinners are eaten there — tonight is Itoh Dining. Ryokan rates are per person with dinner included, so unless you book <strong>tonight as room-and-breakfast</strong>, you are paying for a kaiseki you will not eat. Ask for it explicitly at reservation; most ryokan will do it, and it is the single cheapest correction on this page.`,
      `Two mornings at Lake Ashi rather than one is the argument for the third Hakone night. November runs about 60% Fuji visibility, so a second look takes you to roughly 84%.`,
      `The Freepass covers the cablecar, both ropeway sections, the boat and the bus back. Buy it on arrival — no need to pre-book.`,
    ],
  },
  {
    date: 'Fri 13', dow: 'Friday', base: 'hakone', where: 'Hakone', title: 'The art day',
    fixed: [
      { t: '16:00', what: 'Hakone Museum of Art last entry', kind: 'closes', id: 'moss', note: 'Closes 16:30. The moss garden is the reason to go and it wants daylight.' },
    ],
    moves: [
      { from: 'Gora Kadan', to: 'Hakone Open-Air Museum', min: 10, mode: 'rail', at: '09:30' },
      { from: 'Open-Air Museum', to: 'Pola Museum of Art', min: 25, mode: 'bus', chain: true },
      { from: 'Pola Museum', to: 'Hakone Museum of Art', min: 30, mode: 'bus', serves: 'moss', buffer: 15 },
    ],
    meals: {
      b: { status: 'included', where: 'Gora Kadan' },
      l: { status: 'open', where: 'At the Pola, or back in Gora' },
      d: { status: 'included', where: 'Sushi Kadan, or the charcoal-grilled beef course', warn: 'Sushi Kadan is a separate kitchen on the property and inherits nothing from the ryokan’s gluten-free arrangement. Ask about it by name.' },
    },
    notes: [
      `<strong>Three museums, and only one of them has a closed day that matters.</strong> The Hakone Museum of Art shuts on Thursdays — which is why the art day is Friday. The Open-Air Museum and the Pola are open daily. Keep that ordering if the weather forces a swap: it is the moss garden, not the ropeway, that has the hard constraint.`,
      `The moss garden and the Open-Air Museum are both within ten minutes of the hotel. Only the Pola is a real journey, and it can be dropped without breaking the day.`,
    ],
  },
  {
    date: 'Sat 14', dow: 'Saturday', base: 'tobira', where: '→ Tobira Onsen', title: 'The Kiso valley, and the shuttle you must catch',
    transfer: true,
    fixed: [
      { t: '11:00', what: 'Gora Kadan check-out', kind: 'hotel' },
      { t: '15:15', what: 'Myojinkan shuttle departs Matsumoto Station', kind: 'shuttle', id: 'shuttle', note: 'East exit, down two escalators, right to the rotary by the police box. The only other departure is 16:30.' },
    ],
    moves: [
      { from: 'Gora Kadan', to: 'Odawara', min: 60, mode: 'rail', serves: 'shuttle', chain: true, note: 'Tozan railway to Hakone-Yumoto, then Odakyu to Odawara.' },
      { from: 'Odawara', to: 'Nagoya', min: 70, mode: 'rail', chain: true, note: 'Hikari — about 1h10. Nozomi does not stop at Odawara, so this is Hikari or the very slow Kodama.' },
      { from: 'Nagoya', to: 'Matsumoto', min: 88, mode: 'rail', chain: true, note: 'Limited Express Shinano up the Kiso valley, about 1h28, roughly hourly.' },
      { from: 'Matsumoto Station', to: 'Myojinkan', min: 40, mode: 'bus', at: '15:15', note: 'The shuttle. 35–45 minutes up the valley to 1,050m.' },
    ],
    meals: {
      b: { status: 'included', where: 'Gora Kadan' },
      l: { status: 'open', where: 'On the Shinano, or at Nagoya', note: 'Buy it at Nagoya during the change — there is nothing at Matsumoto worth the tight connection.' },
      d: { status: 'included', where: 'Myojinkan — kaiseki or the French menu', warn: 'Which kitchen you eat in is chosen when you book, not on the day. That decision has to be made across all three nights, in advance, with the gluten-free brief attached.' },
    },
    notes: [
      `<strong>The one genuinely tight day, and it is tight against a shuttle rather than a train.</strong> Adding the legs up — an hour down to Odawara, 1h10 to Nagoya, 1h28 to Matsumoto, plus three connections — the latest you can leave Gora Kadan and still make the 15:15 is <strong>10:35, twenty-five minutes before check-out</strong>. That is the latest, not the plan: go at 10:00 and you have half an hour of slack on a day with three changes.`,
      `<strong>Neither outcome is a disaster, but they are different days.</strong> The 15:15 gives you an hour of daylight in the valley and an unhurried first onsen. The 16:30 gets you in more or less straight to dinner. Decide which you want before you book the shuttle, because it is reservation-only either way.`,
      `The escape hatch is a taxi: 30 minutes from Matsumoto Station, about ¥7,000, no fixed departure. Worth holding in reserve if the Shinano runs late.`,
    ],
  },
  {
    date: 'Sun 15', dow: 'Sunday', base: 'tobira', where: 'Matsumoto', title: 'Castle and Kusama',
    fixed: [
      { t: '16:30', what: 'Matsumoto Castle last entry', kind: 'closes' },
      { t: '16:30', what: 'City Museum of Art last entry', kind: 'closes', id: 'museum', note: 'Closed Mondays — so it has to be today, not tomorrow.' },
    ],
    moves: [
      { from: 'Myojinkan', to: 'Matsumoto', min: 40, mode: 'bus', at: '09:30', note: 'Shuttle or taxi down the valley.' },
      { from: 'Matsumoto', to: 'Myojinkan', min: 40, mode: 'bus', at: '17:00' },
    ],
    meals: {
      b: { status: 'included', where: 'Myojinkan' },
      l: { status: 'open', where: 'Nakamachi' },
      d: { status: 'included', where: 'Myojinkan — the other kitchen', note: 'Two restaurants, three nights. Alternate them; the French room is the escape hatch if a kaiseki course is not landing.' },
    },
    notes: [
      `Everything today is within fifteen minutes on foot of Matsumoto Station — castle, storehouse street, museum. The travel is all in getting down the valley and back, which is why it is a single round trip rather than two.`,
    ],
  },
  {
    date: 'Mon 16', dow: 'Monday', base: 'tobira', where: 'The Alps, or not', title: 'The optional day',
    fixed: [
      { t: '08:00', what: 'Check the Utsukushigahara Skyline is open', kind: 'check', note: 'The mountain roads close for winter around 20 November and snow can shut them sooner.' },
    ],
    moves: [
      { from: 'Myojinkan', to: 'Utsukushigahara plateau', min: 60, mode: 'car', at: '09:30', note: '17 km and an hour of switchbacks. A taxi or a hired car — there is no bus.' },
    ],
    meals: {
      b: { status: 'included', where: 'Myojinkan' },
      l: { status: 'open', where: 'Take it with you', note: 'There is very little open on the plateau this late in the season.' },
      d: { status: 'included', where: 'Myojinkan — back to the first kitchen', note: 'Third of three. Ask at booking what changes across the three menus.' },
    },
    notes: [
      `<strong>Two versions of this day, and they are not close in cost.</strong> Utsukushigahara is an hour away by road. <strong>Shinhotaka is two and a half hours each way</strong> — down to Matsumoto, Alpico bus to Hirayu Onsen, then the Okuhida bus — which is five hours of buses before you have looked at anything. The ropeway is spectacular and runs to 2,150m, but treat it as the whole day or not at all.`,
      `The third version is to stay put, which is a real answer at a ryokan like this one and the reason the plan says so out loud.`,
    ],
  },
  {
    date: 'Tue 17', dow: 'Tuesday', base: 'kyoto', where: '→ Kyoto', title: 'Down to Gion',
    transfer: true,
    fixed: [
      { t: '15:00', what: 'Check in at SOWAKA', kind: 'hotel', id: 'checkin' },
    ],
    moves: [
      { from: 'Myojinkan', to: 'Matsumoto Station', min: 40, mode: 'bus', at: '09:00', note: 'Shuttle or taxi.' },
      { from: 'Matsumoto', to: 'Nagoya', min: 88, mode: 'rail', chain: true, note: 'The Shinano back down the Kiso valley.' },
      { from: 'Nagoya', to: 'Kyoto', min: 36, mode: 'rail', chain: true, note: 'Nozomi or Hikari — about 35 minutes.' },
      { from: 'Kyoto Station', to: 'SOWAKA', min: 20, mode: 'car', serves: 'checkin' },
    ],
    meals: {
      b: { status: 'included', where: 'Myojinkan' },
      l: { status: 'open', where: 'On the train' },
      d: { status: 'open', where: 'Gion — nothing booked', warn: 'Not a free choice: Kikunoi Honten closes the 1st and 3rd Tuesday of the month, and in November 2026 the 3rd Tuesday is today. Whatever else moves in this week, Kikunoi can never move to the arrival day.' },
    },
    notes: [
      `Three hours door to door, and unlike the 14th there is nothing at the far end you have to catch. Check-in is 15:00; a mid-morning departure lands it comfortably.`,
      `The big bags should already be in Kyoto — they were forwarded from Hakone on the 14th.`,
    ],
  },
  {
    date: 'Wed 18', dow: 'Wednesday', base: 'kyoto', where: 'Takao', title: 'The furthest colour',
    fixed: [
      { t: '16:00', what: 'Jingo-ji closes', kind: 'closes', id: 'jingoji' },
    ],
    moves: [
      { from: 'SOWAKA', to: 'Takao', min: 75, mode: 'bus', at: '08:30', note: 'Taxi to Kyoto Station, then the JR Takao–Keihoku bus, about 50 minutes. Every 20–30 minutes.' },
      { from: 'Takao', to: 'SOWAKA', min: 75, mode: 'bus', at: '16:00' },
    ],
    meals: {
      b: { status: 'included', where: 'SOWAKA' },
      l: { status: 'open', where: 'In the valley', note: 'Thin on the ground. Take something.' },
      d: { status: 'open', where: 'Gion — nothing booked' },
    },
    notes: [
      `<strong>The longest day trip of the Kyoto week, and the one that most justifies a car.</strong> Seventy-five minutes each way on a bus with a change; a private Alphard for the day is $300–500 and turns it into a genuinely easy outing. Same argument applies to Ohara tomorrow.`,
      `Jingo-ji is about 400 steps up from the river, and it closes at 16:00 — earlier than everything else this week. Start at Kozan-ji, which opens at 8:30, and work down the valley.`,
    ],
  },
  {
    date: 'Thu 19', dow: 'Thursday', base: 'kyoto', where: 'Ohara and Yase', title: 'North, and then three stars',
    fixed: [
      { t: '16:30', what: 'Rurikoin reception closes', kind: 'closes', id: 'ruriko', note: 'Reservation-only in the autumn season. Without one you do not get in.' },
      { t: '17:30', what: 'Kikunoi Honten', kind: 'booked', id: 'kikunoi', note: 'Dinner from 17:00, last order 19:30.' },
    ],
    moves: [
      { from: 'SOWAKA', to: 'Sanzen-in, Ohara', min: 60, mode: 'bus', at: '08:30', note: 'To Demachiyanagi, Kyoto bus 17 about 33 min, then 10 minutes uphill.' },
      { from: 'Ohara', to: 'Rurikoin', min: 45, mode: 'rail', serves: 'ruriko', buffer: 20, note: 'Back down to Yase-Hieizanguchi — Rurikoin is 5 minutes from the station.' },
      { from: 'Rurikoin', to: 'Kikunoi Honten', min: 45, mode: 'rail', serves: 'kikunoi', buffer: 30, note: 'Back into Higashiyama. Kikunoi is a five-minute walk from the hotel, so there is time to change.' },
    ],
    meals: {
      b: { status: 'included', where: 'SOWAKA' },
      l: { status: 'open', where: 'Ohara' },
      d: { status: 'booked', where: 'Kikunoi Honten', note: 'Three stars, with a formal gluten-free intake on the reservation form. Declare it there — they do not take same-day dietary requests.' },
    },
    notes: [
      `<strong>The most tightly packed day of the trip.</strong> Ohara, then Rurikoin, then a three-star kaiseki, and both of the daytime stops have hard closing times. If it slips, drop Rurikoin — it is the one with the reservation you can rebook, and Sanzen-in’s moss garden is the better of the two in early colour.`,
      `Rurikoin’s autumn reservations open in early October and the season sells out. Put a reminder in for the first week of October.`,
    ],
  },
  {
    date: 'Fri 20', dow: 'Friday', base: 'kyoto', where: 'Arashiyama', title: 'Macaques, then kintsugi',
    fixed: [
      { t: '09:00', what: 'Iwatayama monkey park opens', kind: 'opens', id: 'monkeys', note: 'Go at opening. Last entry 16:00.' },
      { t: '14:30', what: 'Heki kintsugi, 120 minutes', kind: 'booked', id: 'heki', confirm: true },
      { t: '20:30', what: 'Eikando light-up last entry', kind: 'closes', note: 'Runs 17:30–21:00, and it is a separate ticket from the daytime visit.' },
    ],
    moves: [
      { from: 'SOWAKA', to: 'Iwatayama monkey park', min: 50, mode: 'rail', serves: 'monkeys', buffer: 15, note: 'Fifty minutes to the gate, then a 20-minute climb on top of that.' },
      { from: 'Arashiyama', to: 'Akagane Resort', min: 50, mode: 'rail', serves: 'heki', buffer: 20, note: 'Back to Higashiyama. The workshop is five minutes from the hotel.' },
      { from: 'SOWAKA', to: 'Eikando', min: 15, mode: 'car', at: '18:30' },
    ],
    meals: {
      b: { status: 'included', where: 'SOWAKA' },
      l: { status: 'open', where: 'Arashiyama' },
      d: { status: 'open', where: 'Gion — nothing booked', note: 'Deliberately loose: the kintsugi runs to about 16:30 and Eikando is an evening. Eat early or late, near the hotel.' },
    },
    notes: [
      `<strong>The one day that is west, east and central all at once, and it works only because the kintsugi is on your doorstep.</strong> Akagane Resort is five minutes from SOWAKA on the same street, so the afternoon costs no travel at all.`,
      `Eikando sells the daytime visit and the light-up separately, and clears the grounds between them. Take the light-up and skip the day — the maples are part-turned on these dates and the illumination is the better version.`,
    ],
  },
  {
    date: 'Sat 21', dow: 'Saturday', base: 'kyoto', where: 'Kurama and Kibune', title: 'The last day, and the busiest',
    fixed: [
      { t: '18:30', what: 'Kodaiji Jugyuan — farewell dinner', kind: 'booked', id: 'jugyuan', confirm: true },
      { t: '21:30', what: 'Kodai-ji illumination last entry', kind: 'closes', note: 'Runs to 22:00. Next door to the restaurant — take it after dinner, not before.' },
    ],
    moves: [
      { from: 'SOWAKA', to: 'Kyudo studio', min: 30, mode: 'metro', at: '09:00', confirm: true, note: 'Location still unconfirmed — the studio does not publish it. Email before you book anything else around it.' },
      { from: 'Kyoto', to: 'Kurama & Kibune', min: 50, mode: 'rail', at: '13:00', note: 'To Demachiyanagi, then 30 minutes on the Eizan line. The train dims its lights through the maple tunnel.' },
      { from: 'Kibune', to: 'Kodaiji Jugyuan', min: 55, mode: 'rail', serves: 'jugyuan', buffer: 30 },
    ],
    meals: {
      b: { status: 'included', where: 'SOWAKA' },
      l: { status: 'open', where: 'Kibune' },
      d: { status: 'booked', where: 'Kodaiji Jugyuan', note: 'Three minutes from the hotel, and next door to the illumination.' },
    },
    notes: [
      `<strong>21–23 November is a holiday weekend — the busiest stretch of the Kyoto season.</strong> Kurama and Kibune are on a two-car railway that queues badly at peak. Go early afternoon rather than late, and let the light-up be the reward for having already been up there.`,
      `Kibune’s momiji-toro light-up ran 7–24 November in 2025, sunset to about 21:00. The 2026 dates were not published when this was written — check before you commit the evening.`,
      `The kyudo session is the last unpinned thing on the trip. Until the studio confirms its location and dates, treat the morning as provisional.`,
    ],
  },
  {
    date: 'Sun 22', dow: 'Sunday', base: null, where: '→ SFO', title: 'The unhurried departure',
    transfer: true,
    fixed: [
      { t: '11:00', what: 'SOWAKA check-out', kind: 'hotel' },
      { t: '18:35', what: 'UA34 departs KIX', kind: 'flight', id: 'ua34', note: 'Winter schedule from 25 October. Lands at SFO around 12:30 the same calendar day.' },
    ],
    moves: [
      { from: 'SOWAKA', to: 'Kansai (KIX)', min: 105, mode: 'rail', serves: 'ua34', buffer: 150, note: 'Taxi to Kyoto Station, then the Haruka limited express, about 80 minutes. Two and a half hours at the airport is the right buffer for an international departure.' },
    ],
    meals: {
      b: { status: 'included', where: 'SOWAKA' },
      l: { status: 'open', where: 'Kyoto, before you go', note: 'There is time for a proper last lunch. This is the gift of an 18:35 departure.' },
      d: { status: 'flight', where: 'On board' },
    },
    notes: [
      `<strong>The last day is far easier than the plan assumes.</strong> United’s KIX–SFO service moves to <strong>18:35</strong> on the winter schedule that starts 25 October — not the 16:55 it runs through the summer. Leaving SOWAKA at <strong>14:20</strong> puts you at the gate two and a half hours out, which means <strong>a full final morning in Kyoto and a proper lunch before you go</strong>.`,
      `Check-out is 11:00 but the hotel will hold bags. Use the morning for whatever the week rained off.`,
      `The flight lands at SFO around midday <em>on the same Sunday</em>, which is what buys the three clear days before Colorado.`,
    ],
  },
];

// ── things that are true across days ─────────────────────────────────
export const standing = {
  title: 'Standing constraints',
  sub: 'Every fixed point on this page that is not a train.',
  rows: [
    ['Owl café, Tokyo', 'Reservation only via select-type.com, card charged at booking, door locks during the session. Arrive 10 minutes early.', 'Sun 8'],
    ['Picchio, Karuizawa', 'Hard 16:00 start, 90 minutes, check in 15 minutes early. Season ends 30 November 2026.', 'Mon 9'],
    ["L'Effervescence", 'Closed Sundays and Mondays; dinner only Tue and Wed. Book via Pocket Concierge.', 'Tue 10'],
    ['Owakudani ropeway', 'Closes without notice on volcanic activity. Check the status page at breakfast.', 'Thu 12'],
    ['Hakone Museum of Art', 'Closed Thursdays. Fixes the art day to Friday.', 'Fri 13'],
    ['Myojinkan shuttle', 'Departs Matsumoto Station at 15:15 and 16:30 only, advance reservation. Taxi is the escape hatch — 30 min, ¥7,000.', 'Sat 14, Sun 15, Tue 17'],
    ['Matsumoto City Museum of Art', 'Closed Mondays. Fixes the Kusama collection to Sunday.', 'Sun 15'],
    ['Utsukushigahara Skyline', 'Winter closure around 20 November; snow can shut it sooner.', 'Mon 16'],
    ['Kikunoi Honten', 'Closed the 1st and 3rd Tuesday — 3 and 17 November 2026. Formal gluten-free intake on the reservation form.', 'Thu 19'],
    ['Rurikoin', 'Autumn season is reservation-only and sells out. Booking opens in early October.', 'Thu 19'],
    ['Iwatayama monkey park', '9:00–16:30, last entry 16:00, plus a 20-minute climb from the gate.', 'Fri 20'],
    ['Eikando', 'Day and light-up are separate tickets; the grounds clear between them. Light-up 17:30–21:00, last entry 20:30.', 'Fri 20'],
    ['Kodai-ji illumination', '17:00–22:00, last entry 21:30. Next door to Jugyuan.', 'Sat 21'],
    ['Kyudo studio', 'Location and dates unpublished. Email to confirm before fixing the Saturday.', 'Sat 21'],
  ],
};

// Findings that change a booking rather than just a clock time. These are the reason the
// runbook exists; they are surfaced at the top of the page rather than buried in a day.
export const corrections = [
  {
    title: 'The ANA flight leaves at 01:20, and you land at dawn',
    body: `ANA’s San Francisco–Haneda service, NH107, departs <strong>01:20 and lands 04:50 the next day</strong> — a Boeing 777-300ER, which is the aircraft that carries The Room. Booked as "Friday 6 November", it is a Thursday-night departure from home, and it puts you at Aman Tokyo around 06:00 on the Saturday against a 15:00 check-in. Not a problem, but a nine-hour gap that wants planning: early check-in requested at booking, the spa, and the Imperial Palace East Gardens ten minutes away.`,
    effect: 'Day 1–2 reshaped',
  },
  {
    title: 'The last day is three hours looser than assumed',
    body: `United’s KIX–SFO flight moves to <strong>18:35</strong> on the winter schedule that begins 25 October, rather than the 16:55 it runs in summer. With the Haruka at 80 minutes, leaving Kyoto at 14:20 still puts you at the gate two and a half hours out — so 22 November has <strong>a full final morning and a proper lunch in Kyoto</strong>, which the itinerary currently does not claim.`,
    effect: 'A morning gained',
  },
  {
    title: 'Two of Gora Kadan’s three half-board dinners are eaten elsewhere',
    body: `The stay is booked three nights half board, but Thursday’s dinner is at Itoh Dining by Nobu. Ryokan rates are per person with dinner included, so <strong>Thursday should be booked room-and-breakfast</strong> or you are paying twice. Ask explicitly at reservation. Separately, <strong>Sushi Kadan is a different kitchen</strong> on the same property and inherits nothing from the ryokan’s gluten-free arrangement — it needs its own conversation.`,
    effect: 'Money, and a gluten-free gap',
  },
  {
    title: 'Making the 15:15 shuttle means leaving Hakone an hour before check-out',
    body: `Gora Kadan to Myojinkan is four legs — Odawara, Nagoya, Matsumoto, then the inn’s own shuttle — and the shuttle only runs at <strong>15:15 and 16:30</strong>. The arithmetic puts the latest possible departure at <strong>10:35</strong>, twenty-five minutes before check-out, and that is with no slack at all on three connections. Leave at 10:00 for a comfortable 15:15 and an hour of daylight at 1,050m; leave at check-out and you are on the 16:30, into the inn about 17:10, more or less straight to dinner. Both work — they are different days, and the shuttle is reservation-only either way.`,
    effect: 'Choose before booking',
  },
];
