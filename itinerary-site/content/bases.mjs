// THE FOUR BASES — where you sleep, and everything reachable from each one.
//
// Feeds bases.html and tools/basemap.mjs. The `min` values here are the same numbers the day
// sheets subtract from to derive their leave-by times, so a journey cannot be one duration on
// the map and another on the schedule.
//
// Conventions
//   name      the PLACE, not the hotel — it is what the nav, the outline and the day sheets say
//   hotel     the property you sleep in there
//   at        [lon, lat] — same order as content/geo.mjs, which some entries import directly
//   min       door-to-door minutes from that base's hotel, including the walk at both ends
//   mode      walk | metro | rail | bus | boat | ropeway | car | air
//   confirm   true = not verified from an operator page; treat as an estimate and check
//   entity    slug in content/entities.mjs — turns the stop's name into a link to its card on the
//             itinerary, which is the page that says what the thing actually is and shows it
//   days      the dates in content/days.mjs this stop is used on — links through to those sheets
//
// Every stop should carry at least one of those two. A name with no way through to a photograph
// or a day is a name you have to already know, and this page is read by someone who does not.
//
// Sources for the numbers are in tools/RUNBOOK_SOURCES.md.

import { places } from './geo.mjs';

// ── the four bases ───────────────────────────────────────────────────
// `pois` are everything the itinerary actually visits from that base, plus the transfer points
// (airport, station) that bracket the stay. Ordered near-to-far, which is also how they read.
// The stations and airports have no `entity` because the itinerary has nothing to say about them;
// they carry `days` instead, which is the answer to "when do I ever touch this".
export const bases = [
  {
    id: 'tokyo',
    entity: 'aman-tokyo',
    name: 'Tokyo',
    hotel: 'Aman Tokyo',
    where: 'Otemachi — floors 33 to 38 of Otemachi Tower',
    dates: 'Sat 7 – Tue 10 November · 4 nights',
    at: [139.7648, 35.6866],
    checkIn: '15:00',
    checkOut: '12:00',
    checkConfirm: true,
    lede: `Otemachi is the quietest possible base for this particular week, because three of the four days leave town. It sits on top of five subway lines and is an eight-minute walk from Tokyo Station, which is where both the Ome run and the Karuizawa run start. The cost of that is distance from the nightlife districts — Nishi-Azabu is a taxi, not a walk.`,
    pois: [
      { name: 'Imperial Palace East Gardens', at: [139.7570, 35.6852], min: 10, mode: 'walk', via: 'Straight out of the tower, through Otemon gate', hours: '9:00–16:00 · closed Mondays and Fridays', why: 'The answer to the dawn-arrival problem on Saturday — free, ten minutes away, and open before the hotel room is.', days: ['Sat 7'] },
      { name: 'Tokyo Station', at: [139.7671, 35.6812], min: 8, mode: 'walk', via: 'Underground concourse the whole way if it rains', why: 'Both day trips start here.', days: ['Mon 9', 'Tue 10'] },
      { name: 'Jingu Gaien ginkgo avenue', entity: 'omotesando-ginkgo', at: [139.7175, 35.6752], min: 20, mode: 'metro', via: 'Hanzomon line to Aoyama-itchome, then 5 min on foot', hours: 'Open street, always', why: 'Green-to-yellow on these dates. They gold up around 20 November.', days: ['Sun 8'] },
      { name: 'Akiba Fukurou (owl café)', entity: 'akiba-fukurou', at: [139.7745, 35.6990], min: 20, mode: 'metro', via: 'Marunouchi line to Awajicho, 5 min on foot', hours: 'Roughly 12:00–19:00 · five slots a day', book: 'Reservation only, via select-type.com. Card charged at booking. Arrive 10 minutes early — the door is locked during the session.', days: ['Sun 8'] },
      { name: 'Meiji Jingu', entity: 'meiji-jingu', at: [139.6993, 35.6764], min: 25, mode: 'metro', via: 'Chiyoda line direct to Meiji-jingumae, then 5 min on foot', hours: 'Sunrise to sunset — about 6:20–16:20 in November', days: ['Sun 8'] },
      { name: "L'Effervescence", entity: 'leffervescence', at: [139.7205, 35.6598], min: 20, mode: 'car', via: 'Taxi to Nishi-Azabu. Thirty-plus minutes on the subway with a change, so take the cab.', hours: 'Closed Sundays and Mondays · dinner only Tue and Wed', book: 'Pocket Concierge, August–September. The personalised gluten-free menu is printed for the guest, so declare at booking.', confirm: true, days: ['Tue 10'] },
      { name: 'Hirata sword forge', entity: 'hirata-sword', at: [139.2380, 35.7880], min: 100, mode: 'rail', via: 'JR Chuo Rapid then the Ome line — about 1h25 from Tokyo Station, plus the local hop at the far end', hours: '150-minute session', book: 'Wabunka. The smiths’ calendar is irregular — ask early.', why: 'The furthest thing you do from a Tokyo base, and it is still a day trip.', days: ['Tue 10'] },
      { name: 'Picchio, Karuizawa', entity: 'picchio-musasabi', at: [138.5920, 36.3555], min: 130, mode: 'rail', via: 'Hokuriku shinkansen to Karuizawa (1h10), then the free Hoshinoya shuttle from the south exit (25 min) to Tombo-no-yu, 1 min on foot', hours: 'Tour runs 16:00–17:30 in November · check in 15 minutes early at the Visitor Center', book: 'Season ends 30 November 2026 — November slots are the last of the year.', days: ['Mon 9'] },
      { name: 'Haneda (HND)', at: [139.7798, 35.5494], min: 30, mode: 'car', via: 'Private transfer — about 25 minutes at dawn, 40 in traffic', why: 'Arrival only. You leave the country from Osaka.', days: ['Sat 7'] },
    ],
  },

  {
    id: 'hakone',
    entity: 'gora-kadan',
    name: 'Hakone',
    hotel: 'Gora Kadan',
    where: 'Gora — a former imperial villa estate, above the Tozan railway terminus',
    dates: 'Wed 11 – Fri 13 November · 3 nights',
    at: [139.0480, 35.2470],
    checkIn: '15:00',
    checkOut: '11:00',
    lede: `The most walkable base of the four and the one people misjudge. Two of the three things on the art day — the moss garden and the Open-Air Museum — are within ten minutes of the front door, and so is the teppanyaki dinner. Everything on the loop day is a single sequence of cablecar, ropeway and boat that starts one stop up the hill. The Freepass covers all of it.`,
    pois: [
      { name: 'Itoh Dining by Nobu', entity: 'itoh-dining-nobu', at: [139.0455, 35.2455], min: 6, mode: 'walk', hours: 'Teppanyaki counter', why: 'Dinner on the loop day. Salt-grilled at the counter is the most transparent celiac format of the trip.', days: ['Thu 12'] },
      { name: 'Hakone Museum of Art (moss garden)', at: [139.0455, 35.2497], min: 8, mode: 'walk', via: 'Or one stop on the cablecar to Koen-kami', hours: '9:30–16:30 Apr–Nov · last entry 16:00 · ¥1,430', warn: 'Closed Thursdays. That is why the art day is Friday and the loop day is Thursday — if those two ever swap, the moss garden is shut.', days: ['Fri 13'] },
      { name: 'Hakone Open-Air Museum', entity: 'hakone-open-air-museum', at: [139.0399, 35.2444], min: 10, mode: 'rail', via: 'Tozan railway one stop to Chokoku-no-Mori, 2 min on foot', hours: '9:00–17:00 daily · last entry 16:30', days: ['Fri 13'] },
      { name: 'Owakudani', at: [139.0195, 35.2445], min: 25, mode: 'ropeway', via: 'Cablecar Gora→Sounzan 9 min, ropeway Sounzan→Owakudani 8 min', warn: 'Closes without warning on volcanic activity. Check the status page at breakfast — this is the one sight on the loop that can vanish.', days: ['Thu 12'] },
      { name: 'Pola Museum of Art', at: [139.0113, 35.2618], min: 30, mode: 'bus', via: 'Bus from Gora towards Sengokuhara', hours: '9:00–17:00 daily · last entry 16:30', days: ['Fri 13'] },
      { name: 'Togendai (Lake Ashi north)', entity: 'lake-ashi', at: [139.0106, 35.2237], min: 45, mode: 'ropeway', via: 'Ropeway on from Owakudani, 16 min', days: ['Thu 12'] },
      { name: 'Hakone-Yumoto', at: [139.1060, 35.2325], min: 40, mode: 'rail', via: 'Tozan railway down the switchbacks', why: 'The gateway station — Romancecar territory.', days: ['Wed 11', 'Sat 14'] },
      { name: 'Moto-Hakone & Hakone Shrine', entity: 'lake-ashi', at: [139.0263, 35.1963], min: 90, mode: 'boat', via: 'Boat across Lake Ashi from Togendai, 40 min, then 10 min on foot to the torii', why: 'The far end of the loop. You come back by bus, not by retracing the ropeway.', days: ['Thu 12'] },
      { name: 'Odawara Station', at: [139.1553, 35.2564], min: 60, mode: 'rail', via: 'Tozan to Hakone-Yumoto, then Odakyu — about an hour all in', why: 'Where the Alps leg begins on the 14th.', days: ['Sat 14'] },
    ],
  },

  {
    id: 'tobira',
    entity: 'tobira-myojinkan',
    name: 'Tobira Onsen',
    hotel: 'Tobira Onsen Myojinkan',
    where: 'Iriyamabe, up the valley east of Matsumoto — 1,050m',
    dates: 'Sat 14 – Mon 16 November · 3 nights',
    at: [places.tobira.lon, places.tobira.lat],
    checkIn: '15:00',
    checkOut: '11:00',
    checkConfirm: true,
    lede: `The one base where the hotel is not near anything, and — since Monday resolved to staying put — that is now the point of it rather than its cost. Tobira is a <strong>one-inn onsen</strong>: no village, no shops, no second restaurant. Everything else is reached through Matsumoto, thirty to forty-five minutes back down the valley, on a shuttle that runs twice a day at fixed times. Plan around the shuttle or plan around a taxi — there is no third option. The three entries below with hollow dots are the entire list of what you can reach on your own feet.`,
    pois: [
      { name: 'The Usukawa river path', at: [places.tobira.lon + 0.004, places.tobira.lat - 0.001], min: 2, mode: 'walk', via: "Out of the inn and down to the water — the inn's own path, with benches and tables along it", hours: 'Daylight; bare branches and loud water in mid-November', why: 'The walk on the stay-put Monday. There is no other one at this altitude in November.', days: ['Mon 16'] },
      { name: 'Tobira Onsen Hinoki-no-yu', at: [places.tobira.lon + 0.001, places.tobira.lat + 0.001], min: 5, mode: 'walk', via: 'A few hundred metres up the road on Route 67', hours: '10:00–19:00, last entry 18:30 · ¥300', warn: 'The municipal day-bath — rustic, and it does not supply soap. Worth knowing it exists rather than planning around it: it posts seasonal closures, so check before walking up. Myojinkan does not admit day visitors, so this is not a substitute for your own baths.', confirm: true, days: ['Mon 16'] },
      { name: 'Hachibuse-yama trailhead', at: [places.tobira.lon + 0.002, places.tobira.lat + 0.002], min: 5, mode: 'walk', via: 'About 300m up the road, past Hinoki-no-yu', hours: '5.5 km and about 5½ hours round trip to the 1,929m summit', warn: 'A mountain, not a stroll — and in mid-November at that altitude, a winter one. Listed because it is genuinely at the front door, not because this trip should do it.', days: ['Mon 16'] },
      { name: 'Matsumoto Station', at: [137.9670, 36.2320], min: 40, mode: 'bus', via: 'Free shuttle, 35–45 min, advance reservation, departing the inn on request; taxi is 30 min and about ¥7,000', warn: 'The shuttle runs from Matsumoto at 15:15 and 16:30 only. Everything about arrival day is downstream of those two times.', days: ['Sat 14', 'Sun 15', 'Tue 17'] },
      { name: 'Matsumoto Castle', entity: 'matsumoto', at: [137.9690, 36.2384], min: 50, mode: 'bus', via: 'Shuttle or taxi to the station, then 15 min on foot', hours: '8:30–17:00 · last entry 16:30', days: ['Sun 15'] },
      { name: 'Nakamachi storehouse street', entity: 'matsumoto', at: [137.9700, 36.2340], min: 48, mode: 'bus', via: 'Ten minutes on foot from the station', hours: 'Shops roughly 10:00–17:00', days: ['Sun 15'] },
      { name: 'Matsumoto City Museum of Art', entity: 'matsumoto', at: [137.9740, 36.2320], min: 47, mode: 'bus', via: 'Twelve minutes on foot from the station', hours: '9:00–17:00 · last entry 16:30', warn: 'Closed Mondays. The Kusama collection is the reason to go, and Monday the 16th is the Alps day — so it has to be the Sunday.', days: ['Sun 15'] },
      { name: 'Utsukushigahara plateau', at: [138.1330, 36.2100], min: 60, mode: 'car', via: 'About 17 km and an hour of switchbacks — a taxi or a hired car, not a bus', hours: 'Daylight only', warn: 'No longer the plan — Monday resolved to staying put — but it needs no booking, so it survives as a fair-weather impulse. The Venus Line and the Skyline close for winter around 20 November and snow can shut them earlier, so confirm the road the morning you go.', days: ['Mon 16'] },
      { name: 'Shinhotaka Ropeway', at: [places.shinhotaka.lon, places.shinhotaka.lat], min: 150, mode: 'bus', via: 'Down to Matsumoto, Alpico bus to Hirayu Onsen, then the Okuhida bus on — about two and a half hours each way', hours: '8:30–16:45 to late November · 2,150m at the top', warn: 'Five hours on buses before you have looked at anything. Considered and dropped for Monday the 16th: worth it only as a whole-day commitment, and the third night of three is the wrong one to spend that way.', days: ['Mon 16'] },
    ],
  },

  {
    id: 'kyoto',
    entity: 'sowaka',
    name: 'Kyoto',
    hotel: 'SOWAKA',
    where: 'Gion — Shimogawara-dori, below Kodai-ji',
    dates: 'Tue 17 – Sat 21 November · 5 nights',
    at: [135.7810, 35.0000],
    checkIn: '15:00',
    checkOut: '11:00',
    lede: `Four of the things on this week's list are within a five-minute walk of the front door — both marquee dinners, the kintsugi workshop and the Kodai-ji illumination. Everything else points north or west and runs 40 to 75 minutes each way, because the whole strategy of this Kyoto week is to leave the centre. Demachiyanagi is the hinge: Ohara, Rurikoin and Kurama all start there.`,
    pois: [
      { name: 'Kodai-ji', entity: 'kodaiji', at: [135.7813, 34.9998], min: 3, mode: 'walk', hours: 'Autumn light-up 17:00–22:00 · last entry 21:30 · ¥600', why: 'Three minutes uphill. The illumination runs late enough to take after dinner rather than before it.', days: ['Sat 21'] },
      { name: 'Kodaiji Jugyuan', entity: 'kodaiji-jugyuan', at: [135.7805, 35.0003], min: 3, mode: 'walk', book: 'Book late August–early September for Saturday 21 November.', why: 'The farewell dinner, literally next door to the illumination.', days: ['Sat 21'] },
      { name: 'Kikunoi Honten', entity: 'kikunoi-honten', at: [135.7800, 34.9985], min: 5, mode: 'walk', hours: 'Dinner 17:00, last order 19:30', book: 'Tableall or My Concierge, August–early September, declaring gluten-free in the reservation form itself.', warn: 'Closed the 1st and 3rd Tuesday of the month — in November 2026 that is the 3rd and the 17th. The 17th is your Kyoto arrival day, so this can never move earlier in the week.', days: ['Thu 19'] },
      { name: 'Heki kintsugi — Akagane Resort 1925', entity: 'heki-kintsugi', at: [135.7797, 34.9990], min: 5, mode: 'walk', hours: '120 minutes, private', book: 'Wabunka. The real-gold finish is a paid upgrade — decide at booking.', why: 'A copper magnate’s 1925 villa, five minutes down the same street. No travel time at all on the Arashiyama day.', days: ['Fri 20'] },
      { name: 'Gion (Hanamikoji)', entity: 'gion', at: [135.7752, 35.0037], min: 10, mode: 'walk', days: ['Tue 17'] },
      { name: 'Eikando Zenrin-ji', entity: 'eikando', at: [135.7947, 35.0142], min: 15, mode: 'car', via: 'Taxi; about 20 minutes by bus', hours: 'Day 9:00–17:00 (last entry 16:00) · light-up 17:30–21:00 (last entry 20:30)', warn: 'Day and night are separate tickets and the temple clears between them. Pick one — going twice in a day means queueing twice.', days: ['Fri 20'] },
      { name: 'Kyoto Station', at: [135.7585, 34.9858], min: 20, mode: 'car', why: 'The Takao bus leaves from here, and so does the Haruka on the last morning.', days: ['Tue 17', 'Wed 18', 'Sun 22'] },
      { name: 'Rurikoin', entity: 'rurikoin', at: [135.8010, 35.0715], min: 40, mode: 'rail', via: 'To Demachiyanagi, then Eizan line to Yase-Hieizanguchi, 5 min on foot', hours: '10:00–17:00 · reception closes 16:30 · ¥2,000', book: 'Reservation required through the autumn season and they turn away anyone without one. The window opens in early October — watch rurikoin.komyoji.com.', days: ['Thu 19'] },
      { name: 'Iwatayama monkey park, Arashiyama', entity: 'arashiyama-monkeys', at: [135.6773, 35.0122], min: 50, mode: 'rail', via: 'About 50 minutes to the gate — then a 20-minute climb on top', hours: '9:00–16:30 · last entry 16:00', why: 'Go at opening. The macaques are the easiest wildlife photography on the Kansai side.', days: ['Fri 20'] },
      { name: 'Kurama & Kibune', entity: 'kurama-kibune', at: [135.7630, 35.1230], min: 50, mode: 'rail', via: 'To Demachiyanagi, then 30 min on the Eizan line through the maple tunnel', hours: 'Kibune momiji-toro light-up ran 7–24 November in 2025, sunset to about 21:00', confirm: true, days: ['Sat 21'] },
      { name: 'Sanzen-in, Ohara', entity: 'sanzen-in-ohara', at: [135.8345, 35.1190], min: 60, mode: 'bus', via: 'To Demachiyanagi, then Kyoto bus 17 (about 33 min), then 10 min uphill on foot', hours: '8:30–17:00 in November · last entry 16:30', days: ['Thu 19'] },
      { name: 'Takao — Jingo-ji and Kozan-ji', entity: 'takao', at: [135.6725, 35.0570], min: 75, mode: 'bus', via: 'To Kyoto Station, then the JR Takao–Keihoku bus, about 50 min', hours: 'Jingo-ji 9:00–16:00 · Kozan-ji 8:30–17:00', warn: 'Jingo-ji is about 400 steps up from the river. Wear something you can climb in.', days: ['Wed 18'] },
      { name: 'Kansai (KIX)', at: [135.2441, 34.4347], min: 105, mode: 'rail', via: 'Taxi to Kyoto Station, then the Haruka limited express, about 80 min', why: 'Departure only.', days: ['Sun 22'] },
    ],
  },
];
