import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [showLanguageSelect, setShowLanguageSelect] = useState(false)
  const { changeLanguage } = useLanguage()

  useEffect(() => {
    // Check if language was already selected
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      // If language already selected, skip language selection
      startLoading(true)
    } else {
      // Show language selection after loading
      startLoading(false)
    }
  }, [])

  const startLoading = (skipLanguageSelect) => {
    // Simulate loading progress over 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * (3 - 1) + 1
        const newProgress = Math.min(prev + increment, 99)
        
        // When we reach near 100
        if (newProgress >= 99) {
          clearInterval(interval)
          setTimeout(() => {
            setProgress(100)
            setTimeout(() => {
              if (skipLanguageSelect) {
                onComplete()
              } else {
                setShowLanguageSelect(true)
              }
            }, 300)
          }, 200)
        }
        
        return newProgress
      })
    }, 100)
  }

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang)
    setTimeout(() => {
      onComplete()
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-dark-blue via-primary-blue to-dark-blue flex flex-col items-center justify-center z-50"
    >
      {!showLanguageSelect ? (
        <>
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src="/LOGO.png"
              alt="AMODZ Logo"
              className="w-24 h-24 bg-white rounded-full p-3 shadow-2xl"
            />
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-2 font-cinzel">AMODZ</h1>
            <p className="text-xl text-orange font-playfair">PROPERTIES LIMITED</p>
            <p className="text-sm text-gray-300 mt-4 font-playfair">Your Trusted Real Estate Partner</p>
          </motion.div>

          {/* Progress Bar Container */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-80 space-y-4"
          >
            {/* Progress Bar Background */}
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              {/* Progress Bar Fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-orange to-primary-blue rounded-full"
              />
            </div>

            {/* Progress Text */}
            <motion.div
              className="text-center"
              animate={{ opacity: progress === 100 ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-sm font-semibold">
                {Math.floor(progress)}%
              </p>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white/60 text-sm mt-8 font-playfair tracking-widest"
          >
            Preparing Your Experience...
          </motion.p>
        </>
      ) : (
        /* Language Selection */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src="/LOGO.png"
              alt="AMODZ Logo"
              className="w-24 h-24 bg-white rounded-full p-3 shadow-2xl mx-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold text-white mb-3"
          >
            Choose Your Language
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl font-semibold text-white mb-12"
          >
            Londa Olulimi Lwo
          </motion.p>

          {/* Language Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* English Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
              className="group relative bg-white hover:bg-orange text-dark-blue hover:text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange/50 min-w-[200px]"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🇬🇧</span>
                <span>English</span>
              </div>
            </motion.button>

            {/* Luganda Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('lg')}
              className="group relative bg-white hover:bg-orange text-dark-blue hover:text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange/50 min-w-[200px]"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🇺🇬</span>
                <span>Luganda</span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
