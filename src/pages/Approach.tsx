import { Button } from "@/components/ui/button";
import { Calendar, Users, Target, Lightbulb, Cog, Rocket, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution is measured against real business outcomes. We don't just deliver software—we deliver competitive advantages.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We become an extension of your team, working closely with stakeholders to understand your unique challenges and goals.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Security, scalability, and reliability are built into every solution from day one—not added as afterthoughts.",
    color: "text-purple-400"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "We leverage cutting-edge technologies and methodologies to ensure your solutions remain competitive for years to come.",
    color: "text-orange-400"
  }
];

const methodology = [
  {
    phase: "Discovery",
    duration: "1-2 weeks",
    icon: Target,
    title: "Deep Dive Analysis",
    description: "We immerse ourselves in your business, understanding your challenges, goals, and constraints through comprehensive stakeholder interviews and technical assessments.",
    deliverables: [
      "Stakeholder interview summaries",
      "Technical infrastructure audit",
      "Business process documentation",
      "Requirements specification",
      "Success metrics definition"
    ]
  },
  {
    phase: "Strategy",
    duration: "1-2 weeks", 
    icon: Lightbulb,
    title: "Solution Architecture",
    description: "We design comprehensive solutions that address your immediate needs while providing a foundation for future growth and scalability.",
    deliverables: [
      "Technical architecture diagrams",
      "Implementation roadmap",
      "Technology stack recommendations",
      "Integration strategy",
      "Risk assessment and mitigation plan"
    ]
  },
  {
    phase: "Development",
    duration: "6-16 weeks",
    icon: Cog,
    title: "Agile Implementation",
    description: "Our experienced team builds your solution using proven methodologies, with regular check-ins and iterative improvements based on your feedback.",
    deliverables: [
      "Working software increments",
      "Regular progress demos",
      "Code quality reports",
      "Performance benchmarks",
      "Security testing results"
    ]
  },
  {
    phase: "Deployment",
    duration: "2-4 weeks",
    icon: Rocket,
    title: "Seamless Launch",
    description: "We ensure smooth deployment with comprehensive testing, user training, and ongoing support to maximize adoption and success.",
    deliverables: [
      "Production deployment",
      "User training materials",
      "Support documentation",
      "Monitoring setup",
      "Success metrics tracking"
    ]
  }
];

const differentiators = [
  {
    title: "Enterprise Experience",
    description: "Our team has built solutions for Fortune 500 companies across industries, bringing deep enterprise knowledge to every project.",
    stat: "50+ Enterprise Clients"
  },
  {
    title: "Proven Methodologies",
    description: "We use battle-tested approaches refined through hundreds of successful implementations, reducing risk and ensuring predictable outcomes.",
    stat: "156 Projects Delivered"
  },
  {
    title: "Technology Excellence",
    description: "We stay at the forefront of enterprise technology, leveraging the latest tools and frameworks to build future-proof solutions.",
    stat: "99.9% System Uptime"
  },
  {
    title: "Measurable Results",
    description: "Every engagement is structured around clear success metrics, with regular reporting on progress toward your business objectives.",
    stat: "$127M Client Savings"
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
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Approach</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We combine deep enterprise expertise with proven methodologies to deliver solutions that not only meet your immediate needs but provide a foundation for long-term competitive advantage.
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
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
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
            <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
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
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
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