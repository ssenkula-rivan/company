import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    // Parallax effect for footer background using GSAP
    if (typeof window !== 'undefined') {
      gsap.to('.footer-parallax', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: -20,
        ease: 'none'
      })
    }
  }, [])

  const socialLinks = [
    { name: 'facebook', icon: 'fab fa-facebook', href: '#' },
    { name: 'twitter', icon: 'fab fa-twitter', href: '#' },
    { name: 'linkedin', icon: 'fab fa-linkedin', href: '#' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Properties', href: '/properties' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.footer 
      ref={footerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-dark-blue text-white py-20 relative overflow-hidden border-t-4 border-orange"
    >
      {/* Parallax Background */}
      <div className="footer-parallax absolute inset-0 bg-gradient-to-br from-orange/10 to-primary-blue/10">
        <div className="absolute inset-0 opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="footer-section footer-element"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <h5 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-certificate mr-3 text-orange"></i>
              AMODZ PROPERTIES LIMITED
            </h5>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              Your trusted partner for all property needs - sales, rentals, and real estate investments.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, stagger: 0.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-orange transition-colors duration-300 text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    color: '#F1592B'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-section footer-element"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            <h6 className="text-lg font-semibold mb-6">Quick Links</h6>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-orange transition-colors duration-300 inline-block"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="footer-section footer-element"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <h6 className="text-lg font-semibold mb-6">Contact Info</h6>
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.p 
                className="text-gray-300 mb-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-map-marker-alt mr-3"></i>
                Complex City Centre<br />
                Floor 4, Room T106<br />
                Kampala, Uganda
              </motion.p>
              <motion.p 
                className="text-gray-300 mb-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-phone mr-3"></i>
                +256 752 880 507<br />
                +256 784 956 426
              </motion.p>
              <motion.p 
                className="text-gray-300"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-envelope mr-3"></i>
                info@amodz.com
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 AMODZ PROPERTIES LIMITED. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
