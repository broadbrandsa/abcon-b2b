"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { floors, spaceOptions } from "@/content/proposal";
import { cn } from "@/lib/utils";

/** Group digits with spaces, matching the original en-ZA formatting. */
function fmt(n: number) {
  return n.toLocaleString("en-ZA").replace(/,/g, " ");
}

const AREA_PER_PERSON = 13;
const BAYS_PER_PERSON = 0.3;

export function YourSpace() {
  const [headcount, setHeadcount] = useState(450);
  const [selected, setSelected] = useState<number | null>(null);

  const area = Math.round(headcount * AREA_PER_PERSON);
  const parking = Math.round(headcount * BAYS_PER_PERSON);

  // Recommend the smallest option whose area can house the requirement.
  let recIndex = spaceOptions.findIndex((o) => area <= o.maxArea);
  if (recIndex === -1) recIndex = spaceOptions.length - 1;
  const recommended = spaceOptions[recIndex];

  const selectFloor = (index: number, size: number) => {
    setSelected(index);
    setHeadcount(Math.min(1500, Math.max(20, Math.round(size / AREA_PER_PERSON))));
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
            <p>Estimate Nedbank&apos;s requirement, then see which spaces fit.</p>
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

            <div className="calc-summary">
              Best fit for ~{fmt(headcount)} people: <b>{recommended.name}</b> ({recommended.sizeLabel}).
            </div>

            <div className="calc-options">
              {spaceOptions.map((option, i) => {
                const isBest = i === recIndex;
                const fits = area <= option.maxArea;
                const status = isBest ? "Best fit" : fits ? "Room to grow" : "Too small";
                const variant = isBest ? "best" : fits ? "roomy" : "over";
                const capacity = Math.floor(option.maxArea / AREA_PER_PERSON);
                return (
                  <div className={cn("calc-opt", variant)} key={option.id}>
                    <div className="opt-main">
                      <div className="opt-top">
                        <span className="opt-name">{option.name}</span>
                        <span className="opt-size">
                          {option.sizeLabel} · ~{fmt(capacity)} ppl
                        </span>
                      </div>
                      <div className="opt-bldg">{option.building}</div>
                      {isBest && <div className="opt-blurb">{option.blurb}</div>}
                    </div>
                    <span className="opt-status">{status}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
