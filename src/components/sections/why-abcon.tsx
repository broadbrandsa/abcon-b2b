import { Reveal } from "@/components/sections/reveal";
import { whyCards } from "@/content/proposal";

export function WhyAbcon() {
  return (
    <section id="why">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Why Abcon</span>
          <h2>One accountable partner across the entire property lifecycle.</h2>
          <p>
            Most landlords do one thing. Abcon develops, builds, manages and co-invests in its own buildings — so
            Nedbank deals with one group that owns the outcome, not a fragmented chain of contractors.
          </p>
        </Reveal>
        <div className="why-grid">
          {whyCards.map((card, i) => (
            <Reveal className="why-card" key={card.num} delay={(i % 3) * 0.05}>
              <div className="why-num">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
