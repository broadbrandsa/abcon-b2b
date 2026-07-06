"use client";

import { useState } from "react";

import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { scoreboard as s } from "@/content/upgrade";

const fmt = (n: number) => Math.round(n).toLocaleString("en-ZA").replace(/,/g, " ");

export function Scoreboard() {
  const [area, setArea] = useState(s.defaultArea);
  const [touched, setTouched] = useState(false);

  const people = Math.round(area / s.areaPerPerson);
  const energySaved = area * (s.conventionalKwhM2 - s.greenKwhM2); // kWh/yr
  const costSaved = energySaved * s.elecRate; // R/yr
  const co2 = (energySaved * s.emissionsFactor) / 1000; // t/yr

  // Count up on first view; switch to live values once the slider is touched.
  const figure = (value: number, prefix = "", suffix = "") =>
    touched ? (
      <>
        {prefix}
        {fmt(value)}
        {suffix}
      </>
    ) : (
      <CountUp to={value} prefix={prefix} suffix={suffix} />
    );

  return (
    <section id="scoreboard">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your carbon &amp; cost scoreboard</span>
          <h2>You committed to it. This building delivers it.</h2>
          <p>
            Nedbank has committed publicly to net-zero by 2050 and carbon-neutral facilities by 2035. Size your
            footprint and see the annual payoff of moving to a 5-Star, solar-powered building.
          </p>
        </Reveal>

        <div className="score-grid">
          <Reveal className="score-input">
            <label htmlFor="sbArea">Your footprint</label>
            <div className="score-area">
              <span>{fmt(area)}</span>
              <span>m²</span>
            </div>
            <div className="score-people">≈ {fmt(people)} people at 13 m²/person</div>
            <input
              type="range"
              id="sbArea"
              min={2000}
              max={30000}
              step={500}
              value={area}
              onChange={(e) => {
                setArea(Number(e.target.value));
                setTouched(true);
              }}
            />
            <div className="score-solar">
              <span className="dot" />~{s.solarMwp} MWp on-site solar via Blume · ~{s.solarGwh} GWh/yr clean power
            </div>
          </Reveal>

          <div className="score-outputs">
            <Reveal className="score-card">
              <span className="sc-label">Energy saved / year</span>
              <b className="sc-value">{figure(energySaved, "", " kWh")}</b>
              <span className="sc-sub">≈ {(energySaved / 1_000_000).toFixed(1)} GWh a year</span>
            </Reveal>
            <Reveal className="score-card" delay={0.05}>
              <span className="sc-label">Energy cost saved / year</span>
              <b className="sc-value">{figure(costSaved, "R", "")}</b>
              <span className="sc-sub">≈ R{(costSaved / 1_000_000).toFixed(1)}m a year</span>
            </Reveal>
            <Reveal className="score-card" delay={0.1}>
              <span className="sc-label">CO₂ avoided / year</span>
              <b className="sc-value">{figure(co2, "", " t")}</b>
              <span className="sc-sub">tonnes of carbon, every year</span>
            </Reveal>
          </div>
        </div>

        <Reveal className="score-headline">
          Moving here cuts your office carbon by <b>~{fmt(co2)} t/yr</b> and advances your{" "}
          <b>2035 carbon-neutral-facilities</b> goal — a number you can put in your integrated report.
        </Reveal>

        <Reveal as="div" className="score-assumptions">
          <div className="score-assumptions-title">Assumptions (illustrative, to be verified)</div>
          <ul>
            {s.assumptions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
