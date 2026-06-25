import { faqs } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./Faq.module.scss";

/**
 * FAQ accordion — native <details>/<summary> so the answer text is present in
 * the static HTML even when collapsed (crawlable by Google AND by AI answer
 * engines / voice assistants, with no JS dependency). The questions are real
 * brand/entity queries ("who founded…", "where is…", "what does…") answered as
 * self-contained passages — the strongest GEO lever for AI citation.
 *
 * NB: Google fully retired FAQ *rich results* (May 2026), so this earns no FAQ
 * snippet in Google; its value is AI/voice/passage-indexing + Bing.
 */
export default function Faq() {
  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <div className="container-x">
        <div className={styles.head}>
          <Reveal as="p" className={styles.eyebrow}>
            Questions &amp; answers
          </Reveal>
          <Reveal as="h2" id="faq-heading" delay={0.05} className={styles.heading}>
            Frequently asked <em>questions</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            Quick answers about who we are, what we do, and how to reach us.
          </Reveal>
        </div>

        <Stagger className={styles.list} stagger={0.05}>
          {faqs.map((f) => (
            <StaggerItem key={f.question}>
              <details className={styles.item} name="faq">
                <summary className={styles.q}>
                  <span>{f.question}</span>
                  <i className={styles.chev} aria-hidden="true">
                    +
                  </i>
                </summary>
                <div className={styles.a}>
                  <p>{f.answer}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
