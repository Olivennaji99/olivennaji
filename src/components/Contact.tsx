import ContactForm from "@/components/ContactForm";
import { GitHubLogo, Icon, InstagramLogo, LinkedInLogo, WhatsAppLogo, XLogo } from "@/components/icons";
import { contact, site } from "@/data/site";

export const socialLinks = [
  { label: "GitHub", href: site.socials.github, icon: <GitHubLogo /> },
  { label: "LinkedIn", href: site.socials.linkedin, icon: <LinkedInLogo /> },
  { label: "X / Twitter", href: site.socials.x, icon: <XLogo /> },
  { label: "Instagram", href: site.socials.instagram, icon: <InstagramLogo /> },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}`, icon: <WhatsAppLogo /> },
];

export default function Contact() {
  const tel = site.phone.replace(/\s+/g, "");
  const channels = [
    { icon: <Icon name="phone" className="h-5 w-5" />, label: "Hotline", value: site.phone, href: `tel:${tel}` },
    { icon: <WhatsAppLogo className="h-5 w-5" />, label: "WhatsApp / SMS", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
    { icon: <Icon name="mail" className="h-5 w-5" />, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative w-full scroll-mt-28 overflow-hidden pt-8 lg:pt-12">
      <div className="mx-auto w-full max-w-375 px-4 lg:px-8">
        <h2 id="contact-title" className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Contact <span className="text-accent">Me</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-ink/80 sm:text-sm md:text-base">
          {contact.intro}
        </p>

        <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-8">
          <div className="rounded-2xl border border-accent/15 bg-surface p-3.5 shadow-[0_10px_40px_-12px_rgba(47,85,244,0.25)] sm:rounded-4xl sm:p-8 lg:p-10 dark:border-white/10">
            <h3 className="text-lg font-bold text-ink sm:text-xl lg:text-2xl">Send me a message</h3>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-ink/70 sm:text-sm">{contact.formIntro}</p>
            <ContactForm email={site.email} />
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-panel p-4 text-panel-ink transition-colors duration-500 sm:rounded-4xl sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 sm:h-44 sm:w-44" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-48 rotate-[-20deg] rounded-[50%] bg-white/10 sm:h-48 sm:w-56" />
            <div className="relative">
              <h3 className="text-base font-bold leading-snug sm:text-lg">{contact.asideTitle}</h3>
              <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener" : undefined}
                      className="flex items-center gap-3 rounded-xl bg-white/15 px-3 py-2.5 backdrop-blur-sm transition hover:bg-white/25 sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
                    >
                      {c.icon}
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold sm:text-xs">{c.label}</span>
                        <span className="block truncate text-[11px] text-white/85 sm:text-xs">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6">
                <p className="text-xs font-semibold text-white/90">Connect with me</p>
                <ul className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="me noopener"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:scale-110 hover:bg-cream hover:text-[#2f55f4] sm:h-10 sm:w-10"
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
