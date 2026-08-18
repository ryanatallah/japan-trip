// THE SEVENTEEN DAYS — the operating schedule.
//
// Feeds days.html, and the day-by-day on the itinerary borrows its leave-by line from the same
// arithmetic so the two pages cannot disagree.
//
// The point of keeping this as data rather than prose is that leave-by times are DERIVED, not
// typed: a move carries a duration and names the fixed point it has to deliver you to, and
// tools/schedule.mjs subtracts one from the other. Change a train time and every dependent
// clock time moves with it.
//
// `fixed`  things with a clock time you cannot miss — the spine of the day
// `moves`  journeys. `serves` names the fixed point this move has to deliver you to.
//          `chain: true` links a leg to the one after it, so a four-train day resolves to a
//          single leave-by at its head. `buffer` is slack on top of the duration.
// `meals`  b / l / d. status: included | booked | open | flight | none
// `base`   which of content/bases.mjs you sleep in that night — also drives the leg grouping
//
// Sources for the numbers are in tools/RUNBOOK_SOURCES.md.

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

// ── legs ─────────────────────────────────────────────────────────────
// The days group into six legs — a run of nights at one base, bracketed by the two travel days
// that have no base at all. Derived from `base` rather than typed, so a day that moves to a
// different hotel regroups on its own. This is what gives the page its outline.
const LEG_LABEL = {
  tokyo: 'Tokyo', hakone: 'Hakone', tobira: 'The Alps', kyoto: 'Kyoto',
};

export function legs() {
  const out = [];
  for (const d of days) {
    const last = out[out.length - 1];
    if (last && last.base === d.base) { last.days.push(d); continue; }
    out.push({ base: d.base, days: [d] });
  }
  // A base-less run is a travel day. The first and last are the flights out and home; any other
  // — an overnight train, a gap between check-out and the next check-in — is neither, and must
  // not reuse the 'return' id or two sections end up sharing a DOM id and an outline entry.
  return out.map((leg, i) => ({
    ...leg,
    id: leg.base || (i === 0 ? 'depart' : i === out.length - 1 ? 'return' : `transit-${i}`),
    label: leg.base
      ? LEG_LABEL[leg.base]
      : i === 0 ? 'Getting there' : i === out.length - 1 ? 'Getting home' : 'In transit',
    span: leg.days.length === 1
      ? leg.days[0].date
      : `${leg.days[0].date} – ${leg.days[leg.days.length - 1].date}`,
  }));
}
