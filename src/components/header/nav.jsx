import NavItem from './nav-item'

export default function NavHeader() {
  return (
    <nav className="my-10 max-lg:hidden">
      <ul className="flex flex-col gap-1 text-base font-semibold">
        <NavItem href="#about" label="About" />
        <NavItem href="#experience" label="Experience" />
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#skills" label="Skills" />
      </ul>
    </nav>
  )
}
