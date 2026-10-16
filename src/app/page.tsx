import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import PageTransition from "@/components/PageTransition";
import { jsonLd, pageMetadata, webPage } from "@/lib/seo";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <PageTransition>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([webPage("home", "ProfilePage")]) }} />
      <Hero />
      <Showcase />
    </PageTransition>
  );
}
