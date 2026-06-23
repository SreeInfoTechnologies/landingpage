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
    "Sree Info Technologies is a growing consulting and outsourcing company, bringing consulting, outsourcing, technology and marketing together in one place.",
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
