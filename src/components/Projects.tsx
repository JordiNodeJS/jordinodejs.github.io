import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { usePortfolioTranslations } from "../hooks/usePortfolioTranslations";
import { useCentralizedPortfolioData } from "../hooks/useCentralizedPortfolioData";
import type { Project } from "../types";
import { useState } from "react";

const ProjectCard = ({
  project,
  index,
  projectsUiStrings,
}: {
  project: Project;
  index: number;
  projectsUiStrings: {
    viewProject: string;
    viewCode: string;
    technologies: string;
    liveDemo: string;
    sourceCode: string;
    viewMore: string;
  };
}) => {
  // Proyecto ya viene con datos traducidos desde useCentralizedPortfolioData
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass-effect rounded-2xl overflow-hidden card-hover"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center"
        >
          {project.imgCover ? (
            <img
              src={`${import.meta.env.BASE_URL}${project.imgCover}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl text-gray-400">📱</div>
          )}
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="tooltip bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                data-tooltip={projectsUiStrings.sourceCode}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary-500/80 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-primary-600/80 transition-all duration-300 flex-1 flex items-center justify-center gap-2 hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{projectsUiStrings.liveDemo}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-1.5">
            {project.link && (
              <span
                className="tooltip w-2 h-2 rounded-full bg-blue-400"
                data-tooltip={projectsUiStrings.sourceCode}
              ></span>
            )}
            {project.demo && (
              <span
                className="tooltip w-2 h-2 rounded-full bg-green-400"
                data-tooltip={projectsUiStrings.liveDemo}
              ></span>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.tags && project.tags.length > 4 && (
          <div className="mt-1 text-xs text-gray-400">
            +{project.tags.length - 4} más
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = useCentralizedPortfolioData();
  const { projects: projectsTranslationsHook } = usePortfolioTranslations();
  const [visibleProjects, setVisibleProjects] = useState(6);

  const totalProjects = projects.length;

  const showMoreProjects = () => {
    setVisibleProjects(totalProjects);
  };

  if (!projectsTranslationsHook) {
    return <div>Loading section translations...</div>;
  }

  return (
    <section id="projects" className="section-padding section-bg-gradient">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {" "}
          <h2
            className="text-4xl md:text-5xl mb-8 font-bold text-gray-900 dark:text-white
            theme-brutalism:brutal-title
            theme-vintage:text-vintage-mustard-light theme-vintage:font-bold theme-vintage:text-shadow-lg
            theme-retro-pastel:text-retroPastel-text-dark theme-retro-pastel:font-bold
            transition-colors duration-300"
          >
            {projectsTranslationsHook.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {projectsTranslationsHook.subtitle}
          </p>
        </motion.div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              projectsUiStrings={projectsTranslationsHook}
            />
          ))}
        </div>
        {/* View More Button */}
        {visibleProjects < totalProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={showMoreProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-primary-500/50 hover:border-primary-400"
            >
              {projectsTranslationsHook.viewMore}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
