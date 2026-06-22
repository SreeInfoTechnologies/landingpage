import styles from "./Logo.module.scss";

/**
 * Brand logo — the Sree Info Technologies mark (public/sree-logo.svg) plus the
 * wordmark.
 *
 * Props:
 *  - variant: "dark" (navy wordmark, for light backgrounds) | "light" (white wordmark)
 *  - showText: render the wordmark next to the mark (default true)
 *  - size: mark height in px (default 44)
 */
export default function Logo({ variant = "dark", showText = true, size = 44 }) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/65" : "text-gold-700";
  // Preserve the SVG's 1855:1895 aspect ratio.
  const width = Math.round((size * 1855) / 1895);

  return (
    <span className={`${styles.root} inline-flex items-center gap-3`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sree-logo.svg"
        alt="Sree Info Technologies"
        width={width}
        height={size}
        className="shrink-0"
      />

      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-heading text-[1.15rem] font-extrabold tracking-tight ${wordColor}`}
          >
            Sree Info
          </span>
          <span
            className={`text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${subColor}`}
          >
            Technologies Pvt Ltd
          </span>
        </span>
      )}
    </span>
  );
}
