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
              <h1 className="relative inline-block font-extrabold tracking-tighter text-transparent text-7xl md:text-6xl bg-clip-text bg-gradient-to-b dark:from-fuchsia-900 dark:to-red-900 from-fuchsia-300 to-fuchsia-700">
                <span>{' Front-End React Developer'}</span>
              </h1>
              <h2 className="dark:text-[#cecece] text-fuchsia-800 tracking-tight font-semibold text-2xl mt-2">
                {'Software Engineer'}
              </h2>
            </div>
          </div>
        </div>
        {/* finger */}
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="block animate-bounce">
            <span className="p-2 rounded-full dark:shadow-md dark:shadow-fuchsia-800/60 material-symbols-outlined text-fuchsia-600 dark:fuchsia-600 ">
              keyboard_double_arrow_down
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
