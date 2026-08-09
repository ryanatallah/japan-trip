# Photo sourcing brief

You are sourcing photographs for a private trip-planning webapp. Two travelers are deciding between five
Japan itineraries. They cannot judge a $1,500/night ryokan from a text description — they need to SEE it.

Your job: for each entity assigned to you, download a set of **accurate, high-quality, representative**
photographs and write a metadata file describing exactly what each one shows.

## Non-negotiables

1. **Accuracy above all.** A photo of the wrong hotel is worse than no photo. Only ship an image when you
   are confident it depicts the assigned entity. If unsure, drop it or mark `"confidence": "medium"`.
2. **Verify visually.** After downloading, use the Read tool on the image files — you can actually see
   them. Check every single one. Delete anything that is a logo, icon, banner, map, blank/gradient plate,
   text graphic, UI chrome, duplicate, or obviously a different property.
3. **Official source first.** Prefer the property's own website. Acceptable secondary sources:
   Relais & Châteaux, Small Luxury Hotels, Michelin Guide, Ryokan Collection, Tablet/Design Hotels,
   official regional tourism boards, the operator's own booking page. Avoid random blogs and Pinterest.
4. **Coverage matters more than count.** See the per-type coverage requirements below.

## Sourcing method — try in this order

**Tier 1 — curl.** Fastest. Hit the gallery / rooms / dining / facilities / spa pages:
```bash
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
curl -s -A "$UA" "URL" | grep -oE '(src|data-src|data-lazy-src|srcset|href|content)="[^"]*\.(jpg|jpeg|png|webp)[^"]*"' \
  | sed 's/.*="//;s/"$//' | sort -u
```
Also try `grep -oE 'https?://[^"'"'"' ()]*\.(jpg|jpeg|png|webp)'` and look for `og:image`.
Resolve relative URLs against the page origin. Download with:
`curl -s -A "$UA" -e "PAGE_URL" -o out.jpg "IMG_URL"` (the referer header defeats most hotlink blocks).

**Tier 2 — browser.** If curl returns few/no real photos (JS-rendered site, blocked, 403/000):
use `mcp__Claude_Browser__navigate` then `mcp__Claude_Browser__javascript_tool` to harvest, e.g.
```js
(() => { window.scrollTo(0, document.body.scrollHeight);
  const out = new Set();
  document.querySelectorAll('img').forEach(i => { if (i.currentSrc) out.add(i.currentSrc);
    ['src','data-src','data-lazy-src','data-original'].forEach(a => i.getAttribute(a) && out.add(i.getAttribute(a))); });
  document.querySelectorAll('*').forEach(e => { const b = getComputedStyle(e).backgroundImage;
    if (b && b !== 'none') { const m = b.match(/url\(["']?([^"')]+)/); if (m) out.add(m[1]); } });
  return [...out].filter(u => /\.(jpe?g|png|webp)/i.test(u)); })()
```
Scroll the page a few times first (`computer` action `scroll`) so lazy-loaded images materialize.
Then download the URLs with curl using the page as referer.

**Tier 3 — screenshot the site.** If images are canvas-rendered, protected, or hotlink-locked:
navigate the gallery in the browser, use `mcp__Claude_Browser__resize_window` to 1600x1000, and take
`computer` `screenshot` captures of each slide/section. Save the returned screenshots into the entity
folder. Note `"method": "screenshot"` and set the sourceUrl to the page.

**Tier 4 — reputable secondary.** Relais & Châteaux / SLH / Michelin / tourism-board pages, sourced the
same way. Use for landmarks, wildlife, and any property whose own site is unusable.

## Quality filter

- Minimum ~900px on the long edge. Check with `sips -g pixelWidth -g pixelHeight FILE`.
- Drop files under 40KB (almost always icons/sprites).
- Prefer the largest variant when a site offers several sizes (strip `-300x200`-style suffixes from
  WordPress filenames to get the original; verify the stripped URL actually resolves).
- Landscape/wide images are most useful; a few portraits are fine.
- No heavy text overlays, no promotional collages, no watermarked stock previews.

## Output contract — follow exactly

For each entity, create `<ROOT>/.cache/originals/<slug>/` containing the images named `001.jpg`,
`002.jpg`, … (keep the real extension: .jpg/.png/.webp) plus a file `meta.json`:

```json
{
  "slug": "gora-kadan",
  "name": "Gora Kadan",
  "officialUrl": "https://www.gorakadan.com/hakone/?lang=en",
  "method": "curl",
  "sourcePagesUsed": ["https://www.gorakadan.com/hakone/gallery/?lang=en"],
  "images": [
    {
      "file": "001.jpg",
      "category": "exterior",
      "caption": "The ryokan's entrance gate and stone approach, on the former Kan'in-no-miya imperial villa grounds",
      "sourceUrl": "https://www.gorakadan.com/hakone/wp-content/.../gallery01.jpg",
      "confidence": "high"
    }
  ],
  "notes": "Anything the curator should know: what you couldn't get, what's uncertain, better URLs found."
}
```

**Categories** (use these exact strings):
`exterior` · `room` · `bath` (onsen/rotenburo/bathroom) · `dining` (the dining room/restaurant space) ·
`food` (actual dishes) · `setting` (grounds, gardens, views, surrounding landscape) · `detail` (craft,
texture, objects) · `people` (guests/staff/artisans in action) · `wildlife` · `activity`

**Captions** must state what is actually visible, specifically and factually. Good: "Open-air cypress
bath in a Bettei room, looking onto the private garden." Bad: "Beautiful relaxing onsen experience."
Never invent facts you cannot see (don't name a room type unless the page said so).

## Coverage requirements by type

- **Hotel / ryokan — 12–16 images.** MUST include at least: 2 exterior, 3 room (different room types if
  available), 2 bath, 2 dining (the space), 2 food (actual plated dishes/kaiseki), 2 setting. This spread
  is the whole point — a gallery of six pretty room shots fails the brief.
- **Restaurant — 4–6 images.** At least 1 of the room/counter, 3 of actual food, 1 of the chef/exterior.
- **Experience — 5–7 images.** The activity actually happening (hands at work), the setting/studio, the
  artisan/guide, and the output/object where relevant.
- **Place / landmark — 3–4 images.** Prefer autumn-foliage shots for Japanese temples/gardens, since this
  is a late-November trip. Show the actual iconic view plus a detail or alternate angle.
- **Wildlife — 4–5 images.** The actual species in its actual habitat/season.
- **Transport — 3–4 images.** The actual cabin/seat product.

## Rules

- Do NOT edit, resize, or compress anything — download originals; the curator handles processing.
- Do NOT write to any directory other than your entity folders under `.cache/originals/`.
- Work through your entities one at a time; don't abandon a hard one — escalate through the tiers.
- If an entity truly cannot be sourced, still write `meta.json` with `"images": []` and explain in `notes`.
- Your final message should be a terse per-entity tally: `slug — N images — method — any gaps`.
