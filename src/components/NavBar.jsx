import NavLinks from './NavLinks'

export default function NavBar({ links }) {
  return (
    <div className="sticky top-0 navbar backdrop-blur-sm bg-neutral-800 bg-opacity-40 z-10">
      <div className="flex-1">
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 backdrop-blur-sm bg-neutral-800 bg-opacity-40 "
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal bg-base-100 rounded-box">
          <NavLinks links={links} />
        </ul>
      </div>
    </div>
  )
}
