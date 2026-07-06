import { Availability } from "@/components/sections/availability";
import { BrandReveal } from "@/components/sections/brand-reveal";
import { Concierge } from "@/components/sections/concierge";
import { Cta } from "@/components/sections/cta";
import { DayInLife } from "@/components/sections/day-in-life";
import { DecisionFit } from "@/components/sections/decision-fit";
import { Diligence } from "@/components/sections/diligence";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Enquiry } from "@/components/sections/enquiry";
import { FloorPlates } from "@/components/sections/floor-plates";
import { Hero } from "@/components/sections/hero";
import { Investment } from "@/components/sections/investment";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { OfficeGallery } from "@/components/sections/office-gallery";
import { Performance } from "@/components/sections/performance";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Scoreboard } from "@/components/sections/scoreboard";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { StayVsMove } from "@/components/sections/stay-vs-move";
import { Team } from "@/components/sections/team";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";
import { WhyClient } from "@/components/sections/why-client";

export default function Home() {
  return (
    <div className="sg">
      <SiteNav />
      <Hero />
      <BrandReveal />
      <WhyClient />
      <Ecosystem />
      <ThePrecinct />
      <Performance />
      <Scoreboard />
      <DecisionFit />
      <Lifestyle />
      <DayInLife />
      <OfficeGallery />
      <FloorPlates />
      <Location />
      <StayVsMove />
      <Concierge />
      <Diligence />
      <TrackRecord />
      <Investment />
      <ProcessTimeline />
      <Availability />
      <Team />
      <Cta />
      <Enquiry />
      <SiteFooter />
    </div>
  );
}
