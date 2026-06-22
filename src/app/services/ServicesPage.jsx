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
    desc: "Strategic solutions to your most complex business challenges — from high-level strategy to hands-on transformation.",
    offerings: [
      { title: "Business Strategy", desc: "Roadmaps, market analysis and decision frameworks that align every move with your goals." },
      { title: "Process Optimization", desc: "Streamline workflows and remove bottlenecks to cut cost and lift productivity." },
      { title: "IT Consulting", desc: "Right-size your technology stack and architecture for today and what comes next." },
      { title: "Digital Transformation", desc: "Modernise legacy systems and ways of working into agile, digital-first operations." },
    ],
  },
  Outsourcing: {
    icon: RefreshCw,
    id: "outsourcing",
    tagline: "Operations & people",
    desc: "Scalable, reliable and cost-effective operations, so your team can stay focused on the work that matters most.",
    offerings: [
      { title: "Payroll Management", desc: "Accurate, compliant salary processing, payslips and statutory filings handled end to end." },
      { title: "HR Outsourcing", desc: "Onboarding, records and the full employee lifecycle managed by a dedicated team." },
      { title: "Back Office Support", desc: "Data, documentation and admin operations run reliably behind the scenes." },
      { title: "Recruitment Process Outsourcing", desc: "Source, screen and place the right talent faster, at a lower cost per hire." },
    ],
  },
  Marketing: {
    icon: Megaphone,
    id: "marketing",
    tagline: "Brand & growth",
    desc: "Creative, data-driven strategies that build memorable brands and turn attention into measurable growth.",
    offerings: [
      { title: "Digital Marketing", desc: "Full-funnel campaigns across search, social and display, built to convert." },
      { title: "Social Media Marketing", desc: "Always-on content and community management that grows an engaged audience." },
      { title: "SEO & SEM", desc: "Rank higher and capture intent with organic and paid search working together." },
      { title: "Branding Solutions", desc: "Identity, messaging and design systems that make your brand unmistakable." },
    ],
  },
  Technology: {
    icon: Code2,
    id: "technology",
    tagline: "Software & cloud",
    desc: "Software, web and cloud platforms engineered to scale with you and supported long after launch.",
    offerings: [
      { title: "Software Development", desc: "Custom applications engineered to your workflow and built to scale." },
      { title: "Web Development", desc: "Fast, responsive and secure websites and portals with great UX." },
      { title: "Cloud Solutions", desc: "Migration, infrastructure and DevOps across AWS, Azure and GCP." },
      { title: "Application Support", desc: "Monitoring, maintenance and enhancements that keep systems running." },
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
            Consulting, outsourcing, marketing and technology under one roof — a
            single accountable partner across every discipline your business
            needs to move faster and grow with confidence.
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
              Tell us where you want to go and we&apos;ll bring the strategy,
              people and technology to get you there.
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
