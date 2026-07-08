import type { ReactNode } from "react";

/**
 * Internal Broadbrand -> Abcon page: the rationale behind the customised
 * proposal microsite, plus a LinkedIn B2B lead-gen strategy.
 * Standalone from the client proposal. Illustrative figures.
 */

const ic = (d: string) => <path d={d} />;

export const strategyIntro = {
  eyebrow: "Broadbrand · for Abcon",
  title: "Why a customised proposal converts your B2B audience.",
  lead: "The Sandton Gate × Nedbank site you've just seen isn't a one-off. It's a repeatable way of pitching Abcon's space that turns a cold enquiry into a warm, qualified conversation — and it plugs straight into a LinkedIn lead-generation engine we'd run on your behalf.",
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
    body: "A live, branded microsite positions Abcon as the premium, one-partner choice before a word is read. Brokers pitch PDFs; you arrive with this.",
    icon: ic("M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"),
  },
  {
    title: "Shortens the sales cycle",
    body: "Diligence — cost, resilience, security, transition — is answered up front. Fewer rounds of email, faster to a viewing.",
    icon: ic("M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z"),
  },
  {
    title: "Measurable intent",
    body: "We can see which sections a prospect opens (read-receipt tracking), so your leasing team follows up on the accounts that are actually engaged.",
    icon: ic("M4 19h16M7 16l4-5 3 3 5-7"),
  },
  {
    title: "Reusable & scalable",
    body: "One template, a swappable client profile — a bespoke microsite per target account in hours, not weeks. Account-based marketing at scale.",
    icon: ic("M4 7h16v4H4zM4 14h10v3H4zM17 13l3 3-3 3"),
  },
];

export const conversionStats = [
  { to: 6, prefix: "~", suffix: "×", label: "Dwell time vs a PDF" },
  { to: 35, prefix: "+", suffix: "%", label: "Uplift on personalised outreach" },
  { to: 1, suffix: ":1", label: "Account-based — one site per target" },
  { to: 48, suffix: "h", label: "To spin up a new client microsite" },
];

/* ---------- LinkedIn strategy ---------- */
export const linkedinIntro = {
  eyebrow: "The engine",
  title: "A LinkedIn B2B strategy, run by Broadbrand on Abcon's behalf.",
  lead: "We target the people who fill buildings — commercial-property brokers and corporate occupiers — with paid LinkedIn ads that drive to a custom landing page, then hand qualified leads a personalised proposal like Nedbank's.",
};

export const audience = [
  "Commercial-property brokers & tenant-rep agents",
  "Corporate real-estate, facilities & workplace heads",
  "C-suite / exec decision-makers at target corporates",
  "Targeted by geography (Gauteng/Sandton), industry, seniority & company size",
];

export const funnel: { step: string; title: string; body: string; icon: ReactNode }[] = [
  {
    step: "01",
    title: "Target",
    body: "LinkedIn PPC — Sponsored Content, Lead-Gen Forms and Conversation Ads — to brokers and corporate decision-makers.",
    icon: ic("M12 3a9 9 0 1 0 9 9M12 3v9l6.4 6.4M12 3a9 9 0 0 1 9 9h-9"),
  },
  {
    step: "02",
    title: "Land",
    body: "A custom landing page — built like this proposal — with a sharp hook, proof and a single call to action.",
    icon: ic("M4 7h16v12H4zM4 7l8 6 8-6"),
  },
  {
    step: "03",
    title: "Capture",
    body: "LinkedIn Lead-Gen Form or on-page form → straight into Abcon's CRM, with source and campaign attribution.",
    icon: ic("M12 3v12M8 11l4 4 4-4M5 21h14"),
  },
  {
    step: "04",
    title: "Nurture",
    body: "Qualified leads receive a personalised proposal microsite for their business — the Nedbank treatment, at scale.",
    icon: ic("M4 7h16M4 12h16M4 17h10"),
  },
  {
    step: "05",
    title: "Convert",
    body: "Book-a-viewing and enquiry actions route to your leasing team — warm, briefed and ready to transact.",
    icon: ic("M20 6 9 17l-5-5"),
  },
];

export const adFormats = ["Sponsored content", "Lead-gen forms", "Conversation / message ads", "Document & carousel ads"];

export const brokerPlay =
  "Brokers are a force multiplier: a dedicated broker landing page and a simple incentive turn the people who already have the tenants into your distribution channel.";

export const kpis = [
  { v: "0.6–1%", l: "Target LinkedIn CTR" },
  { v: "MQL → SQL", l: "Qualified-lead pipeline" },
  { v: "Cost / viewing", l: "The metric that matters" },
  { v: "1 dashboard", l: "Broadbrand reports it all" },
];

export const strategyClose =
  "The proposal microsite and the LinkedIn engine are two halves of one system: paid reach fills the funnel, the personalised site converts it. Broadbrand builds and runs both.";
