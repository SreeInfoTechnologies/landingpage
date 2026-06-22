import { TrendingUp, ArrowRight } from "lucide-react";
import { marketing } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import styles from "./Marketing.module.scss";

export default function Marketing() {
  return (
    <section id="marketing" className={`${styles.root} section`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* services panel (left on desktop) */}
        <Reveal className="lg:order-2">
          <span className="badge">Marketing Solutions</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Accelerating business growth
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Our marketing services help organizations build brand, generate leads,
            and boost revenue.
          </p>
          <ul className="mt-7 space-y-3">
            {marketing.outcomes.map((o) => (
              <li key={o} className="flex items-center gap-3 text-ink/80">
                <TrendingUp size={18} className="shrink-0 text-gold-700" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:order-1">
          <div className="rounded-3xl border border-black/5 bg-cream p-8 shadow-card md:p-10">
            <h3 className="text-xl font-bold">Services Include</h3>
            <div className="mt-6 grid gap-3">
              {marketing.services.map((s) => (
                <div
                  key={s}
                  className="group flex items-center justify-between rounded-xl border border-black/5 bg-white p-4 transition-all duration-300 hover:translate-x-1 hover:border-gold/30 hover:shadow-soft"
                >
                  <span className="font-heading font-semibold text-navy">{s}</span>
                  <ArrowRight
                    size={18}
                    className="text-black/20 transition-colors group-hover:text-gold"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
