import { Target, Rocket, Quote } from "lucide-react";
import { visionMission, company } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section relative bg-cream dot-grid-navy">
      <div className="container-x">
        <SectionHeading
          badge="About Us"
          title="A trusted technology & business partner"
          subtitle={visionMission.about}
        />

        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.12}>
          {[
            { icon: Target, title: "Our Vision", text: visionMission.vision },
            { icon: Rocket, title: "Our Mission", text: visionMission.mission },
          ].map((c) => (
            <StaggerItem key={c.title}>
              <article className="card h-full hover:-translate-y-1.5 hover:shadow-card">
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                  <c.icon size={26} />
                </span>
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-ink/65">{c.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* slogan banner */}
        <Reveal delay={0.1} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-navy-grad p-8 text-center text-white md:p-10">
            <Quote className="mx-auto mb-3 text-gold" size={30} />
            <p className="mx-auto max-w-3xl font-script text-2xl text-gold-light sm:text-3xl">
              {company.slogan}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
