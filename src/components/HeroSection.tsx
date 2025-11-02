import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={heroImage} 
              alt="Ilustrasi kerja sama tim Karang Taruna" 
              className="w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Karang Taruna<br />
              Pabuaran
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Karang taruna adalah tempat berkumpulnya para pemuda untuk mengembangkan dirinya, mencari pengalaman, dan menambah relasi
            </p>
            <p className="text-xl font-semibold text-foreground mb-6">
              Ayo Pemuda PKP Join ke Karang Taruna
            </p>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-success text-success hover:bg-success hover:text-success-foreground font-semibold px-8"
            >
              Cas Join
            </Button>
          </div>
        </div>
      </div>

      {/* Wavy Decoration */}
      <div className="relative h-32 md:h-40">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(var(--wave-light))"
            fillOpacity="0.7"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="hsl(var(--wave-dark))"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
