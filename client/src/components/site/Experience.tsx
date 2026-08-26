import { SITE } from "@/data/site";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WORDS = SITE.experienceTitle.split(" ");

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) return;

      gsap.fromTo(
        ".exp-media img",
        { scale: 1.18, yPercent: -8 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".exp-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-title",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".exp-body",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-body",
            start: "top 85%",
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="relative min-h-[100dvh] overflow-hidden bg-ink text-cream">
      <div className="exp-media absolute inset-0">
        <img
          src="/images/atmosphere/dining.jpg"
          alt="Dining room at Bunno's Diner, Marrakech"
          className="h-full w-full object-cover object-[center_42%]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-ink/58" />
      </div>
      <div className="relative z-[1] mx-auto flex min-h-[100dvh] w-[min(1440px,calc(100%-2rem))] flex-col justify-end pb-20 md:w-[min(1440px,calc(100%-3.5rem))] md:pb-28">
        <h2 className="exp-title max-w-5xl font-serif text-[clamp(3.2rem,8vw,7.4rem)] leading-[0.92] tracking-[-0.045em]">
          {WORDS.map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 align-bottom">
              <span className="exp-word inline-block">
                {word}
                {index < WORDS.length - 1 ? "\u00a0" : ""}
              </span>
            </span>
          ))}
        </h2>
        <p className="exp-body mt-8 max-w-[38rem] text-[1.05rem] leading-relaxed text-cream/76">{SITE.experienceBody}</p>
      </div>
    </section>
  );
}
