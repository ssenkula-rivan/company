import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const brandVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const { t, language } = useLanguage()

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: 'fa-home', translationKey: 'home' },
    {
      name: 'Properties',
      href: '/properties',
      icon: 'fa-chevron-down',
      translationKey: 'properties',
      dropdown: [
        { name: language === 'en' ? 'All Properties' : 'Ebintu Byonna', href: '/properties', icon: 'fa-home' },
        { name: language === 'en' ? 'Plots & Land' : 'Ettaka n\'Ebifo', href: '/plots', icon: 'fa-map' },
      ]
    },
    {
      name: 'About Us',
      href: '/about',
      icon: 'fa-chevron-down',
      translationKey: 'about',
      dropdown: [
        { name: language === 'en' ? 'Company Info' : 'Ebikwata ku Kkampuni', href: '/about', icon: 'fa-building' },
        { name: language === 'en' ? 'Our Team' : 'Ttiimu Yaffe', href: '/about', icon: 'fa-users' },
      ]
    },
    {
      name: language === 'en' ? 'Media' : 'Amawulire',
      href: '/gallery',
      icon: 'fa-chevron-down',
      dropdown: [
        { name: language === 'en' ? 'Image Gallery' : 'Ebifaananyi', href: '/gallery', icon: 'fa-images' },
        { name: language === 'en' ? 'Projects' : 'Pulojekiti', href: '/projects', icon: 'fa-project-diagram' },
      ]
    },
    {
      name: language === 'en' ? 'Work With Us' : 'Kolera Naffe',
      href: '#',
      icon: 'fa-chevron-down',
      dropdown: [
        { name: language === 'en' ? 'Careers' : 'Emirimu', href: '/careers', icon: 'fa-briefcase' },
        { name: language === 'en' ? 'Blog/FAQs' : 'Amawulire/Ebibuuzo', href: '/blog', icon: 'fa-book' },
        { name: language === 'en' ? 'Tenders' : 'Tenda', href: '/tenders', icon: 'fa-file-contract' },
      ]
    },
    {
      name: 'Our Services',
      href: '/services',
      icon: 'fa-chevron-down',
      translationKey: 'services',
      dropdown: [
        { name: language === 'en' ? 'All Services' : 'Obuweereza Bwonna', href: '/services', icon: 'fa-concierge-bell' },
      ]
    },
    { name: 'Contact', href: '/contact', icon: 'fa-envelope', translationKey: 'contact' },
  ]

  const handleAnchorClick = (e, href) => {
    // If it's an anchor link on the same page, scroll to it
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Otherwise, let Next.js handle the page navigation
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-blue shadow-2xl border-b-2 border-dark-blue' : 'bg-primary-blue/95 backdrop-blur-md'
      }`}
      style={{ padding: '1rem 0' }}
    >
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between">
          <motion.div 
            className="navbar-brand ml-10"
            variants={brandVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src="/LOGO.png" alt="AMODZ Properties logo" className="w-10 h-10 object-contain" />
              </motion.div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6 mr-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <motion.button 
                      className="nav-link text-white hover:text-orange transition-all duration-300 flex items-center space-x-1 py-2 px-3"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t(item.translationKey) || item.name}</span>
                      <i className={`fas ${item.icon} text-xs`}></i>
                    </motion.button>
                    <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <motion.div 
                        initial={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <motion.div 
                            key={subIndex}
                            whileHover={{ x: 10 }}
                          >
                            <Link 
                              href={subItem.href}
                              onClick={(e) => handleAnchorClick(e, subItem.href)}
                              className="block px-6 py-4 hover:bg-orange hover:text-white transition-all duration-300 font-medium text-dark-blue flex items-center space-x-3"
                            >
                              {subItem.icon && <i className={`fas ${subItem.icon} text-orange hover:text-white`}></i>}
                              <span>{subItem.name}</span>
                            </Link>
                            {subIndex < item.dropdown.length - 1 && (
                              <div className="h-px bg-gray-200"></div>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="nav-link text-white hover:text-orange transition-all duration-300 flex items-center space-x-2 py-2 px-3"
                    >
                      {item.icon && <i className={`fas ${item.icon}`}></i>}
                      <span>{t(item.translationKey) || item.name}</span>
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          <motion.button 
            className="lg:hidden text-white text-2xl mr-10"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="lg:hidden bg-primary-blue/95 backdrop-blur-md mt-2"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center space-x-2">
                      <i className={`fas ${item.icon} text-orange`}></i>
                      <span>{item.name}</span>
                    </h4>
                    <div className="space-y-2 pl-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href}
                          onClick={(e) => handleAnchorClick(e, subItem.href)}
                          className="block text-white font-medium py-2 px-3 hover:text-orange hover:bg-white/10 transition-all duration-300 rounded-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                </div>
              ) : (
                <Link 
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block text-white font-medium hover:text-orange hover:bg-white/10 transition-all duration-300 py-2 px-3 rounded-lg"
                >
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {item.name}
                </Link>
              )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
