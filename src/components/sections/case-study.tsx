import { Reveal } from "@/components/sections/reveal";
import { caseStudy, covenant } from "@/content/deal";

export function CaseStudy() {
  return (
    <section id="casestudy">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Proof, in depth</span>
          <h2>{caseStudy.title}</h2>
          <p>Four decades of landmark builds. Here&apos;s one, end to end.</p>
        </Reveal>

        <div className="cs-grid">
          <Reveal className="cs-steps">
            {[
              { k: "The brief", v: caseStudy.brief },
              { k: "Abcon's approach", v: caseStudy.approach },
              { k: "Outcome", v: caseStudy.outcome },
            ].map((s) => (
              <div className="cs-step" key={s.k}>
                <div className="cs-step-k">{s.k}</div>
                <p>{s.v}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="cs-quote" delay={0.1}>
            <blockquote>“{caseStudy.quote}”</blockquote>
            <cite>
              {caseStudy.client} · <span>{caseStudy.attribution}</span>
            </cite>
          </Reveal>
        </div>

        <Reveal className="sec-subhead">
          <h3>{covenant.lead}</h3>
          <p>Why the landlord will still deliver, and still be here in ten years.</p>
        </Reveal>
        <div className="pt-grid">
          {covenant.points.map((p, i) => (
            <Reveal className="pt-card" key={p.title} delay={(i % 4) * 0.05}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
