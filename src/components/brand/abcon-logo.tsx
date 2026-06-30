import { cn } from "@/lib/utils";

/**
 * Abcon lockup: a "gate" emblem (nodding to Sandton Gate) plus the ABCON
 * wordmark. The emblem uses `currentColor`, so it recolours with the
 * surrounding text (white on the hero nav, ink when scrolled, cream in the
 * footer). Swap for an official vector asset when available.
 */
export function AbconLogo({ className }: { className?: string }) {
  return (
    <span className={cn("brand-lockup", className)} aria-label="Abcon">
      <svg className="brand-emblem" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="1.4" y="1.4" width="25.2" height="25.2" rx="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 20.5 V12.5 a6 6 0 0 1 12 0 V20.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M14 20.5 V12.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <span className="wordmark">ABCON</span>
    </span>
  );
}
