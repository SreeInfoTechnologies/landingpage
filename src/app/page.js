import Hero from "@/sections/hero/Hero";
import Marquee from "@/sections/marquee/Marquee";
import Values from "@/sections/values/Values";
import About from "@/sections/about/About";
import Services from "@/sections/services/Services";
import WhyChooseUs from "@/sections/why-choose-us/WhyChooseUs";
import Payroll from "@/sections/payroll/Payroll";
import Marketing from "@/sections/marketing/Marketing";
import Careers from "@/sections/careers/Careers";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";

export default function Home() {
  return (
    <>
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
