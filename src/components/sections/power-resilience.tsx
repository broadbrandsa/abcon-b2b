import { Reveal } from "@/components/sections/reveal";
import { slaTable } from "@/content/commercial";
import { powerHeadline, powerPoints } from "@/content/themes";

export function PowerResilience() {
  return (
    <section id="power">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Power &amp; resilience</span>
          <h2>It stays on. Full stop.</h2>
          <p>{powerHeadline}</p>
        </Reveal>

        <div className="pr-grid">
          {powerPoints.map((p, i) => (
            <Reveal className="pr-card" key={p.title} delay={(i % 4) * 0.05}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="pr-by">{p.by}</div>
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

        <Reveal as="p" className="sg-disclaimer">
          Indicative infrastructure specification, subject to confirmation.
        </Reveal>
      </div>
    </section>
  );
}
