import { company } from "@/lib/data";

/**
 * Per-page metadata builder — canonical URL, Open Graph and Twitter card, all
 * consistent across routes. metadataBase (set in layout) turns the relative
 * "/og.png" and canonical paths into absolute URLs in the static export.
 *
 * og:title / twitter:title are intentionally omitted so Next derives them from
 * the page's resolved <title> (which already applies the title template).
 */
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${company.name} · ${company.tagline}`,
};

export function pageMeta({ title, description, path }) {
  const meta = {
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: company.name,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      description,
      images: ["/og.png"],
    },
  };
  if (title) meta.title = title;
  return meta;
}
