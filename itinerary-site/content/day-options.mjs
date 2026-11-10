// Editorial time budgets, not reservations. They leave room for meals, travel and recovery.
// Each window states its dependencies; proposed sightseeing does not become a fixed booking.
// reserve labels are visible text as well as colour, including on small screens and in print.
const option = (name, detail, reserve = '', url = '') => ({ name, detail, reserve, url });
const window = (time, title, note, options) => ({ time, title, note, options });

export const dayOptions = {
  'Fri 6': [window('During the flight', 'Rest and reset', 'Travel day; there is no usable sightseeing block. Departure is 00:20 Friday, so go to SFO Thursday evening.', [
    option('Sleep, then a quiet arrival', 'Keep the first Tokyo morning flexible. Save confirmations and hotel addresses for offline use.'),
    option('Check arrival arrangements', 'Confirm Aman pickup instructions and whether you want the offered spa treatments.', 'Arrange before departure'),
  ])],
  'Sat 7': [
    window('About 06:30–09:30', 'Arrival recovery · room not guaranteed', 'After immigration and the hotel transfer; all times depend on the flight. Spa facilities open 06:30, breakfast 07:00 at an extra charge.', [
      option('Aman pool, showers and breakfast', 'Use the hotel while waiting for the room; early check-in is requested, not guaranteed.'),
      option('Imperial Palace East Gardens', 'A short walk and a gentle outdoor option from 09:00 if you have energy. No advance entry reservation.', '', 'https://www.kunaicho.go.jp/visit/higashigyoen/index.html'),
    ]),
    window('10:00–11:30 held provisionally', 'Spa offer · still open until accepted', 'Aman offered two 90-minute treatments at 10:00. This is not a confirmed appointment.', [
      option('Hot stone + Grounding Ritual', 'Nourishing Ritual is full that morning. Accept the alternatives and reconfirm availability if wanted; otherwise use the time to rest.', 'Reply to Aman spa', 'https://www.aman.com/hotels/aman-tokyo/wellness'),
    ]),
    window('About 12:00–evening', 'No fixed plans after arrival', 'Keep lunch, 15:00 check-in, a nap and dinner flexible.', [
      option('Otemachi and Marunouchi stroll', 'Stay near the hotel and return whenever jet lag wins.'),
      option('Arva or in-room dinner', 'Ask Aman for suitable food. A restaurant table needs a reservation; in-room dining is the easier fallback.', 'Reserve Arva if choosing it'),
    ]),
  ],
  'Sun 8': [
    window('09:00–12:30', 'Morning open before the owls', 'Leave time for lunch and travel to Akihabara; be at the café by 13:50.', [
      option('Meiji Jingu and Omotesando', 'The existing gentle morning plan. Choose the shrine and a short neighbourhood walk rather than trying to cover every stop.'),
      option('Stay local around Marunouchi', 'An easier alternative if still adjusting to the time difference.'),
    ]),
    window('About 15:30–17:15', 'Afternoon open after the owls', '15:30 is a conservative planning estimate, not a verified café finish. Leave time to return, change and reach est before 18:30.', [
      option('Akihabara browse or return to Aman', 'Keep this close and flexible; a hotel break is a useful option before a long dinner.'),
      option('Short Kanda neighbourhood walk', 'Only if the owl session finishes in time; return toward Otemachi well before dinner.'),
    ]),
    window('After dinner', 'Optional short evening', 'Dinner finish is not confirmed. No additional timed commitment is recommended.', [
      option('Hotel lounge or early night', 'Keep the evening easy before tomorrow’s 09:30 archery.'),
    ]),
  ],
  'Mon 9': [
    window('After archery–about 17:30', 'Afternoon open · choose a Tokyo day or Picchio', 'Hold the morning for 09:30 archery. The workshop finish and actual dojo address still need confirmation, so the afternoon start is approximate.', [
      option('Yanaka and old Tokyo', 'A slower neighbourhood and photography afternoon after lunch; no extra appointment needed.'),
      option('Picchio flying-squirrel tour in Karuizawa', 'Published November 9 tour is 16:15–17:45. Allow roughly 2h10 travel each way plus check-in and connection slack. Only choose it after verifying archery finish, dojo location and a feasible train; this would occupy the whole afternoon and return around 20:30 or later.', 'Reserve tour + trains + local transfers', 'https://picchio.co.jp/tour/flying-squirrel'),
      option('Aman downtime or spa', 'An easy Tokyo alternative. Treatments require their own appointment.', 'Reserve any treatment'),
    ]),
    window('Evening', 'Dinner unbooked', 'If choosing Picchio, keep dinner late and flexible; otherwise the evening is fully open in Tokyo.', [
      option('Aman or an Otemachi restaurant', 'Ask the concierge to confirm Ashly’s ingredient requirements before selecting a table.', 'Reserve dinner + confirm menu'),
    ]),
  ],
  "Tue 10": [
  {
    "time": "Morning–about 14:30",
    "title": "Open Tokyo morning",
    "note": "Hayamitsu on November 20 is now the confirmed forge priority. The earlier Akihira inquiry remains a backup with no accepted time or withdrawal evidenced.",
    "options": [
      {
        "name": "TOKYO LUXEY Kamakura backup · not booked",
        "detail": "Coordinate the earlier inquiry before accepting a duplicate. Any Tokyo workshop would also need to protect NARISAWA at 17:30 and hotel changing time.",
        "reserve": "Coordinate earlier inquiry before accepting",
        "url": "https://experience.tokyoluxey.com/travel/japanese-sword-making-experience-in-saitama"
      },
      {
        "name": "Yanaka photography or a Tokyo neighbourhood morning",
        "detail": "The flexible fallback if the forge does not work; keep lunch light before the tasting menu.",
        "reserve": "",
        "url": ""
      }
    ]
  },
  {
    "time": "About 14:30–16:30",
    "title": "Protected return and preparation buffer",
    "note": "Do not fill this with a distant outing. NARISAWA starts at 17:30 and the confirmed dining window ends at 20:00.",
    "options": [
      {
        "name": "Aman break and change",
        "detail": "Allow a generous taxi buffer to Minamiaoyama; confirm the full dietary adaptation beforehand.",
        "reserve": "Obtain NARISAWA kitchen acceptance",
        "url": ""
      }
    ]
  },
  {
    "time": "After 20:00",
    "title": "Last Tokyo evening",
    "note": "No further booking. Pack for Nikko and settle any hotel transport arrangements.",
    "options": [
      {
        "name": "Quiet hotel evening",
        "detail": "Ask Aman to reconfirm tomorrow’s departure and baggage arrangements.",
        "reserve": "",
        "url": ""
      }
    ]
  }
],
  'Wed 11': [
    window('After arrival–15:00 check-in', 'Lake time if the transfer allows', 'The Tokyo–Nikko journey is not booked in the evidence reviewed. An 11:30 hotel arrival is a target under the earlier rail plan, not a guarantee.', [
      option('Hotel lunch and a short lakeshore walk', 'The easiest arrival option; leave bags with the concierge.'),
      option('Kegon Falls', 'A nearby alternative if daylight and weather allow. Ask the hotel about access and current conditions; do not add a mountain hike.'),
    ]),
    window('15:00–dinner', 'No timed activity booked', 'Unpack and keep the first mountain afternoon light.', [
      option('Hotel onsen and lake views', 'A warm, low-effort option after the transfer.'),
      option('Hotel cultural or guided activity', 'Ritz has been asked for its activity programme; do not assume archery, hiking gear or a guide is included.', 'Await Ritz reply + reserve chosen activity'),
    ]),
    window('Dinner and evening', 'First Nikko dinner still open', 'Lakehouse was proposed around 17:30, not confirmed.', [
      option('Lakehouse', 'Ask for the actual sitting and full dietary acceptance; keep a hotel-dining fallback.', 'Reserve dinner'),
      option('Hotel stargazing, if offered', 'Ask whether an activity runs during your stay and whether a separate booking is needed.', 'Ask Ritz in advance'),
    ]),
  ],
  'Thu 12': [
    window('08:00–about 16:00', 'Flexible sightseeing day · no tour booked', 'Rinnoji, Toshogu, Shinkyo and Kanmangafuchi are the proposed route. Opening and last-entry times are constraints, not personal reservations.', [
      option('Shrine precinct and gorge photography', 'Do the paid shrine entries earlier; leave the gorge and outside bridge views for later daylight. Ask Ritz about current route and wildlife conditions.'),
      option('Tamozawa villa instead of another shrine', 'A quieter alternative within the lower-Nikko day; choose rather than stacking every site.'),
      option('Private sightseeing driver / guide and lunch', 'Useful for connecting stops and avoiding a rushed return. Nikko Kanaya lunch is a candidate only, with diet and table to confirm.', 'Arrange driver/guide + lunch'),
    ]),
    window('After return–evening', 'Onsen and unbooked dinner', 'Leave the evening free until the hotel confirms restaurant service.', [
      option('Teppanyaki if the counter is serving', 'November 12 is a request, not a reservation. If unavailable, ask Ritz for an appropriate alternative.', 'Reserve counter + confirm dietary menu'),
      option('Early night at the hotel', 'A useful recovery evening before tomorrow’s lake or nature outing.'),
    ]),
  ],
  'Fri 13': [
    window('Morning–about 15:30', 'Choose one lake or nature outing', 'No guided outing, boat or wildlife bus is reserved. Have Ritz verify seasonal services and conditions before departure.', [
      option('Lake cruise and Embassy Villas', 'A proposed combination; confirm the operating timetable and return transport with Ritz.', 'Check seasonal services beforehand'),
      option('Odashiro / Senjugahama nature outing', 'Alternative to the cruise. Ask about current access, suitable route and a guide; do not treat the old bus times as booked transport.', 'Arrange guide/transport if chosen'),
      option('Kegon Falls and a hotel afternoon', 'The shorter-weather-window fallback.'),
    ]),
    window('About 15:30–evening', 'Open for packing, onsen and dinner', 'Protect time for luggage forwarding and tomorrow’s long transfer.', [
      option('Sushi counter or another hotel dinner', 'No reservation established; Ashly’s preference to avoid raw fish also needs discussing before choosing sushi.', 'Reserve dinner + agree suitable menu'),
      option('Forward bags to Mitsui', 'If travelling by rail, arrange collection by today at the latest and confirm delivery for November 17. Carry three nights of essentials.', 'Arrange hotel-to-hotel forwarding'),
    ]),
  ],
  'Sat 14': [
    window('Morning–mid-afternoon', 'Transfer block · no spare excursion time', 'Nikko to Asaba is a substantial move. Earlier rail times and the Mishima rental are proposals; exact transport must be secured.', [
      option('Keep the transfer simple', 'Reserve the chosen trains, car or driver, and tell Asaba your arrival time. Avoid adding sightseeing between bases.', 'Book transport + notify Asaba'),
    ]),
    window('After check-in–dinner', 'Flexible Asaba arrival', 'Asaba confirms check-in from 14:30. Final arrival, dinner and drum-performance times remain to be agreed.', [
      option('Bath, tea and settle into the ryokan', 'Use the property rather than planning another drive.'),
      option('November 14 Japanese drum performance', 'Asaba included its surcharge in the prepayment request. Confirm the performance time and dinner order.', 'Confirm timing with Asaba'),
      option('Short Shuzenji town walk', 'Only if arrival and the ryokan’s evening schedule leave room.'),
    ]),
  ],
  'Sun 15': [
    window('After breakfast–about 16:30', 'Open Izu day · choose a route', 'Neither a car outing nor a guided excursion is booked. Leave time for Asaba dinner.', [
      option('Wasabi landscape and Joren Falls', 'Use public viewpoints; farm entry or a hands-on visit needs its own arrangement. Ask Asaba about current guided availability rather than relying on the old three-week-notice proposal.', 'Arrange guide/farm access if wanted'),
      option('Fuji views via Darumayama or the west coast', 'Choose according to weather and available transport. This is an alternative to the wasabi route.', 'Secure rental or sightseeing driver'),
      option('Vieni KANDA lunch', 'Sunday lunch is the useful slot under the restaurant’s usual hours. Ask Asaba to verify service and dietary ingredients.', 'Reserve lunch in advance', 'https://vienikanda.com/'),
    ]),
    window('After dinner', 'Optional local evening', 'No fixed evening activity beyond the included ryokan meal.', [
      option('Shuzenji bamboo path and bridges', 'A short town walk if weather and lighting permit.'),
      option('Niji-no-Sato illumination', 'Choose only after checking the actual operating evening and reconciling admission and transport with Asaba dinner.', 'Check event calendar + ticket/transport', 'https://nijinosato-illumination.com/'),
    ]),
  ],
  'Mon 16': [
    window('After breakfast–about 16:30', 'A full unbooked day in Izu', 'The most flexible day of the trip. Choose one craft, excursion or a quiet day at Asaba.', [
      option('Shuzenji washi workshop', '90 minutes; English programme ¥15,000 per person for two or more. Book the actual sitting; paper is shipped after drying.', 'Advance reservation required', 'https://shuzenjiwashi.com/en/workshop/'),
      option('Private tea ceremony or ikebana through Asaba', 'Asaba quoted ¥63,250 per person for either class on November 1. No slot is held.', 'Ask Asaba for availability + reserve'),
      option('The Izu route not taken Sunday', 'Wasabi, coast or Fuji views, depending on weather and transport.', 'Arrange driver/guide if needed'),
      option('Shuzenji temple, bridges and ryokan time', 'The low-commitment alternative; arrange lunch because Vieni KANDA is normally closed Monday.'),
    ]),
    window('After dinner', 'Last Asaba evening', 'Pack and confirm breakfast against the next morning’s actual departure.', [
      option('In-room massage or quiet bath', 'Asaba offers treatments, but no appointment is booked.', 'Reserve any massage'),
    ]),
  ],
  "Tue 17": [
  {
    "time": "Arrival in Kyoto–about 17:00",
    "title": "Afternoon open after the transfer",
    "note": "Train and arrival times are still to book. Hayamitsu on November 20 is now the confirmed forge priority; the earlier Masahiro inquiry is a backup.",
    "options": [
      {
        "name": "Masahiro requires direct booking",
        "detail": "Mitsui’s November 6 reply says Masahiro accepts only direct website or phone bookings. Hayamitsu is confirmed; avoid a duplicate.",
        "reserve": "Coordinate earlier inquiry",
        "url": "https://morinokyoto.jp/masahiro_en/"
      },
      {
        "name": "Mitsui check-in and a local stroll",
        "detail": "The easy fallback; explore near Nijo Castle without a cross-city commitment.",
        "reserve": "",
        "url": ""
      }
    ]
  },
  {
    "time": "Dinner–evening",
    "title": "Kyoto arrival dinner open",
    "note": "TOKI at 18:00 was proposed, not booked.",
    "options": [
      {
        "name": "TOKI dinner at the hotel",
        "detail": "Obtain dietary acceptance and a real sitting before treating this as a plan.",
        "reserve": "Reserve dinner",
        "url": "https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/toki/"
      },
      {
        "name": "Nijo Castle evening event",
        "detail": "Optional after dinner if the 2026 event and entry time fit. A separate evening ticket is needed.",
        "reserve": "Check programme + buy correct evening ticket",
        "url": "https://nijo-jocastle.city.kyoto.lg.jp/event/castlefes2026/?lang=en"
      }
    ]
  }
],
  "Wed 18": [
  {
    "time": "09:00–about 15:00",
    "title": "Takao proposed · day remains flexible",
    "note": "No personal reservation anchors the day. Choose the amount of walking and number of temples on the day.",
    "options": [
      {
        "name": "Jingo-ji and Kozan-ji in Takao",
        "detail": "The existing early-colour plan. Arrange a suitable lunch or picnic through Mitsui.",
        "reserve": "Arrange excursion lunch",
        "url": ""
      },
      {
        "name": "Arashiyama and Iwatayama instead",
        "detail": "Friday now belongs to the Hyogo forge excursion and travel. Make this a west-Kyoto day if the monkey park is the priority, rather than trying to add it before the forge.",
        "reserve": "",
        "url": ""
      }
    ]
  },
  {
    "time": "15:30–18:00",
    "title": "Return, refresh and travel to Sushi Iwa",
    "note": "Dinner confirmed at 18:00. Allow time to change and reach the counter.",
    "options": [
      {
        "name": "Hotel break before dinner",
        "detail": "Keep the afternoon local after returning from the excursion."
      },
      {
        "name": "Sushi Iwa · 18:00",
        "detail": "Confirmed November 18 at 18:00 for two, non-smoking counter, under Atallah Ryan. Course listed at ¥34,650 per person (¥69,300 for two); meal payable at the restaurant. AutoReserve fee ¥8,640 paid separately. Cancellation within 48 hours: 100% plus 10% handling fee. Dietary adaptation and cooked alternatives are not established by this confirmation.",
        "reserve": "Confirmed · verify dietary adaptation"
      }
    ]
  }
],
  "Thu 19": [
  {
    "time": "Morning–13:30",
    "title": "Higashiyama stroll and lunch",
    "note": "Protect the confirmed 14:00 start at Akagane; allow arrival buffer.",
    "options": [
      {
        "name": "Gion and Higashiyama",
        "detail": "Keep sightseeing nearby and lunch before the workshop."
      }
    ]
  },
  {
    "time": "14:00–16:00",
    "title": "Mio Heki kintsugi · confirmed and paid",
    "note": "Confirmed and paid: November 19, 14:00–16:00, two participants at Akagane Resort Kyoto Higashiyama 1925, 400-1 Kinencho. Wabunka booking 25636; ¥121,770 including real gold for both and English interpretation. Arrive on time; over 15 minutes late is a no-show without refund. Cancellation charges apply from November 9 at 14:00 JST; rescheduling is no longer allowed.",
    "options": [
      {
        "name": "Traditional lacquer and real gold",
        "detail": "Two participants, English interpreter included.",
        "reserve": "Confirmed · paid"
      }
    ]
  },
  {
    "time": "Evening, around the accepted sitting",
    "title": "Dinner and recovery time open",
    "note": "Dinner remains unbooked; the workshop is scheduled to finish at 16:00.",
    "options": [
      {
        "name": "Concierge-arranged Japanese dinner",
        "detail": "Nakamura, Gion Sasaki, Mizai or Miyamasou were inquiries only. Require availability, dietary acceptance and terms before booking.",
        "reserve": "Return authorization + secure dinner",
        "url": ""
      },
      {
        "name": "Private onsen at Mitsui",
        "detail": "Book after dinner time is fixed; a treatment or private bath is not included merely because you are staying.",
        "reserve": "Reserve private onsen",
        "url": ""
      }
    ]
  }
],
  "Fri 20": [
  {
    "time": "After breakfast–about 10:15",
    "title": "Short free morning before the Hyogo journey",
    "note": "Protect the departure and station buffer. The illustrative journey derives a 10:35 hotel departure, but the actual train must be reserved first.",
    "options": [
      {
        "name": "Mitsui breakfast and preparation",
        "detail": "An easy hotel morning, with time to prepare suitable lunch and check the workshop instructions.",
        "reserve": "",
        "url": ""
      },
      {
        "name": "Brief Nijo neighbourhood stroll",
        "detail": "Stay near the hotel. Arashiyama is too much to add before this excursion; use November 18 or 21 instead.",
        "reserve": "",
        "url": ""
      }
    ]
  },
  {
    "time": "About 10:15–13:30",
    "title": "Travel and arrival buffer · not free sightseeing time",
    "note": "The workshop is in Aioi, Hyogo. Allow roughly 2½–3 hours from Mitsui including hotel-to-station travel, connections, the shinkansen and the final taxi.",
    "options": [
      {
        "name": "Kyoto Station → Aioi → Rakan-no-Sato",
        "detail": "City guide: about 70 minutes Kyoto–Aioi by shinkansen. Forge: about 20 minutes from Aioi by taxi. Reserve a service that stops at Aioi and arrange the taxi; do not assume the festival shuttle operates November 20.",
        "reserve": "Reserve train + outbound taxi",
        "url": "https://www.hayamitsu.com/地図-map-access/"
      },
      {
        "name": "Lunch before the workshop",
        "detail": "Arrange a suitable packed meal or a convenient lunch before 13:30; no meal is included in the reservation evidence.",
        "reserve": "Arrange suitable lunch",
        "url": ""
      }
    ]
  },
  {
    "time": "13:30–17:30",
    "title": "Kikyo Hayamitsu sword-knife making",
    "note": "Confirmed by the separate November 3 AirRESERVE email: November 20, 13:30–17:30, two participants, ¥112,000 including tax, booking 105PHCHAG. Payment is not evidenced. Arrange language support, arrival requirements, Kyoto–Aioi trains and both taxis.",
    "options": [
      {
        "name": "Tamahagane sword-knife workshop",
        "detail": "Confirmed four-hour workshop. Verify language support, payment and arrival requirements.",
        "reserve": "Confirmed · logistics to arrange",
        "url": "https://www.hayamitsu.com/"
      }
    ]
  },
  {
    "time": "From 17:30 · roughly 2½–3 hours",
    "title": "Return to Kyoto · protect the transfer",
    "note": "Prearrange the rural pickup and actual return train. Connection waits or a later workshop finish can extend the journey.",
    "options": [
      {
        "name": "Forge → Aioi taxi, then shinkansen to Kyoto",
        "detail": "Reserve both directions and allow for the transfer back to Mitsui. Avoid an early fixed Kyoto dinner.",
        "reserve": "Prebook return taxi + train",
        "url": ""
      }
    ]
  },
  {
    "time": "After return, roughly 20:00–21:00 onward",
    "title": "Late flexible dinner or hotel evening",
    "note": "Exact return is not established. Eikandō’s 20:30 last entry cannot be treated as a dependable after-forge plan.",
    "options": [
      {
        "name": "Suitable hotel dinner or in-room meal",
        "detail": "Ask Mitsui about late service and dietary options, then keep timing compatible with the actual train.",
        "reserve": "Arrange late meal with Mitsui",
        "url": ""
      },
      {
        "name": "Relax and prepare for the farewell day",
        "detail": "A hotel evening is a useful option after four hours at the forge and the return journey.",
        "reserve": "",
        "url": ""
      }
    ]
  }
],
  'Sat 21': [
    window('Morning–about 15:30', 'Open excursion time · archery already done in Tokyo', 'No Kyoto archery session. Hiramatsu at 18:30 is the fixed commitment today.', [
      option('Kurama and Kibune early', 'The original north-Kyoto plan. Use an early start, allow for queues and return to Mitsui by about 16:30 to change. Avoid extending this into a late afternoon outing.'),
      option('Arashiyama if not yet visited', 'Alternative to Kurama; Friday is now the Hyogo forge excursion. Start early and allow holiday-weekend queues.'),
      option('Quiet central Kyoto instead', 'A flexible hotel-centred day is a useful option before the farewell dinner.'),
    ]),
    window('About 16:00–18:00', 'Return and prepare for dinner', 'Protect this buffer. Book the hotel car to Hiramatsu and allow for Saturday evening traffic.', [
      option('Mitsui break and change', 'Dinner is confirmed at 18:30, not the older 18:00 proposal.', 'Prebook hotel car'),
    ]),
    window('After dinner, if time remains', 'Optional Kodai-ji illumination', 'Dinner finish is unknown; do not promise an illumination visit after a long tasting menu.', [
      option('Kodai-ji only if last admission is reachable', 'Autumn 2026 night visits run October 23–December 13. Verify last entry and leave dinner unhurried.', 'Check evening admission + return car', 'https://www.kodaiji.com/'),
    ]),
  ],
  'Sun 22': [
    window('After breakfast–about 10:45', 'Last free morning', 'Stay near the hotel. Leave time to pack, check out and get to the proposed 11:30 lunch.', [
      option('Nijo neighbourhood or a short local stroll', 'Use this for a small nearby visit rather than a new excursion.'),
      option('Slow hotel morning', 'Breakfast, packing and a final soak are enough.'),
    ]),
    window('11:30–13:00 proposed', 'Departure lunch still open', 'FORNI is a suggestion, not a reservation. Aim to leave the hotel around 13:30.', [
      option('FORNI', 'Confirm the table, menu and firm finish time; switch to a hotel-prepared takeaway if needed.', 'Reserve lunch + confirm dietary menu', 'https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/forni/'),
    ]),
    window('From about 13:30', 'Airport transfer · no additional outing', 'UA34 is ticketed for 18:35 from KIX. Aim to reach the airport around 15:30; exact Haruka and transfer reservations remain to secure.', [
      option('Hotel car to station + reserved Haruka', 'Leave connection and luggage buffers; do not use the old illustrative train numbers as tickets.', 'Reserve airport transfer + train seats'),
    ]),
  ],
};
