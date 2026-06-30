import { Reveal } from "@/components/sections/reveal";
import { amenities } from "@/content/proposal";

export function Lifestyle() {
  return (
    <section id="life">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Lifestyle &amp; Amenities</span>
          <h2>More than an office. A precinct.</h2>
        </Reveal>
        <div className="amen">
          {amenities.map((a, i) => (
            <Reveal className="a" key={a.title} delay={(i % 4) * 0.04}>
              <div className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {a.icon}
                </svg>
              </div>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
