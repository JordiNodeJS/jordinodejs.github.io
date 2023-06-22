import NavLinks from './NavLinks'

export default function NavBar({ links }) {
  return (
    <>
      {' '}
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
            </div>
          </div>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal bg-base-100 rounded-box">
            <NavLinks links={links} />
          </ul>
        </div>
      </div>
      <div className="h-full py-24 px-14 max-[800px]:px-2 flex-col flex">
        <nav className="my-10 max-[800px]:hidden">
          <ul
            tabIndex={0}
            className="flex flex-col gap-1 text-base font-semibold"
          >
            <NavLinks links={links} />
          </ul>
        </nav>
      </div>
    </>
  )
}
