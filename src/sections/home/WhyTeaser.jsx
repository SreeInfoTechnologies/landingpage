import { Handshake, TrendingUp, ShieldCheck, LifeBuoy } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const REASONS = [
  { icon: Handshake, title: "End-to-end partner", desc: "One accountable team, start to finish." },
  { icon: TrendingUp, title: "Result driven", desc: "Measured by outcomes, not hours." },
  { icon: ShieldCheck, title: "Values first", desc: "Integrity and transparency, always." },
  { icon: LifeBuoy, title: "Always-on support", desc: "A 24/7 support mindset." },
];

export default function WhyTeaser() {
  return (
    <section className={`${styles.whyt} ${styles.hairline}`}>
      <div className={`container-x ${styles.whytGrid}`}>
        <div>
          <Reveal as="p" className={styles.eyebrow}>
            Why choose us
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            A partner invested in your <em>growth.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We don&apos;t just deliver projects — we take ownership of outcomes,
            with one team accountable from first strategy to ongoing support.
          </Reveal>
          <Reveal delay={0.15}>
            <a className={styles.whyCta} href="/why-us">
              Why work with us →
            </a>
          </Reveal>
        </div>

        <Stagger className={styles.whytList} stagger={0.08}>
          {REASONS.map((r) => (
            <StaggerItem key={r.title} className={styles.cell}>
              <article className={styles.wrow}>
                <span className={styles.wic}>
                  <r.icon size={20} strokeWidth={1.9} />
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
