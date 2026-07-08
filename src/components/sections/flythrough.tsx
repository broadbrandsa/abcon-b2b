import { Reveal } from "@/components/sections/reveal";

export function Flythrough() {
  return (
    <section id="flythrough">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">See it from the air</span>
          <h2>Sandton Gate, from above.</h2>
          <p>A drone flythrough of the precinct — the towers, the piazza and the green edge along the Braamfontein Spruit.</p>
        </Reveal>

        <Reveal className="streetview">
          <span className="streetview-label">Aerial flythrough</span>
          <iframe
            title="Sandton Gate drone flythrough"
            src="https://www.youtube.com/embed/AZZ08MEVcd4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>
      </div>
    </section>
  );
}
