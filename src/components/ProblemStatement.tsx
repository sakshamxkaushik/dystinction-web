import { AlertTriangle, Database, Link, Cog, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Link,
    title: "Disconnected Tools",
    description: "Multiple systems that don't communicate, creating data silos and workflow bottlenecks.",
    impact: "47% productivity loss"
  },
  {
    icon: TrendingDown,
    title: "Scaling Bottlenecks", 
    description: "Infrastructure that breaks under load, limiting business growth and user experience.",
    impact: "3x slower response times"
  },
  {
    icon: Database,
    title: "Data Silos",
    description: "Critical business intelligence trapped in isolated systems, preventing informed decisions.",
    impact: "60% delayed decisions"
  },
  {
    icon: Cog,
    title: "Manual Processes",
    description: "Time-consuming manual workflows that should be automated, draining team productivity.",
    impact: "$2M+ annual waste"
  }
];

const ProblemStatement = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-muted-foreground">Business Challenges</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Is Your Business Held Back By{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              These Challenges?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise growth shouldn't be limited by outdated systems. 
            We identify and eliminate the technical barriers holding your business back.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card group hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {problem.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium">
                    <TrendingDown className="w-3 h-3" />
                    {problem.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution teaser */}
        <div className="glass-card p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform These Challenges Into{" "}
            <span className="text-primary">Competitive Advantages?</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our enterprise solutions are specifically designed to eliminate these pain points 
            and unlock your business's full potential through purpose-built technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Proven 90%+ efficiency gains</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>8-16 week implementation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>24/7 enterprise support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProblemStatement;