"use client";

import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { cn } from "@/lib/utils";

// Window grid for the tower.
const COLS = 5;
const ROWS = 13;
const WINDOWS = Array.from({ length: COLS * ROWS }, (_, i) => i);
// Deterministic "lit at night" pattern (no Math.random — keeps SSR stable).
const isLit = (i: number) => (i * 7 + (i % 3) * 5) % 4 !== 0;

export function BrandReveal() {
  const [t, setT] = useState(1); // 0 = generic/day, 1 = Nedbank/night
  const night = t > 0.5;
  const logoOpacity = Math.max(0, Math.min(1, (t - 0.15) / 0.85));

  return (
    <section id="brand">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">See your name on it</span>
          <h2>
            Picture your people here, <em>Nedbank.</em>
          </h2>
          <p>
            You set South Africa&apos;s green-office standard at 135 Rivonia. Sandton Gate is built to it — so this
            isn&apos;t a compromise, it&apos;s the next expression of who you already are. Drag to bring your brand home.
          </p>
        </Reveal>

        <Reveal className="br-stage">
          <div className="br-scene" data-night={night}>
            {/* sky */}
            <div className="br-sky day" style={{ opacity: 1 - t }} />
            <div className="br-sky night" style={{ opacity: t }} />
            <div className="br-glow" style={{ opacity: t }} />

            <svg className="br-svg" viewBox="0 0 400 460" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              {/* neighbouring skyline */}
              <g className="br-skyline" style={{ opacity: 0.5 + t * 0.3 }}>
                <rect x="18" y="250" width="70" height="210" />
                <rect x="96" y="300" width="52" height="160" />
                <rect x="300" y="230" width="64" height="230" />
                <rect x="356" y="290" width="40" height="170" />
              </g>
              {/* main tower */}
              <rect x="150" y="90" width="104" height="370" className="br-tower" />
              <rect x="150" y="90" width="104" height="370" className="br-tower-edge" />
              {/* windows */}
              <g>
                {WINDOWS.map((i) => {
                  const c = i % COLS;
                  const r = Math.floor(i / COLS);
                  const x = 160 + c * 18;
                  const y = 150 + r * 22;
                  const lit = isLit(i);
                  const op = 0.06 + (lit ? 0.92 : 0.22) * t;
                  return <rect key={i} x={x} y={y} width={12} height={14} fill="var(--gold-soft)" opacity={op} rx={1} />;
                })}
              </g>
              {/* sign band */}
              <rect x="150" y="104" width="104" height="30" className="br-sign" style={{ opacity: 0.25 + logoOpacity * 0.75 }} />
            </svg>

            {/* Nedbank identity on the building */}
            <div className="br-logo" style={{ opacity: logoOpacity }}>
              <Image src="/images/nedbank-logo.webp" alt="Nedbank" width={200} height={188} />
            </div>

            <span className="br-caption">Illustrative — night render with Nedbank identity</span>
            <span className="br-state">{night ? "Nedbank · Sandton Gate" : "A tower at Sandton Gate"}</span>
          </div>

          <div className="br-controls">
            <button type="button" className={cn("br-toggle", !night && "on")} onClick={() => setT(0)}>
              Generic
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={t}
              onChange={(e) => setT(Number(e.target.value))}
              aria-label="Transition the tower to the Nedbank identity"
              className="br-slider"
            />
            <button type="button" className={cn("br-toggle", night && "on")} onClick={() => setT(1)}>
              Nedbank
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
