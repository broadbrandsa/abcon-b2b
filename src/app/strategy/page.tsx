import type { Metadata } from "next";
import Link from "next/link";

import { AbconLogo } from "@/components/brand/abcon-logo";
import { BroadbrandLogo } from "@/components/brand/broadbrand-logo";
import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { SiteSwitch } from "@/components/sections/site-switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  adFormats,
  audience,
  brokerPlay,
  commercialNote,
  commercialShape,
  conversionStats,
  day90,
  decision,
  faqs,
  funnel,
  kpis,
  linkedinIntro,
  packageSummary,
  prongs,
  rationale,
  reportMetrics,
  riskReversal,
  rollout,
  sources,
  split,
  strategyClose,
  strategyIntro,
} from "@/content/strategy";

export const metadata: Metadata = {
  title: "Broadbrand × Abcon · Why custom proposals + LinkedIn",
  description: "Broadbrand's rationale for customised proposal microsites and a LinkedIn broker-recruitment strategy for Abcon.",
  robots: { index: false, follow: false },
};

export default function StrategyPage() {
  return (
    <div className="sg strategy has-switch">
      {/* tier 1, shared switch bar above the main menu */}
      <SiteSwitch />

      {/* tier 2, main menu */}
      <header className="strat-nav">
        <div className="wrap strat-nav-inner">
          <span className="strat-lockup">
            <BroadbrandLogo priority />
            <span className="x">×</span>
            <AbconLogo priority />
          </span>
          <nav className="strat-navlinks">
            <a href="#rationale">The case</a>
            <a href="#linkedin">The engine</a>
            <a href="#plan">The plan</a>
            <a href="#commercials">Commercials</a>
            <a href="#faq">FAQ</a>
            <a href="#next" className="strat-nav-cta">
              The decision
            </a>
          </nav>
        </div>
      </header>

      {/* intro */}
      <section id="strat-hero">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">{strategyIntro.eyebrow}</span>
            <h1 className="strat-title">{strategyIntro.title}</h1>
            <p>{strategyIntro.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* the two-prong model */}
      <section id="model">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>One tool, two prongs.</h2>
          </Reveal>
          <div className="prong-grid">
            {prongs.map((p, i) => (
              <Reveal className="prong-card" key={p.tag} delay={i * 0.08}>
                <span className="prong-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* rationale */}
      <section id="rationale">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Why it works</span>
            <h2>Six reasons a bespoke microsite beats a proposal PDF.</h2>
          </Reveal>
          <div className="pt-grid">
            {rationale.map((r, i) => (
              <Reveal className="pt-card strat-card" key={r.title} delay={(i % 3) * 0.05}>
                <span className="strat-ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {r.icon}
                  </svg>
                </span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="strat-stats">
            {conversionStats.map((s, i) => (
              <Reveal className="strat-stat" key={s.label} delay={i * 0.06}>
                <b>
                  <CountUp to={s.to} suffix={s.suffix} />
                </b>
                <span className="stat-label">{s.label}</span>
                <cite className="stat-src">{s.source}</cite>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="sg-disclaimer">
            Published third-party industry benchmarks, not Abcon results. Full citations below.
          </Reveal>
        </div>
      </section>

      {/* linkedin strategy */}
      <section id="linkedin">
        <div className="strat-bleed">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">{linkedinIntro.eyebrow}</span>
              <h2>{linkedinIntro.title}</h2>
              <p>{linkedinIntro.lead}</p>
            </Reveal>

            <div className="li-top">
              <Reveal className="li-audience">
                <h3>Who we target</h3>
                <ul>
                  {audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <div className="li-formats">
                  {adFormats.map((f) => (
                    <span key={f} className="li-chip">
                      {f}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="li-broker" delay={0.08}>
                <span className="li-broker-tag">The broker play</span>
                <p>{brokerPlay}</p>
              </Reveal>
            </div>

            <Reveal className="funnel" aria-label="LinkedIn broker-recruitment funnel">
              {funnel.map((f, i) => (
                <div className="funnel-step" key={f.step}>
                  <span className="funnel-num">{f.step}</span>
                  <span className="funnel-ico">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {f.icon}
                    </svg>
                  </span>
                  <div className="funnel-title">{f.title}</div>
                  <p>{f.body}</p>
                  {i < funnel.length - 1 && <span className="funnel-arrow" aria-hidden="true">→</span>}
                </div>
              ))}
            </Reveal>

            <div className="li-kpis">
              {kpis.map((k) => (
                <Reveal className="li-kpi" key={k.l}>
                  <b>{k.v}</b>
                  <span>{k.l}</span>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="sg-disclaimer li-source">
              LinkedIn platform figures, published by LinkedIn Marketing, not Abcon results.
            </Reveal>

            <Reveal className="li-report">
              <span className="li-report-tag">What Broadbrand reports back</span>
              <div className="li-formats">
                {reportMetrics.map((m) => (
                  <span key={m} className="li-chip">
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* the 90-day plan */}
      <section id="plan">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">The plan</span>
            <h2>Ninety days, three phases, one decision gate.</h2>
            <p>No open-ended programme. A pilot with a defined budget, a defined scorecard and a built-in moment to scale, adjust or stop.</p>
          </Reveal>
          <div className="plan-grid">
            {rollout.map((p, i) => (
              <Reveal className="plan-card" key={p.phase} delay={i * 0.07}>
                <div className="plan-top">
                  <span className="plan-phase">{p.phase}</span>
                  <span className="plan-weeks">{p.weeks}</span>
                </div>
                <h3>{p.title}</h3>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {p.gate && <p className="plan-gate">{p.gate}</p>}
              </Reveal>
            ))}
          </div>

          {/* who does what */}
          <div className="split-grid">
            <Reveal className="split-card split-bb">
              <span className="split-tag">{split.broadbrand.label}</span>
              <ul>
                {split.broadbrand.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="split-card split-ab" delay={0.07}>
              <span className="split-tag">{split.abcon.label}</span>
              <ul>
                {split.abcon.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* commercial shape + risk reversal */}
      <section id="commercials">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Commercials</span>
            <h2>Retainer or commission: you choose. LinkedIn runs alongside.</h2>
            <p>Production is one of two models: a flat R50,000 monthly retainer, or commission only at a rate Abcon proposes. The LinkedIn engine is its own R20,000 monthly line either way.</p>
          </Reveal>
          <div className="shape-grid">
            {commercialShape.map((c, i) => (
              <Reveal className="shape-card" key={c.title} delay={i * 0.07}>
                <span className="shape-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="shape-note">{c.note}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="package-card">
            <span className="package-tag">The package</span>
            <h3>{packageSummary.title}</h3>
            <ul className="package-lines">
              {packageSummary.lines.map((l) => (
                <li key={l.item}>
                  <span>{l.item}</span>
                  <b>{l.cost}</b>
                </li>
              ))}
            </ul>
            <p className="package-note">{packageSummary.note}</p>
          </Reveal>

          <Reveal as="p" className="shape-footnote">
            {commercialNote}
          </Reveal>

          <div className="rr-grid">
            {riskReversal.map((r, i) => (
              <Reveal className="rr-card" key={r.title} delay={i * 0.05}>
                <span className="rr-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* day-90 scorecard */}
      <section id="scorecard">
        <div className="wrap wrap--narrow">
          <Reveal className="score-card">
            <span className="eyebrow">The scorecard</span>
            <h2>{day90.title}</h2>
            <p className="score-intro">{day90.intro}</p>
            <ol className="score-list">
              {day90.measures.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
            <p className="score-outro">{day90.outro}</p>
          </Reveal>
        </div>
      </section>

      {/* objections / faq */}
      <section id="faq">
        <div className="wrap wrap--narrow">
          <Reveal className="sec-head">
            <span className="eyebrow">The hard questions</span>
            <h2>What you should be asking before you approve this.</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible defaultValue={faqs[0]?.q} className="dil-acc strat-faq">
              {faqs.map((f) => (
                <AccordionItem value={f.q} key={f.q} className="dil-item">
                  <AccordionTrigger className="dil-trigger">
                    <span className="dil-head">
                      <span className="dil-q">{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="dil-answer">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* the decision */}
      <section id="next">
        <div className="wrap">
          <Reveal className="strat-close">
            <p>{strategyClose}</p>
            <div className="decide">
              <span className="decide-title">{decision.title}</span>
              <ul className="decide-list">
                {decision.items.map((d, i) => (
                  <li key={d}>
                    <span className="decide-num">{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="decide-ctas">
              <a href="mailto:mikee@dsg.co.za?subject=Abcon%20%C3%97%20Broadbrand%3A%20approve%20the%2090-day%20pilot" className="strat-close-cta">
                {decision.cta}
              </a>
              <Link href="/" className="strat-close-alt">
                See the example proposal again
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="sg-footer strat-footer">
        <div className="wrap">
          <div className="foot">
            <span className="strat-lockup">
              <BroadbrandLogo />
              <span className="x">×</span>
              <AbconLogo />
            </span>
          </div>
          <div className="strat-sources">
            <span className="strat-sources-tag">Sources</span>
            <ul>
              {sources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <p className="foot-note">
            Confidential, prepared by Broadbrand for Abcon. All numeric figures on this page are published third-party
            industry benchmarks, cited above, not Abcon results or projections. Not for external distribution.
          </p>
        </div>
      </footer>
    </div>
  );
}
