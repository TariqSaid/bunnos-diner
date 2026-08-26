import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function CinematicBridge() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduce || !desktop || !root.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(".bridge-frame", { scale: 1.08, yPercent: 0 }, { scale: 0.72, yPercent: 6, duration: 1, ease: "none" }, 0)
        .fromTo(".bridge-wash", { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "none" }, 0.15)
        .fromTo(".bridge-copy", { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "none" }, 0.45)
        .fromTo(".bridge-shift", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }, 0.35);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative hidden min-h-[100dvh] overflow-hidden bg-ink lg:block" aria-hidden="true">
      <div className="bridge-wash absolute inset-0 bg-cream opacity-0" />
      <div className="bridge-frame absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full object-cover object-[center_42%]"
        />
        <img
          src="/images/food/tagine.jpg"
          alt=""
          className="bridge-shift absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-0"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>
      <div className="bridge-copy relative z-[1] flex min-h-[100dvh] items-end px-[8%] pb-24">
        <p className="max-w-[12ch] font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.04em] text-cream">
          From the grill to the tagine.
        </p>
      </div>
    </section>
  );
}
