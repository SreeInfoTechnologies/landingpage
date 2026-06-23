import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import ServicesPage from "./ServicesPage";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode, servicesGraph } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Consulting, outsourcing, marketing and technology under one roof — explore the full range of services from Sree Info Technologies Pvt Ltd.",
  path: "/services/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd data={servicesGraph()} />
      <JsonLd
        data={webPageNode({
          type: "CollectionPage",
          path: "/services/",
          name: "Services",
          description: metadata.description,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
    </>
  );
}
