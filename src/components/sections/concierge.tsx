import { Reveal } from "@/components/sections/reveal";
import { conciergeSteps } from "@/content/upgrade";

export function Concierge() {
  return (
    <section id="concierge">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">We&apos;ll handle the whole move</span>
          <h2>Moving a bank is our job, not yours.</h2>
          <p>
            The biggest reason not to move is the fear of disruption. So we take it off your desk: one partner owns
            design, build, fit-out, the physical relocation and day-one operations — phased so the bank never stops.
          </p>
        </Reveal>

        <div className="concierge-flow">
          {conciergeSteps.map((step, i) => (
            <Reveal className="concierge-step" key={step.title} delay={(i % 4) * 0.05}>
              <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="cs-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {step.icon}
                </svg>
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="cs-by">{step.by}</div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="concierge-close">
          One accountable team from first sketch to first morning — you approve, we deliver.
        </Reveal>
      </div>
    </section>
  );
}
