import type { ReactNode } from "react";

/**
 * Internal Broadbrand -> Abcon page: the rationale behind the customised
 * proposal microsite, plus a LinkedIn broker-recruitment strategy.
 * Standalone from the client proposal.
 *
 * NOTE ON STATS: every numeric stat on this page is a published third-party
 * industry benchmark with an attributed source (see `sources` below). None are
 * Abcon's own results or projections. Keep it that way — do not invent figures.
 */

const ic = (d: string) => <path d={d} />;

export const strategyIntro = {
  eyebrow: "Broadbrand · for Abcon",
  title: "Why a customised proposal converts your B2B audience.",
  lead: "The Sandton Gate × Nedbank site you've just seen isn't a one-off. It's a repeatable tool we put in the hands of approved brokers — turning a cold enquiry into a warm, qualified conversation — and it plugs straight into a LinkedIn engine we'd run to recruit those brokers in the first place.",
};

export const rationale: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Personalised to the buyer",
    body: "The whole experience speaks to one company — their strategy, their campus, their targets. Relevance is the single biggest driver of B2B response.",
    icon: ic("M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"),
  },
  {
    title: "Interactive, not a static PDF",
    body: "Calculators, a deal room, a booking flow. Prospects spend minutes exploring — and dwell time correlates directly with intent.",
    icon: ic("M4 7h16M4 12h16M4 17h10M18 15l2 2-4 4-2-2z"),
  },
  {
    title: "The medium is the message",
    body: "A live, branded microsite reads as premium before a word is read. It's the difference between a broker emailing a PDF and a broker sending a link to this.",
    icon: ic("M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"),
  },
  {
    title: "Shortens the sales cycle",
    body: "Diligence — cost, resilience, security, transition — is answered up front. Fewer rounds of email, faster to a viewing.",
    icon: ic("M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z"),
  },
  {
    title: "Measurable intent",
    body: "We can see which sections a prospect opens, so the broker follows up on the accounts that are actually engaged — not the ones going cold.",
    icon: ic("M4 19h16M7 16l4-5 3 3 5-7"),
  },
  {
    title: "Reusable & scalable",
    body: "One template, a swappable client profile — a bespoke microsite per target account in hours, not weeks. Account-based marketing at scale.",
    icon: ic("M4 7h16v4H4zM4 14h10v3H4zM17 13l3 3-3 3"),
  },
];

/** Published third-party benchmarks — see `sources`. Not Abcon results. */
export const conversionStats = [
  { to: 2, suffix: "×", label: "More conversions: interactive vs static content" },
  { to: 71, suffix: "%", label: "of B2B buyers now expect personalised experiences" },
  { to: 93, suffix: "%", label: "of marketers say interactive content educates buyers best" },
  { to: 58, suffix: "%", label: "higher lead-to-opportunity from interactive nurture" },
];

/* ---------- LinkedIn strategy ---------- */
export const linkedinIntro = {
  eyebrow: "The engine",
  title: "A LinkedIn strategy that recruits brokers — then arms them.",
  lead: "We run paid LinkedIn campaigns to commercial-property brokers and drive them to a landing page to sign up as approved Abcon brokers. Once approved, a broker can request a personalised proposal like Nedbank's to send to their own clients — so every conversation they open is backed by a premium, on-brand pitch.",
};

export const audience = [
  "Commercial-property & office-leasing brokers",
  "Tenant-rep agents and brokerage principals",
  "Independent dealmakers with corporate tenant relationships",
  "Targeted by geography (Gauteng / Sandton), specialism & seniority",
];

export const funnel: { step: string; title: string; body: string; icon: ReactNode }[] = [
  {
    step: "01",
    title: "Reach",
    body: "LinkedIn PPC — Sponsored Content, Lead-Gen Forms and Conversation Ads — targeting commercial-property brokers.",
    icon: ic("M12 3a9 9 0 1 0 9 9M12 3v9l6.4 6.4M12 3a9 9 0 0 1 9 9h-9"),
  },
  {
    step: "02",
    title: "Land",
    body: "A dedicated broker landing page: the offer to become an approved Abcon broker, the proof, and one clear call to action.",
    icon: ic("M4 7h16v12H4zM4 7l8 6 8-6"),
  },
  {
    step: "03",
    title: "Capture",
    body: "LinkedIn Lead-Gen Form or on-page form → broker applications straight into the CRM, with source and campaign attribution.",
    icon: ic("M12 3v12M8 11l4 4 4-4M5 21h14"),
  },
  {
    step: "04",
    title: "Approve",
    body: "Abcon vets and approves each broker. Approved brokers unlock the ability to request bespoke proposals on demand.",
    icon: ic("M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z"),
  },
  {
    step: "05",
    title: "Equip & convert",
    body: "An approved broker requests a personalised microsite — the Nedbank treatment — to pitch their own client, and brings the warm deal back to Abcon.",
    icon: ic("M20 6 9 17l-5-5"),
  },
];

export const adFormats = ["Sponsored content", "Lead-gen forms", "Conversation / message ads", "Document & carousel ads"];

export const brokerPlay =
  "Brokers already own the tenant relationships. Rather than chase corporates ourselves, we recruit brokers as an approved channel and put a bespoke proposal microsite in each one's hands. Once approved, brokers speak to their own audience — we just make sure they arrive with the best pitch in the market.";

/** Published LinkedIn platform figures — see `sources`. Not Abcon results. */
export const kpis = [
  { v: "80%", l: "of B2B social-media leads come from LinkedIn" },
  { v: "~2.7%", l: "visitor-to-lead rate — roughly 4× Facebook & X" },
  { v: "4 of 5", l: "LinkedIn members drive business decisions" },
  { v: "1B+", l: "members — the largest professional network" },
];

/** What Broadbrand reports back — metric names, deliberately not pre-filled numbers. */
export const reportMetrics = [
  "Cost per approved broker",
  "Approved brokers (net new channel)",
  "Proposals requested per month",
  "Broker-sourced viewings & deals",
];

/** Attribution for every numeric stat on the page. */
export const sources = [
  "Interactive vs static content, buyer education & lead-to-opportunity: Kapost / CXL Institute and Content Marketing Institute.",
  "B2B buyers expecting personalised experiences: McKinsey.",
  "LinkedIn share of B2B social leads, visitor-to-lead rate, member figures: LinkedIn Marketing.",
];

/* ---------- The 90-day rollout ---------- */
export const rollout: { phase: string; weeks: string; title: string; points: string[]; gate?: string }[] = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1–3",
    title: "Build the foundation",
    points: [
      "Broker landing page + application flow, on Abcon's brand",
      "Broker vetting criteria & approval workflow agreed with you",
      "Proposal template productionised (the Nedbank build, made repeatable)",
      "LinkedIn campaign setup: audiences, creative, tracking & CRM hookup",
    ],
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 4–10",
    title: "Pilot in market",
    points: [
      "Campaigns live to Gauteng commercial-property brokers",
      "First brokers vetted, approved and onboarded",
      "First bespoke proposals requested and delivered to their clients",
      "Weekly reporting: cost per broker, proposals requested, engagement",
    ],
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 11–13",
    title: "Review & decide",
    points: [
      "Full pilot readout against the scorecard below",
      "Cost per approved broker and per proposal — actuals, not projections",
      "Scale, adjust or stop — your call, with real data on the table",
    ],
    gate: "Decision gate: nothing scales until the pilot numbers justify it.",
  },
];

/* ---------- Who does what ---------- */
export const split = {
  broadbrand: {
    label: "Broadbrand runs",
    items: [
      "LinkedIn campaign strategy, creative & daily management",
      "Broker landing page — build, hosting & optimisation",
      "Every bespoke proposal microsite, on demand",
      "Tracking, CRM integration & the reporting dashboard",
      "Monthly performance review with your team",
    ],
  },
  abcon: {
    label: "Abcon keeps control of",
    items: [
      "Broker vetting & final approval — nobody joins without your sign-off",
      "Deal facts: spaces, rates, incentives on each proposal",
      "The viewings and the leases — your team closes",
      "Brand sign-off on templates and campaign creative",
      "The kill switch: pause campaigns or revoke a broker any time",
    ],
  },
};

/* ---------- Commercial shape (structure only — pricing tabled separately) ---------- */
export const commercialShape: { title: string; body: string; note: string }[] = [
  {
    title: "Monthly retainer",
    body: "Covers strategy, creative, campaign management, broker-funnel operations and reporting. Fixed and predictable.",
    note: "Sized for a pilot, not an enterprise programme",
  },
  {
    title: "Media budget",
    body: "Your LinkedIn ad spend, paid at cost with no markup. You set the cap; we recommend it, you approve it — and it can pause any day.",
    note: "100% transparent — you see the ad account",
  },
  {
    title: "Proposal production",
    body: "A per-microsite fee once a broker's request is approved. The template does the heavy lifting, so each one is fast and consistent.",
    note: "Only pays when the channel is actually used",
  },
];

export const commercialNote =
  "Rand figures sit in a separate one-page commercial schedule so this decision stays about the model, not the line items. The structure above is the full shape — there are no other fees.";

/* ---------- Risk reversal ---------- */
export const riskReversal: { title: string; body: string }[] = [
  {
    title: "It starts as a pilot",
    body: "A 90-day pilot with a defined budget and a defined scorecard — not an open-ended programme.",
  },
  {
    title: "No long lock-in",
    body: "If the pilot doesn't earn the scale-up, it stops. No multi-year commitment to exit.",
  },
  {
    title: "You own everything",
    body: "The landing page, the proposal template, the broker list, the leads and the data are Abcon's — whoever runs it next.",
  },
  {
    title: "Your brand stays yours",
    body: "Every template, ad and proposal is signed off by Abcon before it ships. Brokers get access; they never get the keys.",
  },
];

/* ---------- Objections / FAQ ---------- */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Won't handing brokers a premium tool cheapen the Abcon brand?",
    a: "The opposite is the risk today: brokers already pitch your space with their own PDFs and email threads. This puts an Abcon-controlled, Abcon-branded experience in their hands instead — every proposal ships from a template you've signed off, with deal facts you've supplied. Brand control goes up, not down.",
  },
  {
    q: "What stops a broker misusing it or sitting on it?",
    a: "Access is earned and revocable. Brokers apply, you approve, and every proposal is requested through us — so there's a record of who asked, for which client, and what happened next. A broker who goes quiet or off-brand loses access with one click.",
  },
  {
    q: "Why LinkedIn and not the property portals?",
    a: "Portals list space; they don't build a broker channel. LinkedIn is where brokers maintain their professional identity, and it's the strongest B2B platform by a distance — LinkedIn's own published research puts 80% of B2B social-media leads on the platform. The two aren't competing: portals keep listing, LinkedIn recruits the people who close.",
  },
  {
    q: "How is this different from just running ads for our buildings?",
    a: "Ads for buildings chase tenants one campaign at a time, and the asset evaporates when the campaign ends. This builds a durable asset: an approved broker panel that keeps originating deals after the ads stop — each one armed with a proposal experience competitors aren't matching.",
  },
  {
    q: "What does it cost us if it doesn't work?",
    a: "One pilot's retainer and a media budget you capped — plus you keep the landing page, the proposal template and every broker relationship created along the way. The downside is bounded and mostly recoverable; the upside is a new origination channel.",
  },
  {
    q: "How much of our team's time does this take?",
    a: "One leasing contact for deal facts and broker sign-offs, a weekly 30-minute check-in, and brand approvals at setup. Broadbrand carries the campaign, the funnel and the production. If it's costing your team more than an hour or two a week, we're doing it wrong.",
  },
];

/* ---------- Day-90 scorecard ---------- */
export const day90 = {
  title: "What good looks like at day 90",
  intro:
    "We agree the targets at kickoff — before a rand is spent — and report against them weekly. At day 90 you'll have actuals for:",
  measures: [
    "Approved brokers onboarded (the size of the new channel)",
    "Cost per approved broker (what the channel costs to build)",
    "Proposals requested & delivered (is the channel being used?)",
    "Proposal engagement — opens, dwell, sections read (is it landing?)",
    "Broker-sourced viewings & enquiries (is it turning into pipeline?)",
  ],
  outro: "Those five numbers make the scale / adjust / stop decision for you.",
};

/* ---------- The decision ---------- */
export const decision = {
  title: "Saying yes commits you to exactly four things.",
  items: [
    "A kickoff workshop (half a day) to agree vetting criteria & targets",
    "Brand assets and sign-off on the templates",
    "One named leasing contact for deal facts",
    "A pilot budget with a hard cap you set",
  ],
  cta: "Approve the 90-day pilot",
};

export const strategyClose =
  "Two halves of one system: LinkedIn recruits and approves the brokers, and the personalised microsite is the tool we put in their hands. Paid reach builds the channel; the bespoke proposal closes the client. Broadbrand builds and runs both — and reports cost per broker, proposals requested and broker-sourced deals back to you.";
