import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

const hallandCulinary = {
  title: "Halland, Sweden: A Hidden Culinary Paradise",
  description: "Halland, on Sweden's western coast, boasts a rich culinary tradition inspired by its diverse geography—coastal seafood, agricultural produce, and forest forage. Falkenberg stands out as a hidden gem within the region, offering everything from casual beachside dining to high-end restaurants with ocean views.",
  highlight_quote: "The landscape of Halland—with its coast, rolling hills, forests, and fields—provides a pantry of fresh seafood, quality meats, seasonal vegetables, and foraged delicacies.",
  image_urls: {
    coastal: "/images/455a4418_CMSTemplate.webp",
    cycling: "/images/kattegattleden_Magnus-Andersson-RegionHalland_CMSTemplate.webp"
  },
  producers: [
    {
      name: "Ugglarps Grönt",
      type: "Farm shop with regenerative farming",
      location: "Ugglarp, Halland",
      owners: "Brothers Mikael Jidenholm and Martin Larsson",
      products: ["Fresh fruits", "Seasonal vegetables", "Common and rare vegetables"],
      specialties: "Focus on quality, inspiration, knowledge and unique ingredients with full traceability",
      hours: "Wed-Fri 10-18, Sat 10-16, Sun 11-15",
      website: "www.ugglarpsgront.se",
      social_media: "https://www.instagram.com/visitugglarp",
      description: "Family-run farm shop with regenerative farming and unique, traceable ingredients."
    },
    {
      name: "Gudmundsgården",
      type: "Farm Delicatessen",
      location: "Slöinge, outside Falkenberg",
      products: ["Sausages", "Meat", "Charcuterie"],
      specialties: "Sweden's largest assortment of homemade charcuterie",
      social_media: "https://www.facebook.com/Gudmundsgarden",
      reviews: "4.0/5 on Tripadvisor (30 reviews)",
      description: "Halland's oldest farm delicatessen with Sweden's largest assortment of homemade charcuterie."
    },
    {
      name: "Hakaslätts Svamp",
      type: "Mushroom farming",
      location: "Hakestad 132, Ullared",
      products: ["Mushrooms"],
      specialties: "Family business, requires daily care like farming",
      social_media: "https://www.facebook.com/hakaslatt",
      description: "Family-owned mushroom farm in Ullared requiring daily care."
    },
    {
      name: "Thuressons",
      type: "Farm shop with delicatessen",
      location: "Glommen, near Varberg & Falkenberg",
      products: ["Meat boxes", "Preservative-free charcuterie", "Smoked ham", "Mother Alice's liver pate", "Thuresson's bacon", "Various sausages"],
      specialties: "Halland's largest meat counter, award-winning liver pate",
      website: "www.gardsbutikthuresson.se",
      social_media: "https://www.facebook.com/gardsbutik.thuresson",
      description: "Farm shop and delicatessen with Halland's largest meat counter and award-winning liver pate."
    },
    {
      name: "Kobb",
      type: "Impact and food tech company",
      location: "Glommen, Halland",
      products: ["Seaweed products"],
      specialties: "Climate-positive commercial seaweed farming, sustainable seafood",
      website: "kobb.nu",
      description: "Food tech company farming climate-positive seaweed on the west coast."
    },
    {
      name: "Korshags",
      type: "Food producer with store",
      location: "Servicevägen 3, Falkenberg",
      products: ["Freshly smoked fish products", "Fresh salmon", "Fresh fish & shellfish", "Ready meals"],
      specialties: "All fish products are ASC or KRAV certified",
      website: "www.korshags.se",
      social_media: "https://www.instagram.com/korshags_butiken",
      description: "Food producer and store with sustainably certified fish and seafood."
    },
    {
      name: "Hallandsbär",
      type: "Pick-your-own, café, pizzeria, farm shop and vineyard",
      location: "Stora Berg 110, Getinge",
      products: ["Strawberries", "Raspberries", "Blueberries", "Blackberries", "Asparagus", "Lettuce", "Beetroots", "Garlic", "Onions", "Tomatoes", "Cucumber", "Flowers"],
      website: "hallandsbar.se",
      contact: "073-252 17 40",
      description: "Pick-your-own, café, pizzeria, farm shop and vineyard with wide range of berries and vegetables."
    },
    {
      name: "Falkenberg Strandbad",
      type: "Hotel and restaurant",
      location: "Skrea beach, Falkenberg",
      facilities: ["3 restaurants", "4 pools", "Spa"],
      specialties: "Located directly by the sea, fine dining with ocean view",
      ratings: "4/5 on Tripadvisor, ranked #1 in Falkenberg",
      description: "Luxury hotel and restaurant by the sea with spa and multiple restaurants."
    }
  ]
};

// Local culinary advantages
const culinaryAdvantages = [
  {
    title: "Farm-to-Table Excellence",
    description: "Local ingredients from the rolling hills, grain fields, and coast of Halland create a well-stocked pantry for restaurants."
  },
  {
    title: "Organic and Regenerative Farming",
    description: "Many local producers use organic and regenerative farming methods, contributing to both taste and environmental sustainability."
  },
  {
    title: "Ocean's Pantry",
    description: "The coastline offers fresh fish and seafood, from locally farmed sustainable salmon to freshly smoked fish and seasonal catches."
  },
  {
    title: "Unique Destinations",
    description: "From pick-your-own fresh berries to farm shops with delicatessens and seaside restaurants – Halland offers culinary experiences for all senses."
  },
  {
    title: "Seasonal Focus",
    description: "Restaurants and producers emphasize seasonal menus with locally grown, foraged, and hunted ingredients, contributing to health and sustainability."
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
    <section className="py-20 md:py-32 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">{hallandCulinary.title}</h2>
          <p className="text-lg text-foreground/80">
            {hallandCulinary.description}
          </p>
        </motion.div>
        
        {/* Featured Images */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={hallandCulinary.image_urls.coastal} 
                alt="Coastal scenery in Halland, Sweden" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/culinary_option_1.webp" 
                alt="Cycling near the coast in Halland, Sweden" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Highlight Quote */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto bg-card p-8 rounded-lg border-l-4 border-accent"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl italic text-primary font-medium leading-relaxed">
            "{hallandCulinary.highlight_quote}"
          </p>
        </motion.div>
        
        {/* Top Producers */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Halland's Food Producers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hallandCulinary.producers.slice(0, 3).map((producer, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{producer.type}</span>
                  <h4 className="font-heading font-bold text-xl text-primary mt-1 mb-2">{producer.name}</h4>
                  <p className="text-card-foreground mb-3 text-sm">{producer.location}</p>
                  <p className="text-card-foreground mb-4">{producer.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {producer.products && producer.products.slice(0, 3).map((product, i) => (
                      <span 
                        key={i} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Culinary Advantages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="md:order-2" variants={itemVariants}>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">The Halland Food Experience</h3>
            <p className="text-lg mb-6 leading-relaxed">
              What makes Halland's food scene unique is not just the quality of ingredients, but the innovative food producers and dedication to tradition that create memorable experiences:
            </p>
            
            <motion.div 
              className="space-y-6 mt-8"
              variants={containerVariants}
            >
              {culinaryAdvantages.map((advantage, index) => (
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
                href="#contact" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-sm transition-colors duration-300 font-medium"
              >
                <span>Plan Your Culinary Tour</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div className="relative md:order-1" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md h-56">
                  <img 
                    src="/images/culinary_option_2.jpg" 
                    alt="Close up of hands holding" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="/images/matdagarna-22-113-2048x1365.jpg" 
                    alt="Close up of hands holding" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="/images/ugglarps_gront_tomat.jpg" 
                    alt="Man in suit drinking coffee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-56">
                  <img 
                    src="/images/DSCF9548-e1699469679535.jpg" 
                    alt="Cycling in Halland" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
              <span className="text-white font-heading font-bold text-xl">1st</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
