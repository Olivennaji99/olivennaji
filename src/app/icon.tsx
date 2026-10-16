import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon generated from your initials. Replace with src/app/icon.png if you have a logo.
export default function Icon() {
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f55f4",
          color: "#ffffff",
          borderRadius: 14,
          fontSize: 30,
          fontWeight: 800,
        }}
      >
        {initials}
      </div>
    ),
    size,
  );
}
