import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

// Falkenberg Culinary Data
const falkenbergCulinary = {
  title: "Falkenberg, Sweden: A Hidden Culinary Paradise",
  description: "Nestled on Sweden's western coast in the Halland region, Falkenberg has emerged as one of Scandinavia's most exciting food destinations. With a perfect blend of coastal influences, traditional Swedish cooking, and modern culinary innovation, the town offers a diverse and vibrant food scene worth experiencing.",
  highlight_quote: "The landscape of Halland, with its rolling hills, grain fields, grazing cattle, deep forests, rivers, and coastline, provides restaurants with a well-stocked pantry of ingredients that are farmed, foraged, and hunted locally.",
  restaurants: [
    {
      name: "Lilla Napoli",
      description: "Often described as 'the best Neapolitan pizza in Scandinavia,' this unassuming pizzeria housed in a wooden shack serves authentic wood-fired pizzas that attract visitors from across the region.",
      image_url: "https://i0.wp.com/andershusa.com/wp-content/uploads/2017/03/lilla-napoli-authentic-neapolitan-italian-pizza-falkenberg-sweden-scandinavia-restaurant-review-food-foodie-eat-eating-dine-dining-best-tips-guide-travel-2019-27.jpg?ssl=1",
      specialties: ["Authentic Neapolitan pizza", "Dessert pizza"]
    },
    {
      name: "Prostens Pizza",
      description: "More than just a pizzeria, this countryside retreat offers Roman-style pizzas and a rotating menu of small dishes with seasonal ingredients. Guests can enjoy summer seating overlooking grazing cows and picturesque fields.",
      image_url: "https://i0.wp.com/andershusa.com/wp-content/uploads/2017/03/lilla-napoli-authentic-neapolitan-italian-pizza-falkenberg-sweden-scandinavia-restaurant-review-food-foodie-eat-eating-dine-dining-best-tips-guide-travel-2016-18.jpg?ssl=1",
      specialties: ["Roman-style pizza", "Seasonal small plates"]
    },
    {
      name: "Swerl Coffee Club",
      description: "A charming coffee project housed in a creamy blue 1972 Mercedes Benz van parked by the beach. They serve specialty coffee from European roasters, gluten-free cakes made with house-milled flours, and American pancakes.",
      image_url: "https://sprudge.com/wp-content/uploads/2021/10/Swerl-Coffee-Club-4-1197x800.jpg",
      specialties: ["Specialty coffee", "Gluten-free cakes", "American pancakes"]
    },
    {
      name: "Lis Mejeri",
      description: "A unique pop-up restaurant in an old dairy farmhouse run by the Blidberg family. Featuring eclectic décor and interactive dining experiences, they serve simple, tasty dishes made from local, seasonal ingredients.",
      specialties: ["Interactive dining", "Local seasonal ingredients", "Innovative Swedish dishes"]
    },
    {
      name: "Falkenberg Strandbad",
      description: "This beachfront hotel boasts the restaurant 'Köket' serving exceptional food with oceanic views. The spa features a color palette and design reminiscent of a Wes Anderson film, complete with an outdoor pool and orangerie.",
      specialties: ["Fine dining with ocean views", "Local seafood", "Seasonal menu"]
    }
  ]
};

// Local culinary advantages
const culinaryAdvantages = [
  {
    title: "Farm-to-Table Excellence",
    description: "Local ingredients from the rolling hills, grain fields, and coastline of Halland create a well-stocked pantry for restaurants."
  },
  {
    title: "Award-Winning Pizzerias",
    description: "Home to what many consider the best Neapolitan pizza in Scandinavia, attracting food enthusiasts from across Europe."
  },
  {
    title: "Innovative Dining Concepts",
    description: "From beach-side coffee in vintage Mercedes vans to pop-up restaurants in old dairy farmhouses, Falkenberg offers unique dining experiences."
  },
  {
    title: "Seasonal & Local Focus",
    description: "Restaurants emphasize seasonal menus with ingredients that are farmed, foraged, and hunted locally, contributing to health and sustainability."
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">{falkenbergCulinary.title}</h2>
          <p className="text-lg text-neutral-600">
            {falkenbergCulinary.description}
          </p>
        </motion.div>
        
        {/* Highlight Quote */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg border-l-4 border-accent"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl italic text-primary font-medium leading-relaxed">
            "{falkenbergCulinary.highlight_quote}"
          </p>
        </motion.div>
        
        {/* Top Restaurants */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Culinary Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {falkenbergCulinary.restaurants.slice(0, 3).map((restaurant, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {restaurant.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={restaurant.image_url} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h4 className="font-heading font-bold text-xl text-primary mb-2">{restaurant.name}</h4>
                  <p className="text-neutral-600 mb-4">{restaurant.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
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
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">The Falkenberg Food Experience</h3>
            <p className="text-lg mb-6 leading-relaxed">
              What makes Falkenberg's food scene unique is not just the quality of ingredients, but the innovative dining concepts and dedication to tradition that create memorable experiences:
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
                    src={falkenbergCulinary.restaurants[0].image_url} 
                    alt={falkenbergCulinary.restaurants[0].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src={falkenbergCulinary.restaurants[2].image_url} 
                    alt={falkenbergCulinary.restaurants[2].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Halland countryside" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-56">
                  <img 
                    src={falkenbergCulinary.restaurants[1].image_url} 
                    alt={falkenbergCulinary.restaurants[1].name} 
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
              <span className="text-white font-heading font-bold text-xl">1st</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
