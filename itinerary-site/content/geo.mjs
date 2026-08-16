// Coordinates for every place a route touches, plus the route of each itinerary.
// Used by build.mjs to draw an inline SVG map — no tile server, no network.

export const places = {
  tokyo:      { lon: 139.767, lat: 35.681, name: 'Tokyo' },
  ome:        { lon: 139.238, lat: 35.788, name: 'Ome' },
  karuizawa:  { lon: 138.633, lat: 36.348, name: 'Karuizawa' },
  hakone:     { lon: 139.052, lat: 35.244, name: 'Hakone' },
  nagano:     { lon: 138.187, lat: 36.649, name: 'Nagano' },
  shibu:      { lon: 138.435, lat: 36.735, name: 'Shibu Onsen' },
  jigokudani: { lon: 138.463, lat: 36.733, name: 'Jigokudani' },
  tobira:     { lon: 138.128, lat: 36.192, name: 'Tobira Onsen' },
  matsumoto:  { lon: 137.972, lat: 36.238, name: 'Matsumoto' },
  shinhotaka: { lon: 137.564, lat: 36.281, name: 'Shinhotaka' },
  kinosaki:   { lon: 134.805, lat: 35.625, name: 'Kinosaki Onsen' },
  toyooka:    { lon: 134.832, lat: 35.518, name: 'Toyooka storks' },
  kanazawa:   { lon: 136.656, lat: 36.561, name: 'Kanazawa' },
  kaga:       { lon: 136.349, lat: 36.301, name: 'Kaga' },
  kyoto:      { lon: 135.768, lat: 35.012, name: 'Kyoto' },
  arashiyama: { lon: 135.671, lat: 35.013, name: 'Arashiyama' },
  ohara:      { lon: 135.834, lat: 35.119, name: 'Ohara' },
  nara:       { lon: 135.843, lat: 34.685, name: 'Nara' },
  uji:        { lon: 135.807, lat: 34.891, name: 'Uji' },
  kushiro:    { lon: 144.382, lat: 42.984, name: 'Kushiro' },
  akan:       { lon: 144.096, lat: 43.443, name: 'Lake Akan' },
  kussharo:   { lon: 144.338, lat: 43.602, name: 'Lake Kussharo' },
  tsurui:     { lon: 144.312, lat: 43.227, name: 'Tsurui' },
  fukuoka:    { lon: 130.401, lat: 33.590, name: 'Fukuoka' },
  yufuin:     { lon: 131.361, lat: 33.264, name: 'Yufuin' },
  kurokawa:   { lon: 131.144, lat: 33.089, name: 'Kurokawa Onsen' },
  aso:        { lon: 131.084, lat: 32.884, name: 'Mt Aso' },
  kirishima:  { lon: 130.871, lat: 31.930, name: 'Kirishima' },
  kagoshima:  { lon: 130.558, lat: 31.596, name: 'Kagoshima' },
  yakushima:  { lon: 130.560, lat: 30.358, name: 'Yakushima' },
};

// `stops` are overnight bases in order; `mode` is how you arrive from the previous one.
// `trips` are day excursions that return to their base the same day.
// `at` positions the label relative to the dot, to keep them off each other.
export const routes = {
  'peak-momiji-classic': {
    stops: [
      { id: 'tokyo', nights: 4, at: 'right' },
      { id: 'hakone', nights: 2, mode: 'rail', at: 'bottom' },
      { id: 'kyoto', nights: 8, mode: 'rail', at: 'left' },
    ],
    trips: [
      { from: 'tokyo', to: 'ome', mode: 'rail', at: 'top' },
      { from: 'tokyo', to: 'karuizawa', mode: 'rail', at: 'top' },
      { from: 'kyoto', to: 'nara', mode: 'rail', at: 'bottom' },
    ],
    inOut: 'Fly in to Tokyo (HND), out of Osaka (KIX)',
  },

  'momiji-with-a-detour': {
    stops: [
      { id: 'tokyo', nights: 4, at: 'right' },
      { id: 'hakone', nights: 3, mode: 'rail', at: 'bottom' },
      { id: 'tobira', nights: 3, mode: 'rail', at: 'right' },
      { id: 'kyoto', nights: 5, mode: 'rail', at: 'left' },
    ],
    trips: [
      { from: 'tokyo', to: 'ome', mode: 'rail', at: 'left' },
      { from: 'tokyo', to: 'karuizawa', mode: 'rail', at: 'top' },
      { from: 'tobira', to: 'matsumoto', mode: 'road', at: 'top' },
      { from: 'tobira', to: 'shinhotaka', mode: 'road', at: 'left' },
    ],
    inOut: 'Fly in to Tokyo (HND), out of Osaka (KIX) — both Alps legs route via Nagoya',
  },

  'momiji-then-the-coast': {
    stops: [
      { id: 'tokyo', nights: 4, at: 'right' },
      { id: 'hakone', nights: 2, mode: 'rail', at: 'bottom' },
      { id: 'kyoto', nights: 4, mode: 'rail', at: 'bottom' },
      { id: 'kinosaki', nights: 4, mode: 'rail', at: 'left' },
    ],
    trips: [
      { from: 'tokyo', to: 'ome', mode: 'rail', at: 'top' },
      { from: 'tokyo', to: 'karuizawa', mode: 'rail', at: 'top' },
      { from: 'kinosaki', to: 'toyooka', mode: 'road', at: 'bottom' },
    ],
    inOut: 'Fly in to Tokyo (HND), out of Osaka (KIX) — about 4 hours from Kinosaki on the last day',
  },

  'crafts-crab-snow-monkeys': {
    stops: [
      { id: 'tokyo', nights: 3, at: 'right' },
      { id: 'shibu', nights: 2, mode: 'rail', at: 'top' },
      { id: 'kanazawa', nights: 2, mode: 'rail', at: 'left' },
      { id: 'kaga', nights: 2, mode: 'rail', at: 'left' },
      { id: 'kyoto', nights: 5, mode: 'rail', at: 'bottom' },
    ],
    trips: [
      { from: 'tokyo', to: 'ome', mode: 'rail', at: 'bottom' },
      { from: 'tokyo', to: 'karuizawa', mode: 'rail', at: 'bottom' },
      { from: 'shibu', to: 'jigokudani', mode: 'road', at: 'right' },
    ],
    inOut: 'Fly in to Tokyo (HND), out of Osaka (KIX)',
  },

  'wildlife-north': {
    stops: [
      { id: 'tokyo', nights: 1, at: 'right' },
      { id: 'akan', nights: 3, mode: 'air', at: 'left' },
      { id: 'kushiro', nights: 1, mode: 'road', at: 'bottom' },
      { id: 'kyoto', nights: 9, mode: 'air', at: 'left' },
    ],
    trips: [
      { from: 'akan', to: 'kussharo', mode: 'road', at: 'top' },
      { from: 'akan', to: 'tsurui', mode: 'road', at: 'right' },
      { from: 'kyoto', to: 'nara', mode: 'rail', at: 'bottom' },
    ],
    inOut: 'Fly in to Tokyo (HND), out of Osaka (KIX)',
  },

  'southern-warmth': {
    stops: [
      { id: 'fukuoka', nights: 2, at: 'top' },
      { id: 'kurokawa', nights: 2, mode: 'road', at: 'right' },
      { id: 'kagoshima', nights: 1, mode: 'road', at: 'left' },
      { id: 'yakushima', nights: 3, mode: 'air', at: 'bottom' },
      { id: 'kyoto', nights: 6, mode: 'air', at: 'right' },
    ],
    trips: [
      { from: 'kurokawa', to: 'aso', mode: 'road', at: 'bottom' },
      { from: 'kyoto', to: 'nara', mode: 'rail', at: 'bottom' },
    ],
    inOut: 'Fly in to Fukuoka via Tokyo, out of Osaka (KIX)',
  },

  'grand-tour': {
    stops: [
      { id: 'tokyo', nights: 3, at: 'right' },
      { id: 'akan', nights: 4, mode: 'air', at: 'left' },
      { id: 'kyoto', nights: 7, mode: 'air', at: 'left' },
      { id: 'hakone', nights: 2, mode: 'rail', at: 'bottom' },
    ],
    // The route ends back where it started; drawn as a closing leg rather than a
    // second numbered dot on top of the first.
    returnTo: { id: 'tokyo', nights: 2, mode: 'rail' },
    trips: [
      { from: 'tokyo', to: 'karuizawa', mode: 'rail', at: 'top' },
      { from: 'akan', to: 'kussharo', mode: 'road', at: 'top' },
      { from: 'kyoto', to: 'nara', mode: 'rail', at: 'bottom' },
    ],
    inOut: 'Fly in and out of Tokyo (HND) — a final night there before the flight',
  },
};

export const modeLabel = { rail: 'Rail', air: 'Flight', road: 'Drive' };
