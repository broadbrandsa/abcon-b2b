import { AbconLogo } from "@/components/brand/abcon-logo";
import { NedbankLogo } from "@/components/brand/nedbank-logo";

export function SiteFooter() {
  return (
    <footer className="sg-footer">
      <div className="wrap">
        <div className="foot">
          <div className="lockup">
            <AbconLogo />
            <span className="x">×</span>
            <NedbankLogo />
          </div>
          <div>Sandton Gate · Confidential proposal · Prepared for Nedbank</div>
        </div>
        <p className="foot-note">
          This is an illustrative, co-branded proposal prepared for discussion. Figures, availability and
          specifications are indicative and subject to confirmation. Placeholder brand marks are shown where official
          Abcon and Nedbank logo assets should be inserted. © Abcon Group.
        </p>
      </div>
    </footer>
  );
}
