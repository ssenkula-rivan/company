import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function ComingSoon() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue to-dark-blue flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-2xl"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <i className="fas fa-mobile-alt text-5xl"></i>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {language === 'en' ? 'Coming Soon' : 'Kijja Kudda'}
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          {language === 'en'
            ? 'Our mobile app is under development. Stay tuned for an amazing property experience on the go!'
            : "Puloguramu yaffe ey'essimu eri mu kukola. Tegana okufuna obubonero obw'amaanyi ku bintu nga oli mu nda!"}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-orange-600 transition-all duration-300"
            >
              <i className="fas fa-home mr-2"></i>
              {language === 'en' ? 'Back to Home' : 'Edda Ku Kkomo'}
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <div className="flex justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-4xl"
            >
              <i className="fab fa-apple"></i>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-4xl"
            >
              <i className="fab fa-google-play"></i>
            </motion.div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            {language === 'en' ? 'Available on iOS and Android' : 'Eri ku iOS ne Android'}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
