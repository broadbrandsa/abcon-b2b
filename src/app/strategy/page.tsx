import type { Metadata } from "next";
import Link from "next/link";

import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { SiteSwitch } from "@/components/sections/site-switch";
import {
  adFormats,
  audience,
  brokerPlay,
  conversionStats,
  funnel,
  kpis,
  linkedinIntro,
  rationale,
  reportMetrics,
  sources,
  strategyClose,
  strategyIntro,
} from "@/content/strategy";

export const metadata: Metadata = {
  title: "Broadbrand × Abcon · Why custom proposals + LinkedIn",
  description: "Broadbrand's rationale for customised proposal microsites and a LinkedIn B2B lead-generation strategy for Abcon.",
  robots: { index: false, follow: false },
};

export default function StrategyPage() {
  return (
    <div className="sg strategy has-switch">
      {/* tier 1 — shared switch bar above the main menu */}
      <SiteSwitch />

      {/* tier 2 — main menu */}
      <header className="strat-nav">
        <div className="wrap strat-nav-inner">
          <span className="strat-wordmark">
            Broadbrand <span>×</span> Abcon
          </span>
          <nav className="strat-navlinks">
            <a href="#rationale">The case</a>
            <a href="#linkedin">LinkedIn strategy</a>
            <a href="#next">Next steps</a>
            <Link href="/" className="strat-nav-cta">
              ← Back to proposal
            </Link>
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
              <Reveal className="strat-stat" key={s.label} delay={i * 0.05}>
                <b>
                  <CountUp to={s.to} suffix={s.suffix} />
                </b>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="sg-disclaimer">
            Published third-party industry benchmarks — not Abcon results. Sources below.
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

            <Reveal className="funnel" aria-label="LinkedIn lead-generation funnel">
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
              LinkedIn platform figures, published by LinkedIn Marketing — not Abcon results.
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

      {/* next steps */}
      <section id="next">
        <div className="wrap">
          <Reveal className="strat-close">
            <p>{strategyClose}</p>
            <Link href="/" className="strat-close-cta">
              See the Nedbank proposal in action
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className="sg-footer strat-footer">
        <div className="wrap">
          <div className="foot">
            <span className="strat-wordmark">
              Broadbrand <span>×</span> Abcon
            </span>
            <div>Internal · Broadbrand strategy note for Abcon</div>
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
            Confidential — prepared by Broadbrand for Abcon. All numeric figures on this page are published third-party
            industry benchmarks, cited above — not Abcon results or projections. Not for external distribution.
          </p>
        </div>
      </footer>
    </div>
  );
}
