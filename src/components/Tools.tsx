import { CenteredHeading, TechLogo } from "@/components/ui";
import { skills, toolsSection } from "@/data/site";

export default function Tools() {
  const row = [...skills, ...skills];

  return (
    <section id="tools-and-skills" aria-labelledby="tools-title" className="w-full scroll-mt-28 overflow-hidden pb-4 pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <CenteredHeading id="tools-title" eyebrow={toolsSection.eyebrow} title={toolsSection.heading} intro={toolsSection.intro} />
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent md:w-32" />

        <ul className="flex w-max animate-marquee items-center gap-6 py-2 pr-6 hover:[animation-play-state:paused]">
          {row.map((s, i) => (
            <li
              key={`${s.name}-${i}`}
              aria-hidden={i >= skills.length}
              className="group relative flex select-none items-center gap-4 rounded-full border border-accent/15 bg-surface p-2 pr-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl dark:border-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2.5 ring-1 ring-accent/10 transition-colors duration-300 group-hover:bg-soft">
                <TechLogo skill={s} className="h-full w-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">{s.name}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/70">{s.group}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
