import Link from "next/link";
import { socialLinks } from "@/components/Contact";
import { Icon } from "@/components/icons";
import { brandName, footer, site, to } from "@/data/site";

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col space-y-5 lg:col-span-2">
      <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-panel-soft" />
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1 text-sm font-medium text-cream/75 transition-all duration-200 hover:translate-x-1 hover:text-panel-soft"
            >
              {l.label}
              <Icon name="chevronRight" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-16 w-full overflow-hidden bg-panel text-cream transition-colors duration-500">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-panel-soft/60 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,241,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(238,241,247,0.2) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 z-0 h-80 w-80 rounded-full bg-panel-soft/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 z-0 h-80 w-80 rounded-full bg-accent-2/15 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-375 px-4 pb-8 pt-10 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <Link href="/" className="inline-flex w-fit items-center gap-3">
              <span className="text-3xl font-bold tracking-tight text-white">
                {site.brand.first}
                <span className="italic text-panel-soft">{site.brand.second}</span>
              </span>
            </Link>
            <p className="max-w-md text-sm font-medium leading-relaxed text-cream/80 md:text-base">{footer.blurb}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cream/80">
                <Icon name="mail" className="h-4 w-4" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-panel-soft">
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cream/80">
                <Icon name="mapPin" className="h-4 w-4" />
                <span>{site.location} • Remote Worldwide</span>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-panel-soft">Connect With Me</h3>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="me noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/20 bg-cream/10 text-cream shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream hover:bg-cream hover:text-[#2f55f4] hover:shadow-[0_10px_25px_-8px_rgba(201,213,255,0.5)]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <LinkColumn title="Navigation" links={footer.navigation} />
          <LinkColumn title="Dev Services" links={footer.services.map((label) => ({ label, href: to("services") }))} />
          <LinkColumn title="Tech Stack" links={footer.stack.map((label) => ({ label, href: to("tools-and-skills") }))} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {footer.features.map((f) => (
            <div
              key={f.title}
              className="group flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-panel-soft/40 hover:bg-cream/10 hover:shadow-[0_10px_40px_-12px_rgba(201,213,255,0.2)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-panel-soft/30 bg-linear-to-br from-panel-soft/20 to-transparent text-panel-soft transition-transform duration-300 group-hover:scale-110">
                <Icon name={f.icon} className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-white">{f.title}</h4>
                <p className="mt-0.5 text-xs font-medium leading-relaxed text-cream/70">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[
            { icon: "clock", title: "Current Availability", text: footer.availability },
            { icon: "sparkles", title: "Custom Inquiry", text: footer.inquiry },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-cream/15 bg-cream/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Icon name={card.icon} className="h-4 w-4 text-panel-soft" />
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-white">{card.title}</p>
              </div>
              <p className="text-xs leading-relaxed text-cream/75">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-sm text-cream/70 md:flex-row">
          <p className="text-xs md:text-sm">
            © {site.copyrightYear} {site.name} ({brandName}). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs italic">
            Crafted with <Icon name="heart" className="h-3.5 w-3.5 text-glow" /> and clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
