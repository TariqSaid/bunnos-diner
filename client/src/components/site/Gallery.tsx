import { GALLERY } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { useLightbox } from "./Lightbox";

export function Gallery() {
  const { openGallery } = useLightbox();

  return (
    <section id="gallery" className="bg-cream py-28 text-ink md:py-40">
      <div className="mx-auto w-[min(1440px,calc(100%-2rem))] md:w-[min(1440px,calc(100%-3.5rem))]">
        <h2 className="max-w-[10ch] font-serif text-[clamp(3rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.045em]">
          From the diner.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-flow-dense md:gap-4">
          {GALLERY.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => openGallery(index)}
              className={cn(
                "group relative overflow-hidden bg-cream-deep",
                item.span,
                index === 0 ? "min-h-[22rem] md:min-h-[36rem]" : "min-h-[16rem] md:min-h-[22rem]",
                index === 9 ? "min-h-[18rem] md:min-h-[28rem]" : "",
              )}
              aria-label={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.045]"
                style={{ objectPosition: item.objectPosition ?? "center" }}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                decoding="async"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
              <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 font-serif text-[1.35rem] text-cream opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
