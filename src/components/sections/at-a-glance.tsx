import { Reveal } from "@/components/sections/reveal";
import { atAGlance } from "@/content/deal";

export function AtAGlance() {
  return (
    <section id="glance">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The proposal at a glance</span>
          <h2>Everything Nedbank needs from a headquarters — from one partner.</h2>
          <p>The short version for a busy committee. The detail follows.</p>
        </Reveal>
        <div className="glance-grid">
          {atAGlance.map((g, i) => (
            <Reveal className="glance-card" key={g.l} delay={(i % 3) * 0.05}>
              <b>{g.v}</b>
              <span>{g.l}</span>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="sg-disclaimer">
          Illustrative figures, subject to confirmation.
        </Reveal>
      </div>
    </section>
  );
}
