import type { Metadata } from "next";
import { brandName, identity, pageById, projects, services, site, skills } from "@/data/site";

/* Per-page <head> tags and schema.org structured data, all built from data/site.ts. */

const abs = (path: string) => `${site.url}${encodeURI(path)}`;

export const ids = {
  website: `${site.url}/#website`,
  person: `${site.url}/#person`,
};

/** Title, description, canonical URL and social-card tags for one page. */
export function pageMetadata(pageId: string): Metadata {
  const page = pageById(pageId);
  const isHome = page.path === "/";
  const fullTitle = page.title;
  // Set here (not just inherited) because a page's own openGraph/twitter replaces the parent's
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}, ${site.role}` };
  return {
    // Titles in data/site.ts are written in full (≤ 60 characters), so no suffix is added
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: isHome ? "profile" : "website",
      url: page.path,
      siteName: brandName,
      locale: "en_NG",
      title: fullTitle,
      description: page.description,
      images: [image],
      ...(isHome && {
        firstName: identity.givenName,
        lastName: identity.familyName,
        username: site.socials.github.split("/").pop(),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [image],
    },
  };
}

/** Site-wide graph: the website and the person behind it. Rendered on every page. */
export function siteGraph() {
  return [
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: site.url,
      name: brandName,
      alternateName: [site.name, `${site.name} Portfolio`, identity.fullName],
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": ids.person },
    },
    {
      "@type": "Person",
      "@id": ids.person,
      name: site.name,
      alternateName: identity.alternateNames,
      givenName: identity.givenName,
      additionalName: identity.additionalName,
      familyName: identity.familyName,
      // schema.org has no "nickname"; alternateName (above) already includes it
      jobTitle: identity.jobTitles,
      description: site.description,
      url: site.url,
      image: abs(identity.portrait),
      email: `mailto:${site.email}`,
      telephone: site.phone.replace(/\s+/g, ""),
      nationality: { "@type": "Country", name: "Nigeria" },
      address: { "@type": "PostalAddress", addressCountry: "NG" },
      worksFor: { "@type": "Organization", name: identity.worksFor.name },
      hasOccupation: {
        "@type": "Occupation",
        name: identity.worksFor.role,
        occupationLocation: { "@type": "Country", name: "Nigeria" },
        skills: skills.map((s) => s.name).join(", "),
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: identity.alumniOf },
      knowsAbout: [
        "Web development",
        "Full-stack development",
        "Frontend development",
        "Backend development",
        "REST APIs",
        "E-commerce platforms",
        "Responsive web design",
        "Search engine optimisation",
        ...skills.map((s) => s.name),
      ],
      knowsLanguage: "en",
      sameAs: Object.values(site.socials).filter(Boolean),
    },
  ];
}

/** Breadcrumb trail for inner pages (shown under the result in Google). */
export function breadcrumbs(pageId: string) {
  const page = pageById(pageId);
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: page.label, item: abs(page.path) },
    ],
  };
}

/** The web page itself, linked to the person and website. */
export function webPage(pageId: string, type = "WebPage") {
  const page = pageById(pageId);
  return {
    "@type": type,
    "@id": `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.person },
    ...(type === "ProfilePage" && { mainEntity: { "@id": ids.person } }),
    primaryImageOfPage: abs(identity.portrait),
  };
}

export function projectList() {
  return {
    "@type": "ItemList",
    name: `Projects by ${site.name}`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": p.repo ? "SoftwareSourceCode" : "CreativeWork",
        name: p.title,
        description: p.text,
        url: p.live || `${abs("/projects")}#${p.slug}`,
        ...(p.repo && { codeRepository: p.repo, programmingLanguage: p.stack }),
        keywords: p.stack.join(", "),
        image: abs(`/images/projects/${p.image}.png`),
        creator: { "@id": ids.person },
      },
    })),
  };
}

export function serviceCatalog() {
  return {
    "@type": "OfferCatalog",
    name: `Web development services by ${site.name}`,
    itemListElement: services.groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.text,
          serviceType: g.title,
          provider: { "@id": ids.person },
          areaServed: "Worldwide",
        },
      })),
    ),
  };
}

/** <script type="application/ld+json"> payload for a list of graph nodes. */
export function jsonLd(nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}
