import { Compass, Users, TrendingUp, Eye, Target } from "lucide-react";
import { company, founder } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./about.module.scss";

// Consult → Outsource → Grow.
const STEPS = [
  { num: "01", icon: Compass, title: "Consult", desc: "We get to know your goals and challenges, then build a plan that fits." },
  { num: "02", icon: Users, title: "Outsource", desc: "We handle the operations like payroll, HR and back-office, so your team can focus." },
  { num: "03", icon: TrendingUp, title: "Grow", desc: "We build the technology and marketing that turn the plan into real growth." },
];

const VM = [
  { icon: Eye, tag: "Our vision", title: "The partner businesses trust to grow.", desc: "To be the company businesses turn to when they want to grow, known for honest work that actually moves the needle." },
  { icon: Target, tag: "Our mission", title: "Plan it, build it, and stick around.", desc: "To help businesses consult, outsource and grow with confidence, backed by solid planning, dependable delivery and technology that lasts." },
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
            {company.name} is a growing consulting and outsourcing company. We
            help businesses work smarter, spend less and grow, and we try to do
            it honestly and well.
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
              together in one place, so you can solve big problems with one team
              you trust instead of juggling a handful of vendors.
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.text}>
              We believe good work speaks for itself. So we keep things honest,
              do them well, and measure our success by what our clients achieve,
              not the hours on an invoice.
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

      {/* ---------- founder / leadership ---------- */}
      <section className={`${styles.leader} ${styles.hairline}`} id="founder">
        <div className={`container-x ${styles.leaderGrid}`}>
          <Reveal className={styles.portraitWrap}>
            <figure className={styles.portrait}>
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.jobTitle} of ${company.name}`}
                loading="lazy"
              />
              <figcaption className={styles.badge}>
                <span className={styles.badgeName}>{founder.name}</span>
                <span className={styles.badgeRole}>{founder.jobTitle}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal as="p" className={styles.eyebrow}>
              Leadership
            </Reveal>
            <Reveal as="h2" delay={0.05} className={styles.heading}>
              Meet our <em>founder.</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.leaderRole}>
              {founder.name} · {founder.jobTitle}
            </Reveal>
            <Reveal as="p" delay={0.12} className={styles.text}>
              {founder.bio}
            </Reveal>
            <Reveal as="p" delay={0.16} className={styles.text}>
              {founder.note}
            </Reveal>

            <Reveal delay={0.2} className={styles.focusRow}>
              {founder.focus.map((f) => (
                <span key={f} className={styles.chip}>
                  {f}
                </span>
              ))}
            </Reveal>

            <Reveal as="blockquote" delay={0.24} className={styles.quote}>
              &ldquo;{founder.quote}&rdquo;
            </Reveal>

            <Reveal delay={0.28}>
              <a className={styles.cta} href="/sainath/">
                Connect with Sainath →
              </a>
            </Reveal>
          </div>
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
            Three simple steps that take you from where you are now to where you
            want to be, with one team alongside you the whole way.
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
              Tell us where you want to take your business, and we&apos;ll help
              you get there.
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
