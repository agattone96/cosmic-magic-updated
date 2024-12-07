import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="cosmic-gradient" />
      <div className="stars-container" />
      
      <div className="cosmic-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-float"
          >
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent animate-glow">
              Connect Across the Stars
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cosmic-text text-lg max-w-2xl mx-auto"
          >
            Ready to embark on a creative journey together? Let's make something extraordinary.
          </motion.p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};