import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Farm-to-Table Network",
    description: "Connecting local farmers with restaurants to create a sustainable food system that preserves traditional methods while embracing innovation.",
    imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nordic farm-to-table dining concept"
  },
  {
    id: 2,
    title: "Preventative Health Center",
    description: "State-of-the-art facility offering personalized health assessments, longevity planning, and integrative medicine approaches.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Preventative health center with medical technology"
  },
  {
    id: 3,
    title: "Blue Zone Living Community",
    description: "Residential concept designed to foster social connection, physical activity, and purpose - key factors in longevity found in blue zones worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Blue Zone living community with eco-friendly housing"
  }
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Pioneering Projects</h2>
          <p className="text-lg text-neutral-600">
            Discover how we're building the future of longevity through innovative initiatives that bridge culinary excellence, preventative healthcare, and sustainable living.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-w-16 aspect-h-9 h-60 md:h-72 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-heading text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors duration-300">
                  <span className="font-medium mr-2">Learn more</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-3 rounded-sm transition-colors duration-300 font-medium"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
