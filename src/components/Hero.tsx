import ImageSlot from "@/components/ImageSlot";
import { Icon } from "@/components/icons";
import { TechLogo, findSkill } from "@/components/ui";
import { hero, site } from "@/data/site";

// Where each floating logo sits around the portrait (mobile → desktop)
const orbit = [
  "left-1 top-[5%] sm:-left-2 lg:left-[60px] xl:left-[77px] lg:top-[8%]",
  "right-1 top-[11%] sm:-right-2 lg:right-[56px] xl:right-[72px] lg:top-[12%]",
  "left-2 top-[22%] sm:-left-3 lg:left-0 lg:top-[25%]",
  "right-2 top-[22%] sm:-right-3 lg:right-0 lg:top-[40%]",
  "left-0 top-[45%] sm:-left-5 lg:left-0 lg:top-[50%]",
  "right-0 top-[50%] sm:-right-5 lg:-right-10 lg:top-[60%]",
  "left-2 bottom-[15%] sm:-left-1 lg:-left-3 lg:bottom-[10%]",
  "right-2 bottom-[15%] sm:-right-1 lg:-right-12 xl:-right-5 lg:bottom-[3%]",
];

const focusIcons = ["monitor", "server", "layers"];

// On desktop the words sit beside the 460px photo, so they scale with the window to never run under it
const big = "mt-1 block text-[3.5rem] font-extrabold text-accent sm:text-7xl lg:text-[clamp(2.5rem,calc(10.2vw-65px),5.5rem)]";
const lead = "block text-3xl font-bold text-ink sm:text-4xl lg:text-[clamp(1.75rem,calc(4.6vw-20px),2.6rem)]";

export default function Hero() {
  const floating = hero.floating.map(findSkill).filter((s) => s !== undefined);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative w-full scroll-mt-28 overflow-hidden bg-surface py-8 transition-colors duration-500 lg:py-10 dark:bg-transparent"
    >
      <div className="mx-auto max-w-375 px-4 lg:px-8">
        <div className="relative lg:h-[640px]">
          {/* Headline: split left / right on desktop */}
          <div className="relative z-10 flex animate-rise flex-col gap-2 sm:px-10 lg:absolute lg:inset-x-0 lg:top-0 lg:flex-row lg:justify-between lg:gap-0">
            <h1 id="hero-title" className="leading-none">
              <span className={lead}>{hero.left.lead}</span>
              <span className={big}>{hero.left.accent}</span>
              <span className="sr-only">
                {" "}
                {hero.right.lead} {hero.right.accent}. {site.name}, {site.role}.
              </span>
            </h1>
            <p className="leading-none lg:text-right" aria-hidden="true">
              <span className={lead}>{hero.right.lead}</span>
              <span className={big}>{hero.right.accent}</span>
            </p>
          </div>

          {/* Portrait with floating tech logos */}
          <div className="relative z-5 mx-auto mt-4 h-[500px] w-full max-w-[350px] sm:z-30 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-full lg:w-[460px] lg:max-w-none lg:-translate-x-1/2">
            <div className="relative h-full w-full animate-rise [animation-delay:150ms]">
              <div className="absolute inset-0">
                <ImageSlot
                  base="images/my-pictures/olive-removed background"
                  alt={`${site.name}, ${site.role}`}
                  hint="transparent PNG · 1024 × 1536"
                  sizes="(min-width: 1024px) 460px, 350px"
                  priority
                  className="h-full w-full lg:rounded-b-4xl"
                  imgClassName="object-cover object-top"
                />
              </div>
              {floating.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`pointer-events-none absolute z-30 animate-pop ${orbit[i]}`}
                  style={{ animationDelay: `${500 + i * 90}ms` }}
                >
                  <div
                    className="flex h-11 w-11 animate-float items-center justify-center rounded-xl bg-white/95 p-2 shadow-lg shadow-black/20 ring-1 ring-accent/20 backdrop-blur-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:p-2.5 lg:h-16 lg:w-16 lg:p-3"
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    <TechLogo skill={skill} eager />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colored panel */}
          <div className="relative z-10 -mt-23 animate-rise overflow-hidden rounded-4xl bg-panel px-6 pb-8 pt-7 text-panel-ink transition-colors duration-500 [animation-delay:250ms] sm:-mt-28 sm:pt-30 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[502px] lg:p-0">
            <div className="pointer-events-none absolute -left-10 top-28 h-52 w-72 rotate-[-20deg] rounded-[50%] bg-white/10" />
            <div className="pointer-events-none absolute bottom-0 right-1/3 h-64 w-40 rounded-[50%] bg-white/10" />

            <div className="relative grid gap-10 lg:h-full lg:grid-cols-[1fr_460px_1fr] lg:gap-0">
              <div className="flex flex-col gap-8 lg:justify-between lg:py-8 lg:pl-10 lg:pr-4">
                <div className="lg:mt-10">
                  <p className="flex items-center gap-2 text-xs text-white/80">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
                    </span>
                    {site.availability}
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.1rem] xl:text-[2.4rem]">
                    {hero.headline}
                  </h2>
                  <p className="mt-4 max-w-[17rem] text-[15px] leading-relaxed text-white/80">{hero.intro}</p>
                  <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener"
                    className="mt-7 inline-flex w-full items-center justify-between rounded-full bg-ink py-3 pl-6 pr-3 text-sm font-semibold uppercase text-bg transition-transform hover:scale-[1.03] active:scale-95 sm:w-[250px] dark:bg-cream dark:text-[#0d1424]"
                  >
                    View My Resume
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current">
                      <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="hidden lg:block" />

              <div className="flex flex-col gap-8 lg:items-end lg:justify-between lg:py-8 lg:pl-4 lg:pr-10">
                <ul className="flex items-start justify-between gap-4 lg:justify-end lg:gap-5">
                  {hero.focus.map((f, i) => (
                    <li key={f} className="flex w-[4.5rem] flex-col items-center gap-1.5 text-center">
                      <Icon name={focusIcons[i]} className="h-7 w-7" strokeWidth={1.6} />
                      <span className="text-[10px] leading-tight text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <div id="work" className="w-full scroll-mt-28 self-start sm:max-w-[250px] lg:self-end">
                  <p className="mb-2 text-center text-xs text-white/85">{hero.featured.label}</p>
                  <div className="rounded-3xl border-2 border-white/80 bg-white/10 p-2 backdrop-blur-sm">
                    <ImageSlot
                      base="images/my-pictures/olive-coding"
                      alt={`${site.name} coding a React dashboard on a laptop`}
                      hint="photo · 1312 × 1199"
                      sizes="(min-width: 640px) 250px, 92vw"
                      className="h-36 w-full rounded-2xl bg-cream"
                      imgClassName="object-cover object-[55%_30%] transition-transform duration-700 hover:scale-105"
                    />
                    <p className="mt-3 text-center text-sm font-bold">{hero.featured.title}</p>
                    <p className="text-center text-[11px] text-white/80">{hero.featured.text}</p>
                    <a
                      href={hero.featured.href}
                      className="mx-auto mb-1 mt-2 flex w-fit items-center rounded-full bg-cream px-5 py-2 text-xs font-bold text-[#2f55f4] transition-transform hover:scale-105 active:scale-95 dark:text-[#142052]"
                    >
                      {hero.featured.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
