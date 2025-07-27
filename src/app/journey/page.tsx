import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneySection from "@/components/JourneySection";

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center font-display">
              Farm to Bottle Journey
            </h1>
          </div>
        </div>

        <JourneySection />
      </main>

      <Footer />
    </div>
  );
}
