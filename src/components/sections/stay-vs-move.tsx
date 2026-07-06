import { Reveal } from "@/components/sections/reveal";
import { availability as a, leaseCost, stayVsMove } from "@/content/upgrade";

export function StayVsMove() {
  return (
    <section id="compare">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Why move now</span>
          <h2>The cost of staying put.</h2>
          <p>
            Your lease is up in ~18 months. Renewing feels like the safe option — but a newer, greener building five
            minutes away can cost less across the term than refurbishing an ageing campus. Here&apos;s the honest
            side-by-side. Figures indicative, subject to confirmation.
          </p>
        </Reveal>

        <Reveal className="svm">
          <div className="svm-head">
            <span />
            <span className="svm-col-stay">Stay &amp; refurbish 135 Rivonia</span>
            <span className="svm-col-move">Move to Sandton Gate</span>
          </div>
          {stayVsMove.map((row) => (
            <div className="svm-row" key={row.criterion}>
              <span className="svm-criterion">{row.criterion}</span>
              <span className="svm-stay">{row.stay}</span>
              <span className="svm-move">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {row.move}
              </span>
            </div>
          ))}
          <div className="svm-row svm-cost">
            <span className="svm-criterion">Whole-of-lease cost (illustrative)</span>
            <span className="svm-stay">{leaseCost.stayValue}</span>
            <span className="svm-move">{leaseCost.moveValue}</span>
          </div>
        </Reveal>

        <Reveal className="svm-basis">{leaseCost.basis}</Reveal>

        <Reveal className="svm-punch">
          <p>{leaseCost.punch}</p>
          <span>It also outperforms Waterfall and Rosebank on transport, green rating and the partnership you already have with us.</span>
        </Reveal>

        <Reveal className="movenow-scarcity">
          <div className="movenow-copy">
            <span className="eyebrow">And it won&apos;t wait</span>
            <h3>{a.scarcityTitle}</h3>
            <p>{a.scarcityBody}</p>
            <p className="avail-neighbours">{a.neighboursNote}</p>
          </div>
          <div className="avail-proof">
            {a.proofPoints.map((p) => (
              <div className="avail-point" key={p.k}>
                <b>{p.k}</b>
                <span>{p.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
