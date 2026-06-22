import {
  Handshake,
  ShieldCheck,
  TrendingUp,
  LayoutGrid,
  Gauge,
  Scaling,
  LifeBuoy,
  Award,
} from "lucide-react";
import { company } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./WhyChooseUs.module.scss";

// Reasons to choose us — icon + headline + one-line proof.
const REASONS = [
  { icon: Handshake, title: "End-to-end partner", desc: "Consult, outsource and grow with one accountable team." },
  { icon: ShieldCheck, title: "Values first", desc: "Integrity, transparency and trust in every engagement." },
  { icon: TrendingUp, title: "Result driven", desc: "Measured by the outcomes we create, not hours billed." },
  { icon: LayoutGrid, title: "Cross-domain expertise", desc: "Strategy, technology, operations and marketing in one place." },
  { icon: Gauge, title: "Cost-effective delivery", desc: "Smart processes that cut costs and lift efficiency." },
  { icon: Scaling, title: "Scales with you", desc: "Flexible models that grow from startup to enterprise." },
  { icon: LifeBuoy, title: "Always-on support", desc: "A 24/7 support mindset that keeps you moving." },
  { icon: Award, title: "Proven experience", desc: "Trusted across multiple industries and business stages." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className={styles.why}>
      <div className={`container-x ${styles.grid}`}>
        {/* intro */}
        <div>
          <Reveal as="p" className={styles.eyebrow}>
            Why choose us
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            A partner invested in your <em>growth.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We don&apos;t just deliver projects — we take ownership of outcomes.
            Consulting, outsourcing, technology and marketing, brought together by
            one team accountable to your results.
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className={styles.cta}>
              Start a conversation →
            </a>
          </Reveal>
          <Reveal as="p" delay={0.2} className={styles.motto}>
            {company.motto}
          </Reveal>
        </div>

        {/* reasons grid */}
        <Stagger className={styles.list} stagger={0.08}>
          {REASONS.map((r) => (
            <StaggerItem key={r.title} className={styles.cell}>
              <article className={styles.row}>
                <span className={styles.ic}>
                  <r.icon size={21} strokeWidth={1.9} />
                </span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
