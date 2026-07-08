"use client";

import { useEffect, useRef, useState } from "react";

import { AbconLogo } from "@/components/brand/abcon-logo";
import { NedbankLogo } from "@/components/brand/nedbank-logo";
import { navLinks } from "@/content/proposal";
import { cn } from "@/lib/utils";

/**
 * Fixed navigation with a frosted "scrolled" state and a top scroll-progress
 * bar — ports the nav + progress script from the original proposal.
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
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

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href).filter((h) => h.startsWith("#"));
    const sections = ids
      .map((h) => document.getElementById(h.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} />
      <nav className={cn("sg-nav", scrolled && "scrolled")}>
        <div className="lockup">
          <AbconLogo priority />
          <span className="x">×</span>
          <NedbankLogo priority />
        </div>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn(active === link.href && "active")}>
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
