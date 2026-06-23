import { Sparkles, Briefcase } from "lucide-react";
import { careers } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./careers.module.scss";

export default function CareersPage() {
  return (
    <div className={styles.page}>
      {/* ---------- hero header ---------- */}
      <section className={styles.hero} id="careers">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Careers
          </Reveal>
          <Reveal as="h1" delay={0.05} className={styles.heading}>
            Build your career <em>with us.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.lead}>
            Our people are the business, really. We give them room to grow, back
            their ambitions, and help them build careers worth staying for. And
            we work out where we&apos;re going next, together.
          </Reveal>
        </div>
      </section>

      {/* ---------- perks ---------- */}
      <section className={`${styles.perks} ${styles.hairline}`}>
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Why work with us
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            More than a job, <em>a place to grow.</em>
          </Reveal>

          <Stagger className={styles.perksGrid} stagger={0.08}>
            {careers.perks.map((perk) => (
              <StaggerItem key={perk} className={styles.cell}>
                <article className={styles.perk}>
                  <span className={styles.perkIc}>
                    <Sparkles size={22} strokeWidth={1.9} />
                  </span>
                  <h3>{perk}</h3>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- current openings ---------- */}
      <section className={`${styles.jobs} ${styles.hairline}`}>
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Open roles
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            Current <em>openings.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            We&apos;re always on the lookout for good people across the board.
            Take a look and see where you&apos;d fit.
          </Reveal>

          <Stagger className={styles.jobsList} stagger={0.08}>
            {careers.openings.map((job) => (
              <StaggerItem key={job.role}>
                <article className={styles.job}>
                  <span className={styles.jobIc}>
                    <Briefcase size={22} strokeWidth={1.9} />
                  </span>
                  <span className={styles.jobRole}>{job.role}</span>
                  <span className={styles.pill}>{job.tag}</span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- closing cta ---------- */}
      <section className={styles.cta}>
        <div className="container-x">
          <Reveal className={styles.ctaPanel}>
            <div className={styles.dia}>◆</div>
            <h2>
              Don&apos;t see your role? <em>Get in touch.</em>
            </h2>
            <p>
              We love hearing from people who want to do good work. Send over
              your details and let&apos;s talk.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.btnGold} href="/contact">
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
