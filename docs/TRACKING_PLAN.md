# Tracking Plan

> **Status: placeholders.** No analytics or tracking is wired up yet. This
> document specifies what to add and where, so instrumentation is a deliberate,
> reviewed step (see [`ASSUMPTIONS.md`](./ASSUMPTIONS.md)).

## Google Analytics (GA4) — placeholder

Recommended: add GA4 only after privacy/consent sign-off.

- Reserve an env var: `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`).
- Load via Next's `@next/third-parties/google` `GoogleAnalytics` component in
  `src/app/layout.tsx`, guarded so it is a no-op when the env var is unset.
- Document the property/stream IDs here once created.

## Event tracking — placeholder

Define a thin `track(event, params)` helper and fire these semantic events:

| Event | Trigger | Notes |
|-------|---------|-------|
| `nav_click` | Nav link / "Book a viewing" clicked | include `label` |
| `tab_view` | Decision-maker tab selected (`#fit`) | include persona id |
| `floor_select` | A floor card selected (`#space`) | include size m² |
| `calc_change` | Space calculator slider settled | include headcount, area |
| `cta_primary` | "Book a private viewing" clicked | primary conversion |
| `cta_secondary` | "Download the full proposal" clicked | |
| `scroll_depth` | 25 / 50 / 75 / 100% reached | engagement quality |

Suggested integration points (already isolated as client components):

- `src/components/sections/site-nav.tsx`
- `src/components/sections/decision-fit.tsx`
- `src/components/sections/your-space.tsx`
- `src/components/sections/cta.tsx`

## Form submission tracking — placeholder

The CTA currently opens a blank `mailto:` draft (no backend).

- When a real lead-capture form or booking flow is added, fire a
  `lead_submit` event on success and capture: persona, estimated headcount/area
  (from the calculator), and selected floor (if any).
- If using a form provider (e.g. Formspree, Resend + API route, HubSpot),
  record the endpoint and any provider-side tracking here.

## Vercel Analytics (option)

Lightweight, privacy-friendly, zero-config on Vercel:

- `pnpm add @vercel/analytics` and render `<Analytics />` in `layout.tsx`.
- Optionally `@vercel/speed-insights` for Core Web Vitals.
- Enable in the Vercel project dashboard. Good default for a private proposal
  where full GA4 may be overkill.

## Conversion goals — placeholder

| Goal | Definition | Primary metric |
|------|------------|----------------|
| **Primary** | Viewing booked | `cta_primary` → `lead_submit` |
| Secondary | Proposal requested/downloaded | `cta_secondary` |
| Micro | Engaged with calculator or tabs | `calc_change`, `tab_view` |
| Micro | Reached the CTA section | `scroll_depth = 100` |

Set the target conversion (booked viewings) once the contact flow is live.

## Privacy

Because this is a private, named proposal, prefer minimal, consent-respecting
analytics (Vercel Analytics) and avoid collecting PII client-side. Add a
consent gate before any cookie-based analytics if required by policy.
