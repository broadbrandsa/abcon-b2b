"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Example Proposal" },
  { href: "/strategy", label: "Abcon Strategy" },
];

/**
 * Slim top bar that sits above the main menu on both the proposal and the
 * Broadbrand strategy page, with tabs to switch between the two.
 */
export function SiteSwitch() {
  const pathname = usePathname();

  return (
    <div className="site-switch">
      <div className="switch-inner">
        <span className="switch-brand">Broadbrand · presenting to Abcon</span>
        <div className="switch-tabs" role="tablist" aria-label="Switch view">
          {tabs.map((t) => {
            const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
            return (
              <Link key={t.href} href={t.href} className={cn("switch-tab", active && "on")} aria-current={active ? "page" : undefined}>
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
