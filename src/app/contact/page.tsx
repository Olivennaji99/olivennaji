import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";
import { breadcrumbs, jsonLd, pageMetadata, webPage } from "@/lib/seo";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([webPage("contact", "ContactPage"), breadcrumbs("contact")]) }}
      />
      <Contact />
    </PageTransition>
  );
}
