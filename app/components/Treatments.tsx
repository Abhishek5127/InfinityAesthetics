"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TREATMENTS } from "../lib/site";
import { Reveal } from "./Reveal";

export function Treatments() {
  return (
    <section id="treatments" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Signature Treatments
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
                Curated rituals for{" "}
                <span className="italic text-gradient-gold">visible results</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              View all treatments
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative h-[22rem] overflow-hidden rounded-[2rem] shadow-soft"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {t.tag}
                </span>
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h3 className="font-serif text-2xl font-medium">{t.name}</h3>
                  <p className="mt-1.5 max-w-sm text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {t.desc}
                  </p>
                  <a
                    href="#booking"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-soft"
                  >
                    Book this treatment
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
