import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Careers() {
  const { t, language } = useLanguage()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const opportunities = [
    t('realEstateAgent'),
    t('propertyManager'),
    t('leasingConsultant'),
    t('marketingSpecialist'),
    t('administrativeAssistant')
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size <= 5000000) { // 5MB limit
      setFormData(prev => ({ ...prev, cv: file }))
    } else {
      alert('File size must be less than 5MB')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => {
        setShowForm(false)
        setSubmitStatus(null)
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: '',
          cv: null
        })
      }, 2000)
    }, 1500)
  }

  return (
    <section id="careers" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          {t('careers')}
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-orange"
          >
            <i className="fas fa-users text-6xl text-orange mb-6 block"></i>
            <h3 className="text-3xl font-bold text-dark-blue mb-4">{t('joinOurTeam')}</h3>
            <p className="text-lg text-gray-700 mb-6">
              {language === 'en'
                ? 'AMODZ PROPERTIES LIMITED is always looking for talented professionals to join our growing team.'
                : 'AMODZ PROPERTIES LIMITED bulijjo enoonya abakugu abalina obukugu okwegatta ku ttiimu yaffe egenda eyongera.'
              }
            </p>
            
            <h5 className="text-xl font-semibold text-dark-blue mt-8 mb-4">{t('currentOpportunities')}</h5>
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
              {t('sendCVTo')} <strong>careers@amodzproperties.com</strong>
            </p>
            
            <motion.button 
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-blue to-blue-700 text-white px-12 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('applyNow')}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Application Form Popup */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-primary-blue to-orange p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{t('jobApplicationForm')}</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white hover:text-gray-200 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder={language === 'en' ? 'Enter your full name' : 'Wandiika erinnya lyo lyonna'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('emailAddress')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('phoneNumber')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('positionAppliedFor')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  >
                    <option value="">{t('selectPosition')}</option>
                    {opportunities.map((opp, index) => (
                      <option key={index} value={opp}>{opp}</option>
                    ))}
                  </select>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('coverLetterMessage')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder={language === 'en' ? 'Tell us why you\'re a great fit for this position...' : 'Tubuulire lwaki oli omuntu omutuufu ku mulimu guno...'}
                  ></textarea>
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    {t('uploadCV')} <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-blue transition-colors">
                    <input
                      type="file"
                      id="cv-upload"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2 block"></i>
                      <p className="text-gray-600 mb-1">
                        {formData.cv ? formData.cv.name : t('clickToUpload')}
                      </p>
                      <p className="text-sm text-gray-500">{t('pdfDocDocx')}</p>
                    </label>
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  >
                    <i className="fas fa-check-circle mr-2"></i>
                    {t('applicationSubmitted')}
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-primary-blue to-orange text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        {t('submitApplication')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
