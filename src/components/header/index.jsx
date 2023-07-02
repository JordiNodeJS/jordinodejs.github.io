import NavHeader from './nav'
import FooterHeader from './footer'

export default function Header() {
  return (
    <header className="flex h-screen col-span-2 sm:col-span-1 gap-3 lg:top-0 max-ls:col-span-2 max-lg:h-auto lg:sticky">
      <div className="flex flex-col py-24 px-14 max-lg:px-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-slate-700 dark:text-emerald-900  relative items-start text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
            J-.ORCAJO
          </h1>
          <h2 className="dark:text-emerald-800 text-slate-700 items-end text-transparent bg-clip-text tracking-tighter text-gradient text-xl">
            Software Engineer
          </h2>
          <p className="w-96 max-[700px]:w-full opacity-80 dark:text-emerald-600 text-stone-400 items-start text-transparent text-gradient bg-clip-text leading-5">
            +2 years of experience in the programming world, specializing in
            React. Committed to developing accessible and high-performance user
            experiences.
          </p>
        </div>
        <NavHeader />
        <FooterHeader />
      </div>
    </header>
  )
}
