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
          <Reveal className="dist-col" delay={0.1}>
            <ul className="dist">
              {distances.map((d) => (
                <li key={d.place}>
                  <b>{d.place}</b>
                  <span className="t">
                    {d.value}
                    <small>{d.unit}</small>
                  </span>
                </li>
              ))}
            </ul>
            <a className="maps-link" href="https://maps.app.goo.gl/5FPsaxL37jbLatKH6" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              View on Google Maps
            </a>
          </Reveal>
        </div>

        <Reveal className="streetview">
          <span className="streetview-label">Street view · Sandton Gate</span>
          <iframe
            title="Google Street View of Sandton Gate"
            src="https://www.google.com/maps/embed?pb=!4v1782818922449!6m8!1m7!1spfJkSRVO-J_nU3BTryoNYw!2m2!1d-26.09551037483215!2d28.02987077905036!3f45.21044610030914!4f12.082617020764417!5f0.7820865974627469"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>
      </div>
    </section>
  );
}
