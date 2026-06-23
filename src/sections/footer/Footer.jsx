import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { company, nav } from "@/lib/data";
import styles from "./Footer.module.scss";

const SOCIAL = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
];

const SERVICE_LINKS = [
  { label: "Consulting", href: "/services#consulting" },
  { label: "Outsourcing", href: "/services#outsourcing" },
  { label: "Marketing", href: "/services#marketing" },
  { label: "Technology", href: "/services#technology" },
  { label: "All services", href: "/services" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.foot}>
      <div className="container-x">
        <div className={styles.grid}>
          {/* brand */}
          <div>
            <Logo variant="light" size={44} />
            <p className={styles.desc}>
              Consulting, outsourcing, technology and marketing, all from one
              team to help your business grow.
            </p>
            <p className={styles.motto}>{company.motto}</p>
            <div className={styles.social}>
              {SOCIAL.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}>
                  <s.icon size={18} strokeWidth={1.9} />
                </a>
              ))}
            </div>
          </div>

          {/* company */}
          <div>
            <h4>Company</h4>
            {nav.map((n) => (
              <a key={n.href} className={styles.fl} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>

          {/* services */}
          <div>
            <h4>Services</h4>
            {SERVICE_LINKS.map((s) => (
              <a key={s.label} className={styles.fl} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>

          {/* contact */}
          <div>
            <h4>Get in touch</h4>
            <p className={styles.fcontact}>
              <Mail size={16} strokeWidth={1.9} />
              <a href="mailto:support@sreeinfotechnologies.com">
                support@sreeinfotechnologies.com
              </a>
            </p>
            <p className={styles.fcontact}>
              <Phone size={16} strokeWidth={1.9} />
              <a href="tel:+919044448837">+91 90444 48837</a>
            </p>
            <p className={styles.fcontact}>
              <MapPin size={16} strokeWidth={1.9} />
              <span>
                {company.location},
                <br />
                India
              </span>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {year} {company.name}. All rights reserved.
          </span>
          <span className={styles.fbLinks}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </span>
        </div>

        {/* Developer signature — discreet by design, legible on a closer look. */}
        <p className={styles.signature} title="Designed & developed by Bhogesh">
          Designed &amp; developed by <span className={styles.sigName}>Bhogesh</span>
        </p>
      </div>
    </footer>
  );
}
