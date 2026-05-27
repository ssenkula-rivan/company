import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Testimonials component with client review submission form
export default function Testimonials() {
  const { t, language } = useLanguage()
  const [commentData, setCommentData] = useState({
    name: '',
    rating: 5,
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: 'John Ssemanda',
      role: language === 'en' ? 'Property Owner' : 'Nannyini Kintu',
      text: language === 'en' 
        ? 'AMODZ PROPERTIES LIMITED made my dream of owning a home a reality. The entire process was smooth and transparent. Highly recommended!'
        : 'AMODZ PROPERTIES LIMITED yafuula ekirooto kyange eky\'okuba n\'ennyumba okuba mazima. Enkola yonna yali nnyangu era ey\'amazima. Nkuteesa nnyo!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Nakamatte',
      role: language === 'en' ? 'Investor' : 'Asiga Ensimbi',
      text: language === 'en'
        ? 'I invested in their residential project and the returns have been excellent. Professional team and great communication throughout.'
        : 'Nasiga ensimbi mu pulojekiti yaabwe ey\'amayumba era amagoba gabadde manungi nnyo. Ttiimu y\'abakugu era empuliziganya yabadde nnungi okumala.',
      rating: 5
    },
    {
      id: 3,
      name: 'David Mwesigwa',
      role: language === 'en' ? 'Commercial Client' : 'Kasitoma w\'Ebyobusuubuzi',
      text: language === 'en'
        ? 'The commercial space I leased from them is perfect for my business. Great location and well-maintained facilities.'
        : 'Ekifo ky\'ebyobusuubuzi kye napangisa okuva gye bali kituukiridde bizinensi yange. Ekifo kirungi era ebikozesebwa bilabirirwa obulungi.',
      rating: 5
    },
    {
      id: 4,
      name: 'Grace Namukwaya',
      role: language === 'en' ? 'First-time Buyer' : 'Agula Omulundi Ogw\'okubanza',
      text: language === 'en'
        ? 'As a first-time buyer, I was nervous, but the team guided me through every step. Now I have my dream home!'
        : 'Nga muguli w\'omulundi ogw\'okubanza, nnali ntya, naye ttiimu yankulembedde mu buli mutendera. Kati nina ennyumba yange ey\'ekirooto!',
      rating: 5
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCommentData(prev => ({ ...prev, [name]: value }))
  }

  const handleRatingClick = (rating) => {
    setCommentData(prev => ({ ...prev, rating }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: commentData.name,
          text: commentData.comment,
          rating: commentData.rating
        })
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setCommentData({
          name: '',
          rating: 5,
          comment: ''
        })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Failed to submit review')
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      setIsSubmitting(false)
      alert(language === 'en' 
        ? 'Failed to submit review. Please try again later.'
        : 'Okubuulira tekusobodde kusindikibwa. Nsaba ddamu okugezaako oluvannyuma.'
      )
    }
  }

  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-6"
        >
          {t('whatClientsSay')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto"
        >
          {t('testimonialsDesc')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-orange"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange to-dark-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-dark-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange text-lg">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-dark-blue mb-4">{t('leaveReview')}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={commentData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange text-sm"
                  placeholder={t('yourName')}
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{t('rating')}:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl focus:outline-none"
                    >
                      <span className={star <= commentData.rating ? 'text-orange' : 'text-gray-300'}>
                        ★
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <textarea
                  name="comment"
                  value={commentData.comment}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange text-sm"
                  placeholder={t('shareExperience')}
                ></textarea>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  {t('reviewSuccess')}
                </motion.div>
              )}

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      {t('posting')}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      {t('postReview')}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
