import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import CareersPage from "./CareersPage";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers",
  description:
    "Build your career with Sree Info Technologies — room to grow, real learning and a good place to work. No roles are open right now, but we're always glad to hear from good people.",
  path: "/careers/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <CareersPage />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd
        data={webPageNode({
          type: "CollectionPage",
          path: "/careers/",
          name: "Careers",
          description: metadata.description,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers/" },
        ])}
      />
    </>
  );
}
