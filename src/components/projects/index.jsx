import ProjectItem from './ProjectItem'
import projects from '../../db/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-amber-700 text-black/80">
          Projects
        </h3>
        {projects.map(project => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
