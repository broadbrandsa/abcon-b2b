/**
 * Commercial content for the proposal: pricing tiers, lease terms, building
 * performance, the dedicated team, the "yes to keys" process and the
 * competitive comparison. All figures are INDICATIVE / illustrative for a
 * draft proposal and carry an on-page "subject to confirmation" disclaimer.
 */

export const BAY_RATE = 1250; // R per covered bay / month
export const AREA_PER_PERSON = 13; // m² per person
export const BAYS_PER_100M2 = 4;

export type Tier = {
  id: string;
  name: string;
  rate: number; // R / m² / month, gross
  tagline: string;
  note: string;
  occupation: string;
  recommended?: boolean;
  fitout?: string;
};

export const tiers: Tier[] = [
  {
    id: "flexi",
    name: "Flexi Suite",
    rate: 495,
    tagline: "All-inclusive, furnished, flexible terms",
    note: "Ideal for satellite teams",
    occupation: "Immediate",
  },
  {
    id: "phase2",
    name: "Phase 2 Towers",
    rate: 255,
    tagline: "New premium P-grade, develop-to-suit",
    note: "Fit-out allowance up to R3,500/m²",
    occupation: "From Q1 2027",
    recommended: true,
    fitout: "up to R3,500/m²",
  },
  {
    id: "buildingA",
    name: "Building A",
    rate: 215,
    tagline: "Established P-grade, immediate occupation",
    note: "Move-in ready",
    occupation: "Immediate",
  },
];

export const leaseTerms = [
  { label: "Lease length", value: "5-year standard · 7–10 year options" },
  { label: "Escalation", value: "7% per annum" },
  { label: "Parking ratio", value: "4 bays / 100 m², covered, basement, access-controlled" },
  { label: "Parking rate", value: "R1,250 per covered bay / month" },
  { label: "Occupation", value: "Flexi & Building A, immediate · Phase 2, from Q1 2027" },
];

export const included = [
  "Operating costs & municipal rates",
  "Common-area maintenance",
  "Backup power & water infrastructure",
];

export const excluded = ["Tenant electricity & water consumption", "Parking", "VAT"];

export const pricingDisclaimer =
  "Indicative pricing for discussion only, gross rentals incl. operating costs & rates, excl. VAT, assuming a 5-year lease at 7% annual escalation. A formal costed proposal will be prepared to Nedbank's confirmed requirement.";

/* ---------- Building performance ---------- */
export const performanceStats = [
  { value: "5-Star", label: "Green Star (Design) rating" },
  { value: "~45%", label: "Lower energy use vs. baseline" },
  { value: "1.2 MWp", label: "On-site solar · Blume Energy" },
  { value: "~120", label: "kWh/m²/yr energy-use target" },
];

export const slaTable = [
  {
    system: "Backup power",
    spec: "N+1 generators · UPS on critical systems",
    metric: "99.9% uptime SLA · 48 h on-site fuel",
  },
  {
    system: "Backup water",
    spec: "On-site storage · recycling & efficiency fixtures",
    metric: "2 days storage",
  },
  {
    system: "Metering",
    spec: "Smart metering · tenant sub-metering",
    metric: "Live consumption visibility",
  },
];

/* ---------- Dedicated team ---------- */
export const team = [
  {
    name: "Lerato Mokoena",
    role: "Head of Corporate Leasing",
    company: "Abcon Developments",
    phone: "011 510 9724",
    email: "lerato.mokoena@abcondev.co.za",
    image: "/images/account-manager.jpg" as string | null,
    initials: "LM",
  },
];

/* ---------- Competitive set ---------- */
export const compColumns = ["Sandton Gate", "Waterfall", "Rosebank", "Current Sandton campus"];

export const compRows: { criterion: string; values: string[]; best: number[] }[] = [
  { criterion: "Stays in your Sandton node", values: ["Yes, 5 min away", "No", "No", "Yes (in situ)"], best: [0, 3] },
  { criterion: "Building spec", values: ["New 2027 build", "Newer stock", "Newer stock", "Opened 2003 / 2011"], best: [0] },
  { criterion: "Proximity to Sandton CBD", values: ["5 min", "~15 min", "~12 min", "In Sandton"], best: [0] },
  { criterion: "Public transport (Gautrain/BRT)", values: ["Gautrain + BRT", "Limited / bus", "Gautrain", "Gautrain"], best: [0] },
  { criterion: "Green rating", values: ["5-Star Green", "4–5 Star", "4-Star", "Pre-current standards"], best: [0] },
  { criterion: "Backup power & water", values: ["Full N+1 + water", "Partial", "Partial", "Retrofit required"], best: [0] },
  { criterion: "Amenities / lifestyle", values: ["Gym · retail · residences", "Mall nearby", "Mall + Gautrain", "Established campus"], best: [0] },
  { criterion: "Single-owner accountability", values: ["Yes, one group", "Multiple landlords", "Multiple landlords", "Self-managed"], best: [0] },
  { criterion: "Develop-to-suit flexibility", values: ["Yes, in-house", "Limited", "Limited", "Constrained by age"], best: [0] },
  { criterion: "Existing Nedbank partnership", values: ["Yes. POD & Reso", "No", "No", "n/a"], best: [0] },
];
