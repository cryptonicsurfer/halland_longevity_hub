import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";
import { MapPin } from "@/components/ui/map-pin";

// Features of the Longevity Hub
const hubFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
      </svg>
    ),
    title: "Culinary Research Lab",
    description: "Exploring how traditional Nordic ingredients and preparation methods contribute to longevity."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ),
    title: "Personalized Wellness",
    description: "Individual assessments and programs tailored to genetic profiles and lifestyle factors."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Nature Immersion",
    description: "Programs that leverage Halland's natural landscapes for physical and mental wellbeing."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Health Tourism",
    description: "Immersive experiences for visitors seeking to learn and apply Halland's longevity principles."
  }
];

// Map markers for the interactive map
const mapMarkers = [
  {
    id: 1,
    top: "25%",
    left: "33%",
    label: "Longevity Research Center"
  },
  {
    id: 2,
    top: "50%",
    left: "66%",
    label: "Culinary Innovation Hub"
  },
  {
    id: 3,
    top: "66%",
    left: "25%",
    label: "Wellness Tourism Center"
  }
];

export function LongevityHubSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="longevity-hub" className="py-20 md:py-32 bg-neutral-100" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:space-x-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={itemVariants}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              The Falkenberg Longevity Hub
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              At the heart of our vision is the Falkenberg Longevity Hub, a groundbreaking center where visitors can experience the interconnection of nutrition, movement, nature, and community.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              The hub features research facilities, culinary innovation spaces, health assessment centers, and immersive educational programs—all designed to explore and share the secrets of Halland's extraordinary longevity.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              {hubFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-accent mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            {/* Interactive Map */}
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                alt="Aerial view of Falkenberg, Halland" 
                className="w-full h-full object-cover"
              />
                 
              {/* Map Overlay Elements */}
              <div className="absolute inset-0 z-20">
                {mapMarkers.map((marker) => (
                  <MapPin 
                    key={marker.id}
                    style={{ top: marker.top, left: marker.left }}
                    label={marker.label}
                  />
                ))}
              </div>
              
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 z-30 bg-white/90 p-2 rounded-lg shadow-md flex space-x-2">
                <button className="p-1 hover:text-accent transition-colors duration-300" aria-label="Zoom in">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
                <button className="p-1 hover:text-accent transition-colors duration-300" aria-label="Zoom out">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path>
                  </svg>
                </button>
                <button className="p-1 hover:text-accent transition-colors duration-300" aria-label="Reset view">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a href="#" className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300 font-medium">
                <span>Explore the interactive map in detail</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
