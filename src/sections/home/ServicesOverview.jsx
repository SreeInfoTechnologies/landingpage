import { Briefcase, RefreshCw, Megaphone, Code2 } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./home.module.scss";

const CARDS = [
  { num: "01", icon: Briefcase, title: "Consulting", href: "/services#consulting", desc: "Clear advice for the problems slowing you down.", items: ["Business Strategy", "Process Optimization", "IT Consulting", "Digital Transformation"] },
  { num: "02", icon: RefreshCw, title: "Outsourcing", href: "/services#outsourcing", desc: "Dependable teams that handle the day-to-day work.", items: ["Payroll Management", "HR Outsourcing", "Back Office Support", "Recruitment (RPO)"] },
  { num: "03", icon: Megaphone, title: "Marketing", href: "/services#marketing", desc: "Marketing that gets you noticed and brings in customers.", items: ["Digital Marketing", "Social Media Marketing", "SEO & SEM", "Branding Solutions"] },
  { num: "04", icon: Code2, title: "Technology", href: "/services#technology", desc: "Software and cloud setups built to grow with you.", items: ["Software Development", "Web Development", "Cloud Solutions", "Application Support"] },
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
            Everything your business needs, <em>in one place.</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.sub}>
            Consulting, outsourcing, marketing and tech, all handled by one team.
            So you spend less time chasing vendors and more time running your
            business.
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
