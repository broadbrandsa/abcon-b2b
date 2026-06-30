import { cn } from "@/lib/utils";

/**
 * Nedbank lockup: a green tile mark with an "N" device plus the Nedbank
 * wordmark. The tile stays brand-green on every background; the wordmark
 * inherits `currentColor`. Swap for an official vector asset when available.
 */
export function NedbankLogo({ className }: { className?: string }) {
  return (
    <span className={cn("ned", className)} aria-label="Nedbank">
      <svg className="ned-mark" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="5.5" fill="var(--emerald)" />
        <path
          d="M7 17 V7.5 L17 16.5 V7"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ned-word">Nedbank</span>
    </span>
  );
}
