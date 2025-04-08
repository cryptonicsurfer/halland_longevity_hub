import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { VisionSection } from "@/components/sections/vision-section";
import { ParallaxQuote } from "@/components/sections/parallax-quote";
import { ProjectsSection } from "@/components/sections/projects-section";
import { LongevityHubSection } from "@/components/sections/longevity-hub-section";
import { FoodNatureSection } from "@/components/sections/food-nature-section";
import { NewsSection } from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BackToTop } from "@/components/ui/back-to-top";
import { motion } from "framer-motion";

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen font-body text-neutral-900 bg-neutral-100 overflow-x-hidden"
    >
      <Navbar />
      
      <main>
        <HeroSection />
        <VisionSection />
        <ParallaxQuote />
        <ProjectsSection />
        <LongevityHubSection />
        <FoodNatureSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
