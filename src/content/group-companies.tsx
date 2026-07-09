/**
 * ABOUT ABCON, group overview + group-company directory.
 *
 * Content is researched/illustrative and drawn from the public Abcon Group site
 * (https://abcongroup.co.za/group-companies/) and each company's own site.
 * Logos in /public/images/companies are PLACEHOLDER wordmarks, replace with the
 * official assets (see that folder's README).
 */

export const abconOverview = {
  eyebrow: "About the Abcon Group",
  title: "Four decades of building, backing and running South Africa's spaces.",
  lead:
    "For over 40 years the Abcon Group has taken an integrated approach to property development, investment and management. What began in 1981 as a Sandton residential builder has grown into a collaborative group of companies operating well beyond property, across energy, food and agriculture, fuel retail, security technology and private equity.",
  body: [
    "The Group's model is deliberately different from a typical developer: it develops, builds, manages and co-invests in its own assets, keeping accountability under one roof while giving each company the freedom to lead in its own field. That entrepreneurial spirit, paired with trusted local and global partnerships, is what has propelled the Group forward for more than four decades.",
    "Today the Abcon Group is headquartered in Bryanston, Johannesburg, with offices in Cape Town and Pretoria and investment interests spanning several continents. It remains a long-term owner of its assets, which is why partners, from blue-chip corporates to co-investing banks, return to build with the Group again and again.",
  ],
  leadership: [
    { name: "Thys Neser", role: "Group Chairman" },
    { name: "Dave Savage", role: "Group Chief Executive" },
  ],
};

export const abconStats: { to: number; prefix?: string; suffix?: string; label: string }[] = [
  { to: 40, suffix: "+", label: "Years since 1981" },
  { to: 15, suffix: "+", label: "Group companies" },
  { to: 30, suffix: "MW+", label: "Solar developed" },
  { to: 3, prefix: "R", suffix: "bn", label: "Sandton Gate precinct" },
];

export type GroupCompany = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  logo: string;
};

export type CompanyCategory = {
  id: string;
  title: string;
  intro: string;
  companies: GroupCompany[];
};

// Real logo files where we have them; the rest fall back to a placeholder SVG.
const REAL_LOGOS: Record<string, string> = {
  "abcon-developments": "abcon-logo-1.png",
  "craft-homes": "craft-logo.png",
  strive: "strive-logo.png",
  ignite: "ignite-logo.png",
  valgro: "valgro-logo-1.png",
  "blume-energy": "blume-logo-1.png",
  "rise-energy": "rise-logo.png",
  "pod-fund": "pod-logo.png",
  "reso-fund": "reso-logo.png",
  "vula-fund": "vula-logo.png",
  aih: "AIH-logo.png",
  tadvest: "tadvest-logo.png",
  "abcon-foundation": "agf-logo.png",
};

const logo = (slug: string) => `/images/companies/${REAL_LOGOS[slug] ?? `${slug}.svg`}`;

export const companyCategories: CompanyCategory[] = [
  {
    id: "development",
    title: "Property development & construction",
    intro: "The Group's origin and backbone, developing and building commercial and residential space at scale.",
    companies: [
      {
        slug: "abcon-developments",
        name: "Abcon Developments",
        tag: "Commercial developer",
        blurb:
          "The Group's commercial real-estate developer (formerly Abland), delivering bespoke office, retail, motor and industrial space, and the co-developer, with Tiber, of the Sandton Gate precinct.",
        logo: logo("abcon-developments"),
      },
      {
        slug: "craft-homes",
        name: "Craft Homes",
        tag: "Residential developer & builder",
        blurb:
          "An established residential developer and builder since 1993 (formerly Sable Homes), with 60+ projects and 7,000+ units sold across the market, from affordable to luxury, spanning development, construction and sales.",
        logo: logo("craft-homes"),
      },
      {
        slug: "grit",
        name: "Grit",
        tag: "Building solutions",
        blurb:
          "A building-solutions company that plans, constructs and implements structural additions and fit-outs for commercial and mixed-use properties.",
        logo: logo("grit"),
      },
    ],
  },
  {
    id: "services",
    title: "Property services & management",
    intro: "Running precincts and buildings day-to-day, and finding value most landlords leave on the table.",
    companies: [
      {
        slug: "strive",
        name: "Strive",
        tag: "Property & precinct management",
        blurb:
          "The Group's property and precinct management arm (formerly Abreal): facilities management, tenant services, and utilities, water and solar innovations.",
        logo: logo("strive"),
      },
      {
        slug: "ignite",
        name: "Ignite",
        tag: "Precinct management",
        blurb:
          "Precinct-management specialists who coordinate property owners, businesses and local councils into one seamless, well-run precinct.",
        logo: logo("ignite"),
      },
      {
        slug: "valgro",
        name: "Valgro",
        tag: "Alternative revenue",
        blurb:
          "Identifies and manages alternative revenue streams within property: signage, naming rights and underused assets, sitting on the landlord's side of the table.",
        logo: logo("valgro"),
      },
    ],
  },
  {
    id: "energy",
    title: "Energy",
    intro: "Real renewable generation and energy security, 30MW+ of solar developed and growing.",
    companies: [
      {
        slug: "blume-energy",
        name: "Blume Energy",
        tag: "Turnkey energy solutions",
        blurb:
          "A turnkey solar PV, battery-storage and smart-metering provider that also acts as an energy fund and development partner, 30MW+ of solar developed, 15MW under management, enabling clean power with no capex impact for tenants.",
        logo: logo("blume-energy"),
      },
      {
        slug: "rise-energy",
        name: "Rise Energy Fund",
        tag: "Renewable-energy fund",
        blurb:
          "A renewable-energy fund giving investors a platform to participate in solar generation, battery storage and other clean-energy technologies.",
        logo: logo("rise-energy"),
      },
    ],
  },
  {
    id: "funds",
    title: "Real-estate & energy funds",
    intro: "Co-investment vehicles, often built with banks and institutional partners, including Nedbank.",
    companies: [
      {
        slug: "pod-fund",
        name: "POD Property Fund",
        tag: "Convenience-retail fund",
        blurb:
          "A capital-growth fund founded by Abcon, Safika and Nedbank, focused on convenience-retail development and investment in medium-to-high LSM areas.",
        logo: logo("pod-fund"),
      },
      {
        slug: "reso-fund",
        name: "Reso Fund",
        tag: "Residential fund",
        blurb:
          "An unlisted residential fund founded in 2019 by Craft Homes and Nedbank, investing at cost into prime residential development opportunities.",
        logo: logo("reso-fund"),
      },
      {
        slug: "vula-fund",
        name: "Vula Retail Property Fund",
        tag: "Level-1 B-BBEE impact fund",
        blurb:
          "A Level-1 B-BBEE fund investing in convenience-retail property across townships and rural areas, with the intent of positive social impact in those communities.",
        logo: logo("vula-fund"),
      },
      {
        slug: "aih",
        name: "AIH Investment Holdings",
        tag: "Private property portfolios",
        blurb:
          "Four private portfolios housing the commercial developments and strategic land holdings the Group's founders and shareholders have invested in over 40 years.",
        logo: logo("aih"),
      },
    ],
  },
  {
    id: "investments",
    title: "Private equity & investments",
    intro: "The Group's diversified investment arm, with assets across South Africa and around the world.",
    companies: [
      {
        slug: "tadvest",
        name: "Tadvest",
        tag: "Private investment holding (SEM/NSX-listed)",
        blurb:
          "The Group's private-investment arm, listed on SEM/NSX, holding a diversified portfolio of private-equity, listed and property investments with global exposure.",
        logo: logo("tadvest"),
      },
      {
        slug: "country-mushrooms",
        name: "Country Mushrooms",
        tag: "Agribusiness",
        blurb:
          "The Group's first private-equity business, one of South Africa's largest fresh-mushroom producers, having grown from 12 to close to 100 tons per week.",
        logo: logo("country-mushrooms"),
      },
      {
        slug: "oilgro",
        name: "Oilgro",
        tag: "Fuel retail",
        blurb: "A fuel-retail business operating 22 filling stations nationally.",
        logo: logo("oilgro"),
      },
      {
        slug: "trakka",
        name: "Trakka Systems",
        tag: "Security & optical technology",
        blurb:
          "The Group's first international equity investment, an Australia-based designer of high-intensity searchlights and gyro-stabilised camera and optical systems for airborne, ground and maritime use worldwide.",
        logo: logo("trakka"),
      },
    ],
  },
  {
    id: "foundation",
    title: "Social impact",
    intro: "The Group's corporate social investment, focused on the built environment.",
    companies: [
      {
        slug: "abcon-foundation",
        name: "Abcon Group Foundation",
        tag: "Corporate social investment",
        blurb:
          "The Group's CSI arm (established 2013), delivering socio-economic development, skills development & training, and enterprise & supplier development within South Africa's built environment.",
        logo: logo("abcon-foundation"),
      },
    ],
  },
];
