import { Reveal } from "@/components/sections/reveal";
import { partnerships } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

export function Partnership() {
  return (
    <section id="partner">
      <div className="partner-bleed">
        <div className="wrap">
          <Reveal className="sec-head partner-head">
            <span className="eyebrow">Partner to partner</span>
            <h2>
              This isn&apos;t a cold pitch. <em>You already build with us.</em>
            </h2>
            <p>
              Nedbank already trusts Abcon and its partners with billions in property and residential investment. Anchoring
              Sandton Gate isn&apos;t a new vendor relationship — it&apos;s the next chapter of one you already have.
            </p>
          </Reveal>

          <div className="partner-proof">
            {partnerships.slice(0, 2).map((p) => (
              <Reveal className="partner-chip" key={p.fund}>
                <b>{p.fund}</b>
                <span>{p.partners}</span>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="timeline" aria-label="Abcon × Nedbank partnership timeline">
            {partnerships.map((p, idx) => (
              <div className={cn("tl-node", "highlight" in p && p.highlight && "now")} key={p.fund}>
                <div className="tl-dot" />
                {idx < partnerships.length - 1 && <div className="tl-line" />}
                <div className="tl-year">{p.year}</div>
                <div className="tl-title">{p.fund}</div>
              </div>
            ))}
          </Reveal>

          <Reveal as="p" className="partner-close">
            You already trust us with billions. Now let&apos;s give your people a home.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
