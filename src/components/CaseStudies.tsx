import { Button } from "@/components/ui/button";
import { Truck, Heart, Shield, BarChart3, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: Truck,
    industry: "Manufacturing",
    title: "Supply Chain Optimization",
    challenge: "Manual tracking causing 15% inventory waste",
    solution: "Real-time IoT monitoring with predictive analytics",
    results: [
      { metric: "78%", label: "Waste Reduction" },
      { metric: "$2.3M", label: "Annual Savings" },
      { metric: "99.2%", label: "Delivery Accuracy" }
    ],
    tech: ["IoT Sensors", "Machine Learning", "Real-time Analytics"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    industry: "Healthcare",
    title: "Data Intelligence Suite",
    challenge: "Patient data scattered across 12 systems",
    solution: "Unified healthcare platform with HIPAA compliance",
    results: [
      { metric: "67%", label: "Faster Diagnosis" },
      { metric: "45%", label: "Cost Reduction" },
      { metric: "99.99%", label: "System Uptime" }
    ],
    tech: ["FHIR Integration", "AI Analytics", "Secure APIs"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    industry: "Financial Services",
    title: "Security & Compliance Framework",
    challenge: "Failed 3 security audits in 18 months",
    solution: "Zero-trust architecture with automated compliance",
    results: [
      { metric: "100%", label: "Audit Success" },
      { metric: "85%", label: "Threat Reduction" },
      { metric: "60%", label: "Compliance Cost Savings" }
    ],
    tech: ["Zero Trust", "Automated Testing", "Blockchain"],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: BarChart3,
    industry: "Logistics",
    title: "Operations Dashboard",
    challenge: "No real-time visibility into global operations",
    solution: "Centralized command center with predictive insights",
    results: [
      { metric: "54%", label: "Efficiency Gain" },
      { metric: "32%", label: "Cost Reduction" },
      { metric: "91%", label: "On-time Delivery" }
    ],
    tech: ["Real-time Data", "Predictive AI", "Mobile Apps"],
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
            Real Results for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how enterprise leaders across industries have transformed their operations 
            and achieved measurable competitive advantages with our solutions.
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
              <div className="text-3xl font-bold text-primary">50+</div>
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