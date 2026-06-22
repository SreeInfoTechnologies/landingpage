import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "Services",
  description:
    "Consulting, outsourcing, marketing and technology under one roof — explore the full range of services from Sree Info Technologies Pvt Ltd.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
