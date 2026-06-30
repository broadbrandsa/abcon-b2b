"use client";

import { useEffect, useRef, type ElementType, type HTMLAttributes, type ReactNode } from "react";

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
 * stops observing — matching the one-shot reveal of the source proposal.
 */
export function Reveal({ children, as, delay, className, ...rest }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
