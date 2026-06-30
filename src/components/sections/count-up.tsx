"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Target value to count to. */
  to: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * Counts from 0 to `to` once it scrolls into view. Used for the animated
 * ecosystem / track-record stats ("40", "30", "15", "100", …).
 */
export function CountUp({ to, prefix = "", suffix = "", duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        let raf = 0;
        let startTime: number | null = null;
        const tick = (now: number) => {
          if (startTime === null) startTime = now;
          const progress = Math.min((now - startTime) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * to));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-ZA").replace(/,/g, " ")}
      {suffix}
    </span>
  );
}
