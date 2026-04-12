import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress over 10 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slower, more gradual progress for 10-second duration
        const increment = Math.random() * (2.5 - 0.8) + 0.8
        const newProgress = Math.min(prev + increment, 99)
        
        // When we reach near 100, complete smoothly
        if (newProgress >= 99) {
          clearInterval(interval)
          // Small delay then complete to 100
          setTimeout(() => {
            setProgress(100)
            // Delay before hiding splash screen
            setTimeout(() => {
              onComplete()
            }, 500)
          }, 300)
        }
        
        return newProgress
      })
    }, 300)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-dark-blue via-primary-blue to-dark-blue flex flex-col items-center justify-center z-50"
    >
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
    </motion.div>
  )
}
