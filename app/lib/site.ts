export const SITE = {
  name: "Infinity Aesthetics Ajmer",
  shortName: "Infinity Aesthetics",
  tagline: "Skin & Hair Clinic",
  domain: "infinityaestheticsajmer.in",
  url: "https://infinityaestheticsajmer.in",
  phoneDisplay: "+91 94609 91160",
  phoneRaw: "+919460991160",
  whatsapp: "919460991160",
  email: "care@infinityaestheticsajmer.in",
  addressLine: "Ajmer Tower, Kutchery Road",
  city: "Ajmer",
  state: "Rajasthan",
  country: "India",
  postalCode: "305001",
  geo: { lat: 26.4600471, lng: 74.636717 },
  hours: "Mon–Sun · 10:00 AM – 8:00 PM",
  mapsUrl:
    "https://www.google.com/maps/place/Infinity+Aesthetics-+Skin,+Laser+%26+Hair+Clinic/@26.4600471,74.636717,16z/data=!3m1!4b1!4m6!3m5!1s0x396be7ef361925eb:0x75ad62f4bc2645de!8m2!3d26.4600471!4d74.636717!16s%2Fg%2F11sx53ztcw?entry=ttu",
  mapsEmbed:
    "https://maps.google.com/maps?q=26.4600471,74.636717+(Infinity+Aesthetics-+Skin,+Laser+%26+Hair+Clinic)&z=16&output=embed",
} as const;

export const DOCTOR = {
  name: "Dr. Abhay",
  title: "Consultant Dermatologist & Aesthetic Physician",
  bio: "With years of dedicated practice in dermatology, trichology and aesthetic medicine, Dr. Abhay blends scientific precision with an artist's eye — ensuring every result looks natural, refined and unmistakably you. Care here is personal, ethical and always judgement-free.",
  credentials: [
    "Advanced Aesthetic Dermatology",
    "Laser, Skin & Hair Specialist",
    "Injectable & Anti-Ageing Expert",
    "Trusted by 12,000+ patients",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;

export const STATS = [
  { value: 12000, suffix: "+", label: "Patients Treated" },
  { value: 14, suffix: "+", label: "Years of Expertise" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 40, suffix: "+", label: "Advanced Treatments" },
] as const;

export const SERVICES = [
  {
    title: "Advanced Dermatology",
    desc: "Medical-grade diagnosis and treatment for acne, pigmentation, eczema and complex skin conditions.",
    icon: "derma",
  },
  {
    title: "Laser & Light Therapy",
    desc: "Precision laser hair reduction, resurfacing and pigment correction with cutting-edge technology.",
    icon: "laser",
  },
  {
    title: "Anti-Ageing & Fillers",
    desc: "Botulinum, dermal fillers and bio-remodelling for naturally refreshed, lifted features.",
    icon: "syringe",
  },
  {
    title: "Skin Glow & Facials",
    desc: "Medi-facials, hydra-treatments and peels engineered for luminous, healthy radiance.",
    icon: "glow",
  },
  {
    title: "Hair Restoration",
    desc: "PRP, GFC and clinically-led protocols to restore density, strength and confidence.",
    icon: "hair",
  },
  {
    title: "Body Contouring",
    desc: "Non-invasive sculpting and skin tightening tailored to your goals and comfort.",
    icon: "body",
  },
] as const;

export const TREATMENTS = [
  {
    name: "Signature HydraGlow Facial",
    tag: "Most Loved",
    desc: "Deep cleanse, exfoliation and hydration infusion for an instant lit-from-within glow.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Laser Skin Resurfacing",
    tag: "Advanced",
    desc: "Smooths texture, refines pores and reduces scarring with controlled fractional laser.",
    image:
      "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pigmentation Correction",
    tag: "Dermatologist-led",
    desc: "Targeted protocols for melasma, tanning and uneven tone for a balanced complexion.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Anti-Ageing Refresh",
    tag: "Premium",
    desc: "Subtle, natural enhancement with fillers and bio-stimulators by expert hands.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Pigmentation Treatment",
    quote:
      "After years of trying everything, my skin finally feels even and healthy. The care here is genuinely world-class.",
    rating: 5,
  },
  {
    name: "Aman Verma",
    role: "Laser Hair Reduction",
    quote:
      "Spotless clinic, warm staff and visible results. It feels like a luxury experience from the moment you walk in.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "HydraGlow Facial",
    quote:
      "My wedding glow came entirely from Infinity Aesthetics. I have never received so many compliments on my skin.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Hair Restoration",
    quote:
      "Professional, discreet and incredibly effective. The doctor explained every step and the results speak for themselves.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    q: "Is the first consultation personalised?",
    a: "Absolutely. Every journey begins with a private skin analysis where our specialist assesses your concerns, skin type and goals before recommending a tailored treatment plan.",
  },
  {
    q: "Are the treatments safe and dermatologist-supervised?",
    a: "Yes. All procedures are performed using clinically-approved, medical-grade technology under the direct supervision of qualified specialists with strict safety protocols.",
  },
  {
    q: "Is Infinity Aesthetics an inclusive, LGBTQ+ friendly space?",
    a: "We proudly welcome everyone. Infinity Aesthetics Ajmer is an LGBTQ+ friendly clinic built on respect, privacy and judgement-free care for all bodies and identities.",
  },
  {
    q: "How soon will I see results?",
    a: "Some treatments such as our HydraGlow Facial offer an instant glow, while others like pigmentation or hair restoration follow a structured plan with progressive, lasting results.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book instantly via WhatsApp, call us directly, or complete the appointment form on this page. Our concierge team will confirm your preferred slot promptly.",
  },
] as const;
