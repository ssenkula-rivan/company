import { motion } from 'framer-motion'

export default function Team() {
  const teamMembers = [
    {
      title: 'Management Team',
      role: 'Leadership',
      icon: 'fa-user',
      description: 'Dedicated professionals with extensive experience in real estate management, property valuation, and investment strategies.'
    },
    {
      title: 'Real Estate Agents',
      role: 'Sales Team',
      icon: 'fa-user-tie',
      description: 'Expert agents specializing in residential and commercial property sales and leasing.'
    },
    {
      title: 'Property Managers',
      role: 'Operations',
      icon: 'fa-users',
      description: 'Experienced managers handling property oversight, tenant relations, and maintenance coordination.'
    }
  ]

  return (
    <section id="team" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Our People
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">{member.title.charAt(0)}</span>
              </div>
              <h4 className="text-xl font-bold text-dark-blue mb-2">{member.title}</h4>
              <p className="text-orange font-semibold mb-4">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
