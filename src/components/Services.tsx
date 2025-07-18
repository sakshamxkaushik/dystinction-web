import { Button } from "@/components/ui/button";
import { Layers, Database, Cloud, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layers,
    title: "Platform Engineering",
    subtitle: "Architected for Scale From Day One",
    description: "Custom enterprise platforms built with microservices architecture, designed to handle millions of users while maintaining lightning-fast performance.",
    features: ["Microservices Architecture", "Auto-scaling Infrastructure", "API-first Design", "Enterprise Security"],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Data & Integration",
    subtitle: "Business Clarity Through Powerful Pipelines",
    description: "Transform your data chaos into strategic advantage with real-time pipelines, intelligent analytics, and seamless system integrations.",
    features: ["Real-time Analytics", "ETL Pipelines", "System Integration", "Data Governance"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    subtitle: "Resilient, Secure, and Cost-Optimized",
    description: "Multi-cloud strategies that ensure 99.99% uptime while optimizing costs and maintaining bank-grade security standards.",
    features: ["Multi-Cloud Strategy", "DevOps Automation", "Security Compliance", "Cost Optimization"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Process Automation",
    subtitle: "Business Logic That Thinks Ahead",
    description: "Intelligent automation that learns your business processes and continuously optimizes workflows for maximum efficiency.",
    features: ["Workflow Automation", "AI-Driven Optimization", "Custom Integrations", "Business Rules Engine"],
    gradient: "from-purple-500 to-pink-500"
  }
];

const Services = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Core Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise Solutions{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Built Right
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in four core areas that transform enterprise operations. 
            Each service is designed to scale with your business and deliver measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-primary w-full justify-between"
                  asChild
                >
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}>
                    Learn More About {service.title}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every enterprise is unique. Our team specializes in crafting bespoke solutions 
              that address your specific challenges and business objectives.
            </p>
            <Button variant="liquid" size="lg" asChild>
              <Link to="/book-consultation">
                Discuss Your Requirements
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Services;