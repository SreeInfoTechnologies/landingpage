import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import ProfilePage from "./ProfilePage";
import JsonLd from "@/components/seo/JsonLd";
import { profileGraph, breadcrumbNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { founder } from "@/lib/data";

export const metadata = pageMeta({
  title: `${founder.name} — ${founder.jobTitle}`,
  description:
    "Medimi Sainath Reddy is the Founder & Director of Sree Info Technologies and a Microsoft Azure cloud engineer with 4.5+ years building cloud infrastructure for global enterprises like IBM and Accenture.",
  path: "/sainath/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ProfilePage />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd data={profileGraph("/sainath/")} />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
          { name: founder.name, path: "/sainath/" },
        ])}
      />
    </>
  );
}
