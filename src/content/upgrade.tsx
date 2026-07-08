import type { ReactNode } from "react";

/**
 * Content + models for the "move-decision" upgrade layer: carbon/cost
 * scoreboard, stay-vs-move, a-day-in-the-life, concierge move, availability,
 * and the woven diligence answers. All figures are INDICATIVE and swappable.
 */

const ic = (d: string) => <path d={d} />;

/* ---------- Carbon & cost scoreboard model (illustrative) ---------- */
export const scoreboard = {
  defaultArea: 15000, // m²
  areaPerPerson: 13,
  conventionalKwhM2: 220,
  greenKwhM2: 120,
  elecRate: 2.8, // R / kWh
  emissionsFactor: 0.9, // kg CO₂ / kWh
  solarMwp: 1.2,
  solarGwh: 2,
  assumptions: [
    "Benchmarked against an older comparable office of similar size (~220 kWh/m²/yr) vs Sandton Gate ~120 kWh/m²/yr → ~100 kWh/m²/yr saved. Not a comparison to Nedbank's own 5-Star-rated 135 Rivonia HQ.",
    "Electricity ~R2.80/kWh; grid emissions factor ~0.9 kg CO₂/kWh.",
    "On-site solar ~1.2 MWp (via Blume) generating ~2 GWh/yr of clean power.",
  ],
};

/* ---------- Stay vs move ---------- */
export const stayVsMove: {
  criterion: string;
  stay: string;
  move: string;
  moveWins: boolean;
}[] = [
  { criterion: "Single-owner accountability", stay: "Multiple contractors to coordinate", move: "One group — build, power, secure, manage", moveWins: true },
  { criterion: "Resilience (backup power & water)", stay: "Retrofit to match", move: "N+1 power, 48h fuel, 2-day water", moveWins: true },
  { criterion: "Location & continuity", stay: "135 Rivonia — in situ", move: "5 min away — same node, phased move", moveWins: true },
  { criterion: "Flexibility to grow / contract", stay: "Constrained by the existing footprint", move: "Phase 2 + Building A + future phases", moveWins: true },
  { criterion: "Capital & disruption", stay: "Refurb capital + occupied-site works", move: "Turnkey, develop-to-suit — no capex", moveWins: true },
  { criterion: "Workplace, amenities & talent", stay: "Established campus", move: "Gym, piazza, river, on-site homes", moveWins: true },
  { criterion: "Energy efficiency & running cost", stay: "Older-generation plant", move: "~120 kWh/m²/yr + on-site solar", moveWins: true },
  { criterion: "Green rating & ESG reporting", stay: "Already 5-Star (135 Rivonia)", move: "Newer 5-Star + on-site solar", moveWins: true },
];

export const leaseCost = {
  moveLabel: "Move to Sandton Gate",
  stayLabel: "Stay & refurbish 135 Rivonia",
  moveValue: "≈ R315m",
  stayValue: "≈ R300–360m",
  basis: "Illustrative whole-of-lease (5 yrs, 15,000 m²): Move = gross rent + parking at 7% escalation, turnkey, no capex. Stay = refurbishment capital + occupied-site disruption + running costs.",
  punch: "A fully-run, resilient building five minutes away — power and water that stay on, no capex, and a phased move that never stops the bank — can cost less across the lease than a major refurbishment. And it's greener, too.",
};

/* ---------- A day in the life ---------- */
export const dayInLife: { time: string; title: string; body: string; slot: string }[] = [
  { time: "07:45", title: "Step off the Gautrain", body: "A short walk from the station or BRT — no gridlock, no parking scramble.", slot: "Gautrain arrival / precinct entrance" },
  { time: "08:30", title: "Coffee on the piazza", body: "Grab a flat white in the sun before the first stand-up.", slot: "The piazza & cafés" },
  { time: "13:00", title: "Gym at lunch", body: "A session at the 2,500m² Planet Fitness — back at your desk in an hour.", slot: "Planet Fitness interior" },
  { time: "16:30", title: "Walk the river edge", body: "Clear your head along the revitalised Braamfontein Spruit.", slot: "River-edge green space" },
  { time: "17:30", title: "Easy drive home", body: "Straight onto the M1 — or upstairs to an on-site apartment.", slot: "Basement parking / on-site residences" },
];

/* ---------- Concierge move ---------- */
export const conciergeSteps: { title: string; body: string; by: string; icon: ReactNode }[] = [
  { title: "Design to your brief", body: "Space planning and fit-out design around how your teams actually work.", by: "Abcon Developments", icon: ic("M4 7h16M4 12h16M4 17h10") },
  { title: "Build & fit-out", body: "Construction and turnkey fit-out delivered in-house — on a fixed programme.", by: "Grit", icon: ic("M3 21h18M6 21V8l6-4 6 4v13") },
  { title: "The physical move", body: "We plan and run the relocation itself — phased so the bank never stops.", by: "Abcon + Grit", icon: ic("M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z") },
  { title: "Day-one operations", body: "Facilities, security and utilities live from the first morning.", by: "Strive", icon: ic("M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z") },
];

/* ---------- Availability / scarcity + proof ---------- */
export const availability = {
  scarcityTitle: "Anchor-tenant naming rights — one occupier only.",
  scarcityBody:
    "The upper floors of Phase 2 and precinct naming rights are available to a single anchor tenant. Once taken, they're gone — and Phase 2's develop-to-suit programme needs sign-off ahead of the Q1 2027 handover to build to your brief.",
  proofPoints: [
    { k: "Q1 2027", v: "Phase 2 beneficial occupation — develop-to-suit handover" },
    { k: "R3bn", v: "Precinct already under development with Tiber" },
    { k: "Live", v: "Building A occupied and operating today" },
  ],
  neighboursNote: "Blue-chip occupiers are already at Sandton Gate — names available on request under NDA.",
  liveSlot: "Live-from-site construction feed / latest progress photography",
};

/* ---------- Woven diligence answers ---------- */
export const diligence: { theme: string; q: string; a: string; icon: ReactNode }[] = [
  {
    theme: "Transition risk",
    q: "What about double-rent and moving a live bank?",
    a: "A phased move with lease overlap managed on your terms — teams relocate in tranches so operations never stop. We'll structure timing against your 135 Rivonia exit, and can take on or sublet space to bridge.",
    icon: ic("M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"),
  },
  {
    theme: "Total cost vs today",
    q: "What's the real cost across the whole lease?",
    a: "Gross rentals include operating costs, rates, common-area maintenance and backup power/water. Billed separately: VAT, your electricity/water consumption, and parking. We model the full term at 7% escalation — not just month one — so there are no surprises.",
    icon: ic("M4 19h16M7 16l4-5 3 3 5-7"),
  },
  {
    theme: "Capacity & growth",
    q: "Can the precinct house Nedbank now and as we grow?",
    a: "Phase 2 offers ~10,000 m² of new P-grade space and Building A ~13,000 m² today, with further precinct phases to come — enough to consolidate a major footprint now and expand into pre-agreed space later, phased to your plan.",
    icon: ic("M3 21h18M6 21V8l6-4 6 4v13M10 21v-6h4v6"),
  },
  {
    theme: "IT & security",
    q: "Is it bank-grade for IT and physical security?",
    a: "Redundant, diverse fibre routes and multiple carriers; dedicated comms risers and data-room provisioning for resilient connectivity. Physical security is graded for financial-services: access control, 24/7 manned security and CCTV, aligned to financial-sector control requirements.",
    icon: ic("M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6zM9 12l2 2 4-4"),
  },
  {
    theme: "Safety & parking",
    q: "Is it safe getting in and out — and is there enough parking?",
    a: "Access-controlled, manned precinct with secure basement parking at 4 bays per 100 m² — covered and access-controlled — sufficient for a large staff base, with visitor and EV provisioning.",
    icon: ic("M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14v6H5zM7 17v2M17 17v2"),
  },
  {
    theme: "Flexibility & exit",
    q: "What if our needs change?",
    a: "Expansion rights over adjacent space, plus contraction and break options structured into the lease — so a 5-year commitment doesn't lock you into a footprint you outgrow or no longer need.",
    icon: ic("M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"),
  },
  {
    theme: "Delivery certainty",
    q: "How do we know it'll be ready?",
    a: "Develop-to-suit delivered by the same group that owns and builds the precinct, on a fixed programme with completion guarantees and penalties — not a promise from a landlord who outsources construction.",
    icon: ic("M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z"),
  },
  {
    theme: "References",
    q: "Who else has trusted you?",
    a: "Pick n Pay's head office and 100,000 m² DC, Alice Lane, the 800ha Hazeldean precinct, S&J with Redefine — and current Sandton Gate occupiers we'll connect you with as references on request.",
    icon: ic("M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"),
  },
];
