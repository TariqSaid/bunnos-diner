// Sunlit Souk Editorial — saffron/terracotta/olive/cream/charcoal, DM Serif Display + Manrope, editorial asymmetry, food-first photography, restrained motion, no invented restaurant facts.

import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Emblem, NAV_DURATION, REVEAL_EASE } from "./primitives";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-[min(1180px,calc(100%-2rem))] items-center justify-between md:h-[4.25rem] md:w-[min(1180px,calc(100%-3rem))]">
        <a href="#top" className="inline-flex items-center gap-3 text-charcoal" aria-label="Bunno's Diner home">
          <Emblem />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.45rem] tracking-[-0.03em]">Bunno's</span>
            <span className="text-[0.62rem] font-bold tracking-[0.18em] text-charcoal/60 uppercase">Diner</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.7rem] font-bold tracking-[0.14em] text-charcoal/70 uppercase transition-colors hover:text-charcoal after:absolute after:right-0 after:bottom-[-6px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 border-b border-saffron py-1 text-[0.7rem] font-bold tracking-[0.12em] text-charcoal uppercase sm:inline-flex"
          >
            <Phone size={14} strokeWidth={1.7} />
            Call Us
          </a>
          <button
            type="button"
            className="relative z-[60] grid h-11 w-11 place-items-center text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-charcoal/40 lg:hidden"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: NAV_DURATION, ease: REVEAL_EASE }}
              onClick={close}
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile"
              className={cn(
                "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20.5rem)] flex-col bg-cream px-7 pt-24 pb-8 shadow-[-18px_0_40px_rgba(38,34,29,0.12)] lg:hidden",
              )}
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: NAV_DURATION, ease: REVEAL_EASE }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-charcoal/10 py-4 text-[0.8rem] font-bold tracking-[0.14em] text-charcoal uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.phoneHref}
                onClick={close}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3 text-[0.72rem] font-bold tracking-[0.14em] text-charcoal uppercase"
              >
                <Phone size={15} strokeWidth={1.7} />
                Call Us
              </a>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
