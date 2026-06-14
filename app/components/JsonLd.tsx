import { SITE } from "../lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
    name: SITE.name,
    description:
      "Premium skin care, dermatology, aesthetic and cosmetic treatment clinic in Ajmer, Rajasthan.",
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    image: `${SITE.url}/og.jpg`,
    hasMap: SITE.mapsUrl,
    priceRange: "$$$",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
    medicalSpecialty: ["Dermatology", "CosmeticProcedure", "Aesthetics"],
    knowsAbout: [
      "Skin Care",
      "Laser Hair Removal",
      "Anti-Ageing",
      "Pigmentation Treatment",
      "Hair Restoration",
    ],
    sameAs: [`https://${SITE.domain}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
