import Navbar from "@/components/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import BackToTop from "@/components/back-to-top/BackToTop";
import LegalPage from "@/components/legal/LegalPage";
import JsonLd from "@/components/seo/JsonLd";
import { webPageNode, breadcrumbNode } from "@/lib/schema";
import { company } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Sree Info Technologies Pvt Ltd collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    h: "Information We Collect",
    p: [
      "When you contact us through our website forms, we collect the details you choose to provide — typically your name, email address, subject, and message.",
      "We may also collect limited technical information automatically, such as your browser type, device, and general usage data, to help us understand how the site is used and to improve it.",
    ],
  },
  {
    h: "How We Use Your Information",
    p: [
      "We use the information you provide solely to respond to your enquiries, deliver the services you request, and communicate with you about your engagement.",
      "We do not sell your personal information, and we do not use it for advertising to third parties.",
    ],
  },
  {
    h: "Form Submissions & Third-Party Services",
    p: [
      "Our contact form is processed by Web3Forms, a third-party form delivery service that forwards your message to our team by email. Your submission is transmitted to Web3Forms only to deliver your message; please refer to the Web3Forms privacy policy for details of their handling.",
      "Aside from such service providers acting on our behalf, we do not share your personal information with third parties unless required by law.",
    ],
  },
  {
    h: "Data Security",
    p: [
      "We apply reasonable technical and organisational measures to protect your information against loss, misuse, and unauthorised access. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    h: "Your Rights",
    p: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make such a request, please contact us using the details below.",
    ],
  },
  {
    h: "Changes to This Policy",
    p: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date.",
    ],
  },
  {
    h: "Contact Us",
    p: [
      `If you have any questions about this Privacy Policy or how we handle your data, contact ${company.name} at support@sreeinfotechnologies.com, or write to us at ${company.location}, India.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          updated="June 23, 2026"
          intro={`At ${company.name}, your privacy matters to us. This policy explains what information we collect when you use our website, how we use it, and the choices you have.`}
          sections={SECTIONS}
        />
      </main>
      <Footer />
      <BackToTop />

      <JsonLd
        data={webPageNode({
          type: "PrivacyPolicy",
          path: "/privacy/",
          name: "Privacy Policy",
          description: metadata.description,
        })}
      />
      <JsonLd
        data={breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy/" },
        ])}
      />
    </>
  );
}
