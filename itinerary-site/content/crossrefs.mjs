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
  'Ritz-Carlton Nikko': { entity: 'ritz-carlton-nikko' },
  Asaba: { entity: 'asaba-ryokan' },
  'Hotel The Mitsui': { entity: 'hotel-the-mitsui-kyoto' },
  // FORNI is the Mitsui's own Italian room and has no card; the hotel's names it under Dining.
  FORNI: { entity: 'hotel-the-mitsui-kyoto' },

  // ── where you eat ─────────────────────────────────────────────────
  "L'Effervescence": { entity: 'leffervescence' },
  'Kikunoi Honten': { entity: 'kikunoi-honten' },
  'Kodaiji Jugyuan': { entity: 'kodaiji-jugyuan' },

  // ── what you do ───────────────────────────────────────────────────
  'Owl café': { entity: 'akiba-fukurou' },
  'Akiba Fukurou': { entity: 'akiba-fukurou' },
  Picchio: { entity: 'picchio-musasabi' },
  'Hirata forge': { entity: 'hirata-sword' },
  'Heki kintsugi': { entity: 'heki-kintsugi' },
  // The workshop is held in the Akagane villa, so on the day this is the name you travel to.
  'Akagane Resort': { entity: 'heki-kintsugi' },
  'Iwatayama monkey park': { entity: 'arashiyama-monkeys' },
  Iwatayama: { entity: 'arashiyama-monkeys' },
  'Kyudo session': { entity: 'kyudo' },

  // ── where you actually are ────────────────────────────────────────
  'Meiji Jingu': { entity: 'meiji-jingu' },
  // The Toshogu card covers the whole shrine precinct — Rinnoji, Taiyuin and Shinkyo included.
  Toshogu: { entity: 'nikko-toshogu' },
  Takao: { entity: 'takao' },
  'Jingo-ji': { entity: 'takao' },
  'Sanzen-in, Ohara': { entity: 'sanzen-in-ohara' },
  Ohara: { entity: 'sanzen-in-ohara' },
  Rurikoin: { entity: 'rurikoin' },
  Kurama: { entity: 'kurama-kibune' },
  Kibune: { entity: 'kurama-kibune' },
  Arashiyama: { entity: 'arashiyama' },
  Eikandō: { entity: 'eikando' },
  'Kodai-ji': { entity: 'kodaiji' },

  // ── the ones with no card — send them to their row on the bases page ──
  // Rinnoji opens an hour before everything else in the precinct, which is the fact that shapes
  // the Nikko day, and it is the bases row rather than the Toshogu card that carries it.
  Rinnoji: { stop: ['nikko', 'Rinnoji — Sanbutsudo, Taiyuin, Shoyoen'] },
  'Chuzenji Onsen': { stop: ['nikko', 'Chuzenji Onsen terminal'] },
  'Nikko Kanaya Hotel': { stop: ['nikko', 'Nikko Kanaya Hotel'] },
  'JR Nikko': { stop: ['nikko', 'Tobu-Nikko / JR Nikko stations'] },
  'Tobu-Nikko': { stop: ['nikko', 'Tobu-Nikko / JR Nikko stations'] },
  'Joren Falls': { stop: ['shuzenji', 'Joren Falls'] },
  Darumayama: { stop: ['shuzenji', 'Darumayama Kōgen'] },
  'Niji-no-Sato': { stop: ['shuzenji', 'Shuzenji Niji-no-Sato'] },
  // Mishima is where the rental car is collected on the way in and dropped on the way out, so it
  // is a transfer point twice over — the bases row is the thing worth reaching.
  Mishima: { stop: ['shuzenji', 'Mishima Station'] },
  'Tokyo Station': { stop: ['tokyo', 'Tokyo Station'] },
  'Kyoto Station': { stop: ['kyoto', 'Kyoto Station'] },
  KIX: { stop: ['kyoto', 'Kansai (KIX)'] },
  Haneda: { stop: ['tokyo', 'Haneda (HND)'] },
};
