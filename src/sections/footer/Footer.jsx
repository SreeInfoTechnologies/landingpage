import { MapPin, Mail, Globe } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { company, nav } from "@/lib/data";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.root} text-white/75`}>
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        {/* brand */}
        <div>
          <Logo variant="light" size={46} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {company.slogan}
          </p>
          <p className="mt-4 font-script text-xl text-gold-light">{company.tagline}</p>
        </div>

        {/* nav */}
        <nav aria-label="Footer navigation">
          <h4 className="mb-4 font-heading text-base font-semibold text-white">Explore</h4>
          <ul className="grid grid-cols-2 gap-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact */}
        <div>
          <h4 className="mb-4 font-heading text-base font-semibold text-white">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-gold" /> {company.location}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={17} className="shrink-0 text-gold" />
              <a href="mailto:info@sreeinfotech.com" className="hover:text-gold-light">
                info@sreeinfotech.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe size={17} className="shrink-0 text-gold" />
              <a href="https://www.sreeinfotech.com" className="hover:text-gold-light">
                www.sreeinfotech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
