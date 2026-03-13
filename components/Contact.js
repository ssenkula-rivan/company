import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Contact Us
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-orange mb-6">Get in Touch</h3>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
              <i className="fas fa-map-marker-alt text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">Office Location:</strong>
                <p className="text-gray-700">Complex City Centre<br/>Floor 4, Room T106<br/>Kampala, Uganda</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
              <i className="fas fa-phone text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">Phone:</strong>
                <p className="text-gray-700">+256 752 880 507<br/>+256 784 956 426</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
              <i className="fas fa-envelope text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">Email:</strong>
                <p className="text-gray-700">info@qci-uganda.com<br/>careers@qci-uganda.com<br/>tenders@qci-uganda.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
              <i className="fas fa-clock text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">Business Hours:</strong>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
          >
            <h3 className="text-2xl font-bold text-orange mb-6">Send Us a Message</h3>
            
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <select 
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            >
              <option value="">Select Service</option>
              <option value="sales">Property Sales</option>
              <option value="rentals">Property Rentals</option>
              <option value="management">Property Management</option>
              <option value="valuation">Real Estate Valuation</option>
              <option value="development">Property Development</option>
              <option value="advisory">Investment Advisory</option>
              <option value="other">Other</option>
            </select>
            
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
