import { Link } from "react-router-dom"

const HeaderFooterItem = ({ title, icon, href }) => {
  return (
    <Link
      href={href}
      title={title}
      target="_blank"
      referrerPolicy="no-referrer"
      className="dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800"
    >
      <div className="w-8">{icon}</div>
    </Link>
  )
}
export default HeaderFooterItem
