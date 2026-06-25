/**
 * Single source of truth for all site content.
 * Sourced from the Sree Info Technologies Pvt Ltd company profile + brand brochure.
 * Icons are referenced by string name and mapped to lucide-react in components.
 */

export const company = {
  name: "Sree Info Technologies Pvt Ltd",
  legalName: "Sree Info Technologies Private Limited",
  shortName: "Sree Info",
  tagline: "Consult. Outsource. Grow.",
  motto: "Driven by Values, Focused on Results.",
  partner: "Your Partner in Success",
  buildLine: "Let's Build the Future Together",
  location: "Ananthapur, Andhra Pradesh",
  pitch:
    "We help businesses cut costs, work smarter and grow. Consulting, outsourcing, marketing and technology, all handled by one team you can actually reach.",
  slogan: "Success and Growth Through Innovation, Integrity, and Excellence.",

  // Canonical identity / NAP — keep these consistent everywhere (used in JSON-LD + metadata).
  url: "https://sreeinfotechnologies.com",
  email: "support@sreeinfotechnologies.com",
  phone: "+91 90444 48837",
  phoneE164: "+919044448837",
  address: {
    locality: "Ananthapur",
    region: "Andhra Pradesh",
    country: "India",
    countryCode: "IN",
  },
  // TODO: fill in the company's public social profile URLs — these become
  // Organization.sameAs in JSON-LD and strongly help Google/AI link the entity.
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
  },
};

// Founder / leadership — modelled as a first-class Person entity so search engines
// and AI assistants reliably answer "who is the CEO/founder of Sree Info Technologies".
export const founder = {
  name: "Medimi Sainath Reddy",
  jobTitle: "Founder & Director",
  email: "sainathreddy@sreeinfotechnologies.com",
  image: "/Sainathreddy.png",
  bio:
    "Medimi Sainath Reddy is the Founder and Director of Sree Info Technologies Pvt Ltd. He built the company on a simple belief: businesses grow fastest when they have one dependable partner across consulting, outsourcing, technology and marketing, instead of stitching together a dozen vendors. Under his leadership the company stays close to its clients, keeps its work honest, and measures success by the results clients actually see.",
  // Warmer, human note shown beneath the bio on the about page.
  note:
    "Hands-on by nature, Sainath works alongside both the team and clients, shaping strategy, guiding delivery, and making sure every engagement leaves a business stronger than it started.",
  quote:
    "We don't measure success by the hours on an invoice. We measure it by what our clients achieve.",
  focus: ["Strategy & Vision", "Client Partnerships", "Technology & Delivery"],
  // TODO: add Sainath's public profile URLs (LinkedIn, X, etc.) → Person.sameAs.
  sameAs: [],
};

// Profile content for the /sainath page. Kept separate from the lean `founder`
// object (used on the About page + JSON-LD). This profile is deliberately
// company-focused — it presents Sainath in his role as Founder & Director of
// Sree Info Technologies, not as a personal CV.
export const founderProfile = {
  // Company headquarters — where he leads from.
  location: "Ananthapur, Andhra Pradesh",
  // Company-focused positioning line for the profile hero.
  summary:
    "Founder and Director of Sree Info Technologies. He started the company on one simple belief — that businesses grow fastest with a single, dependable partner across consulting, outsourcing, technology and marketing — and leads it hands-on every day.",
  // Headline numbers about the company he leads.
  stats: [
    { value: "4", label: "Core disciplines" },
    { value: "8+", label: "Service domains" },
    { value: "5+", label: "Industry verticals" },
    { value: "24/7", label: "Support mindset" },
  ],
  // How he leads the company, day to day.
  leadership: [
    {
      icon: "Compass",
      title: "Strategy & Vision",
      desc: "Sets the company's direction and keeps every engagement pointed at real, measurable client outcomes.",
    },
    {
      icon: "Handshake",
      title: "Client Partnerships",
      desc: "Stays close to clients, building long-term relationships founded on honest, dependable work.",
    },
    {
      icon: "Layers",
      title: "Delivery & Quality",
      desc: "Makes sure the team's work is done well and on time, and that every engagement leaves a business stronger.",
    },
  ],
};

// Multi-page navigation — each tab is its own route.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// Three headline pillars (from the brochure)
export const pillars = [
  {
    icon: "Users",
    title: "Consulting",
    desc: "Practical advice that helps you solve the problems holding you back.",
  },
  {
    icon: "RefreshCw",
    title: "Outsourcing",
    desc: "Dependable teams that take work off your plate as you grow.",
  },
  {
    icon: "Megaphone",
    title: "Marketing",
    desc: "Marketing that gets your brand noticed and brings in customers.",
  },
];

// Core values
export const values = [
  { icon: "Target", title: "Client Focused", sub: "Your success comes first." },
  { icon: "TrendingUp", title: "Result Driven", sub: "We're here to get results, not bill hours." },
  { icon: "Lightbulb", title: "Innovation Led", sub: "Always looking for a better way." },
  { icon: "Handshake", title: "Integrity First", sub: "Honest, open and accountable." },
];

export const visionMission = {
  vision:
    "To be the partner businesses trust to help them grow, and keep growing.",
  mission:
    "To do great work, solve the right problems, and treat every client like a long-term partner.",
  about:
    "Sree Info Technologies is a growing consulting and outsourcing company. We help businesses work more efficiently, spend less, and grow faster.",
};

// Marquee strip
export const specializations = [
  "Business Consulting",
  "IT Consulting",
  "Business Process Outsourcing",
  "Payroll Management",
  "Digital Marketing",
  "Software Development",
  "Cloud Solutions",
  "Recruitment & Staffing",
];

// Service categories — used for the filterable grid
export const services = [
  {
    icon: "Briefcase",
    category: "Consulting",
    title: "Consulting Services",
    desc: "Business and IT consulting that turns tricky problems into a clear plan you can act on.",
    items: ["Business Strategy", "Process Optimization", "IT Consulting", "Digital Transformation"],
  },
  {
    icon: "RefreshCw",
    category: "Outsourcing",
    title: "Outsourcing Services",
    desc: "Reliable back-office and outsourcing support, run for you from start to finish.",
    items: ["Payroll Management", "HR Outsourcing", "Back Office Support", "Recruitment Process Outsourcing"],
  },
  {
    icon: "Megaphone",
    category: "Marketing",
    title: "Marketing Services",
    desc: "Digital marketing and branding that get your business seen and bring in real customers.",
    items: ["Digital Marketing", "Social Media Marketing", "SEO & SEM", "Branding Solutions"],
  },
  {
    icon: "Code2",
    category: "Technology",
    title: "Technology Services",
    desc: "Custom software, websites and cloud setups built to grow right alongside you.",
    items: ["Software Development", "Web Development", "Cloud Solutions", "Application Support"],
  },
];

// Quick service highlights (the icon row in the brochure)
export const highlights = [
  { icon: "MonitorCog", label: "IT Consulting" },
  { icon: "Code2", label: "Software Development" },
  { icon: "Cloud", label: "Cloud Solutions" },
  { icon: "LineChart", label: "Digital Marketing" },
  { icon: "Users", label: "Business Outsourcing" },
];

// Why Choose Us
export const features = [
  "Client Focused Approach",
  "Result Driven Execution",
  "Innovation Led Solutions",
  "Integrity First Culture",
  "Experienced Team",
  "Cost Effective Services",
  "Scalable Business Solutions",
  "Timely Delivery",
];

export const payroll = {
  solutions: [
    "Employee Salary Processing",
    "Tax Compliance",
    "Attendance Integration",
    "Payslip Generation",
    "Statutory Compliance",
    "Payroll Reporting",
  ],
  benefits: [
    "Reduced Administrative Burden",
    "Improved Accuracy",
    "Enhanced Compliance",
    "Cost Savings",
  ],
};

export const marketing = {
  outcomes: [
    "Increase Brand Awareness",
    "Generate Quality Leads",
    "Improve Customer Engagement",
    "Enhance Online Presence",
    "Boost Revenue Growth",
  ],
  services: [
    "Social Media Management",
    "Content Marketing",
    "SEO Optimization",
    "Performance Marketing",
    "Brand Strategy",
  ],
};

export const careers = {
  perks: [
    "Professional Growth",
    "Learning Opportunities",
    "Positive Work Culture",
    "Competitive Benefits",
  ],
  // No live openings right now — the Careers page shows a graceful "no roles
  // open" state whenever this is empty. To advertise a role, just add it back,
  // e.g. { role: "Cloud Engineers", tag: "Technology" }, and the list renders
  // itself again automatically.
  openings: [],
  // The disciplines we typically grow our team across — shown on the Careers
  // page when there are no live openings, so visitors still see where they fit.
  areas: ["Technology", "Marketing", "Outsourcing", "Consulting"],
};

export const stats = [
  { value: 8, suffix: "+", label: "Service Domains" },
  { value: 100, suffix: "%", label: "Client Focused" },
  { value: 5, suffix: "+", label: "Industry Verticals" },
  { value: 24, suffix: "/7", label: "Support Mindset" },
];

export const contact = {
  items: [
    { icon: "MapPin", label: "Ananthapur, Andhra Pradesh", href: null },
    { icon: "Phone", label: "+91 90444 48837", href: "tel:+919044448837" },
    {
      icon: "Mail",
      label: "support@sreeinfotechnologies.com",
      href: "mailto:support@sreeinfotechnologies.com",
    },
    {
      icon: "Globe",
      label: "sreeinfotechnologies.com",
      href: "https://sreeinfotechnologies.com",
    },
  ],
};

// Frequently asked questions — every answer is true to the facts above (no
// invented dates, headcounts or claims). Rendered as a visible accordion on the
// home page AND emitted as FAQPage JSON-LD. Written as self-contained answers to
// real brand/entity questions ("who founded…", "where is…", "what does…") so
// AI answer engines (ChatGPT, Gemini, Perplexity, Copilot) and voice assistants
// can extract and cite them directly.
export const faqs = [
  {
    question: "What does Sree Info Technologies do?",
    answer:
      "Sree Info Technologies Pvt Ltd is a consulting and outsourcing company based in Ananthapur, Andhra Pradesh, India. It brings consulting, outsourcing, marketing and technology together under one team, helping businesses cut costs, work more efficiently and grow.",
  },
  {
    question: "Who is the founder of Sree Info Technologies?",
    answer:
      "Sree Info Technologies was founded by Medimi Sainath Reddy, who serves as its Founder & Director. He leads the company across consulting, outsourcing, technology and marketing, staying hands-on with both the team and clients.",
  },
  {
    question: "Where is Sree Info Technologies located?",
    answer:
      "Sree Info Technologies is based in Ananthapur, Andhra Pradesh, India, and works with clients across the country.",
  },
  {
    question: "What services does Sree Info Technologies offer?",
    answer:
      "Four areas: Consulting (business and IT strategy, process optimization, digital transformation), Outsourcing (payroll management, HR outsourcing, back-office support, recruitment process outsourcing), Marketing (digital marketing, social media, SEO and SEM, branding) and Technology (software development, web development, cloud solutions, application support).",
  },
  {
    question: "Does Sree Info Technologies provide payroll and HR outsourcing?",
    answer:
      "Yes. Payroll management covers salary processing, tax and statutory compliance, attendance integration, payslip generation and payroll reporting, alongside HR outsourcing, back-office support and recruitment process outsourcing.",
  },
  {
    question: "Can Sree Info Technologies build custom software and websites?",
    answer:
      "Yes. The technology team builds custom software, websites and cloud setups, and provides ongoing application support, designed to scale as your business grows.",
  },
  {
    question: "What makes Sree Info Technologies different?",
    answer:
      "It combines consulting, outsourcing, marketing and technology in a single team, so you have one dependable partner instead of many separate vendors. The company is client-focused, results-driven and integrity-first, and measures success by what clients achieve rather than hours billed.",
  },
  {
    question: "How can I contact Sree Info Technologies?",
    answer:
      "Call +91 90444 48837, email support@sreeinfotechnologies.com, or use the contact form at sreeinfotechnologies.com/contact. The company is based in Ananthapur, Andhra Pradesh, India.",
  },
];
