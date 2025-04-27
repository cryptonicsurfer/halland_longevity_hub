import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useScrollPosition } from "@/lib/hooks/use-scroll-position";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const scrollPosition = useScrollPosition();
  const isNavSolid = scrollPosition > 50;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 w-full py-6 px-4 md:px-10 transition-all duration-500 ease-in-out z-50 ${
    isNavSolid ? 'bg-primary/95' : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <span className="text-white font-heading font-bold text-2xl tracking-wider">
              HALLAND<span className="text-accent">+</span>
            </span>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#vision" className="text-white hover:text-accent transition-colors duration-300 font-medium">
            Vision
          </a>
          <a href="#projects" className="text-white hover:text-accent transition-colors duration-300 font-medium">
            Projects
          </a>
          <a href="#longevity-hub" className="text-white hover:text-accent transition-colors duration-300 font-medium">
            Longevity Hub
          </a>
          <a href="#news" className="text-white hover:text-accent transition-colors duration-300 font-medium">
            News
          </a>
          <a href="#contact" className="text-white hover:text-accent transition-colors duration-300 font-medium">
            Contact
          </a>
        </div>
        
        {/* Language Selector + CTA Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <span className="cursor-pointer hover:text-accent transition-colors duration-300">EN</span>
              <span className="text-white/40">|</span>
              <span className="cursor-pointer hover:text-accent transition-colors duration-300">SE</span>
            </div>
            <ThemeToggle />
          </div>
          <a 
            href="#contact" 
            className="bg-accent text-white px-6 py-3 rounded-sm hover:bg-accent/80 transition-colors duration-300 font-medium"
          >
            Join The Journey
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`lg:hidden bg-primary/95 absolute top-full left-0 w-full ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto py-6 px-4 flex flex-col space-y-4">
          <a 
            href="#vision" 
            className="text-white hover:text-accent transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Vision
          </a>
          <a 
            href="#projects" 
            className="text-white hover:text-accent transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#longevity-hub" 
            className="text-white hover:text-accent transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Longevity Hub
          </a>
          <a 
            href="#news" 
            className="text-white hover:text-accent transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            News
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-accent transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          
          <div className="flex items-center justify-between text-white pt-2">
            <div className="flex items-center space-x-2">
              <span className="cursor-pointer hover:text-accent transition-colors duration-300">EN</span>
              <span className="text-white/40">|</span>
              <span className="cursor-pointer hover:text-accent transition-colors duration-300">SE</span>
            </div>
            <ThemeToggle />
          </div>
          
          <a 
            href="#contact" 
            className="bg-accent text-white px-6 py-3 mt-4 text-center rounded-sm hover:bg-accent/80 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Join The Journey
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
