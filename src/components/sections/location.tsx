import { Reveal } from "@/components/sections/reveal";
import { distances } from "@/content/proposal";

export function Location() {
  return (
    <section id="place">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Location</span>
          <h2>Central to everything that matters.</h2>
          <p>25 Minerva Avenue, Glenadrienne — between Sandton, Rosebank, Randburg, Bryanston and Hyde Park.</p>
        </Reveal>
        <div className="loc-grid">
          <Reveal className="map-card">
            <svg className="map-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g stroke="var(--line)" strokeWidth="1" fill="none">
                <path d="M40 120 H360 M40 200 H360 M40 280 H360 M120 40 V360 M200 40 V360 M280 40 V360" />
              </g>
              <path
                d="M200 200 C240 160 300 150 340 120"
                stroke="var(--gold)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6 6"
              />
              <path
                d="M200 200 C160 240 110 250 70 290"
                stroke="var(--emerald)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6 6"
              />
              <circle cx="200" cy="200" r="13" fill="var(--emerald)" />
              <circle cx="200" cy="200" r="22" fill="none" stroke="var(--emerald)" strokeWidth="1.5" opacity=".4" />
              <text x="200" y="234" fontFamily="Manrope" fontSize="11" fill="var(--ink)" textAnchor="middle" fontWeight="700">
                Sandton Gate
              </text>
              <circle cx="340" cy="120" r="5" fill="var(--gold)" />
              <text x="340" y="108" fontFamily="Manrope" fontSize="10" fill="var(--muted)" textAnchor="middle">
                Sandton CBD
              </text>
              <circle cx="70" cy="290" r="5" fill="var(--muted)" />
              <text x="70" y="312" fontFamily="Manrope" fontSize="10" fill="var(--muted)" textAnchor="middle">
                Randburg
              </text>
              <circle cx="300" cy="300" r="4" fill="var(--muted)" />
              <text x="300" y="320" fontFamily="Manrope" fontSize="10" fill="var(--muted)" textAnchor="middle">
                Hyde Park
              </text>
              <circle cx="110" cy="90" r="4" fill="var(--muted)" />
              <text x="110" y="78" fontFamily="Manrope" fontSize="10" fill="var(--muted)" textAnchor="middle">
                Bryanston
              </text>
            </svg>
          </Reveal>
          <Reveal as="ul" className="dist" delay={0.1}>
            {distances.map((d) => (
              <li key={d.place}>
                <b>{d.place}</b>
                <span className="t">
                  {d.value}
                  <small>{d.unit}</small>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
