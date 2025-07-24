import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl z-0" />
      
      {/* Enhanced Sparkles in Background */}
      <div className="absolute inset-0 -z-10 transition-opacity duration-600 delay-100 opacity-100">
        <SparklesCore
          id="notfoundparticles"
          background="transparent"
          minSize={0.8}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full"
          speed={3}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-md mx-auto">
      
          <div className="flex flex-col items-center justify-center p-8 sm:p-10">
            <h1 
              className={`text-6xl sm:text-7xl md:text-8xl font-extrabold text-highlight mb-4 transition-all duration-1000 ease-out ${isVisible ? 'animate-[hero-appear_1s_ease-out_forwards]' : 'opacity-0'}`}
            >
              404
            </h1>
            <p 
              className={`text-xl sm:text-2xl text-muted-foreground mb-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Oops! This page has gone missing
            </p>
            <Button
              variant="liquid"
              size="lg"
              className={`group w-full sm:w-auto transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              asChild
            >
              <Link to="/">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Return to Home
              </Link>
            </Button>
          </div>
      </div>

      {/* Floating elements */}
      <div className={`hidden sm:block absolute top-1/4 right-10 w-4 h-4 bg-primary/30 rounded-full blur-sm float z-0 transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`hidden sm:block absolute bottom-1/3 left-10 w-6 h-6 bg-secondary/30 rounded-full blur-sm float-delay z-0 transition-opacity duration-500 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`hidden sm:block absolute top-1/2 right-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm float z-0 transition-opacity duration-500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
    </section>
  );
};

export default NotFound;
