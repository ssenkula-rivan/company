import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function SitemapPage() {
  const { language } = useLanguage()

  const sitemapSections = [
    {
      title: language === 'en' ? 'Main Pages' : 'Empapula Enkulu',
      links: [
        { name: language === 'en' ? 'Home' : 'Awaka', url: '/' },
        { name: language === 'en' ? 'About Us' : 'Ku Ffe', url: '/about' },
        { name: language === 'en' ? 'Services' : 'Empeereza', url: '/services' },
        { name: language === 'en' ? 'Contact' : 'Tutuukirire', url: '/contact' },
      ]
    },
    {
      title: language === 'en' ? 'Properties & Plots' : 'Ebintu n\'Ettaka',
      links: [
        { name: language === 'en' ? 'Properties for Sale' : 'Ebintu Ebitundibwa', url: '/properties' },
        { name: language === 'en' ? 'Plots & Land' : 'Ettaka', url: '/plots' },
      ]
    },
    {
      title: language === 'en' ? 'Projects' : 'Pulojekiti',
      links: [
        { name: language === 'en' ? 'All Projects' : 'Pulojekiti Zonna', url: '/projects' },
        { name: language === 'en' ? 'Kampala Residential Complex' : 'Ekifo ky\'Amayumba mu Kampala', url: '/projects/kampala-residential-complex' },
        { name: language === 'en' ? 'Mukono Residential Estate' : 'Ekifo ky\'Amayumba mu Mukono', url: '/projects/mukono-residential-estate' },
        { name: language === 'en' ? 'Ntinda Commercial Hub' : 'Ekifo ky\'Ebyobusuubuzi mu Ntinda', url: '/projects/ntinda-commercial-hub' },
      ]
    },
    {
      title: language === 'en' ? 'Resources' : 'Ebikozesebwa',
      links: [
        { name: language === 'en' ? 'Gallery' : 'Ekitabo ky\'Ebifaananyi', url: '/gallery' },
        { name: language === 'en' ? 'Blog' : 'Buloogu', url: '/blog' },
        { name: language === 'en' ? 'First-Time Property Buyers Guide' : 'Okuluŋŋamya Abagula Ebintu Omulundi Ogw\'okubanza', url: '/blog/first-time-property-buyers' },
        { name: language === 'en' ? 'FAQ' : 'Ebibuuzo Ebijja Buli Kaseera', url: '/faq' },
      ]
    },
    {
      title: language === 'en' ? 'Company' : 'Kkampuni',
      links: [
        { name: language === 'en' ? 'Careers' : 'Emirimu', url: '/careers' },
        { name: language === 'en' ? 'Tenders' : 'Tenda', url: '/tenders' },
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-dark-blue mb-4">
              {language === 'en' ? 'Site Map' : 'Maapu w\'Omukutu'}
            </h1>
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? 'Navigate through all pages of AMODZ Properties Limited'
                : 'Tambula mu mpapula zonna eza AMODZ Properties Limited'
              }
            </p>
            <div className="w-24 h-1 bg-orange mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange"
              >
                <h2 className="text-2xl font-bold text-dark-blue mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-3 text-white text-sm">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link 
                        href={link.url}
                        className="flex items-center text-gray-700 hover:text-orange transition-colors duration-300"
                      >
                        <i className="fas fa-chevron-right text-orange mr-3 text-sm group-hover:translate-x-1 transition-transform"></i>
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* XML Sitemap Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-dark-blue mb-4">
              {language === 'en' ? 'For Search Engines' : 'Ku Mikutu egy\'Okunoonya'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en'
                ? 'Access our XML sitemap for search engine optimization'
                : 'Fumitirira XML sitemap yaffe ku kunoonya mu mikutu'
              }
            </p>
            <a 
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary-blue to-dark-blue text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-file-code mr-2"></i>
              {language === 'en' ? 'View XML Sitemap' : 'Laba XML Sitemap'}
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
