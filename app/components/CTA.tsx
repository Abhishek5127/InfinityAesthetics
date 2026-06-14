"use client";

import { motion } from "framer-motion";
import { SITE } from "../lib/site";

export function CTA() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 text-center text-ivory shadow-luxe sm:px-12 sm:py-20 dark:bg-espresso-700">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
            Begin Your Journey
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-6xl">
            Your most radiant skin{" "}
            <span className="italic text-gradient-gold">starts here</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-ivory/70">
            Book a private consultation today and discover the difference expert,
            luxurious care can make.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#booking"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-espresso transition-transform hover:-translate-y-0.5"
            >
              Book Consultation
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="rounded-full border border-ivory/25 px-8 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
