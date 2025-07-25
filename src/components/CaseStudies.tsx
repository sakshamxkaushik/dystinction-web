import { Button } from "@/components/ui/button";
import { Truck, Heart, Shield, BarChart3, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: Truck,
    industry: "Manufacturing",
    title: "Procurement Acceleration for Indian Factories",
    challenge: "Slow ordering cycles and supplier mismatch",
    solution: "Streamlined sourcing and digital supplier evaluation—all on one platform.",
    results: [
      { metric: "35%", label: "Quicker Purchase Orders" },
      { metric: "2x", label: "Faster Vendor Onboarding" },
      { metric: "24x7", label: "Order Tracking" }
    ],
    tech: ["Supplier Rating Engine", "Order Automation", "Live Spend Dashboard"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    industry: "Healthcare",
    title: "Reliable Sourcing for Hospital Procurement",
    challenge: "Unreliable vendors and endless paperwork for medicine supplies",
    solution: "Verified supplier pools, instant RFQ comparisons, digital compliance automation.",
    results: [
      { metric: "99%", label: "Order Fulfillment" },
      { metric: "50% Fewer", label: "Manual Steps" },
      { metric: "100%", label: "Regulatory Audit Pass" }
    ],
    tech: ["Compliance Dashboard", "E-Approvals", "Supplier Marketplace"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    industry: "Financial Services",
    title: "Compliant, Cost-Efficient Vendor Management",
    challenge: "Delayed onboarding, vendor risk, and audit failures",
    solution: "Automated vendor due-diligence, spend rules, instant audit-ready reporting.",
    results: [
      { metric: "100%", label: "On-Time Vendor KYC" },
      { metric: "60%", label: "Audit Time Saved" },
      { metric: "30% Cut", label: "In Operating Costs" }
    ],
    tech: ["Automated KYC", "Policy Enforcement", "Audit Trail Engine"],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: BarChart3,
    industry: "Logistics & Distribution",
    title: "Smarter Purchase, Smoother Delivery",
    challenge: "Difficult order tracking and unresponsive suppliers",
    solution: "Centralized procurement portal with live order status, supplier scoring, and mobile alerts.",
    results: [
      { metric: "40%", label: "Quicker Quote-to-Delivery" },
      { metric: "3x", label: "Supplier Response Rate" },
      { metric: "91%", label: "Orders On-Time" }
    ],
    tech: ["Order Tracking", "Supplier App", "Feedback Ratings"],
    gradient: "from-orange-500 to-red-500"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
  <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
    <TrendingUp className="w-4 h-4 text-green-500" />
    <span className="text-sm text-muted-foreground">Success Stories</span>
  </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
           Procurement Success,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            at the Scale India Demands
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             See how we help real Indian enterprises buy smarter, run leaner, and grow with confidence—across manufacturing, hospitals, finance, and more.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${study.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-6 h-6 text-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{study.industry}</div>
                    <h3 className="text-xl font-bold group-hover:text-glow transition-all duration-300">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-medium text-red-400 uppercase tracking-wider mb-1">Challenge</div>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-green-400 uppercase tracking-wider mb-1">Solution</div>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-primary w-full justify-between"
                  asChild
                >
                  <Link to={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}>
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">26+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
              <div className="text-xs text-green-400">↗ Across 12 industries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">$127M</div>
              <div className="text-muted-foreground">Total Client Savings</div>
              <div className="text-xs text-blue-400">↗ Measurable ROI</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">94%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
              <div className="text-xs text-purple-400">↗ Long-term partnerships</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-400">156</div>
              <div className="text-muted-foreground">Projects Delivered</div>
              <div className="text-xs text-orange-400">↗ On time, on budget</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CaseStudies;