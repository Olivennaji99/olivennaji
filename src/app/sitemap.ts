import type { MetadataRoute } from "next";
import { identity, pages, site } from "@/data/site";

// Update this date whenever you make a significant content change
const LAST_UPDATED = "2026-10-16";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${site.url}${p.path === "/" ? "" : p.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: p.path === "/" ? 1 : p.id === "projects" || p.id === "about" ? 0.9 : 0.8,
    // Lets Google Images connect your photo to your name
    ...(p.path === "/" || p.id === "about" ? { images: [`${site.url}${encodeURI(identity.portrait)}`] } : {}),
  }));
}
