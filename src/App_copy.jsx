import { Outlet } from 'react-router-dom'
import { NavBar } from './components'

function App() {
  const navlinks = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/projects',
      label: 'Projects'
    },
    {
      path: '/experience',
      label: 'Experience'
    },
    {
      path: '/education',
      label: 'Education'
    },
    {
      path: '/contact',
      label: 'Contact'
    }
  ]

  return (
    <>
      <div className="background-svg" />
      <div className='backdrop-blur-3xl'>
        <NavBar links={navlinks} />
        <Outlet />
      </div>
    </>
  )
}

export default App
