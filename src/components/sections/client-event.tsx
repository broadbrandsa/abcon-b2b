import { ImageSlot } from "@/components/sections/image-slot";
import { Reveal } from "@/components/sections/reveal";
import { clientEvent } from "@/content/deal";

export function ClientEvent() {
  return (
    <section id="host">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Where you host the world</span>
          <h2>A building that represents Nedbank to its clients.</h2>
          <p>{clientEvent.lead}</p>
        </Reveal>

        <div className="host-grid">
          <div className="pt-grid pt-grid--2">
            {clientEvent.points.map((p, i) => (
              <Reveal className="pt-card" key={p.title} delay={(i % 2) * 0.05}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="host-visual" delay={0.1}>
            <ImageSlot label="Executive reception / auditorium render" caption="Illustrative" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
