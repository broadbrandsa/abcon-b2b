import { Reveal } from "@/components/sections/reveal";
import { commute, endOfTrip } from "@/content/deal";
import { distances, parkingAccess, transport } from "@/content/themes";

export function Location() {
  return (
    <section id="place">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Location &amp; access</span>
          <h2>Central to everything — and five minutes from you.</h2>
          <p>25 Minerva Avenue, Glenadrienne — between Sandton, Rosebank, Randburg, Bryanston and Hyde Park.</p>
        </Reveal>
        <div className="loc-grid">
          <Reveal className="map-card">
            <iframe
              title="Google Map of Sandton Gate"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28096.34625406362!2d28.030709398420672!3d-26.08722727660262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573e9cb75ae4b%3A0x35ab2a80dc732604!2sSandton%20Gate!5e0!3m2!1sen!2sza!4v1783328400925!5m2!1sen!2sza"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
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

        <div className="loc-lists">
          <Reveal className="loc-card">
            <h3>Getting here</h3>
            <ul>
              {transport.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="loc-card" delay={0.05}>
            <h3>Parking &amp; access</h3>
            <ul>
              {parkingAccess.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="loc-lists">
          <Reveal className="loc-card commute-card">
            <h3>Staff commute &amp; catchment</h3>
            <ul className="commute-list">
              {commute.map((c) => (
                <li key={c.band}>
                  <div className="commute-top">
                    <span className="commute-band">{c.band}</span>
                    <span className="commute-share">{c.share}%</span>
                  </div>
                  <div className="commute-bar">
                    <span style={{ width: `${c.share}%` }} />
                  </div>
                  <span className="commute-label">{c.label}</span>
                </li>
              ))}
            </ul>
            <p className="sg-disclaimer">Illustrative catchment — modelled on typical Sandton staff distribution.</p>
          </Reveal>
          <Reveal className="loc-card" delay={0.05}>
            <h3>Getting to your desk</h3>
            <ul>
              {endOfTrip.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
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
