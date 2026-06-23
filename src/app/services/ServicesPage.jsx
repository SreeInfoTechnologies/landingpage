import { Briefcase, RefreshCw, Megaphone, Code2, Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./services.module.scss";

// Map each service category to its lucide icon, anchor id, intro line and the
// detailed list of offerings shown under it. Kept here (not in data.js) so the
// shared data layer stays simple while this page can present each service fully.
const META = {
  Consulting: {
    icon: Briefcase,
    id: "consulting",
    tagline: "Strategy & advisory",
    desc: "Help with the big calls and the day-to-day, from setting direction to actually making the change happen.",
    offerings: [
      { title: "Business Strategy", desc: "Roadmaps, market research and clear thinking to back the decisions that matter." },
      { title: "Process Optimization", desc: "We find what's slowing you down and fix it, so work gets done faster and for less." },
      { title: "IT Consulting", desc: "The right tech for where you are now and where you're headed. No more, no less." },
      { title: "Digital Transformation", desc: "Move old systems and habits into something faster and built for today." },
    ],
  },
  Outsourcing: {
    icon: RefreshCw,
    id: "outsourcing",
    tagline: "Operations & people",
    desc: "Dependable, cost-effective support for the everyday operations, so your team can focus on the work that matters.",
    offerings: [
      { title: "Payroll Management", desc: "Salaries, payslips and statutory filings, done accurately and on time." },
      { title: "HR Outsourcing", desc: "Onboarding, records and everything in between, handled by a team that knows your people." },
      { title: "Back Office Support", desc: "The data, paperwork and admin that keep things running, handled quietly in the background." },
      { title: "Recruitment Process Outsourcing", desc: "We find, screen and place the right people, faster and for less per hire." },
    ],
  },
  Marketing: {
    icon: Megaphone,
    id: "marketing",
    tagline: "Brand & growth",
    desc: "Creative work backed by data, to get your brand noticed and turn that attention into customers.",
    offerings: [
      { title: "Digital Marketing", desc: "Campaigns across search, social and display, built to actually bring in business." },
      { title: "Social Media Marketing", desc: "Regular content and community management that builds an audience that cares." },
      { title: "SEO & SEM", desc: "Show up when people are searching, with organic and paid search working together." },
      { title: "Branding Solutions", desc: "Logos, messaging and design that make your brand easy to recognise and remember." },
    ],
  },
  Technology: {
    icon: Code2,
    id: "technology",
    tagline: "Software & cloud",
    desc: "Software, websites and cloud setups built to grow with you, and looked after long after launch.",
    offerings: [
      { title: "Software Development", desc: "Custom apps built around how you actually work, ready to grow." },
      { title: "Web Development", desc: "Fast, secure websites and portals that are easy and pleasant to use." },
      { title: "Cloud Solutions", desc: "Migration, infrastructure and DevOps on AWS, Azure or GCP." },
      { title: "Application Support", desc: "Monitoring, maintenance and updates that keep everything running smoothly." },
    ],
  },
};

const NUMS = ["01", "02", "03", "04"];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* ---------- hero header ---------- */}
      <section className={styles.hero}>
        <div className="container-x">
          <Reveal as="p" className={styles.eyebrow}>
            Our services
          </Reveal>
          <Reveal as="h1" delay={0.05} className={styles.heading}>
            Everything you need to <em>scale.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.lead}>
            Consulting, outsourcing, marketing and technology, all in one place.
            One team to call for whatever your business needs to move faster and
            grow.
          </Reveal>

          {/* quick jump nav across the service ids */}
          <Reveal as="nav" delay={0.15} className={styles.jump}>
            {services.map((s) => {
              const meta = META[s.category];
              return (
                <a key={meta.id} href={`#${meta.id}`}>
                  {s.category}
                </a>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ---------- category blocks ---------- */}
      <section className={`${styles.cats} ${styles.hairline}`}>
        <div className="container-x">
          <Stagger className={styles.catList} stagger={0.1}>
            {services.map((s, i) => {
              const meta = META[s.category];
              const Icon = meta.icon;
              return (
                <StaggerItem key={s.category} className={styles.cell}>
                  <article id={meta.id} className={styles.cat}>
                    <span className={styles.num}>{NUMS[i]}</span>

                    {/* header: icon + titles */}
                    <header className={styles.catHead}>
                      <span className={styles.ic}>
                        <Icon size={24} strokeWidth={1.9} />
                      </span>
                      <div>
                        <span className={styles.catTag}>{meta.tagline}</span>
                        <h2 className={styles.catTitle}>{s.title}</h2>
                      </div>
                    </header>

                    <p className={styles.catDesc}>{meta.desc}</p>

                    {/* offerings — one rich cell per item */}
                    <div className={styles.offers}>
                      {meta.offerings.map((o) => (
                        <div key={o.title} className={styles.offer}>
                          <span className={styles.offerIc}>
                            <Check size={14} strokeWidth={2.4} />
                          </span>
                          <div>
                            <h3 className={styles.offerTitle}>{o.title}</h3>
                            <p className={styles.offerDesc}>{o.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a className={styles.catLink} href="/contact">
                      Talk to us about {s.category.toLowerCase()}
                      <ArrowRight size={16} strokeWidth={2} />
                    </a>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ---------- final cta ---------- */}
      <section className={styles.cta}>
        <div className="container-x">
          <Reveal className={styles.ctaPanel}>
            <p className={styles.dia}>◆</p>
            <h2>
              Ready to <em>get started?</em>
            </h2>
            <p>
              Tell us where you want to go, and we&apos;ll bring the people, the
              plan and the tech to get you there.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.btnGold} href="/contact">
                Get in touch
              </a>
              <a className={styles.btnOut} href="/why-us">
                Why choose us →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
