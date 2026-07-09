import Image from "next/image";

import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { team } from "@/content/commercial";

const lead = team[0];
const tourMailto = `mailto:${lead.email}?subject=${encodeURIComponent(
  "Private hard-hat tour. Sandton Gate · Nedbank",
)}&body=${encodeURIComponent(
  "Hi Lerato,\n\nWe'd like to arrange a private hard-hat tour of Sandton Gate (and we'll take you up on dinner at the piazza).\n\nPreferred dates:\n\n",
)}`;

export function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">A human, not a PDF</span>
          <h2>Your team, one relationship, end to end.</h2>
          <p>
            Your leasing lead and development director, backed by the group&apos;s in-house teams: Strive for building
            management and Grit for fit-out. No hand-offs, no finger-pointing.
          </p>
        </Reveal>

        <div className="team-cards">
          {team.map((person, i) => (
            <Reveal className="team-card" key={person.email} delay={i * 0.06}>
              <div className="team-photo">
                {person.image ? (
                  <Image className="team-avatar" src={person.image} alt={person.name} width={104} height={104} loading="eager" />
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

        <Reveal className="team-invite">
          <div>
            <h3>Come see it for yourself.</h3>
            <p>A private hard-hat tour of Phase 2, then dinner at the piazza. No slides, just the building.</p>
          </div>
          <Button
            asChild
            className="h-auto shrink-0 rounded-full bg-[var(--gold)] px-7 py-4 text-[15px] font-semibold text-[var(--forest)] shadow-none transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--gold-soft)]"
          >
            <a href={tourMailto}>Book a hard-hat tour</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
