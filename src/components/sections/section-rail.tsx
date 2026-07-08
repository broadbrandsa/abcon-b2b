"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const RAIL = [
  { id: "glance", label: "Overview" },
  { id: "why-client", label: "Why Nedbank" },
  { id: "building", label: "The Precinct" },
  { id: "plans", label: "Floor plans" },
  { id: "power", label: "Power" },
  { id: "ecosystem", label: "One group" },
  { id: "masterplan", label: "Masterplan" },
  { id: "compare", label: "Why move" },
  { id: "ways", label: "Ways in" },
  { id: "invest", label: "Commercials" },
  { id: "documents", label: "Deal room" },
  { id: "cta", label: "Contact" },
];

export function SectionRail() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = RAIL.map((r) => document.getElementById(r.id)).filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.3, 0.6, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-rail" aria-label="Section navigation">
      {RAIL.map((r) => (
        <a key={r.id} href={`#${r.id}`} className={cn("rail-dot", active === r.id && "on")}>
          <span className="rail-label">{r.label}</span>
          <span className="rail-mark" aria-hidden="true" />
          <span className="sr-only">{r.label}</span>
        </a>
      ))}
    </nav>
  );
}
