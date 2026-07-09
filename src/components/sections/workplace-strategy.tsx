"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { workplace } from "@/content/deal";
import { cn } from "@/lib/utils";

const tabLabels = ["Hybrid", "60:40", "Test-fit", "Tech-enabled"];

export function WorkplaceStrategy() {
  const [active, setActive] = useState(0);
  const point = workplace.points[active];

  return (
    <section id="workstyle">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Built around how you work now</span>
          <h2>A workplace strategy, not just a floor plan.</h2>
          <p>{workplace.lead}</p>
        </Reveal>

        <Reveal>
          <div className="ws-tablist" role="tablist" aria-label="Workplace strategy">
            {workplace.points.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={cn("ws-tab", active === i && "on")}
                onClick={() => setActive(i)}
              >
                {tabLabels[i]}
              </button>
            ))}
          </div>

          <div className="ws-panel" key={active}>
            <div className="ws-panel-copy">
              <span className="ws-panel-num">
                0{active + 1} <span>/ 0{workplace.points.length}</span>
              </span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </div>
            <div className="ws-panel-visual" aria-hidden="true">
              <svg viewBox="0 0 200 140">
                <rect x="8" y="8" width="184" height="124" rx="10" className="ws-slab" />
                {Array.from({ length: 6 }).map((_, r) =>
                  Array.from({ length: 8 }).map((__, c) => (
                    <rect
                      key={`${r}-${c}`}
                      x={20 + c * 21}
                      y={22 + r * 18}
                      width="14"
                      height="10"
                      rx="2"
                      className="ws-desk"
                      style={{ opacity: (r * 8 + c) % (active + 2) === 0 ? 0.9 : 0.2 }}
                    />
                  )),
                )}
              </svg>
            </div>
          </div>
        </Reveal>

        <Reveal as="p" className="sg-disclaimer">
          Ratios and efficiencies illustrative, confirmed in a Nedbank test-fit.
        </Reveal>
      </div>
    </section>
  );
}
