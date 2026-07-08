"use client";

import { Reveal } from "@/components/sections/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { diligence } from "@/content/upgrade";

// Cost -> Commercials, IT/security -> Technology, safety/parking -> Location,
// references -> Track Record. This section owns what's left.
const KEEP = new Set(["Transition risk", "Capacity & growth", "Flexibility & exit", "Delivery certainty"]);
const items = diligence.filter((d) => KEEP.has(d.theme));

export function Diligence() {
  return (
    <section id="diligence">
      <div className="wrap wrap--narrow">
        <Reveal className="sec-head">
          <span className="eyebrow">De-risking the move</span>
          <h2>The questions your team will ask — answered.</h2>
          <p>Expand each one. Straight answers to the diligence questions before you even have to raise them.</p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible defaultValue={items[0]?.theme} className="dil-acc">
            {items.map((d) => (
              <AccordionItem value={d.theme} key={d.theme} className="dil-item">
                <AccordionTrigger className="dil-trigger">
                  <span className="dil-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{d.icon}</svg>
                  </span>
                  <span className="dil-head">
                    <span className="dil-theme">{d.theme}</span>
                    <span className="dil-q">{d.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="dil-answer">{d.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
