import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Broadbrand wordmark (white artwork), for dark surfaces such as the strategy
 * page nav and footer. Asset: /broadbrand-white.png
 */
export function BroadbrandLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      className={cn("broadbrand-logo", className)}
      src="/broadbrand-white.png"
      alt="Broadbrand"
      width={12840}
      height={3210}
      priority={priority}
    />
  );
}
