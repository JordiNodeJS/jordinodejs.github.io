import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      if (
        localStorage.theme === 'dark' ||
        (!localStorage.theme &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        return 'dark'
      }
      return 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
