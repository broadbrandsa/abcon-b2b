import { AtAGlance } from "@/components/sections/at-a-glance";
import { BrandPiazza } from "@/components/sections/brand-piazza";
import { CaseStudy } from "@/components/sections/case-study";
import { ClientEvent } from "@/components/sections/client-event";
import { Committee } from "@/components/sections/committee";
import { Cta } from "@/components/sections/cta";
import { Diligence } from "@/components/sections/diligence";
import { Documents } from "@/components/sections/documents";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Enquiry } from "@/components/sections/enquiry";
import { FloorSpace } from "@/components/sections/floor-space";
import { Flythrough } from "@/components/sections/flythrough";
import { Hero } from "@/components/sections/hero";
import { Investment } from "@/components/sections/investment";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { Masterplan } from "@/components/sections/masterplan";
import { PowerResilience } from "@/components/sections/power-resilience";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Scoreboard } from "@/components/sections/scoreboard";
import { SectionRail } from "@/components/sections/section-rail";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteSwitch } from "@/components/sections/site-switch";
import { StayVsMove } from "@/components/sections/stay-vs-move";
import { Team } from "@/components/sections/team";
import { Technology } from "@/components/sections/technology";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";
import { WaysIn } from "@/components/sections/ways-in";
import { WhyClient } from "@/components/sections/why-client";
import { WorkplaceStrategy } from "@/components/sections/workplace-strategy";

export default function Home() {
  return (
    <div className="sg has-switch">
      <SiteSwitch />
      <SiteNav />
      <SectionRail />

      {/* ACT 1 — THE INVITATION */}
      <Hero />
      <Flythrough />
      <AtAGlance />
      <WhyClient />

      {/* ACT 2 — THE BUILDING, BY THEME */}
      <ThePrecinct />
      <Location />
      <FloorSpace />
      <WorkplaceStrategy />
      <PowerResilience />
      <Technology />
      <Lifestyle />
      <Ecosystem />
      <Scoreboard />
      <ClientEvent />
      <BrandPiazza />
      <Masterplan />

      {/* ACT 3 — THE CASE & THE CLOSE */}
      <CaseStudy />
      <StayVsMove />
      <WaysIn />
      <Investment />
      <Diligence />
      <Committee />
      <ProcessTimeline />
      <Documents />
      <TrackRecord />
      <Team />
      <Cta />
      <Enquiry />
      <SiteFooter />
    </div>
  );
}
