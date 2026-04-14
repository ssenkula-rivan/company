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
    <section id="statistics" className="relative py-24 bg-gradient-to-br from-dark-blue via-primary-blue to-blue-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-orange to-yellow-300 bg-clip-text text-transparent"
          >
            Our Track Record
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              <span className="font-bold text-orange">Proven Excellence</span> in Real Estate with a 
              <span className="font-bold text-yellow-300"> Track Record of Success</span>
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange via-yellow-300 to-orange mx-auto rounded-full mt-6"></div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                {/* Floating icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange to-yellow-300 rounded-full flex items-center justify-center shadow-lg"
                >
                  <i className={`fas ${
                    index === 0 ? 'fa-home' : 
                    index === 1 ? 'fa-clock' : 
                    index === 2 ? 'fa-users' : 'fa-building'
                  } text-white text-sm`}></i>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange to-yellow-300 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                  className="text-lg text-white/95 font-medium"
                >
                  {stat.label}
                </motion.p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-yellow-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
