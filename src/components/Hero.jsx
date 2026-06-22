"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { company, pillars, stats } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import Counter from "./ui/Counter";

const EASE = [0.22, 0.61, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-grad pt-32 pb-20 text-white md:pt-40 md:pb-28"
    >
      {/* decorative layers */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-navy-500/40 blur-[120px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- copy ---------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light"
          >
            <Sparkles size={14} /> New Beginning · Bigger Vision
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {company.partner.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="gold-text">in Success</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-script text-2xl text-gold-light sm:text-3xl">
            {company.motto}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            {company.pitch}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="btn-gold">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              {company.buildLine}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/70"
          >
            <MapPin size={16} className="text-gold" />
            Proudly based in {company.location}
          </motion.div>
        </motion.div>

        {/* ---------- glass panel ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl shadow-lift">
            <p className="mb-1 font-script text-2xl text-gold-light">{company.tagline}</p>
            <p className="mb-6 text-sm text-white/60">What we do best</p>

            <div className="space-y-4">
              {pillars.map((p, i) => {
                const Icon = getIcon(p.icon);
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: EASE }}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-grad text-navy">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white">{p.title}</h3>
                      <p className="text-sm leading-snug text-white/65">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* floating accent badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -top-5 rounded-2xl bg-gold-grad px-4 py-3 text-navy shadow-gold"
          >
            <p className="text-2xl font-extrabold leading-none">100%</p>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide">Client Focused</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- stats strip ---------- */}
      <div className="container-x relative mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center backdrop-blur-sm">
              <p className="font-heading text-3xl font-extrabold text-gold-light sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/65">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
