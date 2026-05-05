import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function Tenders() {
  const { t } = useLanguage()
  
  const tenders = [
    {
      title: t('language') === 'en' 
        ? 'Tender Notice: Property Development Partnership'
        : 'Okubuulira kwa Tenda: Obukwakkulizo bw\'Okukulaakulanya Ebintu',
      date: t('language') === 'en' 
        ? 'Posted: January 2025 | Deadline: March 15, 2025'
        : 'Kyateekeddwa: Janwali 2025 | Ekiseera: Maarc 15, 2025',
      description: t('language') === 'en'
        ? 'We invite qualified contractors and suppliers to submit tenders for property development and renovation projects.'
        : 'Tuyita abakozi n\'abagulisa abatuufu okusindika tenda ku pulojekiti z\'okukulaakulanya n\'okuddaabiriza ebintu.'
    },
    {
      title: t('language') === 'en'
        ? 'Partnership Opportunities'
        : 'Emikisa gy\'Obukwakkulizo',
      date: t('language') === 'en' ? 'Ongoing' : 'Bigenda Mu Maaso',
      description: t('language') === 'en'
        ? 'AMODZ PROPERTIES LIMITED is seeking strategic partnerships with property developers, construction companies, and financial institutions.'
        : 'AMODZ PROPERTIES LIMITED enoonya obukwakkulizo obw\'obukugu n\'abakulaakulanya ebintu, kkampuni z\'okuzimba, n\'ebitongole by\'ensimbi.'
    }
  ]

  return (
    <section id="tender" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          {t('tendersOpportunities')}
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange"
          >
            <h4 className="text-2xl font-bold text-dark-blue mb-6">{t('currentTenders')}</h4>
            
            <div className="space-y-6">
              {tenders.map((tender, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pb-6 border-b border-gray-200 last:border-b-0"
                >
                  <h5 className="text-lg font-semibold text-dark-blue mb-2">{tender.title}</h5>
                  <p className="text-sm text-gray-500 mb-3">{tender.date}</p>
                  <p className="text-gray-700">{tender.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                {t('tenderInquiries')} <strong>tenders@amodzproperties.com</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
