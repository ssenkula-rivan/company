import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const { t, language } = useLanguage()

  const videos = [
    {
      id: 1,
      title: language === 'en' ? 'Premium Property Showcase' : 'Okulaga Ebintu eby\'Omuwendo',
      description: language === 'en' 
        ? 'Explore our premium properties with modern designs and excellent locations.'
        : 'Lambula ebintu byaffe eby\'omuwendo n\'ennyumba z\'omulembe n\'ebifo ebirungi.',
      thumbnail: '/images/1.jpeg',
      comingSoon: true
    },
    {
      id: 2,
      title: language === 'en' ? 'Residential Excellence' : 'Obukugu mu Mayumba',
      description: language === 'en'
        ? 'Discover beautiful residential properties perfect for your family.'
        : 'Zuula ebintu by\'amayumba ebilungi ebirungi eri amaka go.',
      thumbnail: '/images/2.jpeg',
      comingSoon: true
    },
    {
      id: 3,
      title: language === 'en' ? 'Commercial Opportunities' : 'Emikisa gy\'Ebyobusuubuzi',
      description: language === 'en'
        ? 'Explore premium commercial spaces designed for modern businesses in prime location.'
        : 'Lambula ebifo by\'ebyobusuubuzi eby\'omuwendo ebyakolebwa bizinensi z\'omulembe mu kifo ekikulu.',
      thumbnail: '/images/3.jpeg',
      comingSoon: true
    },
    {
      id: 4,
      title: language === 'en' ? 'Modern Living Spaces' : 'Ebifo by\'Okubeera eby\'Omulembe',
      description: language === 'en'
        ? 'Experience contemporary living with our modern property designs.'
        : 'Fumba okubeera okw\'omulembe n\'ennyumba zaffe ez\'omulembe.',
      thumbnail: '/images/4.jpeg',
      comingSoon: true
    },
    {
      id: 5,
      title: language === 'en' ? 'Investment Properties' : 'Ebintu by\'Ensimbi',
      description: language === 'en'
        ? 'Smart investment opportunities in prime real estate locations.'
        : 'Emikisa gy\'ensimbi egy\'amagezi mu bifo by\'ebintu ebikulu.',
      thumbnail: '/images/5.jpeg',
      comingSoon: true
    },
    {
      id: 6,
      title: language === 'en' ? 'Luxury Homes' : 'Amayumba ag\'Obugagga',
      description: language === 'en'
        ? 'Exclusive luxury properties with world-class amenities and finishes.'
        : 'Ebintu by\'obugagga ebyenjawulo n\'ebikozesebwa by\'omulembe.',
      thumbnail: '/images/6.jpeg',
      comingSoon: true
    },
    {
      id: 7,
      title: language === 'en' ? 'Property Portfolio' : 'Ebintu Byaffe',
      description: language === 'en'
        ? 'Browse through our diverse portfolio of quality properties and developments.'
        : 'Lambula mu bintu byaffe eby\'enjawulo eby\'omutindo n\'okukulaakulanya.',
      thumbnail: '/images/7.jpeg',
      comingSoon: true
    },
    {
      id: 8,
      title: language === 'en' ? 'Quality Construction' : 'Okuzimba Okw\'Omutindo',
      description: language === 'en'
        ? 'See our commitment to quality in every construction project.'
        : 'Laba obwesigwa bwaffe mu mutindo mu buli pulojekiti y\'okuzimba.',
      thumbnail: '/images/8.jpeg',
      comingSoon: true
    },
    {
      id: 9,
      title: language === 'en' ? 'Property Development' : 'Okukulaakulanya Ebintu',
      description: language === 'en'
        ? 'Discover our latest property development projects and opportunities.'
        : 'Zuula pulojekiti zaffe ez\'okukulaakulanya ebintu ezipya n\'emikisa.',
      thumbnail: '/images/9.jpeg',
      comingSoon: true
    },
    {
      id: 10,
      title: language === 'en' ? 'Prime Commercial Plot' : 'Ettaka ly\'Ebyobusuubuzi ery\'Omuwendo',
      description: language === 'en'
        ? 'Premium commercial plots in strategic locations for your business.'
        : 'Ettaka ly\'ebyobusuubuzi ery\'omuwendo mu bifo ebikulu eri bizinensi yo.',
      thumbnail: '/images/_ (36).jpeg',
      comingSoon: true
    },
    {
      id: 11,
      title: language === 'en' ? 'Agricultural Land' : 'Ettaka ly\'Ebyobulimi',
      description: language === 'en'
        ? 'Fertile agricultural land perfect for farming and investment.'
        : 'Ettaka ly\'ebyobulimi erigimuka erirungi eri ebyobulimi n\'ensimbi.',
      thumbnail: '/images/_ (38).jpeg',
      comingSoon: true
    },
    {
      id: 12,
      title: language === 'en' ? 'Investment Opportunities' : 'Emikisa gy\'Ensimbi',
      description: language === 'en'
        ? 'Learn from our experts about real estate investment strategies and market trends.'
        : 'Yiga okuva ku bakugu baffe ku nkola z\'okusiga ensimbi mu bintu n\'enkyukakyuka z\'akatale.',
      thumbnail: '/images/_ (39).jpeg',
      comingSoon: true
    },
    {
      id: 13,
      title: language === 'en' ? 'Residential Plots' : 'Ettaka ly\'Okubeera',
      description: language === 'en'
        ? 'Affordable residential plots in developing areas with great potential.'
        : 'Ettaka ly\'okubeera eribuseeko mu bitundu ebikulaakulana n\'omukisa omunene.',
      thumbnail: '/images/_ (40).jpeg',
      comingSoon: true
    },
    {
      id: 14,
      title: language === 'en' ? 'Completed Projects' : 'Pulojekiti Ezimaliridde',
      description: language === 'en'
        ? 'Tour our completed residential projects with satisfied homeowners.'
        : 'Lambula pulojekiti zaffe ez\'amayumba ezimaliridde n\'abantu abamatidde.',
      thumbnail: '/images/_ (42).jpeg',
      comingSoon: true
    },
    {
      id: 15,
      title: language === 'en' ? 'Beautiful Painted Homes' : 'Amayumba Amalungi Agasiigiddwa Langi',
      description: language === 'en'
        ? 'Stunning finished homes with beautiful paint and modern finishes.'
        : 'Amayumba amalungi agamaze n\'amalangi amalungi n\'okumala okw\'omulembe.',
      thumbnail: '/images/Painted home.jpeg',
      comingSoon: true
    },
    {
      id: 16,
      title: language === 'en' ? 'Elegant Home Designs' : 'Ennyumba ez\'Obulungi',
      description: language === 'en'
        ? 'Explore elegant home designs with attention to detail and quality.'
        : 'Lambula ennyumba ez\'obulungi n\'okufaayo ku buli kintu n\'omutindo.',
      thumbnail: '/images/Painted home (1).jpeg',
      comingSoon: true
    },
    {
      id: 17,
      title: language === 'en' ? 'Luxury Exterior Design' : 'Ennyumba ey\'Obugagga Ebweru',
      description: language === 'en'
        ? 'Beautiful exterior designs that combine elegance with functionality.'
        : 'Ennyumba ennungi ebweru ezigatta obulungi n\'okukola obulungi.',
      thumbnail: '/images/exterior 🏠.jpeg',
      comingSoon: true
    },
    {
      id: 18,
      title: language === 'en' ? 'Construction Progress' : 'Enkulaakulana y\'Okuzimba',
      description: language === 'en'
        ? 'Follow the progress of our ongoing construction projects.'
        : 'Goberera enkulaakulana y\'pulojekiti zaffe ez\'okuzimba ezigenda mu maaso.',
      thumbnail: '/images/construction_progress_1.jpg',
      comingSoon: true
    },
    {
      id: 19,
      title: language === 'en' ? 'House for Sale - Kira' : 'Ennyumba Etundibwa - Kira',
      description: language === 'en'
        ? 'Beautiful house for sale in Kira, Kampala with modern amenities.'
        : 'Ennyumba ennungi etundibwa mu Kira, Kampala n\'ebikozesebwa by\'omulembe.',
      thumbnail: '/images/HOUSE FOR SALE FOR SALE KIRA KAMPALA, UGANDA.jpeg',
      comingSoon: true
    },
    {
      id: 20,
      title: language === 'en' ? 'Trusted Real Estate Services' : 'Empeereza z\'Ebintu Ezesigika',
      description: language === 'en'
        ? 'Experience trusted real estate and construction services with Novera.'
        : 'Fumba empeereza z\'ebintu n\'okuzimba ezesigika ne Novera.',
      thumbnail: '/images/Novera Real Estate Company In Uganda_ For Only Trusted Real Estate & Construction Services_.jpeg',
      comingSoon: true
    },
    {
      id: 21,
      title: language === 'en' ? 'Property Showcase' : 'Okulaga Ebintu',
      description: language === 'en'
        ? 'View our featured properties and real estate opportunities.'
        : 'Laba ebintu byaffe ebikulu n\'emikisa gy\'ebintu.',
      thumbnail: '/images/86K views _ Reel by Samwely.jpeg',
      comingSoon: true
    }
  ]

  const videosPerPage = 6
  const totalPages = Math.ceil(videos.length / videosPerPage)
  const indexOfLastVideo = currentPage * videosPerPage
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo)

  const openVideoModal = (video) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : ''
  }

  return (
    <>
      <section id="video-gallery" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="page-title mb-8 mb-md-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">{t('videoGallery')}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-primary-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="d-flex"
              >
                <div className="card video-card border-0 shadow-sm rounded-4 overflow-hidden w-100 h-100">
                  {/* Video Thumbnail */}
                  <div 
                    className="video-thumb position-relative cursor-pointer"
                    onClick={() => !video.comingSoon && openVideoModal(video)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    
                    {/* Video Overlay */}
                    <div className="video-overlay absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 hover:bg-opacity-50"></div>
                    
                    {/* Coming Soon Badge or Play Button */}
                    {video.comingSoon ? (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-orange text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                          <i className="fas fa-clock mr-2"></i>
                          {t('comingSoon')}
                        </div>
                      </div>
                    ) : (
                      <div className="play-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-orange bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                          <i className="fas fa-play text-white text-xl ml-1"></i>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4">
                    <h6 className="font-semibold mb-2 text-dark-blue">
                      {video.title}
                    </h6>
                    <div className="video-description text-gray-600 text-sm">
                      {video.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pagination-wrapper mt-12 text-center"
            >
              <div className="custom-pagination flex justify-center items-center gap-2">
                {/* Previous Button */}
                {currentPage > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <i className="fas fa-chevron-right text-gray-600"></i>
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>

            {/* Video Content */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(selectedVideo.videoUrl)}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-blue mb-3">{selectedVideo.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
