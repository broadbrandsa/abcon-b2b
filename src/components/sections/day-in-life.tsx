import { ImageSlot } from "@/components/sections/image-slot";
import { Reveal } from "@/components/sections/reveal";
import { dayInLife } from "@/content/upgrade";

export function DayInLife() {
  return (
    <section id="day">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">A day in the life</span>
          <h2>What Tuesday feels like here.</h2>
          <p>Not a floor plan — a day. This is what your people actually experience at Sandton Gate.</p>
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
