import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-white rounded-full shadow-md px-2 py-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
          language === 'en'
            ? 'bg-orange text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('lg')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
          language === 'lg'
            ? 'bg-orange text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        LG
      </motion.button>
    </div>
  )
}
