export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span: string;
  objectPosition?: string;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/atmosphere/dining-side.jpg",
    alt: "Dining tables, orange chairs and the service counter at Bunno's Diner",
    caption: "The room",
    span: "md:col-span-6 md:row-span-2",
    objectPosition: "center 45%",
  },
  {
    src: "/images/food/feast.jpg",
    alt: "Tagines, bread and pasta shared across a Bunno's table",
    caption: "The table",
    span: "md:col-span-6",
    objectPosition: "center",
  },
  {
    src: "/images/food/pastry.jpg",
    alt: "Golden puff pastry on a dark platter",
    caption: "From the oven",
    span: "md:col-span-6",
    objectPosition: "center 40%",
  },
  {
    src: "/images/food/kefta-eggs.jpg",
    alt: "Kefta and eggs in tomato sauce",
    caption: "Tagine",
    span: "md:col-span-4",
    objectPosition: "center 40%",
  },
  {
    src: "/images/atmosphere/storefront.jpg",
    alt: "Bunno's Diner storefront and outdoor seating in Marrakech",
    caption: "Mhamid",
    span: "md:col-span-8",
    objectPosition: "center 40%",
  },
  {
    src: "/images/atmosphere/table.jpg",
    alt: "Breakfast bowls, bread and drinks at a Bunno's table",
    caption: "Breakfast",
    span: "md:col-span-5 md:row-span-2",
    objectPosition: "center 40%",
  },
  {
    src: "/images/food/sandwich-board.jpg",
    alt: "Toasted baguette with melted cheese, fries and salad",
    caption: "Sandwich",
    span: "md:col-span-7",
    objectPosition: "center 35%",
  },
  {
    src: "/images/atmosphere/counter.jpg",
    alt: "Service counter with fresh fruit, espresso machine and menus",
    caption: "The counter",
    span: "md:col-span-6",
    objectPosition: "center 40%",
  },
  {
    src: "/images/food/crepe-mint.jpg",
    alt: "Chocolate crepes with banana on a mint plate",
    caption: "Crepes",
    span: "md:col-span-6",
    objectPosition: "center 45%",
  },
  {
    src: "/images/atmosphere/street.jpg",
    alt: "Evening street outside Bunno's Diner in Marrakech",
    caption: "Dusk",
    span: "md:col-span-12",
    objectPosition: "center 30%",
  },
];
