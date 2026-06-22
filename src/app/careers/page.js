import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import CareersPage from "./CareersPage";

export const metadata = {
  title: "Careers",
  description:
    "Build your career with Sree Info Technologies Pvt Ltd — professional growth, learning opportunities, a positive work culture and current openings across technology, marketing and outsourcing.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <CareersPage />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
