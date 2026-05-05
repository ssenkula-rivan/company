import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../contexts/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const { t } = useLanguage()
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
      title: t('propertySales'),
      description: t('language') === 'en' 
        ? 'Find your dream home or investment property with our expert sales team. We handle residential, commercial, and land sales.'
        : 'Zuula ennyumba yo ey\'ekirooto oba ekintu ky\'ensimbi n\'abakozi baffe abakugu. Tukwata okutunda amayumba, ebyobusuubuzi, n\'ettaka.'
    },
    {
      icon: 'fa-building',
      title: t('propertyRentals'),
      description: t('language') === 'en'
        ? 'Discover perfect rental property for your needs. We manage residential and commercial rentals across prime locations.'
        : 'Zuula ekintu eky\'okupangisa ekikutuukirira. Tuddukanya okupangisa amayumba n\'ebyobusuubuzi mu bifo ebikulu.'
    },
    {
      icon: 'fa-cog',
      title: t('propertyManagement'),
      description: t('language') === 'en'
        ? 'Full-service property management solutions including tenant screening, maintenance, rent collection, and property oversight.'
        : 'Okuddukanya ebintu okw\'amaanyi okw\'omutindo ogw\'amaanyi okuli okukebera abapangisi, okuddaabiriza, okukuŋŋaanya ensimbi z\'okupangisa, n\'okulondoola ebintu.'
    },
    {
      icon: 'fa-chart-line',
      title: t('realEstateValuation'),
      description: t('language') === 'en'
        ? 'Accurate property valuations and market assessments by certified professionals for buying, selling, or investment decisions.'
        : 'Okupima omuwendo gw\'ebintu n\'okukebera akatale mu ngeri etuufu abakugu abakiragiddwa ku kugula, okutunda, oba okusalawo ku nsimbi.'
    },
    {
      icon: 'fa-hard-hat',
      title: t('propertyDevelopment'),
      description: t('language') === 'en'
        ? 'Expert consulting on property development projects from land acquisition to construction management and project completion.'
        : 'Okubuulirwa okw\'obukugu ku pulojekiti z\'okukulaakulanya ebintu okuva ku kugula ettaka okutuuka ku kuddukanya okuzimba n\'okumaliriza pulojekiti.'
    },
    {
      icon: 'fa-lightbulb',
      title: t('investmentAdvisory'),
      description: t('language') === 'en'
        ? 'Strategic real estate investment advice and portfolio management to maximize returns on your property investments.'
        : 'Amagezi ag\'obukugu ku nsimbi z\'ebintu n\'okuddukanya ebintu okwongera amagoba ku nsimbi zo z\'ebintu.'
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
          <h2 className="text-5xl font-bold text-dark-blue mb-6">{t('ourServices')}</h2>
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
              className="service-card bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group border-t-4 border-orange"
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
                className="absolute inset-0 bg-gradient-to-br from-orange/10 to-primary-blue/10 opacity-100 group-hover:opacity-100 transition-opacity duration-500"
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
                      {t('learnMore')}
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
