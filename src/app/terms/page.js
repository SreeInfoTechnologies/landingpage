import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import LegalPage from "@/components/legal/LegalPage";
import { company } from "@/lib/data";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the Sree Info Technologies Pvt Ltd website.",
};

const SECTIONS = [
  {
    h: "Acceptance of Terms",
    p: [
      `By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the site.`,
    ],
  },
  {
    h: "Use of the Website",
    p: [
      "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict the use and enjoyment of the site by, any third party.",
      "You must not attempt to gain unauthorised access to the site, its servers, or any connected systems, or interfere with its normal operation.",
    ],
  },
  {
    h: "Intellectual Property",
    p: [
      `All content on this website — including text, graphics, logos, and design — is the property of ${company.name} or its licensors and is protected by applicable intellectual property laws.`,
      "You may not reproduce, distribute, or create derivative works from any content without our prior written permission.",
    ],
  },
  {
    h: "Services & Engagements",
    p: [
      "Information about our consulting, outsourcing, technology, and marketing services is provided for general guidance. Any specific engagement is governed by a separate agreement entered into between you and us.",
      "We reserve the right to modify or discontinue any service described on this website at any time.",
    ],
  },
  {
    h: "Disclaimer",
    p: [
      "This website and its content are provided “as is” without warranties of any kind, whether express or implied. We do not guarantee that the site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    h: "Limitation of Liability",
    p: [
      `To the fullest extent permitted by law, ${company.name} shall not be liable for any indirect, incidental, or consequential damages arising out of your use of, or inability to use, this website.`,
    ],
  },
  {
    h: "External Links",
    p: [
      "This website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any external sites.",
    ],
  },
  {
    h: "Governing Law",
    p: [
      "These Terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Andhra Pradesh.",
    ],
  },
  {
    h: "Changes to These Terms",
    p: [
      "We may revise these Terms of Service from time to time. The latest version will always be available on this page with an updated “Last updated” date.",
    ],
  },
  {
    h: "Contact Us",
    p: [
      `For any questions about these Terms, contact ${company.name} at support@sreeinfotechnologies.com, or write to us at ${company.location}, India.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Terms of Service"
          updated="June 23, 2026"
          intro={`Please read these Terms of Service carefully before using the ${company.name} website. They set out the rules and conditions for using our site.`}
          sections={SECTIONS}
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
