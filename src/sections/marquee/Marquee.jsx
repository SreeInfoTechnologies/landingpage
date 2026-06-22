import { specializations } from "@/lib/data";
import styles from "./Marquee.module.scss";

/** Infinite scrolling strip of specializations (pauses on hover). */
export default function Marquee() {
  const items = [...specializations, ...specializations];
  return (
    <section
      aria-label="Areas of specialization"
      className={`${styles.root} overflow-hidden py-4`}
    >
      <div className="group flex">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-heading text-sm font-semibold text-white/85"
            >
              <span className="text-[0.6rem] text-gold">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
