"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

interface LoadingScreenProps {
  onComplete?: () => void;
  isExiting?: boolean;
}

export default function LoadingScreen({ onComplete, isExiting = false }: LoadingScreenProps) {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  useEffect(() => {
    // Show progress bar after a short delay
    const progressTimer = setTimeout(() => {
      setShowProgressBar(true);
    }, 800);

    // Mark title animation as complete after it's visible
    const titleTimer = setTimeout(() => {
      setTitleAnimationComplete(true);
    }, 1200);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
        isExiting 
          ? 'opacity-0 scale-100 blur-sm' 
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Main Content Container - Properly Centered */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
        
        {/* Main Title with Perfect Centering */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              titleAnimationComplete ? 'transform-none' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-foreground relative mb-8 tracking-wider">
              <span className="text-highlight animate-text-glow-loading block">
                DYSTINCTION 
              </span>
            </h1>
          </div>
        </div>

        {/* Sparkles Container - Positioned Below Title */}
        <div className={`w-full max-w-4xl h-40 relative transition-opacity duration-700 ${
          isExiting ? 'opacity-30' : 'opacity-100'
        }`}>
          {/* Top Gradients - Better Positioning */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-3/4 max-w-md">
            <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] blur-sm" />
            <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1/2 max-w-xs">
            <div className="bg-gradient-to-r from-transparent via-secondary to-transparent h-[5px] blur-sm" />
            <div className="bg-gradient-to-r from-transparent via-secondary to-transparent h-px" />
          </div>

          {/* Sparkles Core Component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={800}
            className="w-full h-full"
            speed={2}
          />

          {/* Radial Gradient Mask */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(400px_250px_at_center,transparent_20%,white)]" />
        </div>
      </div>

      {/* Background Glow Effects - Better Positioning */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow-loading" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow-loading" style={{ animationDelay: '1s' }} />
      
      {/* Transition overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-hero pointer-events-none transition-opacity duration-1500 ${
          isExiting ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </div>
  );
}