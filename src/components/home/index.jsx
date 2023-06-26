function Home() {
  return (
    <>
      <section className="h-screen relative flex items-center max-w-[1000px] mx-auto">
        <div className="p-0 h-full text-center max-w-full page_center max-[700px]:after:hidden">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <figure className="-mb-4 scale-150 opacity-90 w-36 h-36">
              <picture>
                <img
                  src="assets/avatar-square-padding.png"
                  alt="Avatar"
                  width={150}
                  height={150}
                  className="w-full h-full"
                />
              </picture>
            </figure>
            <figcaption className="sr-only">
              Visualmente un desarrollador front-end de
              React
            </figcaption>
            <div className="flex flex-col gap-3 max-[700px]:px-2">
              <h1 className="font-extrabold relative text-7xl inline-block tracking-tighter text-transparent md:text-8xl bg-clip-text bg-gradient-to-b dark:from-[#fde089] dark:to-[#ec8b26] from-[#ffd24e] to-[#b96205]">
                <span className="inline-flex shake-left-right">
                  <img
                    src="assets/wave.png"
                    alt="Wave Icon"
                    width={80}
                    height={80}
                  />
                </span>
                <span>{' Front-End React Developer'}</span>
              </h1>
              <h2 className="dark:text-[#cecece] text-neutral-700 tracking-tight font-semibold text-2xl">
                {'Software Engineer & Music Producer'}
              </h2>
            </div>
          </div>
        </div>
        {/* finger */}
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="block animate-bounce">
            <img
              src="assets/pointing-up.png"
              alt="Pointing Icon"
              width={37}
              className="rotate-180"
              height={37}
            />
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
