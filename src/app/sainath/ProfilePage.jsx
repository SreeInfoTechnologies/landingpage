import {
  Mail,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Languages,
  GraduationCap,
  Briefcase,
  Cloud,
  Boxes,
  Network,
  Database,
  ShieldCheck,
  DatabaseBackup,
  TerminalSquare,
  Activity,
  Compass,
  Handshake,
  Layers,
} from "lucide-react";
import { company, founder, founderProfile } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./profile.module.scss";

// Resolve the data-layer icon strings to lucide components.
const ICONS = {
  Cloud,
  Boxes,
  Network,
  Database,
  ShieldCheck,
  DatabaseBackup,
  TerminalSquare,
  Activity,
  Compass,
  Handshake,
  Layers,
};

export default function ProfilePage() {
  const { summary, location, stats, leadership, experience, skills, tools, education, languages } =
    founderProfile;

  return (
    <div className={styles.page}>
      {/* ---------- hero ---------- */}
      <section className={styles.hero} id="profile">
        <div className={`container-x ${styles.heroGrid}`}>
          <Reveal className={styles.portraitWrap}>
            <figure className={styles.portrait}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.jobTitle} of ${company.name}`}
              />
              <figcaption className={styles.badge}>
                <span className={styles.badgeName}>{founder.name}</span>
                <span className={styles.badgeRole}>{founder.jobTitle}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className={styles.heroBody}>
            <Reveal as="p" className={styles.eyebrow}>
              {founder.jobTitle} · Cloud Engineer
            </Reveal>
            <Reveal as="h1" delay={0.05} className={styles.name}>
              {founder.name}
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.lead}>
              {summary}
            </Reveal>

            <Reveal delay={0.14} className={styles.metaRow}>
              <span className={styles.meta}>
                <MapPin size={15} strokeWidth={1.9} /> {location}
              </span>
              <span className={styles.meta}>
                <Languages size={15} strokeWidth={1.9} /> {languages.join(" · ")}
              </span>
            </Reveal>

            <Reveal delay={0.18} className={styles.heroCtas}>
              <a className={styles.btnGold} href={`mailto:${founder.email}`}>
                <Mail size={17} strokeWidth={2} /> Email Sainath
              </a>
              <a className={styles.btnOut} href="/about/#founder">
                <ArrowLeft size={16} strokeWidth={2} /> Back to company
              </a>
            </Reveal>
          </div>
        </div>

        {/* stat strip */}
        <div className="container-x">
          <Stagger className={styles.stats} stagger={0.08}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className={styles.stat}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- about + leadership ---------- */}
      <section className={`${styles.about} ${styles.hairline}`}>
        <div className={`container-x ${styles.aboutGrid}`}>
          <div>
            <Reveal as="p" className={styles.label}>
              Profile
            </Reveal>
            <Reveal as="p" delay={0.05} className={styles.text}>
              {founder.bio}
            </Reveal>
            <Reveal as="p" delay={0.1} className={styles.text}>
              {founder.note}
            </Reveal>
            <Reveal as="blockquote" delay={0.14} className={styles.quote}>
              &ldquo;{founder.quote}&rdquo;
            </Reveal>
          </div>

          <Stagger className={styles.focusCards} stagger={0.1}>
            {leadership.map((l) => {
              const Icon = ICONS[l.icon] || Compass;
              return (
                <StaggerItem key={l.title} className={styles.focusCard}>
                  <span className={styles.focusIc}>
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ---------- experience ---------- */}
      <section className={`${styles.exp} ${styles.hairline}`} id="experience">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Experience
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            A career built in the <em>cloud.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            From engineering Azure infrastructure for global firms to founding a
            company of his own.
          </Reveal>

          <div className={styles.timeline}>
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${job.role}`} delay={0.06 * i} className={styles.tlItem}>
                <span className={styles.tlDot} aria-hidden="true" />
                <article className={styles.job}>
                  <header className={styles.jobHead}>
                    <div>
                      <h3>{job.role}</h3>
                      <p className={styles.jobOrg}>
                        <Briefcase size={14} strokeWidth={1.9} />
                        {job.org}
                        <span className={styles.jobLoc}>· {job.location}</span>
                      </p>
                    </div>
                    <span className={`${styles.period} ${job.current ? styles.periodNow : ""}`}>
                      {job.period}
                    </span>
                  </header>
                  <ul className={styles.jobPoints}>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- skills ---------- */}
      <section className={`${styles.skills} ${styles.hairline}`} id="skills">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Technical Expertise
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            What he works <em>with.</em>
          </Reveal>

          <Stagger className={styles.skillGrid} stagger={0.07}>
            {skills.map((g) => {
              const Icon = ICONS[g.icon] || Cloud;
              return (
                <StaggerItem key={g.title} className={styles.skillCard}>
                  <span className={styles.skillIc}>
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools &amp; process</span>
            <div className={styles.toolChips}>
              {tools.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- education ---------- */}
      <section className={`${styles.edu} ${styles.hairline}`}>
        <div className={`container-x ${styles.eduGrid}`}>
          <Reveal className={styles.eduCard}>
            <span className={styles.eduIc}>
              <GraduationCap size={24} strokeWidth={1.9} />
            </span>
            <p className={styles.tag}>Education</p>
            <h3>{education.degree}</h3>
            <p className={styles.eduText}>{education.school}</p>
            <span className={styles.eduYear}>{education.year}</span>
          </Reveal>

          <Reveal delay={0.08} className={styles.eduCard}>
            <span className={styles.eduIc}>
              <Languages size={24} strokeWidth={1.9} />
            </span>
            <p className={styles.tag}>Languages</p>
            <div className={styles.langRow}>
              {languages.map((l) => (
                <span key={l} className={styles.chip}>
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- closing cta ---------- */}
      <section className={`${styles.finalCta} ${styles.hairline}`}>
        <div className="container-x">
          <Reveal className={styles.ctaPanel}>
            <div className={styles.dia}>◆</div>
            <h2>
              Let&apos;s build something <em>together.</em>
            </h2>
            <p>
              Whether it&apos;s your cloud, your operations or your growth,
              Sainath and the {company.shortName} team are ready to help.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.btnGold} href={`mailto:${founder.email}`}>
                <Mail size={17} strokeWidth={2} /> Get in touch
              </a>
              <a className={styles.btnOut} href="/contact/">
                Contact the company <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
