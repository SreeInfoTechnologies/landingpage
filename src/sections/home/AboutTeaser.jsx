import { Compass, Users, TrendingUp } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const TRIO = [
  { n: "01", icon: Compass, title: "Consult", desc: "We learn your goals, then build a plan around them." },
  { n: "02", icon: Users, title: "Outsource", desc: "We take the busywork so your team can focus." },
  { n: "03", icon: TrendingUp, title: "Grow", desc: "Tech and marketing that help you grow." },
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
            We&apos;d rather be a partner than a <em>vendor.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We bring consulting, outsourcing, technology and marketing together,
            so you've got one team to count on instead of many.
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
