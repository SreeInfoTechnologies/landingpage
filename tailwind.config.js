/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#15233f",
          950: "#0c1426",
          900: "#101c33",
          800: "#16243f",
          700: "#1f3056",
          600: "#2a4170",
          500: "#365089",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e6c97e",
          300: "#dcbb68",
          500: "#c9a24b",
          600: "#b0862f",
          700: "#8f6b24",
        },
        cream: "#f8f5ef",
        ink: "#1f2937",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(21,35,63,0.07)",
        card: "0 12px 34px rgba(21,35,63,0.10)",
        lift: "0 24px 60px rgba(21,35,63,0.18)",
        gold: "0 12px 30px rgba(201,162,75,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#e6c97e 0%,#c9a24b 45%,#a07d2e 100%)",
        "navy-grad": "linear-gradient(160deg,#1f3056 0%,#15233f 55%,#0c1426 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
