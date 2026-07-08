import { Reveal } from "@/components/sections/reveal";
import { masterplan, masterplanNote } from "@/content/deal";
import { cn } from "@/lib/utils";

export function Masterplan() {
  return (
    <section id="masterplan">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">A precinct on the rise</span>
          <h2>A masterplan you can commit to.</h2>
          <p>Sandton Gate is a phased, long-term precinct — so a 5–10 year Nedbank commitment lands on an upward node trajectory, not a standalone building.</p>
        </Reveal>

        <Reveal className="proc masterplan-proc">
          {masterplan.map((m, i) => (
            <div className={cn("proc-step", m.now && "now", m.done && "done")} key={m.title}>
              <div className="proc-marker">
                <span className="proc-dot" />
                {i < masterplan.length - 1 && <span className="proc-line" />}
              </div>
              <div className="proc-when">{m.phase}</div>
              <div className="proc-title">{m.title}</div>
              <div className="proc-body">{m.body}</div>
            </div>
          ))}
        </Reveal>

        <Reveal as="p" className="sg-disclaimer">
          {masterplanNote}
        </Reveal>
      </div>
    </section>
  );
}
