import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState('notices')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const heroRef = useRef(null)

  const carouselImages = [
    '/images/_ (36).jpeg',
    '/images/_ (37).jpeg',
    '/images/_ (38).jpeg',
    '/images/_ (39).jpeg',
    '/images/_ (40).jpeg',
    '/images/_ (41).jpeg',
    '/images/_ (42).jpeg',
    '/images/8 Genius Tricks to Keep Your Vacant Land From Being Undervalued.jpeg',
    '/images/86K views _ Reel by Samwely.jpeg',
    '/images/exterior 🏠.jpeg',
    '/images/Painted home.jpeg'
  ]

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
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Auto-rotate carousel every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carouselImages.length])

  useEffect(() => {
    // Parallax effect for hero background using GSAP
    if (typeof window !== 'undefined') {
      gsap.to('.hero-parallax', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: -50,
        ease: 'none'
      })
    }
  }, [])

  const notices = [
    {
      title: 'New Property Listings Available',
      description: 'Explore our latest residential and commercial properties available for sale and rent in prime locations.',
      badge: 'NEW'
    },
    {
      title: 'Property Investment Seminar - March 2025',
      description: 'Join our experts for a comprehensive workshop on real estate investment strategies and market trends.',
      badge: 'NEW'
    },
    {
      title: 'Premium Residential Properties - Kampala',
      description: 'Discover luxury homes and apartments in Kampala\'s most sought-after neighborhoods.'
    }
  ]

  const events = [
    {
      title: 'Annual Real Estate Expo 2025',
      description: 'Join industry leaders for our annual property exhibition featuring new developments and investment opportunities.',
      badge: 'NEW'
    },
    {
      title: 'First-Time Homebuyer Workshop',
      description: 'Learn everything you need to know about buying your first property from our experienced agents.'
    }
  ]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <section ref={heroRef} id="home" className="hero-wrapper pt-24 pb-12 relative overflow-hidden min-h-screen">
      {/* Parallax Background */}
      <div className="hero-parallax absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-dark-blue/5">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-3"
            >
              <motion.h1 
                className="text-5xl lg:text-4xl font-bold text-dark-blue mb-3"
                style={{ letterSpacing: '1px' }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              >
                AMODZ PROPERTIES LIMITED
              </motion.h1>
              
              <motion.p 
                className="text-xl text-orange font-light mb-6"
                style={{ letterSpacing: '2px' }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              >
                Where Dreams Meet The Door
              </motion.p>
              
              <motion.div 
                className="h-1 bg-orange w-16"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              />
            </motion.div>
            
            {/* Tabs Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex gap-4 mb-8">
                <motion.button 
                  onClick={() => setActiveTab('notices')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'notices' 
                      ? 'bg-orange text-white shadow-lg' 
                      : 'bg-gray-100 text-dark-blue hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notices
                </motion.button>
                <motion.button 
                  onClick={() => setActiveTab('events')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'events' 
                      ? 'bg-orange text-white shadow-lg' 
                      : 'bg-gray-100 text-dark-blue hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Events
                </motion.button>
              </div>
              
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 max-h-80 overflow-y-auto"
              >
                {(activeTab === 'notices' ? notices : events).map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h5 className="font-semibold text-dark-blue mb-2 text-sm">{item.title}</h5>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      {item.badge && (
                        <motion.span 
                          className="bg-orange text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Section - Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0">
              <motion.div 
                key={currentImageIndex}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${carouselImages[currentImageIndex]}')` }}
              />
              
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 via-transparent to-transparent"
              />
            </div>

            {/* Carousel Controls */}
            <motion.button
              onClick={handlePrevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark-blue w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <span className="text-xl font-bold">‹</span>
            </motion.button>

            <motion.button
              onClick={handleNextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark-blue w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <span className="text-xl font-bold">›</span>
            </motion.button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
