import { company } from "@/lib/data";

/**
 * XML sitemap — generated at build time and emitted as /sitemap.xml in the
 * static export. Submit this URL in Google Search Console so every route is
 * discovered. URLs use trailing slashes to match the site (trailingSlash:true).
 */
const BASE = company.url; // https://sreeinfotechnologies.com

const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sainath/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-us/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
