import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    {
      number: '500+',
      label: 'Properties Sold'
    },
    {
      number: '15+',
      label: 'Years of Experience'
    },
    {
      number: '2000+',
      label: 'Happy Clients'
    },
    {
      number: '50+',
      label: 'Projects Completed'
    }
  ]

  return (
    <section id="statistics" className="py-24 bg-primary-blue text-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20"
        >
          Our Track Record
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-5xl font-bold mb-2 text-orange"
              >
                {stat.number}
              </motion.h3>
              
              <p className="text-xl text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
