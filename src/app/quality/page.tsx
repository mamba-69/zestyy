import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QualitySection from "@/components/QualitySection";

export default function QualityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-display">Quality & Hygiene Standards</h1>
          </div>
        </div>
        
        <QualitySection />
      </main>
      
      <Footer />
    </div>
  );
}