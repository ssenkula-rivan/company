import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef(null);

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
    // Parallax effect for section background using GSAP
    if (typeof window !== 'undefined' && sectionRef.current) {
      gsap.to('.services-parallax', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: -30,
        ease: 'none'
      })
    }
  }, [])

  const services = [
    {
      icon: 'fa-home',
      title: 'Property Sales',
      description: 'Find your dream home or investment property with our expert sales team. We handle residential, commercial, and land sales.'
    },
    {
      icon: 'fa-building',
      title: 'Property Rentals',
      description: 'Discover perfect rental property for your needs. We manage residential and commercial rentals across prime locations.'
    },
    {
      icon: 'fa-cog',
      title: 'Property Management',
      description: 'Full-service property management solutions including tenant screening, maintenance, rent collection, and property oversight.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Real Estate Valuation',
      description: 'Accurate property valuations and market assessments by certified professionals for buying, selling, or investment decisions.'
    },
    {
      icon: 'fa-hard-hat',
      title: 'Property Development',
      description: 'Expert consulting on property development projects from land acquisition to construction management and project completion.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Investment Advisory',
      description: 'Strategic real estate investment advice and portfolio management to maximize returns on your property investments.'
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Parallax Background */}
      <div className="services-parallax absolute inset-0 bg-gradient-to-br from-orange/5 to-primary-blue/5">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-dark-blue mb-6">Our Services</h2>
          <motion.div 
            className="w-24 h-1 bg-orange mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              {/* Hover effect background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <motion.div 
                className="text-center text-orange mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 5,
                  color: '#DC5328'
                }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fas ${service.icon} text-5xl`}></i>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold text-dark-blue text-center mb-4 relative z-10"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 text-center leading-relaxed relative z-10"
                whileHover={{ y: 2 }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
              
              {activeService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 pt-4 border-t border-gray-200 relative z-10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <Link 
                      href="/contact" 
                      className="inline-block bg-orange text-white px-8 py-3 rounded-full hover:bg-dark-orange transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
