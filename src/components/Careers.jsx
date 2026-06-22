import { Check, Briefcase } from "lucide-react";
import { careers } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "./ui/Reveal";

export default function Careers() {
  return (
    <section id="careers" className="section bg-cream dot-grid-navy">
      <div className="container-x">
        <SectionHeading
          badge="Careers"
          title="Join our team"
          subtitle="At Sree Info Technologies, we believe in nurturing talent and building successful careers."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* perks */}
          <Reveal>
            <div className="h-full rounded-3xl bg-navy-grad p-8 text-white shadow-lift">
              <h3 className="text-xl font-bold text-white">What we offer</h3>
              <ul className="mt-6 space-y-4">
                {careers.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gold-grad text-navy">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-white/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* openings */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Current openings</h3>
            <Stagger className="grid gap-3" stagger={0.08}>
              {careers.openings.map((o) => (
                <StaggerItem key={o.role}>
                  <div className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-soft transition-all duration-300 hover:translate-x-1 hover:shadow-card">
                    <div className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-700">
                        <Briefcase size={20} />
                      </span>
                      <span className="font-heading font-semibold text-navy">{o.role}</span>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy/70">
                      {o.tag}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
