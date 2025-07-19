import { useState, useEffect } from "react";
import { Calendar, Phone, Mail, ExternalLink, Clock, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";

const BookConsultation = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openCalendlyPopup = () => {
    // Open Calendly in a new tab for better mobile experience
    window.open('https://calendly.com/dystinction/consultation-dystinction', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Free Consultation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule Your{" "}
            {/* <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> */}
              <Cover className="">Strategy Call</Cover>
            {/* </span> */}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get expert insights tailored to your enterprise challenges. Book a call with our team below.
          </p>
        </div>

        {/* Mobile-First Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stack everything vertically */}
          <div className="block lg:hidden space-y-8">
            {/* CTA Button for Mobile */}
            <div className="glass-card p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
                <p className="text-muted-foreground text-sm">
                  30-minute strategy call with our experts
                </p>
              </div>
              
              <Button 
                onClick={openCalendlyPopup}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mb-4"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Open Calendar
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  30 min
                </div>
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  Video call
                </div>
              </div>
            </div>

            {/* What to Expect - Mobile */}
            <div className="glass-card border border-primary/30 shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Quick Response</div>
                    <div className="text-xs text-muted-foreground">We'll contact you within 4 hours to confirm your call</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Strategy Discussion</div>
                    <div className="text-xs text-muted-foreground">45-minute video call to discuss your challenges</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Custom Recommendations</div>
                    <div className="text-xs text-muted-foreground">Receive tailored solutions for your business needs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Mobile */}
            <div className="glass-card border border-secondary/30 shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Prefer to Call?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                  <div className="flex-1">
                    <a href="tel:+919056502830" className="text-secondary hover:text-secondary-glow transition-colors font-medium">
                      +91 905 650 2830
                    </a>
                    <div className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 7 PM IST</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <div className="flex-1">
                    <a href="mailto:hello@dystinction.com" className="text-primary hover:text-primary-glow transition-colors font-medium">
                      hello@dystinction.com
                    </a>
                    <div className="text-xs text-muted-foreground">We respond within 4 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original Bento Grid Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-12">
            {/* Calendly Widget - Desktop Only */}
            <div className="col-span-7">
              <div className="glass-card p-0 overflow-hidden rounded-xl">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-primary/20">
                  <h3 className="font-semibold text-lg">Select Your Preferred Time</h3>
                  <p className="text-sm text-muted-foreground">Choose a slot that works best for you</p>
                </div>
                <div className="h-[600px]">
                  <iframe
                    src="https://calendly.com/dystinction/consultation-dystinction"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Consultation"
                    className="rounded-b-xl"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar - Desktop */}
            <div className="col-span-5 space-y-8 sticky top-32">
              {/* What to Expect */}
              <div className="glass-card border border-primary/30 shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Quick Response</div>
                      <div className="text-xs text-muted-foreground">We'll contact you within 4 hours to confirm your call</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-secondary">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Strategy Discussion</div>
                      <div className="text-xs text-muted-foreground">45-minute video call to discuss your challenges</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Custom Recommendations</div>
                      <div className="text-xs text-muted-foreground">Receive tailored solutions for your business needs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass-card border border-secondary/30 shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Prefer to Call?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <Phone className="w-4 h-4 text-secondary" />
                    <div>
                      <a href="tel:+919056502830" className="text-secondary hover:text-secondary-glow transition-colors font-medium">
                        +91 905 650 2830
                      </a>
                      <div className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 7 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    <div>
                      <a href="mailto:hello@dystinction.com" className="text-primary hover:text-primary-glow transition-colors font-medium">
                        hello@dystinction.com
                      </a>
                      <div className="text-xs text-muted-foreground">We respond within 4 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="glass-card border border-primary/20 shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>500+ successful consultations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Enterprise-grade solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>100% confidential discussions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;