"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import Image1 from "@/app/assets/Before&After/image1.jpg";
import Image2 from "@/app/assets/Before&After/image2.jpg";

type StaticImg = { src: string; width: number; height: number };

const CASES: { title: string; concern: string; img: StaticImg }[] = [
  {
    title: "Acne & Pigmentation",
    concern: "Active breakouts & marks → clear, even-toned skin",
    img: Image1 as StaticImg,
  },
  {
    title: "Acne Scars & Texture",
    concern: "Inflamed, uneven texture → smooth, refined complexion",
    img: Image2 as StaticImg,
  },
];

/**
 * Each source is a side-by-side composite: BEFORE on the left half,
 * AFTER on the right half. We render both halves as aligned full-frame
 * layers (via background-position) and reveal the "before" over the
 * "after" with a draggable clip.
 */
function RevealSlider({ img, concern }: { img: StaticImg; concern: string }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  // Both sliders share one aspect ratio for an even layout. Each half is
  // shown "cover" (background-size 200% auto + vertical centering) so faces
  // are cropped, never stretched — preserving full image quality.
  const layerBase: React.CSSProperties = {
    backgroundImage: `url(${img.src})`,
    backgroundSize: "200% auto",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      ref={frameRef}
      className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-[1.75rem] shadow-luxe"
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* After = right half */}
      <div className="absolute inset-0" style={{ ...layerBase, backgroundPosition: "100% 50%" }} />
      <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-espresso">
        After
      </span>

      {/* Before = left half (clipped by the slider) */}
      <div
        className="absolute inset-0"
        style={{ ...layerBase, backgroundPosition: "0% 50%", clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-xs font-semibold text-white">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]"
        style={{ left: `${pos}%` }}
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-espresso shadow-luxe"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </motion.span>
      </div>

      {/* caption */}
      <div className="absolute inset-x-3 bottom-3 z-10 flex justify-center">
        <span className="glass-strong rounded-full px-3.5 py-1.5 text-center text-[11px] font-medium sm:text-xs">
          {concern}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after"
        className="absolute inset-x-0 bottom-2 z-30 mx-auto w-2/3 cursor-pointer appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="results" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-[0.16]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Real Transformations
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Proof in every{" "}
              <span className="italic text-gradient-gold">transformation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Real results from real patients. Drag each slider to reveal the
              difference expert care can make.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <figure className="rounded-[2rem] border hairline bg-[var(--color-surface)] p-4 shadow-soft sm:p-5">
                <RevealSlider img={c.img} concern={c.concern} />
                <figcaption className="mt-4 flex items-center justify-between gap-3 px-1">
                  <span className="font-serif text-xl font-medium">{c.title}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/12 px-3 py-1 text-xs font-medium text-sage-deep">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                    Verified result
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-muted">
            * Actual patient results at Infinity Aesthetics Ajmer. Individual outcomes
            vary based on skin type and treatment plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
