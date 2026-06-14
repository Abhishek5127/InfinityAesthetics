"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { DOCTOR } from "../lib/site";
import DrImage from "@/app/assets/drabhay.webp";

export function Doctor() {
  return (
    <section id="doctor" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sage/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="ring-gradient grid items-center gap-12 overflow-hidden rounded-[2.5rem] border hairline bg-[var(--color-surface)] p-6 shadow-soft sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-lg">
              {/* rotating decorative ring */}
              <span className="pointer-events-none absolute -inset-3 rounded-[2.4rem] border border-dashed border-gold/30 animate-spin-slow" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-luxe">
                <Image
                  src={DrImage}
                  alt={`${DOCTOR.name}, ${DOCTOR.title} at Infinity Aesthetics Ajmer`}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 font-serif text-sm font-semibold text-espresso">
                    {DOCTOR.name}
                  </span>
                  <span className="glass-strong rounded-full px-3 py-1.5">
                    <span className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                        </svg>
                      ))}
                    </span>
                  </span>
                </div>
              </div>

              {/* floating accent stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-strong absolute -right-2 -top-2 animate-float-slow rounded-2xl px-4 py-2.5 text-center shadow-soft sm:-right-4"
              >
                <span className="block font-serif text-2xl font-semibold text-gradient-gold">
                  12k+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted">
                  Happy Patients
                </span>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Meet Your Specialist
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
                {DOCTOR.name}
                <span className="mt-1 block text-xl italic text-muted">
                  {DOCTOR.title}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {DOCTOR.bio}
              </p>
            </Reveal>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {DOCTOR.credentials.map((c, i) => (
                <Reveal key={c} delay={0.15 + i * 0.06}>
                  <div className="group flex items-center gap-3 rounded-2xl bg-gold/8 px-4 py-3 transition-colors hover:bg-gold/15">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-gold transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m20 6-11 11-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <a
                href="#booking"
                className="shine relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-espresso px-7 py-3.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-espresso"
              >
                Consult {DOCTOR.name}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
