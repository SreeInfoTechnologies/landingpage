import Reveal from "@/components/ui/Reveal";
import styles from "./why.module.scss";

// Closing CTA for the Why Us page — mirrors the home FinalCTA.
export default function WhyCTA() {
  return (
    <section className={styles.cta}>
      <div className="container-x">
        <Reveal className={styles.ctaPanel}>
          <div className={styles.dia}>◆</div>
          <h2>
            Ready to grow with the <em>right partner?</em>
          </h2>
          <p>
            Tell us where you&apos;re headed — we&apos;ll bring the consulting,
            technology and marketing to get you there.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.btnGold} href="/contact">
              Get in touch
            </a>
            <a className={styles.btnOut} href="/services">
              Explore services →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
