import { values } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { Stagger, StaggerItem } from "./ui/Reveal";

/** The four brand values, shown as a compact strip of cards. */
export default function Values() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {values.map((v) => {
            const Icon = getIcon(v.icon);
            return (
              <StaggerItem key={v.title}>
                <article className="group h-full rounded-2xl border border-black/5 bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white hover:shadow-card">
                  <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold-grad text-navy transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </span>
                  <h3 className="text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{v.sub}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
