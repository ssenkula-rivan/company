import { motion } from 'framer-motion'

export default function CEO() {
  return (
    <section id="ceo" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Leadership
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-primary-blue to-dark-blue rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4 font-bold">CEO</div>
                <p className="text-lg font-semibold">Photo</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-4xl font-bold text-dark-blue mb-2">Christine Nanteza</h3>
              <p className="text-xl text-orange font-semibold mb-4">Founder & Chief Executive Officer</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-dark-blue mb-4">About the CEO</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Christine Nanteza is the Founder and Chief Executive Officer of Amodz Properties Limited, a real estate company established on 26 August 2022 with a clear vision of making property ownership more accessible and reliable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong passion for real estate development and community growth, she founded the company to provide trusted property solutions including land sales, property development, construction of houses, and the sale of finished homes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through her leadership, the company continues to focus on delivering professional, transparent, and client-centered services that help individuals and families secure their future through property ownership.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her leadership is guided by a commitment to integrity, reliability, and excellence, ensuring that every project undertaken by the company meets the expectations of clients and contributes to the growth of sustainable communities.
              </p>
            </div>
            
            <div className="bg-orange/10 p-8 rounded-2xl border-l-4 border-orange">
              <h4 className="text-xl font-bold text-dark-blue mb-4">Message from the CEO</h4>
              <p className="text-gray-700 leading-relaxed italic">
                "At Amodz Properties Limited, we believe that owning a home is one of the most important investments in life. Our mission is to make property ownership simple, accessible, and trustworthy for our clients. We are committed to guiding every client through the journey of owning land or a home with professionalism, transparency, and dedication."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
