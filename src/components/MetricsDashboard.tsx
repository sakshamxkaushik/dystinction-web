import { useState, useEffect } from "react";
import { Activity, Clock, Database, Users, Zap } from "lucide-react";
import { Cover } from "./ui/cover";

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
    <div className="glass-card group ">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-right">
          <div className="text-xs text-secondary font-medium">{trend}</div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-2xl font-bold text-foreground ">
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
      label: "Place an order, get a response—and delivery—faster than before.",
      value: "30% Shorter Order Cycles",
      trend: "↗ +0.1%",
      delay: 200
    },
    {
      icon: Clock,
      label: "Only real, responsive vendors. No more chasing or wasted calls.",
      value: "2x Increase in Quality Supplier Matches ",
      trend: "↗ -15ms",
      delay: 400
    },
    {
      icon: Database,
      label: "Cut down on approvals, tracking, and manual follow-ups.",
      value: "50% Fewer Paperwork Hours",
      trend: "↗ +2.3M",
      delay: 600
    },
    {
      icon: Users,
      label: "Our team and your platform—ready whenever you need help.",
      value: "Always-On Support",
      trend: "",
      delay: 800
    }
    // {
    //   icon: Zap,
    //   label: "Deployments Today",
    //   value: "24",
    //   trend: "↗ +8",
    //   delay: 1000
    // }
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
            Results That Matter, Value You Can {" "}
            {/* <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> */}
              <Cover >Measure</Cover>
            {/* </span> */}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Dystinction transforms procurement for Indian enterprises—making every order faster, every rupee smarter.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
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