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

export const strategyClose =
  "Two halves of one system: LinkedIn recruits and approves the brokers, and the personalised microsite is the tool we put in their hands. Paid reach builds the channel; the bespoke proposal closes the client. Broadbrand builds and runs both — and reports cost per broker, proposals requested and broker-sourced deals back to you.";
