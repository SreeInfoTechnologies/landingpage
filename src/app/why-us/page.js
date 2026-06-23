import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import WhyChooseUs from "@/sections/why-choose-us/WhyChooseUs";
import WhyCTA from "./WhyCTA";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";

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

      <JsonLd
        data={webPageNode({
          type: "WebPage",
          path: "/why-us/",
          name: "Why Choose Sree Info Technologies",
          description: metadata.description,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Why Us", path: "/why-us/" },
        ])}
      />
    </>
  );
}
