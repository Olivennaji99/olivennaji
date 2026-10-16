"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { pages, sectionPage, site } from "@/data/site";

/*
 * One route, many "pages". Which page shows is the `data-page-active` attribute
 * on <html> (set before paint by the inline script in app/page.tsx, then kept in
 * sync here); CSS in globals.css hides the others and animates the swap.
 */

const HOME = pages[0].id;
const OUT_MS = 260; // keep in sync with the page-out animation in globals.css

const PageContext = createContext<{ active: string }>({ active: HOME });
export const usePage = () => useContext(PageContext);

function resolvePage(id: string): string | undefined {
  if (!id) return undefined;
  if (sectionPage[id]) return sectionPage[id];
  // Any other element inside a page (e.g. an id added later) still works
  return document.getElementById(id)?.closest("[data-page]")?.getAttribute("data-page") ?? undefined;
}

/** Scroll to the linked section, or to the top when the link is the page itself. */
function scrollToTarget(id: string, page: string, behavior: ScrollBehavior) {
  const el = id && id !== page ? document.getElementById(id) : null;
  if (el) el.scrollIntoView({ behavior, block: "start" });
  else window.scrollTo({ top: 0, behavior });
}

export default function Pages({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(HOME);
  const activeRef = useRef(HOME);
  const timer = useRef<number | undefined>(undefined);
  const baseTitle = useRef("");

  // Pick up the page the inline script chose from the URL hash (runs before paint)
  useLayoutEffect(() => {
    baseTitle.current = document.title;
    const initial = document.documentElement.getAttribute("data-page-active");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- must read the DOM the inline script prepared
    if (initial && initial !== HOME) setActive(initial);
  }, []);

  // Mirror state onto <html>; also re-applies it after React's dev remount resets <html>
  useLayoutEffect(() => {
    activeRef.current = active;
    document.documentElement.setAttribute("data-page-active", active);
    const label = pages.find((p) => p.id === active)?.label;
    if (baseTitle.current) {
      document.title = active === HOME || !label ? baseTitle.current : `${label} | ${site.name}`;
    }
  }, [active]);

  const navigate = useCallback((id: string) => {
    const page = resolvePage(id);
    if (!page) return false;

    if (page === activeRef.current) {
      scrollToTarget(id, page, "smooth");
      return true;
    }

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.clearTimeout(timer.current);
    root.setAttribute("data-page-phase", "out");

    timer.current = window.setTimeout(() => {
      root.removeAttribute("data-page-phase");
      flushSync(() => setActive(page));
      scrollToTarget(id, page, "instant");
      // Move focus to the new page so keyboard and screen-reader users land in it
      document.querySelector<HTMLElement>(`[data-page="${page}"]`)?.focus({ preventScroll: true });
    }, reduce ? 0 : OUT_MS);
    return true;
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href^='#']");
      if (!link) return;
      const id = decodeURIComponent(link.getAttribute("href")!.slice(1));
      if (!navigate(id)) return; // e.g. the skip link: let the browser handle it
      e.preventDefault();
      if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
    }

    // Back / forward buttons
    function onPopState() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!navigate(id)) navigate(HOME);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      window.clearTimeout(timer.current);
    };
  }, [navigate]);

  return <PageContext.Provider value={{ active }}>{children}</PageContext.Provider>;
}

/** One page of the site. Only the active page is displayed (see globals.css). */
export function Page({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div data-page={id} tabIndex={-1} className="outline-none">
      {children}
    </div>
  );
}
