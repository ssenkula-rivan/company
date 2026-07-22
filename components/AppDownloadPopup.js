import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function AppDownloadPopup() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Logo */}
            <div className="bg-gradient-to-r from-orange to-orange-600 p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
              >
                <img src="/LOGO.png" alt="AMODZ Logo" className="w-20 h-20 object-contain" />
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                {language === 'en' ? 'Download Our App' : 'Ggyamu Puloguramu Yaffe'}
              </motion.h2>
            </div>

            {/* Body */}
            <div className="p-8 text-center">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-gray-600 text-lg mb-6 leading-relaxed"
              >
                {language === 'en'
                  ? 'Get the best property experience on the go! Download our mobile app for exclusive features and updates.'
                  : "Funa obubonero obw'amaanyi ku bintu nga oli mu nda! Ggyamu puloguramu yaffe ey'essimu ku bikozesebwa eby'amaanyi n'ebikwata ku by'omu maaso."}
              </motion.p>

              {/* Download Button */}
              <motion.a
                href="/coming-soon"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-orange to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
              >
                <i className="fas fa-mobile-alt mr-2"></i>
                {language === 'en' ? 'Download Now' : 'Ggyamu Kati'}
              </motion.a>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                {language === 'en' ? 'Maybe Later' : 'Budde Omu'}
              </motion.button>
            </div>

            {/* App Store Icons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gray-50 px-8 py-4 flex justify-center gap-4"
            >
              <div className="text-center">
                <i className="fab fa-apple text-3xl text-gray-700"></i>
                <p className="text-xs text-gray-500 mt-1">iOS</p>
              </div>
              <div className="text-center">
                <i className="fab fa-google-play text-3xl text-gray-700"></i>
                <p className="text-xs text-gray-500 mt-1">Android</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
