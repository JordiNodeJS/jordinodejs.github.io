import NavHeader from './nav'
import FooterHeader from './footer'

export default function Header() {
  return (
    <header className="flex h-screen col-span-2 sm:col-span-1 gap-3 lg:top-0 max-ls:col-span-2 max-lg:h-auto lg:sticky">
      <div className="flex flex-col py-24 px-14 max-lg:px-2">
        <div className="flex flex-col gap-3 text-emerald-800/80 dark:text-emerald-400/60">
          <h1 className="font-bold relative items-start text-6xl inline-block tracking-wider">
            J-.ORCAJO
          </h1>
          <h2 className="items-end text-xl tracking-tighter">
            Software Engineer
          </h2>
          <p className="w-96 max-[700px]:w-full items-start leading-5">
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
