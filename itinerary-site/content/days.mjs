// Operating schedule reviewed November 2; rental and affected journeys updated November 8, 2026 Japan time. Open-time options live in day-options.mjs.
export const days = [
  {
    "date": "Fri 6",
    "dow": "Friday",
    "base": null,
    "where": "In the air",
    "title": "SFO → HND, overnight",
    "fixed": [
      {
        "t": "00:20",
        "what": "NH107 departs SFO",
        "note": "Ticketed, PNR E4HX5B. Boeing 777-300ER — the aircraft that carries The Room. 11h30 in the air."
      }
    ],
    "moves": [],
    "noMoves": "Eleven and a half hours of it.",
    "meals": {
      "b": {
        "status": "flight",
        "where": "On board"
      },
      "l": {
        "status": "flight",
        "where": "On board"
      },
      "d": {
        "status": "none",
        "where": "Before you go",
        "note": "A 00:20 departure means going to SFO Thursday evening. Eat before the airport."
      }
    },
    "notes": [
      "<strong>Ticketed NH107 departs 00:20 Friday November 6 and lands 04:50 Saturday.</strong> ANA’s October 31 email reconfirms it. Seats 9D and 10C; one Japanese pre-order meal and one gluten-intolerant meal recorded."
    ],
    "overview": "<strong>NH107, 00:20 SFO → 04:50 Saturday at Haneda.</strong> Business class ticketed. Go to the airport Thursday night."
  },
  {
    "date": "Sat 7",
    "dow": "Saturday",
    "base": "tokyo",
    "where": "Tokyo",
    "title": "Land at dawn",
    "fixed": [
      {
        "t": "04:50",
        "what": "NH107 lands at Haneda",
        "kind": "arrive"
      },
      {
        "t": "15:00",
        "what": "Room available at Aman Tokyo",
        "kind": "hotel",
        "note": "Early check-in requested, not guaranteed. Hotel confirms spa facilities from 06:30 and breakfast from 07:00 at an additional charge."
      }
    ],
    "moves": [
      {
        "from": "Haneda",
        "to": "Aman Tokyo",
        "min": 25,
        "mode": "car",
        "at": "06:00",
        "note": "Private transfer. Empty roads at that hour — this is the fastest this journey ever is."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "The hotel",
        "at": "07:00",
        "note": "You will be in the building nine hours before the room is. Breakfast, then the spa."
      },
      "l": {
        "status": "open",
        "where": "Nearby"
      },
      "d": {
        "status": "open",
        "where": "Arva or in-room dining",
        "note": "No dinner booking found. Keep arrival day flexible; reserve Arva if chosen."
      }
    },
    "notes": [
      "<strong>10:00 spa appointment is only an offer.</strong> Aman proposed 90-minute hot stone and Grounding Ritual treatments; the requested Nourishing Ritual is full that morning. No acceptance found.",
      "<strong>Room readiness is uncertain.</strong> Rest, breakfast and a short nearby walk are options while waiting; do not fill arrival day with fixed commitments."
    ],
    "overview": "<strong>Aman arrival and recovery.</strong> Four-night stay confirmed; early room access requested but not guaranteed. Spa facilities from 06:30 and breakfast from 07:00, extra charge. A 10:00 massage alternative is offered, not booked."
  },
  {
    "date": "Sun 8",
    "dow": "Sunday",
    "base": "tokyo",
    "where": "Tokyo",
    "title": "The light day",
    "fixed": [
      {
        "t": "13:50",
        "what": "Arrive at Akiba Fukurou",
        "kind": "booked",
        "id": "owl",
        "note": "14:00 session for two; ¥7,600 paid. Doors stay closed after the session begins."
      },
      {
        "t": "18:30",
        "what": "est dinner",
        "kind": "booked",
        "id": "est",
        "note": "Two adults; 9-course menu ¥32,000 each. Dietary adaptation accepted; card guarantee completion to verify."
      }
    ],
    "moves": [
      {
        "from": "Aman Tokyo",
        "to": "Meiji Jingu",
        "min": 25,
        "mode": "metro",
        "at": "09:30",
        "note": "Optional morning outing."
      },
      {
        "from": "Meiji Jingu",
        "to": "Akiba Fukurou",
        "min": 30,
        "mode": "metro",
        "serves": "owl",
        "buffer": 15
      },
      {
        "from": "Aman Tokyo",
        "to": "est",
        "min": 15,
        "mode": "walk",
        "serves": "est",
        "buffer": 15,
        "note": "Allow extra time if returning from elsewhere."
      }
    ],
    "meals": {
      "b": {
        "status": "included",
        "where": "Aman Tokyo"
      },
      "l": {
        "status": "open",
        "where": "Omotesando or Aoyama"
      },
      "d": {
        "status": "booked",
        "where": "est",
        "at": "18:30",
        "note": "¥64,000 for two; verify card guarantee. Full-menu adaptation accepted."
      }
    },
    "notes": [
      "<strong>Two real reservations anchor today.</strong> Keep the paid 14:00 owls and 18:30 est. The proposed move of est to November 9 was never confirmed.",
      "<strong>No Karuizawa trip today.</strong> Picchio and return travel conflict with the confirmed dinner."
    ],
    "overview": "<strong>Akiba Fukurou 14:00</strong> for two, paid; arrive 13:50. <strong>est 18:30</strong> confirmed with dietary adaptation; verify card guarantee. Meiji Jingu or a local walk in the morning."
  },
  {
    "date": "Mon 9",
    "dow": "Monday",
    "base": "tokyo",
    "where": "Tokyo",
    "title": "Archery confirmed; afternoon open",
    "fixed": [
      {
        "t": "09:30",
        "what": "Kyudo session with Yosui",
        "kind": "booked",
        "id": "kyudo",
        "note": "Two participants; ¥40,000 paid via Stripe per invoice. Actual dojo address, arrival instructions and finish time still to verify."
      }
    ],
    "moves": [],
    "meals": {
      "b": {
        "status": "included",
        "where": "Aman Tokyo"
      },
      "l": {
        "status": "open",
        "where": "Tokyo, after archery"
      },
      "d": {
        "status": "open",
        "where": "Tokyo",
        "note": "If choosing Picchio, keep dinner late and flexible; no restaurant booked."
      }
    },
    "notes": [
      "<strong>Archery is November 9 in Tokyo, not November 21 in Kyoto.</strong> The 09:30 start is confirmed.",
      "<strong>Picchio remains optional and unbooked.</strong> Published November 9 timing is 16:15–17:45. Check the archery finish and real dojo location before reserving the tour, trains and local transfers."
    ],
    "noMoves": "Obtain the dojo address before fixing the departure time. Picchio would need a separately booked afternoon journey.",
    "overview": "<strong>Kyudo Japan with Yosui, 09:30 — confirmed and paid (¥40,000 for two).</strong> Verify dojo address and finish time. Afternoon and dinner open; Picchio is an unbooked option only if the archery finish and transfers work."
  },
  {
    "date": "Tue 10",
    "dow": "Tuesday",
    "base": "tokyo",
    "where": "Tokyo",
    "title": "Open morning; NARISAWA at 17:30",
    "fixed": [
      {
        "t": "17:30",
        "what": "NARISAWA dinner",
        "kind": "booked",
        "id": "narisawa",
        "note": "Confirmed two-person table, Chef’s Tasting Course; 20:00 exit. Dietary note submitted; acceptance to obtain."
      },
      {
        "t": "20:00",
        "what": "NARISAWA dining window ends",
        "kind": "ends"
      }
    ],
    "moves": [
      {
        "from": "Aman Tokyo",
        "to": "NARISAWA",
        "min": 30,
        "mode": "car",
        "serves": "narisawa",
        "buffer": 30,
        "note": "Planning allowance; adjust for actual traffic and return to the hotel first to change."
      }
    ],
    "meals": {
      "b": {
        "status": "included",
        "where": "Aman Tokyo"
      },
      "l": {
        "status": "open",
        "where": "Tokyo",
        "note": "Keep lunch light before the tasting menu."
      },
      "d": {
        "status": "booked",
        "where": "NARISAWA",
        "at": "17:30",
        "note": "Confirmed. Full dietary acceptance remains to obtain."
      }
    },
    "notes": [
      "<strong>Hirata was declined November 2.</strong> Remove the Ome journey and authorization from committed plans.",
      "<strong>Earlier Akihira inquiry remains a backup.</strong> No withdrawal is evidenced; Hayamitsu on November 20 is now the scheduled priority. Do not accept a duplicate forge booking without coordinating."
    ],
    "overview": "<strong>NARISAWA 17:30–20:00 — confirmed for two.</strong> Dietary details submitted; kitchen acceptance still to obtain. Morning open. The earlier Akihira inquiry remains a backup; the scheduled sword-making priority is now Hayamitsu on November 20, confirmed."
  },
  {
    "date": "Wed 11",
    "dow": "Wednesday",
    "base": "nikko",
    "where": "→ Okunikko",
    "title": "Collect the Toyota, then up to the lake",
    "fixed": [
      {
        "t": "10:30",
        "what": "Toyota rental pickup · Tokyo Sta. Nihonbashi Ext. Shop",
        "kind": "booked",
        "id": "toyota",
        "note": "Confirmed reservation 99950312100; Lexus RX Hybrid LXC2. Trust Tower N Wing B2 parking lot, 1-8-1 Marunouchi; 03-5220-2220. Bring licence, IDP and passport. Allow handover time before driving."
      },
      {
        "t": "12:00",
        "what": "Aman checkout deadline · leave before rental pickup",
        "kind": "hotel",
        "note": "Settle the bill and collect all bags before heading to Toyota for 10:30; this is the checkout deadline, not the planned departure."
      },
      {
        "t": "15:00",
        "what": "Room available at The Ritz-Carlton Nikko",
        "kind": "hotel",
        "note": "Target arrival around check-in; actual driving time depends on traffic, breaks and mountain-road conditions."
      }
    ],
    "moves": [
      {
        "from": "Aman Tokyo",
        "to": "Toyota · Tokyo Sta. Nihonbashi Ext. Shop",
        "min": 15,
        "mode": "car",
        "serves": "toyota",
        "buffer": 20,
        "note": "Short taxi with luggage; allow time to find the Trust Tower N Wing B2 counter. Travel time is a planning estimate."
      },
      {
        "from": "Toyota · Tokyo Station",
        "to": "The Ritz-Carlton Nikko",
        "min": 240,
        "mode": "car",
        "note": "Confirmed rental, self-drive. Rough 3–4 hour road allowance, with pickup, lunch and traffic time additional. Aim for 15:00 check-in; no SPACIA X or station transfer."
      }
    ],
    "meals": {
      "b": {
        "status": "included",
        "where": "Aman Tokyo"
      },
      "l": {
        "status": "open",
        "where": "Before departure or an expressway stop",
        "note": "Arrange suitable food with Aman; there is no train café on the new route."
      },
      "d": {
        "status": "open",
        "where": "Lakehouse",
        "note": "November 11 around 17:30 proposed; no booking or dietary acceptance established."
      }
    },
    "notes": [
      "<strong>Two things are five minutes away on foot and both are free.</strong> Kegon Falls, ninety-seven metres, with an elevator down to the plunge pool at ¥600; and <strong>Futarasan Chugushi</strong>, the mid-mountain shrine founded in 784 — it is 2484 Chugushi to the hotel’s 2482.",
      "<strong>Mount Nantai’s climbing season ends today</strong>, 25 April to 11 November. The gate is locked from tomorrow. Ask whether the closing ceremony happens at Chugushi — that would be a genuine ritual two hundred metres from the room.",
      "<strong>You gain 1,269 metres.</strong> Tokyo will be around 17°C; the ten-day normal here is a high of 8.4°C and a low of 0.1°C.",
      "<strong>Stay amendment complete.</strong> September 1 hotel reply confirms November 11–14, ¥1,263,127 inclusive.",
      "<strong>Hotel activities and hiking advice requested October 30.</strong> Await the current programme and any guide or equipment arrangements.",
      "<strong>Rental confirmed.</strong> Winter tires, compensation and NOC exemption are selected; 4WD is not required. Check current Irohazaka conditions with Ritz and confirm parking. ETC card supply is subject to shop availability; tolls are additional."
    ],
    "overview": "<strong>Toyota pickup 10:30 near Tokyo Station, then drive to Ritz-Carlton Nikko.</strong> Lexus RX Hybrid confirmed through November 17 in Kyoto. Target 15:00 hotel check-in; allow pickup time and traffic. All three Nikko dinners still to arrange."
  },
  {
    "date": "Thu 12",
    "dow": "Thursday",
    "base": "nikko",
    "where": "Nikko town",
    "title": "Down the mountain, because that is where the colour is",
    "fixed": [
      {
        "t": "08:00",
        "what": "Rinnoji opens",
        "kind": "opens",
        "id": "rinnoji",
        "note": "The only World Heritage site in Nikko you can enter in raking morning light — everything else opens at 09:00 or later."
      },
      {
        "t": "09:00",
        "what": "Toshogu opens",
        "kind": "opens",
        "note": "Nine, not the eight the older guidebooks give."
      },
      {
        "t": "13:30",
        "what": "Rinnoji’s set-ticket counter closes",
        "kind": "closes",
        "note": "November hours. Buy the ¥1,000 three-facility set in the morning or pay for each hall separately."
      },
      {
        "t": "15:30",
        "what": "Last entry, Toshogu and Rinnoji",
        "kind": "closes"
      },
      {
        "t": "16:36",
        "what": "Sunset",
        "kind": "closes",
        "note": "Civil twilight ends 17:02."
      }
    ],
    "moves": [
      {
        "from": "The hotel",
        "to": "Rinnoji",
        "min": 40,
        "mode": "car",
        "serves": "rinnoji",
        "buffer": 20,
        "note": "Use the confirmed rental. Allow for parking and walking from the car; ask Ritz about current mountain-road conditions. The 40-minute drive remains an estimate."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "The hotel",
        "at": "06:45",
        "note": "¥7,800 a head, Japanese or Western set rather than a buffet, and not included in the rate."
      },
      "l": {
        "status": "open",
        "where": "Nikko Kanaya Hotel, Main Dining Room",
        "at": "11:30",
        "note": "Classical French in the 1893 dining room of the oldest surviving resort hotel in Japan. Last order 14:30, reserve on TableCheck. It drops exactly into the dead hours between the morning light and the afternoon cutoffs.",
        "confirm": true
      },
      "d": {
        "status": "open",
        "where": "Ritz-Carlton Nikko",
        "note": "Teppanyaki proposed, not booked. Confirm this counter is serving and can adapt the menu."
      }
    },
    "notes": [
      "<strong>The day is shaped by one arithmetic problem: golden hour is 15:45 to 16:36, and everything you paid for is shut by then.</strong> Shinkyo closes at 15:30, the shrines at 16:00. So the last ninety minutes belong to the two things that are free and never close — <strong>Kanmangafuchi</strong>, seventy Jizo above a lava gorge, and <strong>Shinkyo</strong>, photographed from outside rather than crossed for ¥300. That is where the pictures happen.",
      "<strong>Rinnoji’s Shoyoen is the best foliage of the whole trip</strong>, and it peaks in the first half of November. Also running while you are there: the first-ever public unveiling of a hidden Bishamonten icon, April 2026 through March 2027.",
      "<strong>Taiyuin is the one people underrate.</strong> Iemitsu’s mausoleum takes about a fifth of Toshogu’s footfall, and black lacquer under deep cedar suits flat November light in a way that Toshogu’s gold leaf does not. It is inside the ¥1,000 set.",
      "<strong>Route conditions:</strong> ask Ritz for current trail and wildlife guidance before deciding on gorge or forest walks."
    ],
    "overview": "<strong>Lower Nikko sightseeing by rental car, flexible:</strong> Rinnoji, Toshogu, the bridge and Kanmangafuchi. Arrange lunch and check parking and road conditions; teppanyaki dinner remains a request."
  },
  {
    "date": "Fri 13",
    "dow": "Friday",
    "base": "nikko",
    "where": "Okunikko",
    "title": "The last day up here",
    "fixed": [
      {
        "t": "08:45",
        "what": "Low-emission bus, Akanuma depot",
        "kind": "depart",
        "id": "lowbus",
        "note": "Earlier sample timetable, not reserved. Ritz must verify seasonal service and the actual return before this outing is selected.",
        "confirm": true
      },
      {
        "t": "16:36",
        "what": "Sunset",
        "kind": "closes"
      }
    ],
    "moves": [
      {
        "from": "The hotel",
        "to": "Akanuma depot",
        "min": 16,
        "mode": "car",
        "serves": "lowbus",
        "buffer": 15,
        "note": "Use the rental to reach Akanuma; leave it in the permitted parking area. The Senjugahama corridor is closed to private cars, and seasonal shuttle operation must still be verified."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "The hotel"
      },
      "l": {
        "status": "open",
        "where": "Yumoto, or carried"
      },
      "d": {
        "status": "open",
        "where": "Ritz-Carlton Nikko",
        "note": "Sushi was proposed, not booked. Ask about cooked alternatives and the full ingredient restriction before selecting it."
      }
    },
    "notes": [
      "<strong>Cutting to three nights makes this the one full Okunikko day, so it has to choose.</strong> Either the <strong>¥500 low-emission bus</strong> — the Senjugahama corridor is closed to private cars, the operator pitches it as a wildlife platform because animals flee hikers but tolerate a vehicle, and it reaches the <em>Lady of Odashiro</em>, a lone white birch that is a Japanese photography pilgrimage. Or the <strong>lake by boat</strong>: the ¥2,200 unlimited pass calls at the Embassy Villas pier, where the British villa was Ernest Satow's 1896 retreat and its tea room runs to a 14:30 last order.",
      "<strong>The luggage can stay with you.</strong> The same rental continues from Ritz to Asaba and Kyoto. Confirm that both guests’ bags fit; hotel-to-hotel forwarding is an optional convenience, not a prerequisite for five rail connections.",
      "<strong>Pack tonight.</strong> Plan an early start around 08:00 for tomorrow’s long drive; confirm the road estimate and Asaba arrival time."
    ],
    "overview": "<strong>Choose the lake and villas, a nature outing, or a shorter hotel day.</strong> The rental is available; private-car restrictions still apply to Senjugahama. Check seasonal services and route conditions with Ritz. Keep luggage for tomorrow’s drive; dinner unbooked."
  },
  {
    "date": "Sat 14",
    "dow": "Saturday",
    "base": "shuzenji",
    "where": "→ Shuzenji, Izu",
    "title": "Door to door from Nikko to Asaba",
    "fixed": [
      {
        "t": "14:30",
        "what": "Target arrival at Asaba",
        "kind": "hotel",
        "id": "asaba",
        "note": "Check-in starts at 14:30; target 14:30–15:00 after the drive. Tell Asaba your actual arrival estimate."
      },
      {
        "t": "18:00",
        "what": "Latest check-in at Asaba",
        "kind": "closes",
        "note": "Latest check-in; protect dinner and the drum performance by agreeing the evening schedule. Traffic can extend the drive."
      }
    ],
    "moves": [
      {
        "from": "The Ritz-Carlton Nikko",
        "to": "Asaba, Shuzenji",
        "min": 390,
        "mode": "car",
        "at": "08:00",
        "note": "Same confirmed Toyota, door to door. Rough 6–7 hour planning allowance including breaks; verify the route and traffic before leaving. No trains, Mishima pickup or second rental."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "The hotel",
        "at": "07:00"
      },
      "l": {
        "status": "open",
        "where": "En route · expressway stop or packed lunch",
        "note": "Ask Ritz for suitable food before departure; allow time to stop and eat."
      },
      "d": {
        "status": "included",
        "where": "Asaba",
        "note": "Omakase kaiseki, served in your room. The meal the gluten-free brief has to have landed for."
      }
    },
    "notes": [
      "<strong>One car replaces the five-connection rail proposal.</strong> Leave around 08:00, allow roughly 6–7 hours with stops and target 14:30–15:00. The rental is confirmed; the drive duration is an estimate.",
      "<strong>The Nikko stay ends today.</strong> September 1 amendment confirmed; Asaba November 14–17 is prepaid.",
      "<strong>Notify Asaba.</strong> Confirm road arrival, parking, dinner and November 14 drum-performance timing. Keep sightseeing off this transfer day."
    ],
    "overview": "<strong>Drive the booked Toyota from Nikko to Asaba.</strong> Allow roughly 6–7 hours including breaks; depart around 08:00 to target 14:30–15:00 check-in. Three-night stay prepaid with meals. Confirm arrival, parking, dinner and drum-performance timing."
  },
  {
    "date": "Sun 15",
    "dow": "Sunday",
    "base": "shuzenji",
    "where": "Izu",
    "title": "The car day",
    "fixed": [
      {
        "t": "16:00",
        "what": "Niji-no-Sato momiji light-up opens",
        "kind": "opens",
        "confirm": true,
        "note": "To 21:00, evening ticket ¥1,000, if 2026 matches 2025. Phone 0558-72-7111."
      },
      {
        "t": "20:00",
        "what": "Cut-paper projection on the bamboo path",
        "kind": "opens",
        "note": "Thrown onto the round bamboo bench by an artist born in the town. Free, three minutes away, lit to 23:00."
      }
    ],
    "moves": [
      {
        "from": "Asaba",
        "to": "Joren Falls or Darumayama",
        "min": 30,
        "mode": "car",
        "at": "09:00",
        "note": "Use the confirmed Toyota rental. Choose the wasabi run south or Fuji viewpoints to the west according to weather; parking, tickets and any guided visits remain separate."
      }
    ],
    "meals": {
      "b": {
        "status": "included",
        "where": "Asaba"
      },
      "l": {
        "status": "open",
        "where": "Vieni KANDA or Asaba-arranged lunch",
        "note": "Sunday lunch candidate only. Ask Asaba to verify service, reserve and confirm dietary ingredients."
      },
      "d": {
        "status": "included",
        "where": "Asaba"
      }
    },
    "notes": [
      "<strong>Or Fuji:</strong> Darumayama at sunrise, Izu Panorama Park's ropeway to a 452m terrace with pools staging an inverted mountain, and the cape at Toi for sunset. <strong>November is the best Fuji month of the year</strong> — summer haze gone, winter air dry, fresh snow on the summit. Shuzenji itself has no Fuji view, which is the argument for the car.",
      "<strong>The evening is free and very good.</strong> Sixty lamps on the bamboo path from sunset to 23:00, five red bridges in a twenty-minute loop, and Tokko-no-yu lit mid-river. <em>You cannot bathe in Tokko-no-yu</em> — it lost its legal status as a bathhouse. The free foot baths are on the far bank.",
      "<strong>Wasabi visits are optional.</strong> Public viewpoints do not establish farm entry or a hands-on appointment. Ask Asaba about current guided availability."
    ],
    "overview": "<strong>Open Izu day with the confirmed rental car.</strong> Choose wasabi country, Fuji viewpoints or a quieter Shuzenji day. Vieni KANDA Sunday lunch is an unbooked option; Asaba dinner included."
  },
  {
    "date": "Mon 16",
    "dow": "Monday",
    "base": "shuzenji",
    "where": "Izu",
    "title": "Open",
    "fixed": [],
    "moves": [],
    "noMoves": "Nothing on this day yet, and that is on purpose.",
    "meals": {
      "b": {
        "status": "included",
        "where": "Asaba"
      },
      "l": {
        "status": "open",
        "where": "Not decided",
        "note": "Vieni KANDA is closed today. Carry safe food or eat at the ryokan."
      },
      "d": {
        "status": "included",
        "where": "Asaba",
        "note": "The third kaiseki, and they will not repeat themselves."
      }
    },
    "notes": [
      "<strong>This day exists because Asaba came back with three nights instead of one.</strong> It is deliberately unplanned. Whichever of the wasabi run and the Fuji coast Sunday did not take, it goes here — and if the weather decides otherwise, the whole town is inside ten minutes on foot: Shuzen-ji temple and its treasure hall, the five red bridges, Shigetsuden, and the bamboo path.",
      "<strong>Niji-no-Sato is nominally closed on Tuesdays</strong>, so if the momiji light-up is the thing you want, tonight is the safer of the two remaining evenings.",
      "<strong>Optional craft day:</strong> washi needs a reserved sitting; Asaba also offered private tea or ikebana at ¥63,250 per person, plus massage, e-bikes and guided excursions. None is booked.",
      "<strong>The booked rental remains available.</strong> Choose an Izu outing if wanted; prepare luggage and an early breakfast for tomorrow’s drive and 16:00 Kyoto return."
    ],
    "overview": "<strong>Fully flexible.</strong> Optional washi workshop, Asaba-arranged cultural class, the other Izu excursion or ryokan time. These need their own bookings; no extra activity confirmed."
  },
  {
    "date": "Tue 17",
    "dow": "Tuesday",
    "base": "kyoto",
    "where": "→ Kyoto",
    "title": "Drive to Kyoto and return the Toyota",
    "fixed": [
      {
        "t": "15:00",
        "what": "Room available at Hotel The Mitsui",
        "kind": "hotel",
        "note": "Coordinate luggage drop around the drive and rental return. Arrival before check-in is not guaranteed."
      },
      {
        "t": "16:00",
        "what": "Toyota rental return · Horikawa Shop, Kyoto",
        "kind": "booked",
        "id": "toyota-return",
        "note": "Confirmed reservation 99950312100. 503-1 Anenishihorikawa-cho, Nakagyo-ku; Nishihorikawa-dori north of Sanjo. Arrive with fuel and return paperwork time to spare; no Mishima return."
      }
    ],
    "moves": [
      {
        "from": "Asaba",
        "to": "Toyota Horikawa Shop, Kyoto",
        "min": 360,
        "mode": "car",
        "at": "08:00",
        "note": "Self-drive in the confirmed Toyota. Rough 5–6 hours on the road; allow extra time for food, traffic, refuelling and return paperwork before 16:00. Target Kyoto around 14:00–15:00; coordinate any Mitsui luggage stop."
      },
      {
        "from": "Toyota Horikawa Shop",
        "to": "Hotel The Mitsui Kyoto",
        "min": 15,
        "mode": "car",
        "note": "Short taxi after return, or walk if luggage permits. Confirm the preferred luggage drop with Mitsui; this final transfer is separate from the rental."
      }
    ],
    "meals": {
      "b": {
        "status": "included",
        "where": "Asaba",
        "note": "Arrange early breakfast around the proposed 08:00 road departure."
      },
      "l": {
        "status": "open",
        "where": "En route to Kyoto",
        "note": "Arrange suitable packed food or a road stop; no 12:15 Kyoto lunch is fixed."
      },
      "d": {
        "status": "open",
        "where": "TOKI, if reserved",
        "note": "18:00 proposed, not booked. Obtain menu acceptance and actual sitting."
      }
    },
    "notes": [
      "<strong>The 16:00 Horikawa return is booked.</strong> Recheck the driving estimate, leave early and allow for fuel and handover. No Mishima–Kyoto train or station pickup is part of this route.",
      "<strong>Masahiro requires direct booking.</strong> Mitsui cannot reserve through a third party; no session is booked. Do not fit a workshop into this drive and return day; Hayamitsu is confirmed for November 20.",
      "<strong>Keep arrival simple.</strong> Coordinate bags and check-in with Mitsui, then choose dinner before adding an evening event."

    ],
    "overview": "<strong>Drive Asaba → Kyoto; Toyota Horikawa return by 16:00.</strong> Leave around 08:00 with breaks, fuel and return buffer; target Kyoto around 14:00–15:00. Coordinate Mitsui luggage and check-in. No Mishima train; TOKI dinner remains unbooked."
  },
  {
    "date": "Wed 18",
    "dow": "Wednesday",
    "base": "kyoto",
    "where": "Takao",
    "title": "The furthest colour, and it got closer",
    "fixed": [
      {
        "t": "09:00",
        "what": "Jingo-ji opens",
        "kind": "opens",
        "id": "jingoji",
        "note": "To 16:00. Kozan-ji runs 8:30–17:00."
      },
      {
        "t": "18:00",
        "what": "Sushi Iwa · confirmed dinner for two",
        "kind": "booked",
        "id": "sushi-iwa",
        "note": "Confirmed November 18 at 18:00 for two, non-smoking counter, under Atallah Ryan. Course listed at ¥34,650 per person (¥69,300 for two); meal payable at the restaurant. AutoReserve fee ¥8,640 paid separately. Cancellation within 48 hours: 100% plus 10% handling fee. Dietary adaptation and cooked alternatives are not established by this confirmation."
      }
    ],
    "moves": [
      {
        "from": "The hotel",
        "to": "Takao",
        "min": 43,
        "mode": "bus",
        "serves": "jingoji",
        "note": "Tozai six minutes west to Uzumasa Tenjingawa, then City Bus 8 — which skips the Kyoto Station scrum and saves thirty to forty minutes each way against the old routing."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "Hotel The Mitsui",
        "note": "Check breakfast inclusion and dietary arrangements against the booked rate."
      },
      "l": {
        "status": "open",
        "where": "Takao"
      },
      "d": {
        "status": "booked",
        "where": "Sushi Iwa · 18:00",
        "note": "Confirmed November 18 at 18:00 for two, non-smoking counter, under Atallah Ryan. Course listed at ¥34,650 per person (¥69,300 for two); meal payable at the restaurant. AutoReserve fee ¥8,640 paid separately. Cancellation within 48 hours: 100% plus 10% handling fee. Dietary adaptation and cooked alternatives are not established by this confirmation."
      }
    },
    "notes": [
      "<strong>Buy the ¥1,100 Subway &amp; Bus 1-Day Pass.</strong> It covers the subway leg and the whole Takao bus section, which was folded into the flat-fare zone in 2021. The bus-only pass was discontinued in 2024.",
      "<strong>Kyoto’s own tourism pages call Takao the earliest colour in the city</strong>, which is the entire argument for this week. Jingo-ji is about 400 steps up from the river, and the clay-disc throw off its terrace is the thing everyone remembers."
    ],
    "overview": "<strong>Takao proposed, or Arashiyama and Iwatayama instead.</strong> Friday is now reserved for the Hyogo forge excursion and travel; choose another day for the monkey park. No personal sightseeing reservation anchors today. <strong>Sushi Iwa dinner confirmed at 18:00 for two.</strong> Return from sightseeing in time to change and travel to the restaurant."
  },
  {
    "date": "Thu 19",
    "dow": "Thursday",
    "base": "kyoto",
    "where": "Kyoto · Higashiyama",
    "title": "Traditional kintsugi with Mio Heki",
    "fixed": [
      {
        "t": "14:00",
        "what": "Mio Heki kintsugi · confirmed and paid",
        "kind": "booked",
        "id": "heki-kintsugi",
        "note": "Confirmed and paid: November 19, 14:00–16:00, two participants at Akagane Resort Kyoto Higashiyama 1925, 400-1 Kinencho. Wabunka booking 25636; ¥121,770 including real gold for both and English interpretation. Arrive on time; over 15 minutes late is a no-show without refund. Cancellation charges apply from November 9 at 14:00 JST; rescheduling is no longer allowed."
      },
      {
        "t": "16:00",
        "what": "Kintsugi scheduled finish",
        "kind": "ends"
      }
    ],
    "moves": [
      {
        "from": "Hotel The Mitsui",
        "to": "Akagane Resort",
        "min": 30,
        "mode": "car",
        "note": "Allow additional traffic and arrival buffer before the confirmed 14:00 workshop."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "Hotel The Mitsui",
        "note": "Check breakfast inclusion and dietary arrangements against the booked rate."
      },
      "l": {
        "status": "open",
        "where": "Higashiyama before the workshop",
        "note": "Finish lunch in time for the 14:00 appointment."
      },
      "d": {
        "status": "open",
        "where": "Kyoto · concierge inquiry",
        "note": "Kikunoi declined requested dinners. No replacement tasting menu confirmed; Mitsui authorization outstanding."
      }
    },
    "notes": [
      "Confirmed and paid: November 19, 14:00–16:00, two participants at Akagane Resort Kyoto Higashiyama 1925, 400-1 Kinencho. Wabunka booking 25636; ¥121,770 including real gold for both and English interpretation. Arrive on time; over 15 minutes late is a no-show without refund. Cancellation charges apply from November 9 at 14:00 JST; rescheduling is no longer allowed.",
      "<strong>Nearby Gion and Higashiyama fit around the workshop.</strong> Keep Ohara and Rurikoin for another day; dinner remains unbooked."
    ],
    "overview": "<strong>Kintsugi confirmed and paid: 14:00–16:00 at Akagane.</strong> Two participants, ¥121,770 including real gold and English interpretation. Plan nearby sightseeing and lunch around the appointment; dinner remains open."
  },
  {
    "date": "Fri 20",
    "dow": "Friday",
    "base": "kyoto",
    "where": "Aioi, Hyogo",
    "title": "Hayamitsu sword making · confirmed",
    "fixed": [
      {
        "t": "13:30",
        "what": "Kikyo Hayamitsu Forge · confirmed workshop",
        "kind": "booked",
        "id": "hayamitsu",
        "note": "Confirmed by the separate November 3 AirRESERVE email: November 20, 13:30–17:30, two participants, ¥112,000 including tax, booking 105PHCHAG. Payment is not evidenced. Arrange language support, arrival requirements, Kyoto–Aioi trains and both taxis."
      },
      {
        "t": "17:30",
        "what": "Hayamitsu workshop scheduled finish",
        "kind": "ends",
        "note": "Return taxi and actual train still to arrange; do not assume an immediate connection."
      }
    ],
    "moves": [
      {
        "from": "Hotel The Mitsui",
        "to": "Kyoto Station",
        "min": 15,
        "mode": "car",
        "chain": true,
        "note": "Planning allowance; reserve the actual train before setting departure."
      },
      {
        "from": "Kyoto Station",
        "to": "Aioi Station",
        "min": 70,
        "mode": "rail",
        "chain": true,
        "note": "Aioi city guide gives about 70 minutes from Kyoto by shinkansen. Choose a current service that stops at Aioi; this is not a ticket."
      },
      {
        "from": "Aioi Station",
        "to": "Kikyo Hayamitsu Forge",
        "min": 20,
        "mode": "car",
        "serves": "hayamitsu",
        "buffer": 30,
        "note": "Prearrange taxi; operator gives about 20 minutes to Rakan-no-Sato. Arrival slack included; all departure calculations remain provisional."
      },
      {
        "from": "Kikyo Hayamitsu Forge",
        "to": "Aioi Station",
        "min": 20,
        "mode": "car",
        "chain": true,
        "note": "Prebook pickup after the scheduled 17:30 finish."
      },
      {
        "from": "Aioi Station",
        "to": "Kyoto Station",
        "min": 70,
        "mode": "rail",
        "chain": true,
        "note": "No return train reserved; wait time can extend the journey."
      },
      {
        "from": "Kyoto Station",
        "to": "Hotel The Mitsui",
        "min": 15,
        "mode": "car",
        "note": "Budget roughly 2½–3 hours for the full return with transfers; exact arrival depends on actual services."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "Hotel The Mitsui",
        "note": "Check breakfast inclusion and dietary arrangements against the booked rate."
      },
      "l": {
        "status": "open",
        "where": "Before the forge, Kyoto or Aioi",
        "note": "Arrange suitable lunch or a packed meal before 13:30; no meal is included in the evidence."
      },
      "d": {
        "status": "open",
        "where": "After the return to Kyoto",
        "note": "No dinner held. Avoid an early fixed sitting; exact return train is not booked."
      }
    },
    "notes": [
      "<strong>Final confirmation received November 3.</strong> Booking 105PHCHAG confirms November 20, 13:30–17:30 for two. Payment, language support and transport still need verification.",
      "<strong>This is Aioi in Hyogo.</strong> The forge is at Rakan-no-Sato, 28 Uryu, Yano, Aioi. Include both train directions and prebook the rural return taxi.",
      "<strong>Kintsugi is removed from today.</strong> November 19 at 14:00–16:00 is confirmed and paid. Arashiyama and a fixed Eikandō visit no longer fit as daytime plans; keep dinner flexible around the return."
    ],
    "overview": "<strong>Kikyo Hayamitsu Forge, Aioi, Hyogo: confirmed 13:30–17:30.</strong> Two participants, ¥112,000; payment still to verify. Reserve trains and both rural taxis. Keep dinner flexible around the return."
  },
  {
    "date": "Sat 21",
    "dow": "Saturday",
    "base": "kyoto",
    "where": "Kurama and Kibune",
    "title": "Open day; farewell dinner at 18:30",
    "fixed": [
      {
        "t": "18:30",
        "what": "Hiramatsu Kodaiji",
        "kind": "booked",
        "id": "hiramatsu",
        "note": "Confirmed two adults; Koudaiji course ¥72,600 total. Full dietary brief recorded."
      },
      {
        "t": "21:30",
        "what": "Kodai-ji illumination last entry — verify",
        "kind": "closes",
        "confirm": true,
        "note": "Optional only if dinner finishes in time; do not rush the meal."
      }
    ],
    "moves": [
      {
        "from": "Hotel The Mitsui",
        "to": "Kurama",
        "min": 52,
        "mode": "rail",
        "at": "08:00",
        "note": "Optional early excursion; allow for queues. Arashiyama or a local day are alternatives."
      },
      {
        "from": "Hotel The Mitsui",
        "to": "Hiramatsu Kodaiji",
        "min": 40,
        "mode": "car",
        "serves": "hiramatsu",
        "buffer": 20,
        "note": "Prebook the hotel car; return from the daytime outing by about 16:30 to change. Travel allowance is an estimate."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "Hotel The Mitsui",
        "note": "Check breakfast inclusion and dietary arrangements against the booked rate."
      },
      "l": {
        "status": "open",
        "where": "On the chosen Kyoto outing"
      },
      "d": {
        "status": "booked",
        "where": "Hiramatsu Kodaiji",
        "at": "18:30",
        "note": "¥72,600 for two, pay at venue. Dietary adaptation accepted."
      }
    },
    "notes": [
      "<strong>Archery is already booked for Tokyo November 9.</strong> The Kyoto morning is open.",
      "<strong>Allow holiday-weekend queues and traffic.</strong> Kurama/Kibune should be an early-start option with a timed return, not a late afternoon commitment.",
      "<strong>Hiramatsu replaces Jugyuan.</strong> Reserve the car from Mitsui; do not rely on finding an evening taxi. Kodai-ji after dinner is optional and depends on finish time."
    ],
    "overview": "<strong>Hiramatsu Kodaiji 18:30 — confirmed for two.</strong> Kurama/Kibune early, Arashiyama or central Kyoto are alternatives for the day. Archery is already booked in Tokyo on the 9th. Prebook the dinner car."
  },
  {
    "date": "Sun 22",
    "dow": "Sunday",
    "base": null,
    "where": "→ SFO",
    "title": "The unhurried departure",
    "fixed": [
      {
        "t": "11:30",
        "what": "Lunch at FORNI",
        "kind": "pending",
        "id": "forni",
        "note": "Proposed 11:30 lunch, no reservation found. Confirm menu and finish around 13:00.",
        "confirm": true
      },
      {
        "t": "11:15",
        "what": "Check out before the proposed lunch",
        "kind": "hotel",
        "note": "Bags to the bell desk before lunch."
      },
      {
        "t": "18:35",
        "what": "UA34 KIX→SFO",
        "kind": "depart",
        "id": "ua",
        "note": "Ticketed — confirmation NGWXMK, Polaris business, seats 6D and 6G. 10h15 in the air, landing SFO 11:50 the same Sunday. The winter-schedule time is now confirmed rather than assumed."
      }
    ],
    "moves": [
      {
        "from": "The hotel",
        "to": "Kyoto Station",
        "min": 15,
        "mode": "car",
        "at": "13:30",
        "chain": true
      },
      {
        "from": "Kyoto",
        "to": "KIX",
        "min": 80,
        "mode": "rail",
        "serves": "ua",
        "buffer": 190,
        "note": "The Haruka. Reserve the seats — this is the middle day of a three-day weekend and the station will be heavy."
      }
    ],
    "meals": {
      "b": {
        "status": "open",
        "where": "Hotel The Mitsui",
        "note": "Check breakfast inclusion and dietary arrangements against the booked rate."
      },
      "l": {
        "status": "open",
        "where": "FORNI",
        "at": "11:30",
        "note": "Candidate only; reserve and confirm dietary menu. A hotel-prepared takeaway is the fallback."
      },
      "d": {
        "status": "flight",
        "where": "On board",
        "note": "A gluten-free meal is requested on Ashly's ticket. Re-confirm it at check-in — a request on a booking is not the same as a tray on the cart."
      }
    },
    "notes": [
      "<strong>Protect the airport buffer.</strong> FORNI is a proposal, not a booking. If reserved, aim to finish by 13:00 and leave around 13:30 for KIX around 15:30. Reserve the actual Haruka and station transfer.",
      "<strong>The morning is deliberately empty.</strong> Nijo Castle is five minutes away and Nishiki Market is a twenty-minute walk. Anything the week rained off goes here."
    ],
    "overview": "<strong>Free morning; FORNI 11:30 lunch proposed, not booked.</strong> Target hotel departure 13:30 and KIX around 15:30. <strong>UA34 18:35 → SFO 11:50</strong>, ticketed; station transfer and train still to reserve."
  }
];

export const standing = {
  "title": "Standing constraints",
  "sub": "Booking constraints and practical arrangements. Published hours and sample journeys do not establish a reservation.",
  "rows": [
    [
      "Kikyo Hayamitsu Forge",
      "Provisional November 20 13:30–17:30, two adults, ¥112,000. Await final confirmation; reserve Kyoto–Aioi trains and taxis both ways.",
      "Fri 20"
    ],
    [
      "Kyudo session",
      "Confirmed November 9 at 09:30 with Yosui; obtain actual dojo address and finish time. No Kyoto archery booking.",
      "Mon 9"
    ],
    [
      "est",
      "Confirmed 18:30 for two, full dietary adaptation accepted; verify completion of card guarantee.",
      "Sun 8"
    ],
    [
      "NARISAWA",
      "Confirmed 17:30–20:00 for two. Dietary details submitted, explicit kitchen acceptance still needed.",
      "Tue 10"
    ],
    [
      "Hiramatsu Kodaiji",
      "Confirmed 18:30 for two, dietary adaptation accepted; reserve the hotel car.",
      "Sat 21"
    ],
    [
      "Heki kintsugi",
      "Move requested for November 19 only; no new time or host acceptance. November 20 is unavailable. Earlier ¥121,770 quote includes gold for two.",
      "Thu 19"
    ],
    [
      "Owl café, Tokyo",
      "Reservation only via select-type.com, card charged at booking, door locks during the session. Arrive 10 minutes early.",
      "Sun 8"
    ],
    [
      "Ritz-Carlton onsen",
      "05:30–23:00, closed 12:00–14:00 for cleaning. Free and unlimited — but the Lake View Suite bath is ordinary hot water, not onsen. There is no bookable private bath except as a spa add-on.",
      "Wed 11 – Fri 13"
    ],
    [
      "The hotel Japanese Restaurant",
      "Reported closed Wednesdays and Thursdays — your first two nights of three. The property lists no closing day. Confirm; if it holds, Friday is the only night the kaiseki or the sushi counter is possible.",
      "Wed 11, Thu 12"
    ],
    [
      "Rinnoji set-ticket counter",
      "Closes 13:30 in November, though the temple stays open to 16:00. Buy the ¥1,000 three-facility set in the morning.",
      "Thu 12"
    ],
    [
      "Nikko sunset",
      "16:36, civil twilight ends 17:02. Every paid site shuts at 16:00 and Shinkyo at 15:30 — the golden hour belongs to Kanmangafuchi, which is free and never closes.",
      "Wed 11 – Fri 13"
    ],
    [
      "Akechidaira Ropeway",
      "Closed since 15 January 2026 for rebuilding, reopening planned September 2027. The classic Kegon panorama is unreachable.",
      "Wed 11 – Fri 13"
    ],
    [
      "Seasonal Chuzenji buses",
      "The Hangetsuyama and Utagahama services stop after 12 November. On the 13th the Embassy Villas are the boat, a taxi or a 35-minute walk.",
      "Fri 13"
    ],
    [
      "Low-emission bus",
      "Akanuma departures 8:45, 10:05, 11:25, 12:45, 14:35, 15:55. ¥500. The Senjugahama corridor is closed to private cars, so this is the only way in.",
      "Fri 13"
    ],
    [
      "Asaba check-in",
      "14:30–18:00, check-out 11:30. Arrive by the confirmed rental on November 14; agree arrival, parking, dinner and performance timing. Stay paid in full August 27.",
      "Sat 14"
    ],
    [
      "The rental car",
      "Confirmed Toyota 99950312100: Lexus RX Hybrid LXC2, Tokyo Sta. Nihonbashi Ext. November 11 10:30 → Kyoto Horikawa November 17 16:00; ¥392,716 incl. tax. Winter tires, compensation, NOC exemption and ETC card selected; 4WD not required, ETC supply subject to availability. Bring 1949 Geneva IDP, licence and passport / entry evidence. Fuel, tolls and parking are additional.",
      "Wed 11 – Tue 17"
    ],
    [
      "Vieni KANDA",
      "The only dedicated gluten-free kitchen in Shuzenji, and closed Mondays and Tuesdays. With the stay running Saturday to Tuesday, Sunday the 15th is the one day it opens. Cash or QR only, book the day before.",
      "Sun 15"
    ],
    [
      "Niji-no-Sato",
      "Nominally closed Tuesdays, except in peak season, and the light-up period counts as peak season. Nobody will confirm it in writing. Phone 0558-72-7111.",
      "Sun 15, Mon 16"
    ],
    [
      "Rurikoin",
      "Reservation required November 13–December 6, including November 19. No personal ticket confirmed.",
      "Thu 19"
    ],
    [
      "Mitsui private onsen",
      "07:30–23:00, last entry 22:00. ¥24,500 for 60 min, guests only, by phone on +81 75 468 3125. 100% cancellation inside 48 hours.",
      "Thu 19, Sat 21"
    ],
    [
      "Iwatayama monkey park",
      "Optional Arashiyama outing; choose November 18 or 21 instead of the Friday forge excursion. Verify entry hours before going.",
      "Wed 18, Sat 21"
    ],
    [
      "Eikandō",
      "November 20 illumination is optional only if return from Aioi permits arrival before last entry; do not treat it as a fixed commitment.",
      "Fri 20"
    ],
    [
      "The holiday weekend",
      "Labour Thanksgiving is Monday 23 November 2026, so Sat 21 – Mon 23 is a full three-day weekend with no substitute-day shift. Saturday is the busiest day of the trip.",
      "Sat 21, Sun 22"
    ],
    [
      "The Eizan line",
      "Two cars, and it has left passengers on platforms in ordinary autumn conditions. Go at opening or not at all, and never approach Kibune by car.",
      "Sat 21"
    ],
    [
      "Kodai-ji illumination",
      "Optional after Hiramatsu only if dinner finishes before last admission; check the 2026 evening entry details.",
      "Sat 21"
    ],
    [
      "FORNI",
      "Lunch 11:30–14:30 last order, open Sundays, no fixed closing day. The last lunch — book it, gluten-free declared at reservation.",
      "Sun 22"
    ]
  ]
};

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
