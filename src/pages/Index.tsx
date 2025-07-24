import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import MetricsDashboard from "@/components/MetricsDashboard";
import ProblemStatement from "@/components/ProblemStatement";
import PerformanceBenchmarks from "@/components/PerformanceBenchmarks";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add loading class to body to prevent scroll
    document.body.classList.add('loading');
    
    // Position the content div exactly where the loading screen elements are
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      contentRef.current.style.display = 'block';
    }
    
    // Reduced to 1.8-second timer for loading screen
    const loadingTimer = setTimeout(() => {
      // Start exit animation
      setIsExiting(true);
      
      // Prepare content for transition
      if (contentRef.current) {
        contentRef.current.style.opacity = '0';
      }
      
      // After exit animation starts, begin showing content
      setTimeout(() => {
        // Make sure hero is ready before removing loading screen
        setHeroVisible(true);
        
        // Short delay to ensure hero is rendered before showing
        setTimeout(() => {
          setShowContent(true);
          if (contentRef.current) {
            contentRef.current.style.opacity = '1';
          }
          
          // Finally remove loading screen after transition is complete
          setTimeout(() => {
            setIsLoading(false);
            // Remove loading class from body
            document.body.classList.remove('loading');
          }, 100);
        }, 50);
      }, 500); // Increased exit animation time for smoother transition
    }, 1800); // Reduced from 2500ms to 1800ms

    return () => {
      clearTimeout(loadingTimer);
      document.body.classList.remove('loading');
    };
  }, []);

  // Preload images during loading
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [
        '/images/puic.png',
        '/images/pu.png'
      ];

      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log('Images preloaded successfully');
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, []);

  return (
    <div className={`content-container ${isLoading ? 'loading' : ''}`}>
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 bg-gradient-hero z-0" />
      
      {/* Loading Screen - Always render but control visibility with state */}
      <div className={`fixed inset-0 z-50 ${isLoading ? 'block' : 'hidden'}`}>
        <LoadingScreen isExiting={isExiting} />
      </div>
      
      {/* Main Content Container - Always rendered but initially hidden */}
      <div 
        ref={contentRef}
        className={`relative min-h-screen z-10 transition-all duration-1000 ease-out ${
          showContent ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <Hero isVisible={heroVisible} />
        
        {/* Other components with reduced delays */}
        <div className={`transition-all duration-500 delay-300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <MetricsDashboard />
        </div>
        
        <div className={`transition-all duration-500 delay-500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <ProblemStatement />
        </div>
        
        <div className={`transition-all duration-500 delay-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <PerformanceBenchmarks />
        </div>
        
        <div className={`transition-all duration-500 delay-900 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Services />
        </div>
        
        <div className={`transition-all duration-500 delay-1100 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <ProcessTimeline />
        </div>
        
        <div className={`transition-all duration-500 delay-1300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <CaseStudies />
        </div>
        
        <div className={`transition-all duration-500 delay-1500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;