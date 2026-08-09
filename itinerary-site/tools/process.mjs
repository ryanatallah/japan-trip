#!/usr/bin/env node
// Resize sourced originals into web-sized display + thumbnail pairs and write content/media.json.
// Uses macOS `sips` — no npm dependencies.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC = join(ROOT, '.cache/originals');
const OUT = join(ROOT, 'site/img');
const DISPLAY_W = 1600;
const THUMB_W = 640;
const MIN_W = 700;          // anything smaller is a thumbnail or a logo
// Byte floor only catches icons and sprites. Some venues serve genuinely hard-compressed
// photographs (Akiba Fukurou publishes ~1000px frames at 15–32KB with no larger variant),
// so the dimension check above is what actually guards quality.
const MIN_BYTES = 12 * 1024;

mkdirSync(OUT, { recursive: true });

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const force = process.argv.includes('--force');

function dims(file) {
  try {
    const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], { encoding: 'utf8' });
    const w = +(out.match(/pixelWidth:\s*(\d+)/)?.[1] || 0);
    const h = +(out.match(/pixelHeight:\s*(\d+)/)?.[1] || 0);
    return { w, h };
  } catch { return { w: 0, h: 0 }; }
}

function resize(src, dest, width, quality) {
  const args = ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(quality)];
  const { w } = dims(src);
  if (w > width) args.push('--resampleWidth', String(width));
  args.push(src, '--out', dest);
  execFileSync('sips', args, { stdio: 'pipe' });
}

const media = {};
const report = { ok: 0, skipped: [], noMeta: [], entities: 0 };

for (const slug of readdirSync(SRC).sort()) {
  const dir = join(SRC, slug);
  if (!statSync(dir).isDirectory()) continue;
  if (only.length && !only.includes(slug)) {
    // keep previously processed entries when running a partial pass
    continue;
  }

  const metaPath = join(dir, 'meta.json');
  if (!existsSync(metaPath)) { report.noMeta.push(slug); continue; }

  let meta;
  try { meta = JSON.parse(readFileSync(metaPath, 'utf8')); }
  catch (e) { report.noMeta.push(`${slug} (bad json: ${e.message})`); continue; }

  const list = [];
  for (const [i, entry] of (meta.images || []).entries()) {
    const src = join(dir, entry.file);
    if (!existsSync(src)) { report.skipped.push(`${slug}/${entry.file} — missing`); continue; }

    const bytes = statSync(src).size;
    const { w, h } = dims(src);
    if (!w || !h) { report.skipped.push(`${slug}/${entry.file} — unreadable`); continue; }
    if (w < MIN_W && h < MIN_W) { report.skipped.push(`${slug}/${entry.file} — ${w}×${h} too small`); continue; }
    if (bytes < MIN_BYTES && w < 1200) { report.skipped.push(`${slug}/${entry.file} — ${(bytes / 1024) | 0}KB too light`); continue; }

    const n = String(list.length + 1).padStart(2, '0');
    const outFile = `${slug}-${n}.jpg`;
    const thumbFile = `${slug}-${n}-t.jpg`;
    const outPath = join(OUT, outFile);
    const thumbPath = join(OUT, thumbFile);

    if (force || !existsSync(outPath)) {
      try {
        resize(src, outPath, DISPLAY_W, 72);
        resize(src, thumbPath, THUMB_W, 66);
      } catch (e) {
        report.skipped.push(`${slug}/${entry.file} — sips failed`);
        for (const p of [outPath, thumbPath]) if (existsSync(p)) unlinkSync(p);
        continue;
      }
    }

    const d = dims(outPath);
    list.push({
      file: outFile,
      thumb: thumbFile,
      w: d.w || w,
      h: d.h || h,
      category: entry.category || 'detail',
      caption: (entry.caption || '').trim(),
      sourceUrl: entry.sourceUrl || meta.officialUrl || '',
      confidence: entry.confidence || 'high',
      ...(entry.credit ? { credit: entry.credit } : {}),   // required for CC-licensed images
    });
    report.ok++;
  }

  if (list.length) { media[slug] = list; report.entities++; }
}

// Merge with anything already processed (partial runs).
const mediaPath = join(ROOT, 'content/media.json');
let merged = media;
if (only.length && existsSync(mediaPath)) {
  merged = { ...JSON.parse(readFileSync(mediaPath, 'utf8')), ...media };
}
const sorted = Object.fromEntries(Object.keys(merged).sort().map((k) => [k, merged[k]]));
writeFileSync(mediaPath, JSON.stringify(sorted, null, 1));

console.log(`processed ${report.ok} images across ${report.entities} entities`);
if (report.noMeta.length) console.log(`no meta.json yet: ${report.noMeta.join(', ')}`);
if (report.skipped.length) {
  console.log(`skipped ${report.skipped.length}:`);
  for (const s of report.skipped.slice(0, 40)) console.log(`  · ${s}`);
}
