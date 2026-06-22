import Reveal from "./Reveal";

/** Centered section header: small badge + title + subtitle. */
export default function SectionHeading({ badge, title, subtitle, light = false }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {badge && (
        <Reveal>
          <span className="badge">{badge}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-ink/65"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
