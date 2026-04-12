import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function QuickLinks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
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
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Parallax background using GSAP
    if (typeof window !== 'undefined') {
      gsap.to('.quick-links-parallax', {
        scrollTrigger: {
          trigger: '.quick-links-parallax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: -20,
        ease: 'none'
      })
    }
  }, [])

  const quickLinks = [
    {
      name: 'Get A Quotation',
      href: '/contact',
      icon: 'fa-quote-right',
      isPrimary: true,
      color: 'orange'
    },
    {
      name: 'Looking for Services?',
      href: '/services',
      icon: 'fa-search',
      isPrimary: false,
      color: 'blue'
    },
    {
      name: 'Raise a Query',
      href: '/contact',
      icon: 'fa-question-circle',
      isPrimary: false,
      color: 'blue'
    },
    {
      name: 'Chat With Us',
      href: 'https://wa.me/256752830507',
      icon: 'fa-comments',
      isPrimary: false,
      color: 'blue',
      external: true
    },
    {
      name: 'FAQ\'s',
      href: '/faq',
      icon: 'fa-info-circle',
      isPrimary: false,
      color: 'blue'
    }
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-16 bg-white border-t border-gray-200"
    >
      {/* Parallax Background */}
      <div className="quick-links-parallax absolute inset-0 bg-gradient-to-br from-orange/5 to-primary-blue/5">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: windowSize.width > 0 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 67, 153, 0.1) 0%, transparent 50%)`
              : 'radial-gradient(circle at 50% 50%, rgba(30, 67, 153, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              className="quick-link-item"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: 'backOut' 
              }}
            >
              {link.external ? (
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`quick-link inline-flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 ${
                    link.isPrimary 
                      ? 'bg-orange text-white hover:bg-dark-orange' 
                      : 'bg-white text-primary-blue hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{link.name}</span>
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.href}
                    className={`quick-link inline-flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 ${
                      link.isPrimary 
                        ? 'bg-orange text-white hover:bg-dark-orange' 
                        : 'bg-white text-primary-blue hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
