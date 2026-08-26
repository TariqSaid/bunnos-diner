// Sunlit Souk Editorial — saffron/terracotta/olive/cream/charcoal, DM Serif Display + Manrope, editorial asymmetry, food-first photography, restrained motion, no invented restaurant facts.

import {
  HIGHLIGHT_IMAGES,
  MENU_IMAGES,
  POPULAR_DISHES,
  REVIEW_THEMES,
  REVIEWS,
  SITE,
} from "@/data/site";
import { Phone } from "lucide-react";
import { useLightbox } from "./Lightbox";
import { Emblem, FallbackImage, HoverMedia, Reveal, RevealGroup, RevealItem } from "./primitives";

export function Hero() {
  const hero = HIGHLIGHT_IMAGES[0];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-charcoal text-cream">
      <div className="absolute inset-0" aria-hidden="true">
        <FallbackImage
          src={hero.src}
          alt=""
          className="h-full w-full object-cover object-[center_30%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,34,29,0.72)_0%,rgba(38,34,29,0.38)_48%,rgba(38,34,29,0.16)_100%),linear-gradient(0deg,rgba(38,34,29,0.42)_0%,transparent_46%)]" />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[100dvh] w-[min(1180px,calc(100%-2rem))] flex-col justify-end gap-10 pt-16 pb-16 md:w-[min(1180px,calc(100%-3rem))] md:flex-row md:items-end md:justify-between md:pt-20 md:pb-24">
        <Reveal className="max-w-[38rem]">
          <h1 className="font-serif text-[clamp(2.75rem,8vw,5.35rem)] leading-[0.95] tracking-[-0.04em]">
            Good Food.
            <br />
            Good Mood.
            <br />
            Bunno's.
          </h1>
          <p className="mt-6 max-w-[28rem] text-[0.98rem] leading-relaxed text-cream/80">
            Fresh food, friendly service, and a cozy table in Marrakech Lmhamid Nahda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-saffron px-6 text-[0.72rem] font-bold tracking-[0.14em] text-charcoal uppercase transition-transform hover:bg-[#f0ad4a] active:scale-[0.98]"
            >
              View Menu
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/50 px-6 text-[0.72rem] font-bold tracking-[0.14em] text-cream uppercase transition-colors hover:border-saffron hover:text-saffron active:scale-[0.98]"
            >
              <Phone size={15} strokeWidth={1.7} />
              Call Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="w-[min(100%,13.5rem)] border border-cream/30 bg-charcoal/35 p-4 backdrop-blur-md">
          <p className="font-serif text-[1.15rem] leading-snug text-saffron">{SITE.ratingBadge}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] items-center gap-14 md:w-[min(1180px,calc(100%-3rem))] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-20">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-charcoal">
            Fresh food.
            <br />
            Friendly service.
          </h2>
          <p className="mt-6 max-w-[38ch] text-[0.98rem] leading-relaxed text-charcoal/72">
            Bunno's Diner is a restaurant in Marrakech Lmhamid Nahda, en face de Jardin de l'Aéroport. A
            cozy atmosphere and affordable dining at {SITE.priceRange}.
          </p>
        </Reveal>

        <RevealGroup className="relative mx-auto w-full max-w-[32rem] pb-6 md:pb-16 md:justify-self-end">
          <RevealItem className="relative z-[1] mr-[12%] aspect-[4/5] overflow-hidden">
            <HoverMedia src={HIGHLIGHT_IMAGES[1].src} alt={HIGHLIGHT_IMAGES[1].alt} caption="From the diner" />
          </RevealItem>
          <RevealItem className="absolute right-0 bottom-[-10%] z-[2] hidden w-[46%] aspect-[3/4] overflow-hidden md:block">
            <HoverMedia src={HIGHLIGHT_IMAGES[2].src} alt={HIGHLIGHT_IMAGES[2].alt} caption="From the diner" />
          </RevealItem>
        </RevealGroup>
      </div>

      <RevealGroup className="mx-auto mt-20 grid w-[min(1180px,calc(100%-2rem))] grid-cols-1 gap-10 border-t border-charcoal/15 pt-12 sm:grid-cols-2 md:mt-28 md:w-[min(1180px,calc(100%-3rem))] lg:grid-cols-4 lg:gap-8">
        {[
          { title: "Fresh food", body: "Food made fresh, served without extra claims." },
          { title: "Friendly service", body: "Guests mention kind service and a friendly owner." },
          { title: "Cozy atmosphere", body: "A calm, cozy place for a meal in Lmhamid Nahda." },
          { title: "Affordable dining", body: SITE.priceRange },
        ].map((item) => (
          <RevealItem key={item.title}>
            <h3 className="font-serif text-[1.55rem] tracking-[-0.03em] text-charcoal">{item.title}</h3>
            <p className="mt-3 max-w-[22ch] text-[0.9rem] leading-relaxed text-charcoal/68">{item.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

export function PopularDishes() {
  const { openGallery } = useLightbox();

  return (
    <section id="dishes" className="scroll-mt-24 bg-cream pb-24 md:pb-32">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))] md:w-[min(1180px,calc(100%-3rem))]">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-charcoal">
            Tagine, lasagna,
            <br />
            chocolate crepes.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[0.98rem] leading-relaxed text-charcoal/72">
            These are the dishes named in the supplied guest notes. The menu boards below are the full picture.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {POPULAR_DISHES.map((dish, index) => {
            const image = HIGHLIGHT_IMAGES[dish.imageIndex];
            return (
              <RevealItem
                key={dish.name}
                className={index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-8" : ""}
              >
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={() => openGallery(dish.imageIndex)}
                  aria-label={`Open photo for ${dish.name}`}
                >
                  <div className={`overflow-hidden ${index === 1 ? "aspect-[5/6]" : "aspect-[4/5]"}`}>
                    <HoverMedia src={image.src} alt={image.alt} caption="From the diner" />
                  </div>
                </button>
                <h3 className="mt-5 font-serif text-[1.85rem] tracking-[-0.03em] text-charcoal">{dish.name}</h3>
                <p className="mt-2 max-w-[28ch] text-[0.9rem] leading-relaxed text-charcoal/68">{dish.note}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function MenuSection() {
  const { openMenu } = useLightbox();

  return (
    <section id="menu" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] items-start gap-12 md:w-[min(1180px,calc(100%-3rem))] md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-16">
        <Reveal className="md:sticky md:top-28">
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-charcoal">
            The menu,
            <br />
            as it is written.
          </h2>
          <p className="mt-5 max-w-[36ch] text-[0.98rem] leading-relaxed text-charcoal/72">
            Four supplied menu boards. Open any image to read it. Prices are not listed here.
          </p>
          <button
            type="button"
            onClick={() => openMenu(0)}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 text-[0.72rem] font-bold tracking-[0.14em] text-cream uppercase transition-colors hover:bg-terracotta active:scale-[0.98]"
          >
            Open menu
          </button>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
          {MENU_IMAGES.map((image, index) => (
            <RevealItem key={image.src} className={index % 2 === 1 ? "sm:mt-10" : ""}>
              <button
                type="button"
                onClick={() => openMenu(index)}
                className="block aspect-[3/4] w-full overflow-hidden"
                aria-label={`Open ${image.caption}`}
              >
                <HoverMedia src={image.src} alt={image.alt} caption={image.caption} />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Gallery() {
  const { openGallery } = useLightbox();

  return (
    <section id="gallery" className="scroll-mt-24 bg-olive py-24 text-cream md:py-32">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))] md:w-[min(1180px,calc(100%-3rem))]">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
            From the table.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[0.98rem] leading-relaxed text-cream/75">
            Eighteen photos from the diner: food, presentation, and the room itself.
          </p>
        </Reveal>

        <div className="mt-14 columns-2 gap-3 md:columns-3 lg:columns-4">
          {HIGHLIGHT_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={(index % 4) * 0.06} className="mb-3 break-inside-avoid">
              <button
                type="button"
                onClick={() => openGallery(index)}
                className="block w-full overflow-hidden"
                aria-label={`Open gallery photo ${index + 1}`}
                style={{ aspectRatio: index % 5 === 0 ? "4 / 5" : index % 3 === 0 ? "3 / 4" : "5 / 6" }}
              >
                <HoverMedia src={image.src} alt={image.alt} caption={image.caption} />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-14 md:w-[min(1180px,calc(100%-3rem))] md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-16">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-charcoal">
            {SITE.ratingStat}
          </h2>
          <ul className="mt-8 flex max-w-[28rem] flex-wrap gap-x-4 gap-y-2 text-[0.8rem] text-terracotta">
            {REVIEW_THEMES.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
        </Reveal>

        <RevealGroup className="grid gap-5">
          {REVIEWS.map((review, index) => (
            <RevealItem
              key={review.name}
              className={`border border-charcoal/12 bg-cream p-6 md:p-7 ${index === 1 ? "md:ml-10" : ""} ${index === 2 ? "md:ml-4" : ""}`}
            >
              <p className="font-serif text-[1.15rem] leading-snug text-charcoal">“{review.quote}”</p>
              <p className="mt-5 text-[0.72rem] font-bold tracking-[0.12em] text-terracotta uppercase">
                {review.name}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="visit" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] items-start gap-12 md:w-[min(1180px,calc(100%-3rem))] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-charcoal">
            Find Bunno's.
          </h2>
          <dl className="mt-10 max-w-[36rem] space-y-7">
            <div>
              <dt className="text-[0.68rem] font-bold tracking-[0.14em] text-terracotta uppercase">Address</dt>
              <dd className="mt-2 text-[1rem] leading-relaxed text-charcoal">{SITE.address}</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold tracking-[0.14em] text-terracotta uppercase">Plus code</dt>
              <dd className="mt-2 text-[1rem] text-charcoal">{SITE.plusCode}</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold tracking-[0.14em] text-terracotta uppercase">Phone</dt>
              <dd className="mt-2">
                <a
                  href={SITE.phoneHref}
                  className="text-[1.15rem] text-charcoal underline decoration-saffron decoration-2 underline-offset-4 hover:text-terracotta"
                >
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold tracking-[0.14em] text-terracotta uppercase">Hours</dt>
              <dd className="mt-2 text-[1rem] leading-relaxed text-charcoal">
                {SITE.hours} {SITE.hoursNote}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-bold tracking-[0.14em] text-terracotta uppercase">Services</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {SITE.services.map((service) => (
                  <span
                    key={service}
                    className="border border-charcoal/15 px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.08em] text-charcoal uppercase"
                  >
                    {service}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <a
            href={SITE.directionsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 text-[0.72rem] font-bold tracking-[0.14em] text-cream uppercase transition-colors hover:bg-terracotta active:scale-[0.98]"
          >
            Get directions
          </a>
        </Reveal>

        <Reveal className="overflow-hidden">
          <div className="aspect-[4/5] md:aspect-[5/6]">
            <HoverMedia src={HIGHLIGHT_IMAGES[6].src} alt={HIGHLIGHT_IMAGES[6].alt} caption="Marrakech Lmhamid Nahda" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-charcoal py-24 text-cream md:py-28">
      <Reveal className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-8 md:w-[min(1180px,calc(100%-3rem))] md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[16ch] font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em]">
          {SITE.finalCta}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-saffron px-6 text-[0.72rem] font-bold tracking-[0.14em] text-charcoal uppercase hover:bg-[#f0ad4a] active:scale-[0.98]"
          >
            Call Us
          </a>
          <a
            href={SITE.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 px-6 text-[0.72rem] font-bold tracking-[0.14em] text-cream uppercase hover:border-saffron hover:text-saffron active:scale-[0.98]"
          >
            Get directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-10 border-t border-cream/10 py-12 md:w-[min(1180px,calc(100%-3rem))] md:flex-row md:items-start md:justify-between">
        <a href="#top" className="inline-flex items-center gap-3" aria-label="Back to Bunno's Diner home">
          <Emblem />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.45rem] tracking-[-0.03em]">Bunno's</span>
            <span className="mt-1 text-[0.62rem] font-bold tracking-[0.16em] text-cream/55 uppercase">
              Good Food. Good Mood.
            </span>
          </span>
        </a>
        <div className="max-w-[26rem] text-[0.9rem] leading-relaxed text-cream/70">
          <p>{SITE.address}</p>
          <p className="mt-2">{SITE.plusCode}</p>
          <p className="mt-2">
            <a href={SITE.phoneHref} className="text-saffron underline decoration-saffron/40 underline-offset-4">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            {SITE.hours} {SITE.hoursNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
