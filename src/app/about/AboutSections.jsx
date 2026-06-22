import { Compass, Users, TrendingUp, Eye, Target } from "lucide-react";
import { company } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./about.module.scss";

// Consult → Outsource → Grow.
const STEPS = [
  { num: "01", icon: Compass, title: "Consult", desc: "We dig into your goals, challenges and data to shape a clear, practical strategy." },
  { num: "02", icon: Users, title: "Outsource", desc: "We take on the operations — payroll, HR, back-office and more — so your team stays focused." },
  { num: "03", icon: TrendingUp, title: "Grow", desc: "We build the technology and marketing that turn strategy into measurable growth." },
];

const VM = [
  { icon: Eye, tag: "Our vision", title: "The growth partner businesses trust.", desc: "To be the partner organizations across industries turn to for growth — recognised for innovation, integrity, and the measurable results we help create." },
  { icon: Target, tag: "Our mission", title: "Strategy, execution and lasting value.", desc: "To help organizations consult, outsource and grow with confidence — pairing practical strategy with dependable execution and technology built to last." },
];

export default function AboutSections() {
  return (
    <div className={styles.page}>
      {/* ---------- hero header ---------- */}
      <section className={styles.hero} id="about">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            About us
          </Reveal>
          <Reveal as="h1" delay={0.05} className={styles.heading}>
            Your partner in <em>success.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.lead}>
            {company.name} is a fast-growing consulting and outsourcing company —
            helping businesses improve efficiency, reduce costs and accelerate
            growth through innovation, integrity and excellence.
          </Reveal>
        </div>
      </section>

      {/* ---------- who we are ---------- */}
      <section className={`${styles.who} ${styles.hairline}`}>
        <div className={`container-x ${styles.whoGrid}`}>
          <div>
            <Reveal as="p" className={styles.label}>
              Who we are
            </Reveal>
            <Reveal as="p" delay={0.05} className={styles.text}>
              We bring{" "}
              <strong>consulting, outsourcing, technology and marketing</strong>{" "}
              together under one roof — so businesses can solve complex problems
              with a single, accountable partner instead of juggling vendors.
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.text}>
              We&apos;re driven by a simple belief: lasting success comes from
              innovation, integrity and excellence applied consistently. Every
              engagement is measured by the outcomes we create for the people we
              work with — not the hours we bill.
            </Reveal>
            <Reveal delay={0.15}>
              <a className={styles.cta} href="/#contact">
                Work with us →
              </a>
            </Reveal>
          </div>

          <Reveal as="aside" delay={0.1} className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.k}>Headquarters</span>
              <span className={styles.v}>{company.location}, India</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.k}>Disciplines</span>
              <span className={styles.v}>
                Consulting · Outsourcing · Technology · Marketing
              </span>
            </div>
            <div className={styles.fact}>
              <span className={styles.k}>What guides us</span>
              <span className={styles.v}>{company.motto}</span>
            </div>
            <div className={styles.stats}>
              <div>
                <b>8+</b>
                <span>Service domains</span>
              </div>
              <div>
                <b>5+</b>
                <span>Industry verticals</span>
              </div>
              <div>
                <b>24/7</b>
                <span>Support mindset</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- approach ---------- */}
      <section className={`${styles.steps} ${styles.hairline}`}>
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            How we work
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            Consult. Outsource. <em>Grow.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            Three simple moves that take you from where you are to where you want
            to be — with one team accountable the whole way.
          </Reveal>

          <Stagger className={styles.stepsGrid} stagger={0.1}>
            {STEPS.map((s) => (
              <StaggerItem key={s.num} className={styles.cell}>
                <article className={styles.step}>
                  <span className={styles.num}>{s.num}</span>
                  <span className={styles.stepIc}>
                    <s.icon size={22} strokeWidth={1.9} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- vision & mission ---------- */}
      <section className={`${styles.vm} ${styles.hairline}`}>
        <div className={`container-x ${styles.vmGrid}`}>
          {VM.map((v) => (
            <Reveal key={v.tag} className={styles.vmcard}>
              <span className={styles.vmIc}>
                <v.icon size={24} strokeWidth={1.9} />
              </span>
              <p className={styles.tag}>{v.tag}</p>
              <h3>{v.title}</h3>
              <p className={styles.vmtext}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- closing cta ---------- */}
      <section className={`${styles.finalCta} ${styles.hairline}`}>
        <div className="container-x">
          <Reveal className={styles.ctaPanel}>
            <div className={styles.dia}>◆</div>
            <h2>
              Let&apos;s build your <em>next chapter.</em>
            </h2>
            <p>
              Tell us where you&apos;re headed — we&apos;ll map a clear,
              practical way to get there.
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
    </div>
  );
}
