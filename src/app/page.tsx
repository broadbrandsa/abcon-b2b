import { AccountManager } from "@/components/sections/account-manager";
import { Cta } from "@/components/sections/cta";
import { DecisionFit } from "@/components/sections/decision-fit";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Hero } from "@/components/sections/hero";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { OfficeGallery } from "@/components/sections/office-gallery";
import { Partnership } from "@/components/sections/partnership";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";
import { YourSpace } from "@/components/sections/your-space";

export default function Home() {
  return (
    <div className="sg">
      <SiteNav />
      <Hero />
      <Ecosystem />
      <Partnership />
      <ThePrecinct />
      <DecisionFit />
      <YourSpace />
      <Lifestyle />
      <OfficeGallery />
      <Location />
      <TrackRecord />
      <Cta />
      <AccountManager />
      <SiteFooter />
    </div>
  );
}
