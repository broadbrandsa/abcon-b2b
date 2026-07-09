"use client";

import { useEffect } from "react";

/**
 * Minimal client-side "sections viewed" tracker stub, logs to the console and
 * an in-memory set only. No external analytics, no network. Useful hook point
 * for a future deal-room read-receipt.
 */
export function ViewTracker() {
  useEffect(() => {
    const seen = new Set<string>();
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".sg > section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !seen.has(e.target.id)) {
            seen.add(e.target.id);
            console.debug(`[proposal] viewed: ${e.target.id} (${seen.size}/${sections.length})`);
          }
        }
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}
