import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Testimonials() {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    role: '',
    rating: 5,
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: 'John Ssemanda',
      role: 'Property Owner',
      text: 'AMODZ PROPERTIES LIMITED made my dream of owning a home a reality. The entire process was smooth and transparent. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Nakamatte',
      role: 'Investor',
      text: 'I invested in their residential project and the returns have been excellent. Professional team and great communication throughout.',
      rating: 5
    },
    {
      id: 3,
      name: 'David Mwesigwa',
      role: 'Commercial Client',
      text: 'The commercial space I leased from them is perfect for my business. Great location and well-maintained facilities.',
      rating: 5
    },
    {
      id: 4,
      name: 'Grace Namukwaya',
      role: 'First-time Buyer',
      text: 'As a first-time buyer, I was nervous, but the team guided me through every step. Now I have my dream home!',
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
          email: commentData.email,
          role: commentData.role,
          text: commentData.comment,
          rating: commentData.rating
        })
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setCommentData({
          name: '',
          email: '',
          role: '',
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
      alert('Failed to submit review. Please try again later.')
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
          What Our Clients Say
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto"
        >
          Real stories from satisfied clients who found their dream properties with us
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
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary-blue">
            <h3 className="text-2xl font-bold text-dark-blue mb-2 text-center">Share Your Experience</h3>
            <p className="text-gray-600 text-center mb-6">We'd love to hear about your experience with AMODZ Properties</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={commentData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-dark-blue font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={commentData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-dark-blue font-semibold mb-2">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={commentData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select your role</option>
                  <option value="Property Owner">Property Owner</option>
                  <option value="Investor">Investor</option>
                  <option value="First-time Buyer">First-time Buyer</option>
                  <option value="Commercial Client">Commercial Client</option>
                  <option value="Tenant">Tenant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-dark-blue font-semibold mb-2">
                  Your Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl focus:outline-none"
                    >
                      <span className={star <= commentData.rating ? 'text-orange' : 'text-gray-300'}>
                        ★
                      </span>
                    </motion.button>
                  ))}
                  <span className="ml-2 text-gray-600 self-center">
                    {commentData.rating} {commentData.rating === 1 ? 'star' : 'stars'}
                  </span>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-dark-blue font-semibold mb-2">
                  Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="comment"
                  value={commentData.comment}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Share your experience with AMODZ Properties..."
                ></textarea>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  Thank you for your review! It will be published after verification.
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-blue to-orange text-white px-12 py-4 rounded-full font-bold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Submit Review
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
