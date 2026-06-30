import type { ReactNode } from "react";

/**
 * The Abcon ecosystem, framed as capabilities that already live inside
 * Nedbank's future building — not a directory of companies. Each entry pairs a
 * group company with the one-line benefit it delivers to the tenant, the
 * capability category it belongs to, and the decision-maker personas it sells
 * to (ids match the decision-fit tabs: coo / cfo / brand / esg).
 */

export type PersonaId = "coo" | "cfo" | "brand" | "esg";
export type CategoryId = "build" | "power" | "run" | "secure" | "live" | "invest";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "build", label: "Develop & Build" },
  { id: "power", label: "Power" },
  { id: "run", label: "Run & Manage" },
  { id: "secure", label: "Secure" },
  { id: "live", label: "Live" },
  { id: "invest", label: "Invest & Sustain" },
];

export type Company = {
  id: string;
  name: string;
  does: string;
  benefit: string;
  category: CategoryId;
  personas: PersonaId[];
  icon: ReactNode;
};

const i = (d: string) => <path d={d} />;

export const companies: Company[] = [
  {
    id: "abcon-dev",
    name: "Abcon Developments",
    does: "Develops & builds",
    benefit: "Designs and builds your HQ in-house, to Nedbank's exact brief.",
    category: "build",
    personas: ["coo", "cfo"],
    icon: i("M3 21h18M6 21V8l6-4 6 4v13M9 12h2M13 12h2M9 16h2M13 16h2"),
  },
  {
    id: "grit",
    name: "Grit",
    does: "Commercial fit-out",
    benefit: "Turnkey fit-out of your floors — workspace delivered, not outsourced.",
    category: "build",
    personas: ["coo", "brand"],
    icon: i("M4 7h16v4H4zM4 14h10v3H4zM17 13l3 3-3 3M20 16h-6"),
  },
  {
    id: "strive",
    name: "Strive",
    does: "Property & facilities management",
    benefit: "One in-house team manages your building day-to-day — not a contractor chain.",
    category: "run",
    personas: ["coo"],
    icon: i("M4 7h16M4 12h16M4 17h10M18 15l2 2-4 4-2-2z"),
  },
  {
    id: "ignite",
    name: "Ignite",
    does: "Precinct operations",
    benefit: "Runs precinct services end-to-end, so business continuity is engineered in.",
    category: "run",
    personas: ["coo"],
    icon: i("M13 2 4 14h7l-1 8 9-12h-7z"),
  },
  {
    id: "blume",
    name: "Blume Energy",
    does: "Solar & energy",
    benefit: "On-site solar that powers your floors and softens load-shedding risk.",
    category: "power",
    personas: ["cfo", "esg"],
    icon: i("M12 3v3M12 18v3M5 5l2 2M17 17l2 2M3 12h3M18 12h3M5 19l2-2M17 7l2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"),
  },
  {
    id: "rise",
    name: "Rise Energy Fund",
    does: "Renewable investment",
    benefit: "Funds the renewable generation that stands behind your building.",
    category: "power",
    personas: ["esg", "cfo"],
    icon: i("M4 19h16M7 16l4-5 3 3 5-7"),
  },
  {
    id: "trakka",
    name: "Trakka Systems",
    does: "Security technology",
    benefit: "Building-wide security technology and monitoring across the precinct.",
    category: "secure",
    personas: ["esg", "coo"],
    icon: i("M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"),
  },
  {
    id: "oilgro",
    name: "Oilgro",
    does: "Fuel & fleet",
    benefit: "On-site fuel and fleet convenience for staff and operations.",
    category: "run",
    personas: ["brand", "coo"],
    icon: i("M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M4 21h12M5 11h10M16 8l3 3v6a2 2 0 0 0 2-2v-6l-3-3"),
  },
  {
    id: "craft",
    name: "Craft Homes",
    does: "Residential developer",
    benefit: "On-site homes so Nedbank staff can live where they work.",
    category: "live",
    personas: ["brand", "esg"],
    icon: i("M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"),
  },
  {
    id: "terrace",
    name: "The Terrace",
    does: "Luxury residences",
    benefit: "Premium on-site residences anchoring the live-work-play precinct.",
    category: "live",
    personas: ["brand"],
    icon: i("M3 21V8l9-5 9 5v13M8 21v-6h3v6M14 13h3v3h-3z"),
  },
  {
    id: "valgro",
    name: "Valgro",
    does: "Naming rights & signage",
    benefit: "Premium naming-rights and signage that put Nedbank's brand on the skyline.",
    category: "invest",
    personas: ["brand", "cfo"],
    icon: i("M4 4h16v6H4zM7 10v10M17 10v10M4 20h16"),
  },
  {
    id: "reso",
    name: "Reso Fund",
    does: "Residential fund · with Nedbank",
    benefit: "An existing Craft Homes–Nedbank partnership already delivering homes.",
    category: "invest",
    personas: ["cfo", "esg"],
    icon: i("M4 20h16M6 20V9M10 20V6M14 20v-8M18 20V4"),
  },
  {
    id: "pod",
    name: "POD Fund",
    does: "Property fund · with Nedbank",
    benefit: "An existing Abcon–Safika–Nedbank property investment partnership.",
    category: "invest",
    personas: ["cfo"],
    icon: i("M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7zM9 12l2 2 4-4"),
  },
  {
    id: "vula",
    name: "Vula Fund",
    does: "Investment vehicle",
    benefit: "Group co-investment vehicle — long-term aligned ownership of the asset.",
    category: "invest",
    personas: ["cfo"],
    icon: i("M4 20h16M4 16h16M9 16V8l3-4 3 4v8"),
  },
  {
    id: "foundation",
    name: "Abcon Group Foundation",
    does: "Social impact",
    benefit: "Skills, enterprise & supplier development — reportable ESG and B-BBEE.",
    category: "invest",
    personas: ["esg"],
    icon: i("M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"),
  },
];

/** Companies that orbit the building in the ecosystem map (operating capabilities; funds shown separately). */
export const orbitCompanies = companies.filter((c) => !["reso", "pod", "vula"].includes(c.id));

/** Existing Abcon × Nedbank ventures — the "we already build together" proof. */
export const partnerships = [
  {
    year: "2013",
    fund: "POD Property Fund",
    partners: "Abcon · Safika · Nedbank",
    body: "A property investment partnership — Nedbank, alongside Abcon and Safika.",
  },
  {
    year: "2019",
    fund: "Reso Fund",
    partners: "Craft Homes · Nedbank",
    body: "Residential delivered at scale, with Nedbank funding Craft Homes.",
  },
  {
    year: "2026",
    fund: "Sandton Gate HQ",
    partners: "Abcon · Nedbank",
    body: "The natural next chapter — your headquarters inside the precinct.",
    highlight: true,
  },
] as const;

/** Office gallery — illustrative captions for the building image carousel. */
export const officeGallery = [
  { src: "/office/yibei-geng--UdYbiywGeg-unsplash.jpg", caption: "Double-volume reception atrium" },
  { src: "/office/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg", caption: "P-grade open-plan workspace" },
  { src: "/office/copernico--8DAN9_oi8g-unsplash.jpg", caption: "Collaboration lounge & breakout" },
  { src: "/office/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg", caption: "Executive boardroom suite" },
  { src: "/office/arlington-research-kN_kViDchA0-unsplash.jpg", caption: "Agile project studios" },
  { src: "/office/nrd-c3tNiAb098I-unsplash.jpg", caption: "Sky-lit stairwell & circulation" },
  { src: "/office/rodeo-project-management-software-PYqzYhTNjho-unsplash.jpg", caption: "River-facing meeting rooms" },
] as const;
