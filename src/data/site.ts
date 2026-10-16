/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every piece of text on the site, your contact details and the
 *  SEO settings live here. Change the values, save, done.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // Your public name and brand. The brand shows in the navbar as "first" + accent "second".
  name: "Olive Nnaji",
  brand: { first: "Olive", second: "_Code" },
  role: "Full-Stack Web Developer",
  location: "Nigeria",
  availability: "Available for projects",

  // Your live domain (no trailing slash). Also set NEXT_PUBLIC_SITE_URL on Vercel/Hostinger.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://olive-portfolio-psi.vercel.app").replace(/\/$/, ""),

  // Default SEO (each page below has its own title and description too)
  title: "Olive Nnaji — Full-Stack Web Developer | Olive_Code",
  description:
    "Olive Ngozika Nnaji (Ngozi) is a full-stack web developer in Nigeria: frontend and backend. React, Next.js, Node.js and MongoDB websites, dashboards and apps.",
  keywords: [
    "Olive Nnaji",
    "Olive Ngozika Nnaji",
    "Ngozika Nnaji",
    "Ngozi Nnaji",
    "Olive",
    "Ngozi",
    "Olive_Code",
    "web developer",
    "full-stack developer",
    "fullstack developer",
    "frontend developer",
    "front-end developer",
    "backend developer",
    "back-end developer",
    "web developer Nigeria",
    "full-stack developer Nigeria",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "MongoDB developer",
    "freelance web developer",
    "e-commerce developer",
  ],

  // Contact
  email: "olivennaji99@gmail.com",
  phone: "+234 904 698 4533",
  whatsapp: "2349046984533", // digits only, with country code
  // Leave a link as "" to hide it everywhere
  socials: {
    github: "https://github.com/olivennaji99",
    linkedin: "https://www.linkedin.com/in/olive-nnaji-843ba0331",
    x: "",
    instagram: "",
  },

  // Your CV (public/documents/)
  resume: "/documents/OLIVE_NNAJI_CV.pdf",

  copyrightYear: 2026,
};

export const brandName = `${site.brand.first}${site.brand.second}`;

/* ── Who you are, for search engines (structured data) ──
 * Google uses this to connect every version of your name to you.
 */
export const identity = {
  fullName: "Olive Ngozika Nnaji",
  givenName: "Olive",
  additionalName: "Ngozika",
  familyName: "Nnaji",
  nickname: "Ngozi",
  alternateNames: ["Olive Ngozika Nnaji", "Ngozika Nnaji", "Ngozi Nnaji", "Ngozi", "Olive", "Olive_Code"],
  jobTitles: ["Full-Stack Web Developer", "Web Developer", "Frontend Developer", "Backend Developer"],
  portrait: "/images/my-pictures/olive-removed background.png",
  worksFor: { name: "Verbum Networks Limited", role: "Full-Stack Web Developer (Intern)", since: "2025-08" },
  alumniOf: "Miva Open University",
  studying: "B.Sc. Software Engineering",
};

/* ── Pages ──────────────────────────────────────────────
 * Each page has its own address, title and description (good for Google).
 * sections: the ids of the blocks on that page; link to any of them with
 * to("id"), e.g. to("process") → "/services#process".
 */
export const pages = [
  {
    id: "home",
    path: "/",
    label: "Home",
    sections: ["home", "work", "showcase"],
    title: "Olive Nnaji — Full-Stack Web Developer | Olive_Code",
    description:
      "Olive Ngozika Nnaji (Ngozi) is a full-stack web developer in Nigeria: frontend and backend. React, Next.js, Node.js and MongoDB websites, dashboards and apps.",
  },
  {
    id: "services",
    path: "/services",
    label: "Services",
    sections: ["services", "process"],
    title: "Frontend & Backend Development Services | Olive Nnaji",
    description:
      "Frontend (React, Next.js, Tailwind) and backend (Node.js, Express, MongoDB, REST API) development by Olive Nnaji: websites, dashboards and e-commerce.",
  },
  {
    id: "about",
    path: "/about",
    label: "About",
    sections: ["about", "tools-and-skills"],
    title: "About Olive Ngozika Nnaji (Ngozi) | Full-Stack Developer",
    description:
      "Olive Ngozika Nnaji (Ngozi) is a full-stack web developer at Verbum Networks and a Software Engineering student, skilled in React, Next.js and Node.js.",
  },
  {
    id: "projects",
    path: "/projects",
    label: "Projects",
    sections: ["projects"], // project cards are added at the bottom of this file
    title: "Web Development Projects by Olive Nnaji | Olive_Code",
    description:
      "Projects by full-stack developer Olive Nnaji: NovaShop multi-vendor e-commerce, a hospital management system, business dashboards, websites and a WiFi portal.",
  },
  {
    id: "contact",
    path: "/contact",
    label: "Contact",
    sections: ["contact"],
    title: "Contact Olive Nnaji | Hire a Full-Stack Web Developer",
    description:
      "Hire Olive Nnaji, a full-stack web developer in Nigeria, for websites, web apps, dashboards and e-commerce. Email olivennaji99@gmail.com or send a WhatsApp.",
  },
];

export const pageById = (id: string) => pages.find((p) => p.id === id)!;

/** The address of any section: to("process") → "/services#process", to("about") → "/about". */
export function to(sectionId: string): string {
  const page = pages.find((p) => p.sections.includes(sectionId) || p.id === sectionId);
  if (!page) return `/#${sectionId}`;
  return page.id === sectionId ? page.path : `${page.path}#${sectionId}`;
}

export const nav = pages.map((p) => ({ href: p.path, label: p.label }));

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
    href: to("projects"),
  },
};

/* ── Services ───────────────────────────────────────────
 * icon: one of the names in components/icons.tsx
 */
export const services = {
  eyebrow: "Frontend · Backend · Full-Stack Services",
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
  eyebrow: "About Olive Nnaji",
  heading: "Turning ideas into fast, reliable web products.",
  badge: "Full-Stack Developer",
  lead: "a Full-Stack Web Developer who takes products from idea to production, largely self-directed. I work as both a frontend developer (React, Next.js, Tailwind CSS) and a backend developer (Node.js, Express APIs, MongoDB), and I deploy and host what I build in production.",
  paragraphs: [
    "Since August 2025 I've been a Full-Stack Web Developer (intern) at Verbum Networks Limited, where I built and maintain a multi-vendor e-commerce platform with separate admin and seller roles, seller analytics and full admin control. I'm also studying for a B.Sc. in Software Engineering at Miva Open University.",
    "I close the loop between idea and working product, debug methodically, and ask questions early instead of guessing. I read the documentation first, treat debugging as the interesting part of the job, and explain technical trade-offs, not just outcomes.",
  ],
  stats: [
    { icon: "briefcase", value: "10+", label: "Projects Built" },
    { icon: "calendar", value: "1+", label: "Year in Production" },
    { icon: "layers", value: "13", label: "Core Technologies" },
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

/* ── Showcase gallery (home page) ───────────────────────
 * Seven tiles, in order: column 1 (top, bottom), column 2 (tall), column 3,
 * column 4 (tall), column 5 (top, bottom). Tall tiles suit phone screenshots.
 * src: path inside /public without the extension. position: which part to keep when cropped.
 */
export const showcase = {
  heading: "Bring Your Ideas To Life With Clean Code",
  badge: "LEARN ABOUT MY STORY • SEE HOW I BUILD • ",
  clients: ["AO", "CE", "TK"],
  cta: { label: "View My Work", href: to("projects") },
  images: [
    { src: "images/projects/images/ecommerce-mobile", alt: "NovaShop e-commerce storefront on mobile", position: "object-top" },
    { src: "images/projects/images/hospital-management-system-screenshot", alt: "Hospital management system admin dashboard", position: "object-left-top" },
    { src: "images/projects/images/mater-christi-hero-mobile-hd", alt: "Mater Christi Centre website on mobile", position: "object-top" },
    { src: "images/projects/images/mater-christi-mobile-hd", alt: "Mater Christi Centre \"Nurturing Mind and Spirit\" section on mobile", position: "object-top" },
    { src: "images/projects/images/staff-panel-mobile-hd", alt: "Staff Panel dashboard on mobile", position: "object-top" },
    { src: "images/projects/images/staff-panel-screenshot", alt: "Staff Panel dashboard overview", position: "object-left-top" },
    { src: "images/projects/images/ecommerce-desktop", alt: "NovaShop e-commerce storefront on desktop", position: "object-left-top" },
  ],
};

/* ── Tools & skills marquee ─────────────────────────── */
export const toolsSection = {
  eyebrow: "Expertise & Stack",
  heading: "Tools & Technical Skills",
  intro: "The languages, frameworks and platforms I rely on to design, build and ship production web apps.",
};

/* ── Projects ───────────────────────────────────────────
 * image: path inside /public/images/projects/ without the extension
 * position: which part of the screenshot to keep when it is cropped
 * live / repo: leave "" to hide the link
 */
export const projectsSection = {
  eyebrow: "Projects by Olive Nnaji • Shipped End to End",
  heading: "Explore My Project Library",
  intro: "Real products for real users: a multi-vendor marketplace, healthcare and business dashboards, a church website, and a hospital WiFi portal.",
  cta: { label: "Access Full Library", href: site.socials.github },
};

export const projects: {
  slug: string;
  title: string;
  type: string;
  featured?: boolean;
  text: string;
  stack: string[];
  image: string;
  position: string;
  live: string;
  repo: string;
}[] = [
  {
    slug: "multi-vendor-ecommerce",
    title: "NovaShop — Multi-Vendor E-Commerce Platform",
    type: "Featured · E-Commerce",
    featured: true, // shown as a wide card
    text: "A production-ready marketplace with three roles. Admins approve and manage sellers, sellers run their own store with sales analytics, and customers shop, track orders and save wishlists. It pairs a Next.js storefront and dashboards with a standalone Express REST API on MongoDB, using role-based NextAuth sessions.",
    stack: ["Next.js 16", "TypeScript", "Express", "MongoDB", "NextAuth"],
    image: "images/ecommerce-desktop",
    position: "object-left-top",
    live: "",
    repo: "https://github.com/olivennaji99/multi-vendor-ecommerce",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    type: "Web App",
    text: "Role-based hospital dashboard covering patients, users, inventory, stock control, pharmacy finance, beds, HMOs, families, messaging, audit logs and analytics.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    image: "images/hospital-management-system-screenshot",
    position: "object-left-top",
    live: "",
    repo: "",
  },
  {
    slug: "staff-panel",
    title: "Staff Panel — Operations Dashboard",
    type: "Dashboard",
    text: "An internal dashboard for running a tech business: web and networking departments, academy students, café sales, accounts, staff documents, clients, and monthly income and expenses.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "images/staff-panel-screenshot",
    position: "object-left-top",
    live: "",
    repo: "",
  },
  {
    slug: "mater-christi-centre",
    title: "Mater Christi Centre Website",
    type: "Website",
    text: "A responsive website for a church and spiritual formation centre, presenting its mission, apostolate, gallery and contact details with a warm, elegant design.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "images/mater-christi-hero-desktop",
    position: "object-left",
    live: "https://materchristicentre.com/",
    repo: "",
  },
  {
    slug: "hospital-wifi-portal",
    title: "St Catherine Hospital WiFi Portal",
    type: "Client · Networking",
    text: "A branded captive portal for a hospital's free patient and visitor WiFi, running on MikroTik routers. It handles secure CHAP (MD5) login, error states, status and logout pages, and is mobile-first for guests on their phones. Delivered with Verbum Networks.",
    stack: ["HTML", "CSS", "JavaScript", "MikroTik"],
    image: "images/hotspot-portal",
    position: "object-center",
    live: "",
    repo: "https://github.com/olivennaji99/Mikro-tik-",
  },
];

/* ── Contact ────────────────────────────────────────── */
export const contact = {
  eyebrow: "Hire a Full-Stack Web Developer",
  intro:
    "Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together.",
  formIntro: "Have a question, a project in mind, or need help choosing the right stack? Feel free to reach out.",
  asideTitle: "Hi! I'm always here to help you.",
};

/* ── Footer ─────────────────────────────────────────── */
export const footer = {
  blurb:
    "Olive Ngozika Nnaji (Ngozi) is a full-stack web developer, frontend and backend, building fast, SEO-friendly websites and web apps. From landing pages and dashboards to APIs and complete e-commerce products, I turn ideas into reliable, production-ready software.",
  navigation: [
    { href: to("home"), label: "Home" },
    { href: to("about"), label: "About Me" },
    { href: to("process"), label: "My Process" },
    { href: to("work"), label: "Featured Work" },
    { href: to("projects"), label: "Projects" },
    { href: to("contact"), label: "Contact Me" },
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
