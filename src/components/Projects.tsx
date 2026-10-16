import ImageSlot from "@/components/ImageSlot";
import { Icon } from "@/components/icons";
import { projects, projectsSection } from "@/data/site";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-375 scroll-mt-28 px-4 pb-6 pt-8 lg:px-8 lg:pt-12"
    >
      <div className="mb-12 text-center md:mb-16">
        <h1 id="projects-title" className="mb-3 text-3xl font-black uppercase tracking-tighter text-ink md:text-5xl">
          <span className="mb-3 block text-xs font-bold tracking-[0.3em] text-accent md:text-sm">{projectsSection.eyebrow}</span>{" "}
          {projectsSection.heading}
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink/70 md:text-xl">{projectsSection.intro}</p>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects.map((p) => {
          return (
            <li key={p.slug} className={p.featured ? "md:col-span-2" : undefined}>
              <article
                id={p.slug}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent/15 bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/15 dark:border-white/10 ${
                  p.featured ? "xl:flex-row" : ""
                }`}
              >
                <div className={`relative aspect-video overflow-hidden ${p.featured ? "xl:aspect-auto xl:min-h-80 xl:w-[58%] xl:shrink-0" : ""}`}>
                  <ImageSlot
                    base={`images/projects/${p.image}`}
                    alt={`${p.title} screenshot`}
                    hint="cover · 1280 × 720"
                    sizes={p.featured ? "(min-width: 1280px) 38vw, (min-width: 1024px) 62vw, 92vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"}
                    className="h-full w-full"
                    imgClassName={`object-cover ${p.position} transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#0d1424]/80 text-panel-soft shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 dark:bg-black/70">
                      <Icon name="code" className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded bg-[#0d1424]/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#c9d5ff] backdrop-blur-sm">
                    {p.type}
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className={`mb-4 text-sm leading-relaxed text-ink/65 ${p.featured ? "" : "line-clamp-2"}`}>{p.text}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-accent/10 pt-4 dark:border-white/10">
                    <div className="flex min-w-0 items-center gap-1.5 text-accent">
                      <Icon name="terminal" className="h-4 w-4 shrink-0" />
                      <span className="truncate text-xs font-semibold">{p.stack.slice(0, p.featured ? 5 : 3).join(" · ")}</span>
                    </div>
                    {p.live || p.repo ? (
                      <div className="flex shrink-0 items-center gap-3">
                        {[
                          { href: p.live, label: "Live Site" },
                          { href: p.repo, label: "Source" },
                        ]
                          .filter((l) => l.href)
                          .map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-tight text-accent transition-colors hover:text-ink hover:underline"
                            >
                              {l.label}
                              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                            </a>
                          ))}
                      </div>
                    ) : (
                      <span className="shrink-0 text-xs font-bold uppercase tracking-tight text-ink/50">Private project</span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 text-center md:mt-8">
        <a
          href={projectsSection.cta.href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-ink shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110"
        >
          {projectsSection.cta.label}
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
