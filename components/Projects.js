import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Kampala Residential Complex',
      location: 'Kampala, Uganda',
      status: 'Completed',
      description: '50 modern residential units with world-class amenities',
      image: '/images/Painted home.jpeg',
      progress: 100
    },
    {
      id: 2,
      title: 'Ntinda Commercial Hub',
      location: 'Ntinda, Kampala',
      status: 'In Progress',
      description: 'Premium commercial and office spaces in prime location',
      image: '/images/_ (39).jpeg',
      progress: 75
    },
    {
      id: 3,
      title: 'Mukono Residential Estate',
      location: 'Mukono, Uganda',
      status: 'In Progress',
      description: 'Affordable housing project with 100+ units',
      image: '/images/_ (40).jpeg',
      progress: 60
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Our Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold text-white ${
                  project.status === 'Completed' ? 'bg-green-500' : 'bg-orange'
                }`}>
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                <p className="text-gray-700 text-sm mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-dark-blue">Progress</span>
                    <span className="text-sm font-bold text-orange">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="bg-orange h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
