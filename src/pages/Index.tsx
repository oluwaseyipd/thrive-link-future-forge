
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Fixed theme toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <HeroSection />
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <HowItWorksSection />
      </ScrollReveal>
      
      <ScrollReveal delay={150}>
        <TestimonialsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <EventsSection />
      </ScrollReveal>
      
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default Index;
