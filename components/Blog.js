import { motion } from 'framer-motion'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '5 Tips for First-Time Property Buyers',
      category: 'Real Estate Tips',
      date: 'March 10, 2025',
      excerpt: 'Learn essential tips to make your first property purchase a success.',
      image: '/images/Painted home.jpeg'
    },
    {
      id: 2,
      title: 'Real Estate Investment Trends in 2025',
      category: 'Investment Guide',
      date: 'March 8, 2025',
      excerpt: 'Discover the latest trends in property investment and market opportunities.',
      image: '/images/_ (38).jpeg'
    },
    {
      id: 3,
      title: 'How to Maximize Your Property Value',
      category: 'Property Management',
      date: 'March 5, 2025',
      excerpt: 'Practical strategies to increase your property value and rental income.',
      image: '/images/_ (41).jpeg'
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
          Latest News & Articles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange font-semibold hover:text-dark-orange transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
