import { ImageSlot } from "@/components/sections/image-slot";
import { Reveal } from "@/components/sections/reveal";
import { availability as a } from "@/content/upgrade";

export function Availability() {
  return (
    <section id="availability">
      <div className="avail-bleed">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">It&apos;s real — and it won&apos;t wait</span>
            <h2>{a.scarcityTitle}</h2>
            <p>{a.scarcityBody}</p>
          </Reveal>

          <div className="avail-grid">
            <Reveal className="avail-proof">
              {a.proofPoints.map((p) => (
                <div className="avail-point" key={p.k}>
                  <b>{p.k}</b>
                  <span>{p.v}</span>
                </div>
              ))}
              <p className="avail-neighbours">{a.neighboursNote}</p>
            </Reveal>
            <Reveal className="avail-live" delay={0.1}>
              <ImageSlot dark label={a.liveSlot} caption="Updated as construction progresses" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
