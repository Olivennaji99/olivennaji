import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Update this date whenever you make a significant content change
const LAST_UPDATED = "2026-10-14";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
