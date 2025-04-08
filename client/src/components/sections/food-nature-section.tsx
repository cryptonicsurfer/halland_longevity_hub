import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef } from "react";

// Halland Culinary Data
const hallandCulinary = {
  title: "Halland, Sweden: A Hidden Culinary Paradise",
  description: "Nestled on Sweden's western coast, the Halland region has emerged as one of Scandinavia's most exciting food destinations. With a perfect blend of coastal influences, traditional Swedish cooking, organic farming, and modern culinary innovation, the region offers a diverse and vibrant food scene worth experiencing.",
  highlight_quote: "The landscape of Halland, with its rolling hills, grain fields, grazing cattle, deep forests, rivers, and coastline, provides restaurants with a well-stocked pantry of ingredients that are farmed, foraged, and hunted locally.",
  image_urls: {
    coastal: "/images/halland-coastal-scenery.jpg",
    cycling: "/images/kattegattleden-cycling.jpg"
  },
  producers: [
    {
      name: "Ugglarps Grönt",
      type: "Gårdsbutik med regenerativ odling",
      location: "Ugglarp, Halland",
      owners: "Bröderna Mikael Jidenholm och Martin Larsson",
      description: "En gårdsbutik som fokuserar på kvalitet, inspiration, kunskap och unika råvaror med full spårbarhet genom regenerativ odling.",
      products: ["Färska frukter", "Säsongsbetonade grönsaker", "Vanliga och ovanliga grönsaker"],
      hours: "Ons-fre 10-18, lör 10-16, sön 11-15",
      website: "www.ugglarpsgront.se"
    },
    {
      name: "Gudmundsgården",
      type: "Gårdscharkuteri",
      location: "Slöinge, utanför Falkenberg",
      description: "Hallands äldsta gårdscharkuteri med Sveriges största sortiment av egentillverkade charkvaror.",
      products: ["Korvar", "Kött", "Charkprodukter"],
      social_media: "facebook.com/Gudmundsgarden"
    },
    {
      name: "Korshags",
      type: "Livsmedelsproducent med butik",
      location: "Servicevägen 3, Falkenberg",
      description: "En hållbar fiskproducent med butik. Alla fiskprodukter är ASC-märkta eller ekologiskt KRAV-märkta.",
      products: ["Nyrökta fiskprodukter", "Pinfärsk lax", "Färsk fisk & skaldjur", "Färdigrätter"],
      contact: "0346-71 57 57",
      website: "www.korshags.se"
    },
    {
      name: "Hallandsbär",
      type: "Självplock, café, pizzeria, gårdsbutik och vinodling",
      location: "Stora Berg 110, Getinge",
      description: "Ett mångsidigt besöksmål som kombinerar självplock av bär och grönsaker med café, pizzeria och gårdsbutik.",
      products: ["Jordgubbar", "Hallon", "Blåbär", "Sparris", "Ekologiska grönsaker"],
      contact: "073-252 17 40",
      website: "hallandsbar.se"
    },
    {
      name: "Falkenberg Strandbad",
      type: "Hotell och restaurang",
      location: "Skrea strand, Falkenberg",
      description: "Beläget direkt vid havet med tre restauranger som serverar mat med lokala råvaror. På dagar med klart väder kan man se Danmark.",
      facilities: ["3 restauranger", "4 pooler", "Spa"],
      specialties: ["Fine dining med havsutsikt", "Lokala råvaror", "Säsongsbetonad meny"]
    },
    {
      name: "Thuressons",
      type: "Gårdsbutik med charkuteri",
      location: "Glommen, nära Varberg & Falkenberg",
      description: "Känd som 'Hallands största köttdisk' och prisbelönt för sina charkprodukter utan tillsatser.",
      products: ["Köttlådor", "Rökt skinka", "Mor Alice leverpastej (vann guld i Svenskt Mathantverk)", "Thuressons bacon", "Olika korvar"],
      website: "www.gardsbutikthuresson.se"
    }
  ]
};

// Local culinary advantages
const culinaryAdvantages = [
  {
    title: "Farm-to-Table Excellence",
    description: "Lokala råvaror från de böljande kullarna, sädesfälten och kusten i Halland skapar en välutrustad skafferi för restauranger."
  },
  {
    title: "Ekologisk och regenerativ odling",
    description: "Många lokala producenter använder ekologiska och regenerativa odlingsmetoder, vilket bidrar till både smak och miljömässig hållbarhet."
  },
  {
    title: "Havets skafferi",
    description: "Kustlinjen erbjuder färsk fisk och skaldjur, allt från lokalt odlad och hållbar lax till nyrökt fisk och säsongens fångster."
  },
  {
    title: "Unika besöksmål",
    description: "Från självplock av färska bär till gårdsbutiker med charkuterier och restauranger vid havet – Halland erbjuder matupplevelser för alla sinnen."
  },
  {
    title: "Säsongsfokus",
    description: "Restauranger och producenter betonar säsongsmenyer med ingredienser som odlas, plockas och jagas lokalt, vilket bidrar till hälsa och hållbarhet."
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">{hallandCulinary.title}</h2>
          <p className="text-lg text-neutral-600">
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
                src={hallandCulinary.image_urls.cycling} 
                alt="Cycling on Kattegattleden in Halland, Sweden" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Highlight Quote */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg border-l-4 border-accent"
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
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{producer.type}</span>
                  <h4 className="font-heading font-bold text-xl text-primary mt-1 mb-2">{producer.name}</h4>
                  <p className="text-neutral-600 mb-3 text-sm">{producer.location}</p>
                  <p className="text-neutral-600 mb-4">{producer.description}</p>
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
                    src="/images/halland-coastal-scenery.jpg" 
                    alt="Coastal scenery in Halland" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1611072172377-0cabc3addb30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Traditional Nordic food" 
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
                    src="/images/kattegattleden-cycling.jpg" 
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
