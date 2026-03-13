import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function WhatsAppFloat() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!inView) return

    // Intersection Observer for entrance animation
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const whatsappButton = document.querySelector('.whatsapp-float')
    if (whatsappButton) {
      observer.observe(whatsappButton)
    }

    return () => observer.disconnect()
  }, [inView])

  return (
    <motion.a
      ref={ref}
      href="https://wa.me/256752830507"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 bg-whatsapp-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 overflow-hidden group"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.8, ease: 'backOut' }}
      whileHover={{ 
        scale: 1.2,
        rotate: 15,
        boxShadow: '0 20px 40px rgba(37, 211, 102, 0.4)'
      }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Ripple effect */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full"
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Pulse animation */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-white opacity-0"
        whileHover={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      <motion.i 
        className="fab fa-whatsapp text-xl relative z-10"
        whileHover={{ rotate: 15 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Mouse follow effect - using windowSize state instead of window */}
      {windowSize.width > 0 && (
        <motion.div 
          className="absolute -inset-4 pointer-events-none"
          animate={{
            x: mousePosition.x - windowSize.width / 2,
            y: mousePosition.y - windowSize.height / 2
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <div className="w-2 h-2 bg-white rounded-full opacity-20" />
        </motion.div>
      )}
    </motion.a>
  )
}
