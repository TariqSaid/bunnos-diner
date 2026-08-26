import { formatPrice, MENU_BOARDS, MENU_CATEGORIES, type MenuCategoryId, type MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useLightbox } from "./Lightbox";

export function Menu() {
  const [active, setActive] = useState<MenuCategoryId>("signature");
  const reduce = useReducedMotion();
  const { openMenu, openGallery } = useLightbox();
  const category = MENU_CATEGORIES.find((item) => item.id === active) ?? MENU_CATEGORIES[0];
  const visual = useMemo(() => category.items.filter((item) => item.image), [category]);
  const listed = category.items;

  return (
    <section id="menu" className="relative bg-cream py-28 text-ink md:py-40">
      <div className="mx-auto w-[min(1440px,calc(100%-2rem))] md:w-[min(1440px,calc(100%-3.5rem))]">
        <h2 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.045em]">
          The table, photographed.
        </h2>
        <p className="mt-6 max-w-[42ch] text-[1rem] leading-relaxed text-ink/68">
          Names and prices come from the diner's own boards. Open a photo to read the full menu as printed.
        </p>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 md:mt-16 md:flex-wrap md:overflow-visible">
          {MENU_CATEGORIES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                "shrink-0 border px-4 py-2 text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                active === item.id ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink/70 hover:border-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {visual.length ? (
                visual.map((item, index) => (
                  <MenuVisual
                    key={item.id}
                    item={item}
                    index={index}
                    onOpen={() => {
                      const galleryIndex = GALLERY_INDEX[item.image ?? ""];
                      if (typeof galleryIndex === "number") openGallery(galleryIndex);
                    }}
                  />
                ))
              ) : (
                <button type="button" className="col-span-2 aspect-[16/10] overflow-hidden bg-cream-deep" onClick={() => openMenu(1)}>
                  <img src="/images/menu/board-02.jpg" alt="Breakfast menu board" className="h-full w-full object-cover" />
                </button>
              )}
            </div>

            <div>
              <p className="max-w-[42ch] text-[0.95rem] leading-relaxed text-ink/62">{category.note}</p>
              <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {listed.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <div>
                      <p className="font-serif text-[1.45rem] leading-tight tracking-[-0.03em]">{item.name}</p>
                      {item.description ? (
                        <p className="mt-1 max-w-[36ch] text-[0.86rem] leading-relaxed text-ink/58">{item.description}</p>
                      ) : null}
                    </div>
                    {formatPrice(item.price) ? (
                      <p className="shrink-0 text-[0.78rem] tracking-[0.12em] text-bronze-deep">{formatPrice(item.price)}</p>
                    ) : null}
                  </motion.li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openMenu(0)}
                className="mt-8 text-[0.72rem] tracking-[0.18em] text-ink uppercase underline decoration-bronze decoration-1 underline-offset-8"
              >
                View printed menus
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="hidden">{MENU_BOARDS.length}</span>
    </section>
  );
}

const GALLERY_INDEX: Record<string, number> = {
  "/images/atmosphere/dining-side.jpg": 0,
  "/images/food/feast.jpg": 1,
  "/images/food/pastry.jpg": 2,
  "/images/food/kefta-eggs.jpg": 3,
  "/images/atmosphere/storefront.jpg": 4,
  "/images/atmosphere/table.jpg": 5,
  "/images/food/sandwich-board.jpg": 6,
  "/images/atmosphere/counter.jpg": 7,
  "/images/food/crepe-mint.jpg": 8,
  "/images/atmosphere/street.jpg": 9,
};

function MenuVisual({ item, index, onOpen }: { item: MenuItem; index: number; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative overflow-hidden bg-cream-deep",
        index === 0 ? "col-span-2 aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/5]",
        index === 1 ? "md:-translate-y-6" : "",
      )}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
        style={{ objectPosition: item.objectPosition ?? "center" }}
        sizes="(min-width: 1024px) 42vw, 92vw"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/28" />
      <span className="absolute inset-x-0 bottom-0 translate-y-3 px-4 py-4 text-left text-cream opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
        <span className="font-serif text-[1.4rem] leading-tight">{item.name}</span>
      </span>
    </button>
  );
}
