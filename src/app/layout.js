import { Poppins, Inter, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sreeinfotechnologies.com"),
  title: {
    default: "Sree Info Technologies Pvt Ltd — Consult. Outsource. Grow.",
    template: "%s | Sree Info Technologies",
  },
  description:
    "Sree Info Technologies Pvt Ltd empowers businesses through innovative consulting, outsourcing, marketing, and technology solutions. Proudly based in Ananthapur, Andhra Pradesh.",
  keywords: [
    "consulting",
    "outsourcing",
    "payroll management",
    "digital marketing",
    "software development",
    "cloud solutions",
    "recruitment",
    "Ananthapur",
  ],
  authors: [{ name: "Sree Info Technologies Pvt Ltd" }],
  openGraph: {
    title: "Sree Info Technologies Pvt Ltd",
    description:
      "Your Partner in Success — Consult. Outsource. Grow. Driven by Values, Focused on Results.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/sree-logo.svg",
    shortcut: "/sree-logo.svg",
    apple: "/sree-logo.svg",
  },
};

export const viewport = {
  themeColor: "#15233f",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${script.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
