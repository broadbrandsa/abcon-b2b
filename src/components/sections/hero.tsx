import { HeroVideo } from "@/components/sections/hero-video";
import { Reveal } from "@/components/sections/reveal";
import { heroMeta } from "@/content/proposal";

export function Hero() {
  return (
    <header className="sg-hero">
      <HeroVideo />
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-grain" />

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
