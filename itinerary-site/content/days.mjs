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
    date: 'Wed 11', dow: 'Wednesday', base: 'nikko', where: '→ Okunikko', title: 'Up to the lake',
    fixed: [
      { t: '09:00', what: 'SPACIA X departs Asakusa', kind: 'depart', id: 'spacia', note: 'Arrives Tobu-Nikko 10:50. The 07:50 and 10:00 also run; the 12:30 and 14:00 go to Kinugawa instead.' },
      { t: '12:00', what: 'Check out of Aman Tokyo', kind: 'hotel', note: 'You leave three and a half hours before check-out. Settle the bill the night before.' },
      { t: '15:00', what: 'Room available at the Ritz-Carlton Nikko', kind: 'hotel', note: 'You arrive around 11:20 — bags to the concierge and take the lake.' },
    ],
    moves: [
      { from: 'Aman Tokyo', to: 'Asakusa', min: 20, mode: 'car', serves: 'spacia', buffer: 25, note: 'Taxi, about ¥3,000. Otemachi has no Ginza line platform, so the subway means a long underground walk plus a change — not with two large cases.' },
      { from: 'Asakusa', to: 'Tobu-Nikko', min: 110, mode: 'rail', at: '09:00', chain: true, note: 'SPACIA X 09:00 → 10:50. Book the Compartment — six square metres, a U-shaped sofa, ¥14,680 for the two of you. Reservations open 09:00 JST on Sunday 11 October, one month ahead, and there are only four of them per train.' },
      { from: 'Tobu-Nikko', to: 'The hotel', min: 30, mode: 'car', note: 'Taxi up the Irohazaka via the toll road, about ¥9,000 — Nikko Kotsu’s own estimate, 0288-54-1188. Ask for a jumbo. The hotel also runs a free shuttle reserved through TableCheck, but its timetable is unpublished.' },
    ],
    meals: {
      b: { status: 'included', where: 'Aman Tokyo' },
      l: { status: 'open', where: 'On the train or at the lake', note: 'GOEN CAFÉ in car 1 does Nikko craft beer and trout rillette. Nothing substantial.' },
      d: { status: 'open', where: 'The hotel', note: 'Room-only rate — dinner is not included, and at 1,269m on a November night there is very little else.' },
    },
    notes: [
      `<strong>You arrive by 11:30 if you take the 09:00.</strong> That is deliberate: it puts the bags with the concierge hours before the 15:00 check-in, and it clears the Irohazaka well inside the window that used to jam. <em>The alternative worth pricing is a private car door to door — Kokusai Hire quote ¥80,000 all in, tolls and fuel included, three to three and three-quarter hours, and no handling at either end.</em>`,
      `<strong>Two things are five minutes away on foot and both are free.</strong> Kegon Falls, ninety-seven metres, with an elevator down to the plunge pool at ¥600; and <strong>Futarasan Chugushi</strong>, the mid-mountain shrine founded in 784 — it is 2484 Chugushi to the hotel’s 2482.`,
      `<strong>Mount Nantai’s climbing season ends today</strong>, 25 April to 11 November. The gate is locked from tomorrow. Ask whether the closing ceremony happens at Chugushi — that would be a genuine ritual two hundred metres from the room.`,
      `<strong>You gain 1,269 metres.</strong> Tokyo will be around 17°C; the ten-day normal here is a high of 8.4°C and a low of 0.1°C.`,
    ],
  },
  {
    date: 'Thu 12', dow: 'Thursday', base: 'nikko', where: 'Nikko town', title: 'Down the mountain, because that is where the colour is',
    fixed: [
      { t: '08:00', what: 'Rinnoji opens', kind: 'opens', id: 'rinnoji', note: 'The only World Heritage site in Nikko you can enter in raking morning light — everything else opens at 09:00 or later.' },
      { t: '09:00', what: 'Toshogu opens', kind: 'opens', note: 'Nine, not the eight the older guidebooks give.' },
      { t: '13:30', what: 'Rinnoji’s set-ticket counter closes', kind: 'closes', note: 'November hours. Buy the ¥1,000 three-facility set in the morning or pay for each hall separately.' },
      { t: '15:30', what: 'Last entry, Toshogu and Rinnoji', kind: 'closes' },
      { t: '16:36', what: 'Sunset', kind: 'closes', note: 'Civil twilight ends 17:02.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Rinnoji', min: 40, mode: 'car', serves: 'rinnoji', buffer: 20, note: 'Drive or let the hotel drive. The bus is 36–40 minutes each way and the last-entry times are unforgiving.' },
    ],
    meals: {
      b: { status: 'open', where: 'The hotel', at: '06:45', note: '¥7,800 a head, Japanese or Western set rather than a buffet, and not included in the rate.' },
      l: { status: 'open', where: 'Nikko Kanaya Hotel, Main Dining Room', at: '11:30', note: 'Classical French in the 1893 dining room of the oldest surviving resort hotel in Japan. Last order 14:30, reserve on TableCheck. It drops exactly into the dead hours between the morning light and the afternoon cutoffs.', confirm: true },
      d: { status: 'open', where: 'The hotel', note: 'The Japanese Restaurant is reported closed Wednesdays and Thursdays. If that holds, tonight is Lakehouse.' },
    },
    notes: [
      `<strong>The day is shaped by one arithmetic problem: golden hour is 15:45 to 16:36, and everything you paid for is shut by then.</strong> Shinkyo closes at 15:30, the shrines at 16:00. So the last ninety minutes belong to the two things that are free and never close — <strong>Kanmangafuchi</strong>, seventy Jizo above a lava gorge, and <strong>Shinkyo</strong>, photographed from outside rather than crossed for ¥300. That is where the pictures happen.`,
      `<strong>Rinnoji’s Shoyoen is the best foliage of the whole trip</strong>, and it peaks in the first half of November. Also running while you are there: the first-ever public unveiling of a hidden Bishamonten icon, April 2026 through March 2027.`,
      `<strong>Taiyuin is the one people underrate.</strong> Iemitsu’s mausoleum takes about a fifth of Toshogu’s footfall, and black lacquer under deep cedar suits flat November light in a way that Toshogu’s gold leaf does not. It is inside the ¥1,000 set.`,
      `<strong>A free English-guided tour of the precinct runs Tuesdays, Thursdays and Saturdays</strong> — today or Saturday. And the <strong>Green Slow Mobility</strong> cart, which loops exactly Rinnoji–Kanmangafuchi–Tamozawa–Kanaya at ¥200, runs Tuesday to Thursday only with the season ending 19 November: today is your last chance at it.`,
      `<strong>Carry a bear bell.</strong> Hibernation does not start until December, November is hyperphagia, and the Botanical Garden closed twice this August after sightings inside the grounds.`,
    ],
  },
  {
    date: 'Fri 13', dow: 'Friday', base: 'nikko', where: 'Okunikko', title: 'The wildlife day',
    fixed: [
      { t: '08:45', what: 'Low-emission bus, Akanuma depot', kind: 'depart', id: 'lowbus', note: 'To Odashiro-ga-hara and Senjugahama, 30 min. ¥500 flat, hop-on hop-off. Returns 09:20, 10:40, 12:00, 13:20, 15:10, 16:25.' },
      { t: '16:36', what: 'Sunset', kind: 'closes' },
    ],
    moves: [
      { from: 'The hotel', to: 'Akanuma depot', min: 16, mode: 'car', serves: 'lowbus', buffer: 15 },
    ],
    meals: {
      b: { status: 'open', where: 'The hotel' },
      l: { status: 'open', where: 'Yumoto, or carried' },
      d: { status: 'open', where: 'The hotel', note: 'Or Chez Hoshino, three minutes away — serious independent French, Tochigi wagyu and lake kokanee. Closed Thursdays but open daily April–November. 0288-55-0212.' },
    },
    notes: [
      `<strong>The ¥500 low-emission bus is the best thing in Okunikko for you two.</strong> The corridor to Senjugahama is closed to private cars, so the bus is the only way in — and the operator pitches it explicitly as a wildlife platform, because animals flee hikers but tolerate a vehicle. Their own photographs from that stretch include <strong>Steller’s sea eagle</strong>, macaque, badger and fox, alongside the sika deer that are near-certain.`,
      `<strong>It also delivers the best photograph available at this altitude in November.</strong> Odashiro-ga-hara’s <em>Lady of Odashiro</em> — a single white birch alone in the meadow, a Japanese photography pilgrimage. A white trunk against frost-bleached grass with snow-capped Nantai behind it is a better image than the green-season version.`,
      `<strong>Send the bags to Kyoto today.</strong> Okunikko is a mountain address and next-day to Kansai is not the promise it is from a city hotel. Address them to Hotel The Mitsui for the 17th and do Izu on overnight bags — Sunday has five connections in it.`,
      `<strong>The one genuinely rare thing up the valley is Onsenji at Yumoto</strong>, a temple you bathe inside, on the same 1,200-year-old sulphur source that feeds the hotel. It closes for the winter in late November on a date nobody publishes — phone first. The road and buses to Yumoto are on completely normal timetables until 30 November.`,
      `<strong>Bird numbers are building.</strong> Lake Yunoko and Senjogahara were Ramsar-listed as waterfowl habitat: wigeon and smew arrive, mandarin duck shifts from common to abundant, and waxwings gather on the larch seed.`,
    ],
  },
  {
    date: 'Sat 14', dow: 'Saturday', base: 'nikko', where: 'Lake Chuzenji', title: 'The lake, by boat',
    fixed: [
      { t: '10:00', what: 'First useful cruise sailing', kind: 'depart', id: 'boat', note: 'From 5 November the schedule drops to five departures: 10:00, 11:00, 12:30, 13:30, 14:30. The 55-minute loop calls at the Embassy Villas pier.' },
      { t: '14:30', what: 'Last order, the British villa tea room', kind: 'closes', note: 'Open 10:00–15:00 in November. Run by Chuzenji Kanaya, with the menu supervised by the chef of the British Embassy in Tokyo.' },
      { t: '16:00', what: 'Embassy Villas close', kind: 'closes', note: 'They step down from 17:00 to 16:00 on 11 November — the day you arrived.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Chuzenji Onsen pier', min: 8, mode: 'car', serves: 'boat', buffer: 20 },
    ],
    meals: {
      b: { status: 'open', where: 'The hotel' },
      l: { status: 'open', where: 'The British villa tea room', at: '13:00', note: 'Scones with Tochigi jam and clotted cream. Last order 14:30.' },
      d: { status: 'open', where: 'The hotel', note: 'The Japanese Restaurant should be open tonight — sushi at the counter, teppanyaki, or the kaiseki. Choose the counter when you book.' },
    },
    notes: [
      `<strong>Buy the ¥2,200 unlimited pass rather than a single fare.</strong> The loop calls at four piers, and arriving at the British Embassy villa by boat is the most elegant move available here.`,
      `<strong>The two villas are the highlight of Okunikko in this season</strong>, and they are the reason the lake still works with no leaves on the trees. The British one was Ernest Satow’s 1896 retreat — Isabella Bird stayed; the Italian is Antonin Raymond’s 1928 building, clad in a cedar-bark checkerboard. ¥450 for the pair, and a tenth-anniversary programme runs through 30 November.`,
      `<strong>Note what stopped running on the 12th.</strong> The seasonal buses to Hangetsuyama and Utagahama ended two days ago, so from here the villas are the boat, a taxi, or a 35-minute walk.`,
      `<strong>Book the World Heritage guided tour for this afternoon if you want it</strong> — the hotel runs a four-hour version Friday to Sunday at ¥20,000. And pack tonight: tomorrow starts at 08:20.`,
    ],
  },
  {
    date: 'Sun 15', dow: 'Sunday', base: 'shuzenji', where: '→ Shuzenji, Izu', title: 'The long one',
    fixed: [
      { t: '14:30', what: 'Target arrival at Asaba', kind: 'hotel', id: 'asaba', note: 'The earliest check-in they take. Aim at this, not at the deadline.' },
      { t: '18:00', what: 'Latest check-in at Asaba', kind: 'closes', note: 'A hard edge, not a guideline — and dinner is a kaiseki with a seating time. Three and a half hours of slack between the target and the deadline is the right amount on a day with five connections.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Chuzenji Onsen', min: 8, mode: 'car', at: '08:20', chain: true },
      { from: 'Chuzenji Onsen', to: 'JR Nikko', min: 40, mode: 'bus', chain: true, note: 'Downhill is 36–40 minutes; the 50 quoted everywhere is the climb. ¥1,250.' },
      { from: 'JR Nikko', to: 'Tokyo', min: 100, mode: 'rail', chain: true, note: 'Via Utsunomiya and the Tohoku shinkansen. Not Tobu — Tobu is quicker but strands you at Asakusa with the cases.' },
      { from: 'Tokyo', to: 'Mishima', min: 50, mode: 'rail', chain: true, note: 'Tokaido shinkansen. Every Kodama stops at Mishima and some Hikari do; Nozomi does not.' },
      { from: 'Mishima', to: 'Asaba', min: 75, mode: 'car', serves: 'asaba', note: 'Collect the rental car at the Toyota desk two minutes from the shinkansen exit, then about 45 minutes over the hills. Half an hour of that is paperwork.' },
    ],
    meals: {
      b: { status: 'open', where: 'The hotel', at: '07:15' },
      l: { status: 'open', where: 'Tokyo Station', note: 'The only decent option on this route. Buy it as you pass through.' },
      d: { status: 'included', where: 'Asaba', note: 'Omakase kaiseki, served in your room. The meal the gluten-free brief has to have landed for.' },
    },
    notes: [
      `<strong>Six hours, five connections, and the whole width of the Kanto plain.</strong> Leaving at 08:20 puts you at Asaba around 14:30 — inside the 18:00 check-in with time to bathe before dinner. <em>Leaving after eleven does not.</em>`,
      `<strong>The hired car is not the shortcut it looks like.</strong> By road it is 330–360 km around Tokyo on the Ken-Ō-dō, six to seven hours realistically, at ¥150,000–250,000. No faster than the train, seven times the price.`,
      `<strong>The Irohazaka is clear, and that is luck rather than planning.</strong> Nikko’s tourism authority documents twenty-minute stretches taking three hours — but that is an October phenomenon, and the thing people drive up for has already gone. It is still a Sunday: leave before nine.`,
      `<strong>One real conflict, and you should know you are making it.</strong> <em>Kodomo Gōhanshiki</em>, a genuine folk rite in which schoolboys dressed as mountain ascetics ritually force bowls of rice on adult initiates, falls on <strong>this morning at 10:00</strong> at Ikuoka Shrine — it moved to the third Sunday of November in 2026, for the first time. It is fifty minutes down the mountain and has essentially no foreign audience. Doing it means abandoning the 08:20 departure and arriving at Asaba after dark. <strong>The transfer wins</strong>, but it is worth knowing what it cost.`,
    ],
  },
  {
    date: 'Mon 16', dow: 'Monday', base: 'shuzenji', where: 'Izu', title: 'The car day',
    fixed: [
      { t: '16:00', what: 'Niji-no-Sato momiji light-up opens', kind: 'opens', confirm: true, note: 'To 21:00, evening ticket ¥1,000, if 2026 matches 2025. Phone 0558-72-7111 — it is also nominally closed Tuesdays.' },
      { t: '20:00', what: 'Cut-paper projection on the bamboo path', kind: 'opens', note: 'Thrown onto the round bamboo bench by an artist born in the town. Free, three minutes away, lit to 23:00.' },
    ],
    moves: [
      { from: 'Asaba', to: 'Joren Falls or Darumayama', min: 30, mode: 'car', at: '09:00', note: 'Two shapes for the day and they do not combine — the wasabi run south, or Fuji to the west.' },
    ],
    meals: {
      b: { status: 'included', where: 'Asaba' },
      l: { status: 'open', where: 'On the road', note: 'Vieni KANDA, the only dedicated gluten-free kitchen in Shuzenji, is closed Mondays and Tuesdays — both of your full days. Carry safe food.' },
      d: { status: 'included', where: 'Asaba', note: 'A different kaiseki from last night. Room change to Moegi today.' },
    },
    notes: [
      `<strong>Two versions, and the car is why either is possible.</strong> <em>The wasabi:</em> Joren Falls, a 25m drop in a basalt gorge with tatami-ishi terraces free from the deck; a working farm at Wasabi no Ōmiya where the pickling session runs January to November at ¥1,650 a head; and the <strong>Ikadaba terraces</strong>, fifteen hectares and about 1,500 paddies, the largest such landscape in Japan. <em>Or Fuji:</em> Darumayama at sunrise, Izu Panorama Park’s ropeway to a 452m terrace with pools staging an inverted mountain, and the cape at Toi for sunset.`,
      `<strong>Ikadaba is private land.</strong> Viewing is tolerated from the road only, and the tourism board itself warns the lane is narrow and awkward for drivers who do not know it.`,
      `<strong>November is the best Fuji month of the year</strong> — summer haze gone, winter air dry, fresh snow on the summit. Shuzenji itself has no Fuji view, which is the strongest single argument for having the car.`,
      `<strong>The evening is free and very good.</strong> Sixty lamps on the bamboo path from sunset to 23:00, five red bridges in a twenty-minute loop, and Tokko-no-yu lit mid-river. <em>You cannot bathe in Tokko-no-yu</em> — it lost its legal status as a bathhouse. The free foot baths are on the far bank.`,
    ],
  },
  {
    date: 'Tue 17', dow: 'Tuesday', base: 'kyoto', where: '→ Kyoto', title: 'Down the Tokaido',
    fixed: [
      { t: '09:46', what: 'Hikari 705 departs Mishima', kind: 'depart', id: 'hikari', note: 'Direct to Kyoto, 1h51, arriving 11:37. Westbound Hikari leave Mishima at :46, six times a day. Miss it and the next is 11:46.' },
      { t: '15:00', what: 'Room available at Hotel The Mitsui', kind: 'hotel' },
    ],
    moves: [
      { from: 'Asaba', to: 'Mishima', min: 50, mode: 'car', serves: 'hikari', buffer: 25, note: 'Drop the rental at the branch by the shinkansen exit. The buffer absorbs the return paperwork.' },
      { from: 'Mishima', to: 'Kyoto', min: 111, mode: 'rail', chain: true },
      { from: 'Kyoto Station', to: 'The hotel', min: 15, mode: 'car', note: 'Taxi up Horikawa, about ¥2,000.' },
    ],
    meals: {
      b: { status: 'included', where: 'Asaba' },
      l: { status: 'open', where: 'Kyoto', at: '12:15' },
      d: { status: 'open', where: 'Nothing booked', note: 'Correct. Kikunoi is closed today — the 3rd Tuesday — which is exactly why it sits on Thursday.' },
    },
    notes: [
      `<strong>An easy day, deliberately, after yesterday.</strong> Three and a half hours door to door, one change, in Kyoto before noon with the afternoon free.`,
      `<strong>Nijo Castle is across the street.</strong> If the autumn evening event runs as it did in 2025 — 31 October to 7 December, 18:00 to a 21:00 last entry — it is a whole evening with no travel at all on your first night.`,
      `<strong>Learn Nijojo-mae tonight.</strong> Three minutes from the door on the Tozai line, which is effectively the Higashiyama subway: Sanjo Keihan in five minutes, Higashiyama in seven, Keage in nine, no transfers. Every day this week starts there.`,
    ],
  },
  {
    date: 'Wed 18', dow: 'Wednesday', base: 'kyoto', where: 'Takao', title: 'The furthest colour, and it got closer',
    fixed: [
      { t: '09:00', what: 'Jingo-ji opens', kind: 'opens', id: 'jingoji', note: 'To 16:00. Kozan-ji runs 8:30–17:00.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Takao', min: 43, mode: 'bus', serves: 'jingoji', note: 'Tozai six minutes west to Uzumasa Tenjingawa, then City Bus 8 — which skips the Kyoto Station scrum and saves thirty to forty minutes each way against the old routing.' },
    ],
    meals: {
      b: { status: 'included', where: 'The hotel' },
      l: { status: 'open', where: 'Takao' },
      d: { status: 'open', where: 'Nakagyo', note: 'Nijojo Furuta, one star and charcoal-grilled, is seven minutes on foot. Reservation only, on TableCheck.' },
    },
    notes: [
      `<strong>Buy the ¥1,100 Subway &amp; Bus 1-Day Pass.</strong> It covers the subway leg and the whole Takao bus section, which was folded into the flat-fare zone in 2021. The bus-only pass was discontinued in 2024.`,
      `<strong>Kyoto’s own tourism pages call Takao the earliest colour in the city</strong>, which is the entire argument for this week. Jingo-ji is about 400 steps up from the river, and the clay-disc throw off its terrace is the thing everyone remembers.`,
    ],
  },
  {
    date: 'Thu 19', dow: 'Thursday', base: 'kyoto', where: 'Ohara and Yase', title: 'North, and then three stars',
    fixed: [
      { t: '08:30', what: 'Sanzen-in opens', kind: 'opens', id: 'sanzenin', note: 'To 17:00 in November, last entry 16:30.' },
      { t: '16:30', what: 'Rurikoin reception closes', kind: 'closes', note: 'Reservation-only through the autumn season, ¥2,000.' },
      { t: '18:00', what: 'Kikunoi Honten', kind: 'booked', id: 'kikunoi', confirm: true, note: 'Seatings run 17:00–19:30 — whatever time you are actually given.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Sanzen-in, Ohara', min: 52, mode: 'bus', serves: 'sanzenin', note: 'Karasuma line to Kokusaikaikan, then Kyoto bus 19.' },
      { from: 'Ohara', to: 'Rurikoin', min: 45, mode: 'rail' },
      { from: 'Rurikoin', to: 'Kikunoi Honten', min: 45, mode: 'car', serves: 'kikunoi', buffer: 20, note: 'Taxi. It is right across the city and you do not want to be counting subway stops in a jacket.' },
    ],
    meals: {
      b: { status: 'included', where: 'The hotel' },
      l: { status: 'open', where: 'Ohara' },
      d: { status: 'booked', where: 'Kikunoi Honten', note: 'Three stars. No online form exists — phone, email, or let the concierge do it, and the gluten-free brief goes in at booking.' },
    },
    notes: [
      `<strong>A nice accident.</strong> The 1703 gate at the front of your hotel was built for the aristocratic court attached to Sanzen-in and moved to Kyoto in 1935. You have walked past it all week; today you see where it came from.`,
      `<strong>Book the private onsen for tonight</strong>, or for Saturday. A hundred square metres in the basement with a mist sauna and its own garden, ¥24,500 an hour, by phone, 48-hour cancellation. After a cold day in Ohara it is the correct decision.`,
    ],
  },
  {
    date: 'Fri 20', dow: 'Friday', base: 'kyoto', where: 'Arashiyama', title: 'Macaques, then kintsugi',
    fixed: [
      { t: '09:00', what: 'Iwatayama monkey park opens', kind: 'opens', id: 'monkeys', note: 'To 16:30, last entry 16:00 — plus a 20-minute climb from the gate.' },
      { t: '14:00', what: 'Heki kintsugi at Akagane Resort 1925', kind: 'booked', id: 'heki', confirm: true, note: '120 minutes, private. The real-gold finish is a paid upgrade decided at booking.' },
      { t: '20:30', what: 'Last entry, Eikandō light-up', kind: 'closes', note: '17:30 to a 21:00 close, ¥700.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Iwatayama', min: 42, mode: 'rail', serves: 'monkeys', note: 'Tozai one stop to Nijo, then the JR Sagano line to Saga-Arashiyama. Fifteen minutes better than it was from Gion.' },
      { from: 'Arashiyama', to: 'Akagane Resort 1925', min: 50, mode: 'car', serves: 'heki', buffer: 20, note: 'The one long crossing of the week, west side to Higashiyama. Take a taxi.' },
      { from: 'Akagane Resort 1925', to: 'Eikandō', min: 15, mode: 'car' },
    ],
    meals: {
      b: { status: 'included', where: 'The hotel' },
      l: { status: 'open', where: 'Arashiyama' },
      d: { status: 'open', where: 'Near Nanzen-ji, after the light-up' },
    },
    notes: [
      `<strong>Go to the monkeys at opening.</strong> They are the easiest wildlife photography on the Kansai side, and the bamboo grove is only worth it before about eight — free, ungated and open all night, so early is genuinely available.`,
      `<strong>The kintsugi and Kikunoi are on the same street.</strong> Akagane Resort 1925 and Kikunoi Honten are both on Shimogawara-dori, which from the old Gion base was one three-minute walk and is now two separate trips out. If today feels like too much crossing, moving the kintsugi to Thursday afternoon pairs it with the Kikunoi dinner and makes Friday a clean west-then-east arc.`,
      `<strong>Take the light-up rather than the daytime visit at Eikandō.</strong> They are separate tickets and the grounds clear between them; the maples will be part-turned, and illumination flatters colour that is not yet complete.`,
    ],
  },
  {
    date: 'Sat 21', dow: 'Saturday', base: 'kyoto', where: 'Kurama and Kibune', title: 'The last day, and by some way the riskiest',
    fixed: [
      { t: '10:00', what: 'Kyudo session', kind: 'booked', id: 'kyudo', confirm: true, note: 'The studio publishes neither location nor dates. Provisional until they answer.' },
      { t: '18:30', what: 'Kodaiji Jugyuan', kind: 'booked', id: 'jugyuan', confirm: true },
      { t: '21:30', what: 'Last entry, Kodai-ji illumination', kind: 'closes', note: 'Lit from 17:00, next door to dinner.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Kurama', min: 52, mode: 'rail', at: '11:30', note: 'To Demachiyanagi, then 30 minutes on the Eizan line through the maple tunnel, where the train dims its lights.' },
      { from: 'Kibune', to: 'Kodaiji Jugyuan', min: 60, mode: 'car', serves: 'jugyuan', buffer: 30, note: 'Book the hotel car. Do not plan to hail one.' },
    ],
    meals: {
      b: { status: 'included', where: 'The hotel' },
      l: { status: 'open', where: 'Kibune' },
      d: { status: 'booked', where: 'Kodaiji Jugyuan', note: 'The farewell dinner, next door to the illumination.' },
    },
    notes: [
      `<strong>Today is day one of a three-day national holiday.</strong> Labour Thanksgiving falls on Monday 23 November 2026, so Saturday to Monday is a full weekend with no substitute-day shift — and it lands on still-good northern colour.`,
      `<strong>The Eizan line is the specific risk.</strong> A two-car railway that has left passengers standing on platforms in ordinary autumn conditions, and which mounted what the Kyoto Shimbun called the biggest operation in its history for autumn 2025. <strong>Go at opening or do not go.</strong> And do not approach Kibune by car — a normal five-minute drive there has been reported taking an hour.`,
      `<strong>Book the car for the evening now.</strong> Higashiyama taxis are not hailable on a holiday Saturday at foliage peak, and you have a two-star dinner and a temple illumination to reach.`,
    ],
  },
  {
    date: 'Sun 22', dow: 'Sunday', base: null, where: '→ SFO', title: 'The unhurried departure',
    fixed: [
      { t: '11:30', what: 'Lunch at FORNI', kind: 'booked', id: 'forni', note: 'Downstairs, garden views, open Sundays with no fixed closing day.' },
      { t: '12:00', what: 'Check out', kind: 'hotel', note: 'Bags to the bell desk before lunch.' },
      { t: '18:35', what: 'UA KIX→SFO', kind: 'depart', id: 'ua', note: 'The winter-schedule time from 25 October. Verify when you ticket — the summer one is three hours earlier.' },
    ],
    moves: [
      { from: 'The hotel', to: 'Kyoto Station', min: 15, mode: 'car', at: '13:30', chain: true },
      { from: 'Kyoto', to: 'KIX', min: 80, mode: 'rail', serves: 'ua', buffer: 150, note: 'The Haruka. Reserve the seats — this is the middle day of a three-day weekend and the station will be heavy.' },
    ],
    meals: {
      b: { status: 'included', where: 'The hotel' },
      l: { status: 'booked', where: 'FORNI', at: '11:30', note: '¥5,900 to ¥12,900 prix fixe, service and tax included. An Italian kitchen is the most tractable gluten-free room in the building — grilled fish, roast meat, risotto, vegetables, nowhere near the pizza oven.' },
      d: { status: 'flight', where: 'On board' },
    },
    notes: [
      `<strong>The last meal has no travel after it.</strong> That was the argument for Gion Loka under the old plan and it survives the move — eat in the building you are checking out of, walk to the bell desk, get in the car. Seated 11:30, finished by 13:00, out at 13:30.`,
      `<strong>The morning is deliberately empty.</strong> Nijo Castle is five minutes away and Nishiki Market is a twenty-minute walk. Anything the week rained off goes here.`,
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
    ['SPACIA X reservations', 'Open at 09:00 JST exactly one month ahead — 11 October. Four Compartments and one Cockpit Suite per train.', 'Wed 11'],
    ['Ritz-Carlton onsen', '05:30–23:00, closed 12:00–14:00 for cleaning. Free and unlimited — but the Lake View Suite bath is ordinary hot water, not onsen. There is no bookable private bath except as a spa add-on.', 'Wed 11 – Sun 15'],
    ['The hotel Japanese Restaurant', 'Reported closed Wednesdays and Thursdays — your first two nights. The property lists no closing day. Confirm; if it holds, kaiseki and the sushi counter are Fri/Sat only.', 'Wed 11, Thu 12'],
    ['Rinnoji set-ticket counter', 'Closes 13:30 in November, though the temple stays open to 16:00. Buy the ¥1,000 three-facility set in the morning.', 'Thu 12'],
    ['Nikko sunset', '16:36, civil twilight ends 17:02. Every paid site shuts at 16:00 and Shinkyo at 15:30 — the golden hour belongs to Kanmangafuchi, which is free and never closes.', 'Wed 11 – Sun 15'],
    ['Akechidaira Ropeway', 'Closed since 15 January 2026 for rebuilding, reopening planned September 2027. The classic Kegon panorama is unreachable.', 'Wed 11 – Sun 15'],
    ['Seasonal Chuzenji buses', 'The Hangetsuyama and Utagahama services stop after 12 November. From the 13th the Embassy Villas are the boat, a taxi or a 35-minute walk.', 'Fri 13, Sat 14'],
    ['Low-emission bus', 'Akanuma departures 8:45, 10:05, 11:25, 12:45, 14:35, 15:55. ¥500. The Senjugahama corridor is closed to private cars, so this is the only way in.', 'Fri 13'],
    ['Bears', 'Hibernation starts in December, not November. The Botanical Garden closed twice in August 2026 after sightings inside the grounds. Carry a bell on Senjogahara and at Kanmangafuchi.', 'Wed 11 – Sun 15'],
    ['Asaba check-in', '14:30–18:00, check-out 11:30. No shuttle — a taxi from Shuzenji station is 7 minutes. Full prepayment is required at reservation.', 'Sun 15'],
    ['The rental car', 'Toyota at Mishima, 08:00–20:00, two minutes from the shinkansen exit. Needs the 1949 Geneva IDP plus licence and passport — all three, or no car. The branch calendar shows scattered closures.', 'Sun 15 – Tue 17'],
    ['Vieni KANDA', 'The only dedicated gluten-free kitchen in Shuzenji, and closed Mondays and Tuesdays — both full days. Sunday lunch is the only window.', 'Sun 15 – Tue 17'],
    ['Niji-no-Sato', 'Nominally closed Tuesdays, except in peak season, and the light-up period counts as peak season. Nobody will confirm it in writing. Phone 0558-72-7111.', 'Mon 16, Tue 17'],
    ['Hikari from Mishima', 'Westbound at :46, six times a day — 09:46, 11:46, 13:46, 15:46, 17:46, 19:46. Direct to Kyoto in 1h51. Kodama plus a Nagoya change is 2h35 and not worth it.', 'Tue 17'],
    ['Kikunoi Honten', 'Closed the 1st and 3rd Tuesday — 3 and 17 November 2026. No online reservation form exists; phone, email, or use the hotel concierge.', 'Thu 19'],
    ['Rurikoin', 'The 2026 season runs 1 October – 13 December, reservation required through the peak window.', 'Thu 19'],
    ['Mitsui private onsen', '07:30–23:00, last entry 22:00. ¥24,500 for 60 min, guests only, by phone on +81 75 468 3125. 100% cancellation inside 48 hours.', 'Thu 19, Sat 21'],
    ['Iwatayama monkey park', '9:00–16:30, last entry 16:00, plus a 20-minute climb from the gate.', 'Fri 20'],
    ['Eikandō', 'Day and light-up are separate tickets and the grounds clear between them. Light-up 17:30–21:00, last entry 20:30.', 'Fri 20'],
    ['The holiday weekend', 'Labour Thanksgiving is Monday 23 November 2026, so Sat 21 – Mon 23 is a full three-day weekend with no substitute-day shift. Saturday is the busiest day of the trip.', 'Sat 21, Sun 22'],
    ['The Eizan line', 'Two cars, and it has left passengers on platforms in ordinary autumn conditions. Go at opening or not at all, and never approach Kibune by car.', 'Sat 21'],
    ['Kodai-ji illumination', 'Lit from 17:00, last entry 21:30. Next door to Jugyuan. Book the hotel car — Higashiyama taxis are not hailable that night.', 'Sat 21'],
    ['Kyudo studio', 'Location and dates unpublished. Email to confirm before fixing the Saturday.', 'Sat 21'],
    ['FORNI', 'Lunch 11:30–14:30 last order, open Sundays, no fixed closing day. The last lunch — book it, gluten-free declared at reservation.', 'Sun 22'],
  ],
};

// Findings that change a booking rather than just a clock time. These are the reason the

// ── legs ─────────────────────────────────────────────────────────────
// The days group into six legs — a run of nights at one base, bracketed by the two travel days
// that have no base at all. Derived from `base` rather than typed, so a day that moves to a
// different hotel regroups on its own. This is what gives the page its outline.
const LEG_LABEL = {
  tokyo: 'Tokyo', nikko: 'Okunikko', shuzenji: 'Izu', kyoto: 'Kyoto',
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
