import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";
import { breadcrumbs, jsonLd, pageMetadata, projectList, webPage } from "@/lib/seo";

export const metadata = pageMetadata("projects");

export default function ProjectsPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([webPage("projects", "CollectionPage"), breadcrumbs("projects"), projectList()]),
        }}
      />
      <Projects />
    </PageTransition>
  );
}
