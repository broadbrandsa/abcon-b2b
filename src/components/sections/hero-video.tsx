"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video. Autoplays muted + looping when allowed, pauses when
 * scrolled off-screen (saves data/energy) and stays off entirely when the user
 * prefers reduced motion, in which case the section's gradient backdrop shows.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const tryPlay = () => video.play().catch(() => {});
    tryPlay();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/14249203_1280_720_30fps.mp4" type="video/mp4" />
    </video>
  );
}
