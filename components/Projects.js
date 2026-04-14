import { motion } from 'framer-motion'
import Link from 'next/link'

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
    <section id="projects" className="py-24 bg-gray-50 border-t border-gray-200 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-12"
        >
          Our Projects
        </motion.h2>

        {/* Auto-playing Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange">
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-96 md:h-[500px] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <source src="/videos/projects-showcase.mp4" type="video/mp4" />
              <source src="/videos/projects-showcase.webm" type="video/webm" />
              Your browser does not support the video tag.
            </motion.video>
            
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-transparent to-orange/20 pointer-events-none"></div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Discover Our Projects</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Experience our commitment to excellence through our portfolio of completed and ongoing developments across Uganda
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-orange"
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
                
                <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary-blue to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Learn More
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
