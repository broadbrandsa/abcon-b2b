import { Booking } from "@/components/sections/booking";
import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { meta } from "@/content/proposal";

const pill = "h-auto rounded-full px-8 py-4 text-[15px] font-semibold transition duration-200";

export function Cta() {
  return (
    <section id="cta">
      <div className="wrap">
        <Reveal className="cta-box">
          <span className="eyebrow" style={{ justifyContent: "center", color: "var(--gold-soft)" }}>
            Next steps
          </span>
          <h2 style={{ marginTop: 18 }}>
            Let&apos;s walk the <em>space</em> together, Nedbank.
          </h2>
          <p>
            Book a private viewing of Sandton Gate with the Abcon Developments team. We&apos;ll tailor a fit-out and
            commercial proposal to Nedbank&apos;s exact requirement.
          </p>
          <div className="btns">
            <Booking
              triggerClassName={`${pill} bg-[var(--gold)] text-[var(--forest)] shadow-none hover:-translate-y-0.5 hover:bg-[var(--gold-soft)]`}
            />
            <Button
              asChild
              variant="outline"
              className={`${pill} border-white/30 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white`}
            >
              <a href="#documents">Open the deal room</a>
            </Button>
          </div>
          <p className="cta-oneline">One group. One relationship. One number to call.</p>
          <div className="contact">
            <div>
              <b>{meta.developer}</b>
              {meta.address}
            </div>
            <div>
              <b>Leasing</b>
              {meta.leasing}
            </div>
            <div>
              <b>Web</b>
              {meta.web}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
