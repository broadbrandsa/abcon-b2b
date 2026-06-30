import { AccountManager } from "@/components/sections/account-manager";
import { Cta } from "@/components/sections/cta";
import { DecisionFit } from "@/components/sections/decision-fit";
import { Hero } from "@/components/sections/hero";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Location } from "@/components/sections/location";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { ThePrecinct } from "@/components/sections/the-precinct";
import { TrackRecord } from "@/components/sections/track-record";
import { WhyAbcon } from "@/components/sections/why-abcon";
import { YourSpace } from "@/components/sections/your-space";

export default function Home() {
  return (
    <div className="sg">
      <SiteNav />
      <Hero />
      <WhyAbcon />
      <ThePrecinct />
      <DecisionFit />
      <YourSpace />
      <Lifestyle />
      <Location />
      <TrackRecord />
      <Cta />
      <AccountManager />
      <SiteFooter />
    </div>
  );
}
