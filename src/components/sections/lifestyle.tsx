import { ImageSlot } from "@/components/sections/image-slot";
import { Reveal } from "@/components/sections/reveal";
import { amenities } from "@/content/proposal";
import { dayInLife } from "@/content/upgrade";

// Power/water lives only in Power & Resilience now.
const workplaceAmenities = amenities.filter((a) => a.title !== "Backup power & water");

export function Lifestyle() {
  return (
    <section id="workplace">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Workplace &amp; lifestyle</span>
          <h2>A workplace people want to come to.</h2>
          <p>
            A green, amenity-rich, transport-connected HQ is a return-to-office magnet — it makes Nedbank&apos;s values
            visible to staff and helps win the talent war. There&apos;s even scope for an on-site Nedbank banking hall.
          </p>
        </Reveal>

        <div className="amen">
          {workplaceAmenities.map((a, i) => (
            <Reveal className="a" key={a.title} delay={(i % 4) * 0.04}>
              <div className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {a.icon}
                </svg>
              </div>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="sec-subhead">
          <h3>What Tuesday feels like here.</h3>
          <p>Not a floor plan — a day. From the Gautrain to a walk home at The Terrace.</p>
        </Reveal>

        <div className="day-list">
          {dayInLife.map((step, i) => (
            <Reveal className="day-step" key={step.time} delay={(i % 2) * 0.05}>
              <div className="day-when">{step.time}</div>
              <div className="day-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <ImageSlot className="day-slot" label={step.slot} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
