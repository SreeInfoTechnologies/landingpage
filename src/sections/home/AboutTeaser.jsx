import { Compass, Users, TrendingUp } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const TRIO = [
  { n: "01", icon: Compass, title: "Consult", desc: "Strategy shaped around your goals and data." },
  { n: "02", icon: Users, title: "Outsource", desc: "Operations handled, so your team stays focused." },
  { n: "03", icon: TrendingUp, title: "Grow", desc: "Technology and marketing that scale results." },
];

export default function AboutTeaser() {
  return (
    <section className={`${styles.abt} ${styles.hairline}`}>
      <div className="container-x">
        <div className={styles.abtHead}>
          <Reveal as="p" className={styles.eyebrow}>
            About us
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            More than a vendor — a <em>growth partner.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We bring consulting, outsourcing, technology and marketing under one
            roof — guided by values and focused on results.
          </Reveal>
          <Reveal delay={0.15}>
            <a className={styles.abtCta} href="/about">
              About us →
            </a>
          </Reveal>
        </div>

        <Stagger className={styles.trio} stagger={0.1}>
          {TRIO.map((t) => (
            <StaggerItem key={t.n} className={styles.cell}>
              <article className={styles.tstep}>
                <div className={styles.tn}>{t.n}</div>
                <span className={styles.tIc}>
                  <t.icon size={20} strokeWidth={1.9} />
                </span>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
