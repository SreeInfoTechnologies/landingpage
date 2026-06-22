# Sree Info Technologies — Company & Design Profile

> **Purpose of this doc:** a single reference designers can use to understand the company and design new features/screens consistently. Everything here is sourced from the live site (`src/lib/data.js`, `tailwind.config.js`, `layout.js`). Treat `data.js` as the single source of truth for copy — this doc mirrors it.

---

## 1. Company at a glance

| Field | Value |
|---|---|
| **Legal name** | Sree Info Technologies Pvt Ltd |
| **Short name** | Sree Info |
| **Tagline** | Consult. Outsource. Grow. |
| **Motto** | Driven by Values, Focused on Results. |
| **Partner line** | Your Partner in Success |
| **Build line** | Let's Build the Future Together |
| **Slogan** | Success and Growth Through Innovation, Integrity, and Excellence. |
| **Location** | Ananthapur, Andhra Pradesh, India |
| **Website** | www.sreeinfotech.com |
| **Email** | info@sreeinfotech.com |
| **Locale** | en_IN |

**Elevator pitch:** Empowering businesses through innovative consulting, outsourcing, marketing, and technology solutions.

**About:** Sree Info Technologies Pvt Ltd is a fast-growing consulting and outsourcing company helping businesses improve efficiency, reduce costs, and accelerate growth.

- **Vision —** To become a trusted technology and business partner enabling organizations to achieve sustainable growth.
- **Mission —** Deliver high-quality services, innovative solutions, and exceptional customer experiences that drive business success.

---

## 2. Brand voice & messaging hierarchy

Use this order when writing or designing any new hero, banner, or feature header:

1. **Tagline (primary hook):** "Consult. Outsource. Grow."
2. **Supporting promise:** "Your Partner in Success" / "Driven by Values, Focused on Results."
3. **Pitch sentence:** the elevator pitch above.

**Tone:** confident, premium, value-driven, trustworthy. Lean on words like *innovation, integrity, excellence, growth, partner, results*. Avoid hype/jargon.

---

## 3. Design system (tokens)

### Color palette

| Token | Hex | Use |
|---|---|---|
| `navy` (DEFAULT) | `#15233f` | Primary brand color, dark surfaces, headings on light |
| `navy-950` | `#0c1426` | Deepest background |
| `navy-900` | `#101c33` | Dark section background |
| `navy-800` | `#16243f` | Card on dark |
| `navy-700` | `#1f3056` | Gradient start (navy) |
| `navy-600` | `#2a4170` | Hover/border on dark |
| `navy-500` | `#365089` | Accent line on dark |
| `gold` (DEFAULT) | `#c9a24b` | Primary accent, CTAs, highlights |
| `gold-light` | `#e6c97e` | Gradient highlight |
| `gold-300` | `#dcbb68` | Soft accent |
| `gold-600` | `#b0862f` | Pressed/active gold |
| `gold-700` | `#8f6b24` | Eyebrow text, small labels |
| `cream` | `#f8f5ef` | Soft light section background |
| `ink` | `#1f2937` | Body text |

**Luxe hero palette** (dark gold-dust hero only): `luxe.ink #0A1020`, `luxe.ink2 #0D1424`, `luxe.paper #F1F3F8`, `luxe.muted #9AA5B9`, `luxe.gold #CBA85F`, `luxe.goldsoft #E4CF99`.

**Gradients**
- `gold-grad`: `linear-gradient(135deg,#e6c97e 0%,#c9a24b 45%,#a07d2e 100%)`
- `navy-grad`: `linear-gradient(160deg,#1f3056 0%,#15233f 55%,#0c1426 100%)`

### Typography

| Role | Font | Tailwind class |
|---|---|---|
| Headings | Poppins (500–800) | `font-heading` |
| Body | Inter (400–600) | `font-body` |
| Script accent | Dancing Script | `font-script` |
| Serif accent | Cormorant Garamond (incl. italic) | `font-cormorant` |

**Eyebrow/label style:** `font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold-700`.

### Elevation (shadows)

| Token | Value | Use |
|---|---|---|
| `shadow-soft` | `0 2px 10px rgba(21,35,63,0.07)` | subtle resting cards |
| `shadow-card` | `0 12px 34px rgba(21,35,63,0.10)` | standard cards |
| `shadow-lift` | `0 24px 60px rgba(21,35,63,0.18)` | hover/featured |
| `shadow-gold` | `0 12px 30px rgba(201,162,75,0.35)` | gold CTAs |

### Other tokens
- **Radius:** `rounded-xl2` = `1.25rem` (default card radius).
- **Buttons:** pill — `inline-flex items-center justify-center gap-2 rounded-full font-heading text-sm font-semibold px-7 py-3.5`, transition 300ms.
- **Animations:** `marquee` (30s linear infinite), `floaty` (6s ease-in-out), `shimmer` (6s linear).
- **Theme color (browser chrome):** `#15233f`.

> **Designer rule of thumb:** navy = structure/trust, gold = action/highlight, cream = breathing room. Never put gold text on gold; use `gold-700` for small text on light.

---

## 4. Page structure (current site)

Single-page scroll, sections render in this order ([page.js](../src/app/page.js)):

```
Navbar (fixed)
1. Hero          #home
2. Marquee       (specializations strip)
3. Values        (core values row)
4. About         #about
5. Services      #services  (filterable grid)
6. WhyChooseUs   #why
7. Payroll       #payroll
8. Marketing
9. Careers       #careers
10. Contact      #contact
Footer
BackToTop (floating)
```

**Nav items:** Home · About · Services · Why Us · Payroll · Careers · Contact.

---

## 5. Section-by-section content spec

Each block below is what a designer needs to lay out or extend a section. Item counts matter for grid design.

### Hero — `#home`
Headline = tagline. Surround with partner line, build line, slogan. CTA buttons (primary gold → Contact, secondary → Services). Uses the **luxe** dark palette.

### Marquee — specializations (8, scrolling)
`Business Consulting · IT Consulting · Business Process Outsourcing · Payroll Management · Digital Marketing · Software Development · Cloud Solutions · Recruitment & Staffing`

### Values — 4 cards
| Icon | Title | Subtext |
|---|---|---|
| Target | Client Focused | Customer success is our priority. |
| TrendingUp | Result Driven | We deliver measurable outcomes. |
| Lightbulb | Innovation Led | Continuous improvement and innovation. |
| Handshake | Integrity First | Trust, transparency, and accountability. |

### About — `#about`
Vision + Mission + About paragraph (see §1). Good place for the **stats** row below.

**Stats (4 counters):**
| Value | Label |
|---|---|
| 8+ | Service Domains |
| 100% | Client Focused |
| 5+ | Industry Verticals |
| 24/7 | Support Mindset |

### Three pillars (headline pillars from brochure)
| Icon | Title | Desc |
|---|---|---|
| Users | Consulting | Strategic solutions to solve complex business challenges. |
| RefreshCw | Outsourcing | Scalable, reliable and cost-effective outsourcing services. |
| Megaphone | Marketing | Creative strategies that build brands and drive growth. |

### Services — `#services` (filterable grid, 4 categories)
| Icon | Category | Title | Items |
|---|---|---|---|
| Briefcase | Consulting | Consulting Services | Business Strategy · Process Optimization · IT Consulting · Digital Transformation |
| RefreshCw | Outsourcing | Outsourcing Services | Payroll Management · HR Outsourcing · Back Office Support · Recruitment Process Outsourcing |
| Megaphone | Marketing | Marketing Services | Digital Marketing · Social Media Marketing · SEO & SEM · Branding Solutions |
| Code2 | Technology | Technology Services | Software Development · Web Development · Cloud Solutions · Application Support |

**Quick highlights (icon row, 5):** MonitorCog → IT Consulting · Code2 → Software Development · Cloud → Cloud Solutions · LineChart → Digital Marketing · Users → Business Outsourcing.

### Why Choose Us — `#why` (8 features)
Client Focused Approach · Result Driven Execution · Innovation Led Solutions · Integrity First Culture · Experienced Team · Cost Effective Services · Scalable Business Solutions · Timely Delivery.

### Payroll — `#payroll`
**Solutions (6):** Employee Salary Processing · Tax Compliance · Attendance Integration · Payslip Generation · Statutory Compliance · Payroll Reporting.
**Benefits (4):** Reduced Administrative Burden · Improved Accuracy · Enhanced Compliance · Cost Savings.

### Marketing
**Outcomes (5):** Increase Brand Awareness · Generate Quality Leads · Improve Customer Engagement · Enhance Online Presence · Boost Revenue Growth.
**Services (5):** Social Media Management · Content Marketing · SEO Optimization · Performance Marketing · Brand Strategy.

### Careers — `#careers`
**Perks (4):** Professional Growth · Learning Opportunities · Positive Work Culture · Competitive Benefits.
**Openings (5):**
| Role | Tag |
|---|---|
| Software Developers | Technology |
| Cloud Engineers | Technology |
| Digital Marketing Specialists | Marketing |
| HR Professionals | Outsourcing |
| Business Development Executives | Sales |

### Contact — `#contact` (4 items)
| Icon | Label |
|---|---|
| MapPin | Ananthapur, Andhra Pradesh |
| Phone | +91 XXXXX XXXXX *(placeholder — confirm number)* |
| Mail | info@sreeinfotech.com |
| Globe | www.sreeinfotech.com |

---

## 6. Iconography
Icons are referenced **by string name** in `data.js` and mapped to **lucide-react** in components (`src/lib/icons.js`). When adding a feature, pick a lucide icon and reference it by its name string — don't import icons inline. Names already in use: Users, RefreshCw, Megaphone, Target, TrendingUp, Lightbulb, Handshake, Briefcase, Code2, MonitorCog, Cloud, LineChart, MapPin, Phone, Mail, Globe.

---

## 7. How to add a new feature/section (for designers + devs)
1. **Add copy to `src/lib/data.js`** — keep it in the existing object shapes (title + items, or icon + label). This keeps the site driven by one source.
2. **Reuse tokens** — navy/gold/cream, `rounded-xl2`, `shadow-card`, `font-heading`/`font-body`. Don't introduce new hex values without adding them to `tailwind.config.js`.
3. **Match the section rhythm** — eyebrow label (gold-700 uppercase) → heading (navy) → supporting text → card grid.
4. **Mirror grid counts** — values=4, services=4, highlights=5, features=8, etc. Pick a count that lays out cleanly (2/3/4 columns).
5. **Reference icons by name** (lucide-react), never hard-code SVGs.

---

*Generated from the live codebase on 2026-06-22. If copy changes in `data.js`, update this doc to match.*
