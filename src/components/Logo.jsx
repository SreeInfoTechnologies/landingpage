/**
 * Brand logo — a navy rounded badge holding a gold "S" ribbon and pixel
 * squares, inspired by the Sree Info Technologies identity.
 *
 * Props:
 *  - variant: "dark" (navy wordmark, for light backgrounds) | "light" (white wordmark)
 *  - showText: render the wordmark next to the mark (default true)
 *  - size: badge size in px (default 44)
 */
export default function Logo({ variant = "dark", showText = true, size = 44 }) {
  const wordColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/65" : "text-gold-700";

  return (
    <span className="inline-flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoGold" x1="12" y1="52" x2="52" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a87d2c" />
            <stop offset="0.5" stopColor="#d8b461" />
            <stop offset="1" stopColor="#f0d98c" />
          </linearGradient>
          <linearGradient id="logoNavy" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1f3056" />
            <stop offset="1" stopColor="#0c1426" />
          </linearGradient>
        </defs>

        {/* badge */}
        <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#logoNavy)" />

        {/* gold "S" ribbon */}
        <path
          d="M44 23 C44 15.5 33.5 13 26.5 16.8 C18.5 21 21 30 31 32 C41 34 45 41.5 37 47.5 C30.5 52.3 20.5 49.5 20.5 41.5"
          stroke="url(#logoGold)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* pixel squares */}
        <rect x="45" y="11" width="6" height="6" rx="1.4" fill="#e6c97e" />
        <rect x="52.5" y="16.5" width="4.5" height="4.5" rx="1.2" fill="#c9a24b" opacity="0.9" />
        <rect x="47" y="19.5" width="3.5" height="3.5" rx="1" fill="#ffffff" opacity="0.7" />
      </svg>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-heading text-[1.15rem] font-extrabold tracking-tight ${wordColor}`}>
            Sree Info
          </span>
          <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
            Technologies Pvt Ltd
          </span>
        </span>
      )}
    </span>
  );
}
