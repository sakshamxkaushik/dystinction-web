import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import CaseStudies from "./pages/CaseStudies";
import BookConsultation from "./pages/BookConsultation";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "@/components/ui/Footer";
import { HelmetProvider } from 'react-helmet-async';
import Chatbot from "./components/Chatbot";
import React from "react";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:caseId" element={<CaseStudies />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/contact" element={<BookConsultation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
