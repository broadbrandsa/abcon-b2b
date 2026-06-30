import type { ReactNode } from "react";

/**
 * Central content source for the Sandton Gate × Nedbank proposal.
 *
 * All copy, figures and option data live here so the section components stay
 * structural. Edit this file to update the proposal without touching markup.
 */

export const meta = {
  client: "Nedbank",
  developer: "Abcon Developments",
  project: "Sandton Gate",
  address: "25 Minerva Avenue, Glenadrienne, Sandton",
  leasing: "011 510 9724",
  web: "abcondev.co.za",
} as const;

/**
 * Account manager shown in the contact card near the foot of the page.
 * `image` is an optional path under /public (e.g. "/images/account-manager.jpg");
 * when null, a styled portrait placeholder is rendered. Illustrative details.
 */
export const accountManager = {
  name: "Lerato Mokoena",
  role: "Senior Leasing Manager",
  company: "Abcon Developments",
  initials: "LM",
  phone: "011 510 9724",
  mobile: "082 555 0143",
  email: "lerato.mokoena@abcondev.co.za",
  image: "/images/account-manager.jpg" as string | null,
  note: "Your dedicated point of contact for the Sandton Gate proposal — for viewings, fit-out options and commercial terms.",
};

export const navLinks = [
  { href: "#why-client", label: "Why Nedbank" },
  { href: "#ecosystem", label: "The Offering" },
  { href: "#building", label: "The Precinct" },
  { href: "#invest", label: "Investment" },
  { href: "#compare", label: "Why Sandton Gate" },
] as const;

export const heroMeta = [
  { value: "1 partner", label: "The whole value chain" },
  { value: "15+", label: "Group companies" },
  { value: "5-Star", label: "Green Star rating" },
  { value: "5 min", label: "To Sandton CBD" },
] as const;

export const whyCards = [
  {
    num: "01",
    title: "40 years, end-to-end",
    body: "Founded in 1981. Abcon Developments builds it, Strive manages it, and the Group's funds co-invest — a single line of accountability from design to daily operations.",
  },
  {
    num: "02",
    title: "Develop-to-suit",
    body: "In-house development and construction capability means space can be custom-built and fitted to Nedbank's exact brief, brand and headcount.",
  },
  {
    num: "03",
    title: "Energy security built in",
    body: "Through its Rise and Blume energy arms (30MW+ solar developed), Abcon delivers genuine green credentials and resilience — not greenwashing.",
  },
  {
    num: "04",
    title: "Blue-chip track record",
    body: "Developer of the Pick n Pay head office and 100 000m² distribution centre, Alice Lane, the 800ha Hazeldean precinct and S&J Industrial Estate. Proven at enterprise scale.",
  },
  {
    num: "05",
    title: "A long-term owner",
    body: "Abcon holds and co-invests in its assets. That means a stable landlord with skin in the game for the full lease term — not a developer looking for the next flip.",
  },
  {
    num: "06",
    title: "Transformation aligned",
    body: "The Abcon Group Foundation drives skills, enterprise and supplier development — supporting Nedbank's own B-BBEE and ESG scorecards.",
  },
] as const;

export const buildingFeatures = [
  {
    k: "10 000m²",
    title: "New premium P-grade offices",
    body: "Two towers of fully customisable space — full floors for an HQ or semi-serviced Flexi Suites for satellite teams.",
  },
  {
    k: "5★",
    title: "Green Star rated",
    body: "Sustainable, low-impact design with the wellness and efficiency a modern financial-services workforce expects.",
  },
  {
    k: "24/7",
    title: "Resilient & secure",
    body: "Backup power by Blume Energy, backup water, and round-the-clock security built to Trakka's global standard.",
  },
  {
    k: "2",
    title: "Gautrain & BRT routes",
    body: "On both public-transport networks — staff connect from across the city without touching the CBD gridlock.",
  },
] as const;

export type FitPanel = {
  id: string;
  tab: string;
  who: string;
  heading: string;
  intro: string;
  points: { lead: string; rest: string }[];
  /** Group company ids (from ecosystem) that sell hardest to this persona. */
  companies: string[];
};

export const fitPanels: FitPanel[] = [
  {
    id: "coo",
    tab: "Facilities / COO",
    who: "For operations",
    heading: "Resilience you don't have to think about.",
    intro:
      "Backup power and water, 24/7 security and a single in-house management team (Strive) mean business continuity is engineered in — not bolted on.",
    points: [
      { lead: "Uninterrupted operations", rest: " — full backup power and water across the precinct." },
      { lead: "One management partner", rest: " — Strive handles maintenance, services and precinct management directly." },
      { lead: "Secure by design", rest: " — access-controlled basement parking and round-the-clock security." },
    ],
    companies: ["strive", "ignite"],
  },
  {
    id: "cfo",
    tab: "CFO / Finance",
    who: "For finance",
    heading: "Flexible commitment, predictable cost.",
    intro:
      "Scale from full customisable floors to semi-serviced Flexi Suites, and lean on Abcon's solar generation to take the edge off energy costs and load-shedding risk.",
    points: [
      { lead: "Right-size the footprint", rest: " — full floors or flexible suites, expanding as headcount grows." },
      { lead: "Lower running costs", rest: " — on-site solar and green-rated efficiency reduce energy spend." },
      { lead: "Develop-to-suit", rest: " — fit-out aligned to budget on an open-book or fixed-price basis." },
    ],
    companies: ["blume", "valgro"],
  },
  {
    id: "brand",
    tab: "Brand / People",
    who: "For brand & people",
    heading: "A green workplace that wins the talent war.",
    intro:
      "A 5-Star Green, amenity-rich precinct five minutes from 135 Rivonia — Planet Fitness, dining, a piazza, river-edge green space and on-site homes — that lives Nedbank's 'see money differently' purpose and gives people a reason to come in.",
    points: [
      { lead: "Values made visible", rest: " — a sustainable HQ that signals what Nedbank stands for." },
      { lead: "Staff wellbeing", rest: " — gym, dining and walkable green space on the doorstep." },
      { lead: "Live-work-play", rest: " — Craft Homes & The Terrace residences within the precinct." },
    ],
    companies: ["craft", "terrace"],
  },
  {
    id: "esg",
    tab: "ESG / Risk",
    who: "For ESG & risk",
    heading: "ESG outcomes you can take to the board.",
    intro:
      "Sandton Gate maps onto Nedbank's public commitments: a 5-Star Green building and ~1.2 MWp of on-site solar advance your carbon-neutral-facilities-by-2035 and net-zero-by-2050 targets, while the Level-1 Vula fund and Abcon Group Foundation support your transformation scorecard.",
    points: [
      { lead: "Carbon-neutral by 2035", rest: " — a solar-powered, 5-Star design lowers operational emissions at source." },
      { lead: "Net-zero aligned", rest: " — a green-rated precinct supports your 2050 commitment, not just offsets." },
      { lead: "Transformation", rest: " — the Level-1 Vula fund and Abcon Group Foundation strengthen your B-BBEE & ESG scorecard." },
    ],
    companies: ["rise", "vula", "foundation"],
  },
];

export type FloorStatus = "now" | "offer" | "soon";

export const floors: {
  level: string;
  size: number;
  sizeLabel: string;
  status: FloorStatus;
  statusLabel: string;
}[] = [
  { level: "1st Floor", size: 251, sizeLabel: "251", status: "now", statusLabel: "Immediate" },
  { level: "1st Floor", size: 180, sizeLabel: "180", status: "now", statusLabel: "Immediate" },
  { level: "2nd Floor", size: 329, sizeLabel: "329", status: "now", statusLabel: "Immediate" },
  { level: "4th Floor", size: 278, sizeLabel: "278", status: "offer", statusLabel: "Under offer" },
  { level: "Phase 2 Towers", size: 10000, sizeLabel: "10 000", status: "soon", statusLabel: "Customisable" },
  { level: "Building A", size: 13000, sizeLabel: "13 000", status: "soon", statusLabel: "By arrangement" },
];

export type SpaceOption = {
  id: string;
  name: string;
  building: string;
  sizeLabel: string;
  /** Usable area in m² this option tops out at — drives the live fit logic. */
  maxArea: number;
  blurb: string;
};

/**
 * Tiered space options for the calculator, smallest → largest. As the team
 * size changes, the calculator recommends the smallest option whose area can
 * accommodate the requirement (at ~13m²/person). Sizes are illustrative.
 */
export const spaceOptions: SpaceOption[] = [
  {
    id: "flexi",
    name: "Flexi Suite",
    building: "Building A · Ground floor",
    sizeLabel: "≈ 300 m²",
    maxArea: 300,
    blurb:
      "Semi-serviced, plug-and-play suite with shared reception and meeting rooms — ideal for a satellite or project team.",
  },
  {
    id: "floor",
    name: "Single Full Floor",
    building: "Building A · Floors 1–4",
    sizeLabel: "≈ 1 000 m²",
    maxArea: 1000,
    blurb:
      "A dedicated full floor with your own access control, branding, tea points and meeting rooms.",
  },
  {
    id: "stack",
    name: "Two Combined Floors",
    building: "Building C · stacked floors",
    sizeLabel: "2 floors · ≈ 2 600 m²",
    maxArea: 2600,
    blurb:
      "Adjoining floors linked by an internal stair — a connected home for a full department.",
  },
  {
    id: "building",
    name: "Building A — entire",
    building: "Standalone building",
    sizeLabel: "≈ 13 000 m²",
    maxArea: 13000,
    blurb:
      "Your own building within the precinct: signage rights, a private lobby and dedicated parking.",
  },
  {
    id: "hq",
    name: "Phase 2 HQ Towers",
    building: "Two new P-grade towers",
    sizeLabel: "≈ 20 000 m²",
    maxArea: 20000,
    blurb:
      "Purpose-built, develop-to-suit headquarters campus across two towers — customised to Nedbank's exact brief.",
  },
];

export const amenities: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "2 500m² Planet Fitness",
    body: "A flagship gym inside the precinct for your team.",
    icon: <path d="M6 4v16M18 4v16M6 12h12M4 8h4M4 16h4M16 8h4M16 16h4" />,
  },
  {
    title: "The Piazza",
    body: "A vibrant public square with restaurants & cafés.",
    icon: <path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-5h6v5" />,
  },
  {
    title: "River-edge greenery",
    body: "Walkways along the revitalised Braamfontein Spruit.",
    icon: (
      <>
        <path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  },
  {
    title: "Convenience retail",
    body: "12 000m² of curated shopping & dining at your door.",
    icon: <path d="M5 20V6a2 2 0 0 1 2-2h7l5 5v11M14 4v5h5" />,
  },
  {
    title: "24/7 secure parking",
    body: "Access-controlled basement bays for staff & guests.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="11" rx="2" />
        <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      </>
    ),
  },
  {
    title: "Backup power & water",
    body: "Resilient utilities for uninterrupted operations.",
    icon: <path d="M4 17l5-5 4 4 7-8M4 7h4M4 12h2" />,
  },
  {
    title: "Salon & services",
    body: "Beauticians and everyday conveniences on site.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
  },
  {
    title: "136 residences",
    body: "Luxury apartments & penthouses within the precinct.",
    icon: <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />,
  },
];

export const distances = [
  { place: "Sandton CBD", value: "5", unit: " min" },
  { place: "Gautrain bus route", value: "On", unit: " route" },
  { place: "BRT bus route", value: "On", unit: " route" },
  { place: "Rosebank", value: "12", unit: " min" },
  { place: "OR Tambo Int.", value: "35", unit: " min" },
] as const;

export const proofItems = [
  { name: "Pick n Pay", body: "Developed the Cape Town head office and a 100 000m²+ distribution centre." },
  { name: "Alice Lane, Sandton", body: "Premium office landmark in the heart of the Sandton CBD." },
  { name: "Hazeldean Precinct", body: "A mixed-use precinct spanning more than 800 hectares in Pretoria." },
  { name: "S&J Industrial Estate", body: "250+ hectare estate in Germiston, in partnership with Redefine." },
  { name: "Motorcity & dealerships", body: "100+ motor dealerships developed across the country." },
  { name: "Sandton Gate", body: "The R3-billion precinct co-developed with Tiber that you're considering." },
  { name: "Blume & Rise Energy", body: "30MW+ of solar developed — real renewable generation, not greenwashing." },
  { name: "Valgro", body: "100 tons of food produced per week through the group's agribusiness." },
  { name: "Trakka", body: "Security technology developed in South Africa and deployed globally." },
] as const;

export const proofStats: { to: number; prefix?: string; suffix?: string; label: string }[] = [
  { to: 40, suffix: "+", label: "Years developing" },
  { to: 30, suffix: "MW+", label: "Solar developed" },
  { to: 15, suffix: "+", label: "Group companies" },
  { to: 100, suffix: " t/wk", label: "Food produced" },
];
