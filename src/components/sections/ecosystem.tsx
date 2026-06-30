"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { offerings, offeringsClosing } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

const CX = 50;
const CY = 50;
const NODE_R = 40;
const END_R = 23; // line ends just outside the central building

const shortLabels: Record<string, string> = {
  build: "Build & fit-out",
  power: "Power",
  run: "Managed",
  workplace: "Lifestyle",
  cost: "Lower cost",
  secure: "Security",
};

function pos(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
}

export function Ecosystem() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = offerings.find((o) => o.id === activeId) ?? null;
  const total = offerings.length;

  return (
    <section id="ecosystem">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">More than a lease</span>
          <h2>
            Everything your office needs — <em>under one roof.</em>
          </h2>
          <p>
            A lease gets you a shell. Sandton Gate gives Nedbank a fully-run workplace: built, powered, managed and
            secured by one accountable partner. Here&apos;s what flows into your building.
          </p>
        </Reveal>

        {/* capabilities flowing into the building */}
        <Reveal className="eco-map flow-map">
          <svg className="eco-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {offerings.map((o, idx) => {
              const node = pos(idx, total, NODE_R);
              const end = pos(idx, total, END_R);
              return (
                <line
                  key={o.id}
                  className={cn("flow-line", activeId === o.id && "active")}
                  x1={node.x}
                  y1={node.y}
                  x2={end.x}
                  y2={end.y}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          <div className="eco-core" data-active={!!active}>
            <svg className="eco-core-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 21h16M6 21V7l6-3 6 3v14M10 11h4M10 15h4" />
            </svg>
            {active ? (
              <>
                <div className="eco-core-name">{active.title}</div>
                <div className="eco-core-benefit">Delivered in-house by {active.credit}</div>
              </>
            ) : (
              <>
                <div className="eco-core-name">Your building</div>
                <div className="eco-core-benefit">Everything below flows in — owned and run by one partner.</div>
              </>
            )}
          </div>

          {offerings.map((o, idx) => {
            const node = pos(idx, total, NODE_R);
            return (
              <button
                key={o.id}
                type="button"
                className={cn("eco-node flow-node", activeId === o.id && "active")}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setActiveId(o.id)}
                onFocus={() => setActiveId(o.id)}
                onClick={() => setActiveId(o.id)}
                aria-label={`${o.title} — delivered by ${o.credit}`}
              >
                <span className="eco-node-dot">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {o.icon}
                  </svg>
                </span>
                <span className="eco-node-label">{shortLabels[o.id]}</span>
              </button>
            );
          })}
        </Reveal>

        {/* benefit-led detail cards */}
        <div className="offer-grid">
          {offerings.map((o) => (
            <Reveal
              key={o.id}
              className={cn("offer-card", activeId === o.id && "lit")}
              onMouseEnter={() => setActiveId(o.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <span className="offer-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {o.icon}
                </svg>
              </span>
              <h3 className="offer-title">{o.title}</h3>
              <p className="offer-how">{o.how}</p>
              <div className="offer-credit">Delivered in-house by {o.credit}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="eco-closing">
          <p>{offeringsClosing}</p>
        </Reveal>
      </div>
    </section>
  );
}
