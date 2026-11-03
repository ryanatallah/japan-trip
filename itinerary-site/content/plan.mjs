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
  "cost": "$76,000",
  "costBand": "$76k, both flights in",
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
    "mode": "Rail and road · arrangements still to confirm",
    "text": "The route is fixed; the transport reservations are not yet evidenced. Decide the rental-car or driver arrangement before buying dependent train journeys. All journey times on the day sheets are planning estimates unless identified as ticketed.",
    "points": [
      "<strong>Tokyo → Nikko, November 11:</strong> reserve the actual train and hotel transfer, or arrange a driver. The earlier SPACIA X times were a proposal, not tickets.",
      "<strong>Nikko → Asaba, November 14:</strong> allow roughly six hours and aim for 14:30–15:00 arrival. Choose rail via Utsunomiya, Tokyo and Mishima, or a quoted road transfer. Tell Asaba the final arrival time; it requests taxi details at least three days ahead.",
      "<strong>Driving permit:</strong> completed per Ryan’s October update. The car itself remains unconfirmed. Compare a Nikko-area pickup with Mishima return against separate Nikko transport and an Izu-only rental.",
      "<strong>Luggage:</strong> if travelling by rail, arrange Nikko → Mitsui forwarding by November 12/13 and carry three nights of essentials at Asaba. Confirm delivery rather than assuming next-day service.",
      "<strong>Mishima → Kyoto, November 17:</strong> reserve the actual train after reconciling breakfast, rental return and station buffer. The earlier Masahiro inquiry is now a backup, not a second scheduled forge visit.",
      "<strong>Kyoto → Aioi → Hayamitsu, November 20:</strong> reserve a current shinkansen connection and taxis at Aioi in both directions. Aioi’s official guide gives about 70 minutes from Kyoto by shinkansen; the forge says about 20 minutes from Aioi by taxi. With station access, connections and arrival slack, budget roughly 2½–3 hours each way. These are planning allowances, not tickets.",
      "<strong>Kyoto → KIX, November 22:</strong> reserve the station transfer and Haruka. Aim for KIX around 15:30 for the ticketed 18:35 UA34; 13:30 is the hotel-departure target."
    ],
    "ref": [
      "shinkansen-green-car"
    ]
  },
  "hero": "asaba-ryokan",
  "heroCard": [
    "ritz-carlton-nikko",
    "asaba-ryokan",
    "hotel-the-mitsui-kyoto"
  ],
  "pitch": "<strong>Four bases, fifteen nights, both flights ticketed.</strong> Aman Tokyo November 7–11, Ritz-Carlton Nikko November 11–14, Asaba November 14–17 and Hotel The Mitsui Kyoto November 17–22. The Ritz stay was shortened successfully on September 1; there is no double-booked fourth night.<br><br><strong>The booked experiences now shape the days.</strong> Owl café November 8 at 14:00, est at 18:30, Tokyo archery November 9 at 09:30, NARISAWA November 10 at 17:30 and Hiramatsu Kodaiji November 21 at 18:30. Hirata was declined; Kikyo Hayamitsu in Aioi is now provisionally reserved for November 20, 13:30–17:30, subject to host confirmation. Kintsugi has been requested for November 19 only; a new time and acceptance are pending.<br><br><strong>The landscapes remain the reason for the route.</strong> Lower Nikko’s shrines and gorge, three nights at Asaba on Izu, and a Kyoto week with Takao, Ohara, Arashiyama and Kurama as flexible outings. The <a href=\"days.html\">day sheets</a> distinguish fixed bookings, provisional holds and open time, with options for each gap.",
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
      "text": "<strong>NARISAWA 17:30–20:00 — confirmed for two.</strong> Dietary details submitted; kitchen acceptance still to obtain. Morning open. The earlier Akihira inquiry remains a backup; the scheduled sword-making priority is now Hayamitsu on November 20, provisionally reserved.",
      "ref": [
        "narisawa"
      ]
    },
    {
      "date": "Wed 11",
      "where": "→ Okunikko",
      "text": "<strong>Transfer to Ritz-Carlton Nikko.</strong> Three nights confirmed, November 11–14; ¥1,263,127 total. Train/driver and all three dinners still to arrange. Gentle lake afternoon if arrival permits.",
      "ref": [
        "ritz-carlton-nikko",
        "lake-chuzenji"
      ]
    },
    {
      "date": "Thu 12",
      "where": "Nikko",
      "text": "<strong>Lower Nikko sightseeing, flexible:</strong> Rinnoji, Toshogu, the bridge and Kanmangafuchi. Arrange transport and lunch; teppanyaki dinner remains a request.",
      "ref": [
        "nikko-toshogu",
        "kanmangafuchi"
      ]
    },
    {
      "date": "Fri 13",
      "where": "Okunikko",
      "text": "<strong>Choose the lake and villas, a nature outing, or a shorter hotel day.</strong> Confirm seasonal services and route conditions with Ritz. Forward bags if taking trains to Izu; dinner unbooked.",
      "ref": [
        "lake-chuzenji"
      ]
    },
    {
      "date": "Sat 14",
      "where": "→ Shuzenji",
      "text": "<strong>Long transfer to Asaba.</strong> Aim for check-in from 14:30; exact transport not booked. Three-night stay prepaid with dinner and breakfast. Confirm dinner and the Japanese drum performance time.",
      "ref": [
        "asaba-ryokan"
      ]
    },
    {
      "date": "Sun 15",
      "where": "Izu",
      "text": "<strong>Open Izu day.</strong> Choose wasabi country, Fuji viewpoints or a quieter Shuzenji day. Arrange transport; Vieni KANDA Sunday lunch is an unbooked option. Asaba dinner included.",
      "ref": [
        "asaba-ryokan",
        "shuzenji-onsen"
      ]
    },
    {
      "date": "Mon 16",
      "where": "Izu",
      "text": "<strong>Fully flexible.</strong> Optional washi workshop, Asaba-arranged cultural class, the other Izu excursion or ryokan time. These need their own bookings; no extra activity confirmed.",
      "ref": [
        "shuzenji-onsen"
      ]
    },
    {
      "date": "Tue 17",
      "where": "→ Kyoto",
      "text": "<strong>Transfer to Hotel The Mitsui Kyoto.</strong> Five nights confirmed. Afternoon open; the earlier Masahiro inquiry is a backup, with no accepted session. TOKI dinner proposed, not booked.",
      "ref": [
        "hotel-the-mitsui-kyoto"
      ]
    },
    {
      "date": "Wed 18",
      "where": "Kyoto · flexible",
      "text": "<strong>Takao proposed, or Arashiyama and Iwatayama instead.</strong> Friday is now reserved for the Hyogo forge excursion and travel; choose another day for the monkey park. No personal sightseeing reservation anchors today.",
      "ref": [
        "takao",
        "arashiyama-monkeys"
      ]
    },
    {
      "date": "Thu 19",
      "where": "Kyoto · workshop pending",
      "text": "<strong>Kintsugi move requested for November 19 only.</strong> Await Wabunka’s time and acceptance; no noon appointment is assumed. Keep the day flexible and plan nearby sightseeing around the accepted sitting. Ohara/Rurikoin remain alternatives only if the workshop timing permits. Dinner unbooked.",
      "ref": [
        "heki-kintsugi",
        "gion",
        "rurikoin"
      ]
    },
    {
      "date": "Fri 20",
      "where": "Aioi · Hyogo",
      "text": "<strong>Kikyo Hayamitsu Forge, Aioi, Hyogo: 13:30–17:30 provisionally reserved.</strong> Two adults, ¥112,000 total; host confirmation and payment status still pending. Allow the day for Kyoto–Aioi trains and prearranged taxis. Kintsugi is no longer planned today; keep dinner flexible around the return.",
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
      "Activities — budget allowance; Hayamitsu provisional ¥112,000; kintsugi earlier quote ¥121,770 incl. gold, new date pending; owl café ¥7,600 paid",
      "$3,230 allowance"
    ],
    [
      "Ground — Green Car, the six-hour transfer, three days of car on Izu, transfers, takkyubin",
      "$1,300"
    ],
    [
      "Temple entries, illuminations and the Kyoto day pass",
      "$150"
    ]
  ],
  "costTotal": "≈ $76,000",
  "costModel": "Per couple, using the existing planning exchange rate of ¥150/$. Both flights are ticketed and the hotel stays confirmed. Ritz’s corrected three-night total is ¥1,263,127. The roughly $76,000 total remains a planning budget: dining, activities and transport are not a settled invoice. Asaba includes three dinners and three breakfasts. The declined Hirata ¥385,000 authorization was released with no charge; Hayamitsu is provisionally reserved at ¥112,000 for two, with no payment evidenced. Kintsugi is now requested for November 19 only; its earlier ¥121,770 quote includes real gold, but the revised date, time and price are not accepted. Neither workshop is counted as a completed payment. A 5–8% contingency is not included.",
  "verdict": "<strong>The route is settled; the days retain room to choose.</strong> Tokyo has the confirmed dinners, owl café and archery. Nikko is a lake-and-onsen base with lower-elevation shrine and gorge outings; ask the hotel about current weather and routes before choosing the longer nature day. Three prepaid nights at Asaba allow one excursion and one slower or craft-focused day. Kyoto’s main open choices are how to fit the pending workshops around Takao, Ohara, Arashiyama and Kurama.<br><br><strong>Protect the bookings that are real.</strong> Keep est November 8, NARISAWA November 10 and Hiramatsu November 21 at their confirmed times. Hayamitsu now occupies November 20 plus travel, provisionally; kintsugi has been requested for November 19 only. Keep nearby sightseeing flexible until those host replies arrive. The day sheets make those dependencies visible without filling every free hour.",
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
    "sub": "Reviewed November 2, 2026 California time. All appointment times are Japan time. Confirmed bookings are listed separately above.",
    "groups": [
      [
        "Before departure",
        "<strong>Verify est’s card guarantee, obtain NARISAWA kitchen acceptance and return Mitsui’s authorization form.</strong> Reply to Asaba with final dietary details, check-in time and transport. Confirm the archery dojo and finish time."
      ],
      [
        "Await replies",
        "<strong>Kintsugi:</strong> November 19 only requested; await a new sitting and acceptance. <strong>Hayamitsu:</strong> November 20, 13:30–17:30 provisional reservation for two, ¥112,000; await the separate final confirmation and payment instructions. Earlier Akihira / Masahiro inquiries are backups; coordinate rather than accepting a duplicate."
      ],
      [
        "Choose and reserve",
        "<strong>All three Nikko dinners; Kyoto dinners November 17–20; FORNI departure lunch; excursion lunches.</strong> Pair each reservation with written ingredient acceptance. Spa treatments, private onsen, washi and guided outings need separate reservations if selected."
      ],
      [
        "Transport",
        "<strong>Secure actual intercity trains, rental/driver plan, local transfers, luggage forwarding and the Hiramatsu dinner car.</strong> The driving permit is done. Old sample train numbers and times are not bookings. <strong>November 20:</strong> secure Kyoto–Aioi trains and both Aioi taxis after host confirmation; protect the full excursion day."
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
          "Reserve the actual Tokyo arrival and Izu departure arrangements."
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
          "Check-in from 14:30. Reply with estimated arrival and transportation."
        ],
        [
          "November 14 performance",
          "45-minute Japanese drum performance; ¥6,325 per person included in the prepayment request. Confirm exact start and dinner order."
        ],
        [
          "Transfers offered November 1",
          "Shuzenji station ¥3,300 each way; Mishima ¥18,700 each way. Request at least three days ahead; neither is booked."
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
          "Hiramatsu November 21 at 18:30 confirmed independently. Remaining Kyoto dinners and departure lunch open."
        ],
        [
          "Private onsen",
          "Optional separate reservation; no appointment found."
        ],
        [
          "Sword inquiry",
          "Masahiro November 17 13:00 / November 19 09:00 requested; front desk acknowledged forwarding to concierge."
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
        "Move requested · Nov 19 only",
        "New time / host acceptance pending"
      ],
      "rate": "Earlier quote ¥121,770 for two · revised date pending",
      "facts": [
        [
          "Latest request",
          "Ryan emailed November 2: November 19 is now the only available date; November 20 is unavailable."
        ],
        [
          "Time",
          "No new sitting is confirmed or assumed. The old November 20 noon–14:00 request is superseded."
        ],
        [
          "Materials / price",
          "Earlier ¥121,770 quote included real gold for both. Reconfirm the revised date, time and price; no payment evidenced."
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
