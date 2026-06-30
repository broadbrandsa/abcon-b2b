import { CountUp } from "@/components/sections/count-up";
import { Reveal } from "@/components/sections/reveal";
import { proofItems, proofStats } from "@/content/proposal";

export function TrackRecord() {
  return (
    <section id="proof">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Track Record</span>
          <h2>We&apos;ve done this for South Africa&apos;s biggest names.</h2>
          <p>Four decades of delivering landmark commercial space at enterprise scale.</p>
        </Reveal>
        <div className="proof-grid">
          {proofItems.map((item, i) => (
            <Reveal className="p" key={item.name} delay={(i % 3) * 0.05}>
              <b>{item.name}</b>
              <span>{item.body}</span>
            </Reveal>
          ))}
        </div>
        <div className="proof-stats">
          {proofStats.map((stat, i) => (
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
  );
}
