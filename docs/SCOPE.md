# Scope

## Pages included

- **`/` — the proposal** (single-page application). This is the entire product.
  The site is intentionally a one-pager; navigation links scroll to in-page
  sections rather than routing to separate pages.

## Sections included

| # | Section | Anchor | Interactive |
|---|---------|--------|-------------|
| 1 | Hero | top | — |
| 2 | Why Abcon | `#why` | — |
| 3 | The Precinct | `#building` | — |
| 4 | Built for your committee | `#fit` | Tabs (4 personas) |
| 5 | Your Space | `#space` | Floor explorer + space calculator |
| 6 | Lifestyle & Amenities | `#life` | — |
| 7 | Location | `#place` | — |
| 8 | Track Record | `#proof` | — |
| 9 | Call to action | `#cta` | mailto button |
| — | Footer | — | — |

Cross-cutting UI:

- Fixed navigation with frosted "scrolled" state.
- Top scroll-progress bar.
- Scroll-reveal animation on most content blocks.

## Explicitly excluded

- Multi-page routing, blog, or content beyond the single proposal page.
- CMS / admin interface — content is edited in code (see
  [`STRUCTURE.md`](./STRUCTURE.md)).
- Authentication, gating, or password protection.
- Forms with a server backend / lead database (the CTA is a `mailto:` stub).
- Live availability integration (availability data is static).
- Real analytics wiring (placeholders documented in
  [`TRACKING_PLAN.md`](./TRACKING_PLAN.md)).
- Internationalisation / multi-language.
- Official Abcon and Nedbank brand assets (placeholders only).

## Launch milestones

1. **M0 — Conversion (done).** HTML proposal converted to a self-contained
   Next.js + TypeScript + Tailwind v4 + shadcn app; production build green.
2. **M1 — Content sign-off.** Validate all figures/availability/claims; replace
   placeholder brand marks (see [`ASSUMPTIONS.md`](./ASSUMPTIONS.md)).
3. **M2 — Instrumentation.** Wire analytics, conversion events and real contact
   capture (see [`TRACKING_PLAN.md`](./TRACKING_PLAN.md)).
4. **M3 — Deploy.** Ship to Vercel; configure domain (see
   [`DEPLOYMENT.md`](./DEPLOYMENT.md)).
5. **M4 — Share.** Distribute privately to the Nedbank committee.
