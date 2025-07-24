import { Button } from "@/components/ui/button";
import { Layers, Database, Cloud, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layers,
    title: "Digital Procurement Platforms",
    subtitle: "Sourcing Made Simple, Orders Done Fast",
    description:
      "Bring all your sourcing, supplier management, and approvals onto one platform. No more scattered forms or endless emails—get complete control and total clarity from request to delivery.",
    features: [
      "Centralized supplier onboarding",
      "Request-for-quote automation",
      "One-click order approvals",
      "Live order tracking"
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Spend & Vendor Analytics",
    subtitle: "Smarter Decisions, Every Single Time",
    description:
      "Unlock hidden savings and real supplier insights. Track every rupee, compare vendors instantly, and manage risk—see the value of your spending in real time, not as guesswork.",
    features: [
      "Spend dashboard & custom reports",
      "Supplier scorecards",
      "Savings opportunity alerts",
      "Compliance & audit trails"
    ],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cloud,
    title: "Seamless Integrations",
    subtitle: "All Your Tools. Finally In Sync.",
    description:
      "Connect procurement with your current finance, inventory or ERP systems—zero double-entry, no misplaced data, fewer errors. Fast, safe, and reliable.",
    features: [
      "ERP & finance system connectors",
      "Live inventory sync",
      "GST & documentation flow",
      "Secure cloud hosting"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Process Automation",
    subtitle: "From Chasing Paperwork to Building Value",
    description:
      "Say goodbye to repetitive approvals, manual follow-ups, and lost documents. Free your teams to focus on growth—let automation handle the rest.",
    features: [
      "Auto-reminders & approval workflows",
      "Digital document management",
      "Exception alerts & escalations",
      "Custom rule setup"
    ],
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