"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { floors, spaceOptions } from "@/content/proposal";
import { developToSuit, floorPlateSpecs } from "@/content/themes";
import { cn } from "@/lib/utils";

const fmt = (n: number) => n.toLocaleString("en-ZA").replace(/,/g, " ");
const BANKS = [
  { x: 40, cols: 4 },
  { x: 250, cols: 4 },
];
const DESK_ROWS = 5;

// Lead with the big offers; suites read as a flexible entry point, not leftovers.
const options = [...spaceOptions].reverse();

export function FloorSpace() {
  const [index, setIndex] = useState(4); // default to the largest floor plate
  const [fitout, setFitout] = useState(true);

  const floor = floors[index];
  const capacity = Math.floor(floor.size / 13);
  const desks = Math.min(capacity, BANKS.length * BANKS[0].cols * DESK_ROWS);
  let drawn = 0;

  return (
    <section id="plans">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Floor plans &amp; your space</span>
          <h2>Room to move — and room to grow.</h2>
          <p>
            Efficient P-grade plates, developed to your brief. From a full HQ campus to a flexible entry suite — sized,
            fitted and reconfigured by the same team as you grow.
          </p>
        </Reveal>

        {/* space options — big first */}
        <div className="space-options">
          {options.map((o, i) => (
            <Reveal className={cn("space-opt", i === 0 && "flag")} key={o.id} delay={(i % 3) * 0.05}>
              {i === 0 && <span className="space-opt-tag">Recommended for HQ</span>}
              <div className="space-opt-name">{o.name}</div>
              <div className="space-opt-size">{o.sizeLabel}</div>
              <div className="space-opt-where">{o.building}</div>
              <p className="space-opt-blurb">{o.blurb}</p>
            </Reveal>
          ))}
        </div>

        {/* specs + develop-to-suit */}
        <div className="fp-specs">
          <Reveal className="fp-card">
            <h3>Efficient floor plates</h3>
            <ul>
              {floorPlateSpecs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="fp-card" delay={0.05}>
            <h3>Develop-to-suit</h3>
            <ul>
              {developToSuit.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* interactive plate viewer */}
        <Reveal className="plates">
          <div className="plate-tabs" role="tablist" aria-label="Select a floor">
            {floors.map((f, i) => (
              <button
                key={`${f.level}-${f.size}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={cn("plate-tab", i === index && "on")}
                onClick={() => setIndex(i)}
              >
                <span className="pt-lvl">{f.level}</span>
                <span className="pt-sz">{f.sizeLabel} m²</span>
              </button>
            ))}
          </div>

          <div className="plate-stage">
            <div
              className="plate-figure"
              role="img"
              aria-label={`Indicative floor plate for ${floor.level}, ${floor.sizeLabel} square metres${fitout ? ", with sample Nedbank fit-out" : ""}`}
            >
              <svg viewBox="0 0 400 280" className="plate-svg">
                <rect x="20" y="20" width="360" height="240" rx="10" className="pl-slab" />
                <g className="pl-glaze">
                  {Array.from({ length: 16 }).map((_, k) => (
                    <line key={`t${k}`} x1={36 + k * 21.7} y1="20" x2={36 + k * 21.7} y2="30" />
                  ))}
                  {Array.from({ length: 16 }).map((_, k) => (
                    <line key={`b${k}`} x1={36 + k * 21.7} y1="260" x2={36 + k * 21.7} y2="250" />
                  ))}
                </g>
                <rect x="166" y="104" width="68" height="72" rx="6" className="pl-core" />
                <text x="200" y="144" className="pl-core-label" textAnchor="middle">
                  CORE
                </text>
                {fitout && (
                  <g className="pl-fitout">
                    <rect x="34" y="32" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="308" y="32" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="34" y="214" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="308" y="214" width="58" height="34" rx="4" className="pl-room" />
                    {BANKS.map((bank) =>
                      Array.from({ length: DESK_ROWS }).map((_, r) =>
                        Array.from({ length: bank.cols }).map((__, c) => {
                          if (drawn >= desks) return null;
                          drawn += 1;
                          return (
                            <rect
                              key={`d-${bank.x}-${r}-${c}`}
                              x={bank.x + c * 28}
                              y={84 + r * 24}
                              width="20"
                              height="14"
                              rx="2"
                              className="pl-desk"
                            />
                          );
                        }),
                      ),
                    )}
                  </g>
                )}
              </svg>
              <span className="plate-slot-note">Indicative schematic — architect&apos;s plate to be inserted</span>
            </div>

            <div className="plate-info">
              <div className="plate-gla">
                <span>Gross lettable area</span>
                <b>
                  {floor.sizeLabel} <em>m²</em>
                </b>
              </div>
              <div className="plate-cap">
                ≈ <b>{fmt(capacity)}</b> desks at 13 m²/person
              </div>
              <button
                type="button"
                className={cn("plate-toggle", fitout && "on")}
                aria-pressed={fitout}
                onClick={() => setFitout((v) => !v)}
              >
                <span className="knob" />
                Show Nedbank fit-out
              </button>
              <p className="plate-disc">Layout is illustrative and subject to design development.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
