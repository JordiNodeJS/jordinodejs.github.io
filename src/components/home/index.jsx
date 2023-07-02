function Home() {
  return (
    <>
      <section className="h-screen relative flex items-center max-w-[1000px] mx-8">
        <div className="relative flex h-full max-w-full p-0 py-16 text-center">
          <div className="flex items-center justify-center w-full max-sm:flex-col">
            <figure className="w-2/5 mr-10 md:w-3/5">
              <picture>
                <img src="assets/slider.svg" alt="Avatar" />
              </picture>
            </figure>
            <figcaption className="sr-only">
              Visualmente un desarrollador front-end de React
            </figcaption>
            <div className="flex flex-col gap-3 max-[700px]:px-2">
              <h1 className="relative inline-block font-extrabold tracking-tighter text-transparent text-7xl md:text-6xl bg-clip-text bg-gradient-to-b dark:from-slate-700 dark:to-emerald-400 from-emerald-300 to-red-300">
                <span>{' Front-End React Developer'}</span>
              </h1>
              <h2 className="dark:text-emerald-500 text-red-400 tracking-tight font-bold text-2xl mt-2">
                {'Software Engineer'}
              </h2>
            </div>
          </div>
        </div>
        {/* finger */}
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="block animate-bounce">
            <span className="p-2 rounded-full dark:shadow-md dark:shadow-slate-700/60 material-symbols-outlined text-emerald-600 dark:fuchsia-600 ">
              keyboard_double_arrow_down
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
