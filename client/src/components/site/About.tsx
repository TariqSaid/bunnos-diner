import { SITE } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-cream py-28 text-ink md:py-40">
      <div className="mx-auto grid w-[min(1440px,calc(100%-2rem))] gap-12 md:w-[min(1440px,calc(100%-3.5rem))] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-center md:gap-20">
        <div>
          <h2 className="font-serif text-[clamp(3rem,6.5vw,5.8rem)] leading-[0.92] tracking-[-0.045em]">
            Bunno's Diner, Marrakech
          </h2>
          <p className="mt-7 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink/68">
            A diner in Mhamid Nahda, opposite Jardin de l'Aeroport. The kitchen moves between Italian pasta,
            Mexican plates, Moroccan tagines and Mediterranean salads.
          </p>
          <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink/68">
            Dine in, take a plate with you, or order delivery. Google guests currently rate the table {SITE.ratingValue} from{" "}
            {SITE.reviewCount} reviews.
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] tracking-[0.16em] text-bronze-deep uppercase">
            {SITE.cuisines.map((cuisine) => (
              <li key={cuisine}>{cuisine}</li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              src="/images/atmosphere/terrace.jpg"
              alt="Outdoor table and wooden chairs at Bunno's Diner"
              className="h-full w-full object-cover object-[center_55%]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-[42%] overflow-hidden border-[10px] border-cream md:block">
            <img
              src="/images/atmosphere/entrance.jpg"
              alt="Entrance seating at Bunno's Diner"
              className="aspect-[4/5] h-full w-full object-cover object-[center_40%]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
