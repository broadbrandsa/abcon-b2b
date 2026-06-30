import Image from "next/image";

import { Reveal } from "@/components/sections/reveal";
import { team } from "@/content/commercial";

export function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your dedicated team</span>
          <h2>One relationship. One point of contact.</h2>
          <p>
            A single, accountable point of contact — backed by the group&apos;s in-house teams: Strive for building
            management and Grit for fit-out. No hand-offs, no finger-pointing.
          </p>
        </Reveal>

        <div className="team-grid">
          {team.map((person, i) => (
            <Reveal className="team-card" key={person.email} delay={i * 0.06}>
              <div className="team-photo">
                {person.image ? (
                  <Image
                    className="team-avatar"
                    src={person.image}
                    alt={person.name}
                    width={104}
                    height={104}
                    loading="eager"
                  />
                ) : (
                  <span className="team-initials" aria-hidden="true">
                    {person.initials}
                  </span>
                )}
              </div>
              <div className="team-body">
                <div className="team-name">{person.name}</div>
                <div className="team-role">{person.role}</div>
                <div className="team-company">{person.company}</div>
                <div className="team-links">
                  <a href={`tel:${person.phone.replace(/\s/g, "")}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 18l5 2v3a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1Z" />
                    </svg>
                    {person.phone}
                  </a>
                  <a href={`mailto:${person.email}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    {person.email}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
