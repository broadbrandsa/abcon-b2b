import { BuildYourHq } from "@/components/sections/build-your-hq";
import { Reveal } from "@/components/sections/reveal";
import { buildingFeatures } from "@/content/proposal";

export function ThePrecinct() {
  return (
    <section id="building">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The Precinct</span>
          <h2>Sandton Gate — Sandton, but smarter.</h2>
          <p>
            A world-class mixed-use precinct on the banks of the Braamfontein Spruit, co-developed with Tiber. Premium
            offices, curated retail and luxury residences woven into a green, walkable environment.
          </p>
        </Reveal>
        <div className="bld-layout">
          <BuildYourHq />
          <Reveal as="ul" className="bld-feats" delay={0.1}>
            {buildingFeatures.map((feat) => (
              <li key={feat.title}>
                <span className="k">{feat.k}</span>
                <span className="v">
                  <b>{feat.title}</b>
                  <span>{feat.body}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
