import { Check } from "lucide-react";
import { payroll } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import styles from "./Payroll.module.scss";

export default function Payroll() {
  return (
    <section id="payroll" className={`${styles.root} section`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* text */}
        <Reveal>
          <span className="badge">Payroll Management</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Streamlined payroll solutions
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            We help businesses manage payroll efficiently and accurately, end to end.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {payroll.solutions.map((s) => (
              <li key={s} className="flex items-center gap-3 text-ink/80">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gold/15 text-gold-700">
                  <Check size={15} strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* benefits panel */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-navy-grad p-8 text-white shadow-lift md:p-10">
            <h3 className="text-xl font-bold text-white">Key Benefits</h3>
            <ul className="mt-6 space-y-4">
              {payroll.benefits.map((b, i) => (
                <li
                  key={b}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-grad font-heading font-bold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
