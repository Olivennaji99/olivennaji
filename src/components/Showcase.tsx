import ImageSlot from "@/components/ImageSlot";
import { Icon } from "@/components/icons";
import { ClientStack, RotatingBadge } from "@/components/ui";
import { showcase } from "@/data/site";

// Each column is a stack of cells; `grow` sets the height share (as in the reference).
type Cell =
  | { kind: "img"; n: number; grow: number }
  | { kind: "gap"; grow: number }
  | { kind: "dot"; grow: number }
  | { kind: "cta"; grow: number };

const columns: Cell[][] = [
  [{ kind: "img", n: 1, grow: 55 }, { kind: "img", n: 2, grow: 45 }],
  [{ kind: "gap", grow: 10 }, { kind: "img", n: 3, grow: 90 }],
  [{ kind: "dot", grow: 25 }, { kind: "img", n: 4, grow: 55 }, { kind: "cta", grow: 15 }],
  [{ kind: "gap", grow: 10 }, { kind: "img", n: 5, grow: 90 }],
  [{ kind: "img", n: 6, grow: 55 }, { kind: "img", n: 7, grow: 45 }],
];

function renderCell(cell: Cell, key: string) {
  switch (cell.kind) {
    case "img":
      return (
        <div
          key={key}
          className="group relative min-h-0 overflow-hidden rounded-[1.4rem] border-4 border-accent"
          style={{ flex: cell.grow }}
        >
          <ImageSlot
            base={`images/showcase/${cell.n}`}
            alt={`Screenshot ${cell.n} from a recent web project`}
            hint="800 × 1000"
            sizes="(min-width: 1024px) 20vw, 44vw"
            className="h-full w-full bg-soft"
            imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );
    case "gap":
      return <div key={key} style={{ flex: cell.grow }} />;
    case "dot":
      return (
        <div key={key} className="flex items-center justify-center" style={{ flex: cell.grow }} aria-hidden="true">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-soft text-accent dark:bg-accent/25">
            <Icon name="sparkles" className="h-4 w-4" />
          </span>
        </div>
      );
    case "cta":
      return (
        <a
          key={key}
          href={showcase.cta.href}
          className="flex items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-bg transition-transform hover:scale-[1.03] active:scale-95 sm:text-xl dark:bg-cream dark:text-[#0d1424]"
          style={{ flex: cell.grow }}
        >
          {showcase.cta.label}
          <Icon name="arrowUpRight" className="h-5 w-5" />
        </a>
      );
  }
}

export default function Showcase() {
  return (
    <section id="showcase" aria-labelledby="showcase-title" className="mx-auto w-full max-w-375 scroll-mt-28 px-4 py-14 lg:px-8 lg:py-20">
      <div className="mb-6 flex items-center justify-between lg:hidden">
        <RotatingBadge text={showcase.badge} href="#about" id="badge-path-sm" />
        <ClientStack initials={showcase.clients} />
      </div>

      <div className="relative mb-8 lg:mb-10">
        <div className="absolute left-0 top-0 hidden lg:block">
          <RotatingBadge text={showcase.badge} href="#about" id="badge-path-lg" />
        </div>
        <div className="absolute right-0 top-3 hidden lg:block">
          <ClientStack initials={showcase.clients} />
        </div>
        <h2
          id="showcase-title"
          className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {showcase.heading}
        </h2>
      </div>

      <div className="no-scrollbar -mx-4 flex h-[400px] snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 lg:mx-0 lg:grid lg:h-[540px] lg:grid-cols-5 lg:overflow-visible lg:px-0">
        {columns.map((col, ci) => (
          <div key={ci} className="flex w-[44%] shrink-0 snap-start flex-col gap-3 lg:w-auto">
            {col.map((cell, i) => renderCell(cell, `${ci}-${i}`))}
          </div>
        ))}
      </div>
    </section>
  );
}
