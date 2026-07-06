import { Reveal } from "@/components/sections/reveal";
import { precinctComposition, precinctStats } from "@/content/themes";

export function ThePrecinct() {
  return (
    <section id="building">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The Precinct</span>
          <h2>Sandton Gate — Sandton, but smarter.</h2>
          <p>
            A R3-billion, world-class mixed-use precinct co-developed with Tiber, on the banks of the revitalised
            Braamfontein Spruit. Designed around <em>people, nature and movement</em> — pedestrian walkways, green
            edges and a genuine sense of place, five minutes from the Sandton CBD and central to Rosebank, Randburg,
            Bryanston, Hyde Park and Fourways.
          </p>
        </Reveal>

        <div className="bld-layout">
          <Reveal className="bld-visual">
            <span className="photo-note">Image slot · Sandton Gate hero render / precinct aerial</span>
            <div className="bld-towers">
              <div className="tower" style={{ height: "62%" }} />
              <div className="tower" style={{ height: "84%" }} />
              <div className="tower" style={{ height: "50%" }} />
            </div>
            <span className="tag">Phase 2 · Two new office towers</span>
          </Reveal>
          <Reveal as="ul" className="bld-feats" delay={0.1}>
            {precinctComposition.map((c) => (
              <li key={c.k}>
                <span className="k">{c.k}</span>
                <span className="v">
                  <span>{c.v}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="streetview">
          <span className="streetview-label">Aerial flythrough</span>
          <iframe
            title="Sandton Gate drone flythrough"
            src="https://www.youtube.com/embed/AZZ08MEVcd4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>

        <div className="perf-stats" style={{ marginTop: 56 }}>
          {precinctStats.map((s, i) => (
            <Reveal className="perf-stat" key={s.l} delay={i * 0.05}>
              <b>{s.v}</b>
              <span>{s.l}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="sg-disclaimer">
          Indicative composition and figures, subject to confirmation.
        </Reveal>
      </div>
    </section>
  );
}
