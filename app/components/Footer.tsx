import Image from "next/image";
import { NAV_LINKS, SITE } from "../lib/site";
import ClinicImg from "@/app/assets/clinic iamge.webp"

export function Footer() {
  return (
    <footer className="border-t hairline px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="overflow-hidden flex justify-around items-center rounded-2xl bg-[#04060a] p-3 ring-1 ring-white/10 shadow-soft">
              <Image
                src={ClinicImg}
                alt="Infinity Aesthetics Skin & Hair Clinic, Ajmer"
                width={220}
                height={110}
                placeholder="blur"
                className="h-auto w-44 object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Premium skin care, dermatology and aesthetic treatments — where science
              meets timeless beauty, in the heart of Ajmer.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1.5 text-xs font-medium text-sage-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
              Proudly LGBTQ+ Friendly
            </span>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold">Treatments</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {["Dermatology", "Laser Therapy", "Anti-Ageing", "Skin Glow", "Hair Restoration"].map(
                (t) => (
                  <li key={t}>
                    <a href="#treatments" className="transition-colors hover:text-foreground">
                      {t}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{SITE.addressLine},<br />{SITE.city}, {SITE.state}</li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="transition-colors hover:text-foreground">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://${SITE.domain}`} className="transition-colors hover:text-foreground">
                  {SITE.domain}
                </a>
              </li>
              <li className="text-xs">{SITE.hours}</li>
            </ul>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t hairline pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Crafted with care · Skin Care · Aesthetics · Dermatology
          </p>
        </div>
      </div>
    </footer>
  );
}
