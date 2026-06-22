# Sree Info Technologies Pvt Ltd — Website (Next.js)

A modern, animated, fully responsive corporate website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Brand identity (navy + gold, the "S" logo, messaging) is based on the official company brochure.

> **Consult. Outsource. Grow.** — *Driven by Values, Focused on Results.*

## 🧰 Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 14 (App Router, JavaScript/JSX) |
| Styling        | Tailwind CSS 3 (custom navy/gold theme) |
| Animation      | Framer Motion (scroll reveals, stagger, counters, animated nav & menu) |
| Icons          | lucide-react                            |
| Fonts          | Poppins (headings), Inter (body), Dancing Script (accent) via `next/font` |

## 🚀 Getting started

```bash
cd sree-info-next
npm install
npm run dev        # http://localhost:3000
```

Build for production (static export → `./out`):

```bash
npm run build      # outputs a static site in ./out
```

## 🌐 Deploy to GitHub Pages

This site is configured as a **static export** (`output: "export"` in
[`next.config.mjs`](next.config.mjs)) and deploys automatically to GitHub Pages
via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:**

1. **Enable Pages**: Repo → **Settings → Pages → Build and deployment → Source =
   _GitHub Actions_**.
2. **Push to `main`** — the workflow builds the static export and publishes it.
3. **Custom domain**: the [`public/CNAME`](public/CNAME) file pins the domain to
   `sreeinfotechnologies.com`. After the first successful deploy, confirm it
   under **Settings → Pages → Custom domain** and tick **Enforce HTTPS**.
4. **DNS** (at your domain registrar) — point the apex domain at GitHub:

   | Type  | Host / Name | Value                          |
   | ----- | ----------- | ------------------------------ |
   | A     | `@`         | `185.199.108.153`              |
   | A     | `@`         | `185.199.109.153`              |
   | A     | `@`         | `185.199.110.153`              |
   | A     | `@`         | `185.199.111.153`              |
   | AAAA  | `@`         | `2606:50c0:8000::153`          |
   | AAAA  | `@`         | `2606:50c0:8001::153`          |
   | AAAA  | `@`         | `2606:50c0:8002::153`          |
   | AAAA  | `@`         | `2606:50c0:8003::153`          |
   | CNAME | `www`       | `sreeinfotechnologies.github.io.` |

   DNS can take up to ~24h to propagate. Once `sreeinfotechnologies.com`
   resolves to GitHub, enable **Enforce HTTPS**.

## 📁 Folder structure

```
sree-info-next/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind layers + brand utilities
│   │   ├── layout.js        # fonts, metadata, <html>/<body>
│   │   └── page.js          # composes all sections
│   ├── components/
│   │   ├── ui/              # Reveal, SectionHeading, Counter (reusable primitives)
│   │   ├── Logo.jsx         # SVG brand mark + wordmark
│   │   ├── Navbar.jsx       # sticky, scroll-aware, animated mobile menu
│   │   ├── Hero.jsx         # animated headline + glass panel + stats
│   │   ├── Marquee.jsx      # scrolling specializations strip
│   │   ├── Values.jsx       # 4 core values
│   │   ├── About.jsx        # vision / mission / slogan
│   │   ├── Services.jsx     # filterable, animated services grid
│   │   ├── WhyChooseUs.jsx  # 8 key features
│   │   ├── Payroll.jsx      # payroll solutions + benefits
│   │   ├── Marketing.jsx    # marketing outcomes + services
│   │   ├── Careers.jsx      # perks + current openings
│   │   ├── Contact.jsx      # validated contact form + info
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   └── lib/
│       ├── data.js          # ALL content (edit here to change copy)
│       └── icons.js         # string → lucide icon mapping
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── jsconfig.json            # "@/*" path alias → ./src
```

## ✨ Features

- Sticky navbar that turns solid on scroll, with active-section underline and an animated mobile menu
- Hero with staggered text animation, glassmorphism pillar panel, floating badge, and count-up stats
- Infinite specializations marquee (pauses on hover)
- Filterable services grid with layout animation (Consulting / Outsourcing / Marketing / Technology)
- Scroll-reveal + stagger animations throughout (`Reveal`, `Stagger` primitives)
- Validated contact form (client-side)
- Fully responsive (mobile → desktop) and respects `prefers-reduced-motion`

## ✏️ Editing content

Almost all text lives in [`src/lib/data.js`](src/lib/data.js). Update values there and every
section re-renders — no need to touch the components.

## 🔌 Wiring the contact form to a real backend

`Contact.jsx` currently simulates a successful submit. Because GitHub Pages is static hosting,
Next.js API routes are **not** available — post `values` to an external form service
(e.g. Formspree, Web3Forms, or Resend via a serverless function) inside `handleSubmit`.

---

📍 Ananthapur, Andhra Pradesh · 📧 info@sreeinfotech.com · 🌐 www.sreeinfotech.com
