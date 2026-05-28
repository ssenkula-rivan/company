import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      title: language === 'en' ? 'Premium Property Showcase' : 'Okulaga Ebintu eby\'Omuwendo',
      description: language === 'en' 
        ? 'Explore our premium properties with modern designs and excellent locations.'
        : 'Lambula ebintu byaffe eby\'omuwendo n\'ennyumba z\'omulembe n\'ebifo ebirungi.',
      image: '/images/1.jpeg',
      category: 'properties'
    },
    {
      id: 2,
      title: language === 'en' ? 'Residential Excellence' : 'Obukugu mu Mayumba',
      description: language === 'en'
        ? 'Discover beautiful residential properties perfect for your family.'
        : 'Zuula ebintu by\'amayumba ebilungi ebirungi eri amaka go.',
      image: '/images/2.jpeg',
      category: 'residential'
    },
    {
      id: 3,
      title: language === 'en' ? 'Commercial Opportunities' : 'Emikisa gy\'Ebyobusuubuzi',
      description: language === 'en'
        ? 'Explore premium commercial spaces designed for modern businesses in prime location.'
        : 'Lambula ebifo by\'ebyobusuubuzi eby\'omuwendo ebyakolebwa bizinensi z\'omulembe mu kifo ekikulu.',
      image: '/images/3.jpeg',
      category: 'commercial'
    },
    {
      id: 4,
      title: language === 'en' ? 'Modern Living Spaces' : 'Ebifo by\'Okubeera eby\'Omulembe',
      description: language === 'en'
        ? 'Experience contemporary living with our modern property designs.'
        : 'Fumba okubeera okw\'omulembe n\'ennyumba zaffe ez\'omulembe.',
      image: '/images/4.jpeg',
      category: 'residential'
    },
    {
      id: 5,
      title: language === 'en' ? 'Investment Properties' : 'Ebintu by\'Ensimbi',
      description: language === 'en'
        ? 'Smart investment opportunities in prime real estate locations.'
        : 'Emikisa gy\'ensimbi egy\'amagezi mu bifo by\'ebintu ebikulu.',
      image: '/images/5.jpeg',
      category: 'properties'
    },
    {
      id: 6,
      title: language === 'en' ? 'Luxury Homes' : 'Amayumba ag\'Obugagga',
      description: language === 'en'
        ? 'Exclusive luxury properties with world-class amenities and finishes.'
        : 'Ebintu by\'obugagga ebyenjawulo n\'ebikozesebwa by\'omulembe.',
      image: '/images/6.jpeg',
      category: 'residential'
    },
    {
      id: 7,
      title: language === 'en' ? 'Property Portfolio' : 'Ebintu Byaffe',
      description: language === 'en'
        ? 'Browse through our diverse portfolio of quality properties and developments.'
        : 'Lambula mu bintu byaffe eby\'enjawulo eby\'omutindo n\'okukulaakulanya.',
      image: '/images/7.jpeg',
      category: 'properties'
    },
    {
      id: 8,
      title: language === 'en' ? 'Quality Construction' : 'Okuzimba Okw\'Omutindo',
      description: language === 'en'
        ? 'See our commitment to quality in every construction project.'
        : 'Laba obwesigwa bwaffe mu mutindo mu buli pulojekiti y\'okuzimba.',
      image: '/images/8.jpeg',
      category: 'construction'
    },
    {
      id: 9,
      title: language === 'en' ? 'Property Development' : 'Okukulaakulanya Ebintu',
      description: language === 'en'
        ? 'Discover our latest property development projects and opportunities.'
        : 'Zuula pulojekiti zaffe ez\'okukulaakulanya ebintu ezipya n\'emikisa.',
      image: '/images/9.jpeg',
      category: 'construction'
    },
    {
      id: 10,
      title: language === 'en' ? 'Prime Commercial Plot' : 'Ettaka ly\'Ebyobusuubuzi ery\'Omuwendo',
      description: language === 'en'
        ? 'Premium commercial plots in strategic locations for your business.'
        : 'Ettaka ly\'ebyobusuubuzi ery\'omuwendo mu bifo ebikulu eri bizinensi yo.',
      image: '/images/_ (36).jpeg',
      category: 'land'
    },
    {
      id: 11,
      title: language === 'en' ? 'Agricultural Land' : 'Ettaka ly\'Ebyobulimi',
      description: language === 'en'
        ? 'Fertile agricultural land perfect for farming and investment.'
        : 'Ettaka ly\'ebyobulimi erigimuka erirungi eri ebyobulimi n\'ensimbi.',
      image: '/images/_ (38).jpeg',
      category: 'land'
    },
    {
      id: 12,
      title: language === 'en' ? 'Investment Opportunities' : 'Emikisa gy\'Ensimbi',
      description: language === 'en'
        ? 'Learn from our experts about real estate investment strategies and market trends.'
        : 'Yiga okuva ku bakugu baffe ku nkola z\'okusiga ensimbi mu bintu n\'enkyukakyuka z\'akatale.',
      image: '/images/_ (39).jpeg',
      category: 'properties'
    },
    {
      id: 13,
      title: language === 'en' ? 'Residential Plots' : 'Ettaka ly\'Okubeera',
      description: language === 'en'
        ? 'Affordable residential plots in developing areas with great potential.'
        : 'Ettaka ly\'okubeera eribuseeko mu bitundu ebikulaakulana n\'omukisa omunene.',
      image: '/images/_ (40).jpeg',
      category: 'land'
    },
    {
      id: 14,
      title: language === 'en' ? 'Completed Projects' : 'Pulojekiti Ezimaliridde',
      description: language === 'en'
        ? 'Tour our completed residential projects with satisfied homeowners.'
        : 'Lambula pulojekiti zaffe ez\'amayumba ezimaliridde n\'abantu abamatidde.',
      image: '/images/_ (42).jpeg',
      category: 'construction'
    },
    {
      id: 15,
      title: language === 'en' ? 'Beautiful Painted Homes' : 'Amayumba Amalungi Agasiigiddwa Langi',
      description: language === 'en'
        ? 'Stunning finished homes with beautiful paint and modern finishes.'
        : 'Amayumba amalungi agamaze n\'amalangi amalungi n\'okumala okw\'omulembe.',
      image: '/images/Painted home.jpeg',
      category: 'residential'
    },
    {
      id: 16,
      title: language === 'en' ? 'Elegant Home Designs' : 'Ennyumba ez\'Obulungi',
      description: language === 'en'
        ? 'Explore elegant home designs with attention to detail and quality.'
        : 'Lambula ennyumba ez\'obulungi n\'okufaayo ku buli kintu n\'omutindo.',
      image: '/images/Painted home (1).jpeg',
      category: 'residential'
    },
    {
      id: 17,
      title: language === 'en' ? 'Luxury Exterior Design' : 'Ennyumba ey\'Obugagga Ebweru',
      description: language === 'en'
        ? 'Beautiful exterior designs that combine elegance with functionality.'
        : 'Ennyumba ennungi ebweru ezigatta obulungi n\'okukola obulungi.',
      image: '/images/exterior 🏠.jpeg',
      category: 'residential'
    },
    {
      id: 18,
      title: language === 'en' ? 'Construction Progress' : 'Enkulaakulana y\'Okuzimba',
      description: language === 'en'
        ? 'Follow the progress of our ongoing construction projects.'
        : 'Goberera enkulaakulana y\'pulojekiti zaffe ez\'okuzimba ezigenda mu maaso.',
      image: '/images/construction_progress_1.jpg',
      category: 'construction'
    },
    {
      id: 19,
      title: language === 'en' ? 'House for Sale - Kira' : 'Ennyumba Etundibwa - Kira',
      description: language === 'en'
        ? 'Beautiful house for sale in Kira, Kampala with modern amenities.'
        : 'Ennyumba ennungi etundibwa mu Kira, Kampala n\'ebikozesebwa by\'omulembe.',
      image: '/images/HOUSE FOR SALE FOR SALE KIRA KAMPALA, UGANDA.jpeg',
      category: 'properties'
    },
    {
      id: 20,
      title: language === 'en' ? 'Trusted Real Estate Services' : 'Empeereza z\'Ebintu Ezesigika',
      description: language === 'en'
        ? 'Experience trusted real estate and construction services with Novera.'
        : 'Fumba empeereza z\'ebintu n\'okuzimba ezesigika ne Novera.',
      image: '/images/Novera Real Estate Company In Uganda_ For Only Trusted Real Estate & Construction Services_.jpeg',
      category: 'properties'
    }
  ]

  // Categories for filtering
  const categories = [
    { id: 'all', label: language === 'en' ? 'All Projects' : 'Pulojekiti Zonna' },
    { id: 'residential', label: language === 'en' ? 'Residential' : 'Amayumba' },
    { id: 'commercial', label: language === 'en' ? 'Commercial' : 'Ebyobusuubuzi' },
    { id: 'construction', label: language === 'en' ? 'Construction' : 'Okuzimba' },
    { id: 'land', label: language === 'en' ? 'Land & Plots' : 'Ettaka' },
    { id: 'properties', label: language === 'en' ? 'Properties' : 'Ebintu' }
  ]

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const projectsPerPage = 9
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  const openImageModal = (project) => {
    setSelectedImage(project)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredProjects.length
    } else {
      newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    }
    
    setSelectedImage(filteredProjects[newIndex])
  }

  return (
    <>
      <section id="project-gallery" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              {language === 'en' ? 'Project Gallery' : 'Pulojekiti Zaffe'}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {language === 'en' 
                ? 'Explore our completed projects and ongoing developments' 
                : 'Lambula pulojekiti zaffe ezimaliridde n\'ezikulaakulana'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-primary-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange hover:text-orange'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openImageModal(project)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="flex items-center justify-center mb-2">
                            <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                              <i className="fas fa-search-plus text-xl"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                          {categories.find(c => c.id === project.category)?.label || project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {currentProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <i className="fas fa-images text-6xl text-gray-300 mb-4"></i>
              <p className="text-xl text-gray-500">
                {language === 'en' ? 'No projects found in this category' : 'Tewali pulojekiti mu kika kino'}
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center items-center gap-2"
            >
              {/* Previous Button */}
              {currentPage > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i className="fas fa-chevron-left text-gray-600"></i>
                </motion.button>
              )}

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1
                const isCurrent = pageNum === currentPage
                const isNearCurrent = Math.abs(pageNum - currentPage) <= 2 || pageNum === 1 || pageNum === totalPages

                if (!isNearCurrent && pageNum !== 1 && pageNum !== totalPages) {
                  if (pageNum === currentPage - 3 || pageNum === currentPage + 3) {
                    return (
                      <span key={pageNum} className="px-2 text-gray-400">
                        ...
                      </span>
                    )
                  }
                  return null
                }

                return (
                  <motion.button
                    key={pageNum}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isCurrent
                        ? 'bg-orange text-white font-semibold shadow-lg'
                        : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                )
              })}

              {/* Next Button */}
              {currentPage < totalPages && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i className="fas fa-chevron-right text-gray-600"></i>
                </motion.button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <i className="fas fa-times text-white text-xl"></i>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <i className="fas fa-chevron-left text-white text-xl"></i>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <i className="fas fa-chevron-right text-white text-xl"></i>
              </button>

              {/* Image Container */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {categories.find(c => c.id === selectedImage.category)?.label || selectedImage.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
