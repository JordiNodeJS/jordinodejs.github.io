const Image = ({ project, ...rest }) =>
  project?.imgCover && (
    <img
      src={project.imgCover}
      width={370}
      height={400}
      alt="project image"
      {...rest}
    />
  )
export default function Article({ project, className, ...rest }) {
  return (
    <article
      className={`${className} flex flex-col items-center rounded-3xl pb-12 bg-primary-focus bg-opacity-30 max-w-screen-sm mx-auto`}
      {...rest}
    >
      <div className="w-48 h-48 object-cover">
        <Image project={project} className="rounded-3xl mt-6" />
      </div>
      <div className="p-4 text-slate-400">
        <h2 className="font-bold text-slate-200 text-3xl mb-4">
          {project.title}
        </h2>
        <p className="mb-4">{project.description}</p>
        <p className="mb-2">
          <a
            className="btn btn-accent btn-outline "
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="mr-2" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.76-1.332-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.838 2.81 1.305 3.495.997.108-.776.417-1.305.76-1.605-2.665-.298-5.466-1.332-5.466-5.93 0-1.31.465-2.385 1.237-3.22-.135-.298-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.652.24 2.877.12 3.175.765.835 1.23 1.91 1.23 3.22 0 4.61-2.805 5.627-5.475 5.917.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57 4.77-1.587 8.196-6.086 8.196-11.387 0-6.63-5.37-12-12-12"
              />
            </svg>
            give it a star
          </a>
        </p>
        <div className="mt-4">
          {project.tags?.map((tag) => (
            <span key={project.id + tag} className="badge badge-info gap-2 mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
