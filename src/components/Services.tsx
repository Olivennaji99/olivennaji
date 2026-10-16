import { Icon } from "@/components/icons";
import { services } from "@/data/site";

function ViewAll({ className }: { className: string }) {
  return (
    <a href="#contact" className={`group items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink ${className}`}>
      View All Services
      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="mx-auto w-full max-w-375 scroll-mt-28 px-4 pt-8 lg:px-8 lg:pt-12"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{services.eyebrow}</p>
          <h2 id="services-title" className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {services.heading}
          </h2>
        </div>
        <ViewAll className="hidden shrink-0 sm:inline-flex" />
      </div>

      <div className="space-y-5">
        {services.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-xl font-bold text-ink">{group.title}</h3>
            <ul
              aria-label={`${group.title} services`}
              className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5"
            >
              {group.items.map((item) => (
                <li key={item.name} className="w-[72%] shrink-0 snap-start sm:w-auto sm:shrink">
                  <div className="group h-full rounded-2xl border border-accent/10 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/15 dark:border-white/10 dark:hover:shadow-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
                      <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h4 className="mt-5 text-[15px] font-semibold text-ink">{item.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ViewAll className="mt-5 inline-flex sm:hidden" />
    </section>
  );
}
