import { Committee } from "@/components/sections/committee";
import { Cta } from "@/components/sections/cta";
import { Diligence } from "@/components/sections/diligence";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Enquiry } from "@/components/sections/enquiry";
import { FloorSpace } from "@/components/sections/floor-space";
import { Flythrough } from "@/components/sections/flythrough";
import { Hero } from "@/components/sections/hero";
import { Investment } from "@/components/sections/investment";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { PowerResilience } from "@/components/sections/power-resilience";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Scoreboard } from "@/components/sections/scoreboard";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { StayVsMove } from "@/components/sections/stay-vs-move";
import { Team } from "@/components/sections/team";
import { Technology } from "@/components/sections/technology";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";
import { WhyClient } from "@/components/sections/why-client";

export default function Home() {
  return (
    <div className="sg">
      <SiteNav />

      {/* ACT 1 — THE INVITATION */}
      <Hero />
      <Flythrough />
      <WhyClient />

      {/* ACT 2 — THE BUILDING, BY THEME */}
      <ThePrecinct />
      <Location />
      <FloorSpace />
      <PowerResilience />
      <Technology />
      <Lifestyle />
      <Ecosystem />
      <Scoreboard />

      {/* ACT 3 — THE CASE & THE CLOSE */}
      <TrackRecord />
      <StayVsMove />
      <Diligence />
      <Committee />
      <Investment />
      <ProcessTimeline />
      <Team />
      <Cta />
      <Enquiry />
      <SiteFooter />
    </div>
  );
}
