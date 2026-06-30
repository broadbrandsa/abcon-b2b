import { Competitive } from "@/components/sections/competitive";
import { Cta } from "@/components/sections/cta";
import { DecisionFit } from "@/components/sections/decision-fit";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Enquiry } from "@/components/sections/enquiry";
import { FloorPlates } from "@/components/sections/floor-plates";
import { Hero } from "@/components/sections/hero";
import { Investment } from "@/components/sections/investment";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { OfficeGallery } from "@/components/sections/office-gallery";
import { Partnership } from "@/components/sections/partnership";
import { Performance } from "@/components/sections/performance";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Team } from "@/components/sections/team";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";

export default function Home() {
  return (
    <div className="sg">
      <SiteNav />
      <Hero />
      <Ecosystem />
      <Partnership />
      <ThePrecinct />
      <Performance />
      <DecisionFit />
      <Lifestyle />
      <OfficeGallery />
      <FloorPlates />
      <Location />
      <Competitive />
      <TrackRecord />
      <Investment />
      <ProcessTimeline />
      <Team />
      <Cta />
      <Enquiry />
      <SiteFooter />
    </div>
  );
}
