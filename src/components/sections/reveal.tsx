"use client";

import { useEffect, useRef, useState, type ElementType, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger delay, mirroring the original `transition-delay` inline styles. */
  delay?: number;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "style">;

/**
 * Fades + lifts its children into view on scroll, replacing the original
 * IntersectionObserver script. Adds the `in` class once intersected, then
 * stops observing, matching the one-shot reveal of the source proposal.
 */
export function Reveal({ children, as, delay, className, ...rest }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  // Track "shown" in React state (not via classList) so the `in` class survives
  // re-renders, otherwise a parent re-render (e.g. hover state) would wipe it
  // and the element would fade back out.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", shown && "in", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
