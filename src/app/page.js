import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import Marquee from "@/sections/marquee/Marquee";
import ServicesOverview from "@/sections/home/ServicesOverview";
import WhyTeaser from "@/sections/home/WhyTeaser";
import Proof from "@/sections/home/Proof";
import AboutTeaser from "@/sections/home/AboutTeaser";
import FinalCTA from "@/sections/home/FinalCTA";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import { pageMeta } from "@/lib/seo";

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
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
