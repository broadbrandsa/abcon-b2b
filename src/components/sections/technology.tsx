import { Reveal } from "@/components/sections/reveal";
import { connectivity, securityPoints } from "@/content/themes";

export function Technology() {
  return (
    <section id="technology">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Technology &amp; connectivity</span>
          <h2>Bank-grade connectivity and security.</h2>
          <p>
            A bank&apos;s two hardest questions — will it stay connected, and is it secure — answered by design.
            Redundant infrastructure and financial-sector-grade control, backed by the group&apos;s security-technology
            pedigree.
          </p>
        </Reveal>

        <div className="tech-grid">
          <Reveal className="tech-card">
            <span className="tech-ico">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v18M4 8c5-3 11-3 16 0M5 13c4-2 10-2 14 0M7 18c3-1.5 7-1.5 10 0" fill="none" />
              </svg>
            </span>
            <h3>Connectivity</h3>
            <ul>
              {connectivity.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="tech-card" delay={0.06}>
            <span className="tech-ico">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6zM9 12l2 2 4-4" fill="none" />
              </svg>
            </span>
            <h3>Security</h3>
            <ul>
              {securityPoints.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal as="p" className="sg-disclaimer">
          Indicative provisioning; final specification confirmed to Nedbank&apos;s control requirements.
        </Reveal>
      </div>
    </section>
  );
}
