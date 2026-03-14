import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true)
    }

    const handleRouteChangeComplete = () => {
      setIsTransitioning(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [router])

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-dark-blue flex items-center justify-center"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary-blue via-dark-blue to-orange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Logo Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { type: 'spring', stiffness: 100, damping: 15 },
              opacity: { duration: 0.3 }
            }}
          >
            {/* Rotating Circle Background */}
            <motion.div
              className="absolute w-40 h-40 border-4 border-transparent border-t-orange border-r-orange rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo */}
            <motion.div
              className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 0 0 rgba(241, 89, 43, 0.7)',
                  '0 0 0 20px rgba(241, 89, 43, 0)',
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <img
                src="/LOGO.png"
                alt="AMODZ Logo"
                className="w-24 h-24 object-contain"
              />
            </motion.div>

            {/* Company Name */}
            <motion.h2
              className="mt-12 text-white text-2xl font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              AMODZ PROPERTIES
            </motion.h2>

            {/* Loading Dots */}
            <motion.div
              className="mt-6 flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-orange rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
