import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What services does AMODZ PROPERTIES LIMITED provide?',
      answer: 'AMODZ PROPERTIES LIMITED provides comprehensive real estate services including property sales, rentals, property management, real estate valuation, property development consulting, and investment advisory services.'
    },
    {
      question: 'How do I list my property for sale?',
      answer: 'Contact us through our website, phone, or visit our office. Our agents will guide you through the listing process, including property valuation, documentation, and marketing your property to potential buyers.'
    },
    {
      question: 'Do you help with property rentals?',
      answer: 'Yes! We offer comprehensive property rental services. We help landlords find qualified tenants and assist renters in finding their ideal homes or commercial spaces.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We are based in Kampala, Uganda, and serve clients throughout Uganda and the East African region with mobile teams available for remote locations.'
    },
    {
      question: 'Are you certified?',
      answer: 'Yes, AMODZ PROPERTIES LIMITED is a licensed and registered real estate company operating under all relevant laws and regulations in Uganda.'
    }
  ]

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left font-semibold text-dark-blue hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-down transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 border-t border-gray-200 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
