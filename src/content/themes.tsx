/**
 * Thematic content for the restructured, single-theme sections.
 * All figures ILLUSTRATIVE for an example proposal — subject to confirmation.
 */

/* ---------- The Precinct ---------- */
export const precinctStats = [
  { v: "R3bn", l: "Precinct investment" },
  { v: "5-Star", l: "Green Star (Design)" },
  { v: "~35 000m²", l: "P-grade office GLA" },
  { v: "12 000m²", l: "Curated retail" },
];

export const precinctComposition = [
  { k: "Offices", v: "Premium P-grade — Phase 2 towers ~10,000m² + Building A ~13,000m²" },
  { k: "Retail", v: "12,000m² of curated shopping & dining — Sandton Gate Central" },
  { k: "Residences", v: "136 luxury apartments — The Terrace" },
  { k: "Wellness", v: "2,500m² flagship Planet Fitness" },
  { k: "Community", v: "~26 established commercial tenants already on site" },
];

/* ---------- Location & access ---------- */
export const distances = [
  { place: "Sandton CBD", value: "5", unit: " min" },
  { place: "Nedbank · 135 Rivonia", value: "~5", unit: " min" },
  { place: "Rosebank", value: "12", unit: " min" },
  { place: "Lanseria Airport", value: "~30", unit: " min" },
  { place: "OR Tambo Int.", value: "35", unit: " min" },
] as const;

export const transport = [
  "On the Gautrain feeder-bus route and the BRT / Rea Vaya network",
  "~3-minute walk to the nearest Gautrain bus stop; optional precinct shuttle",
  "Direct access off Winnie Mandela Drive with a ~5-minute link to the N1",
];

export const parkingAccess = [
  "4 bays per 100m² — covered, access-controlled basement",
  "Dedicated visitor bays and EV-charging bays",
  "ANPR (number-plate recognition) entry",
  "End-of-trip: secure bicycle storage, showers & lockers",
];

/* ---------- Floor plans & space ---------- */
export const floorPlateSpecs = [
  "Typical floor plate ~1,250m² — efficient side-core, column-free",
  "Floor-to-ceiling glazing, ~2.7m ceilings, abundant daylight",
  "Raised access floors for flexible cabling and services",
  "Capable of ~1:10 densities — and aligned to Nedbank's current 753–1,986m² plates",
];

export const developToSuit = [
  "A dedicated design team, working open-book or fixed-price",
  "Fit-out allowance up to R3,500/m²",
  "Category-A base build by the landlord + Category-B tenant fit-out",
  "High-speed lifts with destination-control dispatch",
  "VAV HVAC, LED daylight-linked lighting and an integrated building-management system",
];

/* ---------- Power & resilience ---------- */
export const powerHeadline =
  "The precinct runs through prolonged grid outages without interruption — while solar and green-rated efficiency cut your running cost.";

export const powerPoints = [
  {
    title: "On-site solar + storage",
    body: "~1.2 MWp of solar PV plus battery storage, delivered and funded by Blume Energy on a no-capex basis.",
    by: "Blume Energy",
  },
  {
    title: "Backup power",
    body: "N+1 standby diesel generators, 99.9% uptime SLA, 48 hours on-site fuel, auto-transfer in under ~10 seconds, and UPS protection on critical systems and data rooms.",
    by: "Precinct infrastructure",
  },
  {
    title: "Water resilience",
    body: "Municipal supply plus ~2 days of on-site storage, rainwater harvesting, greywater recycling and low-flow fixtures.",
    by: "Precinct infrastructure",
  },
  {
    title: "Smart metering",
    body: "Tenant sub-metering and live consumption dashboards, so you see and manage exactly what you use.",
    by: "Strive",
  },
];

/* ---------- Technology & connectivity ---------- */
export const connectivity = [
  "Redundant, diverse-route fibre entering the building at two separate points",
  "Carrier-neutral — multiple national carriers and a meet-me room",
  "Dedicated comms risers and a cooled, backed-up data-room provision",
  "Gigabit-plus ready; IoT / smart-building ready via the BMS",
];

export const securityPoints = [
  "24/7 manned security and an on-site control room",
  "Biometric / access control and full CCTV coverage",
  "ANPR at entrances; managed visitor and loading-bay control",
  "Segregated tenant networks, designed to support financial-sector control requirements",
  "Backed by the group's global security-technology pedigree (Trakka)",
];

/* ---------- Sustainability & ESG ---------- */
export const sustainabilityPoints = [
  "5-Star Green Star (Design) rating from the GBCSA — targeting an As-Built rating",
  "~45% lower energy than an older comparable office of similar size; EUI target ~120 kWh/m²/yr",
  "~1.2 MWp of on-site solar generation",
  "~40% reduction in potable-water use via recycling and rainwater harvesting",
  "Low-VOC, responsibly-sourced materials",
  "Wellness: daylight, views, indoor air quality, EV charging and cycle facilities",
];

export const esgTieIn =
  "For Nedbank, this advances your carbon-neutral-facilities-by-2035 and net-zero-by-2050 commitments, reduces occupied-space Scope 2 emissions at source, and is reportable in your integrated report.";

export const transformation =
  "Transformation: the Level-1 B-BBEE Vula fund and the Abcon Group Foundation (skills, enterprise and supplier development) contribute to Nedbank's B-BBEE ESD and SED scorecard.";

/* ---------- For your committee ---------- */
export const committee = [
  { role: "Facilities / COO", answers: "Power & Resilience · Technology & Connectivity · One Group, Fully Run", href: "#power" },
  { role: "CFO / Finance", answers: "The Commercials · Power & Resilience · Floor Plans & Your Space", href: "#invest" },
  { role: "Brand / People", answers: "Workplace & Lifestyle", href: "#workplace" },
  { role: "ESG / Risk", answers: "Sustainability & ESG", href: "#sustainability" },
] as const;

export const referencesNote =
  "Sandton Gate is already home to blue-chip professional-services and financial tenants. Named reference tenants are available to Nedbank on request.";
