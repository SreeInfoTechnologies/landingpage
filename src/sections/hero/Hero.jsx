"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";

// Capabilities index — `title`/`desc` feed the live caption in the meta row.
const CAPABILITIES = [
  { no: "01", label: "Consulting", href: "/services#consulting", title: "Consulting.", desc: "Business and IT advice that gives you a clear plan to act on." },
  { no: "02", label: "Outsourcing", href: "/services#outsourcing", title: "Outsourcing.", desc: "Reliable teams that handle the day-to-day, sized to fit you." },
  { no: "03", label: "Software & Cloud", href: "/services#technology", title: "Software & Cloud.", desc: "Custom software and cloud setups that grow with you." },
  { no: "04", label: "Staffing", href: "/careers", title: "Staffing.", desc: "We find the right people and help you keep them." },
  { no: "05", label: "Marketing", href: "/services#marketing", title: "Marketing.", desc: "Marketing that gets you noticed and brings in customers." },
  { no: "06", label: "Payroll", href: "/services#outsourcing", title: "Payroll.", desc: "Payroll done right and on time, every month." },
];

const DEFAULT_CAP = { title: "Driven by values.", desc: "Focused on results." };

// Shared Tailwind bits.
const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-luxe-gold";

export default function Hero() {
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
      className={`${styles.hero} relative px-[clamp(10px,1.3vw,16px)] pb-[clamp(10px,1.3vw,16px)] pt-[70px] font-body text-luxe-paper antialiased`}
    >
      <div className="relative mx-auto flex w-full max-w-[1320px] min-h-[64svh] flex-col overflow-hidden rounded-lg border border-white/10 px-[clamp(20px,3.4vw,52px)] pb-[clamp(16px,2.2vw,28px)] pt-[clamp(20px,3vh,38px)]">
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

        {/* ---------- main ---------- */}
        <div className="relative z-[2] grid flex-1 grid-cols-1 items-start gap-7 py-[clamp(8px,2vh,22px)] min-[880px]:grid-cols-[minmax(0,1fr)_clamp(180px,20vw,240px)] min-[880px]:items-center min-[880px]:gap-[clamp(24px,4vw,56px)]">
          <div>
            <div
              className={`${styles.fade} ${styles.f4} mb-[16px] flex items-center gap-[14px] text-[11px] font-semibold uppercase tracking-[3.4px] text-luxe-gold`}
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
              className={`${styles.fade} ${styles.f2} mb-6 max-w-[46ch] text-[clamp(0.98rem,1.4vw,1.12rem)] leading-[1.6] text-luxe-muted`}
            >
              You focus on what you do best. We&apos;ll take care of the
              consulting, the staffing, and the tech that keeps things running.
            </p>

            <div
              className={`${styles.fade} ${styles.f3} flex flex-wrap items-center gap-3.5`}
            >
              <a
                ref={magRef}
                href="/contact"
                className={`${styles.b1} rounded-[9px] bg-luxe-gold px-[28px] py-[12px] text-[14px] font-semibold tracking-[0.3px] text-[#15110a] no-underline hover:bg-luxe-goldsoft ${FOCUS}`}
              >
                Get in touch
              </a>
              <a
                href="/services"
                className={`rounded-[9px] border border-luxe-gold/30 px-6 py-[12px] text-[14px] font-semibold tracking-[0.3px] text-luxe-paper no-underline transition-[border-color,background-color] duration-[250ms] hover:border-luxe-gold hover:bg-luxe-gold/[0.06] ${FOCUS}`}
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
            Ananthapur, Andhra Pradesh, India
          </span>
        </div>
      </div>
    </section>
  );
}
