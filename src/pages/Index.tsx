import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HighlightEvents from "@/components/HighlightEvents";
import DivisiSection from "@/components/DivisiSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <HighlightEvents />
        <DivisiSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
