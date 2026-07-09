import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { brandPiazza } from "@/content/deal";

export function BrandPiazza() {
  return (
    <section id="piazza">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your brand, on the piazza</span>
          <h2>Not just an office, a customer-facing footprint.</h2>
          <p>{brandPiazza.lead}</p>
        </Reveal>

        <div className="pt-grid">
          {brandPiazza.points.map((p, i) => (
            <Reveal className="pt-card" key={p.title} delay={(i % 4) * 0.05}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="piazza-stat">
          <b>
            ~<CountUp to={brandPiazza.footfall} />
          </b>
          <span>illustrative daily precinct footfall, residents, office workers &amp; retail visitors</span>
        </Reveal>
      </div>
    </section>
  );
}
