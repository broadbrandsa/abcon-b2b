"use client";

import { useState } from "react";

import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { categories, companies, orbitCompanies, type CategoryId } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

const CX = 50;
const CY = 50;
const R = 41;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
}

export function Ecosystem() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState<CategoryId | "all">("all");

  const active = orbitCompanies.find((c) => c.id === activeId) ?? null;
  const positions = orbitCompanies.map((_, idx) => nodePosition(idx, orbitCompanies.length));
  const shown = filter === "all" ? companies : companies.filter((c) => c.category === filter);

  return (
    <section id="ecosystem">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The Abcon ecosystem</span>
          <h2>
            Every other landlord hands you keys.
            <br />
            Abcon hands you a <em>group.</em>
          </h2>
          <p>
            One owner that develops, builds, powers, secures, manages, houses and co-invests. Every company below is a
            capability that already lives inside your building.
          </p>
        </Reveal>

        {/* ---- interactive orbit ---- */}
        <Reveal className="eco-map" aria-hidden="false">
          <svg className="eco-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {orbitCompanies.map((c, idx) => (
              <line
                key={c.id}
                className={cn("eco-line", activeId === c.id && "active")}
                x1={positions[idx].x}
                y1={positions[idx].y}
                x2={CX}
                y2={CY}
                pathLength={1}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          <div className="eco-core" data-active={!!active}>
            <svg className="eco-core-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 21h16M6 21V7l6-3 6 3v14M10 11h4M10 15h4" />
            </svg>
            {active ? (
              <>
                <div className="eco-core-name">{active.name}</div>
                <div className="eco-core-benefit">{active.benefit}</div>
              </>
            ) : (
              <>
                <div className="eco-core-name">Sandton Gate</div>
                <div className="eco-core-benefit">Hover a company to see what flows into your building.</div>
              </>
            )}
          </div>

          {orbitCompanies.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              className={cn("eco-node", activeId === c.id && "active")}
              style={{ left: `${positions[idx].x}%`, top: `${positions[idx].y}%` }}
              onMouseEnter={() => setActiveId(c.id)}
              onFocus={() => setActiveId(c.id)}
              onClick={() => setActiveId(c.id)}
              aria-label={`${c.name}: ${c.benefit}`}
            >
              <span className="eco-node-dot">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <span className="eco-node-label">{c.name}</span>
            </button>
          ))}
        </Reveal>

        {/* ---- filterable detail grid ---- */}
        <Reveal className="eco-filters" role="tablist" aria-label="Filter ecosystem by capability">
          <button
            type="button"
            className={cn("eco-chip", filter === "all" && "on")}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={cn("eco-chip", filter === cat.id && "on")}
              aria-pressed={filter === cat.id}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="eco-grid">
          {shown.map((c) => (
            <div className="eco-card" key={c.id}>
              <span className="eco-card-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <div className="eco-card-name">{c.name}</div>
              <div className="eco-card-does">{c.does}</div>
              <p className="eco-card-benefit">{c.benefit}</p>
            </div>
          ))}
        </div>

        {/* ---- animated ecosystem stats ---- */}
        <div className="eco-stats">
          <div className="eco-stat">
            <b>
              <CountUp to={15} suffix="+" />
            </b>
            <span>Group companies</span>
          </div>
          <div className="eco-stat">
            <b>
              <CountUp to={40} suffix=" yrs" />
            </b>
            <span>One accountable owner</span>
          </div>
          <div className="eco-stat">
            <b>
              <CountUp to={30} suffix="MW+" />
            </b>
            <span>Renewable energy developed</span>
          </div>
          <div className="eco-stat">
            <b>1</b>
            <span>Point of contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
