import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Calendar, ArrowRight } from "lucide-react";
import { Layers, Database, Cloud, Zap } from "lucide-react";

const servicesData = {
  "platform-engineering": {
    icon: Layers,
    title: "Platform Engineering",
    subtitle: "Architected for Scale From Day One",
    description: "Build enterprise platforms that grow with your business, handling millions of users while maintaining lightning-fast performance.",
    fullDescription: "Our platform engineering expertise combines modern microservices architecture with enterprise-grade scalability requirements. We design systems that not only meet your current needs but anticipate future growth challenges.",
    benefits: [
      "Microservices architecture for independent scaling",
      "Auto-scaling infrastructure that responds to demand",
      "API-first design for seamless integrations",
      "Enterprise security built into every layer",
      "Container orchestration with Kubernetes",
      "Event-driven architecture for real-time responses",
      "Load balancing and failover mechanisms",
      "Performance monitoring and optimization"
    ],
    technologies: ["Kubernetes", "Docker", "AWS/Azure/GCP", "Node.js", "React", "GraphQL", "Redis", "PostgreSQL"],
    process: [
      { step: "Architecture Assessment", duration: "1-2 weeks", description: "Analyze current systems and design scalable architecture" },
      { step: "Proof of Concept", duration: "2-3 weeks", description: "Build and validate core platform components" },
      { step: "Development & Testing", duration: "8-12 weeks", description: "Full platform development with comprehensive testing" },
      { step: "Deployment & Optimization", duration: "2-3 weeks", description: "Production deployment with performance tuning" }
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  "data-integration": {
    icon: Database,
    title: "Data & Integration",
    subtitle: "Business Clarity Through Powerful Pipelines",
    description: "Transform your data chaos into strategic advantage with real-time pipelines, intelligent analytics, and seamless system integrations.",
    fullDescription: "We specialize in creating unified data ecosystems that break down silos and provide real-time insights across your entire organization. Our integration solutions connect disparate systems while maintaining data integrity and security.",
    benefits: [
      "Real-time data streaming and processing",
      "ETL/ELT pipeline automation",
      "Cross-system integration and synchronization",
      "Data governance and quality assurance",
      "Advanced analytics and reporting",
      "Machine learning model integration",
      "Data warehouse optimization",
      "Compliance and audit trail maintenance"
    ],
    technologies: ["Apache Kafka", "Elasticsearch", "Snowflake", "Databricks", "Apache Airflow", "Python", "Spark", "Tableau"],
    process: [
      { step: "Data Audit", duration: "1 week", description: "Map existing data sources and identify integration points" },
      { step: "Pipeline Design", duration: "2-3 weeks", description: "Design data flow architecture and transformation logic" },
      { step: "Implementation", duration: "6-10 weeks", description: "Build pipelines, integrations, and analytics dashboards" },
      { step: "Optimization", duration: "2-4 weeks", description: "Performance tuning and monitoring setup" }
    ],
    gradient: "from-green-500 to-teal-500"
  },
  "cloud-infrastructure": {
    icon: Cloud,
    title: "Cloud Infrastructure",
    subtitle: "Resilient, Secure, and Cost-Optimized",
    description: "Multi-cloud strategies that ensure 99.99% uptime while optimizing costs and maintaining bank-grade security standards.",
    fullDescription: "Our cloud infrastructure solutions provide the foundation for scalable, secure, and cost-effective enterprise operations. We design resilient architectures that automatically handle traffic spikes while optimizing resource usage.",
    benefits: [
      "Multi-cloud and hybrid cloud strategies",
      "Infrastructure as Code (IaC) implementation",
      "DevOps automation and CI/CD pipelines",
      "Security compliance and monitoring",
      "Cost optimization and resource management",
      "Disaster recovery and backup solutions",
      "Container orchestration and management",
      "Network security and access control"
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Ansible", "Jenkins", "Prometheus", "Grafana"],
    process: [
      { step: "Infrastructure Assessment", duration: "1-2 weeks", description: "Evaluate current infrastructure and security posture" },
      { step: "Cloud Strategy", duration: "2 weeks", description: "Design optimal cloud architecture and migration plan" },
      { step: "Migration & Setup", duration: "6-12 weeks", description: "Implement infrastructure and migrate workloads" },
      { step: "Optimization", duration: "Ongoing", description: "Continuous monitoring and cost optimization" }
    ],
    gradient: "from-orange-500 to-red-500"
  },
  "process-automation": {
    icon: Zap,
    title: "Process Automation",
    subtitle: "Business Logic That Thinks Ahead",
    description: "Intelligent automation that learns your business processes and continuously optimizes workflows for maximum efficiency.",
    fullDescription: "We create intelligent automation systems that not only handle repetitive tasks but also make smart decisions based on business rules and machine learning. Our solutions adapt and improve over time, becoming more efficient as they learn from your operations.",
    benefits: [
      "Workflow automation and orchestration",
      "AI-driven process optimization",
      "Custom business rules engines",
      "Integration with existing systems",
      "Real-time monitoring and alerts",
      "Exception handling and human oversight",
      "Audit trails and compliance reporting",
      "Scalable processing capabilities"
    ],
    technologies: ["Zapier", "Microsoft Power Automate", "UiPath", "Python", "Machine Learning", "APIs", "Webhooks", "RPA"],
    process: [
      { step: "Process Mapping", duration: "1-2 weeks", description: "Document current workflows and identify automation opportunities" },
      { step: "Automation Design", duration: "2-3 weeks", description: "Design intelligent automation workflows and business rules" },
      { step: "Development & Testing", duration: "4-8 weeks", description: "Build automation systems with comprehensive testing" },
      { step: "Deployment & Training", duration: "2-3 weeks", description: "Deploy systems and train your team" }
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
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
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