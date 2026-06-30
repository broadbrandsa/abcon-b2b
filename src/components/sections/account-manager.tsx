import Image from "next/image";

import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { accountManager } from "@/content/proposal";

const mailto = `mailto:${accountManager.email}?subject=${encodeURIComponent("Sandton Gate viewing — Nedbank")}`;
const firstName = accountManager.name.split(" ")[0];

/** Portrait placeholder — swap by setting `accountManager.image` to a photo path. */
function AvatarPlaceholder() {
  return (
    <svg className="am-avatar" viewBox="0 0 128 128" role="img" aria-label={accountManager.name}>
      <defs>
        <linearGradient id="am-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0c2b21" />
          <stop offset="1" stopColor="#0a6b4d" />
        </linearGradient>
        <clipPath id="am-clip">
          <circle cx="64" cy="64" r="64" />
        </clipPath>
      </defs>
      <g clipPath="url(#am-clip)">
        <rect width="128" height="128" fill="url(#am-grad)" />
        <circle cx="64" cy="52" r="22" fill="rgba(227,207,163,0.92)" />
        <path d="M22 122 a42 36 0 0 1 84 0 Z" fill="rgba(227,207,163,0.92)" />
      </g>
    </svg>
  );
}

export function AccountManager() {
  const am = accountManager;
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="am-card">
          <div className="am-photo">
            {am.image ? (
              <Image className="am-avatar" src={am.image} alt={am.name} width={128} height={128} loading="eager" />
            ) : (
              <AvatarPlaceholder />
            )}
          </div>
          <div className="am-body">
            <span className="am-eyebrow">Your account manager</span>
            <h3 className="am-name">{am.name}</h3>
            <div className="am-role">
              {am.role} · {am.company}
            </div>
            <p className="am-note">{am.note}</p>
            <div className="am-contact">
              <a href={`tel:${am.mobile.replace(/\s/g, "")}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 18l5 2v3a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1Z" />
                </svg>
                {am.mobile}
              </a>
              <a href={`tel:${am.phone.replace(/\s/g, "")}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h5l1 4-2 1a9 9 0 0 0 5 5l1-2 4 1v4H17A13 13 0 0 1 4 9Z" />
                </svg>
                {am.phone}
              </a>
              <a href={mailto}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {am.email}
              </a>
            </div>
            <Button
              asChild
              className="h-auto rounded-full bg-[var(--emerald)] px-7 py-3.5 text-sm font-semibold text-white shadow-none transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--emerald-bright)]"
            >
              <a href={mailto}>Book a viewing with {firstName}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
