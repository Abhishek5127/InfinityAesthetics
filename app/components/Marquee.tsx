"use client";

const ITEMS = [
  "Skin Care",
  "Dermatology",
  "Laser Therapy",
  "Anti-Ageing",
  "Hair Restoration",
  "Pigmentation",
  "Acne Treatment",
  "Aesthetic Medicine",
  "LGBTQ+ Friendly",
  "Medical-grade Tech",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Specialities"
      className="relative overflow-hidden border-y hairline bg-espresso py-5 text-ivory"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-espresso to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-espresso to-transparent sm:w-40" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif text-xl italic tracking-wide text-ivory/90">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
