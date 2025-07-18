import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get Started</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enterprise?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a free consultation to discuss your enterprise software needs. 
            Our experts will analyze your challenges and propose tailored solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - CTA and benefits */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">
                Free Strategy Consultation
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Comprehensive technical assessment",
                  "Custom solution architecture",
                  "ROI projection and timeline",
                  "Risk analysis and mitigation plan"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="liquid" size="lg" className="w-full group" asChild>
                <Link to="/book-consultation">
                  Book Your Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>No commitment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>45-minute call</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Expert insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4 text-primary">What to Expect</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• We'll discuss your current challenges and business objectives</p>
                <p>• Review your existing technical infrastructure and pain points</p>
                <p>• Propose initial solutions and implementation approaches</p>
                <p>• Provide timeline estimates and next steps</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a 
                      href="mailto:hello@dystinction.com" 
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      hello@dystinction.com
                    </a>
                    <div className="text-sm text-muted-foreground mt-1">
                      We respond within 4 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <a 
                      href="tel:+919056502830" 
                      className="text-secondary hover:text-secondary-glow transition-colors"
                    >
                      +91 905 650 2830
                    </a>
                    <div className="text-sm text-muted-foreground mt-1">
                      Available Mon-Fri, 9 AM - 7 PM IST
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Office</div>
                    <div className="text-foreground">
                      Zirakpur & Chandigarh, India
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Remote consultations available globally
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company tagline */}
            <div className="glass-card p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="text-center">
                <h4 className="font-bold text-xl mb-3 text-glow">
                  Dystinction
                </h4>
                <p className="text-primary font-medium mb-2">
                  "Turn Complex Operations Into Competitive Advantages"
                </p>
                <p className="text-sm text-muted-foreground">
                  Enterprise software consultancy specializing in scalable, 
                  high-performance solutions for ambitious businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground italic mb-4">
              "Dystinction didn't just build our platform—they transformed how our entire 
              organization thinks about technology. The ROI was evident within 3 months."
            </div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Sarah Johnson</span>
              <span className="text-muted-foreground"> • CTO, Global Manufacturing Corp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Contact;