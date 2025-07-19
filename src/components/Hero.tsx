// hero
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden overflow-x-hidden max-w-full px-2 sm:px-6 pt-20 sm:pt-24 lg:pt-32 pb-10 lg:pb-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl z-0" />

      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 text-center z-10">
        {/* Trust indicators */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="glass-card inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Trusted by 26+ enterprise clients
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 lg:mb-10 text-glow leading-tight">
          Enterprise Software That{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Actually Works
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 lg:mb-14 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
          Transform complex business operations into competitive advantages with
          purpose-built platforms that scale at enterprise speed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-14 lg:mb-20 w-full max-w-xs sm:max-w-none mx-auto">
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

        <div className="glass-card max-w-xs xs:max-w-md sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 sm:p-6 rounded-2xl">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 text-center">
            We're incubated by
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            {/* Logo 1 */}
            <div className="flex items-center">
              <img
                src="/images/puic.png"
                alt="Punjab University Incubation Center"
                className="h-12 sm:h-20 max-w-[90px] sm:max-w-[120px] object-contain hover:grayscale-0 transition duration-300"
              />
            </div>

            {/* Logo 2 */}
            <div className="flex items-center">
              <img
                src="/images/pu.png"
                alt="Punjab University"
                className="h-12 sm:h-20 max-w-[90px] sm:max-w-[120px] object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Floating elements - hide on xs, show on sm+ */}
        <div className="hidden sm:block absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm float z-0" />
        <div className="hidden sm:block absolute bottom-1/3 right-10 w-6 h-6 bg-secondary/30 rounded-full blur-sm float-delay z-0" />
        <div className="hidden sm:block absolute top-1/2 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm float z-0" />
      </div>
    </section>
  );
};

export default Hero;
