import { motion } from 'framer-motion'

export default function Team() {
  const teamMembers = [
    {
      title: 'Amoding Magret',
      role: 'Chief Executive Officer & Managing Director',
      icon: 'fa-user',
      description: 'Founder of Amodz Properties Limited. A young entrepreneur focused on transforming the lives of youth through innovative real estate solutions. Holds a Bachelor\'s degree in Finance from Makerere University, transitioning from financial services to land investments. Specializes in identifying housing gaps, serving the diaspora community, and developing innovative residential projects. Dedicated to building trust and focusing on long-term value and integrity in property investments.',
      isCEO: true
    },
    {
      title: 'Kikome Maria Pascy',
      role: 'Human Resource Manager',
      icon: 'fa-user-tie',
      description: 'Strategic Human Resource Manager with a Bachelor\'s degree in Accounting and Finance, uniquely combining financial expertise with exceptional people management skills. Leads recruitment initiatives, employee relations, and comprehensive HR support systems. Known for creating a supportive, well-organized workplace culture where staff feel valued and motivated. Brings approachable leadership, strong work ethic, and commitment to building positive team environments while driving continuous learning and organizational growth.'
    },
    {
      title: 'Kabuye Duncan',
      role: 'Client Relations Officer',
      icon: 'fa-user-tie',
      description: 'A knowledgeable, dedicated, and hardworking professional skilled at facilitating clear communication with clients. Expert in training and mentoring customer service staff while ensuring consistent service delivery. Committed to the growth and success of Amodz Properties Limited through exceptional client relationship management.'
    },
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
        
        <div className="space-y-16">
          {/* Leadership Team - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-center text-dark-blue mb-8">Executive Leadership</h3>
            
            {/* CEO Profile - Premium Featured */}
            {teamMembers.filter(member => member.isCEO).map((member, index) => (
              <motion.div 
                key={`ceo-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-blue via-blue-600 to-orange rounded-3xl shadow-2xl p-12 text-white hover:shadow-3xl transition-all duration-300 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white border-opacity-30">
                    <span className="text-white font-bold text-4xl">{member.title.charAt(0)}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{member.title}</h3>
                    <p className="text-xl font-semibold mb-4 text-yellow-200">{member.role}</p>
                    <p className="text-lg leading-relaxed text-white text-opacity-95">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Key Management Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.filter(member => !member.isCEO && (member.role.includes('Human Resource') || member.role.includes('Client Relations'))).map((member, index) => (
                <motion.div 
                  key={`leadership-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">{member.title.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark-blue mb-2">{member.title}</h4>
                      <p className="text-orange font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-700 leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-dark-blue mb-8">Support Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.filter(member => !member.isCEO && !(member.role.includes('Human Resource') || member.role.includes('Client Relations'))).map((member, index) => (
                <motion.div 
                  key={`team-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-orange"
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
