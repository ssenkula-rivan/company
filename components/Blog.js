import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Blog() {
  const { t } = useLanguage()
  
  const articles = [
    {
      id: 1,
      title: t('language') === 'en' ? '5 Tips for First-Time Property Buyers' : 'Amagezi 5 ku Bagula Ebintu Omulundi Ogw\'okubanza',
      category: t('realEstateTips'),
      date: t('language') === 'en' ? 'March 10, 2025' : 'Maarc 10, 2025',
      excerpt: t('language') === 'en' ? 'Learn essential tips to make your first property purchase a success.' : 'Yiga amagezi ag\'amakulu okufuula okugula kwo okw\'okubanza okw\'ebintu okuwanguzi.',
      image: '/images/Painted home.jpeg',
      link: '/blog/first-time-property-buyers'
    },
    {
      id: 2,
      title: t('language') === 'en' ? 'Real Estate Investment Trends in 2025' : 'Enkyukakyuka mu Nsimbi z\'Ebintu mu 2025',
      category: t('investmentGuide'),
      date: t('language') === 'en' ? 'March 8, 2025' : 'Maarc 8, 2025',
      excerpt: t('language') === 'en' ? 'Discover the latest trends in property investment and market opportunities.' : 'Zuula enkyukakyuka empya mu nsimbi z\'ebintu n\'emikisa gy\'akatale.',
      image: '/images/_ (38).jpeg',
      link: '/blog'
    },
    {
      id: 3,
      title: t('language') === 'en' ? 'How to Maximize Your Property Value' : 'Engeri y\'Okwongera Omuwendo gw\'Ekintu Kyo',
      category: t('propertyManagement'),
      date: t('language') === 'en' ? 'March 5, 2025' : 'Maarc 5, 2025',
      excerpt: t('language') === 'en' ? 'Practical strategies to increase your property value and rental income.' : 'Enkola ez\'amagezi okwongera omuwendo gw\'ekintu kyo n\'ensimbi z\'okupangisa.',
      image: '/images/_ (41).jpeg',
      link: '/blog'
    }
  ]

  return (
    <section id="blog" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          {t('latestNewsArticles')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange text-white px-4 py-2 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                <h3 className="text-xl font-bold text-dark-blue mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                
                <Link href={article.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-orange font-semibold hover:text-dark-orange transition-colors"
                  >
                    {t('readMore')} →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
