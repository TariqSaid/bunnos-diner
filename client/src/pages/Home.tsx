import { About } from "@/components/site/About";
import { CinematicBridge } from "@/components/site/CinematicBridge";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { LightboxProvider } from "@/components/site/Lightbox";
import { Location } from "@/components/site/Location";
import { Menu } from "@/components/site/Menu";
import { Navbar } from "@/components/site/Navbar";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { useCallback, useState } from "react";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const onIntroDone = useCallback(() => setRevealed(true), []);

  return (
    <SmoothScroll>
      <LightboxProvider>
        <div className="overflow-x-hidden bg-ink text-cream">
          <div className="grain" aria-hidden="true" />
          {!revealed ? <Intro onDone={onIntroDone} /> : null}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:bg-bronze focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <Navbar revealed={revealed} />
          <main id="main">
            <Hero revealed={revealed} />
            <CinematicBridge />
            <Menu />
            <Experience />
            <Gallery />
            <About />
            <Location />
          </main>
          <Footer />
        </div>
      </LightboxProvider>
    </SmoothScroll>
  );
}
