import { ExternalIcon } from '../Icons/Icons'

export default function ProjectItem(project) {
  return (
    <article className="mb-14">
      <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-red-950 hover:border-neutral-450 z-0  rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-emerald-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header
          className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-neutral-500 text-neutral-500 sm:col-span-2"
          aria-label="2018 to Present"
        >
          <div className="p-2 rounded-lg overflow-hidden max-md:hidden border border-transparent border-neutral-900 shadow-md dark:shadow-black/50 shadow-black/10">
            <img
              className="rounded-full opacity-80 object-cover w-full h-full sepia group-hover:sepia-0"
              src={project.imgCover}
            />
          </div>
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium flex flex-col gap-1 text-orange-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight dark:text-emerald-400 text-orange-800 hover:dark:text-emerald-200 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={project.title}
              >
                <span className="inline-block font-semibold">
                  {project.title}
                  <ExternalIcon />
                </span>
                <span className="absolute -inset-x-3 -inset-y-3"></span>
              </a>
            </div>
            <div>
              <div
                className="dark:text-orange-100/50 text-orange-900/80 font-normal"
                aria-hidden="true"
              >
                {project.status}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50">
            {project.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.tags.map(tag => (
              <li className="mr-1.5 mt-2" key={tag}>
                <div className="flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium leading-5 dark:text-amber-700 text-orange-900">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
