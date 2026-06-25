/**
 * Regenerates the full favicon / app-icon / logo set from public/favicon.svg
 * (the square brand mark). These are committed binary assets that rarely change,
 * so `sharp` is intentionally NOT a project dependency — install it just to run
 * this script:
 *
 *     npm i -D sharp && node scripts/generate-icons.mjs && npm uninstall sharp
 *
 * Outputs (all in /public):
 *   favicon-16/32/48.png, favicon-96x96.png   → classic + Google favicon sizes
 *   favicon.ico (16/32/48)                     → root favicon Google probes
 *   apple-touch-icon.png (180, opaque navy)    → iOS home screen
 *   icon-192.png, icon-512.png                 → PWA manifest (purpose: any)
 *   icon-maskable-512.png                      → PWA manifest (purpose: maskable)
 *   logo.png (512, raster)                     → Organization "logo" schema
 *
 * favicon.ico is assembled separately (sharp doesn't write .ico) — use any ICO
 * tool, or PIL: Image.open("public/favicon-48.png").save("public/favicon.ico",
 * sizes=[(16,16),(32,32),(48,48)]).
 */
import sharp from "sharp";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PUB = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const SVG = readFileSync(join(PUB, "favicon.svg"));
const NAVY = { r: 15, g: 26, b: 48, alpha: 1 }; // #0f1a30

const square = (name, size, extra = (s) => s) =>
  extra(sharp(SVG, { density: 1200 }).resize(size, size))
    .png({ compressionLevel: 9 })
    .toFile(join(PUB, name))
    .then(() => console.log(`  ${name}  ${size}x${size}  ${statSync(join(PUB, name)).size}b`));

await square("favicon-16.png", 16);
await square("favicon-32.png", 32);
await square("favicon-48.png", 48);
await square("favicon-96x96.png", 96);
await square("icon-192.png", 192);
await square("icon-512.png", 512);
await square("logo.png", 512);
await square("apple-touch-icon.png", 180, (s) => s.flatten({ background: NAVY }));

// Maskable: brand mark at ~62% on full-bleed navy (survives Android's safe-zone crop).
const inner = Math.round(512 * 0.62);
const mark = await sharp(SVG, { density: 1200 }).resize(inner, inner).png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: NAVY } })
  .composite([{ input: mark, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(join(PUB, "icon-maskable-512.png"));
console.log("  icon-maskable-512.png  512x512  " + statSync(join(PUB, "icon-maskable-512.png")).size + "b");
