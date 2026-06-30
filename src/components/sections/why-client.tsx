import { Reveal } from "@/components/sections/reveal";
import { client } from "@/content/client";

export function WhyClient() {
  return (
    <section id="why-client">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Why {client.name} chooses Abcon</span>
          <h2>Built around your commitments — not just your headcount.</h2>
          <p>
            {client.name}&apos;s public strategy and Sandton Gate point the same way. Here&apos;s how the building and
            the Abcon group advance each commitment {client.name} has already made.
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
      </div>
    </section>
  );
}
