import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <img 
        src="/images/longevity_option_1.webp" 
        alt="Coastal landscape of Halland, Sweden" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-4">
        <motion.h1 
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Future of Longevity Begins in <span className="text-accent">Halland</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where sustainable food systems, health innovation, and natural living come together to create a future of abundance.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#vision" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-sm transition-all duration-300 font-medium"
          >
            Discover Our Vision
          </a>
          <a 
            href="#longevity-hub" 
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-sm transition-all duration-300 font-medium"
          >
            Explore Longevity Hub
          </a>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.svg 
            className="w-8 h-8 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </motion.svg>
        </motion.div>
      </div> {/* Close Content div */}
    </section>
  );
}
