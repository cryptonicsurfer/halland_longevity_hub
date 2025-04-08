import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

export function ParallaxQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.2 });
  
  return (
    <section 
      ref={ref}
      className="relative h-screen-80 bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
      }}
    >
      <div className="absolute inset-0 bg-primary/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="max-w-4xl text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white font-accent text-2xl md:text-4xl italic leading-relaxed">
            "The secret to longevity isn't medical breakthroughs alone—it's the connection between what we eat, how we move, and where we live."
          </p>
          <p className="mt-6 text-white text-lg">Dr. Maria Lindström, Longevity Researcher</p>
        </motion.div>
      </div>
    </section>
  );
}
