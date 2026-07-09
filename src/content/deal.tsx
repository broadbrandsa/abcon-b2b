import type { ReactNode } from "react";

/**
 * Deal-layer content: ways-in, brand presence, client/event, workplace
 * strategy, masterplan, case study, commercials extras, location commute,
 * landlord covenant, and the in-app deal-room documents.
 * All figures ILLUSTRATIVE — subject to confirmation.
 */

const ic = (d: string) => <path d={d} />;

/* ---------- At a glance (executive summary) ---------- */
export const atAGlance = [
  { v: "One partner", l: "Built, powered, secured & managed by one group" },
  { v: "99.9%", l: "Power & water uptime SLA" },
  { v: "5 min", l: "From your 135 Rivonia campus" },
  { v: "3 ways in", l: "Lease · pre-let · co-own" },
  { v: "Q1 2027", l: "Develop-to-suit handover" },
  { v: "5-Star", l: "Green Star (supporting benefit)" },
];

/* ---------- Ways in ---------- */
export const waysIn: { id: string; name: string; tag: string; body: string; points: string[]; icon: ReactNode; flag?: boolean }[] = [
  {
    id: "lease",
    name: "Lease",
    tag: "Maximum flexibility",
    body: "A standard tenancy — no capital outlay, the shortest path to occupation, and full flexibility to right-size over the term.",
    points: ["No capex", "Fastest to occupy", "Expansion & break options"],
    icon: ic("M4 7h16M4 12h16M4 17h10"),
  },
  {
    id: "prelet",
    name: "Pre-let + develop-to-suit",
    tag: "Shape the build",
    body: "Commit early and shape the Phase 2 build to Nedbank's exact brief — layout, brand and systems — and secure anchor naming rights.",
    points: ["Design to your brief", "Anchor naming rights", "Fit-out allowance up to R3,500/m²"],
    icon: ic("M3 21h18M6 21V8l6-4 6 4v13M9 12h2M13 12h2"),
    flag: true,
  },
  {
    id: "coown",
    name: "Co-own / co-develop",
    tag: "Rent → balance-sheet asset",
    body: "Take an equity stake in the building alongside Abcon — as you already do in the POD and Reso funds — turning rent into an owned asset and sharing development upside.",
    points: ["Illustrative 25–50% JV", "Anchor + co-investor", "Share development upside"],
    icon: ic("M4 20h16M6 20V9M10 20V6M14 20v-8M18 20V4"),
  },
];

export const waysInLead = "You already co-invest with us. Do it with your own headquarters.";
export const waysInClose =
  "This is a strategic property partnership, not just a tenancy — choose the structure that fits Nedbank's balance sheet and property strategy.";

/* ---------- Your brand on the piazza ---------- */
export const brandPiazza = {
  lead: "A lease that also becomes a revenue-generating, brand-building asset.",
  points: [
    { title: "A branded banking hall", body: "Operate a flagship branch and banking hall within the 12,000m² Sandton Gate Central retail." },
    { title: "ATMs & self-service", body: "Customer-facing ATMs and self-service points across the precinct's busiest routes." },
    { title: "Tower naming rights", body: "Nedbank identity on the building and precinct signage — visible across the node." },
    { title: "A captive catchment", body: "Precinct residents, office workers and retail visitors — illustrative daily footfall ~8,000." },
  ],
  footfall: 8000,
};

/* ---------- Where you host the world ---------- */
export const clientEvent = {
  lead: "How the building represents Nedbank to its clients.",
  points: [
    { title: "Executive arrival", body: "A double-volume reception and executive arrival sequence that sets the tone." },
    { title: "Client-meeting suites", body: "Dedicated, bookable meeting suites with catering and concierge support." },
    { title: "~200-seat auditorium", body: "A conference centre / auditorium for town-halls, results days and client events." },
    { title: "Piazza event space", body: "Outdoor precinct event space for launches and functions, with concierge support." },
  ],
};

/* ---------- Built around how you work now ---------- */
export const workplace = {
  lead: "A workplace strategy — not just amenities. Built for hybrid, activity-based and measurable.",
  points: [
    { title: "Hybrid by design", body: "Activity-based neighbourhoods, not fixed desks — sized to how your teams actually attend." },
    { title: "~60:40 collaboration:desk", body: "An illustrative ratio weighting collaboration and focus space over rows of desks." },
    { title: "Test-fit at your densities", body: "A no-obligation test-fit modelled at Nedbank's own occupancy densities." },
    { title: "Tech-enabled & measurable", body: "Video-first meeting rooms, town-hall space, and ~85% usable efficiency." },
  ],
};

/* ---------- Precinct masterplan ---------- */
export const masterplan: { phase: string; title: string; body: string; done?: boolean; now?: boolean }[] = [
  { phase: "Phase 1", title: "Building A + Sandton Gate Central", body: "P-grade offices and the 12,000m² retail core — occupied and operating.", done: true },
  { phase: "Phase 1", title: "The Terrace residences", body: "136 luxury apartments established within the precinct.", done: true },
  { phase: "Phase 2", title: "New HQ office towers", body: "~10,000m² of develop-to-suit P-grade — your opportunity, from Q1 2027.", now: true },
  { phase: "Future", title: "Further office & mixed-use phases", body: "Additional GLA and amenities as the node matures — room to grow into." },
];

export const masterplanNote =
  "A R3-billion precinct on an upward node trajectory — reassurance behind a 5–10 year commitment. GLA and value figures illustrative, subject to confirmation.";

/* ---------- Proof, in depth (case study) ---------- */
export const caseStudy = {
  client: "Pick n Pay",
  title: "A head office and a 100,000m² distribution centre — delivered.",
  brief: "A national retailer needed a consolidated head office and a vast, highly-serviced distribution centre — on programme, at enterprise scale.",
  approach: "Abcon developed, built and delivered both under one accountable team — from site and design through construction, fit-out and handover.",
  outcome: "A landmark corporate campus plus one of the country's larger DCs — proof Abcon delivers single-tenant builds at Nedbank's scale.",
  quote: "Abcon delivered a complex, business-critical build without the finger-pointing you get from a chain of contractors.",
  attribution: "Illustrative testimonial — reference available on request.",
};

/* ---------- Commercials extras ---------- */
export const occupancyBudget = [
  { item: "Gross rental (incl. opex & rates)", note: "Phase 2, per m²/month", share: 74 },
  { item: "Parking (covered, 4 bays/100m²)", note: "R1,250 / bay / month", share: 12 },
  { item: "Electricity & water consumption", note: "Metered, net of solar", share: 10 },
  { item: "Fibre & comms", note: "Carrier-neutral", share: 4 },
];

export const leaseScenarios = [
  { term: "5-year", escalation: "7% p.a.", note: "Standard term, break option at year 5 of a longer lease" },
  { term: "7-year", escalation: "7% p.a.", note: "Longer certainty — stronger incentive package" },
  { term: "10-year", escalation: "7% p.a.", note: "Anchor term — best incentives + naming rights" },
];

export const incentives = [
  "Beneficial-occupation / rent-free months on a longer term",
  "Tenant-installation (TI) allowance up to R3,500/m²",
  "Relocation contribution towards the move from 135 Rivonia",
  "Escalation and break-option flexibility on anchor terms",
];

export const commercialsVsToday =
  "We'll model Sandton Gate against Nedbank's current all-in occupancy spend (rent + rates + utilities + parking + facilities) across the full term — not just month one — and against a lease-vs-co-own scenario so the balance-sheet view is clear.";

/* ---------- Location: commute & catchment ---------- */
export const commute = [
  { band: "≤ 15 min", label: "Sandton, Rosebank, Bryanston, Randburg", share: 42 },
  { band: "15–30 min", label: "Midrand, Fourways, Roodepoort, JHB CBD", share: 38 },
  { band: "30–45 min", label: "Pretoria south, East Rand, Soweto", share: 20 },
];

export const endOfTrip = [
  "EV-charging bays in the basement",
  "Precinct shuttle to the Gautrain station",
  "Park-and-ride options on the node",
  "Secure bike storage, showers & lockers",
];

/* ---------- Trust: landlord covenant ---------- */
export const covenant = {
  lead: "The landlord will still be here in ten years.",
  points: [
    { title: "Long-term owner", body: "Abcon holds and co-invests in its assets — it doesn't build to flip. Your landlord has skin in the game for the full term." },
    { title: "40+ years, unbroken", body: "Founded in 1981, delivering through multiple cycles — a covenant you can underwrite." },
    { title: "Financial strength", body: "A diversified group (property, energy, funds, private equity) — resilient earnings behind the lease. Financials available under NDA." },
    { title: "Bank-tested", body: "Nedbank already co-invests with the group via POD and Reso — you've already done the diligence." },
  ],
};

/* ---------- Deal-room documents (rendered on-page in a dialog) ---------- */
export type DealDoc = { id: string; label: string; title: string; blurb: string; sections: { h: string; items: string[] }[] };

export const dealDocs: DealDoc[] = [
  {
    id: "floor-plates",
    label: "Floor plates",
    title: "Floor plates & efficiency",
    blurb: "Indicative plate metrics for Phase 2 and Building A.",
    sections: [
      { h: "Typical plate", items: ["~1,250 m² efficient side-core", "Column-free, floor-to-ceiling glazing", "~2.7 m ceilings, raised access floors"] },
      { h: "Density", items: ["Capable of ~1:10 densities", "Aligned to Nedbank's current 753–1,986 m² plates", "~85% usable efficiency"] },
      { h: "Stacking", items: ["Full floors, combined floors or whole building", "Phase 2 towers ~10,000 m²; Building A ~13,000 m²"] },
    ],
  },
  {
    id: "spec",
    label: "Building spec sheet",
    title: "Building specification",
    blurb: "Base-build specification (Category-A).",
    sections: [
      { h: "Vertical transport", items: ["High-speed lifts with destination control"] },
      { h: "HVAC & lighting", items: ["VAV HVAC", "LED daylight-linked lighting", "Integrated BMS"] },
      { h: "Power & water", items: ["~1.2 MWp solar + battery (Blume)", "N+1 generators, 48h fuel, UPS", "2-day water storage, recycling"] },
      { h: "Connectivity", items: ["Diverse-route fibre, two entries", "Carrier-neutral, meet-me room", "Dedicated comms risers + data room"] },
    ],
  },
  {
    id: "hot",
    label: "Draft heads of terms",
    title: "Draft heads of terms",
    blurb: "Indicative commercial terms for discussion only.",
    sections: [
      { h: "The deal", items: ["Premises: Phase 2 / Building A (TBC)", "Term: 5 / 7 / 10-year options", "Escalation: 7% per annum"] },
      { h: "Gross rental includes", items: ["Operating costs & municipal rates", "Common-area maintenance", "Backup power & water infrastructure"] },
      { h: "Excluded / billed separately", items: ["VAT", "Electricity & water consumption", "Parking"] },
      { h: "Incentives", items: ["Rent-free / beneficial-occupation months", "TI allowance up to R3,500/m²", "Relocation contribution"] },
    ],
  },
  {
    id: "dd",
    label: "Due-diligence summary",
    title: "Due-diligence summary",
    blurb: "The answers your team will ask for.",
    sections: [
      { h: "Transition", items: ["Phased move, lease-overlap managed", "Timed to your 135 Rivonia exit"] },
      { h: "Delivery certainty", items: ["Fixed programme, completion guarantees", "Owner-developer, not outsourced"] },
      { h: "Security & IT", items: ["24/7 manned, biometric access, CCTV, ANPR", "Segregated tenant networks; financial-sector controls"] },
      { h: "References", items: ["Blue-chip precinct tenants — on request", "Pick n Pay, Alice Lane, Hazeldean track record"] },
    ],
  },
  {
    id: "bee",
    label: "B-BBEE credentials",
    title: "B-BBEE & transformation",
    blurb: "Contribution to Nedbank's ESD / SED scorecard.",
    sections: [
      { h: "Level", items: ["Level-1 B-BBEE Vula fund", "Group transformation across the value chain"] },
      { h: "Impact", items: ["Abcon Group Foundation (est. 2013)", "Skills development & training", "Enterprise & supplier development"] },
      { h: "For Nedbank", items: ["Procurement recognition on the fit-out & lease", "Reportable ESD / SED outcomes"] },
    ],
  },
];
