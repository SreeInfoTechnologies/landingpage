import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Values from "@/components/Values";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Payroll from "@/components/Payroll";
import Marketing from "@/components/Marketing";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Values />
        <About />
        <Services />
        <WhyChooseUs />
        <Payroll />
        <Marketing />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
