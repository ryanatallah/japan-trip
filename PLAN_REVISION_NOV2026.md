# Plan revision brief — Nikko / Izu pivot

Research + live availability check, 23 August 2026. Written for whoever edits
`itinerary-site/content/plan.mjs`, `days.mjs`, `entities.mjs`, `history.mjs`.

Illustrated version: https://claude.ai/code/artifact/ba0c0141-8a56-4dc8-b82e-977eb2ca984f

---

## 1. New route

Trip length, flights and departure are unchanged: 15 nights, SFO→HND out Fri 6 Nov,
KIX→SFO home Sun 22 Nov.

| Dates | Was | Now | Status |
|---|---|---|---|
| Nov 7–11 (4n) | Aman Tokyo | Aman Tokyo | unchanged, conf. `62649SG260399` |
| Nov 11–15 (4n) | Gora Kadan, Hakone | **The Ritz-Carlton, Nikko** (Chugushi, Lake Chuzenji) | **booked**, conf. `89324734`, ¥1,683,650 |
| Nov 15–17 (2n) | Tobira Onsen Myojinkan | **Asaba, Shuzenji** | **offer only, NOT booked** — see §5 |
| Nov 17–22 (5n) | Sowaka, Gion | **HOTEL THE MITSUI KYOTO** (Nakagyo) | **booked**, conf. `R9GZA4213593`, $10,790 |

`route:` becomes `['Tokyo · 4n', 'Nikko · 4n', 'Shuzenji · 2n', 'Kyoto · 5n']`.
Ritz-Carlton Nikko cancellation deadline: **14 October 2026** (100% after).

### Asaba offer as quoted
- Nov 15 — Villa TENKO, ¥364,800 pp/night (220 m², detached, private open-air hinoki onsen, garden view)
- Nov 16 — MOEGI, ¥232,800 pp/night (152 m², private **indoor** bath only, pond + Noh stage view)
- Total ≈ ¥1,195,200 ≈ $7,970 @ ¥150. Full non-refundable prepayment required.
- Warned: renovation daytime noise; **indoor public baths closed**; outdoor public bath is gender-alternating.

---

## 2. Entities to remove from the live plan

| id | Why |
|---|---|
| `gora-kadan` | Hakone stay replaced |
| `tobira-myojinkan` | Alps stay replaced |
| `sowaka` | Kyoto hotel replaced |
| `itoh-dining-nobu` | Hakone restaurant |
| `lake-ashi` | Hakone |
| `hakone-open-air-museum` | Hakone |
| `matsumoto` | Alps |
| `gion` (as base) | keep as a place, demote from hero/stays context |

Also drop from copy: the Hakone two-day Freepass, the Odawara→Nagoya→Matsumoto and
Matsumoto→Nagoya→Kyoto Shinano legs, the Hakone→Kyoto takkyubin on 14 Nov, the
"three Hakone nights" argument in `verdict`, and the Gion Loka farewell lunch on Nov 22.

Two independent corrections found while researching, unrelated to the route change:
- **`sushi-wakon` appears permanently closed.** Tabelog listing on hold; Four Seasons Kyoto
  now lists Sushi Ginza Onodera in its sushi slot. Remove wherever referenced.
- **Gluten Free Cafe Little Bird is in Tokyo (Yoyogi-Hachiman), not Kyoto.** The `glutenFree`
  copy lists it as the Kyoto safety net. Replace with **Toshoan** (dedicated 100% GF bakery,
  ~9 min walk from Nijo Castle), **Uno Yukiko GF ramen** (Gion), **Waco Crepes** (100% GF,
  also sells GF soy sauce to carry).
- **`kodaiji-jugyuan` is 2-MICHELIN-star KAISEKI, not teppanyaki/wagyu.** Current copy
  describes it wrongly.

---

## 3. New entities to add

**Nikko**
- `ritz-carlton-nikko` — stay. Onsen sourced direct from Nikko Yumoto: hydrogen-sulfide
  simple sulfur, 78.6°C at source, milky on contact with air. Open 05:30–23:00 (closed 12:00–14:00).
  First onsen in the Ritz-Carlton brand.
- `lakehouse` — dining. Western/farm-to-table. **Consulting chef Kanji Kobayashi of villa aida
  (2★, Wakayama).** "Season" 7-course ¥24,000, pairing +¥17,000. Lunch ¥5,000/9,500/14,000.
- `rc-nikko-japanese` — dining. Three counters under one name: kaiseki MOMIJI ¥24,000;
  sushi GENDO ¥31,000; teppanyaki NANTAI ¥31,000; Tochigi Wagyu sukiyaki / shabu-shabu ¥24,000.
  **Sushi closed Wed & Thu. Teppanyaki closed Tue, dinner only.** 10-seat private dining room
  takes custom menus.
- `sushi-kurosaki` — dining. Chugushi 2480, literally next door to the hotel. Tabelog 3.63,
  highest-rated non-hotel restaurant in the area. Courses ¥11,000/16,500/22,000. English menu.
- `toshogu`, `taiyuinbyo`, `rinnoji`, `kanmangafuchi`, `lake-chuzenji`, `kegon-falls`,
  `senjogahara`, `yumoto-onsen`, `embassy-villas` — places.
- `goma-chuzenji` — experience. Ritz-curated fire ceremony at Chuzenji Temple.
- `nikko-bori` — experience. Woodcarving with local artisans (hotel-curated, or the
  Craft Center in town — **closed Thursdays Nov–Apr**).
- `okunikko-stargazing` — experience. Nikko Natural Science Museum night animal watching +
  stargazing, historically November **Saturdays**, ~16:30–18:50, ¥3,000. Sat 14 Nov is the
  likely 2026 date.

**Izu**
- `asaba` — stay. 1489, 12 rooms, Noh stage (Gekkeiden) over the pond, longest-standing
  Relais & Châteaux member in Japan, **3 MICHELIN Keys**. Check-in 14:30, check-out 11:30.
  No station shuttle but fixed-rate taxi service exists.
- `izu-panorama-park` — place. Ropeway to Mt Katsuragi, Ao Terrace with reservable private
  booths, Fuji + Suruga Bay. ¥1,800, 09:00–17:00 winter hours.
- `nirayama` — place. UNESCO reverberatory furnaces, ¥500, 09:00–16:30, closed 3rd Wednesday.
- `shuzenji-momijirin` — place. ~1,000 maples. Peak **late Nov–early Dec** — expect
  green-to-turning on 16 Nov.

**Kyoto**
- `hotel-the-mitsui-kyoto` — stay. 3 MICHELIN Keys (2nd consecutive year), Forbes Five-Star,
  World's 50 Best Hotels 2025. On top of Nijojo-mae (Tozai T14).
- `toki` — dining. Kyoto-**French**, chef Tetsuya Asano (ex-Ritz Paris, Bocuse d'Or 2027 Japan
  rep). Dinner ¥24,500; lunch ¥8,500 / ¥12,000 / ¥15,000. **MICHELIN "Selected", not starred.**
- `isshisoden-nakamura` — dining. **3★**, Nakagyo, ~5 min walk from the hotel. Direct English
  online booking, min 3 days, prepaid. Lunch generally Wed & Sat only; dinner 17:00–18:30 seatings.
- `nijojo-furuta` — dining. **1★** kaiseki, charcoal-focused, few minutes' walk, open 7 days.
- `nijo-castle-illumination` — place/event. **"NAKED meets Nijo Castle 2026", 23 Oct – 5 Dec,
  nightly 18:00–22:00** (last admission 21:00), ¥2,000 weekday / ¥2,400 weekend,
  advance online booking required.

---

## 4. Availability — checked live, 23 Aug 2026

Method: drove each booking system directly; nothing submitted.

**Critical distinction: almost nothing is "sold out". The booking windows have not opened.**

| Item | Date | Verdict |
|---|---|---|
| **L'Effervescence** (Tokyo 3★) | Tue 10 Nov | ⚠️ **Window shut.** Their page states verbatim: current reservation period *until Sat Oct 24 2026*; **next round opens Aug 25, 2026, 00:00 JST** (= Mon 24 Aug, 08:00 PDT). Closed Sun & Mon, so Tuesday is the only viable night of the Tokyo block. Book at `omakase.in/en/r/tm207964`. ¥390/seat fee, Chef's Tasting ¥49,500 + 15%. |
| **Kikunoi Honten** (Kyoto 3★) | Tue 17 Nov | ❌ **Closed every Tuesday** — TABLEALL's calendar greys 3/10/17/24 Nov. Cannot be the arrival-night booking. |
| **Kikunoi Honten** | Wed 18 – Sun 22 Nov | ⚠️ **Window shut.** Pocket Concierge live inventory: seats exist 21 Oct, none 24 Oct → ~2-month rolling release. **Opens ~17–22 Sep 2026.** TABLEALL will take a brokered *request* now (¥8,000 fee inside the price) but that is not a confirmation. |
| **Kodaiji Jugyuan** (2★) | Fri 20 Nov | ✅ **Bookable now — verified end-to-end.** Carried 2 people / 18:00 / ¥30,000 dinner through TableCheck validation to guest details. Sat 21 also open. Closed Mondays. |
| **TOKI** (Mitsui) | Tue 17 & Sun 22 Nov | ✅ **Bookable now.** Full slate both dates. **Sunday 11:30 lunch exists** — solves the departure-day meal. |
| **Isshisoden Nakamura** (3★) | Sat 21 Nov lunch | ✅ **Bookable now.** Direct English booking, min 3 days. |
| **Ritz Nikko — Japanese Restaurant** | 11–14 Nov | ⚠️ **No live data.** TableCheck accepts all Nov dates but the time list is a fixed two-seating template (17:00–17:30 / 19:30–20:00) identical on every date. Book by email. |
| **Ritz Nikko — Lakehouse** | 11–14 Nov | ✅ Open, no published closing day. |
| **Asaba** | 15–17 Nov | ❌ Not booked, and no coeliac accommodation confirmed. |

**Methodology warning worth keeping in the repo:** TableCheck time dropdowns are schedule
templates, not availability. Kodaiji Jugyuan offered a full slate of slots for **Monday
23 November, a day it is closed**. Only trust a date after pushing a real party + time +
course through validation.

---

## 5. Asaba — recommend renegotiating or switching

The property is excellent; this specific offer stacks six negatives against a non-refundable
prepayment:

1. Renovation noise on the **one full day**.
2. Both indoor communal baths closed.
3. **Night two has no open-air bath available to them as a couple** — Moegi's private bath is
   indoor only, and the surviving outdoor public bath is gender-alternating. Not flagged by
   the ryokan.
4. Mid-stay room move → repacking, and re-briefing a second room attendant on coeliac.
5. **+21.7% YoY.** A documented Nov 2025 stay in the same Moegi room cost ¥191,220 pp;
   quoted ¥232,800 pp — for a Monday, with noise and closed baths.
6. **Renovation documented nowhere** — not on Asaba's news page, JTB, Ikyu, or TripAdvisor
   reviews through May 2026.

**Ask before paying:** (a) are the two private baths 南天湯 / 卵の花湯 still open and
reservable? (b) Villa Tenko both nights at the same total? Then push 15–25% off the Moegi
night citing the 2025 rate, and get written terms covering the renovation expanding.

**Coeliac:** no first-hand coeliac report about Asaba exists anywhere. The one site claiming
a "celiac-specific written confirmation track record" is unsourced AI-generated SEO content —
do not rely on it. Both meals are served in-room and plated per guest, which is structurally
favourable, but require the **adapted menu dish-by-dish in writing for all four meals before
any money moves.**

**Fallback if it doesn't move: Gora Kadan (Hakone).** Also 3 MICHELIN Keys + R&C, so no drop
in tier; Hakone departs for Kyoto from Odawara (a proper Hikari hub) rather than a dead-end
private railway; and it is **one of only two properties in the region with independently
documented coeliac accommodation.** Also price Gora Kadan Fuji (opened Jul 2025, private
onsen in every suite, dining supervised by 3★ Hiroyuki Kanda and 2★ Keiji Nakazawa) and
Arcana Izu (French auberge — structurally far easier for coeliac than kaiseki).

---

## 6. Transport — the new weak point

**Nov 15, Nikko → Shuzenji is the worst day of the trip.** Nikko and Izu are on opposite sides
of Tokyo: ~6 hours, 5 changes, 6 conveyances (bus down the Irohazaka ~48 min → Spacia X to
Asakusa ~1h50 → cross to Tokyo Station → Tokaido Shinkansen to Mishima → Izuhakone Sunzu line,
**JR passes invalid**, 2–3 cars, no luggage space → taxi).

- **Recommend a private car:** ~290–310 km, 4h30–5h30, est. ¥130,000–200,000 (must be quoted).
  Allows a Fuji stop near Gotemba.
- **Nov 17, Shuzenji → Kyoto:** check-out 11:30 misses the 11:46 Hikari from Mishima and costs
  70 min. Book **Asaba's fixed-rate taxi direct to Mishima**, skip the Sunzu line, depart 10:40,
  Hikari 709 at 11:46 → Kyoto 13:37.
- **Takkyubin:** forward large bags from Nikko on **14 Nov**, not the 15th — mountain pickups
  miss the same-day truck. Then Asaba → Kyoto on **16 Nov** for 17 Nov delivery.
- **Spacia X (Tokyo → Nikko, 11 Nov):** reservations open exactly one month ahead at
  09:00 JST = **11 October 2026**. Compartment ¥11,340pp / Cockpit Suite ¥21,340pp sell out
  in minutes.
- The Ritz-Carlton Nikko's own site **contradicts itself on whether a shuttle exists** —
  confirm directly; it changes every ground decision, and there is no bus to Hangetsuyama
  after ~12 Nov.

---

## 7. Nikko — food

**Headline finding: there is no MICHELIN-starred, Bib Gourmand or "selected" restaurant
anywhere in Tochigi prefecture.** The guide has never published a selection there. The highest
Tabelog score in Nikko city is 3.72 (a ¥3,000 steakhouse). No restaurant in the prefecture
publishes an allergen menu. There is no dedicated gluten-free venue.

**Therefore: treat this as a four-night half-board stay.** Lakehouse's villa aida lineage makes
it genuinely the best cooking within reach, and one kitchen with four days to learn Ashly's
requirements beats four kitchens learning it once. The alternative is a 30–45 min descent of
the Irohazaka after dark, at 1,270 m, in November, to reach a dining room closing at 20:00.

**Risk to clear first:** byFood's listing for The Japanese Restaurant states they *"reserve the
right to refuse reservations to guests who have excessive dietary restrictions."* Surface this
**before** the booking is locked. Counter-signal, and it is a good one: their Japanese booking
form asks you to state the severity of a restriction *"including whether it extends to the
dashi"* — a kitchen thinking at the right resolution.

### Dinners — sequenced easiest to hardest

| Date | Booking | Why this order |
|---|---|---|
| Wed 11 | **Lakehouse "Season"** ¥24,000 | Lowest risk: a Western kitchen has no shoyu/mirin/dashi baseline at all. Use as the in-person calibration meal on night one. |
| Thu 12 | **Teppanyaki NANTAI** ¥31,000 | Safest Japanese format — every ingredient hits the plancha in front of her. Request clean griddle section, no soy marinades, tamari + plain citrus. Sushi is closed Thursdays. |
| Fri 13 | **Sushi GENDO** ¥31,000 *(or Sushi Kurosaki next door, ¥16,500)* | First night sushi is open. Hazards: nikiri brush, anago tare, tamagoyaki, blended sushi vinegar. Ask for no nikiri, skip anago and tamago. |
| Sat 14 | **Kaiseki MOMIJI ¥24,000 in the 10-seat private room, menu agreed in advance** | Highest-exposure format, saved for last once the kitchen has three days of practice. If they hedge, switch to Tochigi Wagyu shabu-shabu ¥24,000 — nearly as good, structurally far safer. |

### Lunches
Lakehouse "Harvest" ¥14,000 · Nikko Kanaya Hotel Main Dining (1873 French; brief them; online
booking closes 17:00 the day before) · Lakehouse Grab & Go picnic for the Senjogahara day ·
British Embassy Villa tea room (last order 14:30).

### Do not book
- **"Nikko Gozen" lunch ¥7,500** — the hotel's own menu describes it as containing **tempura,
  red miso soup and barley rice**. Two hard nos in one set.
- **"Soba-Gozen" ¥7,500** — Nikko soba is nihachi, 80% buckwheat / 20% wheat binder.
- **Gyoshintei shojin ryori** — counterintuitive but firm: **fu is baked wheat gluten and a
  cornerstone of Buddhist vegetarian cooking**. The "vegetarian" framing actively misleads.
  Operating status also uncertain (removed from its group's own site).
- **Meiji no Yakata** — omurice, demi-glace, fryer; takes no lunch reservations.
- **Any yuba *nimono* or *agemaki*** — see below.

### The yuba trap
Yuba itself is safe (Nikko Yuba Seizō lists soybeans and nothing else). But Tochigi's official
local dish *agemaki yuba no nimono* is rolled yuba **deep-fried** then **simmered in dashi,
soy sauce and mirin** — shared fryer plus a wheat braise absorbed through. A yuba restaurant
that hasn't considered this will serve it in good faith. Steer to *nama-yuba*: raw, plain,
with wasabi, salt, or a separately prepared tamari dip.

---

## 8. Nikko — activities

**Foliage: four weeks late for the lake, dead-on for the shrines.** Okunikko (1,270 m) peaks
mid-October; Weathernews logged Lake Chuzenji as "finished, <40% leaves remaining" on
**11 Nov 2025 — the exact calendar date of arrival, one year prior**. Toshogu and
Kanmangafuchi (~600 m) peak **early-to-mid November** and should be at or near best.

**Structural implication: invert the usual itinerary.** Base high for nature, onsen and quiet;
**descend twice** for colour. Budget two trips down the Irohazaka.

**Hard closure: the Akechidaira Ropeway is closed 16 Jan 2026 → 31 Aug 2027** for
reconstruction, and the observatory is reachable only by it. Substitute **Hangetsuyama
Observatory** via the Chuzenji Lake Skyline (open until ~late Nov; the bus up it stops
~9–12 Nov, so private car from the 13th).

**What November buys instead:** new moon was 9 Nov, so 11–15 Nov is a thin waxing crescent
setting early — effectively dark skies every night, at 1,270 m, sunset 16:35, full darkness
by 18:00. Plus arriving winter waterfowl (goldeneye, pochard, pintail, **smew**, waxwings,
hawfinch) and leafless forest making sika deer far easier to find.

**Open on these dates:** Lake Chuzenji cruise (to 30 Nov; reduced from 5 Nov, first sailing
10:30, ¥1,250) · Kegon Falls elevator (08:00–17:00, ¥570) · Embassy Villa parks (to 30 Nov —
**hours drop to 09:00–16:00 exactly from 11 Nov**, ¥450 combo) · Senjogahara boardwalk
(should have reopened 31 Oct after works — re-verify in October) · Onsenji (season ends late
Nov, confirm the 2026 date) · Nikko Botanical Garden (to 30 Nov, closed Mondays).

**Gone:** the Shoyoen and Toshogu/Taiyuin light-ups both ended in early November in 2025.

**Bear safety:** sightings ran high through autumn 2025. Hire a guide for any Senjogahara
walking — Nikko Natural Science Museum private guide ¥25,000 half-day / ¥45,000 full day
(**English capability not stated — verify**).

**Skip Mashiko.** ~2h–2h30 each way from Chugushi *after* descending the Irohazaka — a
five-hour driving round trip out of a ten-hour daylight window. Nikko-bori is on property.

---

## 9. Kyoto — the Nijo base is an upgrade

| Destination | vs Gion |
|---|---|
| Arashiyama | ⬆️⬆️ JR Nijo → Saga-Arashiyama direct, 7–10 min (was a 45-min cross-city trek) |
| Eikando / Nanzenji | ⬆️⬆️ Nijojo-mae T14 → Keage T09 direct, 5 stops, no change |
| Takao | ⬆️ ~30 min taxi; genuinely easy from the west side |
| Nijo Castle | ⬆️⬆️ across the street |
| Kodai-ji, Gion | ↔️ direct Tozai, ~20 min |
| Rurikoin, Kurama/Kibune | ⬇️ need the Eizan line from Demachiyanagi — **taxi these** |

**Windfall: "NAKED meets Nijo Castle 2026", 23 Oct – 5 Dec, nightly 18:00–22:00**, ¥2,000
weekday / ¥2,400 weekend, advance online booking required — covers every night of the stay,
three minutes from the door. Buy two nights so weather can't kill it.

**Foliage 17–22 Nov:** Takao at/just past peak; Kurama-Kibune peak; Ohara peak-to-past;
Rurikoin turning-to-peak; Arashiyama mixed; **Eikando, Nanzenji, Tofukuji, Kiyomizu, Kodai-ji
turning but not peak** (those are late-Nov/early-Dec temples); city centre mostly green.
Give the mountains the good days. **21–23 Nov is a three-day national holiday** — Sat 21 and
Sun 22 are the two most congested days of the trip.

### Suggested 5 nights

| Date | Day | Dinner |
|---|---|---|
| Tue 17 | Arrive; private onsen; Nijo Castle illumination | **TOKI** ¥24,500 (no transit; kitchen meets her needs in person on night one) |
| Wed 18 | **Takao** — Jingo-ji, Kozan-ji | **Kikunoi Honten ★★★**, 17:00/17:30 |
| Thu 19 | Ohara *or* Kurama–Kibune; Eikando illumination on a weeknight | **Nijojo Furuta ★**, walkable |
| Fri 20 | Arashiyama (7 min by JR); Kodai-ji illumination | **Kodaiji Jugyuan ★★** — book today, it's the only completable Kyoto booking right now |
| Sat 21 | **Stay local** — Nijo Castle at 08:45, Nishiki, Toshoan | Lunch **Isshisoden Nakamura ★★★**; dinner FORNI or Kikunoi Roan ★★ |
| Sun 22 | Depart | **Lunch TOKI 11:30**, ¥12,000 — table to car in 60 seconds |

**Both 3-star requirements met:** L'Effervescence (Tokyo) and Kikunoi Honten (Kyoto), with
Isshisoden Nakamura as a same-tier Kyoto fallback that books directly in English.

**Also set an 1 October alarm for Rurikoin** — reservations mandatory ~8 Nov – 7 Dec, open
early October. And re-verify Eikando's 2026 illumination dates in October; the widely quoted
Nov 17–30 is one aggregator's figure, not official.

---

## 10. Gluten-free — the load-bearing item

Across Nikko, Shuzenji and Kyoto there is **no restaurant publishing a reliable allergen menu**,
and in Tochigi no dedicated GF venue at all. There is no fallback to walk into. One written
brief, sent early, to every kitchen.

**Content:** name it medically (セリアック病, autoimmune, not a preference) · enumerate rather
than generalise — 小麦 wheat, 大麦 barley, 麩 fu, 醤油 soy sauce (**tamari only**), みりん mirin,
麦味噌 barley miso, そば soba, 揚げ物 fried · **answer the dashi question before they ask**
(kombu + katsuobushi only, no powdered/blended) · state cross-contamination explicitly
(separate fryer oil, clean griddle section, no shared nikiri brush, separate board) ·
**ask them to confirm they accept the booking on these terms**, which surfaces any refusal
clause while there is still time to re-plan.

**Send now:**
- **Ritz-Carlton Nikko** — `rc.nikko.RestaurantReservation@ritzcarlton.com` (email, not the web
  form: written record + private-room kaiseki agreed in advance).
- **Asaba** — before any money moves; dish-by-dish for all four meals.
- **Hotel The Mitsui** — their published allergy policy admits shared kitchens and shared
  dishwashers and **reserves the right to refuse guests with severe allergies**. Ask
  specifically whether TOKI can run a dedicated prep surface and separate fryer. FORNI, a
  wood-fired pizza/pasta room with airborne flour, is the higher-risk of the two.
- **At booking** — Kikunoi and Jugyuan, in the reservation form itself, not afterwards.

**Kyoto-specific trap:** **nama-fu (生麩) is a signature Kyoto kaiseki ingredient** and the one
most GF guides miss. Name it explicitly alongside tamari, rice miso only, and no fried course.
Kikunoi's dashi is bonito + kombu made in house — naturally safe.

**Carry regardless:** sealed tamari sachets and a Japanese coeliac card explaining
cross-contact, not just "no gluten."
