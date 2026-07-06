import Image from "next/image";

import { Reveal } from "@/components/sections/reveal";

export function BrandReveal() {
  return (
    <section id="brand">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">See your name on it</span>
          <h2>
            Picture your people here, <em>Nedbank.</em>
          </h2>
          <p>
            You set South Africa&apos;s green-office standard at 135 Rivonia. Sandton Gate is built to it — so this
            isn&apos;t a compromise, it&apos;s the next expression of who you already are.
          </p>
        </Reveal>

        <Reveal className="br-stage">
          <figure className="br-figure">
            <Image
              className="br-render"
              src="/Gemini_Generated_Image_bousjkbousjkbous.png"
              alt="Illustrative render of the Nedbank identity on the Sandton Gate building"
              width={1195}
              height={896}
              sizes="(max-width: 860px) 100vw, 980px"
            />
            <figcaption className="br-caption">Illustrative render — Nedbank identity at Sandton Gate</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
