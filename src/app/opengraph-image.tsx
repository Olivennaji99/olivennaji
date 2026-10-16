import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { identity, site } from "@/data/site";

// The preview card shown when your link is shared on WhatsApp, LinkedIn, X, Slack, etc.
// Every page inherits it.
export const alt = `${site.name} (${identity.fullName}), ${site.role}: frontend and backend developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cached so the card is generated once at build time, not on every request
async function portraitDataUrl() {
  "use cache";
  const photo = await readFile(path.join(process.cwd(), "public", identity.portrait));
  return `data:image/png;base64,${photo.toString("base64")}`;
}

export default async function OpengraphImage() {
  const photoSrc = await portraitDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #2f55f4 0%, #1b2f9c 100%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 0 64px 72px",
            width: 720,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>
            {site.brand.first}
            <span style={{ color: "#c9d5ff" }}>{site.brand.second}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1 }}>{site.name}</div>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 600, marginTop: 18, color: "#e3e9ff" }}>{site.role}</div>
            <div style={{ display: "flex", fontSize: 28, marginTop: 14, color: "#c9d5ff" }}>
              Frontend · Backend · React · Next.js · Node.js · MongoDB
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#c9d5ff" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders a plain img */}
        <img
          src={photoSrc}
          alt=""
          width={420}
          height={630}
          style={{ position: "absolute", right: 30, bottom: 0, objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    ),
    size,
  );
}
