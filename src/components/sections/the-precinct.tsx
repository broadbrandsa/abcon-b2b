import Image from "next/image";

import { GalleryCarousel } from "@/components/sections/office-gallery";
import { Reveal } from "@/components/sections/reveal";
import { precinctComposition, precinctStats } from "@/content/themes";

export function ThePrecinct() {
  return (
    <section id="building">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The Precinct</span>
          <h2>Sandton Gate. Sandton, but smarter.</h2>
          <p>
            A R3-billion, world-class mixed-use precinct co-developed with Tiber, on the banks of the revitalised
            Braamfontein Spruit. Designed around <em>people, nature and movement</em>: pedestrian walkways, green
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

        <Reveal className="sec-subhead">
          <h3>Inside the building.</h3>
          <p>A look at the P-grade office environment, workspace, hospitality and the details in between.</p>
        </Reveal>
        <GalleryCarousel />

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

        <Reveal className="sec-head brand-in-precinct">
          <span className="eyebrow">See your name on it</span>
          <h2>
            Picture your people here, <em>Nedbank.</em>
          </h2>
          <p>
            You set South Africa&apos;s green-office standard at 135 Rivonia. Sandton Gate is built to it, so this
            isn&apos;t a compromise, it&apos;s the next expression of who you already are.
          </p>
        </Reveal>

        <Reveal className="br-stage">
          <figure className="br-figure">
            <Image
              className="br-render"
              src="/Gemini_Generated_Image_bousjkbousjkbous.png"
              alt="Illustrative render of the Nedbank identity on the Sandton Gate building"
              width={1195}
              height={896}
              sizes="(max-width: 860px) 100vw, 980px"
            />
            <figcaption className="br-caption">Illustrative render. Nedbank identity at Sandton Gate</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
