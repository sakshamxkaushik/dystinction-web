import { Button } from "@/components/ui/button";
import { ChevronRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingStarsBackgroundCard } from "./ui/glowing-stars";

const Hero = () => {
  return (
    <section className="w-full max-w-8xl xl:max-w-8xl mx-auto px-4 sm:px-10 lg:px-12">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl z-0" />

      <div className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 text-center z-10 flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16">
        {/* Trust indicators */}
        <div className="flex justify-center mb-2 sm:mb-4">
          <div className="glass-card inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Trusted by 26+ enterprise clients
            </span>
          </div>
        </div>

        {/* Main headline & subheadline */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow leading-tight max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
            Enterprise Software That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Actually Works
            </span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Transform complex business operations into competitive advantages with
            purpose-built platforms that scale at enterprise speed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto mb-8 md:mb-12 lg:mb-16">
          <Button variant="liquid" size="lg" className="group w-full sm:w-auto" asChild>
            <Link to="/book-consultation">
              Schedule a Deep Dive
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/approach">Explore Our Approach</Link>
          </Button>
        </div>

        {/* Incubator logos - larger on mobile, centered, more vertical space */}
        <GlowingStarsBackgroundCard className="relative bg-glass w-full max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-2xl mt-2 sm:mt-4 overflow-hidden">
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full z-10 pointer-events-none">
            <p className="text-xs sm:text-sm  font-semibold text-muted-foreground mb-2 text-center">
              We're incubated by
            </p>
            <div className="flex flex-row items-center justify-center gap-8 sm:gap-12 mt-2">
              <img
                src="/images/puic.png"
                alt="Punjab University Incubation Center"
                className="h-22 sm:h-24 md:h-28 lg:h-32 max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] min-w-[90px] object-contain "
              />
              <div className="hidden sm:block w-px h-16 bg-glass mx-4"></div>
              <img
                src="/images/pu.png"
                alt="Punjab University"
                className="h-22 sm:h-24 md:h-28 lg:h-32 max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] min-w-[90px] object-contain "
              />
            </div>
          </div>
          {/* The stars background will remain as the base layer */}
        </GlowingStarsBackgroundCard>
        {/* Floating elements - hide on xs, show on sm+ */}
        <div className="hidden sm:block absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm float z-0" />
        <div className="hidden sm:block absolute bottom-1/3 right-10 w-6 h-6 bg-secondary/30 rounded-full blur-sm float-delay z-0" />
        <div className="hidden sm:block absolute top-1/2 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm float z-0" />
      </div>
      
    </section>
  );
};

export default Hero;
