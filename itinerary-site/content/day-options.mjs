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
  'Tue 10': [
    window('Morning–about 14:30', 'Open Tokyo morning', 'Hayamitsu on November 20 is now the scheduled forge priority, provisionally. The earlier Akihira inquiry remains a backup with no accepted time or withdrawal evidenced.', [
      option('Akihira backup, only if still wanted', 'Coordinate the earlier inquiry before accepting a duplicate. Any Tokyo workshop would also need to protect NARISAWA at 17:30 and hotel changing time.', 'Coordinate earlier inquiry before accepting', 'https://experience.tokyoluxey.com/travel/japanese-sword-making-experience-in-saitama'),
      option('Yanaka photography or a Tokyo neighbourhood morning', 'The flexible fallback if the forge does not work; keep lunch light before the tasting menu.'),
    ]),
    window('About 14:30–16:30', 'Protected return and preparation buffer', 'Do not fill this with a distant outing. NARISAWA starts at 17:30 and the confirmed dining window ends at 20:00.', [
      option('Aman break and change', 'Allow a generous taxi buffer to Minamiaoyama; confirm the full dietary adaptation beforehand.', 'Obtain NARISAWA kitchen acceptance'),
    ]),
    window('After 20:00', 'Last Tokyo evening', 'No further booking. Pack for Nikko and settle any hotel transport arrangements.', [
      option('Quiet hotel evening', 'Ask Aman to reconfirm tomorrow’s departure and baggage arrangements.'),
    ]),
  ],
  'Wed 11': [
    window('Morning–10:30', 'Checkout and confirmed Toyota pickup', 'Collect the rental at Tokyo Sta. Nihonbashi Ext. Shop at 10:30. Check out of Aman first and allow time to find the B2 counter.', [
      option('Breakfast and pack at Aman', 'Bring licence, completed IDP and passport / entry evidence. Use a short taxi with luggage to Trust Tower N Wing, 1-8-1 Marunouchi.', 'Prepare documents + luggage'),
    ]),
    window('After pickup–about 15:00', 'Drive to Ritz-Carlton Nikko', 'The rental is confirmed; 3–4 hours driving is an estimate, with handover, lunch and traffic time additional. Target hotel check-in around 15:00.', [
      option('Direct road transfer with a food stop', 'Ask Aman for suitable food and Ritz for current road conditions and parking. SPACIA X and the station transfer are replaced.', 'Confirm parking + route conditions'),
    ]),
    window('After arrival–dinner', 'Gentle lake afternoon; dinner unbooked', 'Leave time to unpack and recover. Lakehouse around 17:30 was proposed, not confirmed.', [
      option('Onsen, lakeshore or nearby Kegon Falls', 'Choose only what arrival time and daylight allow.'),
      option('Lakehouse dinner', 'Obtain the actual sitting and dietary acceptance; keep a hotel-dining fallback.', 'Reserve dinner'),
    ]),
  ],
  'Thu 12': [
    window('08:00–about 16:00', 'Flexible sightseeing day · no tour booked', 'Rinnoji, Toshogu, Shinkyo and Kanmangafuchi are the proposed route. Opening and last-entry times are constraints, not personal reservations.', [
      option('Shrine precinct and gorge photography', 'Do the paid shrine entries earlier; leave the gorge and outside bridge views for later daylight. Ask Ritz about current route and wildlife conditions.'),
      option('Tamozawa villa instead of another shrine', 'A quieter alternative within the lower-Nikko day; choose rather than stacking every site.'),
      option('Rental-car sightseeing and optional guide', 'The Toyota is confirmed. Check parking and road conditions; a guide and Nikko Kanaya lunch need separate reservations and dietary agreement.', 'Arrange lunch + guide if wanted'),
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
    window('About 15:30–evening', 'Open for packing, onsen and dinner', 'Pack for tomorrow’s long drive; the same confirmed rental continues to Asaba and Kyoto.', [
      option('Sushi counter or another hotel dinner', 'No reservation established; Ashly’s preference to avoid raw fish also needs discussing before choosing sushi.', 'Reserve dinner + agree suitable menu'),
      option('Pack for the road transfer', 'Carry bags in the confirmed rental if they fit. Forwarding to Mitsui is optional; confirm delivery only if choosing that service.', 'Check luggage fit + optional forwarding'),
    ]),
  ],
  'Sat 14': [
    window('Morning–mid-afternoon', 'Transfer block · no spare excursion time', 'Nikko to Asaba is a substantial move. The Toyota is confirmed. Allow roughly 6–7 hours with breaks, leaving around 08:00 to target 14:30–15:00 arrival.', [
      option('Keep the transfer simple', 'Drive the same car directly to Asaba. Confirm road conditions, parking and arrival; keep sightseeing off this long transfer day.', 'Notify Asaba + confirm route'),
    ]),
    window('After check-in–dinner', 'Flexible Asaba arrival', 'Asaba confirms check-in from 14:30. Final arrival, dinner and drum-performance times remain to be agreed.', [
      option('Bath, tea and settle into the ryokan', 'Use the property rather than planning another drive.'),
      option('November 14 Japanese drum performance', 'Asaba included its surcharge in the prepayment request. Confirm the performance time and dinner order.', 'Confirm timing with Asaba'),
      option('Short Shuzenji town walk', 'Only if arrival and the ryokan’s evening schedule leave room.'),
    ]),
  ],
  'Sun 15': [
    window('After breakfast–about 16:30', 'Open Izu day · choose a route', 'The Toyota rental is confirmed and available. Choose a self-drive route; guided visits remain unbooked. Leave time for Asaba dinner.', [
      option('Wasabi landscape and Joren Falls', 'Use public viewpoints; farm entry or a hands-on visit needs its own arrangement. Ask Asaba about current guided availability rather than relying on the old three-week-notice proposal.', 'Arrange guide/farm access if wanted'),
      option('Fuji views via Darumayama or the west coast', 'Use the confirmed rental and choose according to weather. This is an alternative to the wasabi route; check road access and parking.'),
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
      option('The Izu route not taken Sunday', 'The rental is available for wasabi country, coast or Fuji views according to weather. Guided visits need their own arrangement.', 'Arrange guide if wanted'),
      option('Shuzenji temple, bridges and ryokan time', 'The low-commitment alternative; arrange lunch because Vieni KANDA is normally closed Monday.'),
    ]),
    window('After dinner', 'Last Asaba evening', 'Pack and confirm breakfast against the next morning’s actual departure.', [
      option('In-room massage or quiet bath', 'Asaba offers treatments, but no appointment is booked.', 'Reserve any massage'),
    ]),
  ],
  'Tue 17': [
    window('Around 08:00–16:00', 'Drive to Kyoto and return the Toyota', 'Leave Asaba early. Allow roughly 5–6 hours on the road plus breaks, fuel and return paperwork; the Horikawa Shop return is booked for 16:00.', [
      option('Direct drive with food and rest stops', 'Target Kyoto around 14:00–15:00 and coordinate Mitsui luggage drop. No Mishima return or train is needed; do not add a forge workshop.', 'Arrange early breakfast + check route'),
    ]),
    window('After rental return–dinner', 'Mitsui check-in and a quiet arrival', 'The 15:00 room time is a check-in opening, not a guaranteed arrival. Keep sightseeing flexible until the car is returned.', [
      option('Hotel time or a short Nijo neighbourhood walk', 'Take a short taxi or walk from Horikawa Shop after returning the car. Allow time to change before dinner.'),
      option('Coordinate the earlier Masahiro inquiry', 'It remains a backup with no accepted session or withdrawal. Hayamitsu November 20 is the provisional priority.', 'Coordinate earlier inquiry'),
    ]),
    window('Dinner–evening', 'Kyoto arrival dinner open', 'TOKI at 18:00 was proposed, not booked.', [
      option('TOKI dinner at Mitsui', 'Obtain dietary acceptance and an actual sitting.', 'Reserve dinner', 'https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/toki/'),
      option('Local evening or hotel recovery', 'Keep this optional after the long drive; the rental has now ended.'),
    ]),
  ],
  'Wed 18': [
    window('09:00–about 15:00', 'Takao proposed · day remains flexible', 'No personal reservation anchors the day. Choose the amount of walking and number of temples on the day.', [
      option('Jingo-ji and Kozan-ji in Takao', 'The existing early-colour plan. Arrange a suitable lunch or picnic through Mitsui.', 'Arrange excursion lunch'),
      option('Arashiyama and Iwatayama instead', 'Friday now belongs to the Hyogo forge excursion and travel. Make this a west-Kyoto day if the monkey park is the priority, rather than trying to add it before the forge.'),
    ]),
    window('About 15:30–evening', 'Afternoon and dinner open', 'Return time depends on the excursion. No Kyoto tasting-menu table is confirmed for tonight.', [
      option('Mitsui thermal facilities or private onsen', 'The private onsen needs a separate reservation; a hotel recovery afternoon is the flexible alternative.', 'Reserve private onsen if wanted'),
      option('Nijojo Furuta or a concierge-arranged dinner', 'Candidate only; check dietary acceptance and actual seats. Complete Mitsui’s authorization form for concierge bookings.', 'Reserve dinner + return authorization'),
    ]),
  ],
  'Thu 19': [
    window('Daytime · time to confirm', 'Kintsugi move requested for November 19 only', 'Ryan has told Wabunka that November 20 is no longer available. No November 19 sitting has been accepted; do not assume the old noon–14:00 request carries over.', [
      option('Mio Heki kintsugi with real gold', 'Keep the day flexible until the host accepts a date and time. Earlier quote ¥121,770 for two including real gold; revised arrangements and payment remain unconfirmed.', 'Await Wabunka date, time and price', 'https://wabunka-lux.jp/experiences/en_hifumi-akagane/'),
      option('Gion and Higashiyama around the workshop', 'Nearby walks or a hotel break are the easiest options to fit once the Akagane appointment is known.'),
      option('Ohara and Sanzen-in, if timing permits', 'A larger alternative outing; do not schedule it over the eventual workshop. It is a fallback if kintsugi cannot be arranged.'),
      option('Rurikoin at Yase', 'Only with a real timed ticket compatible with the accepted workshop. No ticket found; this is an optional northern-Kyoto alternative.', 'Timed reservation required', 'https://rurikoin.komyoji.com/'),
    ]),
    window('Evening, around the accepted sitting', 'Dinner and recovery time open', 'Kikunoi declined the requested dinners. No replacement tasting menu or kintsugi finish time is confirmed.', [
      option('Concierge-arranged Japanese dinner', 'Nakamura, Gion Sasaki, Mizai or Miyamasou were inquiries only. Require availability, dietary acceptance and terms before booking.', 'Return authorization + secure dinner'),
      option('Private onsen at Mitsui', 'Book after dinner time is fixed; a treatment or private bath is not included merely because you are staying.', 'Reserve private onsen'),
    ]),
  ],
  'Fri 20': [
    window('After breakfast–about 10:15', 'Short free morning before the Hyogo journey', 'Protect the departure and station buffer. The illustrative journey derives a 10:35 hotel departure, but the actual train must be reserved first.', [
      option('Mitsui breakfast and preparation', 'An easy hotel morning, with time to prepare suitable lunch and check the workshop instructions.'),
      option('Brief Nijo neighbourhood stroll', 'Stay near the hotel. Arashiyama is too much to add before this excursion; use November 18 or 21 instead.'),
    ]),
    window('About 10:15–13:30', 'Travel and arrival buffer · not free sightseeing time', 'The workshop is in Aioi, Hyogo. Allow roughly 2½–3 hours from Mitsui including hotel-to-station travel, connections, the shinkansen and the final taxi.', [
      option('Kyoto Station → Aioi → Rakan-no-Sato', 'City guide: about 70 minutes Kyoto–Aioi by shinkansen. Forge: about 20 minutes from Aioi by taxi. Reserve a service that stops at Aioi and arrange the taxi; do not assume the festival shuttle operates November 20.', 'Reserve train + outbound taxi', 'https://www.hayamitsu.com/地図-map-access/'),
      option('Lunch before the workshop', 'Arrange a suitable packed meal or a convenient lunch before 13:30; no meal is included in the reservation evidence.', 'Arrange suitable lunch'),
    ]),
    window('13:30–17:30 held provisionally', 'Kikyo Hayamitsu sword-knife making', 'Two people, ¥112,000 total including tax. AirRESERVE explicitly says this is provisional and not yet a final reservation; no payment is evidenced.', [
      option('Tamahagane sword-knife workshop', 'Protect this four-hour block while awaiting the separate final confirmation. Confirm language support and arrival requirements with the forge.', 'Await final host confirmation', 'https://www.hayamitsu.com/'),
    ]),
    window('From 17:30 · roughly 2½–3 hours', 'Return to Kyoto · protect the transfer', 'Prearrange the rural pickup and actual return train. Connection waits or a later workshop finish can extend the journey.', [
      option('Forge → Aioi taxi, then shinkansen to Kyoto', 'Reserve both directions and allow for the transfer back to Mitsui. Avoid an early fixed Kyoto dinner.', 'Prebook return taxi + train'),
    ]),
    window('After return, roughly 20:00–21:00 onward', 'Late flexible dinner or hotel evening', 'Exact return is not established. Eikandō’s 20:30 last entry cannot be treated as a dependable after-forge plan.', [
      option('Suitable hotel dinner or in-room meal', 'Ask Mitsui about late service and dietary options, then keep timing compatible with the actual train.', 'Arrange late meal with Mitsui'),
      option('Relax and prepare for the farewell day', 'A hotel evening is a useful option after four hours at the forge and the return journey.'),
    ]),
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
