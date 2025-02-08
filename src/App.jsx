import { useEffect, useState } from 'react'
import AboutSection from './components/about'
import CursorShadow from './components/cursor-shadow'
import Projects from './components/projects'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Education from './components/education'
import SkillsSection from './components/skills'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState(() => {
    // Inicializar el tema desde localStorage o preferencias del sistema
    if (
      localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    // Aplicar tema inicial
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.theme = newTheme
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors">
      <CursorShadow />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="relative">
        <Home />
        <div id="content" className="px-8 relative flex items-center mx-auto">
          <div className="h-full max-w-full text-left">
            <div className="grid w-full h-full grid-cols-2 gap-2">
              <Header />
              <div className="flex flex-col col-span-1 max-lg:col-span-2">
                <AboutSection />
                <Projects />
                <Education />
                <SkillsSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
