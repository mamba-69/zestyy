import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <JourneySection />
        <ProductsSection />
        <QualitySection />
        <TestimonialsSection />
        <ContactSection />
        </main>

      <Footer />
    </div>
  );
}
