import { Users, FileText, Percent, HelpCircle, Shield, Zap, TrendingUp } from "lucide-react";
import { Cover } from "@/components/ui/cover";

// Benchmarks—All procurement/business centric
const benchmarks = [
  {
    icon: TrendingUp,
    metric: "30%",
    label: "Faster Order Closures",
    description: "From request to delivery, now with less waiting.",
    color: "text-green-400"
  },
  {
    icon: Users,
    metric: "2x",
    label: "Supplier Response Rate", 
    description: "Double the active, verified vendor engagement.",
    color: "text-blue-400"
  },
  {
    icon: FileText,
    metric: "50%",
    label: "Reduction in Paperwork",
    description: "Automated approvals mean less manual effort.",
    color: "text-yellow-400"
  },
  {
    icon: Percent,
    metric: "Up to 20%",
    label: "Sourcing Cost Savings",
    description: "More visibility, better negotiating power.",
    color: "text-purple-400"
  }
];

const bottomStats = [
  {
    value: "99%",
    label: "On-Time Order Fulfillment",
    desc: "↗ Smoother, more dependable procurement cycles",
    color: "text-green-400"
  },
  {
    value: "24x7",
    label: "Procurement Support",
    desc: "↗ Help is always a call away",
    color: "text-blue-400"
  },
  {
    value: "0",
    label: "Missed Deadlines",
    desc: "↗ Bottlenecks solved before they arise",
    color: "text-purple-400"
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
            <span className="text-sm text-muted-foreground">Business Impact Metrics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Procurement Results{" "}
            <Cover className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              That Matter
            </Cover>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every improvement is designed to streamline B2B sourcing, amplify supplier trust, and make business buying smarter for Indian enterprises.
          </p>
        </div>

        {/* Benchmarks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benchmarks.map((benchmark, index) => (
            <div 
              key={index}
              className="glass-card text-center group"
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 `}>
                  <benchmark.icon className={`w-8 h-8 ${benchmark.color}`} />
                </div>
              </div>
              <div className="space-y-4">
                <div className={`text-4xl md:text-5xl font-bold ${benchmark.color}`}>
                  {benchmark.metric}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {benchmark.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benchmark.description}
                </div>
              </div>
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
            {bottomStats.map((stat, i) => (
              <div className="space-y-2" key={i}>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
                <div className={`text-xs ${stat.color}`}>{stat.desc}</div>
              </div>
            ))}
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
