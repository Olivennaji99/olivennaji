import { ImageResponse } from "next/og";
import { site, skills } from "@/data/site";

// The preview card shown when your link is shared on WhatsApp, LinkedIn, X, etc.
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0d1424",
          color: "#eef1f7",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#ffb21e", letterSpacing: 4 }}>
          {"// " + site.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1 }}>
            Code Your&nbsp;<span style={{ color: "#6d88ff" }}>VISION</span>
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1 }}>Ship Your PRODUCT</div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 24, color: "#9aa4ba" }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {skills.slice(0, 9).map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 999,
                border: "2px solid #26304a",
                fontSize: 22,
              }}
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
