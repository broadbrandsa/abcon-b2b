import { Reveal } from "@/components/sections/reveal";
import { client } from "@/content/client";
import { partnerships } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

export function WhyClient() {
  return (
    <section id="why-client">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Why {client.name} + Abcon</span>
          <h2>One accountable partner — across the whole property lifecycle.</h2>
          <p>
            Most landlords do one thing. Abcon develops, builds, powers, secures and manages its own buildings, and
            co-invests in them — so {client.name} deals with one group that owns the outcome. And {client.name}&apos;s
            public strategy and Sandton Gate already point the same way.
          </p>
        </Reveal>

        <div className="wc-grid">
          {client.commitments.map((c, i) => (
            <Reveal className="wc-card" key={c.id} delay={(i % 3) * 0.05}>
              <span className="wc-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <div className="wc-commitment">{client.name} commits</div>
              <h3>{c.commitment}</h3>
              <p className="wc-delivery">{c.delivery}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="wc-partner">
          <div className="wc-partner-lead">
            <span className="eyebrow">You already build with us</span>
            <h3>This isn&apos;t a cold pitch — it&apos;s the next chapter.</h3>
            <p>Nedbank already trusts Abcon and its partners with billions in property and residential investment.</p>
          </div>
          <div className="timeline">
            {partnerships.map((p, idx) => (
              <div className={cn("tl-node", "highlight" in p && p.highlight && "now")} key={p.fund}>
                <div className="tl-dot" />
                {idx < partnerships.length - 1 && <div className="tl-line" />}
                <div className="tl-year">{p.year}</div>
                <div className="tl-title">{p.fund}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
