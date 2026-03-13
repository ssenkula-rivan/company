import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    { src: '/images/_ (36).jpeg', alt: 'Property 1' },
    { src: '/images/_ (37).jpeg', alt: 'Property 2' },
    { src: '/images/_ (38).jpeg', alt: 'Property 3' },
    { src: '/images/_ (39).jpeg', alt: 'Property 4' },
    { src: '/images/_ (40).jpeg', alt: 'Property 5' },
    { src: '/images/Painted home.jpeg', alt: 'Property 6' }
  ]

  return (
    <section id="image-gallery" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          Image Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
