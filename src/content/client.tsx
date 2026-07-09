import type { ReactNode } from "react";

/**
 * CLIENT PROFILE, swappable personalisation layer.
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
    line1: "More than a lease.",
    em: "A fully-run workplace",
    line2: "built for Nedbank.",
    sub: "An invitation for Nedbank to anchor Sandton Gate. A lease gets you a shell; Abcon gives you a workplace that's built, powered, managed and secured for you, five minutes from your 135 Rivonia campus, so your team just moves in.",
  },

  // Public targets reused across the page (performance, tabs, etc.).
  targets: {
    carbonNeutralFacilities: "2035",
    netZero: "2050",
    carbonNeutralSince: "2009",
    sdf: "~R189bn",
  },

  // "Why Nedbank chooses Abcon", each pairs a public Nedbank commitment with
  // how Sandton Gate / the Abcon group advances it.
  commitments: [
    {
      id: "in-sandton",
      commitment: "Already a Sandton occupier at the 135 Rivonia campus.",
      delivery:
        "Expand or consolidate ~5 minutes away, a phased move with no disruption to staff, clients or your established Sandton node.",
      icon: icon("M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"),
    },
    {
      id: "sustainable-finance",
      commitment: "You already build with us. POD & Reso, and ~R189bn in sustainable finance.",
      delivery:
        "This isn't a cold pitch: Nedbank co-invests with the Abcon group via the POD Property Fund and Reso Fund. Anchoring Sandton Gate is the next chapter of a partnership you already trust.",
      icon: icon("M4 19h16M7 16l4-5 3 3 5-7"),
    },
    {
      id: "transformation",
      commitment: "Level-1 B-BBEE contributor and transformation leader.",
      delivery: "The Abcon Group Foundation and the Level-1 Vula fund support your B-BBEE and ESG scorecard.",
      icon: icon("M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"),
    },
    {
      id: "see-differently",
      commitment: "One integrated group, build, power, secure, manage.",
      delivery:
        "A values-aligned partner that owns the whole chain in-house: Abcon Developments & Grit build it, Strive runs it, Blume powers it, one line of accountability.",
      icon: icon("M4 7h16M4 12h16M4 17h10M18 15l2 2-4 4-2-2z"),
    },
    {
      id: "first-green",
      commitment: "You set SA's green-office standard at 135 Rivonia, its first 5-Star building.",
      delivery:
        "Sandton Gate complements that leadership: a newer 5-Star Green Star build with ~1.2 MWp of on-site solar and smart metering, a natural fit for the goals you already lead on.",
      icon: icon("M12 3C7 8 7 14 12 21 17 14 17 8 12 3zM12 8v13"),
    },
    {
      id: "carbon-neutral",
      commitment: "Carbon-neutral in operations since 2009; net-zero by 2050.",
      delivery:
        "A green-rated, solar-powered precinct also helps lower operational emissions at source, supporting the net-zero path you've committed to.",
      icon: icon("M21 12a9 9 0 1 1-3-6.7M21 4v4h-4"),
    },
  ] as { id: string; commitment: string; delivery: string; icon: ReactNode }[],
};
