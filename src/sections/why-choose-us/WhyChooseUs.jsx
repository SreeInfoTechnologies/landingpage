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
  { icon: Handshake, title: "One team for everything", desc: "Consulting, outsourcing and growth, with no hand-offs in between." },
  { icon: ShieldCheck, title: "Straight with you", desc: "Honest, open and easy to trust, every time." },
  { icon: TrendingUp, title: "Focused on results", desc: "We care what gets done, not hours billed." },
  { icon: LayoutGrid, title: "Cross-domain expertise", desc: "Strategy, technology, operations and marketing in one place." },
  { icon: Gauge, title: "Cost-effective delivery", desc: "Smart ways of working that keep your costs down." },
  { icon: Scaling, title: "Scales with you", desc: "Flexible enough to fit a startup or a large company." },
  { icon: LifeBuoy, title: "Always around", desc: "Help when you need it, so you're never stuck." },
  { icon: Award, title: "Proven experience", desc: "We've worked across plenty of industries and company sizes." },
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
            We treat your business like our <em>own.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We stay with you past the launch, and we care how things actually
            turn out. Consulting, outsourcing, technology and marketing, all
            from one team that answers to you.
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
