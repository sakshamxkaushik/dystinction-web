import { TrendingUp, Zap, Shield, Rocket } from "lucide-react";

const benchmarks = [
  {
    icon: TrendingUp,
    metric: "25%",
    label: "Faster Throughput",
    description: "vs. manual workflows",
    color: "text-green-400"
  },
  {
    icon: Rocket,
    metric: "5x",
    label: "Prototype Iteration Speed", 
    description: "Faster testing and feedback loops",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    metric: "3",
    label: "Key Bugs Prevented",
    description: "In early product testing",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    metric: "100%", 
    label: "Deployment Reliability",
    description: "Stable updates so far",
    color: "text-yellow-400"
  }
];

const PerformanceBenchmarks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-muted-foreground">Performance Metrics</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platforms don't just meet enterprise requirements—they exceed them. 
            Here's how we measure success for our clients.
          </p>
        </div>

        {/* Benchmarks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benchmarks.map((benchmark, index) => (
            <div 
              key={index}
              className="glass-card text-center group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300`}>
                  <benchmark.icon className={`w-8 h-8 ${benchmark.color}`} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className={`text-4xl md:text-5xl font-bold ${benchmark.color} group-hover:text-glow transition-all duration-300`}>
                  {benchmark.metric}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {benchmark.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benchmark.description}
                </div>
              </div>

              {/* Animated accent line */}
              <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 group-hover:animate-pulse"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.99%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
              <div className="text-xs text-green-400">↗ Above industry standard</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">&lt;50ms</div>
              <div className="text-muted-foreground">Average Response Time</div>
              <div className="text-xs text-blue-400">↗ 10x faster than typical</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">0</div>
              <div className="text-muted-foreground">Data Breaches</div>
              <div className="text-xs text-purple-400">↗ Bank-grade security</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full blur-sm float" />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-secondary/30 rounded-full blur-sm float-delay" />
    </section>
  );
};

export default PerformanceBenchmarks;