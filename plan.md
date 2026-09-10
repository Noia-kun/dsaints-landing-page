# D'Saints Cinematic Build

# D'SAINTS — Landing Page Build Prompt (Lovable)

Build a premium, cinematic React + Tailwind landing page for **D'SAINTS**, a Filipino artisan dessert brand established 2020, based in Doha, Qatar. Use Framer Motion for animations. Theme: "A Moment Worth Sharing." Brand signature (repeat exactly, never paraphrase): **"Connecting lives, one moment at a time. . ."**

## Palette & Type
Warm ivory, cream, espresso, deep chocolate, soft beige, subtle pistachio green. Elegant serif for headlines, clean sans-serif for body/prices/nav. Wide letter-spacing on section labels (e.g. "S I G N A T U R E").

## Navigation
Minimal floating nav. Logo "D'SAINTS". Links: STORY, SIGNATURE, CAKES, FAVORITES, CONTACT.

## Sections (in order)

**1. Hero** — Full-screen, warm ivory bg, film-grain feel. Small text "EST. D'SAINTS 2020" → huge "D'SAINTS" wordmark reveal → signature line → "DOHA, QATAR". Fade/scale-in on load, slight parallax on scroll.

**2. First Moment** — Headline "WHAT MAKES A MOMENT MEMORABLE?" then staggered lines: "A familiar taste." / "A table full of people." / "Something worth bringing home." End with the signature line.

**3. Story** — Headline "D'SAINTS". Copy: "D'SAINTS has always been about connecting lives, one moment at a time. It's about hospitality, empowering purpose, and making space for everyone at the table." Asymmetric editorial image grid (placeholder images of shared desserts/gatherings).

**4. Philosophy** — Large statement type: "Not everything perfect is planned." / "Because sometimes, the best recipes come from letting go, letting mistakes happen." / "— D'SAINTS". Directional entrance (up/left/right per line). Signature line small at bottom.

**5. Signature Collection** — Label "S I G N A T U R E".
- **Silvanas** — "A PHILIPPINE ARTISAN DELICACY OF CRISP MERINGUE AND BUTTERCREAM, A SIGNATURE FROZEN FINISH THAT MELTS INTO NOSTALGIA." — 55 QAR
- **Ensaymada** — "PHILIPPINE ARTISAN STAPLE WITH BUTTERY CREAM, AND A LAYER OF CHEESE — FAMILIAR, CLOSE TO HOME." — 12pcs/60 QAR, 6pcs/35 QAR
Large product imagery, horizontal scroll-pan transition between the two.

**6. Specialty Cakes** — Label "S P E C I A L T Y  C A K E S".
- **Chocolate Dream Cake** — "A RICH CHOCOLATE INDULGENCE WITH LAYERS OF TEXTURE, BALANCING SILKY, CREAMY, AND CRISP IN EVERY BITE." — 65 / 25 / 120 QAR
- **Sansrival Cake** — "DELICATE LAYERS OF CASHEW MERINGUE AND BUTTERCREAM, FINISHED WITH ROASTED CASHEWS. A FILIPINO CLASSIC WITHOUT RIVAL." — 70 / 45 / 150 QAR. Include fact callout: "Did you know? Sans Rival means 'without rival.'"

**7. Favorites** — Label "F A V O R I T E S". "NEW YORK COOKIES" — Solo 12 QAR, 3pcs 35 QAR, 5pcs 55 QAR. Interactive flavor selector (click/hover swaps image + description):
- Classic Chocolate Chip — semi-sweet & dark chocolate, crunchy walnuts
- Dark Squared — cocoa dough, semi-sweet & dark chocolate
- Scarlet Red — white chocolate, creamy cheesecake center
- Pistachio Nut — hazelnut, white chocolate, creamy pistachio center
- Berry Berry — cranberries, white chocolate, lemon zest

**8. The Comforts** — Editorial grid, not e-commerce cards:
- Roasted Banana Loaf — 40 QAR
- Classic Brownies — 16pcs/59 QAR, 8pcs/32 QAR (assorted or single flavor)
- Brownies on Crunch — 16pcs/62 QAR, 8pcs/35 QAR
- Original Oat Bar — 16pcs/59 QAR, 8pcs/32 QAR
- Oat Dates Bar — 16pcs/62 QAR, 8pcs/35 QAR

**9. Little Things** — Playful short lines, each with different entrance direction: "Not every comfort needs explaining." / "Pistachio? Yeah, that's a green flag." / "Brownies? Always a yes."

**10. The Distance** — "BRING ME SOME." / "Apparently, 'bring me some' has no distance limit!" / "L.A., you're in for a treat." Light, playful tone.

**11. The Connection** — Minimal, generous whitespace, centered signature line as the emotional peak, plus: "D'SAINTS has always been about connecting lives, one moment at a time." Slow reveal, no extra motion.

**12. Invitation / Footer** — Headline "MAKE THE MOMENT COUNT." / "Some things are simply better when shared." / signature line. CTAs: "ORDER / INQUIRE" and "WHATSAPP". Contact: Doha, Qatar · +974 5588 1795 · +974 5542 3214 · Instagram @dsaints.qa · Facebook DsaintsFood. Close with "D'SAINTS" / "EST. 2020" / signature line.

## Motion (keep simple, don't overbuild)
Use Framer Motion `whileInView` for scroll-triggered fade+slide-up reveals, a subtle parallax on the hero image, and a scale effect on product images as they enter view. Stagger text lines where noted above. Respect `prefers-reduced-motion`. Do not animate every element — motion should highlight key headlines and product shots only.

## Rules
- The signature "Connecting lives, one moment at a time. . ." must appear exactly as written, only in the sections listed above — never replaced with other taglines.
- Fully responsive: recompose (not just shrink) for mobile, preserving hierarchy and signature placement.
- Semantic HTML, accessible buttons/focus states, keyboard-navigable nav.
- Use placeholder images for now (dessert/table/hands photography style) — real photography will be swapped in manually later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor].

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
