"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { accountManager } from "@/content/proposal";

const interests = [
  "Full HQ — Phase 2 towers",
  "Building A — entire building",
  "Multiple full floors",
  "Flexi Suite / satellite team",
  "Just exploring options",
];

export function Enquiry() {
  const am = accountManager;
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Interested in: ${data.get("interest") || ""}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");
    const mailto = `mailto:${am.email}?subject=${encodeURIComponent(
      "Sandton Gate enquiry — Nedbank",
    )}&body=${encodeURIComponent(body)}`;
    // Open the user's mail client with the enquiry pre-filled.
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="enquire">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Register your interest</span>
          <h2>Start the conversation.</h2>
          <p>
            Send us a few details and the Abcon Developments team will be in touch to arrange a private viewing and a
            tailored proposal for Nedbank.
          </p>
        </Reveal>

        <div className="enq-grid">
          <Reveal className="enq-form-card">
            {submitted ? (
              <div className="enq-success" role="status">
                <span className="enq-success-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3>Thank you.</h3>
                <p>
                  Your enquiry is on its way to {am.name.split(" ")[0]}. We&apos;ll be in touch shortly to arrange your
                  viewing.
                </p>
              </div>
            ) : (
              <form className="enq-form" onSubmit={onSubmit}>
                <div className="enq-row">
                  <label className="enq-field">
                    <span>Full name</span>
                    <input name="name" type="text" required autoComplete="name" placeholder="Olivia Rhye" />
                  </label>
                  <label className="enq-field">
                    <span>Company</span>
                    <input name="company" type="text" defaultValue="Nedbank" autoComplete="organization" />
                  </label>
                </div>
                <div className="enq-row">
                  <label className="enq-field">
                    <span>Work email</span>
                    <input name="email" type="email" required autoComplete="email" placeholder="olivia@nedbank.co.za" />
                  </label>
                  <label className="enq-field">
                    <span>Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" placeholder="082 000 0000" />
                  </label>
                </div>
                <label className="enq-field">
                  <span>What are you interested in?</span>
                  <select name="interest" defaultValue={interests[0]}>
                    {interests.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="enq-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your team size, timing and what matters most…"
                  />
                </label>
                <Button
                  type="submit"
                  className="h-auto w-full rounded-full bg-[var(--emerald)] px-7 py-4 text-[15px] font-semibold text-white shadow-none transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--emerald-bright)]"
                >
                  Send enquiry
                </Button>
                <p className="enq-fineprint">
                  We&apos;ll only use your details to respond to this enquiry. Prefer to call? {am.mobile}.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal className="enq-contact" delay={0.1}>
            <div className="enq-contact-label">Your account manager</div>
            <div className="enq-contact-person">
              <div className="enq-photo">
                {am.image ? (
                  <Image
                    className="am-avatar"
                    src={am.image}
                    alt={am.name}
                    width={96}
                    height={96}
                    loading="eager"
                  />
                ) : null}
              </div>
              <div>
                <div className="enq-name">{am.name}</div>
                <div className="enq-role">
                  {am.role} · {am.company}
                </div>
              </div>
            </div>
            <p className="enq-note">{am.note}</p>
            <div className="enq-links">
              <a href={`tel:${am.mobile.replace(/\s/g, "")}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 18l5 2v3a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1Z" />
                </svg>
                {am.mobile}
              </a>
              <a href={`mailto:${am.email}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {am.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
