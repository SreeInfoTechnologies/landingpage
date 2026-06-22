import { CheckCircle2 } from "lucide-react";
import { features } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section id="why" className={`${styles.root} section`}>
      <div className="container-x">
        <SectionHeading
          badge="Why Choose Us"
          title="Built around your success"
          subtitle="The principles that make us a dependable long-term partner."
        />

        <Stagger
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {features.map((f) => (
            <StaggerItem key={f}>
              <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-black/5 bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-card">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
                  size={22}
                />
                <span className="font-heading font-semibold text-navy">{f}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
