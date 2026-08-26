import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

function destinationFromClick(event: MouseEvent) {
  const target = (event.target as HTMLElement | null)?.closest("a[href^='#']") as HTMLAnchorElement | null;
  if (!target) return null;
  const href = target.getAttribute("href");
  if (!href || href.length < 2) return null;
  return document.querySelector(href);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const onAnchor = (event: MouseEvent) => {
        const destination = destinationFromClick(event);
        if (!destination) return;
        event.preventDefault();
        destination.scrollIntoView();
      };
      document.addEventListener("click", onAnchor);
      return () => document.removeEventListener("click", onAnchor);
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (event: MouseEvent) => {
      const destination = destinationFromClick(event);
      if (!destination) return;
      event.preventDefault();
      lenis.start();
      lenis.scrollTo(destination, { offset: 0, duration: 1.15 });
    };

    const onLenisControl = (event: Event) => {
      const detail = (event as CustomEvent<"stop" | "start">).detail;
      if (detail === "stop") lenis.stop();
      else lenis.start();
    };

    document.addEventListener("click", onAnchor);
    window.addEventListener("bunnos:lenis", onLenisControl);

    return () => {
      document.removeEventListener("click", onAnchor);
      window.removeEventListener("bunnos:lenis", onLenisControl);
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
