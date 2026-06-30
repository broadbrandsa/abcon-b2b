import { Reveal } from "@/components/sections/reveal";
import { performanceStats, slaTable } from "@/content/commercial";

export function Performance() {
  return (
    <section id="performance">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">How the building performs</span>
          <h2>Engineered for your 2035 carbon-neutral goal.</h2>
          <p>
            A 5-Star Green Star, solar-powered design that lowers Nedbank&apos;s operational footprint at source —
            contributing directly to your carbon-neutral-facilities-by-2035 and net-zero-by-2050 targets — with the
            resilience to keep the bank running. Figures indicative, subject to confirmation.
          </p>
        </Reveal>

        <div className="perf-stats">
          {performanceStats.map((s, i) => (
            <Reveal className="perf-stat" key={s.label} delay={i * 0.05}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="sla">
          <div className="sla-row sla-head">
            <span>System</span>
            <span>Specification</span>
            <span>Service level</span>
          </div>
          {slaTable.map((r) => (
            <div className="sla-row" key={r.system}>
              <span className="sla-sys">{r.system}</span>
              <span>{r.spec}</span>
              <span className="sla-metric">{r.metric}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
