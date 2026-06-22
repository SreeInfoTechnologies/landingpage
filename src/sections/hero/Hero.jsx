"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";

// Header navigation.
const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

// Capabilities index — `title`/`desc` feed the live caption in the meta row.
const CAPABILITIES = [
  { no: "01", label: "Consulting", href: "#consulting", title: "Consulting.", desc: "Business and IT strategy that turns complexity into clear, executable plans." },
  { no: "02", label: "Outsourcing", href: "#outsourcing", title: "Outsourcing.", desc: "Reliable teams and back-office operations, scaled to your needs." },
  { no: "03", label: "Software & Cloud", href: "#software", title: "Software & Cloud.", desc: "Custom platforms engineered to grow with your business." },
  { no: "04", label: "Staffing", href: "#staffing", title: "Staffing.", desc: "Recruitment and managed talent that strengthens your team." },
  { no: "05", label: "Marketing", href: "#marketing", title: "Marketing.", desc: "Brand and digital marketing that drives measurable growth." },
  { no: "06", label: "Payroll", href: "#payroll", title: "Payroll.", desc: "Accurate, compliant payroll management, handled end to end." },
];

const DEFAULT_CAP = { title: "Driven by values.", desc: "Focused on results." };

// Shared Tailwind bits.
const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-luxe-gold";
const BAR =
  "block h-[1.6px] w-[18px] rounded-sm bg-luxe-paper transition duration-200";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cap, setCap] = useState(DEFAULT_CAP);
  const [capFading, setCapFading] = useState(false);
  const canvasRef = useRef(null);
  const magRef = useRef(null);
  const capTimer = useRef(null);

  // Fade the meta caption out, swap text, fade back in.
  const changeCap = (next) => {
    setCapFading(true);
    if (capTimer.current) clearTimeout(capTimer.current);
    capTimer.current = setTimeout(() => {
      setCap(next);
      setCapFading(false);
    }, 130);
  };
  useEffect(() => () => clearTimeout(capTimer.current), []);

  // Magnetic primary button — pointer position fed to CSS vars (no inline style rule).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const el = magRef.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${(e.clientX - (r.left + r.width / 2)) * 0.18}px`);
      el.style.setProperty("--my", `${(e.clientY - (r.top + r.height / 2)) * 0.3}px`);
    };
    const leave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  // Floating "gold dust" particle field.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let parts = [];
    let raf = 0;

    const size = () => {
      width = cv.clientWidth;
      height = cv.clientHeight;
      cv.width = width * dpr;
      cv.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.round((width * height) / 26000), 60);
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        s: Math.random() * 0.24 + 0.05,
        drift: Math.random() * 0.5 - 0.25,
        a: Math.random() * 0.26 + 0.05,
        t: Math.random() * 6.28,
      }));
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of parts) {
        p.y -= p.s;
        p.t += 0.01;
        p.x += Math.sin(p.t) * 0.15 + p.drift * 0.1;
        if (p.y < -4) {
          p.y = height + 4;
          p.x = Math.random() * width;
        }
        const tw = p.a * (0.6 + 0.4 * Math.sin(p.t * 1.7));
        ctx.beginPath();
        ctx.fillStyle = `rgba(214,182,110,${tw})`;
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };

    size();
    loop();
    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <section
      id="home"
      className={`${styles.hero} relative min-h-[100svh] p-[clamp(10px,1.3vw,16px)] font-body text-luxe-paper antialiased`}
    >
      <div className="relative flex min-h-[calc(100svh-clamp(20px,2.6vw,32px))] flex-col overflow-hidden rounded-lg border border-white/10 px-[clamp(20px,3.4vw,52px)] pb-[clamp(18px,2.6vw,36px)] pt-[clamp(15px,2.1vw,26px)]">
        {/* aurora */}
        <div className={styles.aurora} aria-hidden="true">
          <i className={styles.a} />
          <i className={styles.b} />
          <i className={styles.c} />
        </div>
        {/* gold dust */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        />
        {/* border light beam */}
        <div className={styles.beam} aria-hidden="true" />
        {/* corner ticks */}
        <span className={`${styles.tick} ${styles.tl}`} />
        <span className={`${styles.tick} ${styles.tr}`} />
        <span className={`${styles.tick} ${styles.bl}`} />
        <span className={`${styles.tick} ${styles.br}`} />

        {/* ---------- header ---------- */}
        <header
          className={`${styles.fade} ${styles.f1} relative z-[2] flex items-center justify-between`}
        >
          <a
            href="/"
            className={`flex items-center gap-3.5 text-luxe-paper no-underline ${FOCUS}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sree-logo.svg"
              alt="Sree Info Technologies"
              width={43}
              height={44}
              className="shrink-0"
            />
            <span className={`${styles.divline} max-[600px]:hidden`} />
            <span>
              <b className="block text-[16.5px] font-semibold tracking-[0.4px]">
                Sree Info Technologies
              </b>
              <small className="mt-[3px] block text-[9px] uppercase tracking-[3px] text-luxe-gold opacity-85 max-[600px]:hidden">
                Consult · Outsource · Grow
              </small>
            </span>
          </a>

          <ul className="hidden list-none items-center gap-[30px] min-[880px]:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`${styles.navLink} py-1 text-[13.5px] font-medium text-luxe-muted no-underline transition-colors duration-[250ms] hover:text-luxe-paper focus-visible:text-luxe-paper ${FOCUS}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className={`hidden rounded-lg bg-luxe-gold px-5 py-[11px] text-[13px] font-semibold tracking-[0.3px] text-[#15110a] no-underline transition-[background-color,transform] duration-[250ms] hover:-translate-y-px hover:bg-luxe-goldsoft min-[880px]:inline-flex ${FOCUS}`}
          >
            Get a quote
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[9px] border border-white/10 min-[880px]:hidden ${FOCUS}`}
          >
            <span className={`${BAR} ${menuOpen ? "translate-y-[6.6px] rotate-45" : ""}`} />
            <span className={`${BAR} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`${BAR} ${menuOpen ? "-translate-y-[6.6px] -rotate-45" : ""}`} />
          </button>
        </header>

        {/* mobile menu */}
        <nav
          aria-label="Mobile"
          className={`relative z-[2] mt-[14px] rounded-[10px] border border-white/10 bg-luxe-ink2 min-[880px]:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="list-none py-1.5">
            {[...NAV, { label: "Get a quote", href: "#quote" }].map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 px-[18px] py-[13px] text-[15px] text-luxe-paper no-underline last:border-b-0"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- main ---------- */}
        <div className="relative z-[2] grid flex-1 grid-cols-1 items-start gap-9 py-[clamp(16px,3vh,40px)] min-[880px]:grid-cols-[minmax(0,1fr)_clamp(190px,21vw,250px)] min-[880px]:items-center min-[880px]:gap-[clamp(28px,5vw,72px)]">
          <div>
            <div
              className={`${styles.fade} ${styles.f4} mb-[26px] flex items-center gap-[14px] text-[11px] font-semibold uppercase tracking-[3.4px] text-luxe-gold`}
            >
              <span className={styles.hr} />
              Consulting · Outsourcing · Technology
            </div>

            <h1 className={styles.h1}>
              <span className={styles.ln}>
                <span className={styles.r1}>Your partner</span>
              </span>
              <span className={styles.ln}>
                <span className={styles.r2}>
                  in <span className={styles.g}>success.</span>
                </span>
              </span>
            </h1>

            <p
              className={`${styles.fade} ${styles.f2} mb-9 max-w-[46ch] text-[clamp(1.04rem,1.5vw,1.22rem)] leading-[1.6] text-luxe-muted`}
            >
              You focus on what you do best. We&apos;ll take care of the
              consulting, the staffing, and the tech that keeps things running.
            </p>

            <div
              className={`${styles.fade} ${styles.f3} flex flex-wrap items-center gap-3.5`}
            >
              <a
                ref={magRef}
                href="#quote"
                className={`${styles.b1} rounded-[9px] bg-luxe-gold px-[34px] py-[15px] text-[14.5px] font-semibold tracking-[0.3px] text-[#15110a] no-underline hover:bg-luxe-goldsoft ${FOCUS}`}
              >
                Get a quote
              </a>
              <a
                href="#services"
                className={`rounded-[9px] border border-luxe-gold/30 px-7 py-[15px] text-[14.5px] font-semibold tracking-[0.3px] text-luxe-paper no-underline transition-[border-color,background-color] duration-[250ms] hover:border-luxe-gold hover:bg-luxe-gold/[0.06] ${FOCUS}`}
              >
                Explore services →
              </a>
            </div>
          </div>

          {/* capabilities index */}
          <nav
            aria-label="Capabilities"
            className={`${styles.index} border-t border-white/10 pt-[22px] min-[880px]:border-l min-[880px]:border-t-0 min-[880px]:pl-[clamp(20px,2vw,30px)] min-[880px]:pt-0`}
          >
            <div
              className={`${styles.fade} ${styles.f5} mb-3.5 text-[10.5px] uppercase tracking-[2.6px] text-luxe-muted opacity-70`}
            >
              Capabilities
            </div>
            {CAPABILITIES.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                onPointerEnter={() => changeCap(c)}
                onFocus={() => changeCap(c)}
                onPointerLeave={() => changeCap(DEFAULT_CAP)}
                onBlur={() => changeCap(DEFAULT_CAP)}
                className={`${styles[`ix${i + 1}`]} flex items-baseline gap-3 border-b border-white/10 py-[11px] text-[15px] font-medium text-luxe-paper no-underline last:border-b-0 ${FOCUS}`}
              >
                <span className={styles.no}>{c.no}</span>
                {c.label}
                <span className={styles.ar}>→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ---------- meta ---------- */}
        <div
          className={`${styles.fade} ${styles.f5} relative z-[2] flex flex-wrap items-end justify-between gap-x-5 gap-y-3 border-t border-white/10 pt-[18px] text-[12.5px] tracking-[0.4px] text-luxe-muted max-[600px]:text-[11.5px]`}
        >
          <span
            className={`${styles.capText} ${
              capFading ? styles.capFade : ""
            } min-w-[220px] max-w-[46ch] flex-1`}
          >
            <b className="font-medium text-luxe-goldsoft">{cap.title}</b> {cap.desc}
          </span>
          <span className="hidden flex-col items-center gap-[7px] text-[9px] uppercase tracking-[2.4px] text-luxe-muted min-[880px]:flex">
            Scroll
            <span className={styles.scrollLine} />
          </span>
          <span className="text-right max-[600px]:text-left">
            Ananthapur, Andhra Pradesh — India
          </span>
        </div>
      </div>
    </section>
  );
}
