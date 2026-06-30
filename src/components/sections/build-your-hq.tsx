"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "solar", label: "Solar", by: "Blume", icon: "M13 2 4 14h7l-1 8 9-12h-7z" },
  { id: "managed", label: "Managed", by: "Strive", icon: "M4 7h16M4 12h16M4 17h10" },
  { id: "secured", label: "Secured", by: "Trakka", icon: "M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z" },
  { id: "branded", label: "Branded", by: "Abcon", icon: "M4 7h16v4H4zM4 14h10v3H4z" },
  { id: "residences", label: "Residences", by: "Craft Homes", icon: "M3 11l9-7 9 7M5 10v10h14V10" },
];

export function BuildYourHq() {
  const [active, setActive] = useState<Set<string>>(new Set(["solar", "secured"]));

  const toggle = (id: string) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const activeServices = SERVICES.filter((s) => active.has(s.id));

  return (
    <Reveal className="bld-col">
      <div className={cn("bld-visual", active.size > 0 && "powered")}>
        <span className="photo-note">Drop hero render / photography here</span>
        <div className="bld-towers">
          <div className="tower" style={{ height: "62%" }} />
          <div className="tower" style={{ height: "84%" }} />
          <div className="tower" style={{ height: "50%" }} />
        </div>
        <div className="bld-badges">
          {activeServices.map((s) => (
            <span className="bld-badge" key={s.id}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={s.icon} />
              </svg>
              {s.label} · {s.by}
            </span>
          ))}
        </div>
        <span className="tag">Phase 2 · Two new office towers</span>
      </div>

      <div className="byh">
        <div className="byh-head">
          <b>Build your HQ</b>
          <span>
            {active.size}/{SERVICES.length} group services on
          </span>
        </div>
        <div className="byh-toggles">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={cn("byh-toggle", active.has(s.id) && "on")}
              aria-pressed={active.has(s.id)}
              onClick={() => toggle(s.id)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={s.icon} />
              </svg>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
