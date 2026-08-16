# Where the runbook's numbers come from

Every duration, opening hour and closed day in `content/logistics.mjs`, with the source it was
taken from and how much to trust it. Checked **August 2026** for a **November 2026** trip.

Anything marked `confirm: true` in the data renders a small "confirm" chip on the page. That is
the honest signal: it means the figure is an estimate or an assumption, not something read off an
operator's own page.

## The two flights — the highest-value findings on the page

| | |
|---|---|
| **NH107 SFO→HND** | Departs **01:20**, arrives **04:50 (+1)**, 11h30, Boeing 777-300ER. Schedule effective **from 2026-10-25**, so this is the November timetable, not a summer one. flightmapper NH107 route + schedule pages, corroborated by flightstats. |
| **UA34 KIX→SFO** | Departs **18:35** from 2026-10-25 (it runs 16:55 through the summer season). Arrives SFO the same calendar day. flightmapper KIX–SFO route page, which lists the effective period for each variant. |

The 777-300ER matters: it is the aircraft that carries "The Room", which is the reason the plan
picked ANA. The daytime SFO→HND option in the same table is `NH7011`, a United-operated
codeshare — different aircraft, different seat.

## Rail

| Leg | Time | Source |
|---|---|---|
| Romancecar Shinjuku→Hakone-Yumoto | ~80 min | Odakyu; fastest services 59 min, typical 1h13–1h30 |
| Odawara→Nagoya | 1h10 Hikari | **Nozomi does not stop at Odawara** — Hikari, or Kodama at 2h10 |
| Nagoya→Matsumoto | 1h28 | Limited Express Shinano, roughly hourly |
| Nagoya→Kyoto | ~35 min | Tokaido shinkansen |
| Tokyo→Karuizawa | 1h10 | Hokuriku shinkansen |
| Tokyo Station→Ome | ~1h25 | JR Chuo Rapid → Ome line |
| Kyoto→KIX | ~80 min | Haruka limited express |
| Demachiyanagi→Kurama | ~30 min | Eizan line; the maple tunnel is ~250m between Ichihara and Ninose, and trains dim their lights through it during the light-up |
| Demachiyanagi→Ohara | ~33 min | Kyoto bus 17 |
| Kyoto Station→Takao | ~50 min | JR Takao–Keihoku bus, every 20–30 min |

## The Hakone loop

Gora→Sounzan cablecar **9 min** · Sounzan→Owakudani ropeway **8 min** ·
Owakudani→Togendai ropeway **16 min** · Togendai→Moto-Hakone boat **40 min** ·
bus back to Yumoto/Gora every 20–30 min. All on the two-day Freepass.

## The Myojinkan shuttle — the tightest constraint on the trip

From the inn's own access page: **15:15 and 16:30 from Matsumoto Station only**, advance
reservation, 35–45 minutes. Pickup is the east (castle-side) exit, down two escalators, right to
the rotary by the police box; give the driver the reservation name. Taxi alternative: ~30 minutes,
about ¥7,000 plus a ¥200 pickup fee.

## Opening hours and closed days

| Place | Hours | Closed |
|---|---|---|
| Hakone Open-Air Museum | 9:00–17:00, last entry 16:30 | daily |
| Pola Museum of Art | 9:00–17:00, last entry 16:30 | daily |
| **Hakone Museum of Art** | 9:30–16:30 Apr–Nov, ¥1,430 | **Thursdays** |
| Matsumoto Castle | 8:30–17:00, last entry 16:30 | year-end only |
| **Matsumoto City Museum of Art** | 9:00–17:00, last entry 16:30 | **Mondays** |
| Shinhotaka Ropeway | 8:30–16:45 to late Nov | maintenance 24–27 Nov 2026 |
| Sanzen-in | 8:30–17:00 in November | — |
| Jingo-ji | 9:00–16:00, ¥500 | — |
| Kozan-ji | 8:30–17:00, ¥600 | — |
| Rurikoin | 10:00–17:00, reception to 16:30, ¥2,000 | reservation-only in autumn |
| Iwatayama monkey park | 9:00–16:30, last entry 16:00 | — |
| Eikando | day 9:00–17:00 (last 16:00); light-up 17:30–21:00 (last 20:30) | **separate tickets** |
| Kodai-ji light-up | 17:00–22:00, last entry 21:30, ¥600 | — |
| Kikunoi Honten | dinner 17:00, last order 19:30 | **1st and 3rd Tuesday** |
| Meiji Jingu | sunrise to sunset — about 6:20–16:20 in November | — |
| Imperial Palace East Gardens | 9:00–16:00 | Mondays and Fridays |
| Akiba Fukurou | roughly 12:00–19:00, five slots a day | reservation only |

**November 2026 falls out as:** the 1st and 3rd Tuesdays are the **3rd and the 17th**, so Kikunoi
is shut on the Kyoto arrival day. The Hakone Museum of Art's Thursday closure fixes the art day to
Friday the 13th. The Matsumoto museum's Monday closure fixes the Kusama collection to Sunday the
15th. None of these were chosen deliberately in the original plan — they happen to be right, which
is worth knowing before anything gets shuffled.

## Marked `confirm` — assumptions, not sources

- **L'Effervescence seating time** (18:30 assumed). The closed days are documented; the seating
  time is not, and comes with the booking.
- **Itoh Dining, Jugyuan and the Heki kintsugi start times.** Set to sensible hours so the
  arithmetic has something to subtract from; replace each with the real time on booking.
- **Owl café slot** — five a day, and which one you hold is whatever was available.
- **Aman Tokyo and Myojinkan check-in/out.** SOWAKA (15:00/11:00) and Gora Kadan (15:00/11:00)
  are confirmed; the other two are the industry-standard assumption.
- **Kibune light-up dates** — 7–24 November in 2025; 2026 dates were unpublished in August 2026.
- **Rurikoin's booking-open date** — early October, but the exact date and time were not
  confirmable from an English source. Watch `rurikoin.komyoji.com`.
- **The kyudo studio** publishes neither a location nor a schedule. Everything about Saturday the
  21st's morning is provisional until they answer an email.

## Coordinates

POI coordinates are accurate to roughly a city block — enough for the bearing on a base map, not
enough to navigate by. Tobira Onsen, Matsumoto and Shinhotaka are imported from
`content/geo.mjs` rather than re-entered, so the base maps and the national route map cannot
disagree with each other.
