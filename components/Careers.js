import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Careers() {
  const opportunities = [
    'Real Estate Agent',
    'Property Manager',
    'Leasing Consultant',
    'Marketing Specialist',
    'Administrative Assistant'
  ]

  return (
    <section id="careers" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Careers
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <i className="fas fa-users text-6xl text-orange mb-6 block"></i>
            <h3 className="text-3xl font-bold text-dark-blue mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-700 mb-6">
              AMODZ PROPERTIES LIMITED is always looking for talented professionals to join our growing team.
            </p>
            
            <h5 className="text-xl font-semibold text-dark-blue mt-8 mb-4">Current Opportunities:</h5>
            <ul className="text-left space-y-2 mb-8 max-w-md mx-auto">
              {opportunities.map((opp, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 flex items-center"
                >
                  <i className="fas fa-check text-orange mr-3"></i>
                  {opp}
                </motion.li>
              ))}
            </ul>
            
            <p className="text-gray-700 mb-6">
              Send your CV to <strong>careers@qci-uganda.com</strong>
            </p>
            
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-blue text-white px-12 py-3 rounded-full font-semibold hover:bg-dark-blue transition-colors"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
