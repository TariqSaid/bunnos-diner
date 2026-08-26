import { SITE } from "@/data/site";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

let introHasPlayed = false;

export function Intro({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || introHasPlayed) {
      introHasPlayed = true;
      onDone();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          introHasPlayed = true;
          onDone();
        },
      });

      tl.set(".intro-name", { yPercent: 120 })
        .set(".intro-rule", { scaleX: 0 })
        .set(".intro-city", { yPercent: 110, opacity: 0 })
        .to(".intro-name", { yPercent: 0, duration: 1.15, delay: 0.2 })
        .to(".intro-rule", { scaleX: 1, duration: 0.8 }, "-=0.45")
        .to(".intro-city", { yPercent: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .to(root.current, { yPercent: -100, duration: 1.15, ease: "power4.inOut", delay: 0.35 });
    }, root);

    return () => ctx.revert();
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[50] flex items-center justify-center bg-cream text-ink"
      aria-hidden="true"
    >
      <div className="px-6 text-center">
        <div className="overflow-hidden">
          <p className="intro-name whitespace-nowrap font-serif text-[clamp(2.4rem,6.4vw,5.6rem)] leading-[1.05] tracking-[-0.04em]">
            {SITE.name}
          </p>
        </div>
        <div className="intro-rule mx-auto mt-6 h-px w-24 origin-center bg-bronze" />
        <div className="overflow-hidden">
          <p className="intro-city mt-5 text-[0.7rem] font-medium tracking-[0.28em] text-ink/55 uppercase">
            {SITE.city}
          </p>
        </div>
      </div>
    </div>
  );
}
