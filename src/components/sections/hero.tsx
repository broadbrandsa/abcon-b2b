import { Reveal } from "@/components/sections/reveal";
import { heroMeta } from "@/content/proposal";

export function Hero() {
  return (
    <header className="sg-hero">
      <div className="hero-grid" />
      <svg
        className="skyline"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="rgba(255,255,255,0.05)">
          <rect x="60" y="180" width="90" height="220" />
          <rect x="170" y="120" width="70" height="280" />
          <rect x="260" y="220" width="110" height="180" />
          <rect x="390" y="90" width="80" height="310" />
          <rect x="490" y="160" width="64" height="240" />
          <rect x="980" y="150" width="90" height="250" />
          <rect x="1090" y="100" width="70" height="300" />
          <rect x="1180" y="200" width="120" height="200" />
          <rect x="1320" y="140" width="80" height="260" />
        </g>
        <g fill="rgba(20,133,95,0.18)">
          <rect x="600" y="60" width="110" height="340" />
          <rect x="730" y="30" width="130" height="370" />
          <rect x="880" y="110" width="80" height="290" />
        </g>
      </svg>

      <div className="wrap hero-inner">
        <Reveal className="prepared">
          <span className="pulse" />
          Private proposal · Prepared exclusively for Nedbank
        </Reveal>
        <Reveal as="h1" delay={0.1}>
          A headquarters
          <br />
          that works <em>smarter.</em>
        </Reveal>
        <Reveal as="p" className="hero-sub" delay={0.2}>
          An invitation for Nedbank to anchor Sandton Gate. Every other landlord hands you keys — Abcon hands you a
          group of 15+ companies that develops, builds, powers, secures, manages, houses and co-invests in your
          building. One partner. The whole value chain.
        </Reveal>
        <Reveal className="hero-meta" delay={0.3}>
          {heroMeta.map((item) => (
            <div className="m" key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
      <div className="scroll-hint">Scroll to explore</div>
    </header>
  );
}
