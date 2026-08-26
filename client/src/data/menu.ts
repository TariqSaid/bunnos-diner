export type MenuCategoryId =
  | "signature"
  | "breakfast"
  | "lunch"
  | "dinner"
  | "desserts"
  | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  featured?: boolean;
  aspect?: "portrait" | "landscape" | "square";
  objectPosition?: string;
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  note?: string;
  items: MenuItem[];
};

export const MENU_BOARDS = [
  { src: "/images/menu/board-01.jpg", alt: "Bunno's Diner menu, drinks desserts salads and mains", caption: "Menu board" },
  { src: "/images/menu/board-02.jpg", alt: "Bunno's Diner breakfast juices and contact menu", caption: "Breakfast board" },
  { src: "/images/menu/board-03.jpg", alt: "Bunno's Diner printed menu with prices", caption: "Price list" },
  { src: "/images/menu/board-04.jpg", alt: "Bunno's sidewalk chalkboard with daily offers", caption: "Street board" },
] as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "signature",
    label: "Signature",
    note: "Dishes guests ask for by name, photographed in the diner.",
    items: [
      {
        id: "tagine-kafta",
        name: "Tagine kafta aux oeufs",
        description: "Kefta meatballs in tomato sauce, finished with eggs and herbs.",
        price: 55,
        image: "/images/food/tagine.jpg",
        featured: true,
        aspect: "portrait",
        objectPosition: "center 40%",
      },
      {
        id: "couscous",
        name: "Couscous Marocain",
        description: "Steamed couscous with vegetables and a side of broth.",
        price: 65,
        image: "/images/food/couscous.jpg",
        featured: true,
        aspect: "landscape",
        objectPosition: "center",
      },
      {
        id: "lasagna",
        name: "Lasagne bolognaise",
        description: "Baked lasagna, also available as a family tray with two hours notice.",
        price: 60,
        image: "/images/food/lasagna.jpg",
        aspect: "square",
        objectPosition: "center 42%",
      },
      {
        id: "burger",
        name: "Chicken burger",
        description: "Sesame bun, melted cheese, tomato and lettuce. Served from the diner grill.",
        image: "/images/food/burger.jpg",
        featured: true,
        aspect: "square",
        objectPosition: "center 45%",
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    note: "Names from the diner breakfast board. Prices live on the photographed menus.",
    items: [
      { id: "ftour-bunnos", name: "Ftour Bunno's", description: "House breakfast spread." },
      { id: "ftour-fassi", name: "Ftour Fassi" },
      { id: "ftour-francais", name: "Ftour Francais" },
      { id: "msemen", name: "Msemen" },
      { id: "beghrir", name: "Beghrir" },
      { id: "harcha", name: "Harcha sucree" },
      { id: "omelette-chef", name: "Chef au plat", description: "Served with house bread and tea." },
      { id: "omelette-fromage", name: "Omelette au fromage" },
      { id: "oeufs-brouilles", name: "Oeufs brouilles" },
      {
        id: "taktouka",
        name: "Tagine taktouka aux oeufs",
        description: "Pepper and tomato taktouka with eggs.",
        price: 50,
        image: "/images/atmosphere/table.jpg",
        featured: true,
        aspect: "landscape",
        objectPosition: "center 40%",
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    note: "Salads, sandwiches and plates for a quick table.",
    items: [
      {
        id: "salade-chef",
        name: "Salade du Chef",
        description: "Crisp greens, breaded chicken, egg, tomato and toasted bread.",
        image: "/images/food/salad.jpg",
        featured: true,
        aspect: "square",
      },
      {
        id: "salade-chicken",
        name: "Salade Bunno's",
        description: "House salad with fried chicken and parmesan.",
        image: "/images/food/salad-chicken.jpg",
        aspect: "square",
        objectPosition: "center 40%",
      },
      {
        id: "panini",
        name: "Sandwich pain a l'ancien",
        description: "Toasted baguette, melted cheese and herb sauce.",
        image: "/images/food/panini.jpg",
        featured: true,
        aspect: "square",
        objectPosition: "center 55%",
      },
      {
        id: "wrap",
        name: "Wrap grille",
        description: "Grilled wrap with fries and a small salad.",
        image: "/images/food/wrap-slate.jpg",
        aspect: "landscape",
        objectPosition: "center 45%",
      },
      { id: "soup-veg", name: "Soupe vegetarienne", description: "Served with toasted bread.", price: 40 },
      { id: "fish-chips", name: "Fish and chips", description: "Fried fish, salad, tartare, fries.", price: 65 },
    ],
  },
  {
    id: "dinner",
    label: "Dinner",
    note: "Pasta, tagines and plated mains from the evening board.",
    items: [
      {
        id: "arrabiata",
        name: "Arrabiata au thon",
        description: "Tuna, spicy tomato, cherry tomato, black olives and cheese. Spaghetti, penne or tagliatelle.",
        price: 55,
        image: "/images/food/pasta-arrabiata.jpg",
        featured: true,
        aspect: "square",
        objectPosition: "center 60%",
      },
      {
        id: "pasta-olives",
        name: "Pates sauce rouge",
        description: "Ribbon pasta, tomato sauce, olives, rosemary and cheese.",
        image: "/images/food/pasta-olives.jpg",
        aspect: "square",
      },
      {
        id: "carbonara",
        name: "Carbonara",
        description: "Charcuterie, white sauce and cheese.",
        price: 50,
      },
      { id: "bolognaise-pasta", name: "Bolognaise", description: "Bolognese sauce, cheese, olive oil.", price: 60 },
      { id: "poulet-citron", name: "Tagine de poulet au citron confit", description: "Chicken, preserved lemon, fries.", price: 60 },
      { id: "boeuf-pruneaux", name: "Tagine de boeuf aux pruneaux", description: "Beef with caramelized prunes.", price: 60 },
      {
        id: "emince-poulet",
        name: "Emince de poulet",
        description: "Chicken, cream sauce, mushrooms.",
        price: 60,
        image: "/images/food/pasta-bake.jpg",
        aspect: "square",
        objectPosition: "center 45%",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Crepes and house sweets from the dessert board.",
    items: [
      {
        id: "crepe-choco",
        name: "Crepe au chocolat",
        description: "Two crepes with chocolate. Banana when served that way.",
        price: 25,
        image: "/images/food/crepe-banana.jpg",
        featured: true,
        aspect: "landscape",
        objectPosition: "center 45%",
      },
      {
        id: "crepe-fruits",
        name: "Crepe aux fruits",
        description: "Folded crepes with fruit and chocolate.",
        price: 20,
        image: "/images/food/crepe-mint.jpg",
        aspect: "portrait",
        objectPosition: "center 40%",
      },
      { id: "flan-vanille", name: "Flan a vanille", price: 20 },
      { id: "creme-brulee", name: "Creme brulee", price: 30 },
      { id: "panna-cotta", name: "Panna cotta", price: 30 },
      { id: "cheesecake", name: "Cheesecake", description: "With Nutella, strawberry or caramel.", price: 35 },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    note: "Hot drinks, juices and house mocktails from the boards.",
    items: [
      { id: "the-menthe", name: "The a la menthe", price: 7 },
      { id: "cafe-lait", name: "Cafe au lait", price: 10 },
      { id: "nousnous", name: "Cafe nouss-nouss", price: 10 },
      { id: "espresso", name: "Cafe espresso", description: "Served with mineral water.", price: 12 },
      { id: "cappuccino", name: "Cappuccino", price: 12 },
      { id: "jus-orange", name: "Jus d'orange", image: "/images/atmosphere/tray.jpg", featured: true, aspect: "square" },
      { id: "jus-avocat", name: "Jus d'avocat", description: "Avocado juice with dried fruits." },
      { id: "mojito-classico", name: "Classico mojito", description: "House mocktail." },
      { id: "copa-cabana", name: "Copa Cabana", description: "Pineapple, apple, grenadine." },
    ],
  },
];

export const formatPrice = (price?: number) => (typeof price === "number" ? `${price} DH` : undefined);
