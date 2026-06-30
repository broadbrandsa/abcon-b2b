"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { fitPanels } from "@/content/proposal";

export function DecisionFit() {
  const [active, setActive] = useState(fitPanels[0].id);

  return (
    <section id="fit">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Built for your committee</span>
          <h2>One precinct. Every decision-maker covered.</h2>
          <p>A move of this scale touches your whole leadership team. Here&apos;s what Sandton Gate means for each of them.</p>
        </Reveal>

        <Reveal className="tabs" role="tablist">
          {fitPanels.map((panel) => (
            <button
              key={panel.id}
              className="tab"
              role="tab"
              type="button"
              aria-selected={active === panel.id}
              onClick={() => setActive(panel.id)}
            >
              {panel.tab}
            </button>
          ))}
        </Reveal>

        {fitPanels.map((panel) => (
          <div className="panel" key={panel.id} data-active={active === panel.id}>
            <div>
              <div className="who">{panel.who}</div>
              <h3>{panel.heading}</h3>
              <p>{panel.intro}</p>
            </div>
            <ul>
              {panel.points.map((point) => (
                <li key={point.lead}>
                  <span className="check">✓</span>
                  <span>
                    <b>{point.lead}</b>
                    {point.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
