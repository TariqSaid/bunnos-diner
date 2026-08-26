import { SITE } from "@/data/site";
import { MagneticButton } from "./MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Hero({ revealed }: { revealed: boolean }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!revealed || !root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.fromTo(
          ".hero-copy > *",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.14, ease: "power3.out", delay: 0.08 },
        );
      }

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (reduce) return;
          gsap.set(".hero-media img", { yPercent: self.progress * 12, scale: 1 + self.progress * 0.08 });
        },
      });
    }, root);
    return () => ctx.revert();
  }, [revealed]);

  return (
    <section ref={root} id="top" className="relative min-h-[100dvh] overflow-hidden bg-ink text-cream">
      <div className="hero-media absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Crispy chicken burger with melted cheese at Bunno's Diner"
          className="kenburns h-full w-full object-cover object-[center_42%]"
          width={1600}
          height={1600}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,14,0.78)_0%,rgba(18,16,14,0.38)_46%,rgba(18,16,14,0.18)_100%),linear-gradient(180deg,rgba(18,16,14,0.2)_0%,rgba(18,16,14,0.55)_100%)]" />
      </div>

      <div className={`hero-copy relative z-[1] mx-auto flex min-h-[100dvh] w-[min(1440px,calc(100%-2rem))] flex-col justify-end gap-8 pt-24 pb-16 md:w-[min(1440px,calc(100%-3.5rem))] md:pb-20 ${revealed ? "" : "opacity-0"}`}>
        <p className="max-w-none font-serif text-[clamp(1.15rem,2.4vw,1.6rem)] italic leading-[1.15] text-bronze">
          {SITE.name}
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(3.1rem,9vw,8.2rem)] leading-[0.9] tracking-[-0.045em]">
          {SITE.headline}
        </h1>
        <p className="max-w-[34rem] text-[1rem] leading-relaxed text-cream/74">{SITE.lede}</p>
        <div className="flex flex-wrap gap-3">
          <MagneticButton href="#menu">Explore Menu</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Visit Us
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
