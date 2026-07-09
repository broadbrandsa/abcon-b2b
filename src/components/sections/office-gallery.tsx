"use client";

import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/sections/reveal";
import { officeGallery } from "@/content/ecosystem";
import { cn } from "@/lib/utils";

/** The interior image carousel widget (no section wrapper, embed anywhere). */
export function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const count = officeGallery.length;
  const go = (next: number) => setIndex((next + count) % count);

  return (
    <Reveal className="gal">
      <div className="gal-viewport">
        <div className="gal-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {officeGallery.map((item, i) => (
            <figure className="gal-slide" key={item.src} aria-hidden={i !== index}>
              <div className="gal-frame">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 860px) 100vw, 1100px"
                  className="gal-img"
                  priority={i === 0}
                />
              </div>
              <figcaption className="gal-cap">
                <span className="gal-cap-num">
                  {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <button type="button" className="gal-arrow prev" onClick={() => go(index - 1)} aria-label="Previous image">
          ‹
        </button>
        <button type="button" className="gal-arrow next" onClick={() => go(index + 1)} aria-label="Next image">
          ›
        </button>
      </div>
      <div className="gal-dots" aria-label="Gallery navigation">
        {officeGallery.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={cn("gal-dot", i === index && "on")}
            aria-label={`Go to ${item.caption}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
