import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <button
      onClick={toggleLanguage}
      className="fixed right-20 top-4 z-50 rounded-lg bg-white/80 p-2 text-black backdrop-blur-sm transition-colors hover:bg-white/60 dark:bg-neutral-800/80 dark:text-white dark:hover:bg-neutral-800/60 flex items-center gap-1"
      aria-label={`Change language to ${
        language === 'en' ? 'Spanish' : 'English'
      }`}
    >
      <span className="text-base">{language === 'en' ? '🇪🇸' : '🇬🇧'}</span>
      <span className="text-sm font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  )
}
