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
  openings: [
    { role: "Software Developers", tag: "Technology" },
    { role: "Cloud Engineers", tag: "Technology" },
    { role: "Digital Marketing Specialists", tag: "Marketing" },
    { role: "HR Professionals", tag: "Outsourcing" },
    { role: "Business Development Executives", tag: "Sales" },
  ],
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
