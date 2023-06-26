import NavHeader from './nav'
import FooterHeader from './footer'

export default function Header() {
  return (
    <header className="flex h-screen col-span-1 gap-3 lg:top-0 max-ls:col-span-2 max-lg:h-auto lg:sticky">
      <div className="flex flex-col h-full py-24 px-14 max-lg:px-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#1f1c19] dark:text-[#cdbead] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
            Daustinn
          </h1>
          <h2 className="dark:text-[#ada79f] text-[#6c6761] item-s text-transparent bg-clip-text tracking-tighter text-gradient text-xl">
            Software Engineer & Music Producer
          </h2>
          <p className="w-96 max-[700px]:w-full opacity-80 dark:text-[#c8c6c0] text-[#302e2a] item-s text-transparent text-gradient bg-clip-text leading-5">
            I build accessible products and digital experiences for the web. and
            additional to this I create music for your ear.
          </p>
        </div>
        <NavHeader />
        <FooterHeader />
      </div>
    </header>
  )
}
