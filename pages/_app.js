import '../styles/globals.css'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Smooth scrolling for navigation links
      const setupSmoothScrolling = () => {
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
                  ease: 'power2.inOut'
                }
              })
            }
          })
        })
      }

      // Sticky sections
      const setupStickySections = () => {
        gsap.utils.toArray('.sticky-section').forEach(section => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: 0
          })
        })
      }

      // Parallax elements
      const setupParallax = () => {
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
      }

      // Intersection Observer for animations
      const setupIntersectionObserver = () => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out'
              })
            }
          })
        }, observerOptions)

        const animatedElements = document.querySelectorAll('.animate-on-scroll')
        animatedElements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
      }

      setupSmoothScrolling()
      setupStickySections()
      setupParallax()
      setupIntersectionObserver()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="page-content min-h-screen"
    >
      <Component {...pageProps} />
    </motion.div>
  )
}
