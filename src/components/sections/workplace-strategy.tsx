import { Reveal } from "@/components/sections/reveal";
import { workplace } from "@/content/deal";

export function WorkplaceStrategy() {
  return (
    <section id="workstyle">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Built around how you work now</span>
          <h2>A workplace strategy, not just a floor plan.</h2>
          <p>{workplace.lead}</p>
        </Reveal>

        <div className="pt-grid">
          {workplace.points.map((p, i) => (
            <Reveal className="pt-card" key={p.title} delay={(i % 4) * 0.05}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="sg-disclaimer">
          Ratios and efficiencies illustrative — confirmed in a Nedbank test-fit.
        </Reveal>
      </div>
    </section>
  );
}
