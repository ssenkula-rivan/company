import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: 'Modern 3-Bedroom House in Kapeeka',
      price: 180000000,
      location: 'Kapeeka, Nakaseke District',
      type: 'Residential',
      description: 'Beautiful modern home with spacious rooms, tiled floors, and a large compound. Perfect for families looking for peaceful countryside living.',
      image_url: '/images/Painted home.jpeg',
      features: ['3 Bedrooms', '2 Bathrooms', 'Large Compound', 'Modern Kitchen', 'Parking Space']
    },
    {
      id: 2,
      title: 'Commercial Plot in Seeta',
      price: 150000000,
      location: 'Seeta, Mukono',
      type: 'Commercial',
      description: 'Prime commercial plot along the main road. Ideal for business ventures, shopping centers, or rental apartments. High traffic area.',
      image_url: '/images/_ (36).jpeg',
      features: ['50x100 ft', 'Main Road Access', 'Commercial Zone', 'Title Available', 'Utilities Ready']
    },
    {
      id: 3,
      title: 'Luxury 4-Bedroom Villa in Mukono',
      price: 350000000,
      location: 'Mukono Town',
      type: 'Residential',
      description: 'Stunning luxury villa with modern amenities, swimming pool, and beautiful landscaping. Premium location with easy access to Kampala.',
      image_url: '/images/exterior 🏠.jpeg',
      features: ['4 Bedrooms', '3 Bathrooms', 'Swimming Pool', 'Garden', 'Security']
    }
  ]

  return (
    <section id="featured-properties" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-6"
        >
          Featured Properties
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-20 max-w-3xl mx-auto"
        >
          Discover our handpicked selection of premium properties in prime locations across Uganda. From modern homes to commercial plots, find your perfect investment.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-orange group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image_url} 
                  alt={property.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {property.type}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-bold text-2xl">UGX {property.price.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-orange transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex items-center">
                  <i className="fas fa-map-marker-alt text-orange mr-2"></i>
                  {property.location}
                </p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{property.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/contact" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-orange to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <i className="fas fa-phone mr-2"></i>
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-blue to-dark-blue text-white px-12 py-4 rounded-full font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
            >
              View All Properties
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
