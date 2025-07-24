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
          ? 'opacity-0 scale-105 blur-sm' 
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Main Title with Seamless Positioning */}
      <div className="relative z-20 mb-8">
        <div 
          className={`transition-all duration-1000 ease-out ${
            titleAnimationComplete ? 'transform-none' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-foreground relative mb-4">
            <span className="text-highlight animate-text-glow-loading">
              Dystinction
            </span>
          </h1>
          
          {/* This text will transition seamlessly to hero */}
          <div 
            id="loading-tagline"
            className={`text-xl md:text-3xl lg:text-4xl font-extrabold text-center leading-tight transition-all duration-700 ${
              isExiting 
                ? 'opacity-0 transform translate-y-4 scale-95' 
                : 'opacity-100 transform translate-y-0 scale-100'
            }`}
          >
            <span className="block text-highlight">
              B2B Orders? Ab Instant.
            </span>
          </div>
        </div>
      </div>

      {/* Sparkles Container */}
      <div className={`w-full max-w-4xl h-40 relative transition-opacity duration-700 ${
        isExiting ? 'opacity-30' : 'opacity-100'
      }`}>
        {/* Top Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-1/4" />

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
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(400px_250px_at_top,transparent_20%,white)]" />
      </div>

      {/* Loading Progress Indicator */}
      <div className={`relative z-20 mt-8 flex flex-col items-center transition-all duration-500 ${
        showProgressBar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${
        isExiting ? 'opacity-0 translate-y-8' : ''
      }`}>
        <div className="w-48 h-1 bg-glass rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-loading-progress" />
        </div>
        <p className="text-sm text-muted-foreground mt-4 animate-pulse">
          Loading your experience...
        </p>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow-loading" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow-loading" style={{ animationDelay: '1s' }} />
      
      {/* Transition overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-hero pointer-events-none transition-opacity duration-1000 ${
          isExiting ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </div>
  );
}