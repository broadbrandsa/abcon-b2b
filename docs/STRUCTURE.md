# Structure

## Folder structure

```
sandton-gate-proposal/
├── docs/                       # Project documentation (this folder)
├── public/
│   └── images/                 # Static image assets (renders, photography)
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 + shadcn tokens + bespoke design system
│   │   ├── layout.tsx          # Root layout: fonts (Fraunces + Manrope), metadata
│   │   └── page.tsx            # Composes the section components in order
│   ├── components/
│   │   ├── sections/           # One component per page section (+ shared helpers)
│   │   │   ├── reveal.tsx       # Scroll-reveal wrapper (IntersectionObserver)
│   │   │   ├── site-nav.tsx     # Fixed nav + scroll-progress bar (client)
│   │   │   ├── hero.tsx
│   │   │   ├── why-abcon.tsx
│   │   │   ├── the-precinct.tsx
│   │   │   ├── decision-fit.tsx # Decision-maker tabs (client)
│   │   │   ├── your-space.tsx   # Floor explorer + calculator (client)
│   │   │   ├── lifestyle.tsx
│   │   │   ├── location.tsx
│   │   │   ├── track-record.tsx
│   │   │   ├── cta.tsx
│   │   │   └── site-footer.tsx
│   │   └── ui/                  # shadcn primitives (button, card, badge, tabs, …)
│   ├── content/
│   │   └── proposal.tsx         # All copy, figures and option data (single source)
│   └── lib/
│       └── utils.ts             # `cn()` class-name helper (shadcn)
├── components.json             # shadcn configuration
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Section composition rules

- **`page.tsx` is a pure composition root.** It imports each section component
  and renders them in document order inside a single `.sg` wrapper. The `.sg`
  class scopes the bespoke base styles (serif headings, section padding, link
  reset) so they never leak into shadcn primitives.
- **One component per section.** Each section owns its markup and reads its
  content from `src/content/proposal.tsx`. Sections are presentational and, by
  default, **Server Components**.
- **`"use client"` only where needed.** Interactive sections opt in:
  `site-nav` (scroll listener), `decision-fit` (tab state), `your-space`
  (calculator/explorer state) and `reveal` (IntersectionObserver). Everything
  else renders on the server.
- **`Reveal` is the animation primitive.** Any block that should fade/lift into
  view is wrapped in `<Reveal>` (optionally with `as` and `delay`). It adds the
  `in` class once intersected. Note: an element with the bare `reveal` class
  that is *not* a `<Reveal>` will stay hidden — always use the component.

## Styling architecture

- **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`), configured via
  CSS, not a JS config file.
- **shadcn tokens** provide the primitive theme; **bespoke design tokens**
  (`--forest`, `--emerald`, `--gold`, `--cream`, …) and all section-specific
  component CSS live in the clearly-delimited block at the bottom of
  `globals.css`. Class names (`.why-card`, `.calc`, `.bld-feats`, …) match the
  original proposal for fidelity and easy diffing.
- **Fonts** are loaded with `next/font/google` (Fraunces for display/serif,
  Manrope for body/sans) and exposed as CSS variables `--font-fraunces` /
  `--font-manrope`, mapped to `--serif` / `--sans`.

## Content management approach

- **Code-driven content.** There is no CMS. All editable copy, metrics and
  option lists are centralised in **`src/content/proposal.tsx`**:
  - `meta` — contact details, names, address.
  - `navLinks`, `heroMeta`, `whyCards`, `buildingFeatures`, `fitPanels`,
    `floors`, `amenities`, `distances`, `proofItems`, `proofStats`.
- **To update the proposal,** edit `proposal.tsx` — section components map over
  these arrays, so adding/removing items needs no markup changes.
- **To re-skin,** edit the design tokens at the top of the bespoke block in
  `globals.css` (e.g. change `--emerald` / `--gold` for a different brand).
- **To add imagery,** drop files in `public/images/` and reference them (the
  precinct visual currently shows a placeholder note where a render belongs).
