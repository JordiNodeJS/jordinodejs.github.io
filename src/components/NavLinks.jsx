import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/experience">Experience</NavLink>
      </li>
      <li>
        <NavLink to="/education">Education</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  )
}
