import { NavLink } from 'react-router-dom'

export default function NavLinks({ links }) {
  return links?.map(link => (
  <li key={link.label}><NavLink to={link.path}>{link.label}</NavLink></li>)
  )
}
