import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { Icon } from "@/components/icons";
import { TechLogo, findSkill } from "@/components/ui";
import { hero, site } from "@/data/site";

// Where each floating logo sits around the portrait (phone/tablet → desktop)
const orbit = [
  "left-1 top-[5%] sm:-left-2 md:-left-6 xl:left-[77px] xl:top-[8%]",
  "right-1 top-[11%] sm:-right-2 md:-right-6 xl:right-[72px] xl:top-[12%]",
  "left-2 top-[22%] sm:-left-3 md:-left-10 xl:left-0 xl:top-[25%]",
  "right-2 top-[22%] sm:-right-3 md:-right-10 xl:right-0 xl:top-[40%]",
  "left-0 top-[45%] sm:-left-5 md:-left-12 xl:left-0 xl:top-[50%]",
  "right-0 top-[50%] sm:-right-5 md:-right-12 xl:-right-10 xl:top-[60%]",
  "left-2 bottom-[15%] sm:-left-1 md:-left-8 xl:-left-3 xl:bottom-[10%]",
  "right-2 bottom-[15%] sm:-right-1 md:-right-8 xl:-right-5 xl:bottom-[3%]",
];

const focusIcons = ["monitor", "server", "layers"];

// Phones stack the words; tablets split them left/right above the photo; on large screens (xl)
// they sit beside the 460px photo and scale with the window so they never run under it.
const big =
  "mt-1 block text-[3.5rem] font-extrabold text-accent sm:text-7xl md:text-6xl lg:text-7xl xl:text-[clamp(4rem,calc(10.2vw-65px),5.5rem)]";
const lead = "block text-3xl font-bold text-ink sm:text-4xl xl:text-[2.6rem]";

export default function Hero() {
  const floating = hero.floating.map(findSkill).filter((s) => s !== undefined);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative w-full scroll-mt-28 overflow-hidden bg-surface py-8 transition-colors duration-500 md:py-10 dark:bg-transparent"
    >
      <div className="mx-auto max-w-375 px-4 lg:px-8">
        <div className="relative xl:h-[640px]">
          {/* Headline: stacked on phones, split left / right from tablets up */}
          <div className="relative z-10 flex animate-rise flex-col gap-2 sm:px-10 md:flex-row md:items-end md:justify-between md:gap-6 xl:absolute xl:inset-x-0 xl:top-0 xl:items-start xl:gap-0">
            <p className="leading-none">
              <span className={lead}>{hero.left.lead}</span>
              <span className={big}>{hero.left.accent}</span>
            </p>
            <p className="leading-none md:text-right">
              <span className={lead}>{hero.right.lead}</span>
              <span className={big}>{hero.right.accent}</span>
            </p>
          </div>

          {/* Portrait with floating tech logos */}
          <div className="relative z-5 mx-auto mt-4 h-[500px] w-full max-w-[350px] sm:z-30 md:mt-6 md:h-[600px] md:max-w-[440px] xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-full xl:w-[460px] xl:max-w-none xl:-translate-x-1/2">
            <div className="relative h-full w-full animate-rise [animation-delay:150ms]">
              <div className="absolute inset-0">
                <ImageSlot
                  base="images/my-pictures/olive-removed background"
                  alt={`${site.name}, ${site.role}`}
                  hint="transparent PNG · 1024 × 1536"
                  sizes="(min-width: 768px) 460px, 350px"
                  preload
                  className="h-full w-full xl:rounded-b-4xl"
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
                    className="flex h-11 w-11 animate-float items-center justify-center rounded-xl bg-white/95 p-2 shadow-lg shadow-black/20 ring-1 ring-accent/20 backdrop-blur-sm sm:h-14 sm:w-14 sm:rounded-2xl sm:p-2.5 xl:h-16 xl:w-16 xl:p-3"
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    <TechLogo skill={skill} eager />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colored panel */}
          <div className="relative z-10 -mt-23 animate-rise overflow-hidden rounded-4xl bg-panel px-6 pb-8 pt-7 text-panel-ink transition-colors duration-500 [animation-delay:250ms] sm:-mt-28 sm:pt-30 md:px-10 md:pb-10 xl:absolute xl:inset-x-0 xl:bottom-0 xl:mt-0 xl:h-[502px] xl:p-0">
            <div className="pointer-events-none absolute -left-10 top-28 h-52 w-72 rotate-[-20deg] rounded-[50%] bg-white/10" />
            <div className="pointer-events-none absolute bottom-0 right-1/3 h-64 w-40 rounded-[50%] bg-white/10" />

            <div className="relative grid gap-10 md:grid-cols-2 md:gap-8 xl:h-full xl:grid-cols-[1fr_460px_1fr] xl:gap-0">
              <div className="flex flex-col gap-8 xl:justify-between xl:py-8 xl:pl-10 xl:pr-4">
                <div className="xl:mt-10">
                  <p className="flex items-center gap-2 text-xs text-white/80">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
                    </span>
                    {site.availability}
                  </p>
                  {/* The page's main heading: who you are, for visitors and search engines */}
                  <h1 id="hero-title" className="mt-3 text-sm font-semibold text-white sm:text-base">
                    Hi, I&apos;m {site.name} <span className="font-normal text-white/80">— {site.role}</span>
                  </h1>
                  <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.1rem] lg:text-[2.4rem]">
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

              <div className="hidden xl:block" />

              <div className="flex flex-col gap-8 md:items-end md:justify-between xl:py-8 xl:pl-4 xl:pr-10">
                <ul className="flex items-start justify-between gap-4 md:justify-end md:gap-5">
                  {hero.focus.map((f, i) => (
                    <li key={f} className="flex w-[4.5rem] flex-col items-center gap-1.5 text-center">
                      <Icon name={focusIcons[i]} className="h-7 w-7" strokeWidth={1.6} />
                      <span className="text-[10px] leading-tight text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <div id="work" className="w-full scroll-mt-28 self-start sm:max-w-[280px] md:self-end xl:max-w-[250px]">
                  <p className="mb-2 text-center text-xs text-white/85">{hero.featured.label}</p>
                  <div className="rounded-3xl border-2 border-white/80 bg-white/10 p-2 backdrop-blur-sm">
                    <ImageSlot
                      base="images/my-pictures/olive-coding"
                      alt={`${site.name} coding a React dashboard on a laptop`}
                      hint="photo · 1312 × 1199"
                      sizes="(min-width: 640px) 280px, 92vw"
                      className="h-36 w-full rounded-2xl bg-cream"
                      imgClassName="object-cover object-[55%_30%] transition-transform duration-700 hover:scale-105"
                    />
                    <p className="mt-3 text-center text-sm font-bold">{hero.featured.title}</p>
                    <p className="text-center text-[11px] text-white/80">{hero.featured.text}</p>
                    <Link
                      href={hero.featured.href}
                      className="mx-auto mb-1 mt-2 flex w-fit items-center rounded-full bg-cream px-5 py-2 text-xs font-bold text-[#2f55f4] transition-transform hover:scale-105 active:scale-95 dark:text-[#142052]"
                    >
                      {hero.featured.cta}
                    </Link>
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
