#!/bin/bash
set -e

echo "=== Installing dependencies ==="
pnpm install --no-frozen-lockfile

echo "=== Building portfolio ==="
BASE_PATH=/ pnpm --filter @workspace/portfolio run build

echo "=== Locating build output ==="
OUTPUT_DIR="dist-deploy"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

if [ -d "artifacts/portfolio/dist/public" ]; then
  echo "Found at artifacts/portfolio/dist/public"
  cp -r artifacts/portfolio/dist/public/. "$OUTPUT_DIR/"
elif [ -d "artifacts/portfolio/dist" ]; then
  echo "Found at artifacts/portfolio/dist"
  cp -r artifacts/portfolio/dist/. "$OUTPUT_DIR/"
elif [ -d "dist/public" ]; then
  echo "Found at dist/public"
  cp -r dist/public/. "$OUTPUT_DIR/"
elif [ -d "dist" ]; then
  echo "Found at dist"
  cp -r dist/. "$OUTPUT_DIR/"
else
  echo "ERROR: Could not find build output!"
  exit 1
fi

# Required for SPA routing on Cloudflare Pages
echo "/* /index.html 200" > "$OUTPUT_DIR/_redirects"

echo "=== Build complete. Output in $OUTPUT_DIR ==="
ls "$OUTPUT_DIR"
