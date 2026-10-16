import type { MetadataRoute } from "next";
import { brandName, site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: brandName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f2f4f8",
    theme_color: "#2f55f4",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
