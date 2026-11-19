

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <ServicesPreview />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
