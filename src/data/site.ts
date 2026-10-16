/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every piece of text on the site, your contact details and the
 *  SEO settings live here. Change the values, save, done.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // Your public name and brand. The brand shows in the navbar as "first" + accent "second".
  name: "Your Name",
  brand: { first: "YourName", second: ".dev" },
  role: "Full-Stack Developer",
  location: "Enugu, Nigeria",
  availability: "Available for projects",

  // Your live domain (no trailing slash). Also set NEXT_PUBLIC_SITE_URL on Vercel/Hostinger.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",

  // SEO
  title: "Your Name — Full-Stack Web Developer (Next.js, React, Node.js)",
  description:
    "Full-stack web developer in Nigeria building fast, SEO-friendly websites and web apps with Next.js, React, Node.js, Express and MongoDB. Deployed on Vercel and Hostinger.",
  keywords: [
    "full-stack developer Nigeria",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "web developer Enugu",
    "freelance web developer",
    "Vercel",
    "Hostinger",
  ],

  // Contact
  email: "hello@your-domain.com",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000", // digits only, with country code
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    x: "https://x.com/your-username",
    instagram: "https://www.instagram.com/your-username",
  },

  // Drop your CV at /public/resume.pdf
  resume: "/resume.pdf",

  copyrightYear: 2026,
};

export const brandName = `${site.brand.first}${site.brand.second}`;

/* ── Pages ──────────────────────────────────────────────
 * The site is one route, but shows one "page" at a time. Each page lists the
 * section ids it contains; a link to any of those ids (e.g. "#process") opens
 * that page. The first id is the page's own link in the navbar.
 * To move a section to another page, also move its component in app/page.tsx.
 */
export const pages = [
  { id: "home", label: "Home", sections: ["home", "work", "showcase"] },
  { id: "services", label: "Services", sections: ["services", "process"] },
  { id: "about", label: "About", sections: ["about", "tools-and-skills"] },
  { id: "projects", label: "Projects", sections: ["projects"] }, // project cards are added below
  { id: "contact", label: "Contact", sections: ["contact"] },
];

export const nav = pages.map((p) => ({ href: `#${p.id}`, label: p.label }));

/* ── Skills / stack ─────────────────────────────────────
 * logo: file inside /public/tech/
 */
export type Skill = {
  name: string;
  logo: string;
  group: "Frontend" | "Language" | "Framework" | "Styling" | "Backend" | "Database" | "Deployment" | "Tooling";
};

export const skills: Skill[] = [
  { name: "HTML", logo: "html5", group: "Frontend" },
  { name: "CSS", logo: "css3", group: "Styling" },
  { name: "JavaScript", logo: "javascript", group: "Language" },
  { name: "TypeScript", logo: "typescript", group: "Language" },
  { name: "React.js", logo: "react", group: "Frontend" },
  { name: "Next.js", logo: "nextjs", group: "Framework" },
  { name: "Tailwind CSS", logo: "tailwindcss", group: "Styling" },
  { name: "Node.js", logo: "nodejs", group: "Backend" },
  { name: "Express.js", logo: "express", group: "Backend" },
  { name: "MongoDB", logo: "mongodb", group: "Database" },
  { name: "Git & GitHub", logo: "git", group: "Tooling" },
  { name: "Vercel", logo: "vercel", group: "Deployment" },
  { name: "Hostinger", logo: "hostinger", group: "Deployment" },
];

/* ── Hero ───────────────────────────────────────────── */
export const hero = {
  left: { lead: "Code Your", accent: "VISION" },
  right: { lead: "Ship Your", accent: "PRODUCT" },
  headline: "WHERE CODE MEETS EXPERIENCE",
  intro: "Websites and full-stack web apps that look sharp, load fast and rank well on Google.",
  focus: ["Frontend Development", "Backend & APIs", "Full-Stack Products"],
  // The eight logos floating around the portrait (names from `skills` above)
  floating: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript", "Express.js"],
  featured: {
    label: "Featured Work",
    title: "Full-Stack Web Apps",
    text: "Websites, Dashboards & APIs",
    cta: "View Case Study",
    href: "#projects",
  },
};

/* ── Services ───────────────────────────────────────────
 * icon: one of the names in components/icons.tsx
 */
export const services = {
  eyebrow: "My Services",
  heading: "Building Ideas Into Products",
  groups: [
    {
      title: "Frontend Development",
      items: [
        { icon: "layout", name: "Responsive Websites", text: "Pixel-accurate pages that work on every screen, built with HTML, CSS and Tailwind." },
        { icon: "react", name: "React Interfaces", text: "Reusable component libraries, interactive UIs and single-page apps in React." },
        { icon: "rocket", name: "Landing Pages", text: "Fast, conversion-focused pages for products, events and campaigns." },
        { icon: "dashboard", name: "Admin Dashboards", text: "Data-rich dashboards with charts, tables, filters and role-based views." },
        { icon: "smartphone", name: "Progressive Web Apps", text: "Installable, offline-ready web apps that feel native on any phone." },
      ],
    },
    {
      title: "Backend & Full-Stack",
      items: [
        { icon: "server", name: "REST APIs", text: "Node.js and Express APIs with authentication, validation and clear docs." },
        { icon: "database", name: "Database Design", text: "MongoDB schemas, indexing and data models that grow with the product." },
        { icon: "layers", name: "Next.js Web Apps", text: "Server-rendered apps with routing, auth and admin panels in one codebase." },
        { icon: "plug", name: "Payments & Integrations", text: "Payments, email, SMS and third-party services wired in securely." },
        { icon: "cloud", name: "Deployment & SEO", text: "Vercel or Hostinger deploys with domains, SSL, CI/CD and Core Web Vitals tuning." },
      ],
    },
  ],
};

/* ── About ──────────────────────────────────────────── */
export const about = {
  eyebrow: "About Me",
  heading: "Turning ideas into fast, reliable web products.",
  badge: "Full-Stack Developer",
  lead: "a Full-Stack Developer passionate about turning ideas into fast, reliable web products. I work across the whole stack, from the interface a visitor sees to the API and database behind it.",
  paragraphs: [
    "From landing pages and dashboards to APIs and full web apps, I build with the goal of making every screen fast, accessible and easy to use, and every line of code easy to maintain.",
    "My philosophy centers on clarity, performance and reliability. Great software should not only look good but also solve real problems and keep working long after launch. I don't just write code, I ship products people use.",
  ],
  stats: [
    { icon: "briefcase", value: "20+", label: "Projects Shipped" },
    { icon: "users", value: "15+", label: "Happy Clients" },
    { icon: "calendar", value: "3+", label: "Years of Experience" },
    { icon: "award", value: "100%", label: "Commitment to Quality" },
  ],
};

/* ── Process ────────────────────────────────────────── */
export const workflow = {
  eyebrow: "How I Work",
  heading: "My Development Process",
  intro: "A structured, collaborative workflow so you always know what is being built, why, and when it ships.",
  steps: [
    { icon: "search", title: "Discover", text: "Understanding the business, the users and the core problem the product must solve." },
    { icon: "map", title: "Plan & Architect", text: "Defining pages, data models, API routes and the right stack for the job." },
    { icon: "code", title: "Build", text: "Writing clean, typed, component-driven code with regular demos along the way." },
    { icon: "gauge", title: "Test & Optimise", text: "Checking every screen size, fixing bugs, tuning performance, SEO and accessibility." },
    { icon: "rocket", title: "Deploy & Support", text: "Launching on Vercel or Hostinger, connecting the domain and keeping it running." },
  ],
};

/* ── Showcase strip ─────────────────────────────────────
 * Files: /public/images/showcase/1.(webp|png|jpg) … 7
 */
export const showcase = {
  heading: "Bring Your Ideas To Life With Clean Code",
  badge: "LEARN ABOUT MY STORY • SEE HOW I BUILD • ",
  clients: ["AO", "CE", "TK"],
  cta: { label: "View My Work", href: "#projects" },
};

/* ── Tools & skills marquee ─────────────────────────── */
export const toolsSection = {
  eyebrow: "Expertise & Stack",
  heading: "Tools & Technical Skills",
  intro: "The languages, frameworks and platforms I rely on to design, build and ship production web apps.",
};

/* ── Projects ───────────────────────────────────────────
 * image: file name inside /public/images/projects/ (any of .webp .png .jpg)
 * live / repo: leave "" to hide the link
 */
export const projectsSection = {
  eyebrow: "Curated Builds • Shipped End to End",
  heading: "Explore My Project Library",
  intro: "A collection of my best work: real products for healthcare, education, business and nonprofits.",
  cta: { label: "Access Full Library", href: site.socials.github },
};

export const projects = [
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    type: "Web App",
    text: "Patient records, appointments, billing and staff roles for healthcare facilities in one secure dashboard.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: "hospital",
    live: "",
    repo: "",
  },
  {
    slug: "school-fees-platform",
    title: "School Fees Payment Platform",
    type: "Platform",
    text: "Centralised fee collection for multiple schools with reserved account numbers, USSD and automatic receipts.",
    stack: ["Node.js", "Express", "MongoDB", "React"],
    image: "school-fees",
    live: "",
    repo: "",
  },
  {
    slug: "assembly-companion-pwa",
    title: "Assembly Companion PWA",
    type: "PWA",
    text: "An installable progressive web app giving delegates schedules, documents and updates for a continental gathering.",
    stack: ["Next.js", "PWA", "Tailwind"],
    image: "assembly-pwa",
    live: "",
    repo: "",
  },
  {
    slug: "company-website",
    title: "Tech Company Website",
    type: "Website",
    text: "Corporate site with a CMS-backed blog, contact pipeline and automated CI/CD to a VPS.",
    stack: ["Next.js", "MongoDB", "Hostinger VPS"],
    image: "company-site",
    live: "",
    repo: "",
  },
  {
    slug: "communication-platform",
    title: "Institutional Communication Platform",
    type: "Web App",
    text: "Announcements with mandatory read receipts so management knows exactly who has seen each memo.",
    stack: ["React", "Express", "MongoDB"],
    image: "communication",
    live: "",
    repo: "",
  },
  {
    slug: "nonprofit-website",
    title: "Nonprofit Website Redesign",
    type: "Website",
    text: "A multi-page redesign for a charity, focused on clear storytelling, donations and volunteer sign-ups.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "nonprofit",
    live: "",
    repo: "",
  },
];

/* ── Contact ────────────────────────────────────────── */
export const contact = {
  intro:
    "Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together.",
  formIntro: "Have a question, a project in mind, or need help choosing the right stack? Feel free to reach out.",
  asideTitle: "Hi! I'm always here to help you.",
};

/* ── Footer ─────────────────────────────────────────── */
export const footer = {
  blurb:
    "Full-stack developer building fast, SEO-friendly websites and web apps. From landing pages and dashboards to APIs and complete products, I turn ideas into reliable, production-ready software.",
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#process", label: "My Process" },
    { href: "#work", label: "Featured Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ],
  services: ["Responsive Websites", "React Interfaces", "REST APIs", "Next.js Web Apps", "Database Design", "Deployment & SEO"],
  stack: ["React.js", "Next.js", "Node.js & Express", "MongoDB", "Tailwind CSS"],
  features: [
    { icon: "code", title: "Clean, Typed Code", text: "Readable, documented TypeScript that is easy to maintain and extend." },
    { icon: "zap", title: "Fast Turnaround", text: "Structured timeline and clear milestones for prompt delivery." },
    { icon: "shield", title: "Production Ready", text: "Tested, secured and deployed with SSL, analytics and backups." },
  ],
  availability:
    "Currently accepting new freelance builds, long-term contracts and full-time roles. Average project kickoff is 1-3 business days after the brief is reviewed.",
  inquiry:
    "Have a custom project or launch date coming up? Get in touch for a tailored quote. Every project ships with full source code and deployment handover.",
};

/* ── Page lookup (no need to edit) ──────────────────── */
// Links to a project card (#hospital-management) open the Projects page
pages.find((p) => p.id === "projects")?.sections.push(...projects.map((p) => p.slug));

/** Section id → the page that contains it */
export const sectionPage: Record<string, string> = Object.fromEntries(
  pages.flatMap((p) => p.sections.map((s) => [s, p.id])),
);
