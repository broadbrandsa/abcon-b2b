"use client";

import { useEffect, useRef, useState } from "react";

import { navLinks } from "@/content/proposal";
import { cn } from "@/lib/utils";

/**
 * Fixed navigation with a frosted "scrolled" state and a top scroll-progress
 * bar — ports the nav + progress script from the original proposal.
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${Number.isFinite(pct) ? pct : 0}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} />
      <nav className={cn("sg-nav", scrolled && "scrolled")}>
        <div className="lockup">
          <span className="wordmark light" style={{ color: "#fff" }}>
            ABCON
          </span>
          <span className="x">×</span>
          <span className="ned" style={{ color: "#fff" }}>
            <span className="dot" />
            Nedbank
          </span>
        </div>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className="nav-cta">
            Book a viewing
          </a>
        </div>
      </nav>
    </>
  );
}
