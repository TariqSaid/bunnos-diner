export const SITE = {
  name: "Bunno's Diner",
  city: "Marrakech, Morocco",
  neighborhood: "Mhamid Nahda, en face de Jardin de l'Aéroport",
  address: "Mhamid Nahda, en face de Jardin de l'Aéroport, Marrakech 40000, Morocco",
  streetNote: "264 Lalla Aayouch, Mhamid",
  plusCode: "JX24+CR Marrakesh",
  phoneDisplay: "+212 708-074915",
  phoneHref: "tel:+212708074915",
  telephone: "+212708074915",
  whatsappHref: "https://wa.me/212708074915",
  email: "bunnos.marrakech@gmail.com",
  emailHref: "mailto:bunnos.marrakech@gmail.com",
  instagramHref: "https://www.instagram.com/bunnos.2023/",
  instagramHandle: "@bunnos.2023",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bunno%27s%20Diner%20Mhamid%20Marrakech",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Bunno%27s%20Diner%20Mhamid%20Nahda%20Marrakech",
  cuisines: ["Italian", "Mexican", "Moroccan", "Mediterranean"] as const,
  services: ["Dine-in", "Takeaway", "Delivery"] as const,
  ratingValue: "4.9",
  reviewCount: "94",
  headline: "Made fresh. Every day.",
  lede: "Italian, Mexican, Moroccan and Mediterranean cooking in Mhamid, Marrakech.",
  experienceTitle: "More Than a Meal.",
  experienceBody:
    "A neighborhood diner where tagines sit beside pasta, salads, and plates cooked to order. Come for breakfast, stay through dinner.",
} as const;

export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
