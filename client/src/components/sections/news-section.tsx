import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "International Longevity Symposium to be Hosted in Falkenberg",
    excerpt: "World-renowned researchers and culinary experts will gather to explore the intersection of nutrition and longevity.",
    imageUrl: "/images/1700175473082.jpeg",
    imageAlt: "People attending the International Longevity Symposium",
    date: "September 15, 2023",
    category: "Events"
  },
  {
    id: 2,
    title: "New Study Confirms Halland's Exceptional Longevity Metrics",
    excerpt: "Research published in the International Journal of Population Health validates Halland's position as a global longevity hotspot.",
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Elderly people enjoying outdoor fitness activities",
    date: "August 28, 2023",
    category: "Research"
  },
  {
    id: 3,
    title: "Construction Begins on Falkenberg Wellness Tourism Center",
    excerpt: "The state-of-the-art facility will welcome health-conscious visitors from around the world starting next summer.",
    imageUrl: "/images/Wakame-Seaweed-Salad_A.jpg",
    imageAlt: "Fresh vegetables and ingredients for healthy cooking",
    date: "August 10, 2023",
    category: "Development"
  }
];

export function NewsSection() {
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
    <section id="news" className="py-20 md:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-wrap items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Latest News & Insights
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Stay updated on the latest developments, research findings, and events related to our longevity initiatives.
            </motion.p>
          </div>
          <div className="w-full lg:w-auto">
            <motion.a 
              href="#" 
              className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300 font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>View all news</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-card-foreground mb-4">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300">
                  <span className="font-medium">Read more</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <div className="inline-flex rounded-md shadow-sm">
            <a href="#" className="py-2 px-4 border border-primary text-primary hover:bg-primary/5 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </a>
            <a href="#" className="py-2 px-4 border-t border-b border-primary text-primary hover:bg-primary/5 transition-colors duration-300">1</a>
            <a href="#" className="py-2 px-4 border-t border-b border-primary bg-primary text-white">2</a>
            <a href="#" className="py-2 px-4 border-t border-b border-primary text-primary hover:bg-primary/5 transition-colors duration-300">3</a>
            <a href="#" className="py-2 px-4 border border-primary text-primary hover:bg-primary/5 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
