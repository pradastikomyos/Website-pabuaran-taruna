import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const events = [
  { id: 1, title: "Event 1", description: "Deskripsi event pertama" },
  { id: 2, title: "Event 2", description: "Deskripsi event kedua" },
  { id: 3, title: "Event 3", description: "Deskripsi event ketiga" },
];

const HighlightEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="bg-navy py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Highlight Event
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 text-white hover:bg-white/10 z-10"
            onClick={prevSlide}
            aria-label="Previous event"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="bg-gradient-to-br from-coral/10 to-accent/10 rounded-xl p-8 md:p-12 min-h-[300px] flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">{events[currentIndex].title}</h3>
              <p className="text-lg opacity-90">{events[currentIndex].description}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 text-white hover:bg-white/10 z-10"
            onClick={nextSlide}
            aria-label="Next event"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightEvents;
