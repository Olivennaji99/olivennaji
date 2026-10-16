import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg", ".avif"];

/**
 * Finds /public/<base>.(webp|png|jpg|jpeg|avif).
 * Runs at build time, so just drop the file in /public and rebuild.
 */
function findImage(base: string): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `${base}${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return `/${rel}`;
  }
  return null;
}

type Props = {
  /** Path inside /public without extension, e.g. "images/hero" */
  base: string;
  alt: string;
  /** Size hint shown on the placeholder, e.g. "1000 × 1250" */
  hint?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

export default function ImageSlot({
  base,
  alt,
  hint,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "object-cover",
}: Props) {
  const src = findImage(base);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={imgClassName} />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (image placeholder)`}
          className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,var(--surface)_0_12px,var(--soft)_12px_24px)] p-4 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink/50">
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="m4 18 5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="font-mono text-[11px] leading-snug text-ink/60">
              public/{base}.webp
              {hint ? <span className="block opacity-80">{hint}</span> : null}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
