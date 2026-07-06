import { Reveal } from "@/components/sections/reveal";
import { committee } from "@/content/themes";

export function Committee() {
  return (
    <section id="committee">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">For your committee</span>
          <h2>Every decision-maker, answered.</h2>
          <p>A move of this scale touches your whole leadership team. Here&apos;s where each of them finds their answer.</p>
        </Reveal>

        <div className="committee-grid">
          {committee.map((c, i) => (
            <Reveal className="committee-card" key={c.role} delay={(i % 4) * 0.05}>
              <div className="committee-role">{c.role}</div>
              <a className="committee-answers" href={c.href}>
                {c.answers}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
