"use client";

import { useState } from "react";
import { SITE, SERVICES } from "../lib/site";
import { Reveal } from "./Reveal";

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `New appointment request%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Treatment: ${form.treatment || "Consultation"}%0A` +
      `Preferred date: ${form.date}%0A` +
      `Preferred time: ${form.time}%0A` +
      `Notes: ${form.notes || "—"}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputBase =
    "w-full rounded-xl border hairline bg-[var(--color-background)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

  return (
    <section id="booking" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border hairline shadow-luxe">
        <div className="grid lg:grid-cols-2">
          {/* Left: form */}
          <div className="bg-[var(--color-surface)] p-7 sm:p-10 lg:p-12">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Reserve Your Visit
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
                Book an{" "}
                <span className="italic text-gradient-gold">appointment</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Share your details and our team will confirm your slot on WhatsApp
                within minutes.
              </p>
            </Reveal>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Priya Sharma"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 ..."
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Treatment of Interest
                </label>
                <select
                  value={form.treatment}
                  onChange={update("treatment")}
                  className={inputBase}
                >
                  <option value="">Select a treatment</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={update("time")}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Notes (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Tell us about your skin goals..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-espresso px-6 py-4 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-espresso"
              >
                {sent ? "Opening WhatsApp..." : "Reserve My Session"}
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="text-center text-xs text-muted">
                Prefer to talk? Call{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="font-medium text-gold">
                  {SITE.phoneDisplay}
                </a>
              </p>
            </form>
          </div>

          {/* Right: map + contact */}
          <div className="relative min-h-[24rem] bg-[var(--color-background)]">
            <iframe
              title="Infinity Aesthetics — Skin, Laser & Hair Clinic location on Google Maps"
              src={SITE.mapsEmbed}
              className="h-full min-h-[20rem] w-full grayscale-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="glass-strong absolute bottom-5 left-5 right-5 rounded-2xl p-5 shadow-soft">
              <h3 className="font-serif text-xl font-medium">Visit the Clinic</h3>
              <div className="mt-3 space-y-2 text-sm text-muted">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-foreground"
                >
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {SITE.addressLine}, {SITE.city}, {SITE.state}
                </a>
                <p className="flex items-center gap-2.5">
                  <ClockIcon className="h-4 w-4 shrink-0 text-gold" />
                  {SITE.hours}
                </p>
                <p className="flex items-center gap-2.5">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                  <a href={`tel:${SITE.phoneRaw}`} className="font-medium text-foreground">
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-espresso"
              >
                <PinIcon className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type P = React.SVGProps<SVGSVGElement>;
function PinIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function PhoneIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
