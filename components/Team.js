import { motion } from 'framer-motion'

export default function Team() {
  const teamMembers = [
    {
      title: 'Amoding Magret',
      role: 'Chief Executive Officer & Managing Director',
      icon: 'fa-user',
      image: '/images/new.PNG',
      description: 'Founder driving innovative real estate solutions with Finance expertise from Makerere University. Specializes in diaspora services, housing gap analysis, and transparent property investments.',
      isCEO: true
    },
    {
      title: 'Kikome Maria Pascy',
      role: 'Human Resource Manager',
      icon: 'fa-user-tie',
      image: '/images/manager.jpeg',
      description: 'Strategic HR leader combining Accounting & Finance background with exceptional people management. Drives recruitment, employee relations, and organizational culture development.'
    },
    {
      title: 'Kabuye Duncan',
      role: 'Client Relations Officer',
      icon: 'fa-user-tie',
      image: '/images/client.jpeg',
      description: 'Client communication specialist ensuring exceptional service delivery and customer relationship management excellence.'
    }
  ]

  const departments = [
    {
      title: 'Property Development',
      role: 'Development Team',
      icon: 'fa-building',
      description: 'Expert professionals managing land acquisition and residential construction projects.'
    },
    {
      title: 'Sales & Marketing',
      role: 'Revenue Team',
      icon: 'fa-chart-line',
      description: 'Specialized agents handling residential and commercial property transactions.'
    },
    {
      title: 'Property Management',
      role: 'Operations Team',
      icon: 'fa-cogs',
      description: 'Dedicated team overseeing property maintenance and tenant relations.'
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
        
        <div className="space-y-20">
          {/* Executive Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-center text-dark-blue mb-12">Executive Leadership</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={`exec-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${
                    member.isCEO 
                      ? 'bg-gradient-to-br from-primary-blue via-blue-700 to-orange text-white' 
                      : 'bg-white text-gray-800'
                  } rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border-l-4 ${
                    member.isCEO ? 'border-white' : 'border-orange'
                  } relative overflow-hidden group`}
                >
                  {member.isCEO && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -mr-12 -mt-12"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 ${
                      member.isCEO 
                        ? 'bg-white bg-opacity-20 backdrop-blur-sm border-4 border-white border-opacity-30' 
                        : 'bg-gradient-to-br from-primary-blue to-orange'
                    } rounded-full flex items-center justify-center overflow-hidden`}>
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.title}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <span className={`${
                          member.isCEO ? 'text-white' : 'text-white'
                        } font-bold text-2xl`}>
                          {member.title.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    
                    <h4 className={`text-xl font-bold mb-2 ${
                      member.isCEO ? 'text-white' : 'text-dark-blue'
                    }`}>{member.title}</h4>
                    
                    <p className={`font-semibold mb-4 ${
                      member.isCEO ? 'text-yellow-200' : 'text-orange'
                    }`}>{member.role}</p>
                    
                    <p className={`leading-relaxed ${
                      member.isCEO ? 'text-white text-opacity-95' : 'text-gray-700'
                    }`}>{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-center text-dark-blue mb-12">Core Departments</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div 
                  key={`dept-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-primary-blue hover:border-orange group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">
                      {dept.title.charAt(0)}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-dark-blue mb-2">{dept.title}</h4>
                  <p className="text-orange font-semibold mb-4">{dept.role}</p>
                  <p className="text-gray-700 leading-relaxed">{dept.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
