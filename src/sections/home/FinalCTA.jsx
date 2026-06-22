import Reveal from "@/components/ui/Reveal";
import styles from "./home.module.scss";

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <div className="container-x">
        <Reveal className={styles.ctaPanel}>
          <div className={styles.dia}>◆</div>
          <h2>
            Let&apos;s talk about your <em>growth.</em>
          </h2>
          <p>
            Tell us where you&apos;re headed — we&apos;ll map a clear, practical
            way to get there.
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
