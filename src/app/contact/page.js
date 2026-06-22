import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Sree Info Technologies Pvt Ltd — let's build success together through consulting, outsourcing, technology and marketing.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
