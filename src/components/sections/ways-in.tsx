import { Reveal } from "@/components/sections/reveal";
import { waysIn, waysInClose, waysInLead } from "@/content/deal";
import { cn } from "@/lib/utils";

export function WaysIn() {
  return (
    <section id="ways">
      <div className="ways-bleed">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Beyond a lease, ways in</span>
            <h2>{waysInLead}</h2>
            <p>
              Uniquely for Nedbank: three ways to take Sandton Gate, from a simple lease to co-owning your own
              headquarters alongside Abcon.
            </p>
          </Reveal>

          <div className="ways-grid">
            {waysIn.map((w, i) => (
              <Reveal className={cn("ways-card", w.flag && "flag")} key={w.id} delay={(i % 3) * 0.06}>
                {w.flag && <span className="ways-tag-badge">Recommended for an anchor</span>}
                <span className="ways-ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {w.icon}
                  </svg>
                </span>
                <div className="ways-name">{w.name}</div>
                <div className="ways-tag">{w.tag}</div>
                <p className="ways-body">{w.body}</p>
                <ul className="ways-points">
                  {w.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" className="ways-close">
            {waysInClose}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
