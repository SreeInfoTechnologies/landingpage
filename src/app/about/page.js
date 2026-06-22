import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import AboutSections from "./AboutSections";

export const metadata = {
  title: "About",
  description:
    "Sree Info Technologies Pvt Ltd — a fast-growing consulting and outsourcing partner bringing consulting, outsourcing, technology and marketing together under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSections />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
