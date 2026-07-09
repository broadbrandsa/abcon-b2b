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
          <p>Sandton Gate is a phased, long-term precinct, so a 5–10 year Nedbank commitment lands on an upward node trajectory, not a standalone building.</p>
        </Reveal>

        <div className="mp-grid">
          {masterplan.map((m, i) => (
            <Reveal className={cn("mp-card", m.now && "now", m.done && "done")} key={m.title} delay={(i % 4) * 0.05}>
              <div className="mp-badge">
                {m.phase}
                {m.done && <em>Delivered</em>}
                {m.now && <em>Your opportunity</em>}
              </div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="sg-disclaimer">
          {masterplanNote}
        </Reveal>
      </div>
    </section>
  );
}
