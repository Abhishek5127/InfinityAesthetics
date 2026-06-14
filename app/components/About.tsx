"use client";

import { useEffect, useRef } from "react";
import DoctorImg from "@/app/assets/doctorImg.png"
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    title: "Personalised Care",
    desc: "Every treatment is tailored to your unique skin, concerns and lifestyle.",
  },
  {
    title: "Science & Expertise",
    desc: "Medical-grade technology guided by qualified, experienced specialists.",
  },
  {
    title: "Inclusive Luxury",
    desc: "A discreet, LGBTQ+ friendly sanctuary built on trust and respect.",
  },
];

export function About() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const inner = el.querySelector("[data-parallax]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div
            ref={imgRef}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe sm:aspect-square"
          >
            <div data-parallax className="absolute inset-0">
              <Image
                src={DoctorImg}
                alt="Serene luxury treatment room at Infinity Aesthetics Ajmer"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="glass-strong absolute bottom-5 left-5 right-5 rounded-2xl px-5 py-4">
              <p className="font-serif text-lg italic">
                &ldquo;Beauty is confidence, expertly cared for.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The Infinity Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Embrace your inner glow and{" "}
              <span className="italic text-gradient-gold">rediscover</span> your skin
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              At Infinity Aesthetics Ajmer, we believe true beauty begins with healthy
              skin. Each treatment is thoughtfully designed to restore, refine and
              reveal your most radiant self — with care that feels as luxurious as it
              is effective.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.08}>
                <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <span className="font-serif text-lg font-semibold">{i + 1}</span>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
