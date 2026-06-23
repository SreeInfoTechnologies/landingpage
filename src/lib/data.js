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

// Extended profile / portfolio for the /sainath page. Kept separate from the
// lean `founder` object (used on the About page + JSON-LD) so this richer,
// resume-sourced detail lives in one place. Everything here is drawn strictly
// from Sainath's CV — nothing fabricated.
export const founderProfile = {
  // Where he is based today (career has been Bangalore-based).
  location: "Bangalore, India",
  experienceYears: "4.5+",
  // Short professional positioning line for the profile hero.
  summary:
    "Cloud engineer turned founder. 4.5+ years architecting and running Microsoft Azure infrastructure for global enterprises — now leading Sree Info Technologies as a hands-on Founder & Director.",
  // Headline numbers shown as the hero stat strip.
  stats: [
    { value: "4.5+", label: "Years in cloud" },
    { value: "Azure", label: "Core platform" },
    { value: "IaaS · PaaS", label: "Service models" },
    { value: "2", label: "Global firms" },
  ],
  // Leadership focus areas at Sree Info Technologies.
  leadership: [
    {
      icon: "Compass",
      title: "Strategy & Vision",
      desc: "Sets the direction for the company and keeps every engagement pointed at real client outcomes.",
    },
    {
      icon: "Handshake",
      title: "Client Partnerships",
      desc: "Stays close to clients, building long-term relationships founded on honest, dependable work.",
    },
    {
      icon: "Layers",
      title: "Technology & Delivery",
      desc: "Brings deep cloud and infrastructure experience to how the team designs, builds and ships.",
    },
  ],
  // Career timeline — most recent first. Faithful to the CV.
  experience: [
    {
      role: "Founder & Director",
      org: "Sree Info Technologies Pvt Ltd",
      location: "Ananthapur, Andhra Pradesh",
      period: "Present",
      current: true,
      points: [
        "Founded and leads the company across consulting, outsourcing, technology and marketing.",
        "Owns strategy and vision, nurtures client partnerships, and guides technology and delivery end to end.",
        "Keeps the work honest and close to clients, measuring success by the results they actually see.",
      ],
    },
    {
      role: "Azure Administrator",
      org: "Accenture",
      location: "Bangalore",
      period: "Apr 2025 – Present",
      points: [
        "Provisions and manages Windows and Linux virtual machines around evolving business needs.",
        "Builds VNets, storage accounts, availability sets and load-balanced endpoints; creates and upgrades AKS (Kubernetes) clusters.",
        "Establishes Site-to-Site, Point-to-Site VPN and ExpressRoute connectivity between on-premises and Azure.",
        "Runs Recovery Services Vault backups, restores and ASR; resolves Prisma alerts via NSG flow logs and NSG troubleshooting.",
      ],
    },
    {
      role: "Azure Cloud Engineer",
      org: "IBM",
      location: "Bangalore",
      period: "Aug 2021 – Dec 2024",
      points: [
        "Managed Azure VMs, VNets, NSGs and storage accounts, and administered user access.",
        "Configured Microsoft Entra ID (Azure AD) users, groups, roles and RBAC permissions.",
        "Monitored performance and availability with Azure Monitor, Log Analytics and alerts.",
        "Implemented backup and disaster recovery with Azure Backup and Azure Site Recovery, plus routine patching and incident resolution.",
      ],
    },
  ],
  // Grouped technical expertise (icon names map to lucide-react in the page).
  skills: [
    {
      icon: "Cloud",
      title: "Cloud Platform",
      items: ["Microsoft Azure", "IaaS · PaaS · SaaS", "Azure Cloud Services"],
    },
    {
      icon: "Boxes",
      title: "Compute & Containers",
      items: ["Windows & Linux VMs", "Azure Kubernetes (AKS)", "Availability Sets & Zones", "IIS Hosting"],
    },
    {
      icon: "Network",
      title: "Networking",
      items: ["VNet, Subnet & NSG", "Azure Firewall & Load Balancer", "S2S / P2S VPN", "ExpressRoute & Private Endpoints"],
    },
    {
      icon: "Database",
      title: "Storage & Data",
      items: ["Blob, File, Queue, Table", "LRS · ZRS · GRS · RA-GRS", "Azure SQL & SQL Server"],
    },
    {
      icon: "ShieldCheck",
      title: "Identity & Security",
      items: ["Microsoft Entra ID (Azure AD)", "RBAC & IAM", "Prisma & NSG Flow Logs"],
    },
    {
      icon: "DatabaseBackup",
      title: "Backup & DR",
      items: ["Azure Backup", "Recovery Services Vault", "Azure Site Recovery (ASR)"],
    },
    {
      icon: "TerminalSquare",
      title: "Automation & IaC",
      items: ["PowerShell", "Terraform", "ARM / JSON Templates", "Azure Automation"],
    },
    {
      icon: "Activity",
      title: "Monitoring & Ops",
      items: ["Azure Monitor & Log Analytics", "Azure Update Manager", "PRTG", "Cost Management & Budgets"],
    },
  ],
  tools: ["JIRA", "ServiceNow", "Azure DevOps", "PowerShell", "Terraform", "Windows Server"],
  education: {
    degree: "Bachelor's Degree (Under Graduation)",
    school: "Asian Institute of Technology, Chennai",
    year: "2021",
  },
  languages: ["English", "Telugu", "Kannada"],
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
