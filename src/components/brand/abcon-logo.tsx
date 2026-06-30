import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Official Abcon Group logo, seated in a white chip so the navy/blue artwork
 * stays legible on the dark hero nav and footer. Asset: /images/abcon-group-logo.png
 */
export function AbconLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("logo-chip abcon", className)}>
      <Image
        className="logo-img"
        src="/images/abcon-group-logo.png"
        alt="Abcon Group"
        width={581}
        height={121}
        priority={priority}
      />
    </span>
  );
}
