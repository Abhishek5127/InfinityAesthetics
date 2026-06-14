"use client";

import { motion } from "framer-motion";
import { SERVICES } from "../lib/site";
import { ServiceIcon } from "./icons";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              What We Offer
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Where care meets{" "}
              <span className="italic text-gradient-gold">innovation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A complete spectrum of dermatology and aesthetic services, each delivered
              with precision and a signature touch of luxury.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              variants={staggerItem}
              className="ring-gradient shine group relative overflow-hidden rounded-3xl border hairline bg-[var(--color-surface)] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gold/12 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-white">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl font-medium">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
