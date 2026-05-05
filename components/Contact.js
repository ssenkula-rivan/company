import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('thankYouMessage'))
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
          {t('contact')}
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-orange mb-6">{t('getInTouch')}</h3>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow border-l-4 border-orange">
              <i className="fas fa-map-marker-alt text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">{t('officeLocation')}</strong>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'City Complex Centre\nFloor 4, Room J10b\nKampala, Uganda'
                    : 'City Complex Centre\nOmutendera gwa 4, Ekisenge J10b\nKampala, Uganda'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow border-l-4 border-orange">
              <i className="fas fa-phone text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">{t('phone')}</strong>
                <p className="text-gray-700">+256 752 830 507<br/>+256 784 956 426</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow border-l-4 border-orange">
              <i className="fas fa-envelope text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">{t('email')}</strong>
                <p className="text-gray-700">info@amodzproperties.com<br/>careers@amodzproperties.com<br/>tenders@amodzproperties.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow border-l-4 border-orange">
              <i className="fas fa-clock text-orange text-2xl mt-1"></i>
              <div>
                <strong className="text-dark-blue">{t('businessHours')}</strong>
                <p className="text-gray-700">{t('mondayFriday')}<br/>{t('saturday')}<br/>{t('sunday')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4 border-t-4 border-orange"
          >
            <h3 className="text-2xl font-bold text-orange mb-6">{t('sendMessage')}</h3>
            
            <input 
              type="text" 
              placeholder={t('yourName')} 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <input 
              type="email" 
              placeholder={t('yourEmail')} 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <input 
              type="tel" 
              placeholder={t('phoneNumber')}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            />
            
            <select 
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            >
              <option value="">{t('selectService')}</option>
              <option value="sales">{t('propertySales')}</option>
              <option value="rentals">{t('propertyRentals')}</option>
              <option value="management">{t('propertyManagement')}</option>
              <option value="valuation">{t('realEstateValuation')}</option>
              <option value="development">{t('propertyDevelopment')}</option>
              <option value="advisory">{t('investmentAdvisory')}</option>
              <option value="other">{t('other')}</option>
            </select>
            
            <textarea 
              rows="5" 
              placeholder={t('yourMessage')} 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange"
            ></textarea>
            
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary-blue to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('sendMessage')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
