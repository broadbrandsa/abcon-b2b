import { Reveal } from "@/components/sections/reveal";
import { performanceStats, slaTable } from "@/content/commercial";

export function Performance() {
  return (
    <section id="performance">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">How the building performs</span>
          <h2>Engineered to keep Nedbank running.</h2>
          <p>
            A 5-Star Green Star design with real resilience built in — power, water and efficiency you can put in front
            of a board. Figures indicative, subject to confirmation.
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
