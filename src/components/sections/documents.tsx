"use client";

import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dealDocs } from "@/content/deal";

export function Documents() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = dealDocs.find((d) => d.id === openId) ?? null;

  return (
    <section id="documents">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Documents &amp; resources</span>
          <h2>The deal room: open, right on the page.</h2>
          <p>No downloads to lose. Everything opens here in the browser; email yourself a copy when you&apos;re ready.</p>
        </Reveal>

        <Reveal className="doc-row">
          {dealDocs.map((d) => (
            <button key={d.id} type="button" className="doc-btn" onClick={() => setOpenId(d.id)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h9l5 5v13H6zM15 3v5h5M9 13h6M9 17h6" />
              </svg>
              View {d.label}
            </button>
          ))}
          <a className="doc-btn doc-email" href="#enquire">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Email these to me
          </a>
        </Reveal>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="deal-dialog">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="deal-doc-title">{active.title}</DialogTitle>
                <DialogDescription>{active.blurb}</DialogDescription>
              </DialogHeader>
              <div className="deal-doc-body">
                {active.sections.map((s) => (
                  <div className="deal-doc-sec" key={s.h}>
                    <h4>{s.h}</h4>
                    <ul>
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="deal-doc-note">Indicative, subject to confirmation. Email a copy via the enquiry form.</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
