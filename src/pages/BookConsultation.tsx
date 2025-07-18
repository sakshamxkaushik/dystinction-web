import { InlineWidget } from "react-calendly";
import { Calendar, Clock, Users, CheckCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookConsultation = () => {
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strategy Call
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert insights tailored to your enterprise challenges. Book a call with our team below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calendly Widget */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <InlineWidget url="https://calendly.com/dystinction/consultation-dystinction" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* What to Expect */}
            <div className="glass-card p-6">
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
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Prefer to Call?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <div>
                    <a href="tel:+919056502830" className="text-secondary hover:text-secondary-glow transition-colors">
                      +91 905 650 2830
                    </a>
                    <div className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 7 PM IST</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <a href="mailto:hello@dystinction.com" className="text-primary hover:text-primary-glow transition-colors">
                      hello@dystinction.com
                    </a>
                    <div className="text-xs text-muted-foreground">We respond within 4 hours</div>
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
