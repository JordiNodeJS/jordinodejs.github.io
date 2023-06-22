import { NavLink } from 'react-router-dom'

export default function NavLinks({ links }) {
  return links?.map((link) => (
    <li
      className='"dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min"'
      key={link.label}
    >
      <NavLink
        className="h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800"
        to={link.path}
      >
        {link.label}
      </NavLink>
    </li>
  ))
}
