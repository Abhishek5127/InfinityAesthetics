"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../lib/site";
import { Reveal } from "./Reveal";

// duplicate for seamless marquee
const ROW = [...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-28">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Client Stories
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Loved by those who{" "}
              <span className="italic text-gradient-gold">glow</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-14">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {ROW.map((t, i) => (
            <motion.figure
              key={i}
              className="w-[340px] shrink-0 rounded-3xl border hairline bg-[var(--color-surface)] p-7 shadow-soft"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-sage font-serif text-lg font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
