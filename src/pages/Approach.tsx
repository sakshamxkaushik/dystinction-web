import { Button } from "@/components/ui/button";
import { Calendar, Users, Target, Lightbulb, Cog, Rocket, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Outcomes Over Outputs",
    description: "Every engagement is measured by real business results: better procurement, faster cycles, and true ROI. We go beyond delivery—we drive your success.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work as a real extension of your procurement and ops team, proactive in solving your unique challenges and unlocking opportunity.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Built for Trust",
    description: "Security, scalability, and reliability are never compromised. Your business and data are safe, every step of the way.",
    color: "text-purple-400"
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description: "We bring the latest digital tools and thinking, making complex B2B processes simple—and keeping you ahead in a fast-moving market.",
    color: "text-orange-400"
  }
];


const methodology = [
  {
    phase: "Discovery",
    duration: "1 week",
    icon: Target,
    title: "Process Deep-Dive",
    description: "We map your buying journey, highlight bottlenecks, find opportunities, and define clear KPIs for improvement.",
    deliverables: [
      "Procurement bottleneck analysis",
      "Stakeholder workshops",
      "Baseline process mapping",
      "ROI benchmarks"
    ]
  },
  {
    phase: "Strategy",
    duration: "1 week",
    icon: Lightbulb,
    title: "Blueprint for Better",
    description: "We design workflows and digital tools tailored to Indian B2B realities—so you get fast, lasting improvement.",
    deliverables: [
      "Optimized workflow blueprint",
      "Digital tool recommendations",
      "Implementation roadmap",
      "Risk & advantage assessment"
    ]
  },
  {
    phase: "Development",
    duration: "4-10 weeks",
    icon: Cog,
    title: "Rapid Build",
    description: "Your new procurement system is assembled, tested, and fine-tuned. We keep teams in the loop with regular check-ins.",
    deliverables: [
      "Procurement platform setup",
      "System integrations (ERP, accounting)",
      "Automated approval flows",
      "Onboarding materials"
    ]
  },
  {
    phase: "Launch & Support",
    duration: "Ongoing",
    icon: Rocket,
    title: "Impact, Delivered",
    description: "Quick rollout. Fast value. You get training, 24/7 support, and improvement based on live business feedback.",
    deliverables: [
      "Seamless launch to all users",
      "Team training & Q&A",
      "Process monitoring dashboard",
      "Dedicated support"
    ]
  }
];

const differentiators = [
  {
    title: "Enterprise Scale, Indian Context",
    description: "We’ve solved procurement and process challenges for India’s largest manufacturers, logistics majors, and service powerhouses.",
    stat: "26+ Enterprise Clients"
  },
  {
    title: "Predictable, Proven Results",
    description: "Hundreds of rollouts—always on time, always delivering measurable gains for cycle time, cost, and supplier response.",
    stat: "156 Projects Delivered"
  },
  {
    title: "Technology—But Practical",
    description: "We connect to the tools you use (finance, ERP, vendor portals) and ensure reliability so you focus on business, not fixes.",
    stat: "99.9% Uptime"
  },
  {
    title: "Value Tracked, Savings Realized",
    description: "Every rupee, every hour saved is measured and reported to you. We only win if you do.",
    stat: "₹1,060Cr+ Savings"
  }
];

const Approach = () => {
  return (
    <div className="min-h-screen bg-gradient-hero pt-20 sm:pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Methodology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Approach to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Procurement Transformation

</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Dystinction delivers real B2B impact—mapping your processes, designing for Indian realities, and rolling out solutions that simply work.


          </p>

          <Button variant="liquid" size="lg" asChild>
            <Link to="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Strategy Discussion
            </Link>
          </Button>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values, Your Advantage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-muted/20 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The 4-Step Roadmap: From Chaos to Clarity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 4-phase approach that ensures project success and delivers measurable business value.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <div key={index} className="glass-card p-8 group hover:scale-[1.01] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Phase Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phase {index + 1}</div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <div className="text-sm text-primary font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold mb-4 text-primary">Key Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, delivIndex) => (
                        <div key={delivIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <span className="text-sm text-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Leading Businesses Trust Dystinction</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The differentiators that make Dystinction the right choice for your enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-glow transition-all duration-300">
                  {diff.stat}
                </div>
                <h3 className="text-xl font-bold mb-4">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="glass-card p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Dystinction Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our proven approach can transform your enterprise operations into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="liquid" size="lg" asChild>
                <Link to="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Approach;