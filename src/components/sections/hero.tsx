import { HeroVideo } from "@/components/sections/hero-video";
import { Reveal } from "@/components/sections/reveal";
import { client } from "@/content/client";
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
          {client.preparedFor}
        </Reveal>
        <Reveal as="h1" delay={0.1}>
          {client.hero.line1}
          <br />
          <em>{client.hero.em}</em> {client.hero.line2}
        </Reveal>
        <Reveal as="p" className="hero-sub" delay={0.2}>
          {client.hero.sub}
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
