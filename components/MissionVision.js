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
          className="bg-gradient-to-r from-primary-blue/5 to-orange/5 p-10 rounded-2xl shadow-lg border-l-4 border-orange"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-dark-blue">Amodz Properties Limited</span> is a dynamic real estate company founded on <span className="font-semibold">26 August 2022</span> by <span className="font-semibold">Christine Nanteza</span> and <span className="font-semibold">Raymond Muddibo</span>, who serve as partners in the business. Since its establishment, the company has focused on delivering reliable real estate solutions while building a strong and trusted presence in the property sector.
            </p>
            <p>
              The company specializes in <span className="font-semibold">selling land, developing properties, constructing houses, and offering finished homes for sale</span>. Through these services, Amodz Properties Limited aims to provide clients with accessible opportunities to own property and achieve their dream of home ownership.
            </p>
            <p>
              With a commitment to <span className="font-semibold">professionalism, flexibility, and customer satisfaction</span>, the company continues to grow by offering convenient and trusted property services designed to help clients turn their dreams of owning a home into reality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
