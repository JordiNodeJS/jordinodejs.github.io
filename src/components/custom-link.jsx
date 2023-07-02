import { Link } from 'react-router-dom'
import { cn } from '../utils'

const CustomLink = ({ href, children, className }) => {
  return (
    <Link
      className={cn(
        'hover:underline font-medium ml-1 transition-colors dark:text-emerald-300 text-emerald-700 dark:hover:text-rose-400 hover:text-cyan-700',
        className
      )}
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </Link>
  )
}

export default CustomLink
