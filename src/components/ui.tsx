import Link from "next/link";
import { Icon } from "@/components/icons";
import { skills, type Skill } from "@/data/site";

export function findSkill(name: string): Skill | undefined {
  return skills.find((s) => s.name === name);
}

/** Small uppercase label above section headings. */
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-accent ${className}`}>
      {children}
    </span>
  );
}

/** Centered eyebrow + uppercase title + intro, used by Process and Tools. */
export function CenteredHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-5 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">{intro}</p>
    </div>
  );
}

/** A technology logo from /public/tech. */
export function TechLogo({
  skill,
  className = "h-full w-full",
  eager = false,
}: {
  skill: Skill;
  className?: string;
  eager?: boolean; // above the fold: don't lazy-load
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny local SVGs, no optimisation needed
    <img src={`/tech/${skill.logo}.svg`} alt={skill.name} width={64} height={64} loading={eager ? "eager" : "lazy"} className={className} />
  );
}

/** Circular spinning text seal with a play button in the middle. */
export function RotatingBadge({ text, href, id }: { text: string; href: string; id: string }) {
  return (
    <Link
      href={href}
      aria-label={text.replaceAll("•", "").trim().toLowerCase()}
      className="group relative flex h-24 w-24 shrink-0 items-center justify-center"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink text-[9.5px] font-medium tracking-[0.22em]" style={{ fontFamily: "inherit" }}>
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-bg transition-transform group-hover:scale-110 dark:bg-accent dark:text-accent-ink">
        <Icon name="play" className="ml-0.5 h-4 w-4" />
      </span>
    </Link>
  );
}

/** Overlapping initials of happy clients. */
export function ClientStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex items-center -space-x-2" aria-label="Happy clients">
      {initials.map((c, i) => (
        <span
          key={c}
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-soft text-[10px] font-bold text-accent dark:border-bg"
          style={{ zIndex: initials.length - i }}
        >
          {c}
        </span>
      ))}
      <span className="z-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-ink text-bg dark:border-bg dark:bg-accent dark:text-accent-ink">
        <Icon name="plus" className="h-4 w-4" />
      </span>
    </div>
  );
}
