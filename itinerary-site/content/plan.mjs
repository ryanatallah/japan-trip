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
  // `num` and `variantOf` are kept because the archive's comparison tables still key off them.
  // `slug` is 'plan'; build.mjs writes it to index.html, not plan.html.
  num: '1B',
  slug: 'plan',
  variantOf: 1,
  decided: '15 August 2026',
  title: 'The Classic, with the Alps',
  tagline: 'Fifteen nights — Tokyo, Hakone at its own peak, a Relais & Châteaux ryokan at 1,000m in the Northern Alps, and a Kyoto week pointed north at the early colour',
  dates: 'Fri Nov 6 → Sun Nov 22, 2026',
  length: '15 nights',
  route: ['Tokyo · 4n', 'Hakone · 3n', 'Tobira Onsen · 3n', 'Kyoto · 5n'],
  routeNote: 'Open-jaw — in to Tokyo (HND), home from Osaka (KIX), landing 22 November with three clear days before Colorado',
  cost: '$36,200',
  costBand: '$36–37k',
  temp: '40–60°F — the Alps stop is the cold part',
  tempStatus: 'ok',
  bestFor: 'Everything you named, on dates that actually work',

  // ── Getting there ────────────────────────────────────────────────
  flights: {
    title: 'Getting there',
    sub: '≈ $9,500 per couple, business, open-jaw — in to Tokyo, home from Osaka',
    points: [
      `<strong>Out: Friday 6 November, SFO→HND on ANA “The Room.”</strong> A 28-inch-wide lie-flat with a closing door, and the best business product on the route. SFO frequencies alternate between the new and the old configuration, so <strong>verify the seat map before ticketing</strong> — the seat is the whole reason to choose this flight. About $4,500–5,500 per person booked 3–6 months out. <em>Friday rather than Saturday is not a detail: that departure is what pays for the fifteenth night.</em>`,
      `<strong>Home: Sunday 22 November, KIX→SFO on United Polaris.</strong> This trip ends in Kyoto, and United is the only SFO–KIX nonstop. Book it as a single United multi-city ticket — SFO→HND out, KIX→SFO back — which prices within about $0–500 of a normal round trip and saves a half-day backtrack to Tokyo on the last morning. The flight lands at SFO the same day it leaves Japan, so Sunday out of Osaka is Sunday home.`,
      `<strong>Kyoto→KIX on the last morning</strong> is the Haruka limited express, about 80 minutes from Kyoto Station. Book an afternoon departure and there is no early alarm on the final day.`,
      `<strong>The $2,000 lever, if you want it.</strong> JAL out of SFO still flies its older Sky Suite — the new A350 suite is not on this route — and consolidator fares run $3,400–4,800 round trip. Cheaper, and a materially worse seat for eleven hours.`,
    ],
    ref: ['ana-the-room'],
  },

  // ── Getting around ───────────────────────────────────────────────
  transport: {
    mode: 'Rail, the whole way',
    text: `No car on this trip, by design: every stop is on a line, and the two city blocks are exactly where driving is worst. The two legs through Nagoya are the new ones — Odawara→Nagoya→Matsumoto is about 3h20, Matsumoto→Nagoya→Kyoto about 3h. Both are a shinkansen plus the Limited Express Shinano, which runs roughly hourly through the Kiso valley — a genuinely scenic ride rather than dead time.`,
    points: [
      `<strong>Green Car, booked on smartEX.</strong> Roughly domestic first class, and 2h15 Tokyo–Kyoto on the trunk route. Reserve rather than turn up: late November is peak season on every train in this plan.`,
      `<strong>Takkyubin is the part that goes wrong if you ignore it.</strong> Big bags need reserved oversize space on a shinkansen, so forward them instead — $15–22 a bag, next day, hotel to hotel. Send them <strong>Hakone→Kyoto on 14 November</strong> and do the three Alps nights on overnight bags only.`,
      `<strong>Hakone runs on the two-day Freepass.</strong> One ticket covers the Tozan railway, the cablecar, the Owakudani ropeway and the Lake Ashi boat — which is the whole of the loop day.`,
      `<strong>For a temple-heavy Kyoto day, private Alphard hire is $300–500/day.</strong> Not needed, but it is the no-stress option on the Takao and Ohara days, both of which are awkward on public transport.`,
    ],
    // Green Car only — Gran Class exists on the Hokuriku line, which this route never touches.
    ref: ['shinkansen-green-car'],
  },
  hero: 'matsumoto',
  heroCard: ['tobira-myojinkan', 'takao', 'gora-kadan'],
  pitch: `Fifteen nights, four stops, no car, and everything you named still in it: Gora Kadan, Kikunoi Honten, Kodaiji Jugyuan, the Hirata sword smithing, the deep kintsugi with Mio Heki, the flying squirrels at Karuizawa — plus three nights at a Relais &amp; Châteaux ryokan at 1,000m in the Northern Alps. Out of SFO on Friday 6 November, home from Osaka on Sunday the 22nd, three clear days before Colorado.<br><br><strong>The Kyoto week points north and uphill.</strong> On 17–21 November you are ahead of the central temples but right on top of the northern ones — Takao, Kurama and Kibune, Ohara and Rurikoin all colour one to two weeks before the city floor. So the week is Takao, Ohara, Kurama and Arashiyama rather than the Higashiyama postcard tour, which is also where most of the crowd is not.<br><br><strong>Hakone gets three nights, not two.</strong> Two buys exactly <em>one</em> full day, and that day is full before you reach the ropeway. Three gives you the loop day and the art day, two mornings at Lake Ashi instead of one, and arrival on 11 November — dead centre of Hakone's own foliage peak.<br><br><strong>And the Alps stop is open.</strong> These dates land before the Venus Line shuts on 20 November, and the Shinhotaka Ropeway runs year-round to 2,150m.`,
  days: [
    { date: 'Fri 6', where: '✈', text: 'SFO→HND, ANA The Room. <em>The Friday departure is the one that pays for the fifteenth night.</em>', ref: ['ana-the-room'] },
    { date: 'Sat 7', where: 'Tokyo', text: 'Land, private transfer, gentle evening. <strong>Aman Tokyo</strong>.', ref: ['aman-tokyo'] },
    { date: 'Sun 8', where: 'Tokyo', text: 'A deliberately light first day. Meiji Jingu. <em>The Jingu Gaien ginkgo are still turning this early — they gold up around 20 Nov, so expect green-to-yellow rather than the corridor of gold.</em> Afternoon at <strong>Akiba Fukurou</strong>, the owl café. <em>No dinner booking tonight: L\'Effervescence is closed Sundays.</em>', ref: ['meiji-jingu', 'omotesando-ginkgo', 'akiba-fukurou'] },
    { date: 'Mon 9', where: 'Karuizawa', text: '<strong>Flying squirrels.</strong> Shinkansen out after lunch, Picchio\'s <strong>musasabi watching tour</strong> at dusk, back in Tokyo by evening. Comfortably inside the season now rather than scraping its last week. <em>Monday suits it: the evening return rules out a booked dinner anyway, and L\'Effervescence is shut.</em>', ref: ['picchio-musasabi'] },
    { date: 'Tue 10', where: 'Tokyo · Ome', text: '<strong>Hirata sword smithing</strong> — forge a small katana with the husband-and-wife smiths, engraved and shipped home. Back in town for <strong>L\'Effervescence</strong>, 3★, with its printed GF menu. <em>Tuesday is the only night of this Tokyo block it can happen: the restaurant closes Sundays and Mondays.</em>', ref: ['hirata-sword', 'leffervescence'] },
    { date: 'Wed 11', where: 'Hakone', text: 'Romancecar or private transfer, checking in around 15:00. <strong>Gora Kadan</strong> — gluten-free kaiseki, cypress onsen. <em>Hakone peaks mid-November, so these three nights land dead centre of it.</em> First of three, and the one that gets the classic kaiseki.', ref: ['gora-kadan'] },
    { date: 'Thu 12', where: 'Hakone', text: '<strong>The loop day.</strong> Tozan railway and cablecar up, the ropeway over the sulphur vents at Owakudani, the boat across <strong>Lake Ashi</strong> with the foliage at its best, and the red torii standing in the water at Hakone Shrine. <em>Owakudani closes without warning on volcanic activity — check the status page at breakfast.</em> Dinner at <strong>Itoh Dining by Nobu</strong>, moved off lunch: salt-grilled teppanyaki is the easiest celiac night of the trip.', ref: ['lake-ashi', 'itoh-dining-nobu'] },
    { date: 'Fri 13', where: 'Hakone', text: '<strong>The art day.</strong> The <strong>Hakone Open-Air Museum</strong> and its Picasso pavilion; the Pola Museum of Art, Japan\'s largest Impressionist collection, under glass in a forest; and the Hakone Museum of Art\'s moss garden — 1,900m² of moss under some 200 maples, one of the finest autumn gardens in the area. <em>The museum reopens 30 October after renovation, and its garden stays open regardless.</em> Third dinner: <strong>Sushi Kadan</strong> on the property, or the charcoal-grilled beef course.', ref: ['hakone-open-air-museum', 'gora-kadan'] },
    { date: 'Sat 14', where: '→ Tobira Onsen', text: 'Odawara→Nagoya, then the <strong>Limited Express Shinano</strong> up the Kiso valley to Matsumoto — about 3h20. <strong>Tobira Onsen Myojinkan</strong>, Relais &amp; Châteaux, at 1,000m. Kaiseki or the French menu — <em>chosen when you book, not on the day</em>.', ref: ['tobira-myojinkan'] },
    { date: 'Sun 15', where: 'Matsumoto', text: '<strong>Matsumoto Castle</strong> — an original 1594 keep, black and white against the snow line. Nakamachi\'s kura storehouse street, and the city art museum for the <strong>Yayoi Kusama</strong> collection (open — it closes Mondays, not Sundays).', ref: ['matsumoto'] },
    { date: 'Mon 16', where: 'Alps', text: 'The day the earlier dates pay for themselves: <strong>the Venus Line is still open</strong> (it shuts on the 20th) for the Utsukushigahara plateau, and the <strong>Shinhotaka Ropeway</strong> runs year-round to 2,150m. <em>Or stay put — three nights at a ryokan like this is partly the point.</em>', ref: ['tobira-myojinkan'] },
    { date: 'Tue 17', where: '→ Kyoto', text: 'Shinano down to Nagoya, shinkansen to Kyoto — about 3h. <strong>Sowaka</strong> in Gion, at pre-peak rates rather than peak ones. Evening Gion walk.', ref: ['sowaka', 'gion'] },
    { date: 'Wed 18', where: 'Kyoto · Takao', text: '<strong>Takao</strong>, and this is the day that answers the foliage question. Kyoto City\'s own tourism pages put the area at mid-November, so all three temples should be at or near their best: Jingo-ji up its stone staircase, the clay-disc throw off the terrace, and Kozan-ji below.', ref: ['takao'] },
    { date: 'Thu 19', where: 'Kyoto · north', text: '<strong>Ohara</strong> and Sanzen-in\'s moss garden, which also turns early, and <strong>Rurikoin</strong> up at Yase if you reserved it — the lacquer-table reflection is at its best before the city floor catches up. <strong>Kikunoi Honten</strong> in the evening.', ref: ['sanzen-in-ohara', 'rurikoin', 'kikunoi-honten'] },
    { date: 'Fri 20', where: 'Kyoto · Arashiyama', text: '<strong>Iwatayama monkey park</strong> at opening — macaques on a hilltop with the city behind them — then the bamboo grove and Tenryu-ji. <strong>Heki kintsugi</strong> in the afternoon; <strong>Eikandō</strong>\'s illumination is running by now, with the maples part-turned.', ref: ['arashiyama-monkeys', 'arashiyama', 'heki-kintsugi', 'eikando'] },
    { date: 'Sat 21', where: 'Kyoto', text: '<strong>Kyudo</strong> in the morning — a short, quiet session, and the one seeds item without a fixed slot until now. Then <strong>Kurama and Kibune</strong> on the Eizan line — the lantern staircase at Kibune-jinja under red maples, and the maple tunnel on the way up, where the train dims its lights and crawls. <em>Kibune\'s momiji-tōrō light-up ran 7–24 November last year, sunset to about 21:00, so this evening should catch it.</em> <strong>Kodaiji Jugyuan</strong> farewell dinner and the illumination next door. <em>Note: 21–23 November is a holiday weekend, so this last day is the busiest of the trip.</em>', ref: ['kurama-kibune', 'kyudo', 'kodaiji-jugyuan', 'kodaiji'] },
    { date: 'Sun 22', where: '✈', text: 'KIX→SFO Polaris, landing Sunday. Three clear days before Colorado.', ref: [] },
  ],
  stays: ['aman-tokyo', 'gora-kadan', 'tobira-myojinkan', 'sowaka'],
  altStays: ['beniya-mukayu'],
  dining: ['leffervescence', 'kikunoi-honten', 'kodaiji-jugyuan', 'itoh-dining-nobu'],
  doing: ['hirata-sword', 'picchio-musasabi', 'akiba-fukurou', 'heki-kintsugi', 'arashiyama-monkeys', 'kyudo'],
  places: ['takao', 'kurama-kibune', 'sanzen-in-ohara', 'rurikoin', 'matsumoto', 'eikando', 'kodaiji', 'arashiyama', 'gion', 'lake-ashi', 'hakone-open-air-museum', 'meiji-jingu', 'omotesando-ginkgo'],
  costRows: [
    ['Flights (open-jaw business)', '$9,500'],
    ['Hotels — Aman 4n + Gora Kadan 3n (HB) + Myojinkan 3n (HB) + Sowaka 5n at pre-peak rates', '$18,600'],
    ['Dining — six of the fifteen nights are half board; Itoh Dining moves from lunch to dinner', '$3,850'],
    ['Experiences — sword $1,700, Heki kintsugi $600, kyudo $270, flying squirrels $170, owl café $60, monkey park $10', '$2,810'],
    ['Hakone museums and the two-day Freepass', '$150'],
    ['Ground — Green Car, Romancecar, two Shinano legs, transfers, takkyubin', '$1,300'],
  ],
  costTotal: '≈ $36,200',

  costModel: `Per-couple estimates. Business flights $9–11k. <strong>Six of the fifteen nights are half board</strong> — Gora Kadan ×3 and Myojinkan ×3 — so those kaiseki dinners sit inside the hotel line rather than the dining line; the city hotels are room and breakfast only. The dining line covers every meal not included in a hotel, with the marquee dinners at $250–900 per couple each. Experiences are priced from operator pages. <strong>A 5–8% buffer is not included.</strong> FX at ¥150/$.`,

  levers: `<strong>The one swap still on the table: the Alps for the coast.</strong> Beniya Mukayu in Kaga, below, is the alternative to Tobira Myojinkan, and on these dates it makes a real case. Snow crab opens 6 November, so 14–16 November is already in season; Kenrokuen in Kanazawa peaks mid-November, which you would catch almost exactly; and it is two hours from Kyoto rather than three. What you would give up is the mountains — 1,000m, the Venus Line, Shinhotaka, and Matsumoto Castle on the way in. <em>Settle this before either ryokan books out: both are Relais &amp; Châteaux, both are small, and both go early.</em>`,

  verdict: `<strong>What you give up.</strong> Central Kyoto — Tofuku-ji, Eikandō, Kiyomizu — will be part-turned rather than blazing, because 2026's colour is forecast late and those temples are the last to go. The Jingu Gaien ginkgo in Tokyo are early too. And the final Kyoto day falls on the 21–23 November holiday weekend, the busiest stretch of the season.<br><br><strong>What you get.</strong> Hakone at its own mid-November peak instead of past it. The Venus Line and the Shinhotaka Ropeway still open in the Alps. Sowaka at pre-peak rather than peak rates. The Karuizawa flying squirrels comfortably inside their season rather than in its closing week. And Takao, Kurama, Kibune, Ohara and Rurikoin — all at their best precisely when you are there, and all of them skipped by most visitors, who are off chasing the central temples.<br><br><strong>What the third Hakone night is for.</strong> Two full days instead of one: the loop — ropeway, Owakudani, Lake Ashi, the torii standing in the water — and the art day, with the Open-Air Museum, the Pola and the moss garden. It also means <em>two</em> mornings at Lake Ashi rather than one, which matters more than it sounds: November runs about 60% Fuji visibility, so a second morning takes you from roughly 60% to 84%. And since Owakudani shuts without warning on volcanic activity, the spare day is insurance on the headline sight.<br><br><strong>Six set dinners, and they are not the same six.</strong> Hakone runs kaiseki, then teppanyaki at Itoh Dining, then Sushi Kadan or the charcoal-grilled beef course. Tobira has two separate kitchens and you alternate them. The one thing to settle in writing is Gora Kadan's gluten-free capability across all three formats — see the brief above and the note on the hotel itself, because its public restaurant page and its guest reviews say opposite things.<br><br><strong>One booking trap, already handled.</strong> L'Effervescence is closed Sundays and Mondays. It sits on Tuesday the 10th alongside the forge, and the two closed days go to the owl café and the Karuizawa run — which returns in the evening and never suited a 3★ seating anyway.<br><br>You will see real autumn colour. It will just be in the hills rather than in Higashiyama.`,
  verdictTone: 'good',

  // ── Gluten-free ──────────────────────────────────────────────────
  glutenFree: {
    title: 'Gluten-free, kitchen by kitchen',
    sub: 'For Ashly. Six of the fifteen dinners are set menus inside a hotel stay, and a set menu cannot be amended on the night — so these are the conversations that have to happen in writing, weeks ahead.',
    points: [
      `<strong>The two that are already solved.</strong> <strong>Kikunoi Honten</strong> has a formal gluten-free intake on its reservation form — declare it there, because it does not take same-day dietary requests. <strong>L'Effervescence</strong> prints a personalised gluten-free menu for the guest, which removes the entire negotiation from the evening. It is <strong>closed Sundays and Mondays</strong> and dinner-only on Tuesdays and Wednesdays, which is exactly why it sits on Tuesday 10 November.`,
      `<strong>Gora Kadan is two answers, not one — and you need the right one in writing.</strong> Its public kaiseki-restaurant page states flatly that "Vegan/Gluten-Free/Halal options are not available," and that page governs the à la carte restaurant, which sells priced courses to <em>day visitors</em>. For <em>staying guests who declare at reservation</em>, the record is the opposite and it is excellent: multiple independent celiac reviews describe full gluten-free kaiseki and breakfast, staff confirming each dish as it is set down, even gluten-free afternoon snacks. Book as a staying guest, declare in writing, and get a written reply.`,
      `<strong>Three nights there means three different dinners, and they are not equally safe.</strong> Ryokan kitchens vary the menu across consecutive nights so you are not eating the same kaiseki twice. Charcoal-grilled beef is salt-grilled and fine. <strong>Sukiyaki warishita and shabu-shabu ponzu are both soy-based, and are the two worst formats on any ryokan menu</strong> — they can be rebuilt with tamari, but only as an explicit request. Confirm each format by name rather than "gluten-free" in the abstract. The same question goes to <strong>Sushi Kadan</strong>, the sushi counter on the property since 2023: separate kitchen, separate answer.`,
      `<strong>Tobira Myojinkan runs two kitchens — kaiseki and French — and you choose when you book, not on the day.</strong> So the brief has to cover both formats and go in before that choice is made, across all three nights.`,
      `<strong>The easy night is Hakone's second.</strong> <strong>Itoh Dining by Nobu</strong> is teppanyaki — salt-grilled at the counter, in front of you — and it is the most transparent celiac format of the trip. That is why it moved from lunch to dinner.`,
      `<strong>Tactics.</strong> Tamari instead of shoyu: request it at booking, and carry travel packets. Yakitori shio not tare. Teppanyaki salt-grilled. Sushi minus nikiri and the marinated pieces. Never tempura, ramen, udon or unagi. Carry a Japanese-language celiac card (Legal Nomads).`,
      `<strong>For the unbooked nights: two names to avoid, two to fall back on.</strong> <strong>Sézanne explicitly refuses gluten-free</strong> — avoid it — and Monk in Kyoto is pizza-centric, so skip that too. The safety nets are <strong>Gluten Free T's Kitchen</strong> in Tokyo, which is certified GF and does even gluten-free tempura, and <strong>Little Bird</strong> in Kyoto.`,
      `<strong>Send the brief 4–6 weeks out — early October.</strong> Celiac-specific, with the tamari request and the fryer question, to every ryokan and restaurant on this page. <strong>A detailed reply is the signal that the kitchen can be trusted; a vague one is a warning.</strong>`,
    ],
  },

  // ── Booking calendar ─────────────────────────────────────────────
  bookNow: {
    title: 'Book this now',
    sub: 'Standing at 15 August 2026, for a trip that leaves on 6 November. Ordered by when the window shuts, not by importance.',
    groups: [
      ['This week', 'The four hotels, in this order. <strong>Gora Kadan</strong> (3 nights, 11–13 Nov) and <strong>Tobira Onsen Myojinkan</strong> (3 nights, 14–16 Nov) — both Relais &amp; Châteaux, both small, both go first. Then <strong>Sowaka</strong> (5 nights, 17–21 Nov): Kyoto rooms for late November go 9–12 weeks out, and today is inside that window. Then <strong>Aman Tokyo</strong> (4 nights, 7–10 Nov). And the flights — with the ANA seat-map check before you ticket.'],
      ['Also now — irregular calendars', '<strong>Picchio\'s musasabi tour for Monday 9 November.</strong> The season ends 30 November, so November dates are the last of the year and the slots go first; book this before anything else in the Tokyo week is fixed. <strong>The Hirata sword forge (Tue 10)</strong> via Wabunka — the smiths\' calendar is irregular, so ask early. <strong>Mio Heki\'s kintsugi (Fri 20)</strong>, also Wabunka, with the real-gold option.'],
      ['Late August – early September', '<strong>Kikunoi Honten for Thursday 19 November</strong> via Tableall or My Concierge — declaring gluten-free in the reservation form itself, not afterwards. <strong>L\'Effervescence for Tuesday 10 November</strong> via Pocket Concierge; it is the only night of the Tokyo block the restaurant is open. <strong>Kodaiji Jugyuan for Saturday 21 November</strong>, the farewell dinner, next door to the Kodai-ji illumination.'],
      ['Reservation-only, no published window', '<strong>Akiba Fukurou</strong>, the owl café — reservation only, and the price appears only at checkout. <strong>Rurikoin</strong> opens for a short autumn season and requires a reservation; Thursday the 19th assumes you hold one. <strong>The kyudo studio</strong> — email to confirm the location and which dates they are running.'],
      ['Early October, 4–6 weeks out', 'The <strong>gluten-free brief</strong> to every kitchen: Gora Kadan across all three dinner formats plus Sushi Kadan, Tobira across both its kitchens, then Kikunoi, L\'Effervescence, Jugyuan and Itoh Dining. The <strong>takkyubin plan</strong> for the Hakone→Kyoto forward on 14 November. The Hakone <strong>two-day Freepass</strong> can wait — buy it on arrival.'],
    ],
  },
};
