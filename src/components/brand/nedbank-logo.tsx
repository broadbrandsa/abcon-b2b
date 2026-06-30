import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Official Nedbank logo, seated in a white chip so the green artwork stays
 * legible on the dark hero nav and footer. Asset: /images/nedbank-logo.webp
 */
export function NedbankLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("logo-chip nedbank", className)}>
      <Image
        className="logo-img"
        src="/images/nedbank-logo.webp"
        alt="Nedbank"
        width={1264}
        height={1186}
        priority={priority}
      />
    </span>
  );
}
