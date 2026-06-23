import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import WhyChooseUs from "@/sections/why-choose-us/WhyChooseUs";
import WhyCTA from "./WhyCTA";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Why Us",
  description:
    "Why choose Sree Info Technologies: one honest, values-first team bringing consulting, outsourcing, technology and marketing together, so you can count on a single partner.",
  path: "/why-us/",
});

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
