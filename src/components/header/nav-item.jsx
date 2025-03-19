import { cn } from '../../utils'

const NavItem = ({ label, href, isActive }) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min",
          isActive && "dark:text-neutral-50 text-neutral-950"
        )}
      >
        <div className={cn(
          "h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 transition-all duration-300 ease-in-out transform origin-left group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800",
          isActive ? "w-6 dark:bg-neutral-200 bg-neutral-800 animate-bounce-once" : "group-hover:w-6"
        )} />
        <span className="ml-2">{label}</span>
      </a>
    </li>
  )
}

export default NavItem
