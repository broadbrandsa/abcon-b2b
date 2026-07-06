import { cn } from "@/lib/utils";

/**
 * Labelled placeholder for a real asset (render / photo / plan / video).
 * States clearly what belongs there so the client's team can drop it in.
 */
export function ImageSlot({
  label,
  caption,
  className,
  dark = false,
}: {
  label: string;
  caption?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("img-slot", dark && "dark", className)}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16l5-5 4 4 3-3 6 6" />
        <circle cx="9" cy="9" r="1.6" />
      </svg>
      <span className="img-slot-label">{label}</span>
      {caption && <span className="img-slot-cap">{caption}</span>}
    </div>
  );
}
