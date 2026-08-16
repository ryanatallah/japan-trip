# Japan 2026 — itinerary visualiser

A self-contained static site that puts photographs behind every line of `../Itinerary Designs.md`,
so the five candidate trips can be judged by eye rather than by adjective.

## Open it

Double-click `site/index.html` — it works straight off the filesystem, no server needed.

To serve it locally instead (nicer URLs, correct caching):

```bash
python3 -m http.server 8765 --directory "site"
```

The whole `site/` folder is portable: zip it, AirDrop it, drop it on any static host. It makes
**zero external network requests**, so it renders identically offline and on a phone in a hotel lobby.

## What's in it

- `site/index.html` — the five at a glance, a comparison table, five illustrated cards, how to choose,
  and the shared foundations (flights, rail vs self-drive, the gluten-free playbook, the book-now list).
- `site/<itinerary>.html` — one page per trip: **where you sleep** (each hotel photographed inside and
  out), **where you eat**, **what you do**, **where you are**, **day by day**, and **what it costs**.
- Every photo opens in a lightbox with its caption and a link to where it came from.
  Arrow keys and swipe move through a gallery; `Esc` closes.
- Light and dark themes; the ◐ button in the nav overrides your system setting.

## Rebuilding after an edit

Content lives in two files — edit those, not the HTML:

| File | What it holds |
|---|---|
| `content/entities.mjs` | Every hotel, restaurant, experience, place: copy, rates, facts, gluten-free notes |
| `content/itineraries.mjs` | The five trips: days, routes, costs, verdicts, and shared foundations |
| `content/geo.mjs` | Map coordinates and each itinerary's route — stops, nights, day trips, travel mode |
| `content/media.json` | Generated. The photo manifest — captions, categories, sources |
| `content/japan-outline.json` | Generated once. Simplified coastline for the route maps |

Each itinerary page carries a **route map**, drawn as inline SVG from `content/geo.mjs` over that
coastline — numbered overnight stops with night counts, solid lines for rail, dashes for flights,
dots for driving, and hollow markers for day trips. No tile server and no network, so it works from
`file://` like everything else. To change a route, edit `content/geo.mjs` and rebuild. To regenerate
the coastline itself, see the header of `tools/build-geo.mjs`.

```bash
node build.mjs          # content + media.json -> site/
node tools/audit.mjs    # coverage gaps, broken links, external-asset check
```

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

All 65 entities are photographed — 450 images. Every one of the 13 hotels has 10–16 photos
covering exterior, rooms, baths, the dining room, plated food and the setting. One known
shortfall: Hyatt Centric Kanazawa has no bath photo, because hyatt.com blocks automated access
and the substitute sources (Visit Kanazawa, the hotel's own restaurant booking page) don't
publish one. It is a one-night city stop, so this doesn't affect a decision.

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
