import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import Marquee from "@/sections/marquee/Marquee";
import ServicesOverview from "@/sections/home/ServicesOverview";
import WhyTeaser from "@/sections/home/WhyTeaser";
import Proof from "@/sections/home/Proof";
import AboutTeaser from "@/sections/home/AboutTeaser";
import Faq from "@/sections/faq/Faq";
import FinalCTA from "@/sections/home/FinalCTA";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, faqPageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { faqs } from "@/lib/data";

export const metadata = pageMeta({
  description:
    "Sree Info Technologies helps businesses consult, outsource and grow. Consulting, outsourcing, marketing and technology from one team in Ananthapur, Andhra Pradesh.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServicesOverview />
        <WhyTeaser />
        <Proof />
        <AboutTeaser />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />

      {/* Home WebPage node (the site-wide Org/WebSite/Person graph lives in layout). */}
      <JsonLd
        data={webPageNode({
          type: "WebPage",
          path: "/",
          name: "Sree Info Technologies Pvt Ltd — Consult. Outsource. Grow.",
          description: metadata.description,
          mainEntityOrg: true,
        })}
      />
      {/* FAQPage mirrors the visible FAQ — for AI/voice/Bing & passage indexing
          (Google FAQ rich results were retired May 2026, so no Google snippet). */}
      <JsonLd data={faqPageNode(faqs)} />
    </>
  );
}
