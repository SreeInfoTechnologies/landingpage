import { Handshake, TrendingUp, ShieldCheck, LifeBuoy } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const REASONS = [
  { icon: Handshake, title: "One team for everything", desc: "From the first idea to ongoing support." },
  { icon: TrendingUp, title: "Focused on results", desc: "We care what gets done, not hours logged." },
  { icon: ShieldCheck, title: "Straight with you", desc: "Honest and open, every step." },
  { icon: LifeBuoy, title: "Always around", desc: "Help whenever you need it." },
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
            We treat your business like our <em>own.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            You work with the same team from start to finish. We help you plan
            it, then stay on to keep everything running.
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
