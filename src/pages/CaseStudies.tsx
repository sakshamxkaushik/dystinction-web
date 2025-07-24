import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Truck, Heart, Shield, BarChart3 } from "lucide-react";

const caseStudiesData = {
  "supply-chain-optimization": {
    icon: Truck,
    industry: "Manufacturing",
    title: "Supply Chain Optimization",
    subtitle: "Transforming Manual Processes into Intelligent Operations",
    client: "Global Manufacturing Corp",
    challenge: "Manual tracking led to 15% inventory waste and late deliveries, hurting profits and customer trust.",
    fullChallenge: "A Fortune 500 manufacturer struggled with outdated supply chain processes. Paper-based inventory and no live data meant frequent stockouts, excess, and $3.2M in lost value every year.",
    solution: "IoT-based operations with automated inventory and predictive analytics.",
    fullSolution: "Implemented a real-time IoT platform for full supply chain visibility—enabling demand forecasting, proactive reordering, and intelligent routing. All linked to their ERP for smooth handoffs.",
    results: [
      { metric: "78%", label: "Waste Reduction", description: "Errors eliminated, inventory optimized" },
      { metric: "$2.3M", label: "Annual Savings", description: "Efficiency directly impacts bottom line" },
      { metric: "99.2%", label: "Delivery Accuracy", description: "Live status and automated routing" },
      { metric: "45%", label: "Faster Processing", description: "Approvals and workflows automated" }
    ],
    technologies: ["IoT Sensors", "Machine Learning", "Analytics", "Mobile Apps"],
    timeline: "12-week rollout, end-to-end",
    testimonial: {
      quote: "We saw ROI within 3 months. Dystinction unlocked efficiency we thought impossible.",
      author: "Sarah Johnson",
      title: "CTO, Global Manufacturing Corp"
    },
    keyFeatures: [
      "IoT sensor network (all facilities)",
      "Automated reordering & tracking",
      "Predictive demand analytics",
      "Mobile dashboards for field ops",
      "ERP integration"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  "data-intelligence-suite": {
    icon: Heart,
    industry: "Healthcare",
    title: "Data Intelligence Suite",
    subtitle: "Unifying Patient Data for Fast, Accurate Care",
    client: "Regional Healthcare Network",
    challenge: "Patient data trapped in 12 systems; delays in diagnosis, repeat testing, and incomplete care.",
    fullChallenge: "A leading health network had siloed records—making it difficult to see full patient histories and costing $4.1M/yr. Doctors wasted time; critical outcomes suffered.",
    solution: "Unified, secure data platform with AI-powered analytics and instant, mobile access.",
    fullSolution: "Built a HIPAA-compliant hub consolidating all hospital and clinic data. Added AI for diagnosis support, eliminating duplicate tests and providing whole-patient insight in real time.",
    results: [
      { metric: "67%", label: "Faster Diagnosis", description: "Quicker patient decisions, end-to-end care" },
      { metric: "45%", label: "Cost Reduction", description: "No more unnecessary repeat tests" },
      { metric: "99.99%", label: "Platform Uptime", description: "Always-available, reliable patient data" },
      { metric: "89%", label: "Provider Satisfaction", description: "Doctors spend more time treating—not searching for info" }
    ],
    technologies: ["FHIR Integration", "AI Analytics", "Blockchain", "Mobile Apps"],
    timeline: "16 weeks across all hospitals",
    testimonial: {
      quote: "This platform has revolutionized our delivery of care and outcomes.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer, R.H. Network"
    },
    keyFeatures: [
      "Unified, FHIR-compliant records",
      "AI clinical decision support",
      "Mobile, real-time access",
      "Seamless integration (12 systems)",
      "Predictive population health analytics"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  "security-compliance-framework": {
    icon: Shield,
    industry: "Financial Services",
    title: "Security & Compliance Framework",
    subtitle: "From Failed Audits to Full Regulatory Confidence",
    client: "Premier Financial Institution",
    challenge: "Audit failures and legacy processes risked fines, security threats, and reputation.",
    fullChallenge: "A financial institution with multiple audit failures faced $2.8M in possible fines. Manual compliance, legacy security, and no real-time visibility increased business risk.",
    solution: "Zero-trust security, automated policy controls, and continuous compliance reporting.",
    fullSolution: "Designed and rolled out a zero-trust, automated security framework. Built-in compliance checks, instant reporting, and blockchain audit trails. Audit-ready at all times.",
    results: [
      { metric: "100%", label: "Audit Success", description: "No more failed reviews; all requirements passed" },
      { metric: "85%", label: "Threat Reduction", description: "Modern security and proactive monitoring" },
      { metric: "60%", label: "Cost Savings", description: "Automated compliance > manual effort" },
      { metric: "24/7", label: "Monitoring", description: "Always-on risk detection, instant response" }
    ],
    technologies: ["Zero Trust", "Automated Testing", "Blockchain", "AI Security"],
    timeline: "14 weeks, continuous monitoring setup",
    testimonial: {
      quote: "Now we exceed standards—no more audit stress. Dystinction's compliance tools just work.",
      author: "James Rodriguez",
      title: "CISO, Premier FI"
    },
    keyFeatures: [
      "Zero-trust security",
      "Automated compliance & reporting",
      "Blockchain audit trails",
      "AI threat detection",
      "Live security dashboard"
    ],
    gradient: "from-purple-500 to-violet-500"
  },
  "operations-dashboard": {
    icon: BarChart3,
    industry: "Logistics",
    title: "Operations Dashboard",
    subtitle: "Global Visibility, Real-Time Control for Logistics",
    client: "International Logistics Company",
    challenge: "No central visibility across 23 countries; slow decisions, wasted resources, customer complaints.",
    fullChallenge: "A global logistics leader lacked a central operations view. Resource allocations lagged, and slow responses cost $1.7M/yr—with customer experience taking a direct hit.",
    solution: "Centralized dashboard with predictive analytics and automated dispatch.",
    fullSolution: "Built a live command center aggregating 23-country data. Predictive load planning and automated issue alerts cut delays, optimized routes, and improved service.",
    results: [
      { metric: "54%", label: "Efficiency Gain", description: "Smarter routing, faster response" },
      { metric: "32%", label: "Cost Reduction", description: "Optimized resource allocation" },
      { metric: "91%", label: "On-time Delivery", description: "Real-time issue handling and transparency" },
      { metric: "76%", label: "Customer Satisfaction", description: "Reliable delivery, better communication" }
    ],
    technologies: ["Data Processing", "Predictive AI", "Mobile Apps", "IoT Integration"],
    timeline: "10 weeks with phased rollout",
    testimonial: {
      quote: "Global command is now at our fingertips—client impact, cost, and reliability all up!",
      author: "Maria Santos",
      title: "COO, Intl. Logistics"
    },
    keyFeatures: [
      "Live dashboards for every region",
      "Predictive planning & load matching",
      "Automated resource and personnel allocation",
      "Integrated customer portal",
      "Mobile tools for field teams"
    ],
    gradient: "from-orange-500 to-red-500"
  }
};


const CaseStudiesPage = () => {
  const { caseId } = useParams();
  
  if (!caseId || !caseStudiesData[caseId as keyof typeof caseStudiesData]) {
    return <CaseStudiesOverview />;
  }

  const caseStudy = caseStudiesData[caseId as keyof typeof caseStudiesData];
  const CaseIcon = caseStudy.icon;

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Back navigation */}
        <Link 
          to="/case-studies" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-sm text-muted-foreground mb-2">{caseStudy.industry} • {caseStudy.client}</div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {caseStudy.title}
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">
            {caseStudy.subtitle}
          </p>

          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent mb-1`}>
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>

          <Button variant="liquid" size="lg" asChild>
            <Link to="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Discuss Your Project
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-400">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.fullChallenge}
              </p>
            </div>

            {/* Solution */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-400">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {caseStudy.fullSolution}
              </p>

              <h3 className="font-semibold text-lg mb-4">Key Features Implemented</h3>
              <div className="space-y-3">
                {caseStudy.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Results */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Measurable Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="p-6 rounded-lg bg-muted/20">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent mb-2`}>
                      {result.metric}
                    </div>
                    <div className="font-semibold mb-2">{result.label}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-muted/50 text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {/* <div className="glass-card p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-muted-foreground italic mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.title}</div>
              </div>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Industry</div>
                  <div className="font-medium">{caseStudy.industry}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                  <div className="font-medium">{caseStudy.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-medium">{caseStudy.client}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="font-bold text-lg mb-4">Similar Challenge?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Let's discuss how we can help transform your operations with a similar approach.
              </p>
              <Button variant="liquid" className="w-full" asChild>
                <Link to="/book-consultation">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            {/* Related Case Studies */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Related Success Stories</h3>
              <div className="space-y-3">
                {Object.entries(caseStudiesData)
                  .filter(([key]) => key !== caseId)
                  .slice(0, 3)
                  .map(([key, relatedCase]) => (
                    <Link
                      key={key}
                      to={`/case-studies/${key}`}
                      className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <relatedCase.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                        <div>
                          <div className="text-sm font-medium group-hover:text-primary transition-colors">
                            {relatedCase.title}
                          </div>
                          <div className="text-xs text-muted-foreground">{relatedCase.industry}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-muted-foreground">Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Shaping the Future of {" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how we aim to transform industries with forward-thinking strategies and cutting-edge technology.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(caseStudiesData).map(([key, study]) => (
            <div 
              key={key}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${study.gradient} bg-opacity-10`}>
                    <study.icon className="w-6 h-6 text-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{study.industry}</div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.slice(0, 3).map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-primary w-full justify-between"
                  asChild
                >
                  <Link to={`/case-studies/${key}`}>
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
    </div>
  );
};

export default CaseStudiesPage;