import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
  };
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-darker via-cosmic-dark/80 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
            <h3 className="font-cinzel text-xl mb-2 text-cosmic-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-cosmic-light/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {project.category}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-cosmic-accent/0 group-hover:border-cosmic-accent/50 rounded-lg transition-colors duration-300" />
      </div>
    </motion.div>
  );
};