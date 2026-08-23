// WHAT THE NAMES MEAN — the one table that knows a phrase on the runbook is a thing elsewhere.
//
// The day sheets are written the way you would say them out loud: "Check the Owakudani status
// page", "Lakeside at Moto-Hakone", "Myojinkan shuttle departs Matsumoto Station". Read on the
// day that is exactly right. Read in August, half of it is a name you have to already know.
//
// So build.mjs scans the short label fields on a day sheet — the fixed points, the ends of each
// journey leg, the meal locations — for the phrases below, and turns each one it finds into a
// link. Only those fields: the prose notes carry their own markup and are left alone.
//
// Two kinds of target, and the choice is deliberate:
//
//   entity   a card on the itinerary — a photograph and a paragraph saying what the thing is.
//            Always preferred, because "what is this" is the question being asked.
//   stop     a row on the bases page, for the stations, airports and museums the itinerary has
//            no card for. Answers "how far, and what closes it" instead, which for a transfer
//            point is the whole of what there is to know.
//
// Rules the build enforces, so this file cannot quietly rot:
//   · every entity must be one the itinerary actually renders, or the anchor is dead
//   · every stop must name a real POI in content/bases.mjs, matched on its exact `name`
//   · every phrase must match at least one day-sheet label — a phrase that matches nothing is
//     either a typo or a leftover from wording that has since changed, and both are worth knowing
//
// Matching is longest-phrase-first and respects word boundaries, so 'Matsumoto Station' wins over
// 'Matsumoto', and 'Kansai (KIX)' over 'KIX'. A label can carry more than one link: "Myojinkan
// shuttle departs Matsumoto Station" gets both.

export const crossrefs = {
  // ── where you sleep ───────────────────────────────────────────────
  'Aman Tokyo': { entity: 'aman-tokyo' },
  'Gora Kadan': { entity: 'gora-kadan' },
  SOWAKA: { entity: 'sowaka' },
  // Gion Loka is SOWAKA's own restaurant and has no card; the hotel's does name it under Dining.
  // Listed above the bare 'Gion' entry's reach on purpose — longest match wins, so the last lunch
  // points at the hotel rather than at the district it happens to be named after.
  'Gion Loka': { entity: 'sowaka' },
  Myojinkan: { entity: 'tobira-myojinkan' },
  // Sushi Kadan is on the Gora Kadan property and has no card of its own, but the hotel's card
  // carries a fact row about it — including that it is a separate kitchen for the GF brief.
  'Sushi Kadan': { entity: 'gora-kadan' },

  // ── where you eat ─────────────────────────────────────────────────
  "L'Effervescence": { entity: 'leffervescence' },
  'Kikunoi Honten': { entity: 'kikunoi-honten' },
  'Kodaiji Jugyuan': { entity: 'kodaiji-jugyuan' },
  'Itoh Dining by Nobu': { entity: 'itoh-dining-nobu' },

  // ── what you do ───────────────────────────────────────────────────
  'Owl café': { entity: 'akiba-fukurou' },
  'Akiba Fukurou': { entity: 'akiba-fukurou' },
  Picchio: { entity: 'picchio-musasabi' },
  'Hirata forge': { entity: 'hirata-sword' },
  'Heki kintsugi': { entity: 'heki-kintsugi' },
  // The workshop is held in the Akagane villa, so on the day this is the name you travel to.
  'Akagane Resort': { entity: 'heki-kintsugi' },
  'Iwatayama monkey park': { entity: 'arashiyama-monkeys' },
  'Kyudo studio': { entity: 'kyudo' },

  // ── where you actually are ────────────────────────────────────────
  'Meiji Jingu': { entity: 'meiji-jingu' },
  'Hakone Open-Air Museum': { entity: 'hakone-open-air-museum' },
  'Open-Air Museum': { entity: 'hakone-open-air-museum' },
  // Both ends of the lake crossing are the Lake Ashi card — the torii in the water is on it.
  Togendai: { entity: 'lake-ashi' },
  'Moto-Hakone': { entity: 'lake-ashi' },
  // The Matsumoto card covers the castle, the storehouse street and the Kusama museum together.
  'Matsumoto Castle': { entity: 'matsumoto' },
  'Matsumoto City Museum of Art': { entity: 'matsumoto' },
  'City Museum of Art': { entity: 'matsumoto' },
  Nakamachi: { entity: 'matsumoto' },
  Matsumoto: { entity: 'matsumoto' },
  Takao: { entity: 'takao' },
  'Jingo-ji': { entity: 'takao' },
  'Sanzen-in, Ohara': { entity: 'sanzen-in-ohara' },
  Ohara: { entity: 'sanzen-in-ohara' },
  Rurikoin: { entity: 'rurikoin' },
  'Kurama & Kibune': { entity: 'kurama-kibune' },
  Kibune: { entity: 'kurama-kibune' },
  Arashiyama: { entity: 'arashiyama' },
  Eikando: { entity: 'eikando' },
  'Kodai-ji': { entity: 'kodaiji' },
  Gion: { entity: 'gion' },

  // ── the ones with no card — send them to their row on the bases page ──
  Owakudani: { stop: ['hakone', 'Owakudani'] },
  'Hakone Museum of Art': { stop: ['hakone', 'Hakone Museum of Art (moss garden)'] },
  'Pola Museum of Art': { stop: ['hakone', 'Pola Museum of Art'] },
  'Pola Museum': { stop: ['hakone', 'Pola Museum of Art'] },
  Pola: { stop: ['hakone', 'Pola Museum of Art'] },
  'Hakone-Yumoto': { stop: ['hakone', 'Hakone-Yumoto'] },
  Odawara: { stop: ['hakone', 'Odawara Station'] },
  'Matsumoto Station': { stop: ['tobira', 'Matsumoto Station'] },
  // No Utsukushigahara entry: Monday resolved to staying put, so the plateau survives only as a
  // stop on the bases page and a line in Monday's prose. Nothing on a day sheet names it any more,
  // and a phrase that matches nothing fails the build rather than sitting here rotting.
  'Kyoto Station': { stop: ['kyoto', 'Kyoto Station'] },
  'Kansai (KIX)': { stop: ['kyoto', 'Kansai (KIX)'] },
  KIX: { stop: ['kyoto', 'Kansai (KIX)'] },
  Haneda: { stop: ['tokyo', 'Haneda (HND)'] },
};
