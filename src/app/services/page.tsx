import Services from "@/components/Services";
import { Process } from "@/components/About";
import PageTransition from "@/components/PageTransition";
import { breadcrumbs, jsonLd, pageMetadata, serviceCatalog, webPage } from "@/lib/seo";

export const metadata = pageMetadata("services");

export default function ServicesPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([webPage("services"), breadcrumbs("services"), serviceCatalog()]) }}
      />
      <Services />
      <Process />
    </PageTransition>
  );
}
