import { JsonLd } from "./components/JsonLd";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Treatments } from "./components/Treatments";
import { BeforeAfter } from "./components/BeforeAfter";
import { Doctor } from "./components/Doctor";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Treatments />
        <BeforeAfter />
        <Doctor />
        <Testimonials />
        <FAQ />
        <CTA />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
