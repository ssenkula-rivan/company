import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // GSAP ScrollTrigger for page transitions
    gsap.fromTo('.page-transition', {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 0,
      duration: 1
    })

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: target.offsetTop - 80,
              autoKill: false,
              ease: 'easeInOut'
            }
          })
        }
      })
    })

    // Sticky sections
    gsap.utils.toArray('.sticky-section').forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: 0
      })
    })

    // Parallax elements
    gsap.utils.toArray('.parallax-element').forEach(element => {
      const depth = element.dataset.depth || 0.5
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        yPercent: -50 * depth,
        ease: 'none'
      })
    })
  }, [])

  const handlePageTransition = (href) => {
    // Framer Motion page transition
    gsap.to('body', {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        window.location.href = href
      }
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="page-transition min-h-screen"
    >
      {/* Mouse follow effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(241, 89, 43, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Content will be rendered here by pages */}
    </motion.div>
  )
}
