# Japan 2026 — the plan, illustrated

A self-contained static site for one trip: **Itinerary 1B, *The Classic, with the Alps*, 15 nights,
6–22 November 2026**, chosen on 15 August 2026. The six routes it beat are kept alongside it, with
their photographs and their verdicts, so the decision stays open to re-examination.

## Open it

Double-click `site/index.html` — it works straight off the filesystem, no server needed.

To serve it locally instead (nicer URLs, correct caching):

```bash
python3 -m http.server 8765 --directory "site"
```

The whole `site/` folder is portable: zip it, AirDrop it, drop it on any static host. It makes
**zero external network requests**, so it renders identically offline and on a phone in a hotel lobby.

## The three pages

| Page | What it is |
|---|---|
| `site/index.html` | **The plan.** The idea and route map, getting there, getting around, where you sleep / eat / do / are, day by day, what it costs, and the booking calendar. |
| `site/history.html` | **Change history.** Every change to the plan, newest first, with the money and nights it moved. |
| `site/archive.html` | **Archive.** The seven-way comparison: glance table, seven cards, the wish-list matrix, how the choice was framed, what was cut, and the shared foundations. |

Plus `site/<itinerary>.html` for each of the six archived alternates, each banner-marked as *not*
the plan, and `site/momiji-with-a-detour.html`, a redirect stub at the URL the plan was published
at before it became the plan.

Every photo opens in a lightbox with its caption and a link to where it came from. Arrow keys and
swipe move through a gallery; `Esc` closes. Light and dark themes; the ◐ button overrides your system
setting.

## Changing the plan

**Two files, every time.** Edit `content/plan.mjs`, then add an entry to the top of
`content/history.mjs` describing what moved and why. Then `node build.mjs` and commit the rebuilt
`site/`.

| File | What it holds | How often it changes |
|---|---|---|
| `content/plan.mjs` | **The plan.** Days, route, stays, dining, experiences, costs — plus its own flights, transport, gluten-free brief and booking calendar | **Every plan PR** |
| `content/history.mjs` | The change log rendered on `history.html` | **Every plan PR** |
| `content/entities.mjs` | Every hotel, restaurant, experience, place: copy, rates, facts, gluten-free notes. Shared by the plan and the archive — copy here must read correctly in both | When a property changes |
| `content/geo.mjs` | Map coordinates and each route's stops, nights, day trips and travel mode. The plan's key is `plan` | When the route changes |
| `content/alternates.mjs` | The six archived routes, plus the wish-list and how-to-choose tables | **Frozen** — see below |
| `content/shared.mjs` | The foundations as they read across all seven, for the archive only | Rarely |
| `content/itineraries.mjs` | Compatibility shim: `[plan, ...alternates]`, for `tools/audit.mjs` and the archive's tables | Never |
| `content/media.json` | Generated. The photo manifest — captions, categories, sources | `tools/process.mjs` |
| `content/japan-outline.json` | Generated once. Simplified coastline for the route maps | Never |

**`alternates.mjs` is deliberately frozen.** The six routes hold the dates, costs and verdicts they
had on the day the decision was made; a comparison stops meaning anything if the losing options keep
being revised. If a fact in it is wrong, fix the fact — don't re-plan the trip.

**The plan does not import `shared.mjs`.** On a page about one trip nothing is "shared", so the same
material is written trip-specific inside `plan.mjs` — flights that name the actual flights, a
gluten-free brief that names the actual kitchens. If a fact changes in both, change it in both.

Each itinerary page carries a **route map**, drawn as inline SVG from `content/geo.mjs` over that
coastline — numbered overnight stops with night counts, solid lines for rail, dashes for flights,
dots for driving, and hollow markers for day trips. No tile server and no network, so it works from
`file://` like everything else. To change a route, edit `content/geo.mjs` and rebuild. To regenerate
the coastline itself, see the header of `tools/build-geo.mjs`.

```bash
node build.mjs          # content + media.json -> site/ (10 pages)
node tools/audit.mjs    # coverage gaps, broken links, external-asset check — must stay at 0 errors
```

`tools/section-qa.mjs <page>` splits a built page into standalone `_s-<page>-<id>.html` files, one
per section, so any part of a long page can be screenshotted from the top of a fresh document.
Those are untracked scratch — `rm -f site/_s-*.html` when you are done.

## Adding or replacing photos

1. Drop originals in `.cache/originals/<entity-slug>/` and describe them in that folder's `meta.json`
   (see `tools/SOURCING_BRIEF.md` for the schema and the quality bar).
2. `node tools/process.mjs` — resizes to a 1600px display copy plus a 640px thumbnail and rewrites
   `content/media.json`. Add `--force` to redo images that already exist, or pass slugs to limit the run.
3. `node tools/contactsheet.mjs` — writes `site/_qa-N.html`, a labelled grid of every photo with its
   caption and a per-entity coverage check. This is the page to review before trusting a gallery.
4. `node build.mjs`

`.cache/originals/` holds the full-resolution downloads (a few hundred MB). It is not needed to view
the site and can be deleted; keep it if you may want to re-crop or re-export later.

## Coverage

All 76 entities are photographed — 539 images. Every hotel has 10–16 photos covering exterior,
rooms, baths, the dining room, plated food and the setting. One known shortfall: Hyatt Centric
Kanazawa has no bath photo, because hyatt.com blocks automated access and the substitute sources
(Visit Kanazawa, the hotel's own restaurant booking page) don't publish one. It is a one-night stop
on an archived route, so it affects nothing.

## Corrections this site makes to the source document

Sourcing turned up several links in `Itinerary Designs.md` that no longer go where they claim.
All are fixed here and flagged on the relevant page:

| Item | The document's link | Reality |
|---|---|---|
| Kokuya, Shibu Onsen | `kokuya.com` | An unrelated **ramen shop**. The ryokan is `ichizaemon.com` |
| Zeniya, Kanazawa | `zeniya.info` | A **squatted affiliate site**. The restaurant is `zeniya.co.jp` |
| Beniya Mukayu | `beniya-mukayu.jp` | **Domain has lapsed** (NXDOMAIN). Now `mukayu.com` |
| Gora Byakudan | `byakudan.jp` | A **silk brand's Shopify store**. The ryokan is `byakudan.co.jp` |
| Gekkoju | `gekkoju.jp` | Doesn't resolve. It is `gekkoujyu.com` — and the site lists **ten** villas, not eight |
| Sowaka's restaurant | "La Bombance" | Now **Loka Gion**, head chef Takaaki Kato |
| Goh, Fukuoka | 14 seats | The **restaurant relocated in 2023**; sources differ on 10 vs 14 seats — confirm at booking |
| L'Effervescence | Scheduled on a Monday in four itineraries | **Closed Sundays and Mondays**, and dinner-only Tue/Wed. Every affected itinerary now books it on a Tuesday |
| Gora Kadan, gluten-free | "Celiac reviews confirm full GF kaiseki" | True for **staying guests**, but the hotel's own restaurant page says "Vegan/Gluten-Free/Halal options are not available" — that page covers the à la carte restaurant sold to day visitors. Both facts are now on the page |
| Gora Kadan, dining venues | One kaiseki restaurant | Also **Sushi Kadan**, on-site since Nov 2023, supervised by three-star Sushi Yoshitake — a separate kitchen with its own GF question |

## Where the photos come from

Each property's own website first, then its Relais & Châteaux / Small Luxury Hotels / Michelin listing,
then official tourism boards for landscapes and wildlife. Every image records its source URL, shown in
the lightbox. Captions describe only what is actually visible, and say so when a photo is clearly the
wrong season for this trip — several Kyoto and Hakone shots are summer images, and they are labelled.

This is a private planning tool. The photographs belong to the properties and photographers credited on
each one; don't republish the folder.
