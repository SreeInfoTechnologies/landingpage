"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import SectionHeading from "./ui/SectionHeading";

const EASE = [0.22, 0.61, 0.36, 1];

export default function Services() {
  const categories = useMemo(
    () => ["All", ...new Set(services.map((s) => s.category))],
    []
  );
  const [filter, setFilter] = useState("All");

  const visible = services.filter(
    (s) => filter === "All" || s.category === filter
  );

  return (
    <section id="services" className="section bg-cream dot-grid-navy">
      <div className="container-x">
        <SectionHeading
          badge="Our Services"
          title="Everything you need to scale"
          subtitle="End-to-end consulting, outsourcing, marketing, and technology services under one roof."
        />

        {/* filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "border-navy bg-navy text-white"
                  : "border-black/10 bg-white text-ink/70 hover:border-gold hover:text-gold-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* cards */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <motion.article
                  key={s.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-grad transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold-grad group-hover:text-navy">
                      <Icon size={26} />
                    </span>
                    <ArrowUpRight className="text-black/15 transition-colors group-hover:text-gold" />
                  </div>
                  <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.12em] text-gold-700">
                    {s.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-ink/70">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
