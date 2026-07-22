import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function KampalaResidentialComplex() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented")
      })
    }
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-slate-50 to-white"
      >
        {/* Hero Section with Video */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-orange/80 z-10"></div>
          
          <motion.video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          >
            <source src="/videos/kampala-residential.mp4" type="video/mp4" />
            <source src="/videos/kampala-residential.webm" type="video/webm" />
            Your browser does not support the video tag.
          </motion.video>

          <div className="relative z-20 text-center text-white px-4">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Kampala Residential Complex
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              50 Modern Residential Units with World-Class Amenities
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={toggleVideo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {isPlaying ? 'Pause Video' : 'Play Video'}
              </motion.button>
              
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                >
                  Back to Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Project Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-dark-blue mb-6">Project Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Kampala Residential Complex represents the pinnacle of modern urban living in Uganda's capital. 
                    This prestigious development features 50 contemporary residential units designed to meet the highest 
                    standards of comfort, luxury, and functionality.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Strategically located in the heart of Kampala, this complex offers residents unparalleled 
                    access to business districts, educational institutions, healthcare facilities, and entertainment venues.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary-blue/5 to-orange/5 rounded-2xl p-8 border-l-4 border-orange">
                  <h3 className="text-2xl font-bold text-dark-blue mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">50 Modern Residential Units</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">World-Class Amenities</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">24/7 Security Services</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">Underground Parking</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">Rooftop Garden & Recreation Area</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-orange mr-3"></i>
                      <span className="text-gray-700">Modern Fitness Center</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Video Gallery */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-dark-blue mb-6">Video Gallery</h3>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <source src="/videos/kampala-residential-tour.mp4" type="video/mp4" />
                    <source src="/videos/kampala-residential-tour.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </motion.video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-primary-blue px-6 py-2 rounded-full font-semibold"
                    >
                      View Fullscreen Tour
                    </motion.button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  >
                    <video autoPlay loop muted playsInline className="w-full h-32 object-cover">
                      <source src="/videos/kampala-amenities.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Amenities
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  >
                    <video autoPlay loop muted playsInline className="w-full h-32 object-cover">
                      <source src="/videos/kampala-interior.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Interior Tour
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
