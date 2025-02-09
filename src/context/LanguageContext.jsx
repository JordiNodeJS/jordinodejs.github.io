import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
