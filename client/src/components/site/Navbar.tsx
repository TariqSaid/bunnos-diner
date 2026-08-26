import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Navbar({ revealed }: { revealed: boolean }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setCompact(value > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("bunnos:lenis", { detail: open ? "stop" : "start" }));
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("bunnos:lenis", { detail: "start" }));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay =
    typeof document === "undefined"
      ? null
      : createPortal(
          <AnimatePresence>
            {open ? (
              <motion.nav
                id="mobile-navigation"
                aria-label="Mobile"
                className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-7 pt-24 pb-10 lg:hidden"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              >
                <div>
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={reduce ? false : { y: 36, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.08 + index * 0.07, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                      className="block border-b border-cream/10 py-4 font-serif text-[2.6rem] leading-[1.15] tracking-[-0.03em] text-cream"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <a
                  href={SITE.phoneHref}
                  onClick={() => setOpen(false)}
                  className="text-[0.78rem] tracking-[0.18em] text-bronze uppercase"
                >
                  {SITE.phoneDisplay}
                </a>
              </motion.nav>
            ) : null}
          </AnimatePresence>,
          document.body,
        );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 transition-[background,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        open ? "z-[60]" : "z-40",
        revealed ? "opacity-100" : "pointer-events-none opacity-0",
        compact && !open ? "bg-ink/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-[min(1440px,calc(100%-2rem))] items-center justify-between md:w-[min(1440px,calc(100%-3.5rem))]",
          compact ? "h-14 md:h-16" : "h-16 md:h-[4.5rem]",
        )}
      >
        <a href="#top" className="relative z-[61] font-serif text-[1.45rem] tracking-[-0.03em] text-cream md:text-[1.65rem]">
          Bunno's Diner
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-underline pb-1 text-[0.68rem] tracking-[0.2em] text-cream/78 uppercase">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="nav-underline hidden pb-1 text-[0.68rem] tracking-[0.2em] text-bronze uppercase sm:inline"
          >
            Visit
          </a>
          <button
            type="button"
            className="relative z-[61] grid h-11 w-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-cream transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-cream transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>
      {overlay}
    </header>
  );
}
