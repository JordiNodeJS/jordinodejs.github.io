import { useEffect, useCallback } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
// import FloatingParticles from './components/FloatingParticles' // TEMPORARILY DISABLED FOR PERFORMANCE
import LoadingScreen from './components/LoadingScreen'

import { useScrollToSection } from './hooks/useScrollToSection'

import './App.css'

// Test deployment - 2025-06-10 18:19

function App() {
  const { scrollToSection } = useScrollToSection()

  // Smooth scroll behavior for anchor links with navigation offset
  const handleSmoothScroll = useCallback(
    (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        scrollToSection(target.hash)
      }
    },
    [scrollToSection]
  )

  useEffect(() => {
    // Set a fixed document title
    document.title = 'PORTFOLIO - jORge'

    // Add scroll listener to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [handleSmoothScroll])

  return (
    <LazyMotion features={domAnimation}>
      <LoadingScreen />

      <div className="min-h-screen dark:bg-slate-900 light:bg-gray-50 transition-colors duration-300 overflow-x-hidden relative">
        {/* Floating background particles - TEMPORARILY DISABLED FOR PERFORMANCE */}
        {/* <FloatingParticles /> */}

        <Navigation />

        {/* Main content with parallax-like sections */}
        <main className="relative z-10">
          <Hero />

          {/* Divider with animated gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-8"></div>

          <Experience />

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-8"></div>

          <Projects />

          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-8"></div>

          <Skills />

          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-8"></div>

          <Education />

          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mx-8"></div>
        </main>

        {/* Modern Footer */}
        <Footer />



        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </LazyMotion>
  )
}

export default App
// Test deployment - Tue, Jun 10, 2025  6:26:47 PM
// Force cache refresh - Tue, Jun 10, 2025  6:34:57 PM
// Test deployment with correct capitalization - Tue, Jun 10, 2025  7:00:09 PM
