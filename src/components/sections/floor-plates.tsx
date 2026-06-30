"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { floors } from "@/content/proposal";
import { cn } from "@/lib/utils";

const fmt = (n: number) => n.toLocaleString("en-ZA").replace(/,/g, " ");

// Two desk banks either side of the service core.
const BANKS = [
  { x: 40, cols: 4 },
  { x: 250, cols: 4 },
];
const DESK_ROWS = 5;

export function FloorPlates() {
  const [index, setIndex] = useState(0);
  const [fitout, setFitout] = useState(true);

  const floor = floors[index];
  const capacity = Math.floor(floor.size / 13);
  const desks = Math.min(capacity, BANKS.length * BANKS[0].cols * DESK_ROWS);

  let drawn = 0;

  return (
    <section id="plans">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Floor plates</span>
          <h2>See your floor — and your fit-out.</h2>
          <p>
            Select a floor to view an indicative plate and toggle a sample Nedbank fit-out. Architectural drawings will
            replace these schematics in the formal proposal.
          </p>
        </Reveal>

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
                <span className="pt-sz">
                  {f.sizeLabel} m²
                </span>
              </button>
            ))}
          </div>

          <div className="plate-stage">
            <div className="plate-figure" role="img" aria-label={`Indicative floor plate for ${floor.level}, ${floor.sizeLabel} square metres${fitout ? ", with sample Nedbank fit-out" : ""}`}>
              <svg viewBox="0 0 400 280" className="plate-svg">
                {/* slab */}
                <rect x="20" y="20" width="360" height="240" rx="10" className="pl-slab" />
                {/* glazing ticks */}
                <g className="pl-glaze">
                  {Array.from({ length: 16 }).map((_, k) => (
                    <line key={`t${k}`} x1={36 + k * 21.7} y1="20" x2={36 + k * 21.7} y2="30" />
                  ))}
                  {Array.from({ length: 16 }).map((_, k) => (
                    <line key={`b${k}`} x1={36 + k * 21.7} y1="260" x2={36 + k * 21.7} y2="250" />
                  ))}
                </g>
                {/* service core */}
                <rect x="166" y="104" width="68" height="72" rx="6" className="pl-core" />
                <text x="200" y="144" className="pl-core-label" textAnchor="middle">
                  CORE
                </text>

                {fitout && (
                  <g className="pl-fitout">
                    {/* meeting rooms */}
                    <rect x="34" y="32" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="308" y="32" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="34" y="214" width="58" height="34" rx="4" className="pl-room" />
                    <rect x="308" y="214" width="58" height="34" rx="4" className="pl-room" />
                    {/* desks */}
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
