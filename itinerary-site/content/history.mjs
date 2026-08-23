// The change log for the plan. Newest first.
//
// Every PR that changes content/plan.mjs should prepend one entry here. That is the whole
// contract — the trip is a moving target, and this is the page that keeps it legible to
// anyone opening the link for the second time.
//
// Shape:
//   date    ISO, for the <time datetime> attribute
//   when    how it reads on the page
//   title   what changed, in a few words
//   tags    any of: decision · dates · nights · route · hotel · dining · cut · cost · site
//   effect  optional — the money or nights delta, shown as a chip
//   summary one or two sentences
//   points  optional bullets, for the detail that would clog the summary

export const revisions = [
  {
    date: '2026-08-23',
    when: '23 August 2026',
    title: 'Gora Kadan had no room, and the middle of the trip moved 300km south',
    tags: ['decision', 'route', 'hotel', 'dining', 'cost'],
    effect: '+$30,500 · 4 hotels booked · 2 stops replaced',
    summary: `<strong>The three Hakone nights were the load-bearing wall of Itinerary 1B</strong>, and when Gora Kadan came back full for 11–13 November the whole middle of the trip had to be rebuilt around what could actually be held. What could be held was somewhere else entirely: <strong>The Ritz-Carlton on Lake Chuzenji</strong> for four nights and <strong>Asaba in Shuzenji, on the Izu peninsula</strong>, for the two after it. Kyoto moved from SOWAKA in Gion to <strong>Hotel The Mitsui</strong>. Only the Tokyo week survived intact. The plan the trip used to be is kept whole at <a href="classic-with-the-alps.html">The Classic, with the Alps</a>.`,
    points: [
      `<strong>Everything is booked now, which is the real change.</strong> Four confirmations rather than four estimates: Aman Tokyo 7–11 November (¥2,196,320), the Ritz-Carlton Nikko 11–15 (¥1,683,650), Hotel The Mitsui Kyoto 17–22 ($10,790), and Asaba 15–17, which is agreed in principle and awaiting written confirmation. <strong>The night count works out exactly</strong> — 4 + 4 + 2 + 5 = fifteen, in the same 6–22 November envelope, on the same flights.`,
      `<strong>It costs $30,500 more.</strong> $66,700 against $36,200. The lodging line alone went from $18,600 to $44,625, and a second, quieter change doubled the dining line: <strong>six of fifteen dinners used to sit inside a room rate and now two do.</strong> Gora Kadan ×3 and Myojinkan ×3 were half board; only Asaba is. The Ritz-Carlton is on a Member Flexible Rate whose charge breakdown is room, service and tax with no food line at all — so four dinners and four breakfasts at 1,269m are unbought, in a place with almost nothing else within reach.`,
      `<strong>Okunikko's colour peaks in early-to-mid October, and this is the thing most worth re-examining.</strong> Six independent sources agree: Lake Chuzenji is finished by about 5 November, and Weathernews had it at "ended, under 40% remaining" on 11 November. The ten-day normal at the lake is a high of 8.4°C and a low of 0.1°C — <strong>only 12.5% of observed days in this window over eight years reached the 55°F comfort floor, and 40% of nights were at or below freezing.</strong> The colour you came for is 600m downhill at Toshogu, which peaks early-to-mid November: exactly your window. <em>Plan it as a luxury lake base with autumn day trips down the mountain, not as autumn at the lake, and it works.</em>`,
      `<strong>Two of Japan's seven three-Michelin-Key properties are now on the trip.</strong> Asaba, founded in 1484 and run by the same family for ten generations, with a working Noh stage across its pond and — importantly — a documented celiac-specific <em>written confirmation</em> track record. And Hotel The Mitsui, on three hundred years of Mitsui land facing Nijo Castle, with a hot spring drawn from a thousand metres beneath the building and a bookable hundred-square-metre private bath house in the basement.`,
      `<strong>Sunday 15 November is now the hardest day of the trip: six hours and five connections.</strong> Lake Chuzenji to the Izu peninsula crosses the whole Kanto plain. Leaving at 08:20 by JR — not Tobu, which is faster but strands you at Asakusa — puts you at Asaba around 14:30 against an 18:00 check-in. <strong>The hired car was checked and rejected:</strong> 330–360km around Tokyo, six to seven hours realistically, ¥150,000–250,000. No faster than the train and seven times the price. One piece of luck: the notorious Irohazaka gridlock is an October problem and by mid-November it is gone.`,
      `<strong>The Kyoto week got better, not worse.</strong> Moving from Gion to Nakagyo costs the Higashiyama adjacency — Kodai-ji, Kikunoi, Jugyuan and the kintsugi venue were all a five-minute walk from SOWAKA and are now half an hour or a taxi. But Nijojo-mae is three minutes from the door on the Tozai line, which is effectively the Higashiyama subway, and everything on the other side of the compass improved: <strong>Takao is 30–40 minutes closer</strong> via Uzumasa Tenjingawa and City Bus 8, Arashiyama is fifteen, Kyoto Station is nearer than it was from Gion, Nijo Castle is across the street, and two Michelin restaurants are inside a ten-minute walk.`,
      `<strong>What is gone.</strong> Hakone entirely — the Open-Air Museum, the Pola, Owakudani, the torii in Lake Ashi, and the teppanyaki night at Itoh Dining that was the easiest coeliac dinner on the trip. Matsumoto entirely — the 1594 keep, the Kusama collection, Nakamachi. And Tobira Onsen Myojinkan, the gorge at 1,050m with the stay-put Monday in it. Six nights, and nothing here replaces them exactly.`,
      `<strong>A car appears on the trip for the first time.</strong> The old plan was rail the whole way and said so proudly. Okunikko and Izu both string their sights along roads rather than lines, so two days of rental are picked up at Mishima on the way into Izu and dropped there on the way out — which costs nothing in time because Mishima is on the route anyway. <strong>Japan accepts only the 1949 Geneva IDP</strong>, AAA issues it as a physical booklet with no digital version, and that has a lead time starting now.`,
      `<strong>The hard date is 14 October</strong>, when ¥1,330,000 stops being refundable at the Ritz-Carlton. Everything on the issues page bearing on Nikko should be answered by the 7th.`,
      `<strong>Nine issues were retired and eight opened.</strong> The retired ones keep their reasoning rather than being deleted, and several are worth re-reading because the replan reproduced the same problem in a worse form — the Myojinkan shuttle trap came back as a longer chain on the 15th, and "a private bath is a room type, not a request" transfers exactly to Asaba, where only Villa Tenko has a true rotenburo and the public indoor baths are shut for a renovation that has evidently overrun.`,
    ],
  },
  {
    date: '2026-08-17',
    when: '17 August 2026',
    title: 'The Alps stop is settled, and so is the shape of its Monday',
    tags: ['decision', 'route', 'hotel'],
    summary: `Three of the open questions closed. <strong>The Alps over the crab coast</strong>, <strong>Monday 16 November stays put at the inn</strong>, and <strong>the gained final morning becomes a relaxed lunch downstairs at SOWAKA</strong>. Two of the three threw off a booking instruction on the way out, so the issues page loses three items and gains two.`,
    points: [
      `<strong>The Alps, and the reading of the coast was right.</strong> Kaga's own tourism board leads Yamashiro Onsen with its two public bathhouses, Sōyu and Ko-Sōyu — in that town the bathhouses <em>are</em> the sight. The rest of the Kaga case was Kutani porcelain and Kaga yuzen, and those craft modules had already been cut from this itinerary, which left crab, Kenrokuen and a shorter train.`,
      `<strong>But private onsen was the wrong argument, and it runs the other way.</strong> Beniya Mukayu is 16 rooms with private outdoor tubs on its terrace suites; Myojinkan is 40 rooms whose three named baths are all communal, with a <strong>mixed-gender</strong> riverside rotenburo that is women-only for just two hours an evening. There is no reservable kashikiri bath there. A private bath at Myojinkan means booking a room that has one — now its own item on the issues page, and folded into the booking calendar.`,
      `<strong>Monday stays put, and the day sheet now says what that is.</strong> Four baths to rotate, the inn's own path along the Usukawa, the property hung as a gallery, and Treatment Room Natura. Tobira is a one-inn onsen, so that is close to the entire list — the Bases page now carries the three things reachable on foot, including the Hachibuse-yama trailhead 300m up the road, listed precisely so it can be ruled out.`,
      `<strong>Two things the inn advertises are out of season on the 16th.</strong> Kitchen-garden vegetable picking is finished at 1,050m by mid-November, and iwana fishing is closed outright — Nagano's mountain-stream season runs 16 February to 30 September. Written down so a brochure cannot suggest otherwise on the day.`,
      `<strong>The last lunch is downstairs.</strong> Gion Loka, SOWAKA's own restaurant, serves 12:00–15:00 with last order 13:30 and no regular closing day, at about ¥7,800 a head. A 12:00 seating finishes by 13:30 and leaves at 14:20 with no train or taxi in between. It is a set kaiseki course, so it joins the gluten-free brief.`,
      `<strong>Utsukushigahara and Shinhotaka were not deleted.</strong> Neither needs booking, so both survive on the Bases page as a fair-weather impulse; the Skyline still closes around the 20th. What changed is that the day is no longer built on either, so the Venus Line has stopped being an argument for these dates in the verdict.`,
    ],
  },
  {
    date: '2026-08-16',
    when: '16 August 2026',
    title: 'Three new pages — issues, bases and day sheets',
    tags: ['site', 'route'],
    summary: `The operational half of the trip is now three pages rather than a section: <a href="issues.html">Issues</a>, the live list of everything still undecided, unbooked or unanswered; <a href="bases.html">Bases</a>, a hotel-centred travel-time map for each of the four stops; and <a href="days.html">Day sheets</a>, one sheet per day carrying its fixed points, journeys and meal plan. Leave-by times are <em>derived</em> — the fixed point minus the journey minus its buffer — so they cannot drift from the durations they are built on, and the day-by-day on the itinerary borrows the same line.`,
    points: [
      `<strong>"Still on the table" left the itinerary.</strong> The Tobira Myojinkan / Beniya Mukayu swap is an open question rather than a feature of the plan, so it now sits on the issues page with the rest of them, and the itinerary describes only what is actually decided.`,
      `<strong>The ANA flight leaves at 01:20 and lands at 04:50.</strong> NH107 is a small-hours departure, so "Friday 6 November" is really a Thursday-night airport run, and you reach Aman Tokyo around 06:00 against a 15:00 check-in. The nine-hour gap now has a plan: early check-in requested at booking, the spa, and the Imperial Palace East Gardens ten minutes away.`,
      `<strong>The last day is three hours looser than assumed.</strong> United's KIX–SFO service moves to 18:35 on the winter schedule that starts 25 October, not the 16:55 it runs in summer. Leaving Kyoto at 14:20 still gives a two-and-a-half-hour airport buffer — so 22 November now has a full final morning and a proper lunch.`,
      `<strong>Two of Gora Kadan's three half-board dinners are eaten elsewhere.</strong> Thursday is Itoh Dining and Friday is Sushi Kadan, a separate kitchen on the property. Thursday should be booked room-and-breakfast or the kaiseki is paid for twice, and Sushi Kadan needs its own gluten-free conversation.`,
      `<strong>Making the Myojinkan shuttle means leaving Hakone before check-out.</strong> The inn's shuttle runs at 15:15 and 16:30 only. The latest departure from Gora Kadan that still catches the 15:15 is 10:35 — twenty-five minutes before check-out, with no slack across three connections.`,
      `<strong>Three closed days the plan gets right by luck.</strong> The Hakone Museum of Art shuts Thursdays, the Matsumoto City Museum of Art shuts Mondays, and Kikunoi Honten shuts the 1st and 3rd Tuesday — which in November 2026 is the 17th, the Kyoto arrival day. All three currently fall the right way. They are now written down so a later reshuffle cannot break them silently.`,
      `The Tobira Myojinkan entry said the Venus Line closed "the day before you land" — true of the itinerary's old dates, wrong since the Thanksgiving re-dating. Corrected: you arrive on the 14th and the road closes around the 20th.`,
    ],
  },

  {
    date: '2026-08-15',
    when: '15 August 2026',
    title: 'The section bar becomes an outline',
    tags: ['site'],
    summary: `The horizontal strip of section links at the top of the itinerary is replaced by a left-hand outline, the way a long document carries one. It lists the eleven sections <em>and</em> what is inside each — every hotel, restaurant, experience and place by name — and marks where you are as you read.`,
    points: [
      `<strong>It is generated from the page, not maintained beside it.</strong> The old bar was a hand-written list of ten links, and it had already drifted: it never learned about <em>Still on the table</em>, so the Beniya Mukayu swap was unreachable from the navigation. The outline is read back out of the built HTML, so a section that is added, renamed or reordered appears on its own.`,
      `<strong>Two tiers, not three.</strong> The third level of headings on these pages is the photo-category labels inside each gallery — "The building", "The setting", "The rooms" — about eighty of them. They are captions rather than structure, and listing them would bury the thirty entries that mean something.`,
      `<strong>Only the section you are reading is expanded.</strong> Thirty sub-entries opened at once is a wall that always needs its own scrollbar; one section at a time fits on screen, and the expansion becomes a second signal of where you are. Any section can be pinned open or shut with its chevron, and that choice then outranks the automatic one.`,
      `<strong>On a phone it becomes a drawer</strong>, with a slim bar under the header showing the section and sub-section you are currently in — so the "where am I" signal survives at a width that has no room for a sidebar.`,
    ],
  },
  {
    date: '2026-08-15',
    when: '15 August 2026',
    title: 'Itinerary 1B becomes the plan',
    tags: ['decision', 'site'],
    summary: `The seven-way comparison is over. <strong>The Classic, with the Alps</strong> — 15 nights, 6–22 November, Tokyo / Hakone / Tobira Onsen / Kyoto — is the trip. The site is rebuilt around that: the plan is the front page, and the six routes that did not win move to the archive.`,
    points: [
      `<strong>The archive is frozen deliberately.</strong> The other six keep the dates, costs and verdicts they had on the day the decision was made. A comparison stops meaning anything if the losing options keep being revised.`,
      `<strong>The shared foundations were rewritten rather than moved.</strong> On a page about one trip nothing is "shared" — so flights now name the actual flights, the gluten-free brief names the actual kitchens and the three Gora Kadan dinner formats, and the booking calendar carries real deadlines. The seven-way version of that material stays on the archive, where it is still true.`,
      `<strong>Kyudo finally has a slot.</strong> It was costed at $270 and listed in the experiences, but no day in 1B ever mentioned it. It now sits on the morning of Saturday 21 November — worth moving if that day, already the holiday-weekend one, is too full.`,
      `<strong>Three contradictory prices, fixed.</strong> The comparison tables were quoting stale totals: 1B alone appeared as $36,200, $34.2k and $32.3k in three different places, and every itinerary but Southern Warmth was out of date. All of it is now reconciled against each itinerary's own cost table.`,
    ],
  },

  {
    date: '2026-08-15',
    when: '15 August 2026',
    title: 'Palace Hotel Tokyo → Aman Tokyo',
    tags: ['hotel', 'cost'],
    effect: '+$1,500',
    summary: `The Tokyo base changed across every itinerary. On the plan that is four nights, 7–10 November, at the top of the Otemachi Tower with the 30-metre pool and the 2,500m² spa.`,
  },

  {
    date: '2026-08-15',
    when: '15 August 2026',
    title: 'A fifteenth night, and it goes to Hakone',
    tags: ['nights', 'cost'],
    effect: '+$1,900',
    summary: `Leaving SFO on Friday 6 November instead of the Saturday adds a night at the front of the trip and spends it in Hakone, which goes from two nights to three. The Alps stop and the Kyoto week do not move.`,
    points: [
      `Two nights in Hakone buys exactly <em>one</em> full day, and that day was full before you reached the ropeway. Three buys the loop day — ropeway, Owakudani, Lake Ashi, the torii in the water — and the art day, with the Open-Air Museum, the Pola and the moss garden.`,
      `It also means two mornings at Lake Ashi rather than one. November runs about 60% Fuji visibility, so the second morning takes the odds from roughly 60% to 84%.`,
      `And it is insurance: Owakudani closes without warning on volcanic activity, so a spare day protects the headline sight.`,
      `The cost is $1,900 and one extra weekday of leave.`,
    ],
  },

  {
    date: '2026-08-15',
    when: '15 August 2026',
    title: 'Every itinerary re-dated around Thanksgiving',
    tags: ['dates'],
    summary: `Colorado is 25 November – 5 December, so every route was pulled back to return on 22 November at the latest — three clear days of buffer. That has a real consequence, and it is the reason the Kyoto week looks the way it does.`,
    points: [
      `Kyoto's 2026 foliage is forecast to peak <strong>25 November – 7 December</strong> — the Colorado window almost exactly. Nobody is getting central Kyoto at its crest this year.`,
      `But Kyoto colours by elevation, and the northern districts run one to two weeks ahead of the city floor. So the Kyoto week was re-pointed north and uphill: Takao, Kurama and Kibune, Ohara, Rurikoin. Those places were photographed for the site at the same time, because they had become the actual argument.`,
      `The re-date also surfaced a booking error. <strong>L'Effervescence is closed Sundays and Mondays</strong>, and four itineraries had it scheduled on a Monday. On the plan it now sits on Tuesday 10 November, alongside the forge.`,
    ],
  },

  {
    date: '2026-08-10',
    when: '10 August 2026',
    title: 'Two forks of Itinerary 1',
    tags: ['route'],
    summary: `The Kyoto Classic had eight nights in one city and no second destination. Two alternatives were built from it — and one of them is now the plan.`,
    points: [
      `<strong>1B, the Alps:</strong> three nights at Tobira Onsen Myojinkan, Relais &amp; Châteaux at 1,000m, with Matsumoto Castle and the Kusama collection on the way in.`,
      `<strong>1C, the crab coast:</strong> Nishimuraya Honkan at Kinosaki, seven generations deep, in Matsuba crab season.`,
      `Photographing the Kinosaki fork turned up three links in the source document that no longer went where they claimed — a lapsed domain, a squatted affiliate site and an unrelated ramen shop. All are corrected and flagged on the archive.`,
    ],
  },

  {
    date: '2026-08-09',
    when: '9 August 2026',
    title: 'The craft workshops cut',
    tags: ['cut', 'cost'],
    effect: '−$4,000',
    summary: `Three ceramics workshops in one fortnight was too many. Mutoh kintsugi, the Raku kiln at Shoraku, the indigo dyeing and the Uji matcha day all came out.`,
    points: [
      `Kept: the deep kintsugi with <strong>Mio Heki</strong> in Higashiyama, and the <strong>Hirata sword forge</strong> — the two that were named directly.`,
      `What the freed days became is arguably better than what left: the Karuizawa flying squirrels, the Iwatayama macaques and the owl café.`,
      `Nothing was deleted. Every cut entity still sits on the archive with its photographs, so any of it can go back in.`,
    ],
  },

  {
    date: '2026-08-09',
    when: '9 August 2026',
    title: 'Route maps on every itinerary',
    tags: ['site'],
    summary: `Each route is now drawn as inline SVG over a simplified coastline — numbered overnight stops with night counts, solid lines for rail, dashes for flights, dots for driving, hollow markers for day trips. No tile server and no network request, so it works offline like everything else here.`,
  },
];
