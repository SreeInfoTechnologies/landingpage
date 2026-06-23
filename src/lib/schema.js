/**
 * JSON-LD (schema.org) builders — the structured-data layer that lets Google
 * and AI answer engines resolve "Sree Info Technologies" as a real entity
 * (NAP, services, founder) and cite it confidently.
 *
 * Everything is built STRICTLY from verified facts in data.js. Unknown
 * properties (foundingDate, geo coordinates, aggregateRating, employee count,
 * priceRange, opening hours, social profiles) are deliberately omitted rather
 * than fabricated — wrong structured data is worse than none.
 *
 * Entities are linked by @id so the graph cross-references instead of
 * duplicating: #organization, #website, #founder.
 */
import { company, founder, services, specializations } from "@/lib/data";

const BASE = company.url; // https://sreeinfotechnologies.com
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;
export const FOUNDER_ID = `${BASE}/#founder`;

const abs = (path) => `${BASE}${path}`;

/** Only real, non-empty social URLs become sameAs (entity reconciliation). */
function orgSameAs() {
  return Object.values(company.social || {}).filter(Boolean);
}

/** Organization + ProfessionalService (LocalBusiness) — the core entity. */
export function organizationNode() {
  const node = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: company.name,
    legalName: company.legalName,
    alternateName: company.shortName,
    url: `${BASE}/`,
    logo: { "@type": "ImageObject", url: abs("/sree-logo.svg") },
    image: abs("/sree-logo.svg"),
    description: company.pitch,
    slogan: company.tagline,
    email: company.email,
    telephone: company.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.countryCode,
    },
    areaServed: { "@type": "Country", name: company.address.country },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phoneE164,
        email: company.email,
        contactType: "customer support",
        areaServed: company.address.countryCode,
        availableLanguage: ["en"],
      },
    ],
    knowsAbout: specializations,
    founder: { "@id": FOUNDER_ID },
  };
  const sameAs = orgSameAs();
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}

/** WebSite node. No SearchAction — the static export has no on-site search. */
export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${BASE}/`,
    name: company.name,
    description: company.pitch,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Founder Person — the E-E-A-T / author signal for the brand. */
export function founderNode() {
  const node = {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: founder.name,
    jobTitle: founder.jobTitle,
    description: founder.bio,
    image: abs(founder.image),
    email: founder.email,
    worksFor: { "@id": ORG_ID },
  };
  if (founder.sameAs?.length) node.sameAs = founder.sameAs;
  return node;
}

/** The global graph emitted once site-wide (in the root layout). */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), founderNode()],
  };
}

/** BreadcrumbList. items: [{ name, path }] in order, ending at the current page. */
export function breadcrumbNode(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** A typed WebPage node (AboutPage, ContactPage, CollectionPage, PrivacyPolicy…). */
export function webPageNode({ type = "WebPage", path, name, description, mainEntityOrg = false }) {
  const node = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${BASE}${path}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
    primaryImageOfPage: { "@type": "ImageObject", url: abs("/sree-logo.svg") },
  };
  if (mainEntityOrg) node.mainEntity = { "@id": ORG_ID };
  return node;
}

/** Service + OfferCatalog graph for /services — one Service per pillar. */
export function servicesGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      "@id": `${BASE}/services/#service-${s.category.toLowerCase()}`,
      name: s.title,
      serviceType: s.category,
      description: s.desc,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: company.address.country },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: s.title,
        itemListElement: s.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    })),
  };
}

/** FAQPage node from [{ question, answer }] — used by the FAQ section (Step 3). */
export function faqPageNode(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
