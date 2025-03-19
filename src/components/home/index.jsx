function Home() {
  return (
    <>
      <section className="h-screen flex items-center justify-center mx-auto px-6 md:px-8">
        <div className="relative max-w-6xl w-full p-0 py-8 md:py-16 flex flex-col items-center">
          <div className="flex items-center gap-8 md:gap-12 w-full max-sm:flex-col">
            <figure className="w-1/4 sm:w-1/5 md:w-1/6 flex-shrink-0">
              <div className="rounded-full p-1.5 aspect-square bg-gradient-to-b dark:from-slate-700/30 dark:to-emerald-400/30 from-emerald-300/30 to-red-300/30 shadow-lg">
                <div className="rounded-full p-1.5 aspect-square bg-gradient-to-tr dark:from-emerald-400/25 dark:to-slate-700/25 from-red-300/25 to-emerald-300/25">
                  <div className="rounded-full overflow-hidden aspect-square">
                    <picture>
                      <img src="developer.png" alt="Avatar" className="object-cover w-full h-full" />
                    </picture>
                  </div>
                </div>
              </div>
            </figure>
            <figcaption className="sr-only">
              un desarrollador front-end de React
            </figcaption>
            <div className="flex flex-col items-start max-sm:items-center">
              <h1 className="relative font-extrabold tracking-tighter text-transparent text-5xl sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-b dark:from-slate-700 dark:to-emerald-400 from-emerald-300 to-red-300">
                <span>Front-End React Developer</span>
              </h1>
              <h2 className="dark:text-emerald-500 text-red-400 tracking-tight font-bold text-xl sm:text-2xl mt-3">
                Software Engineer
              </h2>
            </div>
          </div>
        </div>
        {/* finger */}
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="block animate-bounce">
            <span className="p-2 rounded-full dark:shadow-md dark:shadow-slate-700/60 material-symbols-outlined text-emerald-600 dark:fuchsia-600">
              keyboard_double_arrow_down
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
