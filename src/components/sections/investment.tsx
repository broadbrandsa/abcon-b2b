"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import {
  AREA_PER_PERSON,
  BAYS_PER_100M2,
  BAY_RATE,
  excluded,
  included,
  leaseTerms,
  pricingDisclaimer,
  tiers,
} from "@/content/commercial";
import { cn } from "@/lib/utils";

const fmt = (n: number) => Math.round(n).toLocaleString("en-ZA").replace(/,/g, " ");
const rand = (n: number) => `R${fmt(n)}`;
const randCompact = (n: number) =>
  n >= 1_000_000 ? `~R${(n / 1_000_000).toFixed(2)}m` : n >= 1_000 ? `~R${Math.round(n / 1_000)}k` : `R${fmt(n)}`;

export function Investment() {
  const [tierId, setTierId] = useState("phase2");
  const [headcount, setHeadcount] = useState(450);

  const tier = tiers.find((t) => t.id === tierId) ?? tiers[0];
  const area = headcount * AREA_PER_PERSON;
  const bays = Math.round((area / 100) * BAYS_PER_100M2);
  const monthly = area * tier.rate + bays * BAY_RATE;
  const annual = monthly * 12;

  return (
    <section id="invest">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your Space &amp; Investment</span>
          <h2>What it costs to call it home.</h2>
          <p>Choose a space tier, size your team, and see an indicative monthly and annual investment in real time.</p>
        </Reveal>

        {/* tier selector */}
        <div className="tier-grid">
          {tiers.map((t) => (
            <Reveal key={t.id}>
              <button
                type="button"
                className={cn("tier-card", tierId === t.id && "sel")}
                aria-pressed={tierId === t.id}
                onClick={() => setTierId(t.id)}
              >
                {t.recommended && <span className="tier-badge">Recommended for HQ</span>}
                <div className="tier-name">{t.name}</div>
                <div className="tier-rate">
                  R{t.rate}
                  <span>/m²/month</span>
                </div>
                <div className="tier-tag">{t.tagline}</div>
                <div className="tier-note">{t.note}</div>
                <div className="tier-occ">
                  <span className="dot" />
                  {t.occupation}
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="invest-grid">
          {/* calculator */}
          <Reveal className="calc">
            <h3>Investment calculator</h3>
            <p>
              On <b style={{ color: "#fff" }}>{tier.name}</b> at R{tier.rate}/m²/month.
            </p>
            <label htmlFor="invhc">Team size</label>
            <div className="headcount">
              <span>{fmt(headcount)}</span>
              <span>people</span>
            </div>
            <input
              type="range"
              id="invhc"
              min={20}
              max={1500}
              step={10}
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
            />
            <div className="calc-out">
              <div className="o">
                <b>~{fmt(area)}</b>
                <span>m² (13m²/person)</span>
              </div>
              <div className="o">
                <b>~{fmt(bays)}</b>
                <span>parking bays</span>
              </div>
            </div>
            <div className="invest-figures">
              <div className="fig">
                <span>Indicative monthly</span>
                <b>{rand(monthly)}</b>
                <em>{randCompact(monthly)}</em>
              </div>
              <div className="fig">
                <span>Indicative annual</span>
                <b>{rand(annual)}</b>
                <em>{randCompact(annual)}</em>
              </div>
            </div>
            <p className="calc-tinynote">Incl. {rand(bays * BAY_RATE)} parking ({fmt(bays)} bays × R{fmt(BAY_RATE)}). Excl. VAT &amp; consumption.</p>
          </Reveal>

          {/* lease terms */}
          <Reveal className="terms" delay={0.1}>
            <h3>Lease terms</h3>
            <ul className="terms-list">
              {leaseTerms.map((t) => (
                <li key={t.label}>
                  <span className="t-label">{t.label}</span>
                  <span className="t-value">{t.value}</span>
                </li>
              ))}
            </ul>
            <div className="terms-incl">
              <div className="incl-col">
                <div className="incl-head">Included in the gross rate</div>
                <ul>
                  {included.map((x) => (
                    <li key={x} className="yes">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="incl-col">
                <div className="incl-head">Excluded</div>
                <ul>
                  {excluded.map((x) => (
                    <li key={x} className="no">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal as="p" className="disclaimer">
          {pricingDisclaimer}
        </Reveal>
      </div>
    </section>
  );
}
