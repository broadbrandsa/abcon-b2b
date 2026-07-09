import { AbconLogo } from "@/components/brand/abcon-logo";
import { NedbankLogo } from "@/components/brand/nedbank-logo";
import { ViewTracker } from "@/components/sections/view-tracker";

export function SiteFooter() {
  return (
    <footer className="sg-footer">
      <ViewTracker />
      <div className="wrap">
        <div className="foot">
          <div className="lockup">
            <AbconLogo />
            <span className="x">×</span>
            <NedbankLogo />
          </div>
          <div>Sandton Gate · Confidential proposal · Prepared for Nedbank</div>
        </div>
        <p className="foot-note foot-private">
          Private &amp; confidential, this is a personalised link prepared for Nedbank and may expire. Please don&apos;t forward.
        </p>
        <p className="foot-note">
          This is an illustrative, co-branded proposal prepared for discussion. Figures, availability and
          specifications are indicative and subject to confirmation. Placeholder brand marks are shown where official
          Abcon and Nedbank logo assets should be inserted. © Abcon Group.
        </p>
      </div>
    </footer>
  );
}
