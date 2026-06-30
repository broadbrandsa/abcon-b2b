# Sandton Gate — A Proposal for Nedbank

A self-contained, single-page proposal website (Abcon × Nedbank) for the
Sandton Gate precinct. Built with **Next.js (App Router)**, **TypeScript**,
**Tailwind CSS v4** and **shadcn** primitives, and deployed on **Vercel**.

Converted from an original hand-built HTML/CSS proposal, with the design
preserved 1:1 and the implementation componentised, typed and content-driven.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
```

## Editing content

All copy, figures and option lists live in **`src/content/proposal.tsx`** —
edit there to update the proposal without touching markup. Design tokens
(colours, radii) live at the top of the bespoke block in
`src/app/globals.css`.

## Documentation

See [`docs/`](./docs):

- [`PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md) — what this is, audience, owner.
- [`ASSUMPTIONS.md`](./docs/ASSUMPTIONS.md) — caveats; what must be validated.
- [`SCOPE.md`](./docs/SCOPE.md) — pages, sections, exclusions, milestones.
- [`STRUCTURE.md`](./docs/STRUCTURE.md) — folder layout & composition rules.
- [`TRACKING_PLAN.md`](./docs/TRACKING_PLAN.md) — analytics & conversion plan.
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — GitHub + Vercel setup.

## Tech

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + bespoke design system |
| UI primitives | shadcn (Radix) |
| Fonts | Fraunces (display) + Manrope (body) via `next/font` |
| Package manager | pnpm |
| Hosting | Vercel |
