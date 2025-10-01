import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Couple hiking on mountain trail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 drop-shadow-lg">
          Exploring Nature
          <span className="block text-primary">Together</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
          Join us on our journey through mountains, trails, and the beauty of the great outdoors
        </p>
        <Button
          variant="hero"
          size="lg"
          onClick={scrollToGallery}
          className="group"
        >
          View Our Adventures
          <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
