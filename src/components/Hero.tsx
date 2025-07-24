import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingStarsBackgroundCard } from "./ui/glowing-stars";
import { SparklesCore } from "./ui/sparkles";

interface HeroProps {
  isVisible?: boolean;
}

const Hero = ({ isVisible = true }: HeroProps) => {
  return (
   <section className="w-full max-w-8xl xl:max-w-8xl mx-auto px-4 sm:px-10 lg:px-12 relative pb-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      <div className="absolute top-36 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl z-0" />

      <div className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 text-center z-10 flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16">
        <div className="hero-container pt-40 sm:pt-45 md:pt-45 transition-all duration-1000 ease-out">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Title - This will seamlessly continue from loading screen */}
            <h1
              id="hero-title"
              className={`hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight md:leading-tight max-w-xl sm:max-w-3xl md:max-w-5xl mx-auto transition-all duration-1000 ease-out delay-0 ${
                isVisible
                  ? "animate-[hero-appear_1s_ease-out_forwards]"
                  : "opacity-0"
              }`}
            >
              <span className="block text-highlight">
                B2B Orders? Ab Instant.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Solving industrial procurement gaps with smart, scalable tech.
            </p>
          </div>

          {/* Enhanced Sparkles in Background - now theme-aware */}
          <div
            className={`absolute inset-0 -z-10 transition-opacity duration-600 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.8}
              maxSize={1.8}
              particleDensity={120}
              className="w-full h-full"
              speed={3}
            />
          </div>
        </div>
        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto mb-8 md:mb-12 lg:mb-16 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            variant="liquid"
            size="lg"
            className="group w-full sm:w-auto"
            asChild
          >
            <Link to="/book-consultation">
              Talk to Our Experts
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <Link to="/approach">How It Works</Link>
          </Button>
        </div>
        
        {/* Incubator logos */}
        <GlowingStarsBackgroundCard
          className={`relative bg-glass w-full max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-2xl mt-2 sm:mt-4 overflow-hidden transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full z-10  pointer-events-none">
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 text-center">
              Institutional Partners
            </p>
            <div className="flex flex-row items-center justify-center gap-8 sm:gap-12 mt-2">
              <img
                src="/images/puic.png"
                alt="Punjab University Incubation Center"
                className="h-22 sm:h-24 md:h-28 lg:h-32 max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] min-w-[90px] object-contain"
              />
              <div className="hidden sm:block w-px h-16 bg-glass mx-4"></div>
              <img
                src="/images/pu.png"
                alt="Punjab University"
                className="h-22 sm:h-24 md:h-28 lg:h-32 max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] min-w-[90px] object-contain"
              />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
        {/* Floating elements */}
        <div
          className={`hidden sm:block absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm float z-0 transition-opacity duration-500 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`hidden sm:block absolute bottom-1/3 right-10 w-6 h-6 bg-secondary/30 rounded-full blur-sm float-delay z-0 transition-opacity duration-500 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`hidden sm:block absolute top-1/2 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm float z-0 transition-opacity duration-500 delay-700  ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
};

export default Hero;