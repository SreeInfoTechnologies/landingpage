"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import styles from "./Navbar.module.scss";

// Top-level links come from data.js. The Services entry opens the mega-menu.
const LINKS = nav.map((n) =>
  n.href === "/services" ? { ...n, dropdown: true } : n
);

// Services mega-menu — each column deep-links into the Services page.
const DROP_COLS = [
  {
    title: "Consulting",
    href: "/services#consulting",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    items: ["Business Strategy", "Process Optimization", "IT Consulting", "Digital Transformation"],
  },
  {
    title: "Outsourcing",
    href: "/services#outsourcing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 12a9 9 0 0 1-15.7 6M3 12a9 9 0 0 1 15.7-6" />
        <path d="M21 4v5h-5M3 20v-5h5" />
      </svg>
    ),
    items: ["Payroll Management", "HR Outsourcing", "Back Office Support", "Recruitment (RPO)"],
  },
  {
    title: "Marketing",
    href: "/services#marketing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z" />
        <path d="M14 8a4 4 0 0 1 0 8" />
      </svg>
    ),
    items: ["Digital Marketing", "Social Media Marketing", "SEO & SEM", "Branding Solutions"],
  },
  {
    title: "Technology",
    href: "/services#technology",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
      </svg>
    ),
    items: ["Software Development", "Web Development", "Cloud Solutions", "Application Support"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Translucent blurred bar after a little scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu + dropdown on route change.
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [pathname]);

  // Close the touch dropdown on outside click / Escape.
  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest?.(`.${styles.hasDrop}`)) setDropOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setDropOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // On touch devices the Services link toggles the menu instead of navigating.
  const onServicesClick = (e) => {
    if (!window.matchMedia("(hover: hover)").matches) {
      e.preventDefault();
      setDropOpen((o) => !o);
    }
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a className={styles.brand} href="/">
            <span className={styles.logo} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sree-logo.svg" alt="" width={46} height={46} />
            </span>
            <span>
              <b>Sree Info Technologies</b>
              <small>Consult · Outsource · Grow</small>
            </span>
          </a>

          <ul className={styles.menu}>
            {LINKS.map((l) =>
              l.dropdown ? (
                <li key={l.href} className={styles.hasDrop}>
                  <a
                    href={l.href}
                    onClick={onServicesClick}
                    aria-expanded={dropOpen}
                    aria-controls="services-menu"
                    className={`${styles.link} ${isActive(l.href) ? styles.active : ""}`}
                  >
                    {l.label}
                    <span className={styles.caret} aria-hidden="true">
                      ▾
                    </span>
                  </a>

                  <div
                    id="services-menu"
                    className={`${styles.drop} ${dropOpen ? styles.dropOpen : ""}`}
                  >
                    <div className={styles.dropGrid}>
                      {DROP_COLS.map((col) => (
                        <div key={col.title} className={styles.dcol}>
                          <a className={styles.dh} href={col.href}>
                            <span className={styles.ic}>{col.icon}</span>
                            {col.title}
                          </a>
                          {col.items.map((it) => (
                            <a key={it} href={col.href} className={styles.di}>
                              {it}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className={styles.dropFoot}>
                      <a href="/services">View all services →</a>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`${styles.link} ${isActive(l.href) ? styles.active : ""}`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <a className={styles.cta} href="/contact">
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav id="mobile-menu" aria-label="Mobile" className={`${styles.mob} ${mobileOpen ? styles.mobShow : ""}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/contact" onClick={() => setMobileOpen(false)}>
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
