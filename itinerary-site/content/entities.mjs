// Entity registry — every hotel, restaurant, experience, place and transport product
// referenced by the five itineraries. Copy is drawn from Itinerary Designs.md and kept
// deliberately honest: where the source document hedges, this hedges too.

export const entities = {
  // ─────────────────────────────────────────────────────────── STAYS ──

  'aman-tokyo': {
    name: 'Aman Tokyo',
    type: 'stay',
    location: 'Otemachi, Tokyo',
    badges: ['2 Michelin Keys', '71 m² entry-level rooms'],
    rate: '≈ $1,600 / night',
    url: 'https://www.aman.com/hotels/aman-tokyo',
    blurb:
      'Eighty-four rooms on the top six floors of Otemachi Tower, entered through a lobby atrium that runs the full height of the building under a ceiling of washi panels — one of the genuinely great rooms in Tokyo, and worth a drink even if you sleep elsewhere. The entry-level rooms are 71 m², roughly double what the city\'s other five-stars call a standard room, and most look over the Imperial Palace woods with Fuji on the horizon on a clear morning. Still a five-minute walk to Tokyo Station for the shinkansen, and the Chuo line out to Ome for the forge.',
    facts: [
      ['Why it is here', 'The Tokyo base on the plan — four nights, 7–10 November — and in every archived route except Southern Warmth, which skips Tokyo'],
      ['Setting', 'Floors 33–38 of Otemachi Tower, over the Imperial Palace woods'],
      ['Rooms', 'Ask for Palace-side; the city-side rooms face office towers'],
      ['Dining', 'Musashi (8-seat Edomae sushi), Arva (Italian), The Lounge, The Café, La Pâtisserie'],
      ['Spa', 'Two floors — onsen-style stone baths, a 30 m pool, yoga and pilates studios'],
      ['The trade', 'About $500/night over the Palace Hotel, and one Michelin Key fewer'],
    ],
    gf: 'Arva is the reliable everyday room — Italian kitchens handle coeliac well and gluten-free pasta is standard. Musashi is an eight-seat counter where the chef ferments his own miso and soy, so an advance conversation genuinely lands, but confirm rather than assume: house-made shoyu is usually still wheat-based, and nikiri is brushed onto most pieces. Declare at booking, not on arrival.',
  },

  'ritz-carlton-nikko': {
    name: 'The Ritz-Carlton, Nikko',
    type: 'stay',
    location: 'Chugushi, Lake Chuzenji — Okunikko, 1,270m',
    badges: ['Booked · conf. 89324734', '4 nights, 11–15 Nov', 'Natural hot spring'],
    rate: '¥1,683,650 for the stay — about $11,225, ≈ $2,800 / night',
    url: 'https://www.ritzcarlton.com/en/hotels/japan/nikko',
    blurb:
      'Ninety-four rooms on the north shore of Lake Chuzenji at 1,269m, opened in 2020, with Mount Nantai standing straight out of the water behind it. <strong>The first and only Ritz-Carlton anywhere with an onsen</strong> — the water is piped from Nikko Yumoto, a 1,200-year-old sulphur source, milky white and smelling of it. Your suite is 115 m² with the glazed <em>engawa</em> veranda the property is known for. The consulting chef at Lakehouse is Kanji Kobayashi of villa aida, two Michelin stars in Wakayama. <strong>None of this cares what month it is</strong>, which matters, because the landscape outside very much does.',
    facts: [
      ['Why it is here', 'It is booked. It replaced three nights at Gora Kadan when Hakone came back full for 11–13 November'],
      ['Address', '2482 Chugushi, Nikko, Tochigi 321-1661 — on the south shore of Lake Chuzenji, inside Nikko National Park'],
      ['Booked', '1 King Bed, Lake View, Suite, Balcony · 2 adults · Member Flexible Rate'],
      ['The bill', '¥1,330,000 room + ¥199,500 service + ¥154,150 tax = ¥1,683,650. Nightly: 342,000 / 323,000 / 332,500 / 332,500'],
      ['Cancellation', 'Free until 23:59 local on 14 October 2026. After that the penalty is the full ¥1,330,000 — every night of the stay'],
      ['The onsen', 'Piped from the Nikko Yumoto source at 78.6°C. 05:30–23:00, closed 12:00–14:00 to clean. Separate men\'s and women\'s, each with indoor bath, outdoor rotenburo, cold plunge and a hinoki sauna. Free and unlimited'],
      ['But not in the room', '<strong>The Lake View Suite bath is ordinary hot water</strong>, not onsen, and there is no balcony bath. There is no bookable private onsen either — the only way to have the spring water to yourselves is a ¥10,000 30-minute add-on before a spa treatment'],
      ['Dining', 'The Japanese Restaurant runs three separate counters — kaiseki, Edomae sushi and teppanyaki — chosen when you book. Lakehouse is western farm-to-table. Dinner runs ¥24,000–35,000 a head; breakfast is ¥7,800 and is <em>not</em> in your rate'],
      ['A closure to check', 'The Japanese Restaurant\'s own FAQ reports it closed Wednesdays and Thursdays — your first two nights. The property\'s other pages list no closing day at all. The two contradict each other; confirm before you plan a kaiseki'],
      ['Half board exists', 'The hotel sells one-night-two-meals packages on Japanese booking sites — but the kaiseki plan gives you the chef\'s selection rather than your pick of the sushi or teppanyaki counters. Over four nights, room-and-breakfast with dinners booked individually is the better structure'],
      ['Free experiences', 'Morning zazen with a Chuzenji-ji monk daily at 09:00, a morning walk to Tachiki Kannon, an art tour, furoshiki. Booked by 16:00 the day before'],
      ['Out of season', 'Fly fishing on Lake Chuzenji closed on 19 September and the hotel\'s programme is summer-only. Kayak, SUP and the water walk are warm-season. Snowshoeing starts in December'],
      ['No pool', 'A 24-hour fitness studio with lake views, and an ESPA spa — 60 minutes ¥27,500. But no swimming pool, unlike Aman'],
    ],
    gf: 'The honest position is that this is <strong>the exposure on the trip</strong>, and it needs work before 14 October. Four nights, room-only, at 1,269m, in an area where — plainly — <em>there is no restaurant that can be relied on for coeliac-level care</em>. The hotel is the safety net, and there is <strong>no celiac report about this property anywhere</strong>. Its written FAQ is Marriott boilerplate about shared kitchens; but the Japanese version asks a better question than the English one, wanting to know the severity 「お出汁を含むなど」 — whether dashi counts. A kitchen thinking at dashi granularity is thinking correctly. Give it that answer. <strong>Lakehouse is structurally the easier room</strong> — butter and wine reductions rather than a soy backbone — though it warns in writing that its course-only format is hard for restrictive diets. And <strong>Nikko\'s signature dish is a trap</strong>: yuba is soy and naturally gluten-free, but Nikko yuba is traditionally deep-fried and almost always simmered in a soy-and-mirin broth, the buns are wheat, and yuba soba is a wheat blend. Two names outside the hotel: <strong>KAMAYA Café du Réverbère</strong> by Tobu-Nikko station, which Tochigi\'s own tourism board says serves mostly gluten-free food and already runs vegan and halal streams; and <strong>Chez Hoshino</strong>, three minutes from the door, where French technique and a chef who plates every dish himself make it the best non-hotel bet at the lake.',
  },

  'asaba-ryokan': {
    name: 'Asaba',
    type: 'stay',
    location: 'Shuzenji Onsen, Izu Peninsula, Shizuoka',
    badges: ['Relais & Châteaux', '3 Michelin Keys', '12 rooms', 'Not yet confirmed'],
    rate: '¥364,800 pp/night (Villa Tenko) · ¥232,800 pp/night (Moegi) — half board',
    url: 'https://www.asaba-ryokan.com/',
    blurb:
      'Founded in <strong>1484</strong> and run by the same family for ten generations. A roofed <strong>Noh stage stands across the pond</strong> from the guest wing — not a decoration but a working stage, with live performances — and the whole inn is arranged to look at it. Relais &amp; Châteaux since 1989, and promoted to <strong>three Michelin Keys in October 2025</strong>, one of only seven in Japan. Twelve rooms. Dinner is served in your room. The Katsura river runs past the door and the town\'s bamboo path is effectively the back garden, which makes this the one stop on the trip where the walking starts where you are standing.',
    facts: [
      ['Why it is here', 'The replacement for the Alps leg — two nights between Nikko and Kyoto, on the only dates the ryokan could offer'],
      ['The signature', 'A roofed Noh stage standing across the pond from the guest wing, lit at night. It is the reason the place is famous'],
      ['Michelin', 'Three Keys as of October 2025 — one of only seven in Japan. Hotel The Mitsui Kyoto is another, so this trip holds two of the seven'],
      ['Villa Tenko (天鼓)', '220 m², detached. The only room with a true private open-air bath — a Towadaishi stone rotenburo plus an indoor koyamaki tub. Two queen beds, garden view'],
      ['Moegi (萌葱)', '152 m², second floor, looking over the pond and the Noh stage. Oval koyamaki tub. Two queen beds'],
      ['Rate includes', 'Omakase kaiseki dinner, Japanese or western breakfast, in-room and outdoor public onsen, 15% service, 10% consumption tax, ¥150/night bath tax'],
      ['Booking terms', 'Full prepayment required at reservation, via their payment link'],
      ['Cancellation', 'Free to 15 days out · 30% at 14–8 days · 50% at 7–4 days · 100% inside 3 days. Japan time'],
      ['Disclosed at quote', 'Renovation may be ongoing, with daytime noise; the indoor public baths are closed, leaving only in-room baths and the outdoor public bath'],
      ['The renovation, checked', 'Asaba published the work as running 7 August – 19 October 2026. Being warned about it for mid-November means the schedule has slipped, and by an unstated amount'],
      ['The rate, checked', 'A real Moegi booking for 18–19 November 2025 came to ¥191,220 per person. The 2026 quote for the same room in the same week is ¥232,800 — up 22%'],
      ['Dining', 'Omakase kaiseki served in-room, which removes the shared-buffet problem entirely and keeps one server accountable for every course'],
      ['Baths', 'Every room has an indoor hot-spring bath. Two private baths can be taken without reservation. The outdoor public bath stays open; the indoor public baths do not'],
      ['Arrival', 'Check-in 14:30–18:00, check-out 11:30. No shuttle — a taxi from Shuzenji station is 7 minutes. Parking for 15'],
      ['Room count', 'Twelve, per Relais &amp; Châteaux. Trip.com says seventeen. The lower figure is the better-sourced one'],
    ],
    gf: 'The best-evidenced kitchen on the trip. Asaba is specifically cited in the ryokan-industry literature as having a <strong>celiac-specific written confirmation track record</strong> — which is rare, because no ryokan in Japan holds a recognised gluten-free certification and you are always relying on an individual kitchen. Two things make this one structurally safer than most: dinner is served in-room, so there is no shared buffet surface and one server owns every course; and the omakase format means the kitchen is already building your meal from scratch rather than adapting a fixed one. <strong>The urgency is the money.</strong> Asaba requires full prepayment at reservation, so the gluten-free answer has to arrive before the payment does — not four to six weeks out like the rest of the trip. Lead with 小麦アレルギー, ask for tamari by name, and ask specifically about the fried course, because almost every kaiseki sequence has one.',
  },

  'gora-kadan': {
    name: 'Gora Kadan',
    type: 'stay',
    location: 'Gora, Hakone',
    badges: ['Relais & Châteaux', '3 Michelin Keys', 'From the seeds list'],
    rate: '≈ $1,500 / night, half board',
    url: 'https://www.gorakadan.com/hakone/?lang=en',
    blurb:
      'Built on the grounds of the Kan’in-no-miya imperial family’s summer villa, and still run like one. Rooms open onto the garden, most have their own cypress or stone open-air bath fed from the source, and dinner is a full kaiseki served in-room or in a private dining room. It is the hotel from your seeds list, and the reason the trip detours through Hakone at all.',
    facts: [
      ['Why it is here', 'Named directly in the trip seeds'],
      ['Setting', 'A wooded former imperial villa estate in Gora, above Hakone'],
      ['Rooms', 'Bettei and Annex rooms; open-air cypress baths, panoramic wooden baths, jacuzzi + steam sauna variants'],
      ['Onsen', 'Free-flowing from source, indoor and open-air; spa and pool on site'],
      ['Dinner', 'Kaiseki, half board — the rate assumes dinner and breakfast'],
      ['Three nights without repetition', 'Multi-night guests are offered alternatives to the standard kaiseki — a charcoal-grilled beef course, shabu-shabu, sukiyaki — and the seasonal menu turns over monthly.'],
      ['A second restaurant on site', '<strong>Sushi Kadan</strong> opened November 2023 in the old villa, supervised by <strong>Sushi Yoshitake</strong> — three Michelin stars in Ginza for twelve consecutive years. A 17-course omakase at a wooden counter. Non-guests can book it too, so reserve early.'],
      ['Sources disagree on where you eat', 'The hotel’s own restaurant page describes a dedicated dining room; the R&C listing and several guest accounts describe in-room service. Probably room-type dependent — worth confirming with your room category.'],
    ],
    gf: 'Two answers, and you need the right one in writing. The public kaiseki-restaurant page states plainly that "Vegan/Gluten-Free/Halal options are not available" — but that page governs the à la carte restaurant, which sells priced courses to <em>day visitors</em>. For <em>staying guests who declare at reservation</em> the record is the opposite and it is excellent: independent celiac reviews describe full gluten-free kaiseki and breakfast, staff confirming each dish as it is set down, even gluten-free afternoon snacks and tea. <strong>Three things to settle in writing before booking three nights:</strong> that the accommodation covers the alternative courses (sukiyaki warishita and shabu-shabu ponzu are both soy-based and the two worst formats on the menu); that it extends to Sushi Kadan, which is a separate kitchen under outside supervision and inherits nothing automatically; and whether a room-and-breakfast night is possible at all, if you want a night out at Itoh Dining. Expect front-of-house to reflexively say no, because that is what their public page says.',
  },

  'gora-byakudan': {
    name: 'Hakone Gora Byakudan',
    type: 'stay',
    location: 'Gora, Hakone',
    badges: ['Budget lever'],
    rate: '≈ $850 / night, half board',
    url: 'https://byakudan.co.jp/',
    blurb:
      'The listed alternative to Gora Kadan, and the single cleanest way to take roughly $1,300 out of Itinerary 1. Modern rather than imperial: most rooms have their own open-air bath and a view down the Hakone valley. You lose the estate and the pedigree, not the onsen.',
    facts: [
      ['Why it is here', 'The −$1.3k lever on Itinerary 1'],
      ['Rooms', 'Most with private open-air hot-spring baths'],
      ['View', 'Over the Hakone mountains'],
    ],
    gf: 'Needs a written brief well in advance; less documented than Gora Kadan for celiac guests.',
  },

  sowaka: {
    name: 'SOWAKA',
    type: 'stay',
    location: 'Gion / Higashiyama, Kyoto',
    badges: ['Small Luxury Hotels', 'In 4 of the 5 itineraries'],
    rate: '$900 – $1,600 / night depending on how close to peak',
    url: 'https://sowaka.com/eng/',
    blurb:
      'A 1920s ryokan main house restored into a small hotel, with a modern annex behind it, one street off the Yasaka pagoda lane. This is where you sleep for five to seven nights in almost every version of this trip, so it carries more weight than any other room decision. You can walk to Kodai-ji, Kiyomizu and the Gion lanes without a taxi.',
    facts: [
      ['Why it is here', 'The Kyoto base on the plan — five nights, 17–21 November — and in every archived route as well'],
      ['Setting', 'Gion, a short walk from Kodai-ji and the Yasaka pagoda'],
      ['Building', 'Restored Taisho-era ryokan main house + contemporary annex'],
      ['Dining', 'Restaurant Loka Gion on site, head chef Takaaki Kato. <em>Note: the trip document says the restaurant is La Bombance — that changed; Sowaka’s own site now lists Loka.</em>'],
      ['Rate movement', '≈ $900 pre-peak in early Nov, ≈ $1,300–1,600 at foliage peak'],
    ],
    gf: 'A small kitchen that can be briefed properly. Kyoto’s peak-season pressure means dietary detail must go in at booking, not on arrival.',
  },

  'hotel-the-mitsui-kyoto': {
    name: 'HOTEL THE MITSUI KYOTO',
    type: 'stay',
    location: 'Nakagyo-ku — opposite Nijo Castle',
    badges: ['Booked · conf. R9GZA4213593', '3 Michelin Keys', '5 nights, 17–22 Nov'],
    rate: '$10,790 for the stay — $1,706 / night, room only',
    url: 'https://www.hotelthemitsui.com/en/kyoto/',
    blurb:
      'Three hundred years of Mitsui family land facing Nijo Castle, rebuilt by Andre Fu around the gate the family brought with them. <strong>Three Michelin Keys</strong> — one of only seven in Japan, the only one in Kyoto, and the second on this trip after Asaba. A hot spring is drawn from a thousand metres directly beneath the building, which is close to unheard of inside the city, and it feeds both a mixed thermal bath open until 23:00 and a bookable hundred-square-metre private bath house in the basement. The 1,300 m² stroll garden is the thing that will actually surprise you: you can sit in it for an hour in November and see nobody.',
    facts: [
      ['Why it is here', 'The Kyoto base — five nights, 17–22 November. It replaced SOWAKA in Gion when the trip was rebuilt on 23 August'],
      ['Booked', 'Garden Room, King — 47–61 m², floors 2–4, looking onto the recreated Mitsui stroll garden'],
      ['The bath in the room', 'A large stone soaking tub, not an onsen. Only the Onsen Suite has a private hot-spring bath of its own'],
      ['Thermal Spring SPA', '07:00–23:00, last entry 22:30. Mixed, swimsuits required. Sodium and calcium chloride water from ~1,000m below the property'],
      ['Private onsen', 'Over 100 m² with a mist sauna and its own garden, B1. ¥24,500 for 60 min, ¥32,000 for 90, ¥39,500 for 120 — guests only, by phone, 48-hour cancellation'],
      ['The gate', 'Kajiimiya, built 1703 for the court attached to what is now Sanzen-in at Ohara — which you visit on the 19th. Moved here in 1935, dismantled and rebuilt by shrine carpenters with over 80% of its original timber'],
      ['Dining', 'TOKI — Kyoto-French, Michelin-listed, chef Tetsuya Asano, Japan\'s Bocuse d\'Or representative for 2027. FORNI — Italian, wood-fired. The Garden Bar until 23:30'],
      ['The subway', 'Three minutes on foot to Nijojo-mae on the Tozai line, which is effectively the Higashiyama subway: Sanjo Keihan in 5 minutes, Higashiyama in 7, Keage in 9. No transfers'],
      ['Check-in / out', '15:00 / 12:00 · 160 rooms · parking ¥4,000/day'],
    ],
    gf: 'A real process and an honest disclaimer, which is a better combination than it sounds. Allergies are taken at booking <em>and</em> re-checked when the order is placed, and there is a hypoallergenic menu covering all eight of Japan\'s mandatory allergens, wheat among them. But the hotel states plainly that one kitchen and one dishwashing line serve every outlet, so it cannot guarantee an allergen-free plate, and it reserves the right to refuse a booking for a severe allergy. <strong>No first-hand celiac report about TOKI or FORNI exists anywhere</strong> — treat that as a gap rather than reassurance. FORNI is the more tractable of the two: an Italian kitchen gives you grilled fish, roasted meat, risotto and vegetables without going near the pizza oven. TOKI needs the longer letter, because its menus run on sake-lees butter and white miso.',
  },

  kokuya: {
    name: 'Kokuya',
    type: 'stay',
    location: 'Shibu Onsen, Nagano',
    badges: ['400 years old'],
    rate: '≈ $650 / night, half board',
    url: 'https://www.ichizaemon.com/lang_en/',
    blurb:
      'A four-century-old ryokan in the wooden lanes of Shibu Onsen, and the reason Itinerary 2 sleeps here rather than in Nagano city. Guests get the master key to the town’s nine public bathhouses, and the ryokan itself draws several different hot springs into its own baths. The snow monkey park is a short drive up the valley.',
    facts: [
      ['Why it is here', 'Base for the snow monkey day in Itinerary 2'],
      ['Age', 'Founded roughly 400 years ago'],
      ['Baths', 'Its signature is a row of five separate hinoki tubs, each fed by a different spring, plus the Fukuroku-no-yu bath and the KUON open-air wing'],
      ['Town', 'Master key to Shibu Onsen’s nine public bathhouses'],
      ['Booking note', 'The property trades as Kokuya Ichizaemon — its site is ichizaemon.com. <em>kokuya.com is an unrelated ramen shop.</em>'],
    ],
    gf: 'The one to scrutinise. Its own dinner photography puts soba, udon and tempura in the standard course, so the default menu is gluten-heavy — brief the kitchen early, in Japanese, and treat a vague reply as a reason to look elsewhere in Nagano.',
  },

  'hyatt-centric-kanazawa': {
    name: 'Hyatt Centric Kanazawa',
    type: 'stay',
    location: 'Kanazawa',
    badges: ['One night only'],
    rate: '≈ $350 / night',
    url: 'https://www.hyatt.com/hyatt-centric/en-US/kmqct-hyatt-centric-kanazawa',
    blurb:
      'A deliberately ordinary, comfortable modern hotel by Kanazawa station for a single night between Nagano and Kaga. Itinerary 2 spends its money on Beniya Mukayu two nights later; this is the night that pays for that.',
    facts: [
      ['Why it is here', 'A one-night city stop in Itinerary 2'],
      ['Location', 'Next to Kanazawa station, walkable to Higashi Chaya and Kenrokuen'],
    ],
    gf: 'International chain standards; breakfast is manageable, dinner is out at Zeniya.',
  },

  'beniya-mukayu': {
    name: 'Beniya Mukayu',
    type: 'stay',
    location: 'Yamashiro Onsen, Kaga',
    badges: ['Relais & Châteaux'],
    rate: '≈ $900 / night, half board',
    url: 'https://mukayu.com/english/',
    blurb:
      'A modern ryokan that stripped the form back rather than dressing it up: 16 rooms, wide quiet spaces, morning yoga, a library, and private open-air baths. The kitchen is serious and the surrounding Kaga area is where Kutani porcelain and Kaga yuzen dyeing come from, which is why Itinerary 2 gives it two nights instead of one.',
    facts: [
      // This card appears on the issues page (as the alternative that lost) and in the archive
      // (as Itinerary 2's craft-country stay), so the line has to be true in both places.
      ['Why it is here', 'The alternative to the Alps stop — considered and declined in August 2026 — and the craft-country stay in the archived Itinerary 2'],
      ['Style', 'Minimalist modern ryokan — the anti-ornate version'],
      ['Extras', 'Morning yoga, library, private rotenburo'],
      ['Nearby', 'Kutani ware and Kaga yuzen workshops'],
      ['Booking note', 'The site is now <strong>mukayu.com</strong>. <em>The old beniya-mukayu.jp domain has lapsed and no longer resolves — don’t use it.</em>'],
    ],
    gf: 'Accommodates with advance notice — send the brief 4–6 weeks ahead per the trip plan.',
  },

  hinanoza: {
    name: 'Akan Tsuruga Bessou Hinanoza',
    type: 'stay',
    location: 'Lake Akan, eastern Hokkaido',
    badges: ['25 suites, all with private onsen'],
    rate: '≈ $850 / night, half board',
    url: 'https://www.hinanoza.com/',
    blurb:
      'The honest luxury ceiling in eastern Hokkaido — this is as good as it gets out there, and it is genuinely good: 25 suites, every one with its own open-air hot-spring bath, on the shore of Lake Akan with wilderness in every direction. It is the base for the cranes, the swans and the flying squirrels.',
    facts: [
      ['Why it is here', 'The wildlife base in itineraries 3 and 5'],
      ['Suites', 'All 25 have a private open-air onsen'],
      ['Setting', 'Lake Akan, surrounded by forest and volcanoes'],
      ['Reality check', 'The best in the region — not Kyoto-level; the region has no Kyoto-level'],
    ],
    gf: 'Accommodates with notice; remote-Hokkaido kitchens need the brief earliest of all.',
  },

  'kushiro-stay': {
    name: 'Kushiro (overnight)',
    // Typed as a place, not a stay: the itinerary names no property here, so this
    // represents the town and is deliberately not held to the hotel photo spread.
    type: 'place',
    location: 'Kushiro, eastern Hokkaido',
    badges: ['Town, not a specific hotel'],
    rate: '≈ $200 / night',
    url: 'https://ja.kushiro-lakeakan.com/',
    blurb:
      'A functional port-city night, positioned for a dusk flying-squirrel session and the following morning’s backup slot. Kushiro is known for its sunsets over the Nusamai bridge and for being the gateway to the marsh; it is a place to sleep near the wildlife, not a destination stay. The itinerary does not name a property — this represents the town.',
    facts: [
      ['Why it is here', 'Positioning for the momonga session in Itinerary 3'],
      ['Alternative', 'A third night at Hinanoza instead, if you prefer the suite'],
    ],
    gf: 'Limited options — plan to eat simply here.',
  },

  'ritz-carlton-fukuoka': {
    name: 'The Ritz-Carlton Fukuoka',
    type: 'stay',
    location: 'Tenjin, Fukuoka',
    badges: ['Opened 2023'],
    rate: '≈ $700 / night',
    url: 'https://www.ritzcarlton.com/en/hotels/fukrz-the-ritz-carlton-fukuoka/',
    blurb:
      'The landing pad for the southern route: a new tower in central Tenjin with city and bay views, a proper spa, and enough restaurant depth on site that the first jet-lagged night takes care of itself. Fukuoka is warm, flat, walkable and one of Japan’s best eating cities.',
    facts: [
      ['Why it is here', 'The arrival stay in Itinerary 4'],
      ['Opened', '2023 — one of the newest hotels in the whole plan'],
      ['On site', 'Spa, pool, sushi and teppanyaki counters, a top-floor lounge'],
      ['Nearby', 'The Nakasu yatai stalls; Goh is a short taxi away'],
    ],
    gf: 'Ritz-Carlton service standards plus teppanyaki, which is one of the easiest formats to make safely gluten-free.',
  },

  gekkoju: {
    name: 'Gekkoju',
    type: 'stay',
    location: 'Kurokawa Onsen, Kumamoto',
    badges: ['8 private villas'],
    rate: '≈ $1,100 / night, half board',
    url: 'https://gekkoujyu.com/',
    blurb:
      'A handful of villas in the woods above Kurokawa, each with its own open-air hot-spring bath, and effectively no shared space you are forced into. Kurokawa itself is the most atmospheric onsen village in Kyushu — wooden lanes along a river, guests wandering between baths in yukata. Itinerary 4 builds its warm, quiet middle around this.',
    facts: [
      ['Why it is here', 'The onsen centrepiece of Itinerary 4'],
      ['Villas', 'The trip document says 8; the hotel’s own site currently lists <strong>ten</strong> named villas, each with a private open-air bath'],
      ['Village', 'Kurokawa’s rotenburo-hopping pass covers the town’s baths'],
      ['Timing', 'Foliage here runs late Oct to mid Nov — the itinerary lands on it'],
    ],
    gf: 'Accommodates with advance notice; a small kitchen, so the brief goes in early.',
  },

  'shiroyama-kagoshima': {
    name: 'SHIROYAMA HOTEL kagoshima',
    type: 'stay',
    location: 'Kagoshima',
    badges: ['One night, for the view'],
    rate: '≈ $300 / night',
    url: 'https://www.shiroyama-g.co.jp/',
    blurb:
      'A hilltop hotel whose entire point is the view: Kagoshima city below, the bay beyond, and the Sakurajima volcano smoking on the far side. Its open-air onsen looks straight at the volcano. One night, positioned for the morning flight to Yakushima.',
    facts: [
      ['Why it is here', 'The transit night before Yakushima in Itinerary 4'],
      ['View', 'Sakurajima across the bay, from the rooms and the bath'],
      ['Onsen', 'Hilltop open-air bath with the volcano view'],
    ],
    gf: 'Buffet-heavy — treat this as a simple night and eat carefully.',
  },

  'tobira-myojinkan': {
    name: 'Tobira Onsen Myojinkan',
    type: 'stay',
    location: 'Above Matsumoto, Nagano',
    badges: ['Relais & Châteaux', 'The new stop'],
    rate: '≈ $1,000 / night, half board (R&C lists $657–1,897)',
    url: 'https://tobira-group.com/myojinkan/',
    blurb:
      'A 1931 ryokan at about 1,000m in the hills east of Matsumoto, inside the Yatsugatake-Chūshin Kōgen quasi-national park, and a Relais & Châteaux member since 2009. Forty rooms in both Japanese and Western styles, spring-fed tubs, and the nakai-san attendant service that makes a ryokan feel like a private house. It is the reason to break the run between Hakone and Kyoto: an entirely different landscape from anywhere else on this trip.',
    facts: [
      ['Why it is here', 'The intermediate stop that shortens the Kyoto block'],
      ['Setting', 'About 1,000m up in the Northern Alps foothills, roughly 30 minutes from Matsumoto station'],
      ['Rooms', '40 rooms, suites and villas across Japanese and Western styles; spring-water tubs'],
      ['Four baths, and only one way to get a private one', '<strong>Setsugetsuka</strong> (雪月花) is a <em>standing</em> bath — chest-deep, on your feet. <strong>Hakuryu</strong> (白龍) is the large indoor-and-outdoor bath, gender-separated and open 24 hours. <strong>Kuuyama</strong> (空山) is a reclining bath. And the <strong>riverside rotenburo</strong> below the entrance is <strong>mixed-gender</strong> — sunrise to 23:00, women-only 19:30–21:30. <em>There is no reservable kashikiri bath: a private bath means booking one of the rooms that has its own</em> — the iyashi-buro rooms and the SPA Living suite, in hinoki, cypress or stone on undiluted source water.'],
      ['What is there on foot', 'A one-inn onsen, so this is the whole list: the inn\u2019s own path along the <strong>Usukawa</strong>, benches and tables set along it; the property hung as a gallery, Japanese painting and modern sculpture; <strong>Treatment Room Natura</strong> for massage; the library, the river terraces, the rooftop tea service, and <strong>Salon 1050</strong> for pastry. Shop 08:00\u201312:00 and 16:30\u201321:30. The <strong>Hachibuse-yama</strong> trailhead is 300m up the road \u2014 5\u00bd hours to 1,929m, so a real mountain rather than a walk. <em>The vegetable-picking and the iwana fishing the inn advertises are both out of season in November; Nagano\u2019s stream season ends 30 September.</em>'],
      ['Getting there', 'Free shuttle from Matsumoto station, 35–45 min, booked in advance — fixed departures at 15:15 and 16:30. A taxi is 30 min and about ¥7,000.'],
      ['Three venues, not one', '<strong>SHINSHU / DINING TOBIRA</strong> — Chef Edaki’s innovative Shinshu kaiseki. <strong>Nature French SAI</strong> — Chef Masahiro Tanabe, grilled vegetables from the Tobira farms and bone-in roast meats. <strong>Salon 1050</strong> — a pastry and drinks lounge. Three nights can be three different dinners, and breakfast alternates Japanese or a Natural French one.'],
      ['If you want a night to feel bigger', 'Both restaurants have upgrade tiers — Shinshu Wagyu at about ¥2,500pp, a special course at about ¥5,000pp'],
      ['The best dietary signal on the trip', 'Tanabe is a <strong>certified Kushi Macrobiotic</strong> chef, and there is a dedicated macrobiotic menu (≈ ¥2,000, one week’s notice). Macrobiotic kitchens are vegetable-forward, skip refined dairy and sugar, and typically already work in tamari rather than wheat shoyu.'],
      ['The escape hatch', 'If a kaiseki course is not landing, the French restaurant is the answer — roast meat and vegetables, nothing to brace for.'],
      ['Mid-November reality', 'You arrive on the 14th, <em>inside</em> the season rather than after it — <strong>the Venus Line and the Utsukushigahara Skyline close for winter around the 20th</strong> — so the plateau is technically open while you are here, an hour of switchbacks away. <strong>Monday has since resolved to staying put</strong>, which makes that an impulse rather than a plan; it needs no booking either way, so confirm the road only if you wake up wanting it. Kamikochi closes on the 15th and is not realistically reachable from here. Shinhotaka runs year-round but is two and a half hours each way.'],
    ],
    gf: 'Promising, with one procedural trap. Structurally it is the best bet after Sankara — a macrobiotic cook already builds menus around exclusions — and the FAQ states plainly that they accommodate allergies and dietary restrictions, arranged at booking. But there is no coeliac or gluten wording and no allergen chart, so it still needs a direct email. <strong>And you must choose the Japanese or the French dinner when you book, first-come-first-served — not on the day.</strong> Over three nights that means booking three dinners at once, so confirm explicitly that <em>the choice can differ per night</em> rather than applying to the whole stay — near-certain for multi-night guests, but it is framed as a single booking-time preference, so pin it. Settle the gluten-free question, the per-night menu choice and the macrobiotic option in the same message.',
  },

  'nikko-toshogu': {
    name: 'Nikko Toshogu',
    type: 'place',
    location: 'Lower Nikko — about 600m, 40 min down the mountain',
    badges: ['UNESCO', 'Peaks early-to-mid Nov'],
    blurb:
      'The mausoleum of Tokugawa Ieyasu, and the most ornate thing in Japan — a shrine complex of some fifty-five buildings under a cryptomeria forest, carved and gilded to a degree that the rest of Japanese architecture spent four centuries reacting against. The Yomeimon gate alone carries five hundred carvings. Rinnoji, Futarasan and Ieyasu\'s grandson\'s mausoleum at Taiyuin are all inside the same walk, and the red Shinkyo bridge stands over the Daiya river at the entrance to the whole thing.',
    facts: [
      ['Why it matters now', 'This is where the autumn colour actually is on these dates. Lower Nikko sits around <strong>600m and peaks early-to-mid November</strong>; the lake, where you are sleeping, is 1,270m and finished in October. The forty-minute bus down the Irohazaka is not a chore on this trip — it is the sightseeing.'],
      ['Kanmangafuchi', 'Ten minutes further on: a lava gorge on the Daiya with a row of about seventy Jizo figures in red bibs along it. Quiet, free, and the best photograph in Nikko that is not a shrine.'],
      ['The crowds', 'Toshogu is the busiest thing in Tochigi. Go early — the Irohazaka is clear before 09:00 and thickens after 10:00 on a fine day.'],
    ],
  },

  kanmangafuchi: {
    name: 'Kanmangafuchi Abyss',
    type: 'place',
    location: 'Lower Nikko — on the Daiya river, 20 min from Toshogu',
    badges: ['Free', 'Quiet'],
    blurb:
      'A gorge of black lava on the Daiya river, formed by an eruption of Mount Nantai, with a line of about seventy stone Jizo figures standing along the path above it in knitted red caps and bibs. They are called the Bake-jizo — the ghost Jizo — because the story is that you never count the same number twice. Maples lean over the water and almost nobody is there.',
    facts: [
      ['Why it is here', 'The counterweight to Toshogu on the same day. Fifty-five gilded buildings and then a footpath along a river with nothing on it but moss and stone — and the second one is what people remember.'],
      ['Practical', 'Free, always open, about twenty minutes on foot from the Shinkyo bridge. Flat, short, and it works in any weather.'],
    ],
  },

  'lake-chuzenji': {
    name: 'Lake Chuzenji & Kegon Falls',
    type: 'place',
    location: 'Okunikko — 1,269m, above the Irohazaka',
    badges: ['Colour peaks early October', 'Where you sleep'],
    blurb:
      'A caldera lake dammed by an eruption of Mount Nantai twenty thousand years ago, sitting at 1,269m with the mountain standing straight out of its north shore. Kegon Falls drops 97m off its eastern lip, reached by an elevator down through the rock to an observation deck at the plunge pool. The Irohazaka, the switchback road up from Nikko town, has forty-eight hairpins, each labelled with a character of the Japanese syllabary. In the Meiji era the foreign legations built their summer villas along the south shore to escape Tokyo, and the Italian and British ones are open as museums.',
    facts: [
      ['The honest note about November', 'Okunikko\'s colour peaks <strong>early-to-mid October</strong>, five weeks before you arrive. On 11–15 November the trees at lake level are bare, the nights are near freezing, and the landscape is stark rather than golden. That is worth knowing rather than discovering: the hotel is a warm room with a hot spring in a winter setting, and the foliage is six hundred metres downhill.'],
      ['The upside of being late', 'The Irohazaka is notorious for foliage-season gridlock — Nikko\'s own tourism authority documents a twenty-minute stretch taking three hours, on weekdays. That is an <strong>October</strong> problem. By mid-November it is gone, which is a real scheduling gift on a trip with a six-hour transfer at the end of it.'],
      ['Further up', 'The road continues past Ryuzu Falls to the Senjogahara marsh plateau and Yumoto Onsen. Several Okunikko facilities close for winter around this time — check before committing a morning to anything above the lake.'],
    ],
  },

  'shuzenji-onsen': {
    name: 'Shuzenji Onsen',
    type: 'place',
    location: 'Izu peninsula, Shizuoka — on the Katsura river',
    badges: ['Colour peaks late Nov', 'All on foot'],
    blurb:
      'The oldest hot spring on the Izu peninsula, wrapped around a bend of the Katsura river, with a Sōtō Zen temple founded traditionally by Kūkai in 807 at its centre. Minamoto no Yoriie was assassinated here in 1204 and the town has been telling the story ever since — the Noh play about it gives Asaba\'s stage its name, and the masks are in the temple treasure hall. Five red bridges cross the river in a twenty-minute loop, a bamboo path runs along its bank lit until 23:00, and the whole of it is inside ten minutes of the ryokan door.',
    facts: [
      ['Timing, honestly', 'Shuzenji peaks <strong>late November into early December</strong> — the 2024 season did not crest until the first week of December. On 15–17 November expect ten to thirty per cent: early-turning trees among green ones. What you get instead is thin crowds, weekday rates and a ryokan that is the point of the stop regardless.'],
      ['Tokko-no-yu', 'The rock-set bath in the middle of the riverbed is the town\'s emblem and you <strong>cannot get into it</strong> — it lost its legal status as a bathhouse and bathing is prohibited. It is not a foot bath either. The free foot baths are Kawara-yu and Sugi-no-yu on the opposite bank.'],
      ['After dark', 'Sixty lamps light the bamboo path from sunset to 23:00, year-round, and from 20:00 a cut-paper projection by an artist born in the town is thrown onto the round bamboo bench at its centre. It is free, it is three minutes from the door, and it is the best thing in Shuzenji after dinner.'],
      ['The wasabi', 'Izu has the largest wasabi cultivation area in Japan and the tatami-ishi terracing method was invented here in the nineteenth century — a stratified bed of stone, gravel and sand that filters and oxygenates the spring water. It is a <strong>UNESCO-recognised agricultural heritage system</strong>, and the terraces at Ikadaba run to fifteen hectares.'],
    ],
  },

  takao: {
    name: 'Takao',
    type: 'place',
    location: 'North-west Kyoto — 40 min from the city',
    badges: ['Peaks early-to-mid Nov'],
    blurb:
      'A wooded gorge on the Kiyotaki river with three temples in it — Jingo-ji up a long stone staircase, Saimyo-ji, and Kozan-ji, which is UNESCO-listed and holds the Choju-giga animal scrolls. It is one of the earliest places in Kyoto to turn, and on a mid-November trip it is the single best colour in the city while central Higashiyama is still coming on.',
    facts: [
      ['Why it matters now', 'Kyoto City’s own tourism pages put the Takao area at <strong>mid-November</strong> — Kōzan-ji early-to-mid, Jingo-ji mid-to-late. Your Kyoto week is 17–21 November, so all three temples are at or near peak. The earlier dates are an advantage here, not a compromise.'],
      ['Jingo-ji', 'Worth the climb for kawarake-nage — you throw small clay discs off the terrace into the valley. It is about 400 steps up from the river, so wear something you can climb in.'],
    ],
  },

  'kurama-kibune': {
    name: 'Kurama & Kibune',
    type: 'place',
    location: 'North of Kyoto, on the Eizan line',
    badges: ['Peaks early-to-mid Nov'],
    blurb:
      'Two mountain villages linked by a walk over a ridge, reached on the little Eizan railway that runs through a tunnel of maples on the way up. Kibune-jinja’s stone staircase, lined with vermilion lanterns under red maples, is one of the best things in Kyoto and it colours a week or two ahead of the city.',
    facts: [
      ['Why it matters now', 'Like Takao, it turns early — which suits 17–21 November'],
      ['The light-up', 'Kibune’s <strong>momiji-tōrō</strong> illumination ran 7–24 November in 2025, sunset to about 21:00 — the shrine staircase, the village street and the maple tunnel all lit. <em>2026 dates are not published yet, but that window would cover your last Kyoto evening.</em>'],
      ['Getting there', 'Eizan line from Demachiyanagi. On the momiji tunnel stretch the trains dim their lights and crawl through it during the light-up.'],
    ],
  },

  matsumoto: {
    name: 'Matsumoto',
    type: 'place',
    location: 'Nagano',
    badges: ['National Treasure castle'],
    blurb:
      'A castle town at the foot of the Northern Alps. Matsumoto Castle is one of only five keeps designated National Treasures and one of the few originals left standing — black and white, moated, with snow-capped mountains behind it. Add the Nakamachi street of white kura storehouses and the city art museum, which belongs largely to Yayoi Kusama, who was born here.',
    facts: [
      ['The castle', 'Original keep, completed around 1594 — not a post-war concrete reconstruction like most'],
      ['Also', 'Nakamachi’s storehouse street, and the Matsumoto City Museum of Art for the Kusama collection'],
      ['If you want the Alps', 'The Shinhotaka Ropeway runs year-round and climbs to about 2,150m — roughly two hours from Matsumoto, and the one way to get properly into the mountains in late November'],
    ],
  },

  'nishimuraya-honkan': {
    name: 'Nishimuraya Honkan',
    type: 'stay',
    location: 'Kinosaki Onsen, Hyogo',
    badges: ['Relais & Châteaux', 'Seven generations', 'Crab season'],
    rate: '≈ $900 / night, half board (R&C lists $507–1,190)',
    url: 'https://www.relaischateaux.com/us/hotel/nishimuraya-honkan/',
    blurb:
      'A 26-room ryokan run by the same family for seven generations, at the head of the Kinosaki canal. Tatami, shoji, wooden verandas and a garden of moss-covered stone and ponds; baths set in a bamboo grove, and private open-air baths in many of the rooms. It is the classical Japanese inn in a way that even Gora Kadan, with its imperial-villa formality, is not.',
    facts: [
      ['Why it is here', 'The closing stay — the trip ends on the Sea of Japan rather than in a city'],
      ['The town', 'Guests walk out in yukata and geta to the town’s public bathhouses; the ryokan is the base, the town is the bathhouse. Staying guests get a free all-bathhouse pass at check-in, and all of them are tattoo-friendly.'],
      ['The food', '<strong>Matsuba snow crab</strong>, which is what the coast is famous for and what the season is for — plus Tajima beef, the bloodline behind Kobe'],
      ['Book the crab deliberately', 'Crab is <strong>a separate plan, not an automatic inclusion</strong> — the booking engine has a distinct crab-season option running 7 Nov – 31 Mar, priced apart from the standard kaiseki. Courses using the branded Tsuiyama crab need an advance phone booking.'],
      ['Rooms', '26 rooms and suites; many with private open-air or semi-open-air baths'],
      ['Getting out', 'Kinosaki → Shin-Osaka on the Limited Express Kounotori is about 2h40, then the Haruka to KIX — roughly 4 hours in total on departure day'],
    ],
    gf: 'The least documented stay in the whole plan: Nishimuraya publishes nothing at all on allergies — its FAQ is a chat widget with no crawlable page. Crab and Tajima beef are naturally gluten-free, which helps, but the kaiseki around them leans on soy and dashi like any other. <strong>Useful fallback: Visit Kinosaki, the town’s own tourism body, runs a “dietary inclusive” service that brokers exactly these requests with the ryokan on your behalf.</strong> Use it, and follow up directly.',
  },

  kinosaki: {
    name: 'Kinosaki Onsen',
    type: 'place',
    location: 'Toyooka, Hyogo — 2h30 from Kyoto',
    badges: ['Seven bathhouses'],
    blurb:
      'A willow-lined canal town where the convention is to leave your ryokan in a yukata and wooden geta and walk between seven public bathhouses, clacking over the stone bridges in the evening. It has been doing this for thirteen centuries. In winter it is also one of Japan’s great crab towns, which is precisely what late November is for — the season opens on the 6th.',
    facts: [
      ['The soto-yu', '<strong>Six of the seven are currently open</strong> — Sato-no-yu has been closed for renovation since April 2024 and is off the town’s live crowd-status board. Kono-yu is closed separately until 30 Oct 2026, so it should be back before you arrive; worth re-checking. Staying guests get a pass covering them all.'],
      ['The season', 'Matsuba snow crab opens 6 November and runs through winter — you would arrive on the 18th, comfortably inside it'],
      ['Nearby', 'The Toyooka stork park, the Genbudo basalt caves, and Izushi, a small castle town known for its soba'],
    ],
  },

  'toyooka-storks': {
    name: 'Oriental white storks, Toyooka',
    type: 'place',
    location: '20 min from Kinosaki',
    badges: ['Wildlife'],
    blurb:
      'One of the better conservation stories in Japan, and it happens to be twenty minutes from the ryokan. The Oriental white stork went extinct in the wild here in 1971; Toyooka bred them back and began releasing birds in 2005, and they now nest on towers above the rice fields the town farms without pesticides to feed them. You can see them from the roadside as well as at the park.',
    facts: [
      ['Why it is here', 'The wildlife stop on a route that otherwise has none after Karuizawa'],
      ['November is the off-season', 'Toyooka’s own tourism office says stork-watching is best in April and May when the chicks hatch. In November there is no nest activity — you are looking at birds feeding in the flooded paddies, plus the captive birds at the park. Free, 09:00–17:00, <strong>closed Mondays</strong>.'],
      ['Not a crane', 'Storks, not the tancho cranes of Hokkaido — black bill, red skin around the eye, and they nest on platforms rather than gathering at feeding stations'],
    ],
  },

  'sankara-yakushima': {
    name: 'sankara hotel & spa Yakushima',
    type: 'stay',
    location: 'Yakushima',
    badges: ['Small Luxury Hotels', '1 Michelin Key', 'From the seeds list'],
    rate: '≈ $800 / night incl. breakfast; suites include dinner',
    url: 'https://www.sankarahotel-spa.com/',
    blurb:
      'An all-villa resort on a subtropical island of ancient cedar forest, looking out over the Pacific from a hillside. You named this one yourself. It publishes its gluten-free accommodation outright, which almost nothing in Japan does, and its restaurant okas cooks French technique with island ingredients.',
    facts: [
      ['Why it is here', 'Named directly in the trip seeds'],
      ['Setting', 'Hillside above the Pacific, jungle behind, on Yakushima'],
      ['Rooms', 'Villas and suites; infinity pool; spa'],
      ['Dining', 'okas (French-Yakushima) and ayana'],
      ['Season', 'November is Yakushima’s driest, clearest month'],
    ],
    gf: 'The best documented of any stay on this list — gluten-free options are published on the hotel’s own site rather than negotiated.',
  },

  // ────────────────────────────────────────────────────── RESTAURANTS ──

  'kikunoi-honten': {
    name: 'Kikunoi Honten',
    type: 'restaurant',
    location: 'Higashiyama, Kyoto',
    badges: ['3 Michelin stars', 'From the seeds list'],
    rate: '≈ $900 – $1,100 / couple',
    url: 'https://kikunoi.jp/en/',
    blurb:
      'Yoshihiro Murata’s flagship, and the kaiseki restaurant most responsible for explaining kaiseki to the rest of the world. A garden entrance, private tatami rooms, and a menu that moves with the month. It is on your seeds list and it appears in every itinerary that touches Kyoto.',
    facts: [
      ['Why it is here', 'Named directly in the trip seeds'],
      ['Book', 'August–early September, via Tableall or My Concierge'],
      ['Format', 'Private tatami rooms, seasonal kaiseki'],
    ],
    gf: 'The best formal process in Japan: the reservation form has a dedicated gluten-free intake field. Declare there — same-day dietary requests are not accepted.',
  },

  'kodaiji-jugyuan': {
    name: 'Kodaiji Jugyuan',
    type: 'restaurant',
    location: 'Higashiyama, Kyoto',
    badges: ['2 Michelin stars', 'From the seeds list'],
    rate: '≈ $700 / couple',
    url: 'https://jugyuan.jp/',
    blurb:
      'Kaiseki in a garden villa immediately beside Kodai-ji temple — which means dinner and the temple’s autumn night illumination are the same walk. The second restaurant from your seeds list, and the natural farewell dinner in three of the five itineraries.',
    facts: [
      ['Why it is here', 'Named directly in the trip seeds'],
      ['Setting', 'A garden villa next to Kodai-ji'],
      ['Pairing', 'Time it with the Kodai-ji autumn illumination — it is next door'],
    ],
    gf: 'Kaiseki with a small kitchen; brief in writing in advance, in Japanese if possible.',
  },

  leffervescence: {
    name: "L'Effervescence",
    type: 'restaurant',
    location: 'Nishi-Azabu, Tokyo',
    badges: ['3 Michelin stars', 'Prints a GF menu'],
    rate: '≈ $1,200 / couple',
    url: 'https://www.leffervescence.jp/',
    blurb:
      'Shinobu Namae’s restaurant — French technique, Japanese produce, and a famous four-hour turnip. The reason it is in three itineraries is simpler than the cooking: it prints a personalised gluten-free menu for the guest, which removes the entire negotiation from the evening.',
    facts: [
      ['Why it is here', 'The safest three-star night in Tokyo for a celiac guest'],
      ['Book', 'Via Pocket Concierge, August–September'],
      ['Signature', 'The slow-cooked turnip'],
    ],
    gf: 'Prints a personalised gluten-free menu. This is the gold standard and the reason it beats Sézanne, which explicitly refuses gluten-free requests.',
  },

  'cenci-kyoto': {
    name: 'Cenci',
    type: 'restaurant',
    location: 'Kyoto',
    badges: ['1 Michelin star', 'Easy GF'],
    rate: '≈ $350 / couple',
    url: 'https://cenci-kyoto.com/',
    blurb:
      'Ken Sakamoto’s Italian restaurant, and the deliberate release-valve at the end of a Kyoto week: after five kaiseki dinners, an Italian kitchen that handles gluten-free without ceremony is a relief rather than a compromise.',
    facts: [
      ['Why it is here', 'The farewell dinner in itineraries 1 and 3'],
      ['Style', 'Italian, wood-fired, Kyoto produce'],
    ],
    gf: 'Straightforward — Italian kitchens navigate gluten-free daily, and this one has a star to protect.',
  },

  'zeniya-kanazawa': {
    name: 'Zeniya',
    type: 'restaurant',
    location: 'Kanazawa',
    badges: ['2 Michelin stars', 'Relais & Châteaux'],
    rate: '$500 – $800 / couple',
    url: 'https://zeniya.co.jp/',
    blurb:
      'Shinichiro Takagi cooks without a fixed menu — he builds each guest’s dinner individually, which happens to be the single best structural signal for a gluten-free diner in the city. Itinerary 2 lands here the week snow crab season opens, and kano-gani is naturally gluten-free.',
    facts: [
      ['Why it is here', 'The Kanazawa dinner in Itinerary 2'],
      ['Format', 'No fixed menu — tailored per guest'],
      ['Season', 'Snow crab season opens 6 November; the itinerary arrives 14 November'],
      ['Booking note', 'The site is <strong>zeniya.co.jp</strong>. <em>Do not use zeniya.info — that domain has been taken over by an unrelated affiliate site — and zeniya.ne.jp no longer resolves.</em>'],
    ],
    gf: 'The tailored format is the accommodation — declare at booking and the menu is built around it.',
  },

  'goh-fukuoka': {
    name: 'Goh',
    type: 'restaurant',
    location: 'Fukuoka',
    badges: ["Asia's 50 Best", '14 seats'],
    rate: '≈ $500 / couple',
    url: 'https://010bld.com/en/goh-e/',
    blurb:
      'Takeshi Fukuyama cooks French-Japanese at a single communal table, one seating a night, with the open kitchen in front of you. The dialogue with the kitchen is direct, which is exactly what a gluten-free guest wants. The catch is the booking window: email opens exactly 60 days out.',
    facts: [
      ['Why it is here', 'The marquee dinner in Itinerary 4'],
      ['Book', 'Email exactly 60 days ahead — set an alarm for 2 September'],
      ['Size', 'One communal table, single seating (sources give 10 or 14 seats — confirm when you book)'],
      ['Worth knowing', 'This is not the old restaurant. La Maison de la Nature Goh closed in 2022 after twenty years in Nishinakasu; Goh reopened in 2023 as a new concept on the 3rd floor of the 010 Building, on the Nakagawa river in Hakata.'],
    ],
    gf: 'French-Japanese with a tiny room means a real conversation with the chef — a good format for celiac.',
  },

  'itoh-dining-nobu': {
    name: 'Itoh Dining by Nobu',
    type: 'restaurant',
    location: 'Gora, Hakone',
    badges: ['Teppanyaki'],
    rate: '≈ $250 / couple',
    url: 'https://itoh-dining.co.jp/',
    blurb:
      'Wagyu teppanyaki with a Hakone view, and the meal that breaks up a run of ryokan kaiseki. Teppanyaki is one of the friendliest formats for a celiac guest — salt-grilled instead of sauced, and everything happens in front of you.',
    facts: [
      ['Why it is here', 'On the plan it takes <strong>dinner</strong> on the Hakone loop day, so that three nights at Gora Kadan are not three kaiseki. The archived Itinerary 1 had it at lunch'],
      ['Format', 'Teppanyaki counter — food cooked in front of you'],
      ['The safety valve', 'The easiest night of the trip if a kaiseki course is not landing. Wagyu, seafood, vegetables, salt and a grill — nothing to brace for.'],
    ],
    gf: 'Ask for salt-grilled preparation and no soy-based sauces; the format makes verification easy.',
  },

  'okas-sankara': {
    name: 'okas',
    type: 'restaurant',
    location: 'sankara hotel, Yakushima',
    badges: ['Suite guests only'],
    rate: 'Included with suites; villa guests can upgrade for about ¥6,600 pp',
    url: 'https://www.sankarahotel-spa.com/',
    blurb:
      'The hotel’s fine-dining room: French technique applied to what the island and the surrounding sea produce that week. Dinner here is included in the suite rates, which is part of why Yakushima costs less than it looks.',
    facts: [
      ['Why it is here', 'Dinner on Yakushima nights in Itinerary 4'],
      ['Style', 'French-Yakushima, tasting menu'],
      ['Room', '26 seats on the 2nd floor — 12 at the counter, four booths, one private room'],
      ['Chef', 'Akio Suzuki, previously 17 years at The Fujiya, Fujiya Hotel Hakone'],
      ['Access', 'Exclusive to suite guests; villa guests may upgrade at about ¥6,600 pp'],
    ],
    gf: 'Covered by sankara’s published gluten-free accommodation.',
  },

  // ───────────────────────────────────────────────────── EXPERIENCES ──

  'hirata-sword': {
    name: 'Hirata sword smithing',
    type: 'experience',
    location: 'Ome, west Tokyo',
    badges: ['From the seeds list', 'Ashly 👍'],
    rate: '≈ $1,700 / couple · 150 min',
    url: 'https://wabunka-lux.jp/experiences/en_hirata-smallkatana/',
    blurb:
      'Forge a small katana alongside Sukehira and Nodoka Hirata, a husband-and-wife pair of licensed smiths, in their forge west of Tokyo. The blade is engraved and shipped home. This is the exact experience from your seeds list, and the single most distinctive thing in the Tokyo half of the trip.',
    facts: [
      ['Why it is here', 'Named in the seeds and approved'],
      ['Length', 'About 150 minutes'],
      ['Output', 'An engraved small katana, shipped to you'],
      ['Booking', 'The Hirata calendar is irregular — ask early'],
      ['Catch', 'It lives in Ome, west Tokyo, so the forge takes the day out of the Tokyo block — which is why L’Effervescence is the evening of the same Tuesday. The archived Southern Warmth route loses it entirely by skipping Tokyo'],
    ],
  },

  'mutoh-kintsugi': {
    name: 'Mutoh modern kintsugi',
    type: 'experience',
    cut: 'Cut — you only want one kintsugi, and the traditional Kyoto session is the deeper one. Saves $460 and a Tokyo morning.',
    location: 'Nihonbashi, Tokyo',
    badges: ['Ashly 👍👍'],
    rate: '≈ $460 / couple · 90 min',
    url: 'https://wabunka-lux.jp/experiences/en_mutoh-2/',
    blurb:
      'The fast version of kintsugi: repair a piece with gold and take it home the same day. Ninety minutes in Nihonbashi, no waiting for lacquer to cure. It pairs naturally with the deeper traditional session in Kyoto later in the trip — the two are not redundant, they are different crafts wearing the same name.',
    facts: [
      ['Why it is here', 'Kintsugi is double-thumbed in the seeds'],
      ['Venue', 'Utsuwa Nihonbashi Mutoh main store — a lacquerware house founded in 1923'],
      ['Length', '90 minutes, private, 1–8 people'],
      ['Output', 'You choose an Arita, Kyo or Kutani piece and take it home the same day'],
    ],
  },

  'heki-kintsugi': {
    name: 'Traditional kintsugi with Mio Heki',
    type: 'experience',
    location: 'Higashiyama, Kyoto',
    badges: ['Ashly 👍👍', 'Real-gold option'],
    rate: '≈ $600 / couple · 120 min',
    url: 'https://wabunka-lux.jp/experiences/en_hifumi-akagane/',
    blurb:
      'The deeper cousin of the Tokyo session, in a Higashiyama villa: traditional urushi lacquer method, with an option to finish in real gold. Slower, more technical, and the version that explains why the craft exists.',
    facts: [
      ['Why it is here', 'The traditional counterpart to the Tokyo kintsugi'],
      ['Who', 'Lacquer artist and restorer Mio Heki of Atelier Hifumi, whose workshop has restored national treasures'],
      ['Where', 'Akagane Resort Kyoto Higashiyama 1925 — a copper magnate’s 1925 villa'],
      ['Length', '120 minutes, private'],
      ['Materials', 'The standard finish is brass powder; real gold is a paid upgrade'],
    ],
  },

  'shoraku-raku': {
    name: 'Raku pottery at Shoraku kiln',
    type: 'experience',
    cut: 'Cut — three ceramics workshops was one too many. Saves $600 and frees the Kameoka day, which becomes Arashiyama and the monkey park.',
    location: 'Kameoka, near Kyoto',
    badges: ['From the seeds list'],
    rate: '≈ $600 / couple · 3.5 hrs',
    url: 'https://www.sasakishoraku.com/',
    blurb:
      'Hand-carve a raku chawan at a working kiln outside Kyoto, with a tea ceremony using the kiln’s own bowls, and yours fired and shipped afterwards. From your seeds list. The kiln takes one group per day, so it books early.',
    facts: [
      ['Why it is here', 'Named in the trip seeds'],
      ['Length', 'About 3.5 hours including the tea ceremony'],
      ['Output', 'The kiln glazes, fires and ships your chawan afterwards — unlike the kintsugi sessions, you do not take it home the same day'],
      ['Booking', 'One group per day — book in August/September'],
      ['Pairs with', 'Arashiyama and the Hozugawa on the way back into Kyoto'],
    ],
  },

  kyudo: {
    name: 'Kyudo session',
    type: 'experience',
    location: 'Kyoto',
    badges: ['From the seeds list'],
    rate: '≈ $270 / couple',
    url: 'https://kyudojapan-jp.squarespace.com/',
    blurb:
      'Japanese archery — the version where the point is the form, not the target. A short, physical, quiet morning that balances a week of sitting in temples and tea rooms.',
    facts: [
      ['Why it is here', 'Linked in the trip seeds'],
      ['To confirm', 'Email the studio for location and dates — the site does not state them'],
    ],
  },

  'indigo-ohara': {
    name: 'Indigo dyeing at Kobo Ainoyakata',
    type: 'experience',
    cut: 'Cut. Saves $580 — and Ohara stays in the plan anyway, since Sanzen-in in peak colour was the better half of that day.',
    location: 'Ohara, north Kyoto',
    badges: ['From the seeds list'],
    rate: '≈ $580 / couple · 150 min',
    url: 'https://www.ainoyakata.com/',
    blurb:
      'Aizome — fermented natural indigo, the blue that Japan built a whole visual culture on. Dip, oxidise, watch it turn from green to blue in the air, and take the cloth home. Ohara is 40 minutes north of Kyoto and is itself worth the trip in late November.',
    facts: [
      ['Why it is here', 'Indigo is on the seeds list'],
      ['Length', '150 minutes'],
      ['Pairs with', 'Sanzen-in, in peak colour, the same day'],
      ['Alternative', 'Atelier Shimura plant-dyeing, also in Kyoto'],
    ],
  },

  'uji-matcha-kane7': {
    name: 'Kane7 Hatakeyama matcha experience',
    type: 'experience',
    cut: 'Cut — not worth $2,600. This was by far the most expensive single item in the plan and its removal is most of the saving. Uji and Byodo-in remain available as an ordinary day out.',
    location: 'Uji, Kyoto',
    badges: ['From the seeds list', 'Naturally GF'],
    rate: '≈ $2,600 / couple · 150 min',
    url: 'https://wabunka-lux.jp/experiences/en_treees-kaneshichi/',
    blurb:
      'A private session with the Hatakeyama family, who have grown tea in Uji for generations — the fields, the stone mills, and matcha prepared properly rather than performed. Expensive, and the one experience where the price is doing real work: this is access, not a class.',
    facts: [
      ['Why it is here', 'Linked directly in the trip seeds'],
      ['Length', '150 minutes'],
      ['Where', 'Uji — pairs with Byodo-in the same day'],
      ['Bonus', 'Naturally gluten-free, start to finish'],
    ],
  },

  'snow-monkeys': {
    name: 'Snow monkeys at Jigokudani',
    type: 'experience',
    location: 'Yamanouchi, Nagano',
    badges: ['Ashly 👍'],
    rate: 'Park entry ≈ $10 pp',
    url: 'https://jigokudani-yaenkoen.co.jp/',
    blurb:
      'Japanese macaques at the hot spring in Jigokudani, reached by a 1.6km forest walk. Honest expectation for mid-November: the park is open and the monkeys are present and active, but they rarely soak before real cold arrives. The steaming-bath postcard is a December-to-February photograph.',
    facts: [
      ['Why it is here', 'Approved in the seeds'],
      ['Access', 'A 1.6 km walk in through the forest from the car park'],
      ['Mid-Nov reality', 'Monkeys present and active; bathing behaviour is unlikely'],
      ['Peak bathing', 'December to February'],
    ],
  },

  'tsurui-cranes': {
    name: 'Red-crowned cranes at Tsurui-Ito',
    type: 'experience',
    location: 'Tsurui, eastern Hokkaido',
    badges: ['Season starts mid-late Nov'],
    rate: 'Included in guided days',
    url: 'https://www.wbsj.org/',
    blurb:
      'Tancho — red-crowned cranes — at the Wild Bird Society’s Tsurui-Ito sanctuary. Feeding season begins mid-to-late November, so numbers are building when this trip arrives. The 300-bird spectacle and the courtship dancing in snow are January and February.',
    facts: [
      ['Why it is here', 'The wildlife anchor of Itinerary 3'],
      ['Late Nov', 'Feeding has started; numbers building'],
      ['Peak', 'January–February for the full 300-bird spectacle'],
    ],
  },

  'ezo-momonga': {
    name: 'Ezo flying squirrel session',
    type: 'experience',
    location: 'Kushiro area, eastern Hokkaido',
    badges: ['Ashly 👍×5 — the most-wanted item on the list'],
    rate: '≈ $200 – $300 / couple',
    url: 'https://kushiro-trek.com/',
    blurb:
      'Momonga emerge from their tree holes about ten minutes after sunset. A local guide takes you to monitored burrows where the odds are genuinely good, and runs these year-round rather than seasonally. This is the highest-rated single item on the entire wish list, which is the whole argument for Itinerary 3.',
    facts: [
      ['Why it is here', 'The single most-wanted experience in the seeds'],
      ['Timing', 'Emergence about 10 minutes after sunset'],
      ['Success rate', 'High, at known dens with a guide'],
      ['Weather risk', 'Windy or rainy nights get cancelled — build a backup slot'],
    ],
  },

  'shiratani-unsuikyo': {
    name: 'Shiratani Unsuikyo guided hike',
    type: 'experience',
    location: 'Yakushima',
    badges: ['Guided'],
    rate: 'Guide ≈ $300 / couple',
    url: 'https://y-rekumori.com/',
    blurb:
      'The moss forest that Studio Ghibli’s artists used as reference for Princess Mononoke — a ravine of granite boulders, thousand-year-old cedars and a green that reads as unreal in photographs and more so in person. November is Yakushima’s driest, clearest month on an island that is otherwise famous for rain.',
    facts: [
      ['Why it is here', 'The reason to fly to Yakushima at all'],
      ['Season', 'November is the driest, clearest month'],
      ['Terrain', 'Wet granite, roots and steps — a real hike, not a stroll'],
    ],
  },

  'picchio-musasabi': {
    name: 'Flying squirrel watching, Karuizawa',
    type: 'experience',
    location: 'Karuizawa, Nagano',
    badges: ['Wildlife', '>90% success', 'Season ends 30 Nov'],
    rate: '≈ $47 / couple · 90 min',
    url: 'https://www.wildlife-picchio.com/tours/flying-squirrel-watching-tour/',
    blurb:
      'The answer to “can we see a flying squirrel without going to Hokkaido.” Picchio has run this tour since 1995 — a briefing, then a walk to a known nest tree where a camera shows the animal inside grooming and stretching, and then, at dusk, it leaves the hole and glides into the forest. Karuizawa is 1 hour 10 minutes from Tokyo on the shinkansen.',
    facts: [
      ['Species', 'Japanese giant flying squirrel — <em>musasabi</em>, roughly cat-sized. Not the same animal as Hokkaido’s Ezo momonga, which is much smaller'],
      ['Success rate', 'Better than 90%, from monitored nests with cameras'],
      ['Length', '90 minutes, from ¥3,500 per person'],
      ['November timing', 'Tours run at 16:00–17:30 because the sun sets early'],
      ['Hard deadline', '<strong>The season ends 30 November 2026.</strong> The plan books it for Monday 9 November — comfortably inside, but November dates are the last of the year, so the slots go first'],
      ['Getting there', 'Hokuriku shinkansen, Tokyo → Karuizawa, 1h10 — out after lunch, back in Tokyo the same evening'],
    ],
  },

  'arashiyama-monkeys': {
    name: 'Iwatayama monkey park',
    type: 'experience',
    location: 'Arashiyama, Kyoto',
    badges: ['Wildlife', 'Cheap and easy'],
    rate: '≈ $10 / couple',
    url: 'https://monkeypark.jp/',
    blurb:
      'A troop of more than 120 wild Japanese macaques on a hilltop above Arashiyama, with the whole of Kyoto laid out behind them — which is the shot. Twenty minutes uphill on foot from the bamboo grove you are already visiting. The monkeys are wild and unrestrained; you feed them through wire mesh from inside a hut, which is the right way round.',
    facts: [
      ['Why it is here', 'The easiest wildlife photography on the Kyoto side — it slots into the Arashiyama day you already have'],
      ['Access', 'About a 20-minute uphill walk; open 9:00–16:30, last entry 16:00'],
      ['The shot', 'Macaques on the summit clearing with the city below'],
      ['Etiquette', 'Stay 2m back, don’t crouch, don’t hold the camera out in front of you'],
      ['Not to be confused with', 'The Nagano snow monkeys — different place, no hot spring, no snow'],
    ],
  },

  'akiba-fukurou': {
    name: 'Owl café — Akiba Fukurou',
    type: 'experience',
    location: 'Akihabara, Tokyo',
    badges: ['Ashly asked for this', 'Reservation only'],
    rate: '≈ $45–50 / couple · 1 hr slot',
    url: 'https://akiba2960.com/',
    blurb:
      'Ashly asked to see an owl café, and this is the one worth booking. Akiba Fukurou runs reservation-only sessions with capped numbers and deliberately short hours, and says plainly that this is to prioritise the owls over throughput. Handling is offered rather than required — their FAQ says an owl <em>may</em> rest on your arm depending on how it is that day, and that “if an owl is resting, showing hesitation… we do not push.”',
    facts: [
      ['Why this one', 'It is the Tokyo owl venue that meets the criteria welfare reviewers apply: capped numbers, real rest, optional handling, stated veterinary care. Most Harajuku and Asakusa venues do not.'],
      ['Booking', 'Reservation only via select-type.com, no walk-ins, 3 minutes from Akihabara. Card is charged at booking. Arrive 10 minutes early — the door is locked during the session and latecomers are not admitted.'],
      ['What you get', 'A 1-hour slot; guests on the venue’s own review page report 40–45 minutes of actual owl time. Group sessions run about 10 people; private and VIP sessions are also sold. No food or drink. Photos allowed, no flash.'],
      ['Price', '<strong>Not published anywhere</strong> — it only appears inside the booking flow. Third-party reports cluster at ¥3,300–3,800 per person; treat the figure above as an estimate until you see the checkout.'],
      ['See it for yourself', 'The photographs on this page are the venue’s own marketing shots — no independent photography of the room exists. Look closely and you can see what you are actually buying: <strong>the owls are tethered by cords to their perches and to guests’ arms</strong>, and the room is a single windowless-feeling interior with its one window curtained. That may be completely fine by you. It should just be a decision rather than a surprise.'],
      ['The wider picture', 'Owl cafés as a category draw real criticism — a 2024 survey of 79 Japanese exotic-animal cafés found poor welfare scores across the board, mostly nocturnal animals kept awake in daylight under constant handling. Akiba Fukurou is the exception people point to, not the rule.'],
      ['Sugar gliders — a problem', 'Not here; Akiba Fukurou is owls only. And both Tokyo venues that kept them have fallen over: <strong>Hagu Cafe in Shinjuku closed in June 2023</strong>, and <strong>Animal Room Ikemofu in Ikebukuro has lost its website</strong> — its domain now redirects to an auction parking page, having served normally as recently as March 2026. Third-party listings still show it, but nobody should plan around it without ringing ahead. The sugar glider photographs here are species references, not pictures of any café.'],
    ],
  },

  'nara-deer': {
    name: 'Nara Park',
    type: 'place',
    location: 'Nara — 45 min from Kyoto',
    badges: ['Wildlife'],
    blurb:
      'About a thousand sika deer wandering loose among the temples, and a Great Buddha hall that is one of the largest wooden buildings on earth. The deer bow for crackers, which is a learned behaviour and reliably funny. It is the obvious use of a freed Kyoto day: 45 minutes each way, real wildlife photography, and it empties the city on a crowded weekend.',
    facts: [
      ['Antlers', 'Do not expect the big antlered stags you see in photographs. Kasuga Taisha holds its antler-cutting ceremony in October precisely because autumn is the rut, so by late November most stags have been de-antlered.'],
      ['One real caution', 'Rutting stags are the one time these deer are genuinely dangerous. Keep your distance from any that still have antlers, and don’t tease with crackers — hold them up and hand them over, or put them away.'],
      ['Season', 'The two autumn photographs here are late-November conditions from Nara City’s own tourism board. The Nandaimon and Kasuga lantern frames are summer, and are captioned as such.'],
    ],
  },

  teamlab: {
    name: 'teamLab',
    type: 'experience',
    location: 'Tokyo',
    badges: ['Optional'],
    rate: '≈ $70 / couple',
    url: 'https://www.teamlab.art/',
    blurb:
      'Immersive digital art in rooms you walk through. Listed as the alternative to a Yanaka stroll on the flexible Tokyo afternoon — it is here because it is easy to slot in, not because the trip needs it.',
    facts: [['Why it is here', 'An optional Tokyo afternoon in itineraries 1 and 5']],
  },

  // ────────────────────────────────────────────────────────── PLACES ──

  'meiji-jingu': {
    name: 'Meiji Jingu',
    type: 'place',
    location: 'Shibuya, Tokyo',
    blurb:
      'A Shinto shrine inside a planted forest of 100,000 trees in the middle of Tokyo. The approach under the great torii is the point — it takes about ten minutes to walk and the city noise disappears completely.',
  },
  'omotesando-ginkgo': {
    name: 'Jingu Gaien ginkgo avenue',
    type: 'place',
    location: 'Aoyama, Tokyo',
    blurb:
      'Tokyo’s icho turn gold in the second half of November, and the Jingu Gaien avenue is the famous one — a straight corridor of yellow, usually at peak around 20 November to 5 December — which is just after every itinerary here has left Tokyo, so expect them turning rather than fully gold. Omotesando itself, a few minutes away, is lined with zelkova rather than ginkgo; its late-year spectacle is the winter illumination, not foliage.',
  },
  'yanaka-tokyo': {
    name: 'Yanaka',
    type: 'place',
    location: 'Taito, Tokyo',
    blurb:
      'One of the few Tokyo neighbourhoods that survived both the 1923 earthquake and the war — wooden houses, temples, a long shopping street, and a famous population of cats. The low-effort alternative to teamLab on the flexible Tokyo afternoon.',
  },
  'hakone-open-air-museum': {
    name: 'Hakone Open-Air Museum',
    type: 'place',
    location: 'Ninotaira, Hakone',
    blurb:
      'Sculpture on mountain lawns, with a Picasso pavilion and a stained-glass tower you climb. It works in late autumn precisely because the setting is the exhibit — the mountains behind the sculptures are turning.',
  },
  'lake-ashi': {
    name: 'Lake Ashi',
    type: 'place',
    location: 'Hakone',
    blurb:
      'The crater lake with the red torii standing in the water at Hakone Shrine, and — on a clear day — Mt Fuji at the far end. Foliage around the lake peaks in mid-November.',
  },
  gion: {
    name: 'Gion',
    type: 'place',
    location: 'Kyoto',
    blurb:
      'The wooden teahouse district you are staying inside. Hanamikoji at dusk, the Shirakawa canal, and the lane running up to the Yasaka pagoda — all within a short walk of Sowaka, which is the argument for staying there.',
  },
  'philosophers-path': {
    name: "Philosopher's Path & Honen-in",
    type: 'place',
    location: 'Northern Higashiyama, Kyoto',
    blurb:
      'A canal walk under maples and cherries, with Honen-in’s thatched gate and raked sand a short detour off it. The itineraries send you at 8am for a reason — by ten in late November it is a queue.',
  },
  kodaiji: {
    name: 'Kodai-ji',
    type: 'place',
    location: 'Higashiyama, Kyoto',
    blurb:
      'A temple with one of Kyoto’s best autumn night illuminations — the maples lit and mirrored in the Garyu-chi pond, plus a bamboo grove behind. Jugyuan, the two-star kaiseki restaurant, is immediately next door, so dinner and the illumination are one evening.',
  },
  eikando: {
    name: 'Eikando Zenrin-ji',
    type: 'place',
    location: 'Northern Higashiyama, Kyoto',
    blurb:
      'Known for a thousand years as "Eikando of the maples". The night illumination with the pagoda above the pond is the single most photographed autumn scene in Kyoto after Tofuku-ji, and the temple sits between the Philosopher’s Path and Nanzen-ji.',
  },
  arashiyama: {
    name: 'Arashiyama',
    type: 'place',
    location: 'Western Kyoto',
    blurb:
      'The bamboo grove, the Togetsukyo bridge under a turning mountainside, Tenryu-ji’s garden, and boats on the Hozugawa. It is also the natural stop on the way back from the Raku kiln at Kameoka.',
  },
  tofukuji: {
    name: 'Tofuku-ji',
    type: 'place',
    location: 'Southern Kyoto',
    blurb:
      'The Tsutenkyo bridge crossing a ravine filled with maples — the definitive Japanese autumn photograph, and correspondingly crowded. Go at opening. The modern zen gardens around the Hojo are worth as much time as the bridge.',
  },
  rurikoin: {
    name: 'Rurikoin',
    type: 'place',
    location: 'Yase, northern Kyoto',
    blurb:
      'Famous for one thing: red maples reflected in a polished black lacquer table on the second floor. It opens only for a short autumn season and requires a reservation — which is why the itineraries flag it rather than assuming it.',
  },
  'sanzen-in-ohara': {
    name: 'Sanzen-in',
    type: 'place',
    location: 'Ohara, north Kyoto',
    blurb:
      'A temple in a moss garden with small stone jizo figures half-hidden in the green, forty minutes north of the city. Ohara peaks slightly earlier than central Kyoto and is dramatically less crowded — which is why the indigo day is scheduled here.',
  },
  'byodo-in-uji': {
    name: 'Byodo-in',
    type: 'place',
    location: 'Uji',
    blurb:
      'The Phoenix Hall, mirrored in its pond — the building on the ten-yen coin, from 1053. Uji is also Japan’s most important tea town, which is why the matcha experience and this are the same day.',
  },
  kenrokuen: {
    name: 'Kenrokuen',
    type: 'place',
    location: 'Kanazawa',
    blurb:
      'One of the three great gardens of Japan, and it peaks in mid-November — precisely when Itinerary 2 arrives. The yukitsuri, the rope cones rigged over the pines to protect them from snow, go up in early November and are a sight in themselves.',
  },
  'higashi-chaya': {
    name: 'Higashi Chaya',
    type: 'place',
    location: 'Kanazawa',
    blurb:
      'A preserved teahouse district of wooden lattice fronts, and the centre of Japan’s gold leaf production — Kanazawa makes about 99% of it. Several teahouses open their interiors.',
  },
  zenkoji: {
    name: 'Zenko-ji',
    type: 'place',
    location: 'Nagano',
    blurb:
      'A 7th-century temple that predates Japan’s split into Buddhist sects and therefore belongs to none of them. The main hall is one of the largest wooden buildings in the country. A natural stop between the shinkansen and Shibu Onsen.',
  },
  'lake-akan': {
    name: 'Lake Akan',
    type: 'place',
    location: 'Eastern Hokkaido',
    blurb:
      'A volcanic lake ringed by forest, home to marimo — spherical algae that grow nowhere else in this form — and to the largest Ainu settlement in Hokkaido. By late November it is pre-winter: cold, quiet, mostly empty.',
  },
  'lake-kussharo': {
    name: 'Lake Kussharo',
    type: 'place',
    location: 'Eastern Hokkaido',
    blurb:
      'Whooper swans arrive here in late autumn and gather at the lakeshore hot springs at Kotan and Sunayu, where the geothermal water keeps the ice open. Mt Io, with its sulphur vents roaring out of the ground, is a few minutes away.',
  },
  'kushiro-shitsugen': {
    name: 'Kushiro Marsh',
    type: 'place',
    location: 'Eastern Hokkaido',
    blurb:
      'Japan’s largest wetland — a flat, vast, unpeopled landscape of reed and meandering river, seen from boardwalks and hillside observatories. It is the cranes’ breeding ground and it looks like nowhere else in Japan.',
  },
  'aso-caldera': {
    name: 'Mt Aso & the caldera',
    type: 'place',
    location: 'Kumamoto',
    blurb:
      'One of the largest volcanic calderas on earth, with a live steaming crater at the middle and the Kusasenri grassland below it. The rim road is the best driving day in the whole plan.',
  },
  'kurokawa-onsen-town': {
    name: 'Kurokawa Onsen',
    type: 'place',
    location: 'Kumamoto',
    blurb:
      'The most atmospheric hot-spring village in Kyushu: wooden buildings along a river gorge, no neon, and a wooden pass that lets you use three of the town’s open-air baths. Guests walk between them in yukata and geta.',
  },
  yufuin: {
    name: 'Yufuin',
    type: 'place',
    location: 'Oita',
    blurb:
      'A hot-spring town under the twin peaks of Mt Yufu, with a lake that mists in the early morning. It is the scenic route from Fukuoka to Kurokawa rather than a destination in itself.',
  },
  sakurajima: {
    name: 'Sakurajima',
    type: 'place',
    location: 'Kagoshima',
    blurb:
      'An active volcano directly across the bay from a city of 600,000 people, which erupts often enough that ash on the car is routine. There are free public foot baths on the waterfront facing it.',
  },
  kirishima: {
    name: 'Kirishima',
    type: 'place',
    location: 'Kagoshima',
    blurb:
      'Volcanic highlands with crater lakes and a vermilion shrine standing in cedar forest — the scenic way to drive south from Aso to Kagoshima.',
  },
  'fukuoka-yatai': {
    name: 'Fukuoka yatai',
    type: 'place',
    location: 'Nakasu, Fukuoka',
    blurb:
      'Lantern-lit street-food stalls that appear along the river at night — Fukuoka has most of the ones left in Japan. Ramen is the local speciality and is off the menu for a celiac guest, so this is an atmosphere stop with careful ordering at the counters.',
  },
  'yakushima-coast': {
    name: 'Yakushima coast',
    type: 'place',
    location: 'Yakushima',
    blurb:
      'Beyond the moss forest: Oko-no-taki falling 88 metres straight off the mountain, the sea-turtle beach at Nagata Inakahama, a coastal road that circles the whole island in a few hours, and mountains that make their own weather.',
  },

  // ─────────────────────────────────────────────────────── TRANSPORT ──

  'ana-the-room': {
    name: 'ANA "The Room"',
    type: 'transport',
    location: 'SFO → HND',
    blurb:
      'The best business class seat flying to Japan — 28 inches wide, fully lie-flat, with a door that closes. SFO frequencies alternate between the new and old configurations, so the seat map must be verified before ticketing or you can end up in the old cabin on the same route.',
    facts: [
      ['Fare', '≈ $4,500–5,500 per person, booked 3–6 months out'],
      ['Warning', 'Verify the seat map before ticketing — configs alternate on SFO'],
    ],
  },
  'gran-class': {
    name: 'Gran Class',
    type: 'transport',
    location: 'Hokuriku Shinkansen',
    blurb:
      'The best train seat in Japan, and it exists only on the Hokuriku and Tohoku lines — leather recliners, eighteen seats, an attendant, and a meal served at your seat. Itinerary 2 is partly built around the fact that its route happens to run on that line.',
    facts: [['Cost', '≈ $190 for the Tokyo → Kanazawa leg']],
  },
  'shinkansen-green-car': {
    name: 'Shinkansen Green Car',
    type: 'transport',
    location: 'Tokaido Shinkansen',
    blurb:
      'Roughly domestic-first-class comfort, Tokyo to Kyoto in 2h15. The real catch with rail is luggage: large bags need reserved oversize space, which is why every rail itinerary here forwards the big cases by takkyubin and travels with overnight bags.',
    facts: [
      ['Tokyo → Kyoto', '2h15'],
      ['Luggage', 'Takkyubin forwarding, $15–22 per bag, hotel to hotel next day'],
    ],
  },
  'lexus-nx-japan': {
    name: 'Lexus NX / RX',
    type: 'transport',
    location: 'Kyushu & Hokkaido',
    blurb:
      'Rents officially from Toyota Rent a Car at $230–410/day. Roads are excellent; driving is on the left; an International Driving Permit in the 1949 Geneva booklet format is required — AAA issues it for about $20, and card-style permits are rejected.',
    facts: [
      ['Cost', '$230–410 / day'],
      ['Permit', '1949 Geneva booklet IDP from AAA — card versions are rejected'],
      ['Hokkaido note', 'Studless winter tyres are fitted free on all Hokkaido rentals'],
    ],
  },
};

export const entityList = Object.entries(entities).map(([slug, e]) => ({ slug, ...e }));
