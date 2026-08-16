// The foundations that were true of all seven candidate trips — flights, rail vs self-drive,
// the gluten-free playbook, the cost model, the booking calendar. They live here because the
// ARCHIVE page still compares seven itineraries, and a shared section is the honest shape for
// that page.
//
// The plan page does NOT import this. Nothing is "shared" on a page about one trip, so the same
// material is rewritten trip-specific inside content/plan.mjs — flights that name the actual
// flights, a gluten-free brief that names the actual kitchens. Change a fact here and check
// whether plan.mjs states it too.

export const shared = {
  dateLogic: `Kyoto's 2026 foliage is forecast to peak <strong>Nov 25 – Dec 7</strong>, densest Nov 29 – Dec 3 — later than average. So itineraries wanting peak Kyoto should end as late as possible, with Kyoto last. Kenrokuen in Kanazawa peaks mid-November; the Japan Alps peaked in mid-October and Kamikochi closes Nov 15, so it is excluded; Kyushu runs early to late November; Hokkaido's foliage is already over — there it is pre-winter wildlife season instead. Crane feeding at Tsurui starts mid-to-late November; Ezo momonga are viewable year-round with a guide. Kyoto crowds are worst Nov 15–25, including the Nov 21–23 holiday weekend; the Nov 29 – Dec 3 tail has peak colour with the crowd wave passing.`,

  flights: {
    title: 'Flights from SFO',
    sub: '≈ $9,000 – $11,000 per couple, business, round trip',
    points: [
      `<strong>Best product: ANA "The Room"</strong> on SFO→HND — a 28-inch-wide lie-flat with a closing door. SFO frequencies alternate between the new and old configurations, so <strong>verify the seat map before ticketing</strong>. About $4,500–5,500 per person booked 3–6 months out.`,
      `<strong>Open-jaw into Tokyo, out of Osaka.</strong> Itineraries 1, 3 and 4 end near Kyoto. United is the only SFO–KIX nonstop, and a single United multi-city ticket (SFO→HND / KIX→SFO, Polaris) prices within about $0–500 of a normal round trip. It saves a half-day backtrack to Tokyo.`,
      `JAL from SFO still flies its older Sky Suite — the new A350 suite is not on SFO yet. Consolidator fares run $3,400–4,800 round trip if you want to shave $2,000.`,
      `Depart SFO Saturday morning, land in Japan Sunday afternoon. Return flights land at SFO the same day they leave Japan, so a Sunday departure from Japan is a Sunday arrival home.`,
    ],
  },

  transportTable: {
    title: 'Rail vs self-drive — the honest trade-offs',
    rows: [
      ['Comfort', 'Shinkansen Green/Gran Class ≈ domestic first class; 2h15 Tokyo–Kyoto', 'Lexus NX/RX rents officially from Toyota Rent a Car ($230–410/day); roads are excellent'],
      ['Freedom', 'Fixed but very frequent departures', 'Wins in rural areas — stop anywhere'],
      ['Luggage', 'The real catch: big bags need reserved oversize space. Solution — <strong>takkyubin</strong> forwarding, $15–22/bag, next-day hotel to hotel; travel with overnight bags', 'The trunk swallows everything'],
      ['Cities', 'Wins outright', 'Tokyo/Kyoto parking $50–90/day, foliage gridlock, narrow one-ways — a burden'],
      ['Safety / stress', 'Zero', 'Left-side driving; IDP required (<strong>1949 Geneva booklet from AAA, ~$20</strong> — card versions rejected); Hokkaido in late Nov means black ice, 4pm sunsets, studless tyres (fitted free on all Hokkaido rentals)'],
      ['Verdict', '<strong>Cities and trunk routes</strong>', '<strong>Rural loops: eastern Hokkaido (essentially car-only), Kyushu onsen country, Yakushima</strong>'],
    ],
    note: `The hybrid pattern — rail or fly between hubs, rent for 2–4 day rural loops, takkyubin the bags past the loop — appears in itineraries 2, 3 and 4. Private Alphard day-hire in Kyoto or Tokyo ($300–500/day) is the no-stress option for temple-hopping days.`,
  },

  glutenFree: {
    title: 'The gluten-free playbook',
    sub: 'For Ashly. This drives more of the restaurant selection than the star counts do.',
    points: [
      `<strong>Kikunoi Honten has a formal gluten-free intake</strong> on its reservation form. Declare it there — no same-day dietary requests. <strong>L'Effervescence</strong> prints a personalised GF menu, but <strong>it is closed Sundays and Mondays</strong>, and dinner-only on Tuesdays and Wednesdays — which decides for you which night of a Tokyo block it can take. <strong>Sézanne explicitly refuses gluten-free — avoid it.</strong> Monk is pizza-centric — skip.`,
      `<strong>Gora Kadan is two answers, not one — and you need the right one in writing.</strong> Its public kaiseki-restaurant page states flatly that "Vegan/Gluten-Free/Halal options are not available," and that page governs the à la carte restaurant, which sells priced courses to <em>day visitors</em>. For <em>staying guests who declare at reservation</em>, the record is the opposite and it is excellent: multiple independent celiac reviews describe full gluten-free kaiseki and breakfast, staff confirming each dish as it is set down, even gluten-free afternoon snacks. Book as a staying guest, declare in writing, and get a written reply. Beniya Mukayu, Asaba and Sankara Yakushima all accommodate with advance notice; <strong>Sankara publishes its gluten-free options outright</strong>.`,
      `Tactics: tamari instead of shoyu (request at booking, carry travel packets), yakitori shio not tare, teppanyaki salt-grilled, sushi minus nikiri and marinated pieces. Never tempura, ramen, udon or unagi. Carry a Japanese-language celiac card (Legal Nomads).`,
      `<strong>On multi-night ryokan stays, ask about the alternative courses specifically.</strong> Kitchens vary the menu across consecutive nights so you are not eating the same kaiseki twice — but the substitutes are not equally safe. Charcoal-grilled beef is salt-grilled and fine; <strong>sukiyaki warishita and shabu-shabu ponzu are both soy-based and are the two worst formats on any ryokan menu.</strong> They can be rebuilt with tamari, but only as an explicit request. Confirm each format, not just "gluten-free" in the abstract.`,
      `Backup restaurants: Gluten Free T's Kitchen in Tokyo (certified GF — they even do GF tempura) and Little Bird in Kyoto.`,
      `Send every ryokan and restaurant the gluten-free brief 4–6 weeks ahead. <strong>A detailed reply is the signal that the kitchen can be trusted</strong> — a vague one is a warning.`,
    ],
  },

  colorado: `<strong>Every itinerary below is dated to get you home before Colorado.</strong> You fly from California on Wed 25 November and are back on Sat 5 December, so each trip returns on Sun 22 November at the latest — three clear days of buffer, or more.<br><br>That has one consequence worth understanding rather than glossing over. Kyoto's 2026 foliage is forecast to peak <strong>25 November – 7 December</strong>, which is your Colorado window almost exactly, so nobody is getting central Kyoto at its absolute crest this year. But foliage is a gradient, not a switch: Kyoto colours <em>by elevation</em>, and the northern, higher districts — Takao, Kurama, Kibune, Ohara, Rurikoin — run one to two weeks ahead of the city floor. Kyoto City's own tourism pages put Takao at mid-November. A trip ending 22 November lands on those at their best, while Tofuku-ji and Eikandō are part-turned. The itineraries that spend real time in Kyoto now point north because of it.`,

  costModel: `Per-couple estimates: business flights $9–11k; ryokan rates include kaiseki dinner and breakfast; city hotels are room and breakfast only; the dining line covers all meals not included in hotels, with marquee dinners at $250–900 per couple each; experiences are priced from operator pages. A 5–8% buffer is <em>not</em> included. FX at ¥150/$.`,

  bookNow: {
    title: 'Book-now list',
    sub: 'For a November 2026 trip, acting in July–September 2026',
    groups: [
      ['Now', 'Kyoto hotels for late November (peak rooms go 9–12+ weeks out; Tawaraya and Aman-class 9–12 months). Gora Kadan. Hinanoza. Sankara. Beniya Mukayu. Flights — with the ANA seat-map check.'],
      ['Aug – early Sep', 'Kikunoi Honten via Tableall or My Concierge, declaring GF in the form. L\'Effervescence via Pocket Concierge. Zeniya (zeniya.co.jp — not the .info domain). Wabunka modules for the Hirata sword and the Heki kintsugi — the Hirata calendar is irregular, so ask early.'],
      ['Fixed windows', '<strong>Picchio\'s flying squirrel tour — the season ends 30 November 2026, so late November is its closing week and the last slots go first.</strong> Akiba Fukurou, the owl café — reservation only, and the price only appears at checkout. Goh — email exactly 60 days out. Kyudo studio — email to confirm location and dates.'],
      ['4–6 weeks out', 'Gluten-free briefs to every kitchen (celiac-specific, tamari request, fryer question). Takkyubin plan. AAA 1949-format IDP if driving.'],
    ],
  },
};
