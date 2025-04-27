import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";
import LifeExpectancyAnimation from "@/components/life-expectancy-animation"; // Import the animation component

export function VisionSection() {
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
    <section id="vision" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:space-x-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Change width to 1/3 on medium screens and up */}
          <motion.div className="md:w-1/3 mb-10 md:mb-0" variants={itemVariants}> 
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Our Vision for Long, Vibrant Lives
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              In Halland – the region with the highest life expectancy in Sweden and among the highest in the world – we envision a future where longevity isn't just about adding years to life, but adding life to years.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We're creating a nexus where world-class gastronomy, preventative healthcare, and sustainable living practices converge to form a blueprint for the future of human flourishing.
            </p>
            <div className="mt-8">
              <a 
                href="#projects" 
                className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300"
              >
                <span className="font-medium mr-2">Explore our initiatives</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Replace image div with animation component and background */}
          {/* Change width to 2/3 on medium screens and up */}
          <motion.div 
            className="md:w-2/3 relative rounded-lg overflow-hidden shadow-lg" 
            variants={itemVariants}
            style={{ 
              backgroundImage: `url('/images/animation_background_image_3.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '600px' // Adjust height as needed for the animation content
            }}
          >
            {/* Overlay to potentially improve text readability over background */}
            <div className="absolute inset-0 bg-black/20 z-0"></div> 
            
            {/* Animation Component */}
            <div className="relative z-10"> {/* Ensure animation is above overlay */}
              <LifeExpectancyAnimation />
            </div>
          </motion.div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <span className="text-accent text-4xl font-bold">83.1</span>
            <h3 className="mt-4 font-heading font-semibold text-xl text-primary">Years Life Expectancy</h3>
            <p className="mt-2 text-neutral-600">Highest in Sweden and among the top globally</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <span className="text-accent text-4xl font-bold">1st</span>
            <h3 className="mt-4 font-heading font-semibold text-xl text-primary">Regional Cuisine</h3>
            <p className="mt-2 text-neutral-600">Featured on Eater.com as a culinary destination</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <span className="text-accent text-4xl font-bold">80%</span>
            <h3 className="mt-4 font-heading font-semibold text-xl text-primary">Local Sourcing</h3>
            <p className="mt-2 text-neutral-600">Of ingredients in regional cuisine comes from local farms</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <span className="text-accent text-4xl font-bold">+30%</span>
            <h3 className="mt-4 font-heading font-semibold text-xl text-primary">Health Tourism</h3>
            <p className="mt-2 text-neutral-600">Growth in health-focused visitors since 2019</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
