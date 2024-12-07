import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", description: "Return to the cosmic homepage" },
    { path: "/projects", label: "Projects", description: "Explore my stellar works" },
    { path: "/about", label: "About", description: "Learn about the cosmic creator" },
    { path: "/contact", label: "Contact", description: "Send signals across space" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cosmic-dark/90 backdrop-blur-md py-4 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-cinzel text-xl md:text-2xl font-bold group">
          <motion.span 
            className="bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Star className="w-5 h-5 text-cosmic-accent animate-pulse" />
            Allison Gattone
          </motion.span>
        </Link>

        <motion.button 
          className="md:hidden text-cosmic-light hover:text-cosmic-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ path, label, description }) => (
            <TooltipProvider key={path}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={path}
                      className={`nav-link group ${location.pathname === path ? 'text-cosmic-accent' : ''}`}
                    >
                      {label}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-accent transform origin-left"
                        initial={{ scaleX: 0 }}
                        animate={location.pathname === path ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent 
                  className="bg-cosmic-dark/90 backdrop-blur-md border border-cosmic-accent text-cosmic-light px-4 py-2 rounded-lg shadow-lg"
                  sideOffset={5}
                >
                  <p className="text-sm">{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-cosmic-dark/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map(({ path, label }) => (
                  <motion.div
                    key={path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <Link
                      to={path}
                      className={`nav-link text-lg ${location.pathname === path ? 'text-cosmic-accent' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};