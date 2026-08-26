# Bunno’s Diner QA Notes

## Verified

- `pnpm check` passes with no TypeScript errors.
- `pnpm build` completes successfully.
- Live homepage returns HTTP 200.
- All 23 referenced persistent images return HTTP 200 from the live preview: custom hero, custom interior, custom logo, four menu boards, and sixteen supplied Google Maps gallery images.
- Desktop visual pass completed at 1280px.
- Tablet visual pass completed at 768px.
- Mobile visual passes completed at 390px, including top-of-page contrast and full-page section flow.
- Interaction QA passed 11/11 checks in a Chromium mobile session: page title, Restaurant JSON-LD, click-to-call links, directions link, mobile menu open/close, menu lightbox open/close, gallery lightbox open, Escape close, and gallery expansion.
- Recent client, network, and devserver log review found no runtime errors, failed requests, or server warnings in the recent tail.

## Content Integrity

- The menu is represented by the four supplied menu images; no prices or unsupported menu transcription was added.
- Popular dish cards use only food mentions supported by the supplied research notes: tagine, lasagna, and chocolate crepes.
- Review cards use only the supplied source notes for Guillaume Neyrinck, Syed Ubair, and Jeff.
- Verified hours, address, phone, rating, review count, price range, and services follow the Google Maps/user-supplied source priority.
- No social links, booking flow, or ordering system was invented.

## QA Harness

`qa.mjs` was used locally for interaction verification and is not part of the production page runtime.
