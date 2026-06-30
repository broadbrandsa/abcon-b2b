# Project Overview

## What this is

**Sandton Gate — A Proposal for Nedbank** is a single-page proposal website,
co-branded **Abcon × Nedbank**. It presents the case for Nedbank to anchor the
Sandton Gate precinct as a corporate headquarters tenant.

It is a self-contained Next.js application (no monorepo, no external workspace
dependencies) converted from an original hand-built HTML/CSS proposal. The
visual design — typography, colour system, layout and motion — is preserved
1:1; the implementation is now componentised, typed and content-driven.

## The page

A long-form, scroll-driven landing page with the following sections:

1. **Hero** — headline, positioning statement and headline metrics.
2. **Why Abcon** — six differentiators (single accountable partner).
3. **The Precinct** — what Sandton Gate is, with key features.
4. **Built for your committee** — interactive tabs framing the offer for each
   decision-maker (COO, CFO, Brand/People, ESG/Risk).
5. **Your Space** — an interactive availability explorer and a headcount-based
   space calculator.
6. **Lifestyle & Amenities** — precinct amenities grid.
7. **Location** — schematic map and travel times.
8. **Track Record** — past landmark developments and headline stats.
9. **Call to action** — book a viewing / request the full proposal.

## Target audience

Nedbank's property, finance, brand and ESG decision-makers — the leadership
committee that would sign off on a headquarters relocation. The tone is
premium, confident and B2B.

## Deployment environment

- **Framework:** Next.js (App Router) — static, prerendered output.
- **Host:** Vercel (see [`DEPLOYMENT.md`](./DEPLOYMENT.md)).
- **Runtime:** No server, database or API dependencies. The whole page is
  statically generated; interactivity is client-side React.

## Owner

- **Developer / brand owner:** Abcon Developments / Abcon Group.
- **Prepared for:** Nedbank.
- **Maintainer of this codebase:** the Abcon digital/marketing team.

## Status

Illustrative, co-branded proposal prepared for discussion. Figures,
availability and specifications are indicative — see
[`ASSUMPTIONS.md`](./ASSUMPTIONS.md).
