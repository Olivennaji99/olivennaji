"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { nav, site, to } from "@/data/site";

function Brand() {
  return (
    <Link href="/" aria-label={`${site.brand.first}${site.brand.second}: ${site.name}, home`} className="group inline-flex items-center gap-2.5">
      <span className="text-lg font-bold tracking-tight text-ink sm:pl-2 sm:text-xl">
        {site.brand.first}
        <span className="text-accent">{site.brand.second}</span>
      </span>
    </Link>
  );
}

function ThemeToggle() {
  // React clears the <html> attribute set by the inline script on the dev remount; put it back.
  useLayoutEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle light / dark mode"
      className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-accent/10"
    >
      <Icon name="moon" className="h-5 w-5 dark:hidden" />
      <Icon name="sun" className="hidden h-5 w-5 dark:block" />
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4" style={{ viewTransitionName: "site-header" }}>
        <div className="mx-auto flex h-13 max-w-5xl items-center justify-between rounded-full border border-accent/10 bg-surface/70 px-4 shadow-sm backdrop-blur-xl transition-all duration-300 sm:px-2 dark:border-white/10 dark:bg-surface/60">
          <Brand />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-accent/10 text-accent dark:bg-accent/15" : "text-ink/70 hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Link
              href={to("contact")}
              className="group hidden items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-2 py-2 pl-5 pr-3 text-sm font-semibold text-accent-ink shadow-md shadow-accent/30 transition-all hover:shadow-lg hover:shadow-accent/40 active:scale-95 sm:inline-flex"
            >
              Hire Me
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-transform group-hover:translate-x-0.5">
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </span>
            </Link>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
              className="rounded-full p-2.5 text-ink transition-colors hover:bg-accent/10 lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {/* spacer for the fixed header */}
      <div className="h-20 sm:h-24" />

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-60 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden dark:bg-black/60 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        id="mobile-nav"
        aria-label="Mobile navigation"
        inert={!open}
        className={`fixed right-0 top-0 z-70 h-full w-full max-w-sm transform bg-bg transition-[translate,visibility] duration-300 ease-out lg:hidden ${
          open ? "visible translate-x-0 shadow-2xl" : "invisible translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col justify-between overflow-y-auto p-4">
          <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-soft/60 blur-3xl dark:bg-accent/25" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <Brand />
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2.5 text-ink transition-colors hover:bg-accent/10"
                >
                  <Icon name="x" className="h-5 w-5" />
                </button>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-5 py-3 text-lg font-semibold transition-colors ${
                    active === item.href ? "bg-accent text-accent-ink" : "text-ink hover:bg-accent/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="relative pt-8">
            <Link
              href={to("contact")}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-2 py-3.5 text-base font-semibold text-accent-ink shadow-lg shadow-accent/30 transition-transform active:scale-95"
            >
              Hire Me <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
