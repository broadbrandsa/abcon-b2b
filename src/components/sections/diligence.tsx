import { Reveal } from "@/components/sections/reveal";
import { diligence } from "@/content/upgrade";

// Cost -> Commercials, IT/security -> Technology, safety/parking -> Location,
// references -> Track Record. This section owns what's left.
const KEEP = new Set(["Transition risk", "Capacity & growth", "Flexibility & exit", "Delivery certainty"]);
const items = diligence.filter((d) => KEEP.has(d.theme));

export function Diligence() {
  return (
    <section id="diligence">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">De-risking the move</span>
          <h2>The questions your team will ask — answered.</h2>
          <p>
            A move of this scale gets stress-tested. Here are straight answers to the diligence questions before you
            even have to raise them.
          </p>
        </Reveal>

        <div className="dil-grid">
          {items.map((d, i) => (
            <Reveal className="dil-card" key={d.theme} delay={(i % 2) * 0.05}>
              <span className="dil-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {d.icon}
                </svg>
              </span>
              <div className="dil-theme">{d.theme}</div>
              <h3>{d.q}</h3>
              <p>{d.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
