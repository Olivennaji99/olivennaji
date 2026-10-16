# Developer Portfolio (Next.js 16 + Tailwind CSS v4)

A one-page, SEO-ready developer portfolio. Fully static, so it deploys to Vercel or Hostinger with no database.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
```

Requires **Node.js 20.9 or newer**.

## 1. Add your details

Open **`src/data/site.ts`**. Every word on the site lives there: name, role, contact details, socials, services, about text, stats, projects and SEO keywords. Edit, save, done.

## 2. Add your images

Each image slot shows a striped placeholder with the exact file path it expects. Drop a file with that name into `public/` and rebuild. `.webp`, `.png`, `.jpg`, `.jpeg` and `.avif` all work.

| Slot | File | Suggested size |
| --- | --- | --- |
| Hero portrait (center of the hero, transparent background) | `public/images/hero-portrait.png` | 920 × 1280 |
| Featured work (laptop mockup in the hero card) | `public/images/featured-work.webp` | 1000 × 600 |
| About portrait | `public/images/about-portrait.webp` | 900 × 1125 |
| Showcase gallery | `public/images/showcase/1.webp` … `7.webp` | 800 × 1000 |
| Project covers | `public/images/projects/<image>.webp` (name set per project in `site.ts`) | 1280 × 720 |
| Resume | `public/resume.pdf` | — |

Tech logos live in `public/tech/` (SVG). To add a technology, drop its SVG there and add an entry to `skills` in `site.ts`.

Tip: remove the background from your portraits (transparent PNG) for the cleanest look.

## 3. SEO checklist (already built in)

- Title, description, keywords, canonical URL, Open Graph and Twitter cards (`src/app/layout.tsx`)
- Auto-generated social share image (`src/app/opengraph-image.tsx`) and favicon from your initials (`src/app/icon.tsx`)
- `sitemap.xml`, `robots.txt` and a web manifest
- JSON-LD structured data: Person, WebSite, ProfilePage and your project list (`src/app/page.tsx`)
- One `<h1>`, semantic sections, alt text on every image, skip link, fully static HTML

After deploying:
1. Set `NEXT_PUBLIC_SITE_URL` to your real domain (see `.env.example`).
2. Verify the domain in Google Search Console, paste the code into `verification` in `layout.tsx`, and submit `https://your-domain.com/sitemap.xml`.
3. Update `LAST_UPDATED` in `src/app/sitemap.ts` when you change content.

## Deploy

**Vercel:** push to GitHub → Import project on vercel.com → add `NEXT_PUBLIC_SITE_URL` → Deploy.

**Hostinger VPS:** `npm ci && npm run build`, then run `npm start` with PM2 (`pm2 start npm --name portfolio -- start`) behind Nginx on your domain.

## Customise the look

Colors are tokens at the top of `src/app/globals.css`, with a light and a dark set. Visitors switch with the sun/moon button in the navbar; the choice is saved in `localStorage`, and first-time visitors get their system preference. Fonts (Poppins, JetBrains Mono) are loaded with `next/font` in `layout.tsx`.

## Stack

HTML · CSS · JavaScript · React · Next.js 16 (App Router, Turbopack, Cache Components) · Tailwind CSS v4 · TypeScript
