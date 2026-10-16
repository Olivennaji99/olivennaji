import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-sm text-accent">{"// 404"}</p>
        <h1 className="text-5xl font-extrabold text-ink">Page not found</h1>
        <p className="text-ink/70">That route doesn&apos;t exist. Let&apos;s get you back home.</p>
        <Link href="/" className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink">
          Back to home
        </Link>
      </div>
    </main>
  );
}
