import type { ReactNode } from "react";

/**
 * CLIENT PROFILE — swappable personalisation layer.
 *
 * Everything that makes this proposal specific to the lead lives here. To
 * re-personalise the same site for a different prospect, replace this object.
 *
 * All third-party facts below are presented as the client's PUBLICLY-STATED
 * commitments (researched, illustrative). They imply no endorsement and should
 * be verified before sending to the real client.
 */

const icon = (d: string) => <path d={d} />;

export const client = {
  name: "Nedbank",
  preparedFor: "Private proposal · Prepared exclusively for Nedbank",
  campus: "135 Rivonia",
  minutesAway: "5",

  hero: {
    lead: "Nedbank set the standard for the",
    em: "green office",
    tail: " in South Africa.",
    line2: "Now occupy one built to it.",
    sub: "An invitation for Nedbank to anchor Sandton Gate — a 5-Star Green precinct five minutes from your 135 Rivonia campus. Every other landlord hands you keys; Abcon hands you one accountable partner across build, power, management and security.",
  },

  // Public targets reused across the page (performance, tabs, etc.).
  targets: {
    carbonNeutralFacilities: "2035",
    netZero: "2050",
    carbonNeutralSince: "2009",
    sdf: "~R189bn",
  },

  // "Why Nedbank chooses Abcon" — each pairs a public Nedbank commitment with
  // how Sandton Gate / the Abcon group advances it.
  commitments: [
    {
      id: "first-green",
      commitment: "You pioneered SA's first Green Star office at 135 Rivonia.",
      delivery:
        "Sandton Gate is 5-Star Green Star, with ~1.2 MWp of Blume on-site solar and smart metering — advancing your carbon-neutral-facilities-by-2035 target.",
      icon: icon("M12 3C7 8 7 14 12 21 17 14 17 8 12 3zM12 8v13"),
    },
    {
      id: "carbon-neutral",
      commitment: "Carbon-neutral in operations since 2009; net-zero by 2050.",
      delivery:
        "Occupying a green-rated, solar-powered precinct lowers your operational footprint at source — not just through offsets.",
      icon: icon("M21 12a9 9 0 1 1-3-6.7M21 4v4h-4"),
    },
    {
      id: "in-sandton",
      commitment: "Already a Sandton occupier at the 135 Rivonia campus.",
      delivery:
        "Expand or consolidate ~5 minutes away — no disruption to staff, clients or your established Sandton node.",
      icon: icon("M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"),
    },
    {
      id: "see-differently",
      commitment: "“See money differently” — backing the green economy.",
      delivery:
        "A values-aligned partner: Rise & Blume renewables, the Vula impact fund and the Abcon Group Foundation.",
      icon: icon("M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"),
    },
    {
      id: "sustainable-finance",
      commitment: "First SA bank to publish lending carbon targets; ~R189bn sustainable finance.",
      delivery:
        "Tenant-and-financier synergy — Sandton Gate and the Rise/Vula funds are exactly the assets you back, and we already co-invest via POD & Reso.",
      icon: icon("M4 19h16M7 16l4-5 3 3 5-7"),
    },
    {
      id: "transformation",
      commitment: "Level-1 B-BBEE contributor and transformation leader.",
      delivery: "The Abcon Group Foundation and the Level-1 Vula fund support your B-BBEE and ESG scorecard.",
      icon: icon("M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"),
    },
  ] as { id: string; commitment: string; delivery: string; icon: ReactNode }[],
};
