import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

// Advantages of Halland
const advantages = [
  {
    title: "Clean Coastal Environment",
    description: "Pristine waters providing some of the world's freshest seafood, rich in omega-3s and vital nutrients."
  },
  {
    title: "Traditional Food Preservation",
    description: "Ancient techniques like fermentation and curing that enhance nutritional profiles and promote gut health."
  },
  {
    title: "Year-Round Outdoor Activity",
    description: "A cultural commitment to outdoor recreation regardless of weather, supporting cardiovascular health and mental wellbeing."
  },
  {
    title: "Strong Social Bonds",
    description: "Community-oriented lifestyle that reduces isolation and promotes mental health—a key factor in longevity."
  }
];

export function FoodNatureSection() {
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
    <section className="py-20 md:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">The Halland Advantage</h2>
          <p className="text-lg text-neutral-600">
            Discover the unique combination of natural resources, culinary traditions, and lifestyle factors that make Halland a global hotspot for longevity.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1611072172377-0cabc3addb30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Traditional Nordic cuisine with fresh ingredients" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Elderly couple walking on beach in Halland" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Sustainable farm in Halland countryside" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Fresh Nordic seafood dish" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full z-10 flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-white font-heading font-bold text-xl">83.1</span>
            </motion.div>
          </motion.div>
          
          <motion.div className="md:pl-8" variants={itemVariants}>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">Where Nature Meets Nutrition</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Halland's exceptional longevity isn't coincidental. The region boasts unique geographical advantages and cultural practices that create the perfect environment for health and longevity:
            </p>
            
            <motion.div 
              className="space-y-6 mt-8"
              variants={containerVariants}
            >
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-accent mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-primary">{advantage.title}</h4>
                    <p className="mt-1">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-10"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-sm transition-colors duration-300 font-medium"
              >
                <span>Learn About Our Culinary Heritage</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
