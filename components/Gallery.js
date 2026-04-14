import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const videos = [
    {
      id: 1,
      title: 'Kampala Residential Complex - Complete Tour',
      description: 'Take a complete tour of our flagship residential project featuring 50 modern units with world-class amenities.',
      thumbnail: 'https://img.youtube.com/vi/pvBdC0oAijQ/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=pvBdC0oAijQ'
    },
    {
      id: 2,
      title: 'Ntinda Commercial Hub - Business Excellence',
      description: 'Explore premium commercial spaces designed for modern businesses in prime location.',
      thumbnail: 'https://img.youtube.com/vi/ZENhfjul5wU/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=ZENhfjul5wU'
    },
    {
      id: 3,
      title: 'Mukono Residential Estate - Affordable Living',
      description: 'Discover affordable housing solutions with 100+ units designed for comfortable family living.',
      thumbnail: 'https://img.youtube.com/vi/9o6QWTxMJlM/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=9o6QWTxMJlM'
    },
    {
      id: 4,
      title: 'Property Investment Guide - Expert Advice',
      description: 'Learn from our experts about real estate investment strategies and market trends in Uganda.',
      thumbnail: 'https://img.youtube.com/vi/M7CKJtdHstE/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=M7CKJtdHstE'
    },
    {
      id: 5,
      title: 'Quality Construction - Behind the Scenes',
      description: 'See how we maintain quality standards in every construction project we undertake.',
      thumbnail: 'https://img.youtube.com/vi/3VklVIJySLI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=3VklVIJySLI'
    },
    {
      id: 6,
      title: 'Client Testimonials - Success Stories',
      description: 'Hear from our satisfied clients about their experience with Amodz Properties.',
      thumbnail: 'https://img.youtube.com/vi/w3wkY-Px6nQ/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=w3wkY-Px6nQ'
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">Video Gallery</h1>
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
                    onClick={() => openVideoModal(video)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Video Overlay */}
                    <div className="video-overlay absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 hover:bg-opacity-50"></div>
                    
                    {/* Play Button */}
                    <div className="play-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-orange bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                        <i className="fas fa-play text-white text-xl ml-1"></i>
                      </div>
                    </div>
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
