"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { SITE } from "../lib/site";
import HeroImg from "@/app/assets/heroImg.png"

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOAT_TAGS = [
  { label: "Laser Therapy", top: "18%", left: "6%", delay: 0.2 },
  { label: "Dermatology", top: "62%", left: "2%", delay: 0.5 },
  { label: "Skin Glow", top: "30%", right: "4%", delay: 0.35 },
  { label: "Hair Restoration", top: "72%", right: "8%", delay: 0.6 },
];

export function Hero() {
  // Mouse parallax for the hero visual
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 20 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="bg-radial-luxe relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32"
    >
      {/* animated aurora field + ambient blobs */}
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-[0.22]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-pulse-glow rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 animate-pulse-glow rounded-full bg-sage/25 blur-3xl [animation-delay:2s]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left copy */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Ajmer&apos;s Premier Skin &amp; Hair Clinic
          </motion.span>

          <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {["Where Science", "Meets"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.1 + i * 0.12 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.34 }}
              className="block italic text-gradient-gold"
            >
              Timeless Beauty
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            Advanced dermatology, aesthetic and cosmetic treatments delivered with
            precision, warmth and uncompromising luxury — in the heart of Ajmer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.62 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#booking"
              className="shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-espresso px-7 py-3.5 text-sm font-medium text-ivory shadow-soft transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-espresso"
            >
              Book a Consultation
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Explore Treatments
            </a>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            {["Dermatologist-led", "LGBTQ+ Friendly", "Medical-grade Tech"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-sage-deep" />
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Right visual with mouse parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative z-10 mx-auto w-full max-w-md [transform-style:preserve-3d] lg:max-w-none"
        >
          {/* rotating accent ring */}
          <span className="pointer-events-none absolute -inset-5 rounded-[2.6rem] border border-dashed border-gold/25 animate-spin-slow" />

          <motion.div
            style={{ x: tx, y: ty }}
            className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-luxe"
          >
            <Image
              src={HeroImg}
              alt="Radiant, healthy skin after aesthetic treatment at Infinity Aesthetics Ajmer"
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />
          </motion.div>

          {/* floating glass tags */}
          {FLOAT_TAGS.map((tag) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.9 + tag.delay }}
              style={{ top: tag.top, left: tag.left, right: tag.right, transform: "translateZ(40px)" }}
              className="glass-strong absolute hidden animate-float-slow rounded-full px-4 py-2 text-xs font-medium shadow-soft sm:block"
            >
              {tag.label}
            </motion.span>
          ))}

          {/* rating card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
            className="glass-strong absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3 shadow-luxe"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-[var(--color-surface)] bg-gradient-to-br from-gold-soft to-sage"
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <span className="text-xs text-muted">12,000+ glowing clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="grid h-9 w-5 place-items-start rounded-full border hairline pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </span>
      </a>
      <span className="sr-only">{SITE.name}</span>
    </section>
  );
}

type P = React.SVGProps<SVGSVGElement>;
function ArrowIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function CheckIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}
