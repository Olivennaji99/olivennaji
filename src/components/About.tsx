import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { Icon } from "@/components/icons";
import { CenteredHeading, Eyebrow } from "@/components/ui";
import { about, identity, site, to, workflow } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto w-full max-w-375 scroll-mt-28 px-4 pb-6 pt-8 lg:px-8 lg:pt-12">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <ImageSlot
            base="images/my-pictures/olive-color-block-removed background"
            alt={`Portrait of ${site.name}`}
            hint="transparent PNG · 1024 × 1536"
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="aspect-4/5 rounded-3xl border-4 border-accent bg-soft/70 shadow-xl ring-1 ring-accent/20 dark:ring-white/10"
            imgClassName="object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-accent/15 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-md md:-left-6 dark:border-white/10 dark:bg-panel/90">
            <span className="block font-serif text-2xl font-bold italic text-accent dark:text-panel-soft">{about.badge}</span>
            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-ink/70">
              <Icon name="mapPin" className="h-3.5 w-3.5" />
              Based in {site.location} • Remote Worldwide
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h1 id="about-title" className="mb-4 text-2xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-3xl">
            <Eyebrow>{about.eyebrow}</Eyebrow>{" "}
            {about.heading}
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80 md:text-lg">
            My name is {identity.fullName} ({identity.nickname}), {about.lead}
          </p>
          {about.paragraphs.map((p, i) => (
            <p key={p.slice(0, 24)} className={`${i === about.paragraphs.length - 1 ? "mb-8" : "mb-6"} text-sm leading-relaxed text-ink/65`}>
              {p}
            </p>
          ))}

          <dl className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-2xl border border-accent/15 bg-soft/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-soft/70 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Icon name={s.icon} className="mb-2 h-6 w-6 text-accent" />
                <dt className="order-last mt-1 text-xs font-medium text-ink/70">{s.label}</dt>
                <dd className="text-2xl font-bold text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="text-center lg:text-left">
            <Link
              href={to("contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-ink shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
            >
              Let&apos;s Work Together
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="mx-auto w-full max-w-375 scroll-mt-28 px-4 pt-16 lg:px-8 lg:pt-20">
      <CenteredHeading id="process-title" eyebrow={workflow.eyebrow} title={workflow.heading} intro={workflow.intro} />
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {workflow.steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative flex flex-col justify-between rounded-2xl border border-accent/15 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl dark:border-white/10"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-black text-accent/40">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  <Icon name={step.icon} className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-xs leading-relaxed text-ink/65">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
