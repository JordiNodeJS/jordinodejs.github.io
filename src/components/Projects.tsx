import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { usePortfolioTranslations } from '../hooks/usePortfolioTranslations'
import { useCentralizedPortfolioData } from '../hooks/useCentralizedPortfolioData'
import { useTheme } from '../hooks/useTheme'
import type { Project } from '../types'
import { useState } from 'react'

const ProjectCard = ({
  project,
  index,
  projectsUiStrings
}: {
  project: Project
  index: number
  projectsUiStrings: {
    viewProject: string
    viewCode: string
    technologies: string
    liveDemo: string
    sourceCode: string
    viewMore: string
    more: string
  }
}) => {
  const { theme } = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Use screenshots if available, otherwise fallback to imgCover
  const images = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.imgCover]

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const buttonVisibilityClass = theme === 'brutalism' ? 'opacity-100' : 'opacity-0 group-hover/slider:opacity-100'

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
      <div className="relative h-48 sm:h-56 overflow-hidden group/slider">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center"
        >
          {images.length > 0 ? (
            <img
              key={currentImageIndex} // Force re-render on image change
              src={`${import.meta.env.BASE_URL}${images[currentImageIndex]}`}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          ) : (
            <div className="text-6xl text-gray-400">📱</div>
          )}
        </motion.div>

        {/* Slider Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 z-20 transition-all duration-300 ${buttonVisibilityClass} project-slider-button`}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 z-20 transition-all duration-300 ${buttonVisibilityClass} project-slider-button`}
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
            
            {/* Dots indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 pointer-events-auto">
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
          {project.tags?.slice(0, 4).map(tag => (
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
            +{project.tags.length - 4} {projectsUiStrings.more}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { projects } = useCentralizedPortfolioData()
  const { projects: projectsTranslationsHook } = usePortfolioTranslations()
  const [visibleProjects, setVisibleProjects] = useState(6)

  const totalProjects = projects.length

  const showMoreProjects = () => {
    setVisibleProjects(totalProjects)
  }

  if (!projectsTranslationsHook) {
    return <div>Loading section translations...</div>
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
          {' '}
          <h2 className="projects-title">
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
  )
}

export default Projects
