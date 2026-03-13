import { motion } from 'framer-motion'

export default function Testimonials() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
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
      </div>
    </section>
  )
}
