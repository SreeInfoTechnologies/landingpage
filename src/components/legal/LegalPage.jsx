import Reveal from "@/components/ui/Reveal";
import styles from "./LegalPage.module.scss";

/**
 * Shared layout for legal / policy pages (Privacy, Terms).
 *  - eyebrow: small kicker above the title
 *  - title: page heading
 *  - updated: "Last updated" date string
 *  - intro: lead paragraph
 *  - sections: [{ h: heading, p: [paragraph, ...] }]
 */
export default function LegalPage({
  eyebrow = "Legal",
  title,
  updated,
  intro,
  sections = [],
}) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            {eyebrow}
          </Reveal>
          <Reveal as="h1" delay={0.05} className={styles.heading}>
            {title}
          </Reveal>
          {updated && (
            <Reveal as="p" delay={0.1} className={styles.updated}>
              Last updated: {updated}
            </Reveal>
          )}
        </div>
      </section>

      <section className={`${styles.body} ${styles.hairline}`}>
        <div className={`container-x ${styles.prose}`}>
          {intro && (
            <Reveal as="p" className={styles.lead}>
              {intro}
            </Reveal>
          )}
          {sections.map((s, i) => (
            <Reveal as="section" key={s.h} delay={Math.min(0.04 * i, 0.2)} className={styles.block}>
              <h2 className={styles.h2}>{s.h}</h2>
              {s.p.map((para) => (
                <p key={para.slice(0, 40)} className={styles.p}>
                  {para}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
