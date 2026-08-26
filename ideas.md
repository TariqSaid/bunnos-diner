# Bunno’s Diner — Design Direction

## Three Directions Considered

### Theme Name: Sunlit Souk Editorial
**Very Brief Intro:** A tactile, image-led restaurant identity that borrows the warmth of Marrakech light, clay, and tile without leaning on tourist clichés. Asymmetrical layouts and editorial type make a neighborhood diner feel considered and memorable.
**Probability:** 0.07

### Theme Name: After-Hours Diner Club
**Very Brief Intro:** A darker, evening-led direction with ink, brass, and restrained amber accents, shaped around the energy of a late-night local hangout. Bold typography and intimate photography create a more nocturnal mood.
**Probability:** 0.03

### Theme Name: Fresh Table Modernism
**Very Brief Intro:** A bright, pared-back system built from chalky neutrals, botanical greens, and close-up food photography. Calm geometry and generous whitespace keep the focus on freshness and service.
**Probability:** 0.06

## Chosen Approach: Sunlit Souk Editorial

**Design Movement:** Contemporary editorial hospitality design with restrained North African material cues: clay, paper, brushed metal, woven texture, and generous negative space.

**Core Principles:**
1. Food and place lead; copy supports the visual story rather than competing with it.
2. Asymmetry creates character: offset type, angled image crops, and side-anchored content replace generic centered sections.
3. Marrakech is expressed through material, light, and rhythm—not decorative cliché.
4. Every interaction should feel quick, tactile, and hospitable.

**Color Philosophy:** The palette uses saffron as the ownable spark, terracotta as the appetite cue, olive as a grounding natural, cream as the breathing room, and charcoal for legible structure. The emotional arc moves from sun-warmed welcome to grounded local confidence. Color is applied in fields and accents rather than gradients so the supplied photography remains the primary source of atmosphere.

**Layout Paradigm:** An editorial scroll with a full-bleed hero, split content bands, offset cards, horizontal marquees, and a masonry-like gallery. Important actions sit on the edge of the reading path—call, directions, and menu—so the site feels navigable rather than poster-like.

**Signature Elements:**
- A small saffron sun/plate emblem used as a recurring anchor in the header, section labels, and footer.
- Thin terracotta rules and “field notes” labels that mark sections like a printed food journal.
- Warm paper panels with clipped corners and slight shadow, echoing menus and table cards without turning every element into a pill.

**Interaction Philosophy:** Interactions are confident and useful. Navigation closes after selection, buttons press subtly, gallery images reveal a caption on hover, and lightboxes preserve a clear escape route. No interaction pretends that ordering or reservations exist when the supplied data does not support them.

**Animation:** Use opacity and transform only. Section reveals should rise 18–24px over 520ms with a custom ease-out, staggered 60ms across grouped items. Image hover should scale to 1.04 over 280ms and shift the overlay, never reflow the layout. The mobile menu should slide in from the right over 220ms. Lightboxes should fade and scale from 0.96 to 1 over 240ms. Respect `prefers-reduced-motion` by disabling non-essential transitions and reveal transforms.

**Typography System:** Use `DM Serif Display` for expressive display headlines and `Manrope` for navigation, body copy, metadata, and controls. Headlines use tight line-height and occasional italic emphasis; labels are compact uppercase with tracking; body copy stays 16–18px with generous leading.

**Brand Essence:** Bunno’s is Marrakech’s warm, easygoing diner for freshly made comfort food, friendly service, and a good meal without ceremony. Personality: **sunny, generous, grounded**.

**Brand Voice:** Headlines are short, sensory, and confident. CTAs are direct and human. Microcopy clarifies what is verified and avoids overclaiming. Example lines: “Good food. Good mood. Bunno’s.” and “Come hungry. Leave lighter.”

**Wordmark & Logo:** Pair the text wordmark with a bold abstract sun-and-plate symbol: a chunky circular mark with a crescent cut-in that reads as both a plate rim and a rising sun. The wordmark should use the display serif in a custom-sized lockup with a small uppercase “DINER” line, never a default system treatment.

**Signature Brand Color:** Saffron `#E9A23B` — warm enough to feel edible and sunlit, distinctive enough to own the brand without relying on a generic orange.

## Verified Content Rules

- Use Bunno’s Diner as the primary brand spelling in visitor-facing copy.
- Verified location: Marrakech Lmhamid Nahda, opposite Jardin de l’Aéroport, Marrakesh 40000, Morocco.
- Verified phone: `+212 651 360 988` / `06 51 36 09 88`.
- Verified rating: `4.9/5` from `94 reviews`.
- Verified price range: `MAD 1–50 per person`.
- Verified services: dine-in, takeaway, and no-contact delivery.
- Verified hours: Monday closed; Tuesday–Sunday 11:00–23:00. Supplied notes warn that Mawlid may affect hours.
- Use the four supplied menu images as the authoritative menu. Do not invent menu prices or present food mentions as a complete menu.
- Use only supplied review themes and source excerpts; do not fabricate testimonials.
- Do not invent social accounts, booking flows, or delivery/order links.
- Do not use the conflicting Tripadvisor phone or hours as confirmed information.

## File-Level Style Reminder

Any CSS, component, or page file created for this project should begin with a short comment reminding the implementer: **Sunlit Souk Editorial — saffron/terracotta/olive/cream/charcoal, DM Serif Display + Manrope, editorial asymmetry, food-first photography, restrained motion, and no invented restaurant facts.**
