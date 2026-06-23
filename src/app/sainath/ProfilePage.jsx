import {
  Mail,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Sparkles,
  Eye,
  Target,
  Compass,
  Handshake,
  Layers,
} from "lucide-react";
import { company, founder, founderProfile, services, visionMission } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./profile.module.scss";

// Resolve the leadership-card icon strings to lucide components.
const LEAD_ICONS = { Compass, Handshake, Layers };

export default function ProfilePage() {
  const { summary, location, stats, leadership } = founderProfile;

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
              {founder.jobTitle}
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
                <Sparkles size={15} strokeWidth={1.9} /> {company.motto}
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

      {/* ---------- profile + leadership ---------- */}
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
            {/* Founder's signature — faint, like a hand-signed letter. Decorative:
                the name is already announced in the hero, so hidden from a11y tree. */}
            <Reveal
              as="p"
              delay={0.18}
              className={styles.signature}
              aria-hidden="true"
            >
              {founder.name}
            </Reveal>
          </div>

          <Stagger className={styles.focusCards} stagger={0.1}>
            {leadership.map((l) => {
              const Icon = LEAD_ICONS[l.icon] || Compass;
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

      {/* ---------- vision & mission ---------- */}
      <section className={`${styles.vm} ${styles.hairline}`} id="vision">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            What he&apos;s building
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            Vision &amp; <em>mission.</em>
          </Reveal>

          <div className={styles.vmGrid}>
            <Reveal className={styles.vmcard}>
              <span className={styles.vmIc}>
                <Eye size={24} strokeWidth={1.9} />
              </span>
              <p className={styles.tag}>The vision</p>
              <p className={styles.vmtext}>{visionMission.vision}</p>
            </Reveal>
            <Reveal delay={0.08} className={styles.vmcard}>
              <span className={styles.vmIc}>
                <Target size={24} strokeWidth={1.9} />
              </span>
              <p className={styles.tag}>The mission</p>
              <p className={styles.vmtext}>{visionMission.mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- what he leads ---------- */}
      <section className={`${styles.leads} ${styles.hairline}`} id="disciplines">
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            What he leads
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            One team, four <em>disciplines.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            Under Sainath&apos;s leadership, {company.shortName} brings consulting,
            outsourcing, technology and marketing together so clients solve big
            problems with one partner they trust.
          </Reveal>

          <Stagger className={styles.leadsGrid} stagger={0.08}>
            {services.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <StaggerItem key={s.title} className={styles.leadCard}>
                  <span className={styles.leadIc}>
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
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
              Tell Sainath and the {company.shortName} team where you want to take
              your business, and they&apos;ll help you get there.
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
