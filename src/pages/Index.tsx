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
  const [contentReady, setContentReady] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  useEffect(() => {
    // Add loading class to body to prevent scroll and hide content
    document.body.classList.add('loading');
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    // Hide content initially to prevent any flashing
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      contentRef.current.style.visibility = 'hidden';
      contentRef.current.style.position = 'fixed';
      contentRef.current.style.top = '0';
      contentRef.current.style.left = '0';
      contentRef.current.style.width = '100%';
      contentRef.current.style.height = '100vh';
      contentRef.current.style.overflow = 'hidden';
    }
    
    // Reduced to 1.8-second timer for loading screen
    const loadingTimer = setTimeout(() => {
      // Start exit animation
      setIsExiting(true);
      
      // Prepare content for seamless transition
      setTimeout(() => {
        // Make hero visible first
        setHeroVisible(true);
        setContentReady(true);
        
        // Start showing content with proper positioning
        if (contentRef.current) {
          contentRef.current.style.position = 'relative';
          contentRef.current.style.visibility = 'visible';
          contentRef.current.style.overflow = 'visible';
          contentRef.current.style.height = 'auto';
        }
        
        setTimeout(() => {
          setShowContent(true);
          if (contentRef.current) {
            contentRef.current.style.opacity = '1';
          }
          
          // Remove loading screen and restore body settings
          setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove('loading');
            document.body.style.overflow = '';
            document.body.style.height = '';
          }, 150);
        }, 100);
      }, 400);
    }, 1800);

    return () => {
      clearTimeout(loadingTimer);
      document.body.classList.remove('loading');
      document.body.style.overflow = '';
      document.body.style.height = '';
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
    <>
      {/* Loading Screen - Only render when loading */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-background">
          <LoadingScreen isExiting={isExiting} />
        </div>
      )}
      
      {/* Main Content Container - Hidden until content is ready */}
      <div 
        ref={contentRef}
        className={`min-h-screen transition-all duration-1000 ease-out ${
          contentReady ? 'relative z-10' : 'fixed inset-0 z-0'
        } ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: contentReady ? 'visible' : 'hidden'
        }}
      >
        {/* Fixed Background Layer */}
        {/* <div className="fixed inset-0 bg-gradient-hero -z-10" /> */}
        
        {/* Hero Section - Always render first */}
        <Hero isVisible={heroVisible && showContent} />
        
        {/* Other components with staggered delays only after hero is visible */}
        {contentReady && (
          <>
            <div className={`transition-all duration-500 delay-300 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <MetricsDashboard />
            </div>
            
            <div className={`transition-all duration-500 delay-500 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <ProblemStatement />
            </div>
            
            <div className={`transition-all duration-500 delay-700 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <PerformanceBenchmarks />
            </div>
            
            <div className={`transition-all duration-500 delay-900 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Services />
            </div>
            
            <div className={`transition-all duration-500 delay-1100 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <ProcessTimeline />
            </div>
            
            <div className={`transition-all duration-500 delay-1300 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <CaseStudies />
            </div>
            
            <div className={`transition-all duration-500 delay-1500 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Contact />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;