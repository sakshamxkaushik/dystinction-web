import { useState, useEffect } from "react";
import { Activity, Clock, Database, Users, Zap } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
  delay?: number;
}

const MetricCard = ({ icon: Icon, label, value, trend, delay = 0 }: MetricCardProps) => {
  const [currentValue, setCurrentValue] = useState("0");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="glass-card group hover:scale-105 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-right">
          <div className="text-xs text-secondary font-medium">{trend}</div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-2xl font-bold text-foreground group-hover:text-glow transition-all duration-300">
          {currentValue}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
      
      {/* Liquid progress indicator */}
      <div className="mt-4 w-full h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
          style={{ width: currentValue.includes('%') ? currentValue : '75%' }}
        />
      </div>
    </div>
  );
};

const MetricsDashboard = () => {
  const metrics = [
    {
      icon: Activity,
      label: "System Uptime",
      value: "99.9%",
      trend: "↗ +0.1%",
      delay: 200
    },
    {
      icon: Clock,
      label: "API Response Time",
      value: "<100ms",
      trend: "↗ -15ms",
      delay: 400
    },
    {
      icon: Database,
      label: "Daily Data Processing",
      value: "10M",
      trend: "↗ +2.3M",
      delay: 600
    },
    {
      icon: Users,
      label: "Active Users",
      value: "50K+",
      trend: "↗ +12%",
      delay: 800
    },
    {
      icon: Zap,
      label: "Deployments Today",
      value: "24",
      trend: "↗ +8",
      delay: 1000
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live Enterprise Metrics</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real-Time Platform{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our enterprise platforms deliver measurable results with transparent, 
            real-time monitoring across all critical infrastructure components.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Additional real-time status */}
        <div className="mt-12 glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring & Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">5-9s</div>
              <div className="text-muted-foreground">Reliability SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;2min</div>
              <div className="text-muted-foreground">Incident Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default MetricsDashboard;