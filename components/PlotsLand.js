import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function PlotsLand() {
  const { t, language } = useLanguage()
  const plots = [
    {
      id: 1,
      title: language === 'en' ? 'Prime Commercial Plot - Kapeeka' : 'Ettaka ly\'Ebyobusuubuzi ery\'Omuwendo - Kapeeka',
      price: 45000000,
      size: '50x100 ft',
      location: language === 'en' ? 'Kapeeka, Nakaseke District' : 'Kapeeka, Disitulikiti ya Nakaseke',
      status: language === 'en' ? 'Available' : 'Eriwo',
      image_url: '/images/_ (36).jpeg',
      features: language === 'en' 
        ? ['Title Ready', 'Main Road Access', 'Electricity Available', 'Water Connection', 'Flat Terrain']
        : ['Ttayitolo Eriwo', 'Okutuuka ku Luguudo Olukulu', 'Amasannyalaze Galiwo', 'Amazzi Galiwo', 'Ettaka Erikyerevu']
    },
    {
      id: 2,
      title: language === 'en' ? 'Residential Plot - Seeta' : 'Ettaka ly\'Okubeera - Seeta',
      price: 35000000,
      size: '40x80 ft',
      location: language === 'en' ? 'Seeta, Mukono' : 'Seeta, Mukono',
      status: language === 'en' ? 'Available' : 'Eriwo',
      image_url: '/images/_ (37).jpeg',
      features: language === 'en'
        ? ['Private Mailo Land', 'Quiet Neighborhood', 'Tarmac Road', 'Schools Nearby', 'Secure Area']
        : ['Ettaka lya Mailo', 'Ekitundu Ekiteefu', 'Oluguudo Olukubiddwa Lami', 'Amasomero Gali Kumpi', 'Ekifo Ekikuumibwa']
    },
    {
      id: 3,
      title: language === 'en' ? 'Agricultural Land - Mukono' : 'Ettaka ly\'Ebyobulimi - Mukono',
      price: 120000000,
      size: language === 'en' ? '2 Acres' : 'Ekkeeri 2',
      location: language === 'en' ? 'Mukono District' : 'Disitulikiti ya Mukono',
      status: language === 'en' ? 'Available' : 'Eriwo',
      image_url: '/images/_ (38).jpeg',
      features: language === 'en'
        ? ['Fertile Soil', 'Water Source', 'Fenced', 'Access Road', 'Perfect for Farming']
        : ['Ettaka Erigimuka', 'Ensulo y\'Amazzi', 'Likomeddwa', 'Oluguudo Olutuuka', 'Lirungi eri Ebyobulimi']
    },
    {
      id: 4,
      title: language === 'en' ? 'Investment Plot - Kapeeka' : 'Ettaka ly\'Ensimbi - Kapeeka',
      price: 55000000,
      size: '60x100 ft',
      location: language === 'en' ? 'Kapeeka Town Center' : 'Ekibuga kya Kapeeka',
      status: language === 'en' ? 'Hot Deal' : 'Omugaso Omukulu',
      image_url: '/images/_ (39).jpeg',
      features: language === 'en'
        ? ['Corner Plot', 'High Traffic Area', 'Commercial Zone', 'Title Available', 'Prime Location']
        : ['Ettaka ly\'Akakono', 'Ekifo eky\'Abantu Bangi', 'Ekitundu ky\'Ebyobusuubuzi', 'Ttayitolo Eriwo', 'Ekifo eky\'Omuwendo']
    },
    {
      id: 5,
      title: language === 'en' ? 'Residential Plot - Seeta' : 'Ettaka ly\'Okubeera - Seeta',
      price: 28000000,
      size: '30x60 ft',
      location: language === 'en' ? 'Seeta Trading Center' : 'Ekibuga kya Seeta',
      status: language === 'en' ? 'Available' : 'Eriwo',
      image_url: '/images/_ (40).jpeg',
      features: language === 'en'
        ? ['Affordable', 'Near Market', 'Public Transport', 'Electricity', 'Water Available']
        : ['Ebuseeko', 'Kumpi n\'Akatale', 'Entambula ya Bonna', 'Amasannyalaze', 'Amazzi Galiwo']
    },
    {
      id: 6,
      title: language === 'en' ? 'Large Plot - Mukono' : 'Ettaka Erinene - Mukono',
      price: 85000000,
      size: '100x100 ft',
      location: language === 'en' ? 'Mukono Municipality' : 'Ekibuga kya Mukono',
      status: language === 'en' ? 'Available' : 'Eriwo',
      image_url: '/images/_ (41).jpeg',
      features: language === 'en'
        ? ['Spacious', 'Gated Community', 'Security', 'Tarmac Road', 'Developed Area']
        : ['Erinene', 'Ekitundu Ekikomeddwa', 'Obukuumi', 'Oluguudo Olukubiddwa Lami', 'Ekitundu Ekitegekeddwa']
    }
  ]

  return (
    <section id="plots" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-6"
        >
          {t('plotsLand')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-20 max-w-3xl mx-auto"
        >
          {t('plotsLandDesc')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plots.map((plot, index) => (
            <motion.div
              key={plot.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-orange group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={plot.image_url} 
                  alt={plot.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 ${plot.status === 'Hot Deal' ? 'bg-red-500' : 'bg-primary-blue'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  {plot.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-bold text-2xl">UGX {plot.price.toLocaleString()}</p>
                  <p className="text-white/90 text-sm">{plot.size}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-orange transition-colors">
                  {plot.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-orange mr-2"></i>
                  {plot.location}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-dark-blue mb-2">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {plot.features && plot.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary-blue to-dark-blue text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    {t('contactAgent')}
                  </motion.button>
                </Link>
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
          <Link href="/plots">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange to-orange-600 text-white px-12 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            >
              {t('viewAllPlots')}
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
