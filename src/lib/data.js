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
    "Empowering businesses through innovative consulting, outsourcing, marketing, and technology solutions.",
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
  jobTitle: "Founder & CEO",
  email: "sainathreddy@sreeinfotechnologies.com",
  image: "/Sainathreddy.png",
  bio:
    "Medimi Sainath Reddy is the Founder and CEO of Sree Info Technologies Pvt Ltd. He leads the company's vision of helping businesses consult, outsource and grow — bringing consulting, outsourcing, technology and marketing together under one accountable team, driven by values and focused on measurable results.",
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
    desc: "Strategic solutions to solve complex business challenges.",
  },
  {
    icon: "RefreshCw",
    title: "Outsourcing",
    desc: "Scalable, reliable and cost-effective outsourcing services.",
  },
  {
    icon: "Megaphone",
    title: "Marketing",
    desc: "Creative strategies that build brands and drive growth.",
  },
];

// Core values
export const values = [
  { icon: "Target", title: "Client Focused", sub: "Customer success is our priority." },
  { icon: "TrendingUp", title: "Result Driven", sub: "We deliver measurable outcomes." },
  { icon: "Lightbulb", title: "Innovation Led", sub: "Continuous improvement and innovation." },
  { icon: "Handshake", title: "Integrity First", sub: "Trust, transparency, and accountability." },
];

export const visionMission = {
  vision:
    "To become a trusted technology and business partner enabling organizations to achieve sustainable growth.",
  mission:
    "Deliver high-quality services, innovative solutions, and exceptional customer experiences that drive business success.",
  about:
    "Sree Info Technologies Pvt Ltd is a fast-growing consulting and outsourcing company helping businesses improve efficiency, reduce costs, and accelerate growth.",
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
    items: ["Business Strategy", "Process Optimization", "IT Consulting", "Digital Transformation"],
  },
  {
    icon: "RefreshCw",
    category: "Outsourcing",
    title: "Outsourcing Services",
    items: ["Payroll Management", "HR Outsourcing", "Back Office Support", "Recruitment Process Outsourcing"],
  },
  {
    icon: "Megaphone",
    category: "Marketing",
    title: "Marketing Services",
    items: ["Digital Marketing", "Social Media Marketing", "SEO & SEM", "Branding Solutions"],
  },
  {
    icon: "Code2",
    category: "Technology",
    title: "Technology Services",
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
