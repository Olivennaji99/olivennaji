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

| Slot | File |
| --- | --- |
| Hero portrait (transparent background) | `public/images/my-pictures/olive-removed background.png` |
| Hero "Full-Stack Web Apps" card | `public/images/my-pictures/olive-coding.png` |
| About portrait (transparent background) | `public/images/my-pictures/olive-color-block-removed background.png` |
| Home gallery (7 tiles) | set in `showcase.images` in `site.ts` |
| Project covers | `public/images/projects/images/…`, set per project in `site.ts` |
| CV ("View My Resume") | `public/documents/OLIVE_NNAJI_CV.pdf` |

To swap a picture, drop the new file in the same folder and update its path in `src/data/site.ts` (or the component named above).

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

## Contact form email

Messages from the contact form are sent to your inbox through your own Gmail account, with **Reply-To** set to the visitor so you can answer by pressing Reply. It takes about two minutes to set up:

1. Turn on **2-Step Verification** for your Google account: <https://myaccount.google.com/security>
2. Create an **App Password**: <https://myaccount.google.com/apppasswords> → name it "Portfolio" → copy the 16-character password.
3. Add two environment variables:
   - **Locally:** create a file named `.env.local` in the project folder containing
     ```
     GMAIL_USER=olivennaji99@gmail.com
     GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
     ```
   - **On Vercel:** Project → Settings → Environment Variables → add the same two, then redeploy.
4. Send yourself a test message from the site.

Never commit `.env.local` (it is already git-ignored), and never use your normal Gmail password here. If the variables are missing, the form tells visitors to email you directly instead.

## Deploy

**Vercel:** push to GitHub → Import project on vercel.com → add `NEXT_PUBLIC_SITE_URL` → Deploy.

**Hostinger VPS:** `npm ci && npm run build`, then run `npm start` with PM2 (`pm2 start npm --name portfolio -- start`) behind Nginx on your domain.

## Customise the look

Colors are tokens at the top of `src/app/globals.css`, with a light and a dark set. Visitors switch with the sun/moon button in the navbar; the choice is saved in `localStorage`, and first-time visitors get their system preference. Fonts (Poppins, JetBrains Mono) are loaded with `next/font` in `layout.tsx`.

## Stack

HTML · CSS · JavaScript · React · Next.js 16 (App Router, Turbopack, Cache Components) · Tailwind CSS v4 · TypeScript
