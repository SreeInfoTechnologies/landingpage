import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import AboutSections from "./AboutSections";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "Sree Info Technologies Pvt Ltd — a fast-growing consulting and outsourcing partner bringing consulting, outsourcing, technology and marketing together under one roof.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSections />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd
        data={webPageNode({
          type: "AboutPage",
          path: "/about/",
          name: "About Sree Info Technologies",
          description: metadata.description,
          mainEntityOrg: true,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
    </>
  );
}
