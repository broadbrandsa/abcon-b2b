"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Example Proposal" },
  { href: "/strategy", label: "Abcon Strategy" },
];

/**
 * Slim glass bar above the main menu on both the proposal and the strategy
 * page. The tabs are an equal-width segmented control with a sliding thumb.
 */
export function SiteSwitch() {
  const pathname = usePathname();
  const activeIndex = tabs.findIndex((t) => (t.href === "/" ? pathname === "/" : pathname.startsWith(t.href)));

  return (
    <div className="site-switch">
      <div className="switch-inner">
        <span className="switch-brand">
          Broadbrand<i aria-hidden="true" />
          <em>for Abcon</em>
        </span>
        <nav className="switch-tabs" aria-label="Switch view">
          <span
            className="switch-thumb"
            aria-hidden="true"
            style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
          />
          {tabs.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={cn("switch-tab", i === activeIndex && "on")}
              aria-current={i === activeIndex ? "page" : undefined}
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
