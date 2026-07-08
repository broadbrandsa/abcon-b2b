"use client";

import { useRef } from "react";

import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { proofItems, proofStats } from "@/content/proposal";
import { referencesNote } from "@/content/themes";

export function TrackRecord() {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * Math.min(340, el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="proof">
      <div className="wrap">
        <div className="proof-topbar">
          <Reveal className="sec-head">
            <span className="eyebrow">Track record &amp; references</span>
            <h2>We&apos;ve done this for South Africa&apos;s biggest names.</h2>
            <p>Four decades of landmark commercial space — swipe through the portfolio.</p>
          </Reveal>
          <div className="proof-nav" aria-hidden="true">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous">
              ‹
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        <Reveal className="proof-carousel" as="div">
          <div className="proof-track" ref={ref}>
            {proofItems.map((item) => (
              <div className="proof-slide" key={item.name}>
                <b>{item.name}</b>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="proof-stats">
          {proofStats.map((stat, i) => (
            <Reveal className="s" key={stat.label} delay={i * 0.05}>
              <b>
                <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
              </b>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="proof-references">
          {referencesNote}
        </Reveal>
      </div>
    </section>
  );
}
