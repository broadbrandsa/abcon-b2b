"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { offerings, offeringsClosing, type Offering } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

const shortLabels: Record<string, string> = {
  build: "Build & fit-out",
  power: "Power",
  run: "Managed",
  workplace: "Lifestyle",
  cost: "Lower cost",
  secure: "Security",
};

function FlowChip({
  offering,
  side,
  active,
  onActivate,
}: {
  offering: Offering;
  side: "left" | "right";
  active: boolean;
  onActivate: (id: string | null) => void;
}) {
  return (
    <button
      type="button"
      className={cn("flow-chip", side, active && "active")}
      onMouseEnter={() => onActivate(offering.id)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(offering.id)}
      onClick={() => onActivate(offering.id)}
      aria-label={`${offering.title} — delivered by ${offering.credit}`}
    >
      <span className="fc-ico">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {offering.icon}
        </svg>
      </span>
      <span className="fc-label">{shortLabels[offering.id]}</span>
      <svg className="fc-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

export function Ecosystem() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = offerings.find((o) => o.id === activeId) ?? null;
  const left = offerings.slice(0, 3);
  const right = offerings.slice(3, 6);

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
        <Reveal className="flow">
          <div className="flow-col left">
            {left.map((o) => (
              <FlowChip key={o.id} offering={o} side="left" active={activeId === o.id} onActivate={setActiveId} />
            ))}
          </div>

          <div className="flow-core" data-active={!!active}>
            <svg className="flow-core-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 21h16M6 21V7l6-3 6 3v14M10 11h4M10 15h4" />
            </svg>
            {active ? (
              <>
                <div className="flow-core-name">{active.title}</div>
                <div className="flow-core-benefit">Delivered in-house by {active.credit}</div>
              </>
            ) : (
              <>
                <div className="flow-core-name">Your building</div>
                <div className="flow-core-benefit">Everything here flows in — owned and run by one partner.</div>
              </>
            )}
          </div>

          <div className="flow-col right">
            {right.map((o) => (
              <FlowChip key={o.id} offering={o} side="right" active={activeId === o.id} onActivate={setActiveId} />
            ))}
          </div>
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
