import { Briefcase, RefreshCw, Megaphone, Code2 } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const CARDS = [
  { num: "01", icon: Briefcase, title: "Consulting", href: "/services#consulting", desc: "Strategic solutions to complex business challenges.", items: ["Business Strategy", "Process Optimization", "IT Consulting", "Digital Transformation"] },
  { num: "02", icon: RefreshCw, title: "Outsourcing", href: "/services#outsourcing", desc: "Scalable, reliable and cost-effective operations.", items: ["Payroll Management", "HR Outsourcing", "Back Office Support", "Recruitment (RPO)"] },
  { num: "03", icon: Megaphone, title: "Marketing", href: "/services#marketing", desc: "Creative strategies that build brands and drive growth.", items: ["Digital Marketing", "Social Media Marketing", "SEO & SEM", "Branding Solutions"] },
  { num: "04", icon: Code2, title: "Technology", href: "/services#technology", desc: "Software and cloud platforms built to scale with you.", items: ["Software Development", "Web Development", "Cloud Solutions", "Application Support"] },
];

export default function ServicesOverview() {
  return (
    <section className={styles.serv}>
      <div className="container-x">
        <div className={styles.shead}>
          <Reveal as="p" className={styles.eyebrow}>
            What we do
          </Reveal>
          <Reveal as="h2" delay={0.05} className={styles.heading}>
            Everything your business needs, <em>under one roof.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            Four disciplines, one accountable partner — explore the full range on
            our services page.
          </Reveal>
        </div>

        <Stagger className={styles.sgrid} stagger={0.08}>
          {CARDS.map((c) => (
            <StaggerItem key={c.title} className={styles.cell}>
              <a className={styles.scard} href={c.href}>
                <span className={styles.num}>{c.num}</span>
                <div className={styles.stop}>
                  <span className={styles.ic}>
                    <c.icon size={22} strokeWidth={1.9} />
                  </span>
                  <h3>{c.title}</h3>
                </div>
                <p className={styles.sdesc}>{c.desc}</p>
                <div className={styles.sitems}>
                  {c.items.map((it) => (
                    <span key={it}>
                      <i>◆</i> {it}
                    </span>
                  ))}
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className={styles.servFoot}>
          <a className={styles.btnOut} href="/services">
            View all services →
          </a>
        </div>
      </div>
    </section>
  );
}
