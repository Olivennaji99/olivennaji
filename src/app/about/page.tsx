import { About } from "@/components/About";
import Tools from "@/components/Tools";
import PageTransition from "@/components/PageTransition";
import { breadcrumbs, jsonLd, pageMetadata, webPage } from "@/lib/seo";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([webPage("about", "AboutPage"), breadcrumbs("about")]) }}
      />
      <About />
      <Tools />
    </PageTransition>
  );
}
