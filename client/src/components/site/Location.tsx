import { SITE } from "@/data/site";
import { MagneticButton } from "./MagneticButton";

export function Location() {
  return (
    <section id="contact" className="bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto grid w-[min(1440px,calc(100%-2rem))] gap-14 md:w-[min(1440px,calc(100%-3.5rem))] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-20">
        <div>
          <h2 className="font-serif text-[clamp(3rem,6.5vw,5.8rem)] leading-[0.92] tracking-[-0.045em]">
            Find the table.
          </h2>
          <p className="mt-6 max-w-[34ch] text-[1.05rem] leading-relaxed text-cream/70">
            {SITE.name}
            <br />
            {SITE.neighborhood}
            <br />
            {SITE.city}
          </p>
          <p className="mt-8">
            <a href={SITE.phoneHref} className="font-serif text-[2rem] tracking-[-0.03em] text-bronze">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a href={SITE.emailHref} className="text-[0.95rem] text-cream/70 underline decoration-bronze/50 underline-offset-4">
              {SITE.email}
            </a>
          </p>
          <div className="mt-10 grid max-w-[34rem] grid-cols-1 gap-3 sm:grid-cols-2">
            <MagneticButton href={SITE.directionsHref} className="flex w-full justify-between" external>
              Get Directions
            </MagneticButton>
            <MagneticButton href={SITE.phoneHref} variant="ghost" className="flex w-full justify-between">
              Call
            </MagneticButton>
            <MagneticButton href={SITE.whatsappHref} variant="ghost" className="flex w-full justify-between" external>
              WhatsApp
            </MagneticButton>
            <MagneticButton href={SITE.mapsHref} variant="ghost" className="flex w-full justify-between" external>
              Google Maps
            </MagneticButton>
          </div>
        </div>
        <div className="aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[32rem]">
          <img
            src="/images/atmosphere/storefront-night.jpg"
            alt="Bunno's Diner storefront at night in Marrakech"
            className="h-full w-full object-cover object-[center_42%]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
