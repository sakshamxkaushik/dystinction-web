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
    challenge: "Manual tracking systems were causing 15% inventory waste and delivery delays, impacting customer satisfaction and profitability.",
    fullChallenge: "A Fortune 500 manufacturing company was struggling with outdated supply chain management systems. Manual inventory tracking led to significant waste, while lack of real-time visibility into operations caused frequent stockouts and overstock situations. The company was losing $3.2M annually due to inefficiencies.",
    solution: "Real-time IoT monitoring system with predictive analytics and automated inventory management.",
    fullSolution: "We implemented a comprehensive IoT-enabled supply chain platform that provides real-time visibility across all operations. The solution includes predictive analytics for demand forecasting, automated reordering systems, and intelligent routing optimization.",
    results: [
      { metric: "78%", label: "Waste Reduction", description: "Eliminated manual tracking errors and optimized inventory levels" },
      { metric: "$2.3M", label: "Annual Savings", description: "Through improved efficiency and reduced waste" },
      { metric: "99.2%", label: "Delivery Accuracy", description: "Real-time tracking and route optimization" },
      { metric: "45%", label: "Faster Processing", description: "Automated workflows and decision-making" }
    ],
    technologies: ["IoT Sensors", "Machine Learning", "Real-time Analytics", "Cloud Computing", "Mobile Apps"],
    timeline: "12 weeks from concept to full deployment",
    testimonial: {
      quote: "Dystinction transformed our entire supply chain operation. The ROI was evident within 3 months, and we're now operating at efficiency levels we never thought possible.",
      author: "Sarah Johnson",
      title: "CTO, Global Manufacturing Corp"
    },
    keyFeatures: [
      "Real-time IoT sensor network across all facilities",
      "Predictive analytics for demand forecasting",
      "Automated inventory reordering system",
      "Mobile dashboards for field operations",
      "Integration with existing ERP systems"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  "data-intelligence-suite": {
    icon: Heart,
    industry: "Healthcare",
    title: "Data Intelligence Suite",
    subtitle: "Unifying Patient Data Across 12 Disparate Systems",
    client: "Regional Healthcare Network",
    challenge: "Patient data was scattered across 12 different systems, making it impossible to get a complete view of patient health and care history.",
    fullChallenge: "A major healthcare network with 8 hospitals and 45 clinics was struggling with fragmented patient data. Critical information was trapped in silos, leading to delayed diagnoses, duplicate tests, and compromised patient care. The lack of data integration was costing $4.1M annually in inefficiencies.",
    solution: "Unified healthcare platform with HIPAA-compliant data integration and AI-powered analytics.",
    fullSolution: "We built a comprehensive data intelligence platform that securely integrates all patient data sources while maintaining strict HIPAA compliance. The solution includes AI-powered analytics for clinical decision support and predictive health insights.",
    results: [
      { metric: "67%", label: "Faster Diagnosis", description: "Complete patient view enables quicker decision-making" },
      { metric: "45%", label: "Cost Reduction", description: "Eliminated duplicate tests and procedures" },
      { metric: "99.99%", label: "System Uptime", description: "Mission-critical reliability for patient care" },
      { metric: "89%", label: "Provider Satisfaction", description: "Streamlined workflows and better tools" }
    ],
    technologies: ["FHIR Integration", "AI Analytics", "Secure APIs", "Blockchain", "Mobile Health Apps"],
    timeline: "16 weeks with phased rollout across facilities",
    testimonial: {
      quote: "The unified platform has revolutionized how we deliver patient care. Having complete, real-time access to patient data has dramatically improved our clinical outcomes.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer, Regional Healthcare Network"
    },
    keyFeatures: [
      "FHIR-compliant data integration across all systems",
      "AI-powered clinical decision support",
      "Real-time patient monitoring dashboards",
      "Secure mobile access for healthcare providers",
      "Predictive analytics for population health"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  "security-compliance-framework": {
    icon: Shield,
    industry: "Financial Services",
    title: "Security & Compliance Framework",
    subtitle: "From Failed Audits to 100% Compliance Success",
    client: "Premier Financial Institution",
    challenge: "Failed 3 major security audits in 18 months due to inadequate compliance frameworks and security vulnerabilities.",
    fullChallenge: "A mid-size financial institution was facing regulatory pressure after failing multiple security audits. Their legacy systems had numerous vulnerabilities, and manual compliance processes were error-prone and time-consuming. The company faced potential fines of $2.8M and reputation damage.",
    solution: "Zero-trust security architecture with automated compliance monitoring and reporting.",
    fullSolution: "We implemented a comprehensive zero-trust security framework with automated compliance monitoring. The solution includes continuous security assessment, automated reporting, and blockchain-based audit trails for complete transparency.",
    results: [
      { metric: "100%", label: "Audit Success", description: "Passed all subsequent security and compliance audits" },
      { metric: "85%", label: "Threat Reduction", description: "Advanced threat detection and prevention" },
      { metric: "60%", label: "Compliance Cost Savings", description: "Automated processes reduced manual effort" },
      { metric: "24/7", label: "Security Monitoring", description: "Continuous threat detection and response" }
    ],
    technologies: ["Zero Trust Architecture", "Automated Testing", "Blockchain", "AI Security", "Cloud Security"],
    timeline: "14 weeks with continuous monitoring setup",
    testimonial: {
      quote: "Dystinction not only solved our compliance issues but gave us a security framework that's future-proof. We now exceed industry standards rather than struggling to meet them.",
      author: "James Rodriguez",
      title: "CISO, Premier Financial Institution"
    },
    keyFeatures: [
      "Zero-trust network architecture implementation",
      "Automated compliance monitoring and reporting",
      "Blockchain-based audit trail system",
      "AI-powered threat detection and response",
      "Continuous security assessment tools"
    ],
    gradient: "from-purple-500 to-violet-500"
  },
  "operations-dashboard": {
    icon: BarChart3,
    industry: "Logistics",
    title: "Operations Dashboard",
    subtitle: "Global Visibility for Complex Logistics Operations",
    client: "International Logistics Company",
    challenge: "No real-time visibility into global operations across 23 countries, leading to inefficient resource allocation and poor customer service.",
    fullChallenge: "A global logistics company with operations in 23 countries had no centralized view of their operations. Decision-making was slow, resource allocation was inefficient, and customer service suffered due to lack of real-time information. The company was losing $1.7M annually due to operational inefficiencies.",
    solution: "Centralized command center with predictive insights and real-time operational intelligence.",
    fullSolution: "We created a comprehensive operations intelligence platform that provides real-time visibility across all global operations. The solution includes predictive analytics for demand forecasting, automated resource allocation, and customer communication tools.",
    results: [
      { metric: "54%", label: "Efficiency Gain", description: "Optimized resource allocation and routing" },
      { metric: "32%", label: "Cost Reduction", description: "Improved operational efficiency and automation" },
      { metric: "91%", label: "On-time Delivery", description: "Predictive analytics and route optimization" },
      { metric: "76%", label: "Customer Satisfaction", description: "Improved communication and reliability" }
    ],
    technologies: ["Real-time Data Processing", "Predictive AI", "Mobile Apps", "IoT Integration", "Cloud Computing"],
    timeline: "10 weeks with global rollout over 6 months",
    testimonial: {
      quote: "The operations dashboard gave us the global visibility we desperately needed. We can now make informed decisions in real-time and have dramatically improved our customer service.",
      author: "Maria Santos",
      title: "COO, International Logistics Company"
    },
    keyFeatures: [
      "Real-time global operations dashboard",
      "Predictive analytics for demand forecasting",
      "Automated resource allocation system",
      "Customer communication portal",
      "Mobile apps for field operations"
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