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
  const currentYear = new Date().getFullYear()

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
      className="bg-dark-blue text-white py-12 md:py-20 relative overflow-hidden border-t-4 border-orange"
    >
      {/* Parallax Background */}
      <div className="footer-parallax absolute inset-0 bg-gradient-to-br from-orange/10 to-primary-blue/10">
        <div className="absolute inset-0 opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <img src="/LOGO.png" alt="AMODZ Logo" className="w-10 h-10 mr-3" />
              <h5 className="text-lg font-bold">AMODZ</h5>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted real estate partner for property sales, rentals, and investments.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-orange/20 hover:bg-orange text-white rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h6 className="text-base font-semibold mb-4 text-orange">Quick Links</h6>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-orange transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-orange mr-2 text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h6 className="text-base font-semibold mb-4 text-orange">Services</h6>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><i className="fas fa-home text-orange mr-2"></i>Property Sales</li>
              <li className="flex items-center"><i className="fas fa-key text-orange mr-2"></i>Property Rentals</li>
              <li className="flex items-center"><i className="fas fa-building text-orange mr-2"></i>Land & Plots</li>
              <li className="flex items-center"><i className="fas fa-chart-line text-orange mr-2"></i>Investment Advisory</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h6 className="text-base font-semibold mb-4 text-orange">Contact</h6>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-orange mr-3 mt-1 flex-shrink-0"></i>
                <p className="text-gray-300">Complex City Centre, Floor 4, Room T106, Kampala</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-orange mr-3 flex-shrink-0"></i>
                <a href="tel:+256752880507" className="text-gray-300 hover:text-orange transition-colors">+256 752 880 507</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-orange mr-3 flex-shrink-0"></i>
                <a href="mailto:info@amodz.com" className="text-gray-300 hover:text-orange transition-colors">info@amodz.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm text-gray-400 space-y-4 sm:space-y-0"
        >
          <p>© {currentYear} AMODZ PROPERTIES LIMITED. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
