import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About, Process } from "@/components/About";
import Showcase from "@/components/Showcase";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pages, { Page } from "@/components/Pages";
import { brandName, pages, projects, sectionPage, site, skills } from "@/data/site";

// Pick the page from the URL hash before anything paints (e.g. /#contact opens Contact)
const pageScript = `(function(){try{var m=${JSON.stringify(sectionPage)};var h=decodeURIComponent(location.hash.slice(1));document.documentElement.setAttribute("data-page-active",m[h]||${JSON.stringify(pages[0].id)})}catch(e){}})()`;

// Reveal only the active page (the hiding rule lives in globals.css)
const pageCss =
  pages.map((p) => `html[data-page-active="${p.id}"] [data-page="${p.id}"][data-page]`).join(",") + "{display:block}";

// Structured data so Google understands who you are and what you build
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: brandName,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Enugu", addressCountry: "NG" },
      knowsAbout: skills.map((s) => s.name),
      sameAs: Object.values(site.socials),
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      mainEntity: { "@id": `${site.url}/#person` },
      isPartOf: { "@id": `${site.url}/#website` },
    },
    {
      "@type": "ItemList",
      name: "Projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.text,
          url: `${site.url}/#${p.slug}`,
          keywords: p.stack.join(", "),
          creator: { "@id": `${site.url}/#person` },
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <script dangerouslySetInnerHTML={{ __html: pageScript }} />
      <Pages>
        <Header />
        <main id="main">
          <Page id="home">
            <Hero />
            <Showcase />
          </Page>
          <Page id="services">
            <Services />
            <Process />
          </Page>
          <Page id="about">
            <About />
            <Tools />
          </Page>
          <Page id="projects">
            <Projects />
          </Page>
          <Page id="contact">
            <Contact />
          </Page>
        </main>
        <Footer />
      </Pages>
    </>
  );
}
