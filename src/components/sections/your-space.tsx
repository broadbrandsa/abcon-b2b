"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { floors } from "@/content/proposal";
import { cn } from "@/lib/utils";

/** Group digits with spaces, matching the original en-ZA formatting. */
function fmt(n: number) {
  return n.toLocaleString("en-ZA").replace(/,/g, " ");
}

function recommendation(area: number) {
  if (area >= 6000)
    return (
      <>
        Recommended: the <b>Phase 2 office towers</b> — purpose-built P-grade floors for a corporate HQ.
      </>
    );
  if (area >= 2500)
    return (
      <>
        Recommended: <b>Building A</b> — ~13 000m² of prime space with room to grow.
      </>
    );
  if (area >= 900)
    return (
      <>
        Recommended: <b>multiple full floors</b> combined into a single Nedbank footprint.
      </>
    );
  return (
    <>
      Recommended: a <b>full floor or Flexi Suite</b> — flexible, semi-serviced space for a satellite team.
    </>
  );
}

export function YourSpace() {
  const [headcount, setHeadcount] = useState(450);
  const [selected, setSelected] = useState<number | null>(null);

  const area = Math.round(headcount * 13);
  const parking = Math.round(headcount * 0.3);

  const selectFloor = (index: number, size: number) => {
    setSelected(index);
    setHeadcount(Math.min(1500, Math.max(20, Math.round(size / 13))));
  };

  return (
    <section id="space">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your Space</span>
          <h2>Find the right footprint for Nedbank.</h2>
          <p>
            Explore live availability and size your requirement. Final configurations are customisable — these are
            indicative options within the precinct.
          </p>
        </Reveal>
        <div className="space-top">
          <Reveal>
            <div className="floors">
              {floors.map((floor, i) => (
                <button
                  type="button"
                  key={`${floor.level}-${floor.size}`}
                  className={cn("floor", selected === i && "sel")}
                  onClick={() => selectFloor(i, floor.size)}
                >
                  <div className="lvl">{floor.level}</div>
                  <div className="sz">
                    {floor.sizeLabel}
                    <span> m²</span>
                  </div>
                  <span className={cn("status", floor.status)}>{floor.statusLabel}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal className="calc" delay={0.1}>
            <h3>Space calculator</h3>
            <p>Estimate Nedbank&apos;s requirement by headcount.</p>
            <label htmlFor="hc">Team size</label>
            <div className="headcount">
              <span>{fmt(headcount)}</span>
              <span>people</span>
            </div>
            <input
              type="range"
              id="hc"
              min={20}
              max={1500}
              value={headcount}
              step={10}
              onChange={(e) => {
                setHeadcount(Number(e.target.value));
                setSelected(null);
              }}
            />
            <div className="calc-out">
              <div className="o">
                <b>~{fmt(area)}</b>
                <span>m² estimated (13m²/person)</span>
              </div>
              <div className="o">
                <b>~{fmt(parking)}</b>
                <span>parking bays</span>
              </div>
            </div>
            <div className="calc-rec">{recommendation(area)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
