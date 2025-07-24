import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Calendar, ArrowRight } from "lucide-react";
import { Layers, Database, Cloud, Zap } from "lucide-react";
import { Cover } from "@/components/ui/cover";

const servicesData = {
  "platform-engineering": {
    icon: Layers,
    title: "Digital Procurement Platforms",
    subtitle: "One Source of Truth—From Request to Order",
    description: "Unify all your procurement workflows, approvals, and supplier management on a seamless, modern platform. No more scattered requests, email chains, or lost orders.",
    fullDescription: "Our digital procurement solutions centralize every part of sourcing—from automated RFQs to digital approval flows, supplier onboarding, and live tracking. You get transparency, control, and speed on every order—empowering your team to work smarter and scale business spending with confidence.",
    benefits: [
      "Centralized supplier onboarding & records",
      "Automated request-for-quote (RFQ) flows",
      "One-click order approvals & tracking",
      "Live order and fulfillment status",
      "Supplier performance dashboards",
      "Easy compliance & audit trail access",
      "User roles for buyer, finance, & admin teams",
      "Scalable to thousands of actions per day"
    ],
    technologies: ["React", "Node.js", "AWS/Azure/GCP", "PostgreSQL", "Redis", "GraphQL", "Kubernetes (as backbone)"],
    process: [
      { step: "Workflow Mapping", duration: "1-2 weeks", description: "Analyze your current buying processes and pain points." },
      { step: "Rapid Prototyping", duration: "2-3 weeks", description: "Build and demo critical workflows for feedback." },
      { step: "Custom Development", duration: "8-12 weeks", description: "Deliver the full platform, including integrations and training." },
      { step: "Go-Live & Optimization", duration: "2-3 weeks", description: "Onboard your team, collect feedback, and optimize." }
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  "data-integration": {
    icon: Database,
    title: "Spend & Supplier Analytics",
    subtitle: "Better Insights, Smarter Sourcing",
    description: "Turn procurement data into business value. Get real-time clarity on spend, supplier performance, and savings—so you can drive every decision with facts, not gut-feeling.",
    fullDescription: "We break down data silos to create a single source for spend, supplier stats, and audit trails. Visual dashboards and automated reports give you the tools to identify savings, manage risk, and optimize your sources—across every category and vendor.",
    benefits: [
      "One-click spend visibility, by category or team",
      "Supplier scorecards & compliance tracking",
      "Real-time savings and leakage reporting",
      "Custom analytics tailored to your KPIs",
      "Automated reconciliation with finance",
      "Alerts for contract renewals or risk",
      "Downloadable audit and compliance trails",
      "Secure data privacy controls"
    ],
    technologies: ["Snowflake", "Elasticsearch", "Python", "Tableau", "PowerBI", "Superset", "AWS/GCP Data Services"],
    process: [
      { step: "Data Discovery", duration: "1 week", description: "Collect and map procurement & supplier data sources." },
      { step: "Reporting Blueprint", duration: "2-3 weeks", description: "Design intuitive dashboards and alerts for business users." },
      { step: "Integration & Build", duration: "6-10 weeks", description: "Connect systems, automate flows, and validate outputs." },
      { step: "Training & Rollout", duration: "2-4 weeks", description: "Train stakeholders, enhance tools, and support adoption." }
    ],
    gradient: "from-green-500 to-teal-500"
  },
  "cloud-infrastructure": {
    icon: Cloud,
    title: "Seamless Integrations",
    subtitle: "Connect Everything—Finance, ERP, Inventory, and More",
    description: "Eliminate double data entry and avoid mismatches. We bring your procurement and business apps together for smoother budgets, easy compliance, and no missed paperwork.",
    fullDescription: "Our experts plug procurement into your existing tech stack—finance, inventory, and ERP—so you run one unified process. Whether on cloud or hybrid, everything stays in sync, visibility is instant, and data is always where you need it.",
    benefits: [
      "Fast plug-in to ERPs and inventory systems",
      "GST-compliant invoice and document flows",
      "Seamless sync of orders, receipts and payments",
      "Cloud hosting for reliability and security",
      "No more manual spreadsheet merges",
      "Automated backup & disaster recovery",
      "Audit trails across every system",
      "Real-time access from web or mobile"
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "SAP Integration", "REST APIs", "Webhook Automations"],
    process: [
      { step: "Integration Planning", duration: "1-2 weeks", description: "Map business-critical tools and data sources." },
      { step: "Connector Design", duration: "2 weeks", description: "Set up secure, real-time data links." },
      { step: "Implementation", duration: "6-12 weeks", description: "Sync, validate, and automate data movement." },
      { step: "Support & Monitoring", duration: "Ongoing", description: "Continuously maintain and adapt as you grow." }
    ],
    gradient: "from-orange-500 to-red-500"
  },
  "process-automation": {
    icon: Zap,
    title: "Process Automation",
    subtitle: "Let Your Procurement Run On Autopilot",
    description: "Automate repetitive approvals, reminders, and updates. With our intelligent automation, your team spends less time chasing, more time growing.",
    fullDescription: "We help businesses set up workflows and business rules that work in the background. From auto-routing requests for approval, to digital document management and real-time nudges—your buying gets faster and no step gets stuck.",
    benefits: [
      "Automated approval and escalation flows",
      "Smart reminders for suppliers and approvers",
      "Digital document management & e-signature",
      "Exception alerts—fix issues before they become bottlenecks",
      "No more manual status checks or email follow-ups",
      "Flexible rules for finance, quality, and compliance needs",
      "Track cycle time and SLA adherence",
      "Easy visual editing for business users"
    ],
    technologies: ["UiPath", "Power Automate", "Python", "APIs", "RPA tools", "Cloud functions"],
    process: [
      { step: "Workflow Mapping", duration: "1-2 weeks", description: "Catalog repetitive tasks and approval paths." },
      { step: "Design & Validation", duration: "2-3 weeks", description: "Create automation flows and gather business feedback." },
      { step: "Automation Rollout", duration: "4-8 weeks", description: "Implement, test, and refine automations." },
      { step: "Ongoing Optimization", duration: "2-3 weeks", description: "Monitor performance, add enhancements as needed." }
    ],
    gradient: "from-purple-500 to-pink-500"
  }
};


const ServicesPage = () => {
  const { serviceId } = useParams();
  
  if (!serviceId || !servicesData[serviceId as keyof typeof servicesData]) {
    return <ServicesOverview />;
  }

  const service = servicesData[serviceId as keyof typeof servicesData];
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Back navigation */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6`}>
            <ServiceIcon className="w-16 h-16 text-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-primary font-medium mb-4">
            {service.subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {service.fullDescription}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Benefits */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{step.step}</h3>
                        <span className="text-sm text-muted-foreground">({step.duration})</span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-muted/50 text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA */}
            <div className="glass-card p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="font-bold text-lg mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Schedule a free consultation to discuss your {service.title.toLowerCase()} needs.
              </p>
              <Button variant="liquid" className="w-full" asChild>
                <Link to="/book-consultation">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            {/* Related Services */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Related Services</h3>
              <div className="space-y-3">
                {Object.entries(servicesData)
                  .filter(([key]) => key !== serviceId)
                  .slice(0, 3)
                  .map(([key, relatedService]) => (
                    <Link
                      key={key}
                      to={`/services/${key}`}
                      className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <relatedService.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {relatedService.title}
                        </span>
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

const ServicesOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our  
            <Cover>Services</Cover>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to transform your operations and drive competitive advantage.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(servicesData).map(([key, service]) => (
            <div 
              key={key}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-primary w-full justify-between"
                  asChild
                >
                  <Link to={`/services/${key}`}>
                    Learn More About {service.title}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;