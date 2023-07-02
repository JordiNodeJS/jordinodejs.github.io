import AboutSection from './components/about'
import CursorShadow from './components/cursor-shadow'
import ExperiencesSection from './components/experiences'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import ProjectsSection from './components/projects'
import SkillsSection from './components/skills'

function App() {
  // const navlinks = [
  //   {
  //     path: '/',
  //     label: 'Home'
  //   },
  //   {
  //     path: '/projects',
  //     label: 'Projects'
  //   },
  //   {
  //     path: '/experience',
  //     label: 'Experience'
  //   },
  //   {
  //     path: '/education',
  //     label: 'Education'
  //   },
  //   {
  //     path: '/contact',
  //     label: 'Contact'
  //   }
  // ]

  return (
    <>
      <CursorShadow />
      <div className="relative">
        <Home />
        <div
          id="content"
          className="px-8 relative flex items-center max-w-[1100px] mx-auto"
        >
          <div className="h-full max-w-full text-left">
            <div className="grid w-full h-full grid-cols-2 gap-2">
              <Header />
              <div className="flex flex-col col-span-1 max-lg:col-span-2">
                <AboutSection />
                <ExperiencesSection />
                <ProjectsSection />
                <SkillsSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
