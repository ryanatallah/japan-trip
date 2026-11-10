// THE PLAN. Itinerary 1B, chosen on 15 August 2026. This is the live document — the one file a
// PR that changes the trip should need to open.
//
// It carries its own flights, transport, gluten-free and booking copy rather than importing the
// shared foundations from content/shared.mjs. That is deliberate: on a page about one trip nothing
// is "shared", it is just part of the trip, and the material reads better named to the actual
// flights, the actual kitchens and the actual dates. shared.mjs still exists for the archive, which
// really does compare seven itineraries. If a fact changes in both, change it in both.
//
// Every change here should also get an entry in content/history.mjs.

export const plan = {
  "num": "1D",
  "slug": "plan",
  "variantOf": 1,
  "decided": "23 August 2026",
  "title": "The Classic, with Nikko and Izu",
  "tagline": "Fifteen nights — Tokyo, three at 1,269m on Lake Chuzenji, three in a ryokan founded in 1484 on the Izu peninsula, and the same Kyoto week pointed north at the early colour",
  "dates": "Fri Nov 6 → Sun Nov 22, 2026",
  "length": "15 nights",
  "route": [
    "Tokyo · 4n",
    "Okunikko · 3n",
    "Shuzenji · 3n",
    "Kyoto · 5n"
  ],
  "routeNote": "Open-jaw — in to Tokyo (HND), home from Osaka (KIX), landing 22 November with three clear days before Colorado",
  "cost": "$78,600",
  "costBand": "$78.6k, flights and rental included",
  "temp": "32–60°F — Okunikko is the cold part",
  "tempStatus": "warn",
  "bestFor": "The version that is actually booked",
  "flights": {
    "title": "Getting there",
    "sub": "Both ends are ticketed. ANA business out, United Polaris home, $19,313 for the two of you — and the 18:35 the last day was built on is now confirmed rather than assumed.",
    "points": [
      "<strong>Out: ticketed. NH107, Friday 6 November, SFO→HND, 00:20 → 04:50+1.</strong> Business class on a 777-300ER, PNR <strong>E4HX5B</strong>, $9,482.60 for the two of you — $8,430 fare plus $1,052.60 in taxes. Two checked bags each at 32kg. <strong>The fare is non-refundable</strong>; changes are allowed with restrictions at no change fee. Note the real departure time is <strong>12:20 a.m.</strong>, which makes \"Friday the 6th\" a Thursday-night airport run.",
      "<strong>Home: ticketed. UA34, Sunday 22 November, KIX→SFO, 18:35 → 11:50 the same day.</strong> United Polaris business on a 777-200, fare class Z, 10h15 in the air, confirmation <strong>NGWXMK</strong>, seats <strong>6D and 6G</strong>. $9,830.26 for the two of you — $9,663.80 fare plus $166.46 in taxes. Two checked bags each at 32kg, and a gluten-free meal is requested on Ashly's ticket. <em>Dining, activities and ground transport still include estimates.</em>",
      "<strong>The 18:35 is now a fact rather than a schedule lookup, and that is the part that mattered.</strong> The whole last day was derived from the winter-schedule time that starts 25 October — the 11:30 lunch, the 13:30 car, the Haruka — against a summer schedule that runs three hours earlier. The ticket confirms it. <em>Nothing on Sunday 22 November moves.</em>",
      "<strong>Kyoto→KIX on the last morning</strong> is the Haruka limited express, about 75–80 minutes from Kyoto Station. <em>Reserve the seats.</em> 22 November is the middle day of a three-day national holiday and the station will be heavy.",
      "<strong>Outbound meal and seats:</strong> ANA’s October 31 email lists seats 9D and 10C, one Japanese pre-order meal and one gluten-intolerant meal. Departure remains 00:20 Friday November 6; go to SFO Thursday evening."
    ],
    "ref": [
      "ana-the-room"
    ]
  },
  "transport": {
    "mode": "Toyota rental confirmed · Tokyo → Nikko → Izu → Kyoto",
    "text": "One continuous rental covers every move between the four hotel bases, plus local driving in Nikko and Izu. Toyota reservation 99950312100 runs November 11 at 10:30 to November 17 at 16:00, Japan time. The November 20 Aioi excursion and November 22 airport transfer are after the car is returned and still need their own arrangements. Driving times below are planning allowances, not live traffic estimates.",
    "points": [
      "<strong>Pick up Wednesday November 11, 10:30:</strong> Tokyo Sta. Nihonbashi Ext. Shop, Trust Tower N Wing, B2 parking lot, 1-8-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005; telephone 03-5220-2220. Check out of Aman first, collect the car and drive to The Ritz-Carlton Nikko. Allow roughly 3–4 hours on the road plus pickup, food and traffic buffers; target the 15:00 hotel check-in. The SPACIA X and Nikko station-transfer proposals are replaced.",
      "<strong>The car:</strong> LXC2 class, Lexus RX Hybrid (from November 2022), automatic, non-smoking. Winter tires are requested; 4WD is not required. Liability compensation and NOC exemption / Toyota W Plan are selected, along with the car-model option and an ETC card. ETC card supply is subject to shop availability; tolls are separate from the rental price.",
      "<strong>Nikko → Asaba, Saturday November 14:</strong> drive the same car door to door. Allow roughly 6–7 hours including breaks and traffic; an early departure around 08:00 targets 14:30–15:00 arrival, with check-in by 18:00. Tell Asaba the road-arrival plan and confirm dinner, parking and the drum-performance time. No Mishima pickup, intercity train connections or mandatory luggage forwarding.",
      "<strong>Nikko and Izu outings:</strong> use the rental for lower Nikko, lake access, wasabi country and Fuji or coastal viewpoints. Check mountain-road conditions with Ritz; winter tires do not establish 4WD. The Senjugahama corridor remains closed to private cars, so its seasonal shuttle still needs checking. Carry bags in the car if they fit; forwarding is optional.",
      "<strong>Asaba → Kyoto, Tuesday November 17:</strong> drive directly to Kyoto; allow roughly 5–6 hours on the road plus stops, refuelling and return paperwork. Plan to leave around 08:00 and reach Kyoto around 14:00–15:00. Return by <strong>16:00 at Horikawa Shop</strong>, 503-1 Anenishihorikawa-cho, Nakagyo-ku, Kyoto 604-8264, on Nishihorikawa-dori just north of Sanjo. Coordinate bags with Mitsui and take a short taxi or walk after return. No Mishima → Kyoto train is needed.",
      "<strong>Reservation and cost:</strong> <a href=\"https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1b8339689d2dde\">Toyota email confirmation</a>, reservation <strong>99950312100</strong>, <strong>¥392,716 including tax</strong> (about $2,618 at the planning rate). This includes the ¥37,950 one-way surcharge and ¥23,100 winter-equipment line. Online credit-card payment is selected; the email does not establish that the charge has settled. Bring the valid driving licence, 1949 Geneva IDP and passport with evidence of entry. The driving permit is already completed per Ryan’s update.",
      "<strong>Kyoto → Aioi → Hayamitsu, November 20:</strong> the rental has ended. After host confirmation, reserve a current shinkansen connection and taxis at Aioi in both directions. Allow roughly 2½–3 hours each way including station access, connections and arrival slack; no tickets are established.",
      "<strong>Kyoto → KIX, November 22:</strong> the rental has ended. Reserve the station transfer and Haruka; target hotel departure 13:30 and KIX around 15:30 for ticketed UA34 at 18:35. Kyoto local transfers and the Hiramatsu dinner car also remain separate."
    ],
    "ref": []
  },
  "hero": "asaba-ryokan",
  "heroCard": [
    "ritz-carlton-nikko",
    "asaba-ryokan",
    "hotel-the-mitsui-kyoto"
  ],
  "pitch": "<strong>Four bases, fifteen nights, both flights ticketed.</strong> Aman Tokyo November 7–11, Ritz-Carlton Nikko November 11–14, Asaba November 14–17 and Hotel The Mitsui Kyoto November 17–22. The Ritz stay was shortened successfully on September 1; there is no double-booked fourth night.<br><br><strong>One confirmed car connects all four bases.</strong> Toyota’s Lexus RX Hybrid rental runs Tokyo Station November 11 at 10:30 → Kyoto Horikawa November 17 at 16:00, covering Nikko and Izu in between. The former SPACIA X, Mishima rental and Mishima–Kyoto rail proposals are replaced.<br><br><strong>The booked experiences now shape the days.</strong> Owl café November 8 at 14:00, est at 18:30, Tokyo archery November 9 at 09:30, NARISAWA November 10 at 17:30 and Hiramatsu Kodaiji November 21 at 18:30. Hirata was declined; Kikyo Hayamitsu in Aioi is now confirmed for November 20, 13:30–17:30. Kintsugi is confirmed and paid November 19, 14:00–16:00, ¥121,770 for two including gold. Sushi Iwa is confirmed November 18 at 18:00 for two.<br><br><strong>The landscapes remain the reason for the route.</strong> Lower Nikko’s shrines and gorge, three nights at Asaba on Izu, and a Kyoto week with Takao, Ohara, Arashiyama and Kurama as flexible outings. The <a href=\"days.html\">day sheets</a> distinguish fixed bookings, provisional holds and open time, with options for each gap.",

  "days": [
    {
      "date": "Fri 6",
      "where": "✈",
      "text": "<strong>NH107, 00:20 SFO → 04:50 Saturday at Haneda.</strong> Business class ticketed. Go to the airport Thursday night.",
      "ref": [
        "ana-the-room"
      ]
    },
    {
      "date": "Sat 7",
      "where": "Tokyo",
      "text": "<strong>Aman arrival and recovery.</strong> Four-night stay confirmed; early room access requested but not guaranteed. Spa facilities from 06:30 and breakfast from 07:00, extra charge. A 10:00 massage alternative is offered, not booked.",
      "ref": [
        "aman-tokyo"
      ]
    },
    {
      "date": "Sun 8",
      "where": "Tokyo",
      "text": "<strong>Akiba Fukurou 14:00</strong> for two, paid; arrive 13:50. <strong>est 18:30</strong> confirmed with dietary adaptation; verify card guarantee. Meiji Jingu or a local walk in the morning.",
      "ref": [
        "akiba-fukurou",
        "est-tokyo",
        "meiji-jingu"
      ]
    },
    {
      "date": "Mon 9",
      "where": "Tokyo",
      "text": "<strong>Kyudo Japan with Yosui, 09:30 — confirmed and paid (¥40,000 for two).</strong> Verify dojo address and finish time. Afternoon and dinner open; Picchio is an unbooked option only if the archery finish and transfers work.",
      "ref": [
        "kyudo",
        "picchio-musasabi"
      ]
    },
    {
      "date": "Tue 10",
      "where": "Tokyo",
      "text": "<strong>NARISAWA 17:30–20:00 — confirmed for two.</strong> Dietary details submitted; kitchen acceptance still to obtain. Morning open. The earlier Akihira inquiry remains a backup; the scheduled sword-making priority is now Hayamitsu on November 20, confirmed.",
      "ref": [
        "narisawa"
      ]
    },
    {
      "date": "Wed 11",
      "where": "→ Okunikko",
      "text": "<strong>Toyota pickup 10:30 near Tokyo Station, then drive to Ritz-Carlton Nikko.</strong> Lexus RX Hybrid confirmed through November 17 in Kyoto. Target 15:00 hotel check-in; allow pickup time and traffic. All three Nikko dinners still to arrange.",
      "ref": [
        "ritz-carlton-nikko",
        "lake-chuzenji"
      ]
    },
    {
      "date": "Thu 12",
      "where": "Nikko",
      "text": "<strong>Lower Nikko sightseeing by rental car, flexible:</strong> Rinnoji, Toshogu, the bridge and Kanmangafuchi. Arrange lunch and check parking and road conditions; teppanyaki dinner remains a request.",
      "ref": [
        "nikko-toshogu",
        "kanmangafuchi"
      ]
    },
    {
      "date": "Fri 13",
      "where": "Okunikko",
      "text": "<strong>Choose the lake and villas, a nature outing, or a shorter hotel day.</strong> The rental is available; private-car restrictions still apply to Senjugahama. Check seasonal services and route conditions with Ritz. Keep luggage for tomorrow’s drive; dinner unbooked.",
      "ref": [
        "lake-chuzenji"
      ]
    },
    {
      "date": "Sat 14",
      "where": "→ Shuzenji",
      "text": "<strong>Drive the booked Toyota from Nikko to Asaba.</strong> Allow roughly 6–7 hours including breaks; depart around 08:00 to target 14:30–15:00 check-in. Three-night stay prepaid with meals. Confirm arrival, parking, dinner and drum-performance timing.",
      "ref": [
        "asaba-ryokan"
      ]
    },
    {
      "date": "Sun 15",
      "where": "Izu",
      "text": "<strong>Open Izu day with the confirmed rental car.</strong> Choose wasabi country, Fuji viewpoints or a quieter Shuzenji day. Vieni KANDA Sunday lunch is an unbooked option; Asaba dinner included.",
      "ref": [
        "asaba-ryokan",
        "shuzenji-onsen"
      ]
    },
    {
      "date": "Mon 16",
      "where": "Izu",
      "text": "<strong>Fully flexible.</strong> Optional washi workshop, Asaba-arranged cultural class, the other Izu excursion or ryokan time. These need their own bookings; no extra activity confirmed. The confirmed rental remains available for an optional Izu outing.",
      "ref": [
        "shuzenji-onsen"
      ]
    },
    {
      "date": "Tue 17",
      "where": "→ Kyoto",
      "text": "<strong>Drive Asaba → Kyoto; Toyota Horikawa return by 16:00.</strong> Leave around 08:00 with breaks, fuel and return buffer; target Kyoto around 14:00–15:00. Coordinate Mitsui luggage and check-in. No Mishima train; TOKI dinner remains unbooked.",
      "ref": [
        "hotel-the-mitsui-kyoto"
      ]
    },
    {
      "date": "Wed 18",
      "where": "Kyoto · flexible",
      "text": "<strong>Takao proposed, or Arashiyama and Iwatayama instead.</strong> Friday is now reserved for the Hyogo forge excursion and travel; choose another day for the monkey park. No personal sightseeing reservation anchors today. <strong>Sushi Iwa dinner confirmed at 18:00 for two.</strong> Return from sightseeing in time to change and travel to the restaurant.",
      "ref": [
        "takao",
        "arashiyama-monkeys",
        "sushi-iwa"
      ]
    },
    {
      "date": "Thu 19",
      "where": "Kyoto · kintsugi confirmed",
      "text": "<strong>Kintsugi confirmed and paid: 14:00–16:00 at Akagane.</strong> Two participants, ¥121,770 including real gold and English interpretation. Plan nearby sightseeing and lunch around the appointment; dinner remains open.",
      "ref": [
        "heki-kintsugi",
        "gion",
        "rurikoin"
      ]
    },
    {
      "date": "Fri 20",
      "where": "Aioi · Hyogo",
      "text": "<strong>Kikyo Hayamitsu Forge, Aioi, Hyogo: confirmed 13:30–17:30.</strong> Two participants, ¥112,000; payment still to verify. Reserve trains and both rural taxis. Keep dinner flexible around the return.",
      "ref": [
        "hayamitsu-sword"
      ]
    },
    {
      "date": "Sat 21",
      "where": "Kyoto",
      "text": "<strong>Hiramatsu Kodaiji 18:30 — confirmed for two.</strong> Kurama/Kibune early, Arashiyama or central Kyoto are alternatives for the day. Archery is already booked in Tokyo on the 9th. Prebook the dinner car.",
      "ref": [
        "hiramatsu-kodaiji",
        "kurama-kibune"
      ]
    },
    {
      "date": "Sun 22",
      "where": "✈",
      "text": "<strong>Free morning; FORNI 11:30 lunch proposed, not booked.</strong> Target hotel departure 13:30 and KIX around 15:30. <strong>UA34 18:35 → SFO 11:50</strong>, ticketed; station transfer and train still to reserve.",
      "ref": [
        "hotel-the-mitsui-kyoto"
      ]
    }
  ],
  "stays": [
    "aman-tokyo",
    "ritz-carlton-nikko",
    "asaba-ryokan",
    "hotel-the-mitsui-kyoto"
  ],
  "dining": [
    "sushi-iwa",
    "est-tokyo",
    "narisawa",
    "hiramatsu-kodaiji"
  ],
  "doing": [
    "akiba-fukurou",
    "kyudo",
    "heki-kintsugi",
    "hayamitsu-sword",
    "picchio-musasabi",
    "arashiyama-monkeys"
  ],
  "places": [
    "nikko-toshogu",
    "lake-chuzenji",
    "kanmangafuchi",
    "shuzenji-onsen",
    "takao",
    "kurama-kibune",
    "sanzen-in-ohara",
    "rurikoin",
    "eikando",
    "kodaiji",
    "arashiyama",
    "gion",
    "meiji-jingu",
    "omotesando-ginkgo"
  ],
  "costRows": [
    [
      "Flights out — NH107 SFO→HND, business, ticketed, non-refundable",
      "$9,483"
    ],
    [
      "Flights home — UA34 KIX→SFO, Polaris business, ticketed",
      "$9,830"
    ],
    [
      "Hotels — four confirmed stays; Ritz revised to ¥1,263,127 for three nights",
      "≈ $44,421"
    ],
    [
      "Dining — three of the fifteen dinners are now inside a room rate, against six on the old plan",
      "$7,600"
    ],
    [
      "Activities — budget allowance; Hayamitsu confirmed ¥112,000, payment to verify; kintsugi ¥121,770 paid incl. gold; owl café ¥7,600 paid",
      "$3,230 allowance"
    ],
    [
      "Toyota rental — Tokyo November 11 → Kyoto November 17; confirmed ¥392,716 incl. tax",
      "≈ $2,618"
    ],
    [
      "Other ground — retained provisional allowance for airport / Kyoto transfers, Aioi rail and taxis, fuel, tolls and parking; reprice after route checks",
      "$1,300 allowance"
    ],
    [
      "Temple entries, illuminations and the Kyoto day pass",
      "$150"
    ]
  ],
  "costTotal": "≈ $78,600",
  "costModel": "Per couple, using the existing planning exchange rate of ¥150/$. Both flights are ticketed and the hotel stays confirmed. Ritz’s corrected three-night total is ¥1,263,127. Toyota’s confirmed ¥392,716 rental adds about $2,618 at that rate. The former $1,300 ground allowance is retained provisionally for remaining rail, local / airport transfers, fuel, tolls and parking; it is no longer an estimate of the rental itself and needs repricing. The rounded total is now about $78,600. Dining, activities and remaining ground costs are still allowances, not a settled invoice. Online rental payment is selected, but a settled charge is not established. Asaba includes three dinners and three breakfasts. The declined Hirata ¥385,000 authorization was released with no charge; Hayamitsu is confirmed at ¥112,000 for two, with no payment evidenced. Kintsugi November 19, 14:00–16:00 is confirmed and ¥121,770 paid including real gold. Sushi Iwa costs ¥69,300 for two payable at venue, plus ¥8,640 reservation fee paid. A 5–8% contingency is not included.",
  "verdict": "<strong>The route is settled; the days retain room to choose.</strong> Tokyo has the confirmed dinners, owl café and archery. Nikko is a lake-and-onsen base with lower-elevation shrine and gorge outings; ask the hotel about current weather and routes before choosing the longer nature day. Three prepaid nights at Asaba allow one excursion and one slower or craft-focused day. Kyoto’s main open choices are how to fit the confirmed workshops around Takao, Ohara, Arashiyama and Kurama.<br><br><strong>Protect the bookings that are real.</strong> Keep est November 8, NARISAWA November 10 and Hiramatsu November 21 at their confirmed times. Hayamitsu is confirmed November 20 plus travel; kintsugi is confirmed November 19, 14:00–16:00. Keep nearby sightseeing compatible with both appointments. The day sheets make those dependencies visible without filling every free hour.",

  "verdictTone": "warn",
  "glutenFree": {
    "title": "Ashly’s dietary brief and kitchen replies",
    "sub": "Avoid gluten-containing ingredients, including regular soy sauce. Gluten-free tamari is fine; she is not celiac and cross-contact is not a concern. Communicate the actual requirement.",
    "points": [
      "<strong>est:</strong> accepted adaptation of the entire course, including sauces and desserts, with no surcharge. November 8 at 18:30 confirmed; card guarantee completion to verify.",
      "<strong>Hiramatsu:</strong> accepted gluten-free adaptation September 29; the detailed restriction is recorded on the confirmed November 21 at 18:30 reservation.",
      "<strong>NARISAWA:</strong> reservation confirmed; restrictions were submitted. A submitted note is not a separate kitchen acceptance, so obtain that reply before dinner.",
      "<strong>Asaba:</strong> accepted gluten-free meals in August and asked about gluten-free soy sauce. Its November 1 pre-arrival email requests both guests’ final restrictions, arrival time and transport. Reply with the full ingredient brief and any dislikes now.",
      "<strong>Aman:</strong> dietary details shared with dining; hotel says it can adapt dishes and offers a gluten-free in-room menu. Make restaurant-specific arrangements for any table selected.",
      "<strong>Ritz Nikko:</strong> willing to modify dishes, but its September reply requested clarification about ingredients, seasonings and cross-contact. No individual dinner or full-menu acceptance found. Resolve all three dinners and excursion lunches.",
      "<strong>Mitsui:</strong> restriction noted, but the concierge authorization form is still outstanding in the evidence reviewed. Obtain acceptance for every restaurant booked; TOKI, FORNI and the Japanese tasting-menu inquiries are not confirmed meals.",
      "<strong>New preference recorded on the kintsugi request:</strong> Ashly prefers no raw fish. Include this when selecting Nikko sushi or any other raw-fish-led meal; do not treat it as an additional allergy."
    ]
  },
  "bookNow": {
    "title": "What still needs arranging",
    "sub": "Reservations reviewed November 2 California time; Toyota rental added November 8, 2026 Japan time. All appointment times are Japan time. Confirmed bookings are listed separately above.",
    "groups": [
      [
        "Before departure",
        "<strong>Verify est’s card guarantee, obtain NARISAWA kitchen acceptance and return Mitsui’s authorization form.</strong> Reply to Asaba with final dietary details, check-in time and transport. Confirm the archery dojo and finish time."
      ],
      [
        "Await replies",
        "<strong>Kintsugi:</strong> confirmed and paid November 19, 14:00–16:00, ¥121,770 for two including gold. <strong>Hayamitsu:</strong> confirmed November 20, 13:30–17:30 for two, ¥112,000; verify payment instructions and arrange trains and taxis. Earlier Akihira / Masahiro inquiries are backups; coordinate rather than accepting a duplicate."
      ],
      [
        "Choose and reserve",
        "<strong>All three Nikko dinners; Kyoto dinners November 17, 19 and 20; FORNI departure lunch; excursion lunches.</strong> Pair each reservation with written ingredient acceptance. Spa treatments, private onsen, washi and guided outings need separate reservations if selected."
      ],
      [
        "Transport",
        "<strong>Toyota is confirmed for all hotel-base moves, November 11–17.</strong> Prepare licence, completed IDP and passport; confirm hotel parking, luggage fit and road timings. Tell Asaba the arrival plan and protect the November 17 16:00 Horikawa return. Arrange Kyoto local transfers and the Hiramatsu dinner car separately. <strong>November 20:</strong> reserve Kyoto–Aioi trains and both taxis after host confirmation. <strong>November 22:</strong> reserve the station transfer and Haruka. Fuel, tolls and parking remain additional."
      ],
      [
        "Activity choices",
        "<strong>Picchio is unbooked.</strong> November 9 could fit after archery only if the finish and transport work; November 8 conflicts with est. <strong>Rurikoin needs a ticket.</strong> Move Arashiyama to November 18 or 21 if desired. Eikandō on November 20 is optional only if the actual return permits; do not anchor a dinner or timed visit to an assumed return train."
      ]
    ]
  },
  "entityUpdates": {
    "aman-tokyo": {
      "badges": [
        "Confirmed · 7–11 Nov",
        "Palace-facing requested / acknowledged"
      ],
      "rate": "¥2,196,320 for four nights · existing confirmed total",
      "gf": "Ashly’s ingredient restriction and cross-contact tolerance were clarified in September and shared with dining. Hotel offers a gluten-free in-room menu; coordinate each restaurant table.",
      "facts": [
        [
          "Stay",
          "Four nights, November 7–11; reconfirmed October 18. Early check-in remains subject to availability."
        ],
        [
          "Arrival",
          "Spa facilities from 06:30, breakfast from 07:00 at extra charge."
        ],
        [
          "Spa",
          "10:00 November 7 hot stone + Grounding alternatives offered, not accepted."
        ],
        [
          "Room",
          "Palace-facing room acknowledged in the August reply."
        ]
      ]
    },
    "ritz-carlton-nikko": {
      "badges": [
        "Confirmed · 11–14 Nov",
        "Three nights · amendment complete",
        "Natural hot spring"
      ],
      "rate": "¥1,263,127 for three nights, tax and service included",
      "facts": [
        [
          "Amendment confirmed",
          "September 1 hotel reply shortened November 11–15 to November 11–14. There is no extra November 14 night to cancel."
        ],
        [
          "Room",
          "Lake View Suite, balcony; room-only rate."
        ],
        [
          "Dining",
          "All three dinners and breakfasts still need individual arrangements and dietary clarification."
        ],
        [
          "Activities",
          "October 30 inquiry about archery, other activities and hiking advice is awaiting a reply."
        ],
        [
          "Transfers",
          "Confirmed Toyota rental: drive from Tokyo November 11 and onward to Asaba November 14. Confirm parking and current road conditions with Ritz."
        ]
      ],
      "gf": "Hotel can modify dishes but requested precise ingredient and seasoning details. Clarify regular soy sauce avoidance, GF tamari acceptance and cross-contact tolerance; obtain a reply for each dinner."
    },
    "asaba-ryokan": {
      "gf": "Gluten-free meals accepted in August; GF soy sauce question and final restrictions should be reconfirmed in response to the November 1 pre-arrival email.",
      "facts": [
        [
          "Confirmed",
          "November 14–17, three nights, prepaid ¥1,585,450; three dinners and breakfasts included."
        ],
        [
          "Arrival",
          "Check-in from 14:30. Arrive by the confirmed Toyota rental November 14; reply with the road-arrival estimate and confirm parking, dinner and performance timing."
        ],
        [
          "November 14 performance",
          "45-minute Japanese drum performance; ¥6,325 per person included in the prepayment request. Confirm exact start and dinner order."
        ],
        [
          "Departure November 17",
          "Drive the same Toyota to Kyoto; plan an early breakfast and departure, with fuel and handover buffer before the 16:00 Horikawa Shop return."
        ],
        [
          "Optional activities",
          "Washi, tea ceremony, ikebana, massage, e-bikes and guided excursions can be requested; no extra activity is reserved."
        ],
        [
          "Baths / works",
          "Earlier renovation warning has not been resolved in the correspondence reviewed. Ask what facilities will be available rather than inferring that works have overrun."
        ]
      ]
    },
    "hotel-the-mitsui-kyoto": {
      "gf": "Ashly’s ingredient restriction is noted in the October 4 reply. Return the concierge authorization and obtain restaurant-specific acceptance. No TOKI or FORNI booking has been evidenced.",
      "facts": [
        [
          "Stay",
          "November 17–22, five nights confirmed. Breakfast inclusion should be checked against the booked rate."
        ],
        [
          "Concierge",
          "Authorization form requested; November 2 reply says it will be returned, not that it has been received."
        ],
        [
          "Dining",
          "Hiramatsu November 21 at 18:30 confirmed independently. Sushi Iwa November 18 at 18:00 also confirmed; other Kyoto dinners and departure lunch open."
        ],
        [
          "Private onsen",
          "Optional separate reservation; no appointment found."
        ],
        [
          "Sword inquiry",
          "Mitsui replied November 6: Masahiro requires direct website or phone booking; concierge cannot reserve. Hayamitsu November 20 is confirmed."
        ]
      ]
    },
    "kyudo": {
      "location": "Tokyo · actual dojo address to confirm",
      "badges": [
        "Confirmed · Mon 9 at 09:30"
      ],
      "rate": "¥40,000 total for two · paid",
      "facts": [
        [
          "Booking",
          "Kyudo Workshop with Yosui, November 9 at 09:30; two participants, ¥40,000 total paid via Stripe per invoice SI-2026000041."
        ],
        [
          "Before going",
          "Obtain the actual dojo address, arrival instructions and finish time. The invoice’s contact address is not established as the dojo."
        ],
        [
          "Kyoto",
          "No November 21 archery session; that morning is open."
        ]
      ]
    },
    "akiba-fukurou": {
      "badges": [
        "Paid · Sun 8 at 14:00",
        "Arrive 13:50"
      ],
      "rate": "¥7,600 total for two",
      "facts": [
        [
          "Booking",
          "November 8 at 14:00, two adults, paid by card; forwarded confirmation October 21."
        ],
        [
          "Arrival",
          "Arrive at least 10 minutes early; no entry once the session begins."
        ]
      ]
    },
    "heki-kintsugi": {
      "badges": [
        "Confirmed · Thu 19 · 14:00–16:00",
        "Paid · gold for two"
      ],
      "rate": "¥121,770 total · paid",
      "facts": [
        [
          "Booking",
          "Confirmed and paid: November 19, 14:00–16:00, two participants at Akagane Resort Kyoto Higashiyama 1925, 400-1 Kinencho. Wabunka booking 25636; ¥121,770 including real gold for both and English interpretation. Arrive on time; over 15 minutes late is a no-show without refund. Cancellation charges apply from November 9 at 14:00 JST; rescheduling is no longer allowed."
        ],
        [
          "Evidence",
          "<a href=\"https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1b4a8aeb17850e\">Wabunka confirmation</a>"
        ]
      ]
    },
    "picchio-musasabi": {
      "badges": [
        "Unbooked option",
        "Check archery finish before choosing"
      ],
      "rate": "From ¥3,500 per adult · date-dependent",
      "facts": [
        [
          "Published November 9 timing",
          "16:15–17:45; wildlife may affect finish time. Published timing does not establish seats."
        ],
        [
          "Scheduling",
          "November 9 only if the confirmed morning archery and transfers allow. November 8 conflicts with est after return travel."
        ],
        [
          "Booking",
          "Tour, reserved trains and local transfers still to arrange. No confirmation found."
        ]
      ]
    }
  }
};
