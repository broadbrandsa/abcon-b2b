import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow our own static placeholder SVG logos through next/image, sandboxed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
