import { company } from "@/lib/data";

/**
 * Web App Manifest — emitted as /manifest.webmanifest in the static export.
 * Linked from <head> via metadata.manifest (layout.js). Gives the site a real
 * installable identity (name, icons, theme) and provides the PNG icon set Google
 * and Android use — the SVG-only setup before this is a known reason a site's
 * icon/logo fails to show. Icons are pre-rendered from favicon.svg (see
 * scripts/generate-icons.mjs).
 */
export default function manifest() {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.pitch,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0f1a30",
    theme_color: "#15233f",
    lang: "en-IN",
    dir: "ltr",
    categories: ["business", "consulting", "technology"],
    icons: [
      { src: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
