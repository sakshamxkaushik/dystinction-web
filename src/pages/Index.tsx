import Hero from "@/components/Hero";
import MetricsDashboard from "@/components/MetricsDashboard";
import ProblemStatement from "@/components/ProblemStatement";
import PerformanceBenchmarks from "@/components/PerformanceBenchmarks";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      <MetricsDashboard />
      <ProblemStatement />
      <PerformanceBenchmarks />
      <Services />
      <ProcessTimeline />
      <CaseStudies />
      <Contact />
    </div>
  );
};

export default Index;
