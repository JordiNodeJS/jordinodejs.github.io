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
import { useIsMobile } from './hooks/useIsMobile'
import VantaBackground from './components/VantaBackground'
import ConfettiEffect from './components/ConfettiEffect'
import { useTheme } from './hooks/useTheme'

function App() {
  const isMobile = useIsMobile()
  const { theme, toggleTheme } = useTheme()
  const [showGlobalConfetti, setShowGlobalConfetti] = useState(false)
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleShowConfetti = (event) => {
      const { x, y } = event.detail;
      setConfettiPosition({ x, y });
      setShowGlobalConfetti(true);
      setTimeout(() => setShowGlobalConfetti(false), 2000);
    }

    window.addEventListener('showConfetti', handleShowConfetti)
    return () => window.removeEventListener('showConfetti', handleShowConfetti)
  }, [])

  return (
    <>
      {showGlobalConfetti && (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
          <ConfettiEffect 
            isActive={true} 
            colors={['#10b981', '#059669', '#34d399', '#6ee7b7', '#34d399']}
            origin={confettiPosition}
          />
        </div>
      )}
      <VantaBackground theme={theme} />
      <div className="min-h-screen bg-gradient-to-b from-white/80 to-white/60 dark:from-neutral-900/90 dark:to-neutral-900/50 text-black dark:text-white transition-colors backdrop-blur-[2px]">
        {!isMobile && <CursorShadow />}
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
    </>
  )
}

export default App
