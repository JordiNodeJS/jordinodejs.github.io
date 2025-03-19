import NavItem from './nav-item'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function NavHeader() {
  const activeSection = useActiveSection()

  return (
    <nav className="my-10 max-lg:hidden">
      <ul className="flex flex-col gap-1 text-base font-semibold">
        <NavItem href="#about" label="About" isActive={activeSection === 'about'} />
        <NavItem href="#projects" label="Projects" isActive={activeSection === 'projects'} />
        <NavItem href="#education" label="Education" isActive={activeSection === 'education'} />
        <NavItem href="#skills" label="Skills" isActive={activeSection === 'skills'} />
      </ul>
    </nav>
  )
}
