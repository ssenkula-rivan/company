import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PlotsLand() {
  const [plots, setPlots] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlots = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/plots')
        const data = await response.json()
        setPlots(data)
      } catch (error) {
        console.error('Error fetching plots:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlots()
  }, [])

  if (loading) {
    return <div className="py-24 text-center">Loading plots...</div>
  }

  return (
    <section id="plots" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Plots & Land
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plots.map((plot, index) => (
            <motion.div
              key={plot.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={plot.image_url} 
                  alt={plot.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {plot.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-blue mb-2">{plot.title}</h3>
                <p className="text-orange font-bold text-lg mb-2">UGX {plot.price.toLocaleString()}</p>
                <p className="text-gray-600 text-sm mb-2">Size: {plot.size}</p>
                <p className="text-gray-600 text-sm mb-4">{plot.location}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-dark-blue mb-2">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {plot.features && plot.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-dark-blue text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors"
                >
                  Contact Agent
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
