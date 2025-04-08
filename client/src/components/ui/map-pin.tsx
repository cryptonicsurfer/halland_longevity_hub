import { useState } from "react";
import { motion } from "framer-motion";

interface MapPinProps {
  label: string;
  style: React.CSSProperties;
}

export function MapPin({ label, style }: MapPinProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="absolute"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.2 }}
    >
      <motion.div 
        className="w-4 h-4 bg-accent rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="mt-2 bg-white/90 p-2 rounded shadow-md text-sm"
        initial={{ opacity: 0, y: -5, scale: 0.9 }}
        animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -5, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
