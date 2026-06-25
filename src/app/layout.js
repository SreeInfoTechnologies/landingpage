import Script from "next/script";
import { Poppins, Inter, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/schema";
import { company } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sreeinfotechnologies.com"),
  title: {
    default: "Sree Info Technologies Pvt Ltd · Consult. Outsource. Grow.",
    template: "%s | Sree Info Technologies",
  },
  description:
    "Sree Info Technologies helps businesses cut costs, work smarter and grow, with consulting, outsourcing, marketing and technology from one team. Based in Ananthapur, Andhra Pradesh.",
  // No `keywords` meta — Google has ignored it since 2009 (Search Central,
  // "special tags"). Topical relevance comes from real content + structured data.
  authors: [{ name: "Sree Info Technologies Pvt Ltd" }],
  creator: "Sree Info Technologies Pvt Ltd",
  publisher: "Sree Info Technologies Pvt Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sree Info Technologies Pvt Ltd · Consult. Outsource. Grow.",
    description:
      "Your Partner in Success. Consult. Outsource. Grow. Driven by Values, Focused on Results.",
    url: "/",
    siteName: "Sree Info Technologies Pvt Ltd",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sree Info Technologies Pvt Ltd · Consult. Outsource. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Info Technologies Pvt Ltd · Consult. Outsource. Grow.",
    description:
      "Your Partner in Success. Consult. Outsource. Grow. Driven by Values, Focused on Results.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: company.name,
  // PWA manifest (app/manifest.js → /manifest.webmanifest) — ships the PNG icon
  // set Google/Android consume. Previously the site had SVG icons only.
  manifest: "/manifest.webmanifest",
  // Full favicon set. Order: .ico (read by Googlebot-Image from the home-page
  // <head>) → crisp SVG for modern browsers → PNG sizes (Google requires a
  // square ≥8×8 and recommends >48px; 96/192 cover that) → 180px Apple touch
  // icon (must be PNG — iOS does not render SVG). The square brand mark
  // (favicon.svg) replaces the old wordmark SVG, whose aspect ratio was wrong
  // for a favicon and is a likely reason the icon failed in Search.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: company.shortName,
    statusBarStyle: "default",
  },
  category: "technology",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport = {
  themeColor: "#15233f",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${script.variable} ${cormorant.variable}`}
    >
      <body>
        {/* Site-wide entity graph: Organization + ProfessionalService + WebSite + founder Person */}
        <JsonLd data={siteGraph()} />

        {children}

        {/* Microsoft Clarity — analytics / session insights */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xb8nl6bgh7");`}
        </Script>
      </body>
    </html>
  );
}
