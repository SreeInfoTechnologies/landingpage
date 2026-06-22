import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import WhyChooseUs from "@/sections/why-choose-us/WhyChooseUs";
import WhyCTA from "./WhyCTA";

export const metadata = {
  title: "Why Us",
  description:
    "Why choose Sree Info Technologies — an end-to-end, values-first partner bringing consulting, outsourcing, technology and marketing together under one accountable team.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <WhyChooseUs />
        <WhyCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
