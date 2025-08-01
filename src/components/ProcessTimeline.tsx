import { Search, Palette, Code, Rocket, Clock, CheckCircle } from "lucide-react";

const timelineSteps = [
  {
    icon: Search,
    step: "1",
    title: "Diagnose",
    duration: "1 week",
    description:
      "We start by understanding your procurement flow: where it breaks, where bottlenecks slow you down, and where wasted effort or cost hide. You get a clear, customized action plan.",
    deliverables: [
      "Procurement pain-point mapping",
      "Supplier & workflow diagnostic",
      "Success criteria definition",
      "Solution blueprint"
    ],
    color: "text-blue-400"
  },
  {
    icon: Palette,
    step: "2", 
    title: "Design",
    duration: "1-2 weeks",
    description:
      "We sketch your new buying process: streamlined approvals, single-point supplier touch, and smarter spending. Visual walkthroughs keep your business team in the loop at every step.",
    deliverables: [
      "Optimized process maps",
      "User-friendly dashboards",
      "Supplier management flows",
      "Risk & compliance checks"
    ],
    color: "text-purple-400"
  },
  {
    icon: Code,
    step: "3",
    title: "Build & Integrate",
    duration: "3-6 weeks",
    description:
      "We digitize your new workflow, connect your current tools (ERP/finance/inventory), and build everything for easy onboarding. Busywork gets automated, and your team’s daily life improves.",
    deliverables: [
      "Digital procurement platform",
      "Integrated order & approval flows",
      "Automated supplier matching",
      "Training for all users"
    ],
    color: "text-green-400"
  },
  {
    icon: Rocket,
    step: "4",
    title: "Go Live & Support",
    duration: "Instant & ongoing",
    description:
      "You’re live—no downtime, no disruption. Our support team ensures every order, request or approval runs seamlessly, and you get actionable reporting from day one.",
    deliverables: [
      "Smooth launch & migration",
      "24/7 help & troubleshooting",
      "Live spend and savings dashboard",
      "Regular enhancements"
    ],
    color: "text-orange-400"
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Procurement Transformation, {" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our practical, business-first approach takes your procurement from slow and scattered to fast, transparent, and growth-focused—in just a few weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 opacity-30" />
            
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline card */}
                <div className="glass-card group hover:scale-105 transition-all duration-300 relative z-10">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-muted-foreground/30">{step.step}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                        {step.title}
                      </h3>
                      <div className={`text-sm font-medium ${step.color} mb-3`}>
                        {step.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-foreground/70 uppercase tracking-wider">
                        Key Deliverables
                      </div>
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile connection line */}
                {index < timelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a discovery call to discuss your enterprise software needs 
              and see how our proven process can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Free consultation included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProcessTimeline;