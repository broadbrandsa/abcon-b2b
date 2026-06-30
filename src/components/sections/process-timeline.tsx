import { Reveal } from "@/components/sections/reveal";
import { processSteps } from "@/content/commercial";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  return (
    <section id="process">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">From yes to keys</span>
          <h2>Roughly twenty weeks to move-in.</h2>
          <p>
            An indicative develop-to-suit journey from letter of intent to handover. Building A enables a faster track
            for immediate needs.
          </p>
        </Reveal>

        <Reveal className="proc">
          {processSteps.map((step, i) => (
            <div className={cn("proc-step", step.highlight && "now")} key={step.title}>
              <div className="proc-marker">
                <span className="proc-dot" />
                {i < processSteps.length - 1 && <span className="proc-line" />}
              </div>
              <div className="proc-when">{step.when}</div>
              <div className="proc-title">{step.title}</div>
              <div className="proc-body">{step.body}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
