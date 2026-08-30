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
    id: 'nikko-fourth-night',
    kind: 'decide',
    title: 'The night of 14 November is booked twice',
    by: 'Free to fix until 14 October. Expensive after',
    affects: 'Fri 13 – Sat 14',
    entity: 'ritz-carlton-nikko',
    body: `<strong>Two hotels are holding you on the same night.</strong> The Ritz-Carlton confirmation runs <strong>Wed 11 to Sun 15</strong> — four nights, with the 14th priced at ¥332,500. Asaba is booked and <em>paid</em> from <strong>Sat 14</strong>. You cannot be at Lake Chuzenji and on the Izu peninsula at once, and the Asaba money is already gone.<br><br>So the Nikko stay has to come down to <strong>three nights, checking out on Saturday the 14th</strong>. That is also the morning the six-hour transfer starts, which is the shape the day sheets are now built on.<br><br><strong>The saving is about ¥420,900 — roughly $2,806.</strong> Three nights is ¥997,500 of room, ¥149,625 of service and about ¥115,600 of tax, so around <strong>¥1,262,700</strong> against the ¥1,683,650 currently confirmed. Treat the tax as computed rather than quoted until Marriott re-issues.`,
    next: 'Call Marriott, cut the stay to three nights checking out Saturday 14 November, and get a re-issued confirmation. Do it before 14 October — after that the cancellation policy charges the full ¥1,330,000 room total. Ask about a dining-inclusive rate for the three remaining nights in the same call.',
  },
  {
    id: 'return-flight',
    kind: 'decide',
    title: 'The flight home is the last unbought thing',
    by: 'Prices only go one way from here',
    affects: 'Sun 22',
    body: `The outbound went out as a <strong>one-way on ANA</strong> rather than as the multi-city ticket the old plan assumed — NH107, ticketed, PNR E4HX5B, $9,482.60 for the two of you, and <strong>non-refundable</strong>. That is a good seat at a fair price and it is done.<br><br>But it means <strong>the return has to be bought on its own</strong>, and it has not been. The trip ends in Kyoto; United is the only SFO–KIX nonstop, departing <strong>18:35</strong> on the winter schedule that starts 25 October and landing at SFO the same Sunday. Everything on the last day — the 11:30 lunch, the 13:30 departure, the Haruka — is built on that time.<br><br>It is also the only line in the cost table with no number in it, which is why the total reads <em>$66,200 plus the return flight</em>.`,
    next: 'Buy KIX→SFO for Sunday 22 November, and verify the 18:35 departure at ticketing — the summer schedule runs three hours earlier and the whole last day is derived from it.',
  },
  {
    id: 'nikko-izu-transfer',
    kind: 'decide',
    title: 'Saturday 14 November costs you the whole day, and the car does not buy it back',
    by: 'Before you confirm Asaba — the arrival time is part of that booking',
    affects: 'Sat 14',
    body: `Lake Chuzenji sits at <strong>1,269m in Tochigi</strong>; Shuzenji is on the <strong>Izu peninsula in Shizuoka</strong>. Between them is the whole Kanto plain and the city of Tokyo. It is the longest move of the trip by a wide margin, it lands on a ryokan check-in day, and it is <strong>about six hours door to door however you do it</strong>.<br><br><strong>The route is JR rather than Tobu</strong> — not because Tobu is slower on paper, but because it puts you down at <em>Asakusa</em> and you then cross Tokyo with two cases. JR lands you inside Tokyo Station, on the same concourse as the train you need next. <em>The bus down the Irohazaka is 38–40 minutes — the 50 quoted everywhere is the uphill run — and every Kodama stops at Mishima, where the Toyota desk is two minutes from the platform.</em><br><br>
      <table class="compare compare-legs"><thead><tr><th>Leg</th><th>Time</th><th>Fare</th></tr></thead><tbody>
      <tr><th scope="row">Bus down the Irohazaka to JR Nikko</th><td>~50 min</td><td>¥1,250</td></tr>
      <tr><th scope="row">JR Nikko → Utsunomiya → Tokyo</th><td>~1h40</td><td>¥5,500</td></tr>
      <tr><th scope="row">Kodama to Mishima</th><td>~50 min</td><td>¥4,400</td></tr>
      <tr><th scope="row">Collect the car, drive to Asaba</th><td>~1h15</td><td>—</td></tr>
      </tbody></table><br>
      <strong>Leave at 08:20 and you are at Asaba by 14:30</strong>, the earliest check-in they take, with three and a half hours of slack before the 18:00 deadline. That is the right amount on a day with five connections. About ¥11,250 a head.<br><br><strong>Picking the car up here costs nothing in time</strong>, because Mishima is on the route whether you rent or not — and it is what makes Monday on Izu possible at all. The alternative last leg is the <strong>Odoriko</strong>, which runs straight through from Tokyo to Shuzenji with no change at Mishima; it is elegant, but it goes twice a day and the connection at Tokyo is five minutes. Hold it as the wet-weather fallback.<br><br><strong>A hired car for the whole leg was checked and rejected.</strong> It is 330–360 km via the Ken-Ō-dō to skirt Tokyo — five to six hours moving, six to seven realistically — so it is <em>no faster than the train</em>, at <strong>¥150,000–250,000</strong> against about ¥22,500 for the two of you. It buys door-to-door luggage handling and nothing else, and forwarding the bags achieves the same thing for $40.<br><br><strong>The one genuine piece of luck:</strong> the notorious Irohazaka jam — three hours to cover twenty minutes, and it happens on weekdays too — is an <em>October</em> problem. By 15 November the colour at lake level is finished and the traffic with it. It is still a weekend day, so go before nine rather than after ten.`,
    next: 'Leave at 08:20 for a 14:30 arrival, and forward the luggage to Kyoto so the day is done on overnight bags. Book the rental at Mishima for collection that afternoon — three days now, not two. Tell Asaba you expect to arrive about 14:30 — the draft reply asks. Do not book a hired car for the whole leg.',
  },
  {
    id: 'nikko-cancel-deadline',
    kind: 'decide',
    title: 'The Ritz-Carlton becomes non-refundable on 14 October',
    by: '23:59 Japan time, Wednesday 14 October 2026',
    affects: 'Wed 11 – Sat 14',
    entity: 'ritz-carlton-nikko',
    body: `<strong>This is the hardest date on the calendar and the only one with a seven-figure yen number attached.</strong> Free cancellation runs to 23:59 local on 14 October, twenty-eight days before arrival. After that the penalty is <strong>¥1,330,000</strong> — the room charge for all four nights, the entire stay.<br><br>It matters because the Nikko leg is the part of the replan with the least evidence behind it. It was chosen because it was available, not because it was researched, and two of its assumptions are worth testing before that date passes: that <strong>Okunikko in mid-November is somewhere you want to be at all</strong>, and that a room-only rate at 1,269m, in an area with almost no other dining, is workable for a coeliac guest.`,
    next: 'Put 7 October in the calendar — one week of slack — as the day the Nikko leg is settled: the fourth night cut, the dining question answered, and the stay confirmed at three. Everything on this page that bears on Nikko should be answered by then.',
  },
  {
    id: 'alps-or-coast',
    kind: 'decide',
    title: 'The Alps, or the crab coast',
    affects: 'Sat 14 – Mon 16',
    entity: 'beniya-mukayu',
    body: `<strong>Tobira Onsen Myojinkan was the plan; Beniya Mukayu in Kaga was the alternative</strong>, and on these dates it made a real case. Snow crab opens 6 November, so 14–16 November is already in season; Kenrokuen in Kanazawa peaks mid-November, which you would have caught almost exactly; and it is two hours from Kyoto rather than three.<br><br>What the coast would have cost you is the mountains — 1,000m, Matsumoto Castle on the way in, and a valley with nothing in it. What it would have bought is a shorter transfer on both sides and a stop that is warm rather than near freezing at night.`,
    resolved: `<strong>The Alps.</strong> And the reading of the coast was right, for a firmer reason than an impression: Kaga's own tourism board leads Yamashiro Onsen with its two public bathhouses — <strong>Sōyu and Ko-Sōyu</strong>, rebuilt in 2008 and 2010 — and in that town the bathhouses <em>are</em> the sight. What else was there was Kutani porcelain and Kaga yuzen, and <strong>those craft modules had already been cut from this itinerary</strong>. That left crab, Kenrokuen and a shorter train — good things, but not a reason to spend three nights somewhere.<br><br><strong>One correction, and it matters at booking.</strong> Private onsen is not an argument for the Alps — if anything it runs the other way. <em>Mukayu is the one with the better private baths</em>: 16 rooms against Myojinkan's 40, and terrace suites with their own outdoor hot-spring tubs. At Myojinkan the three named baths are all communal, and <strong>the riverside open-air bath is mixed-gender</strong> — sunrise to 23:00, women-only only between 19:30 and 21:30. A private bath there means booking a room that has one, and that is now its own item on this page.<br><br>The argument that does hold is the one you led with. It is a gorge at 1,050m inside a quasi-national park, the walking starts at the front door, and it is a landscape that appears nowhere else on the trip. Kaga is a hot-spring town; Tobira is a mountain with an inn on it.<br><br><strong>Overtaken on 23 August 2026.</strong> Neither of them happened. Gora Kadan came back full for 11–13 November, and rebuilding the middle of the trip around what could actually be held moved it to <strong>Nikko and the Izu peninsula</strong> — so the Alps and the crab coast both left the itinerary, and this argument decided nothing in the end. Kept because the reasoning about what a hot-spring town is versus what a mountain is still applies to the stops that replaced them.`,
  },
  {
    id: 'hakone-departure',
    kind: 'decide',
    title: 'Which Myojinkan shuttle — 15:15 or 16:30',
    by: 'At the point you book the shuttle',
    affects: 'Sat 14',
    body: `The inn's shuttle leaves Matsumoto Station at <strong>15:15 and 16:30 only</strong>, by advance reservation. Gora Kadan to Matsumoto is four legs — Odawara, Nagoya, Matsumoto — and the arithmetic puts the latest possible departure that still catches the 15:15 at <strong>10:35</strong>, twenty-five minutes before check-out, with no slack at all on three connections.<br><br><strong>The 15:15</strong> means leaving Gora at about 10:00 and buys an hour of daylight at 1,050m before dinner. <strong>The 16:30</strong> lets you use the full check-out and puts you in the inn about 17:10, more or less straight into the bath and then dinner.`,
    resolved: `<strong>Overtaken on 23 August 2026 — there is no Hakone and no Myojinkan.</strong> The shuttle question died with the Alps leg. It is kept because <em>the shape of the problem came back immediately in a worse form</em>: the replan's Saturday 14 November transfer runs from Lake Chuzenji at 1,269m to Shuzenji on the Izu peninsula, which is a longer chain across more connections than this one ever was. See the new transfer item for what replaced it.`,
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
    resolved: `<strong>Stay put.</strong> It is the third of three nights and the last day before Kyoto, and it is the only day of seventeen with nothing to catch. Both mountain versions survive as a fair-weather impulse — neither needs booking — but the day is no longer built on either.<br><br><strong>What that means in practice, since Tobira is a <em>one-inn onsen</em> and there is no village to walk into.</strong> Four baths, and rotating them is most of a day: the standing bath <strong>Setsugetsuka</strong> (雪月花), where you stand chest-deep rather than sit; the large indoor-and-outdoor <strong>Hakuryu</strong> (白龍), gender-separated and open 24 hours; the reclining bath <strong>Kuuyama</strong> (空山); and the <strong>riverside open-air bath</strong> down and to the left of the entrance — mixed-gender, sunrise to 23:00, women-only 19:30–21:30.<br><br><strong>On foot, and this is close to the whole list.</strong> The inn keeps a <strong>walking path along the Usukawa</strong> with benches and tables set along it; in mid-November that is a bare-branch gorge with the water loud in it and cedar and pine still green above. Indoors the property is hung as a gallery — Japanese painting and modern sculpture — so a slow circuit is a genuine hour. Then <strong>Treatment Room Natura</strong> for a massage, the <strong>library</strong>, the second-floor river terraces, the rooftop terrace with its tea service, and <strong>Salon 1050</strong> for pastry in the afternoon. The lobby shop runs 08:00–12:00 and 16:30–21:30.<br><br><strong>Two things the inn advertises that are out of season on the 16th.</strong> Picking vegetables in its own kitchen garden, which at 1,050m is finished by mid-November; and <strong>iwana fishing in the stream, which is closed outright</strong> — Nagano's mountain-stream season runs 16 February to 30 September. Neither can carry the day, so do not let a brochure suggest otherwise.<br><br><strong>If one of you wants a real walk.</strong> The <strong>Hachibuse-yama</strong> trailhead is about 300m up the road, past the Hinoki-no-yu day-bath. It is 5.5km and roughly five and a half hours round trip to a 1,929m summit with a 360° view of the Northern Alps — but that is a mountain, not a stroll, and in mid-November at that altitude it is a winter one. It is the wrong day for it; the river path is the walk.<br><br><strong>Overtaken on 23 August 2026.</strong> The inn is not on the trip. The stay-put day is, though — the argument that the third night of three is the wrong one to spend on five hours of buses transfers intact to the ryokan that replaced it.`,
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
    id: 'idp',
    kind: 'book',
    title: 'The driving permit is a physical booklet, and nothing else works',
    by: 'Start it today — there is no fast version',
    affects: 'Sat 14 – Tue 17',
    body: `Three days of car on Izu is what makes the wasabi terraces, Darumayama and the Fuji coast reachable at all — the buses out there are sparse enough that the tourism board says so itself. But the permit is the gate.<br><br><strong>Japan accepts only the 1949 Geneva Convention IDP.</strong> The 1968 Vienna version — which is what many countries now issue — is <em>not valid here</em>. In the United States only <strong>AAA and AATA</strong> may issue one; every online "IDP" service is worthless. It is $20, it is <strong>printed and mailed as a physical booklet</strong>, and there is no digital version, no PDF and no app. AAA's own guidance is that if you need it inside seven business days you must walk into a branch.<br><br>At the counter you need <strong>all three together</strong> — the IDP, the physical home licence, and the passport. Any one missing and there is no car.`,
    next: 'Walk into a AAA branch this week with two passport photos and get it issued over the counter. Then book the car: Toyota Rent a Car at the Mishima shinkansen exit, 08:00–20:00, for 14–17 November — and confirm those exact dates directly, because the branch calendar shows scattered closures.',
  },
  {
    id: 'myojinkan-room-bath',
    kind: 'book',
    title: 'A private bath at Myojinkan is a room type, not a request',
    by: 'At reservation — it cannot be added afterwards',
    affects: 'Sat 14 – Mon 16',
    body: `This fell out of settling the Alps against the coast. <strong>Myojinkan's three named baths are all communal</strong> — the standing bath Setsugetsuka, the large Hakuryu and the reclining Kuuyama — and <strong>the riverside open-air bath is mixed-gender</strong>, sunrise to 23:00, with a women-only window of only 19:30–21:30.<br><br>The private option is the room itself. Just some of the forty have their own bath — the <em>iyashi-buro</em> rooms and the SPA Living suite — in hinoki, cypress or stone, on undiluted spring water straight from the source. There is no reservable kashikiri bath here, so booking a room without one and asking on arrival gets you nothing.`,
    resolved: `<strong>Overtaken on 23 August 2026.</strong> Myojinkan is not on the trip. The lesson is, though, and it applies directly to <strong>Asaba</strong>: at that ryokan too the private bath is a room type rather than a request, its public indoor baths are closed for renovation, and only <strong>Villa Tenko</strong> has a true private outdoor rotenburo. The same instruction, at a different inn.`,
  },
  {
    id: 'loka-final-lunch',
    kind: 'book',
    title: 'Reserve the last lunch at Gion Loka',
    by: 'With the rest of the Kyoto bookings',
    affects: 'Sun 22',
    body: `The departure day resolved to a relaxed lunch in the hotel's own restaurant. <strong>Gion Loka serves 12:00–15:00, last order 13:30, with no regular closing day</strong>, at about ¥7,800 a head for the seasonal course — so a 12:00 seating leaves 14:20 comfortably clear.<br><br>It is a set kaiseki course, which means it carries the same constraint as every other set menu on this trip: <strong>the gluten-free brief goes in at reservation</strong>, and cannot be raised on the day.`,
    resolved: `<strong>Overtaken on 23 August 2026.</strong> Gion Loka is SOWAKA's restaurant, and Kyoto moved to Hotel The Mitsui in Nakagyo. The reasoning survives the move — the last meal of a trip should have no travel after it — so the answer is still a lunch in the hotel you are checking out of, just a different hotel. Re-opened as its own item.`,
  },
  {
    id: 'gora-kadan-halfboard',
    kind: 'book',
    title: 'Book Thursday at Gora Kadan room-and-breakfast',
    by: 'At reservation',
    affects: 'Thu 12',
    body: `The stay is three nights half board, but <strong>only two of those dinners are eaten there</strong> — Thursday is Itoh Dining by Nobu, off the property. Ryokan rates are per person with dinner included, so unless Thursday is booked room-and-breakfast you are paying for a kaiseki you will not eat.<br><br>Most ryokan will do this on request. It is the single cheapest correction on the trip and it has to happen at reservation, not on arrival.`,
    resolved: `<strong>Overtaken on 23 August 2026.</strong> No Gora Kadan. The trap itself is live at every half-board stay on the replan, and the arithmetic is worse now: Asaba's rate is per person per night <em>with</em> the omakase kaiseki, so any night you eat elsewhere is a kaiseki bought and not eaten at up to ¥364,800 a head.`,
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
    title: 'Forward the big bags Nikko → Kyoto, straight past Izu',
    by: 'Arrange at check-in in Nikko on the 11th',
    affects: 'Wed 11 – Tue 17',
    body: `This mattered on the old route. It matters more on this one. <strong>The 14th is up to five connections</strong> and the Izu stop is three nights — there is no version of this where two large cases should travel with you.<br><br>Send them <strong>Nikko → Hotel The Mitsui Kyoto</strong>, skipping Izu entirely, and do Shuzenji on overnight bags. Takkyubin is hotel to hotel, next day, about $15–22 a bag.<br><br>The one thing to check is the lead time: Okunikko is a mountain address and Kyoto is a long haul, so <strong>next-day is not guaranteed from Chugushi</strong> the way it is from a city hotel. Sending on the <strong>12th</strong> rather than the 14th costs nothing and buys two days of slack.`,
    next: 'Ask the Ritz-Carlton to arrange it at check-in on the 11th, for collection on the 12th, addressed to Hotel The Mitsui Kyoto for the 17th. Confirm the transit time from that address rather than assuming next-day.',
  },

  // ── waiting ────────────────────────────────────────────────────────
  {
    id: 'ritz-restaurant-closure',
    kind: 'waiting',
    title: 'The hotel restaurant may be shut on your first two nights',
    by: 'Ask now — it changes which nights the kaiseki is possible',
    affects: 'Wed 11, Thu 12',
    body: `<strong>The Japanese Restaurant is the good one</strong> — three separate counters, kaiseki, Edomae sushi and teppanyaki, chosen when you book. It is also, on the evidence, the kitchen with the better allergen literacy of the two: its Japanese-language intake asks for the severity 「お出汁を含むなど」, whether dashi counts, which is exactly the right granularity.<br><br><strong>And its own FAQ reports it closed Wednesdays and Thursdays.</strong> That is 11 and 12 November — the first two nights of three. The property's other pages list no closing day at all, so the two sources contradict each other and neither can be checked without asking.<br><br>It matters more here than it would anywhere else, because there is very little alternative dining at 1,269m on a November night. If the closure holds, Friday the 13th is the <em>only</em> night the kaiseki or the sushi counter is possible, and Wednesday and Thursday are Lakehouse or <strong>Chez Hoshino</strong>, the independent French three minutes away.`,
    next: 'Ask the hotel directly which nights each restaurant serves between 11 and 14 November, and book all three dinners in the same message as the gluten-free brief. While you are asking: whether a dining-inclusive rate exists for those nights, and whether stargazing runs in mid-November — at 1,269m in the driest month of the year it is the best thing they might say yes to.',
  },
  {
    id: 'asaba-two-nights',
    kind: 'waiting',
    title: 'Asaba offered one night. The trip needs two',
    by: 'Blocks everything between Nikko and Kyoto',
    affects: 'Sat 14 – Tue 17',
    entity: 'asaba-ryokan',
    body: `<strong>This is the open question the middle of the trip hangs on.</strong> You check out of the Ritz-Carlton on Sunday the 15th and into Hotel The Mitsui on Tuesday the 17th. That is <strong>two nights</strong>, the 15th and the 16th, and both are already paid for at either end — the flights and the Kyoto week do not move.<br><br>Asaba's reply offered <strong>the 15th in Villa Tenko</strong> at ¥364,800 per person, <em>or</em> <strong>the 16th in Moegi</strong> at ¥232,800 per person. The 14th is full. But the message opened with "we are almost full and there is necessary to have a room change" — which reads like <em>both nights are available if you move rooms on the 16th</em>, not like a choice between them. The rest of the sentence — "or other dates near the Nov. 15th" — reads the other way.<br><br><strong>It is genuinely ambiguous, and the two readings cost differently.</strong> Both nights is ¥1,195,200, about $7,970. One night in Tenko is ¥729,600. One night in Moegi is ¥465,600 — and leaves a night to fill somewhere else, on a route where the two ends are already fixed.`,
    resolved: `<strong>Three nights, and the answer was better than the question.</strong> Asaba came back with <strong>14–17 November</strong> — the 14th, which had been reported full, plus both of the nights that were offered. Booked and paid in full on 27 August through JTB: <strong>¥1,585,450</strong>, receipt JTBBP0011266918.<br><br>Two consequences, both improvements. The Izu stop goes from two nights to three, which turns one crowded car day into two unhurried ones and gives the trip its only genuinely open day. And the hard transfer moves off Sunday onto <strong>Saturday the 14th</strong> — which is what put the Ritz-Carlton's fourth night into conflict, and is now its own item at the top of this page.`,
  },
  {
    id: 'asaba-rate',
    kind: 'waiting',
    title: 'The Asaba quote is up 22% year on year, for a stay with its baths shut',
    by: 'Before you prepay — the money is not refundable afterwards',
    affects: 'Sat 14 – Tue 17',
    body: `Two things sit oddly together in the same email. Asaba disclosed that <strong>the indoor public baths are closed</strong> and that <strong>renovation noise is possible during the day</strong> — and quoted a rate that is materially above last year's.<br><br><strong>The published renovation window was 7 August to 19 October 2026.</strong> That work was meant to be finished three and a half weeks before you arrive. The fact that they are still warning about it in mid-November means <strong>the schedule has slipped</strong>, and nobody has said by how much.<br><br><strong>And the price anchor is unambiguous.</strong> A real Moegi booking for 18–19 November <em>2025</em> came to ¥382,440 for two — ¥191,220 per person. The 2026 quote for the same room in the same week of the year is ¥232,800 per person. That is <strong>+22%</strong>, for a stay that is missing amenities the 2025 stay had.<br><br>Asking about this is not haggling. They raised the subject; the reasonable thing is to find out what it means.`,
    resolved: `<strong>Overtaken by the booking.</strong> The stay was taken at three nights for ¥1,585,450 and paid in full on 27 August, so the rate question is closed whether or not it was ever put. <em>The renovation question is not.</em> Nobody has said what will still be under work on 14–17 November, what hours it runs, or whether the indoor public baths reopen before then — and the money is now committed, which makes it worth asking anyway rather than arriving to find out. Fold it into the gluten-free message rather than sending twice.`,
  },
  {
    id: 'ritz-nikko-dining',
    kind: 'waiting',
    title: 'Three nights at 1,269m on a room-only rate',
    by: 'Before 14 October, while the booking is still refundable',
    affects: 'Wed 11 – Sat 14',
    body: `The old plan had <strong>six of fifteen dinners inside a room rate</strong> — Gora Kadan three times and Myojinkan three times — each of them a set menu that a kitchen had agreed to make gluten-free weeks in advance. <strong>The replan has three</strong>, all at Asaba.<br><br>The Ritz-Carlton is booked on the <strong>Member Flexible Rate</strong>, and the confirmation's charge breakdown is room, service charge and government tax with <em>no food line at all</em>. So three dinners and three breakfasts at Lake Chuzenji are unbought, in a place with very little alternative dining within reach on a November evening.<br><br>That is two problems wearing one coat. It moves real money from the hotel line to the dining line, and — the part that matters more — it swaps declared-in-advance coeliac catering for three nights of ordering off a menu at altitude in the dark.`,
    next: 'Ask Marriott whether a half-board or dining-inclusive rate exists for these three nights — in the same call that cuts the fourth; at this price point it usually does, and it converts an open-ended risk into one written conversation. Either way, send the gluten-free brief to the hotel naming every restaurant on the property separately — each kitchen is its own answer.',
  },
  {
    id: 'gora-kadan-gf',
    kind: 'waiting',
    title: 'Gora Kadan gluten-free, across all three formats',
    by: 'Early October, 4–6 weeks out',
    affects: 'Wed 11, Fri 13',
    body: `Gora Kadan's public restaurant page says flatly that gluten-free is not available — that page governs the à la carte restaurant sold to <em>day visitors</em>. For staying guests who declare at reservation the record is the opposite and it is excellent. <strong>You need the second answer, in writing.</strong><br><br>Three nights means three different dinners and they are not equally safe. Charcoal-grilled beef is salt-grilled and fine; <strong>sukiyaki warishita and shabu-shabu ponzu are both soy-based</strong> and are the two worst formats on any ryokan menu. And <strong>Sushi Kadan is a separate kitchen</strong> on the same property — it inherits nothing automatically.`,
    resolved: `<strong>Overtaken on 23 August 2026.</strong> The kitchen is off the trip. <strong>The method is the part worth keeping</strong>, and it now goes to three new kitchens instead: name each dinner format individually rather than asking about "gluten-free" in the abstract, treat every separate kitchen on a property as a separate answer, and read a vague reply as a warning rather than a yes.`,
  },
  {
    id: 'myojinkan-gf',
    kind: 'waiting',
    title: 'Myojinkan — two kitchens, chosen at booking',
    by: 'Before the booking closes the choice',
    affects: 'Sat 14 – Mon 16',
    body: `Myojinkan runs a Shinshu kaiseki room and a French room, and <strong>which one you eat in is chosen when you book, not on the day</strong> — so the brief has to cover both formats, across all three nights, before that choice is made.<br><br>The encouraging signal: the French chef is a certified Kushi Macrobiotic cook and there is a dedicated macrobiotic menu with a week's notice. Macrobiotic kitchens are vegetable-forward and already think about what is in a sauce.`,
    resolved: `<strong>Overtaken on 23 August 2026.</strong> Superseded by the same brief sent to the Ritz-Carlton Nikko, Asaba and Hotel The Mitsui Kyoto — and at Asaba it is more urgent than it ever was here, because the ryokan requires <strong>full prepayment at reservation</strong>. The gluten-free answer has to arrive before the money does.`,
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
    body: `<strong>Kikunoi Honten, Kodaiji Jugyuan, the Heki kintsugi session and the kyudo morning</strong> are all scheduled at plausible times so the day sheets have something to subtract from — they are marked <em>confirm</em> wherever they appear. The closed days are documented; the seating times are not published and arrive with the reservation.<br><br>Two now matter more than they used to. <strong>Saturday the 21st</strong> has a two-star dinner and a temple illumination on the far side of the city from the hotel, on the first day of a three-day holiday — the Jugyuan seating time decides whether that evening is comfortable or frantic. And <strong>Asaba's dinner seating on the 15th</strong> is the hard edge on a six-hour transfer day.`,
    next: 'Replace each with the real time as the bookings land; the derived leave-by times follow on their own. Ask Asaba for its seating time in the same message as everything else.',
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
    resolved: `Corrected. You arrive on the <strong>14th</strong> and the road closes around the <strong>20th</strong>, so the plateau is open while you are there — which is one of the arguments for these dates rather than the original ones.<br><br><strong>Overtaken on 23 August 2026.</strong> Moot: the road, the plateau and the inn are all off the trip. Left here as the standing reminder that <em>a seasonal-closure note written for one set of dates is wrong for the next set</em> — which is exactly the risk the replan has just re-introduced across a whole new set of places.`,
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
