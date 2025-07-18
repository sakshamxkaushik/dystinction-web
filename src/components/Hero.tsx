import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 text-center">
        {/* Trust indicators */}
        <div className="mb-8 flex justify-center">
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Trusted by 50+ enterprise clients
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
          Enterprise Software That{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Actually Works
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform complex business operations into competitive advantages with
          purpose-built platforms that scale at enterprise speed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="liquid" size="lg" className="group" asChild>
            <Link to="/book-consultation">
              Schedule a Deep Dive
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link to="/approach">Explore Our Approach</Link>
          </Button>
        </div>

        <div className="glass-card max-w-4xl mx-auto p-6 rounded-2xl">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            We're incubated by
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Logo 1 */}
            <div className="flex items-center">
              <img
                src="/images/puic.png"
                alt="Punjab University Incubation Center"
                className="h-26 max-w-[120px] object-contain hover:grayscale-0 transition duration-300"
              />
            </div>

            {/* Logo 2 */}
            <div className="flex items-center">
              <img
                src="/images/pu.png"
                alt="Punjab University"
                className="h-26 max-w-[120px] object-contain  hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm float" />
        <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-secondary/30 rounded-full blur-sm float-delay" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm float" />
      </div>
    </section>
  );
};

export default Hero;
