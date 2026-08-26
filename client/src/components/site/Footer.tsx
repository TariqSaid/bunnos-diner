import { NAV_LINKS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex w-[min(1440px,calc(100%-2rem))] flex-col gap-10 border-t border-cream/10 py-12 md:w-[min(1440px,calc(100%-3.5rem))] md:flex-row md:items-start md:justify-between">
        <a href="#top" className="font-serif text-[1.8rem] tracking-[-0.03em]">
          {SITE.name}
        </a>
        <nav className="flex flex-col gap-3 text-[0.72rem] tracking-[0.18em] uppercase" aria-label="Footer">
          {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
            <a key={link.href} href={link.href} className="text-cream/65 hover:text-bronze">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="max-w-[18rem] text-[0.92rem] leading-relaxed text-cream/60">
          <p>{SITE.city}</p>
          <p className="mt-2">{SITE.neighborhood}</p>
          <p className="mt-4">
            <a href={SITE.instagramHref} className="text-bronze hover:text-cream" target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(1440px,calc(100%-2rem))] border-t border-cream/10 py-6 md:w-[min(1440px,calc(100%-3.5rem))]">
        <p className="text-[0.78rem] leading-relaxed text-cream/50">© 2026 Bunno's Diner. All rights reserved.</p>
        <p className="mt-1.5 text-[0.78rem] leading-relaxed text-cream/50">Design & development by T_Dreamwalker</p>
      </div>
    </footer>
  );
}
