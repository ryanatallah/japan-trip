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
