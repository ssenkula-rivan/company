import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section id="mission" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Our Mission, Vision & Goals
        </motion.h2>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-orange"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To make your dream of a living home a reality.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-primary-blue"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative real estate company, empowering individuals and families to achieve their dream of owning a living home.
            </p>
          </motion.div>
        </div>

        {/* Goal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-dark-orange mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Goal</h3>
          <p className="text-gray-700 leading-relaxed">
            To help individuals and families acquire affordable, secure, and well-planned property that enables them to turn their dream of owning a home into reality at an early age.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-8">Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">Real Estate Development</h4>
                <p className="text-gray-600 text-sm">Strategic property development projects</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">Property Investment Opportunities</h4>
                <p className="text-gray-600 text-sm">Lucrative investment options for growth</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">Property Management</h4>
                <p className="text-gray-600 text-sm">Professional management of properties</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">Residential & Commercial Construction</h4>
                <p className="text-gray-600 text-sm">Building quality residential and commercial spaces</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Company History */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-blue/5 to-orange/5 p-10 rounded-2xl shadow-lg border-l-4 border-orange mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Founded on <span className="font-bold text-primary-blue">August 26, 2022</span> by <span className="font-bold text-primary-blue">Amoding Magret</span>, Amodz Properties Limited has established itself as Uganda's trusted real estate partner.
            </p>
            
            <div className="bg-gradient-to-r from-primary-blue/5 to-orange/5 rounded-xl p-6 border-l-4 border-orange">
              <h5 className="font-bold text-dark-blue mb-3">Core Services</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">Land Sales & Acquisition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">Property Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">Residential Construction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">Finished Homes</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg">
              Our commitment to <span className="font-bold text-primary-blue">excellence and integrity</span> ensures every client receives professional service, making property ownership accessible and dreams achievable.
            </p>
          </div>
          </div>
        </motion.div>

        {/* Development Sites */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-orange"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">Our Development Sites</h3>
          <p className="text-gray-600 text-center mb-8">We have active development sites in strategic locations across Uganda</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange/10 to-orange/5 p-6 rounded-xl border-2 border-orange/20 hover:border-orange/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">Kapeeka</h4>
              <p className="text-gray-600 text-center text-sm">Premium plots and residential developments</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 p-6 rounded-xl border-2 border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">Seeta</h4>
              <p className="text-gray-600 text-center text-sm">Modern housing and land opportunities</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange/10 to-orange/5 p-6 rounded-xl border-2 border-orange/20 hover:border-orange/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">Mukono</h4>
              <p className="text-gray-600 text-center text-sm">Strategic location with growth potential</p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              <i className="fas fa-info-circle text-orange mr-2"></i>
              All our sites feature titled land, accessible roads, and proximity to essential amenities
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>
              Contact Us for Site Visits
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
