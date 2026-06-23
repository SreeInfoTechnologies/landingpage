import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import ContactPage from "./ContactPage";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Sree Info Technologies Pvt Ltd — let's build success together through consulting, outsourcing, technology and marketing.",
  path: "/contact/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd
        data={webPageNode({
          type: "ContactPage",
          path: "/contact/",
          name: "Contact",
          description: metadata.description,
          mainEntityOrg: true,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
    </>
  );
}
