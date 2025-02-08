import { ExternalIcon } from '../Icons/Icons'

export default function EducationItems({ isLast, ...edu }) {
  return (
    <article className="mb-14 relative group">
      {/* Línea vertical conectora */}
      <div
        className={`absolute left-[7px] top-2 w-[2px] bg-orange-400/20 group-hover:bg-orange-400/30 transition-colors duration-300 ${
          isLast ? 'h-full' : 'h-[calc(100%+3.5rem)]'
        }`}
      />

      {/* Punto centrado con la línea */}
      <div className="absolute left-0 top-2 z-10">
        <div className="w-4 h-4 rounded-full bg-orange-400/20 group-hover:bg-orange-400/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-orange-400 group-hover:bg-orange-500 transition-colors duration-300" />
        </div>
      </div>
      <div className="ml-8">
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
          <div className="z-10 mb-2 mt-2 text-sm font-semibold uppercase tracking-wide sm:col-span-2">
            <div className="text-slate-600 rounded-lg overflow-hidden max-md:hidden font-thin text-xs">
              {edu.start_date} - {edu.end_date}
            </div>
          </div>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium flex flex-col gap-1 text-orange-200">
              <div>
                <a
                  className="inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300 group/link text-lg"
                  href={edu.link}
                  target="_blank"
                  aria-label={edu.title}
                  rel="noreferrer"
                >
                  <span className="inline-block">
                    {edu.title}
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
                  {edu.center}
                </div>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
              {edu.description}
            </p>
            <h4 className="text-orange-900 font-mono text-sm mt-2">
              What it&apos;s taught
            </h4>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {edu.tags?.map(tag => (
                <li className="mr-1.5 mt-2" key={tag}>
                  <div className="flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium leading-5 dark:text-amber-700 text-orange-900">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
