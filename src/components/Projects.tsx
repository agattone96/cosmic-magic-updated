import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectDialog } from './projects/ProjectDialog';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="cosmic-section">
      <div className="cosmic-gradient" />
      
      <div className="cosmic-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="cosmic-heading font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 animate-float">
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent animate-glow">
              Stellar Portfolio
            </span>
          </h1>
          <p className="cosmic-text text-lg max-w-2xl mx-auto">
            Explore a universe of design where creativity knows no bounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center p-8 bg-cosmic-dark/50 backdrop-blur-lg rounded-lg border border-cosmic-accent/20"
        >
          <h3 className="cosmic-heading mb-4">Ready to Start Your Journey?</h3>
          <p className="cosmic-text text-lg mb-8">
            Let's create something extraordinary together!
          </p>
          <Link to="/contact" className="btn mx-auto">
            <strong>CONTACT ME</strong>
            <div id="container-stars">
              <div id="stars" />
            </div>
            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </Link>
        </motion.div>
      </div>

      <ProjectDialog 
        project={selectedProject} 
        onOpenChange={() => setSelectedProject(null)} 
      />
    </section>
  );
};