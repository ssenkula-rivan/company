import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PropertiesPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties')
        const data = await response.json()
        setProperties(data)
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter)

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-dark-blue mb-4">Our Properties</h1>
            <p className="text-xl text-gray-600">Discover our complete collection of premium properties</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-orange text-white shadow-lg' 
                  : 'bg-gray-100 text-dark-blue hover:bg-gray-200'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'residential' 
                  ? 'bg-orange text-white shadow-lg' 
                  : 'bg-gray-100 text-dark-blue hover:bg-gray-200'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'commercial' 
                  ? 'bg-orange text-white shadow-lg' 
                  : 'bg-gray-100 text-dark-blue hover:bg-gray-200'
              }`}
            >
              Commercial
            </button>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading properties...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={property.image_url} 
                      alt={property.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {property.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-blue mb-2">{property.title}</h3>
                    <p className="text-orange font-bold text-lg mb-3">UGX {property.price.toLocaleString()}</p>
                    <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                    <p className="text-gray-700 text-sm mb-6">{property.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-orange text-white py-3 rounded-lg font-semibold hover:bg-dark-orange transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
