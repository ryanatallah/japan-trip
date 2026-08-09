#!/bin/bash
# Full-page screenshots of every built page, in both themes, via headless Chrome.
# The in-app Browser pane fails to paint large image-heavy pages; this renders for real.
#   ./tools/shots.sh [outdir] [width] [height]
set -u
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$ROOT/.cache/shots}"
W="${2:-1280}"
H="${3:-3600}"
BASE="http://127.0.0.1:8765"

mkdir -p "$OUT" "$ROOT/site/_theme"

PAGES="index peak-momiji-classic crafts-crab-snow-monkeys wildlife-north southern-warmth grand-tour"

for p in $PAGES; do
  for theme in light dark; do
    # Force the theme by stamping data-theme on <html> in a throwaway copy.
    sed "s|<html lang=\"en\"|<html lang=\"en\" data-theme=\"$theme\"|" "$ROOT/site/$p.html" \
      | sed 's|href="assets/|href="../assets/|; s|src="assets/|src="../assets/|; s|src="img/|src="../img/|g; s|srcset="img/|srcset="../img/|g; s|data-full="img/|data-full="../img/|g; s|img/|../img/|g' \
      > "$ROOT/site/_theme/$p-$theme.html"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
      --virtual-time-budget=25000 --window-size="$W,$H" \
      --screenshot="$OUT/$p-$theme.png" "$BASE/_theme/$p-$theme.html" >/dev/null 2>&1
    printf "%-28s %-5s %s\n" "$p" "$theme" "$(ls -lh "$OUT/$p-$theme.png" 2>/dev/null | awk '{print $5}')"
  done
done
