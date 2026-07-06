import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { AbconLogo } from "@/components/brand/abcon-logo";
import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { abconOverview, abconStats, companyCategories } from "@/content/group-companies";

export const metadata: Metadata = {
  title: "About the Abcon Group · Sandton Gate Proposal",
  description:
    "Who Abcon is and an overview of the companies within the Abcon Group — property development, management, energy, funds, private equity and social impact.",
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return (
    <div className="sg about">
      {/* Lightweight header */}
      <header className="about-bar">
        <Link href="/" className="about-home" aria-label="Abcon Group — back to proposal">
          <AbconLogo priority />
        </Link>
        <Link href="/" className="about-back">
          ← Back to the proposal
        </Link>
      </header>

      {/* Who is Abcon */}
      <section id="about-intro" className="about-hero">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">{abconOverview.eyebrow}</span>
            <h1 className="about-title">{abconOverview.title}</h1>
            <p>{abconOverview.lead}</p>
          </Reveal>

          <div className="about-body">
            {abconOverview.body.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 0.05}>
                {para}
              </Reveal>
            ))}
          </div>

          <Reveal className="about-lead" delay={0.1}>
            {abconOverview.leadership.map((p) => (
              <div className="about-person" key={p.name}>
                <b>{p.name}</b>
                <span>{p.role}</span>
              </div>
            ))}
          </Reveal>

          <div className="proof-stats about-stats">
            {abconStats.map((stat, i) => (
              <Reveal className="s" key={stat.label} delay={i * 0.05}>
                <b>
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </b>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group companies, by category */}
      <section id="companies" className="about-companies">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">The Group companies</span>
            <h2>One group. Many specialists.</h2>
            <p>
              Each company leads in its own field, yet works as part of a single, accountable group — so a tenant like
              Nedbank taps the whole value chain through one relationship.
            </p>
          </Reveal>

          {companyCategories.map((cat) => (
            <div className="cat-block" key={cat.id}>
              <Reveal className="cat-head">
                <h3>{cat.title}</h3>
                <p>{cat.intro}</p>
              </Reveal>
              <div className="gc-grid">
                {cat.companies.map((c, i) => (
                  <Reveal className="gc-card" key={c.slug} delay={(i % 3) * 0.05}>
                    <span className="gc-logo">
                      <Image src={c.logo} alt={`${c.name} logo`} width={220} height={70} />
                    </span>
                    <div className="gc-tag">{c.tag}</div>
                    <h4>{c.name}</h4>
                    <p>{c.blurb}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <div className="wrap">
          <div className="lockup">
            <AbconLogo />
          </div>
          <p>
            © Abcon Group. Company overviews are illustrative and drawn from public sources. Logos shown are placeholders
            pending official brand assets.{" "}
            <Link href="/" className="about-back">
              Return to the Sandton Gate proposal →
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
