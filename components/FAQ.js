import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: t('language') === 'en' 
        ? 'What services does AMODZ PROPERTIES LIMITED provide?'
        : 'Buweereza ki AMODZ PROPERTIES LIMITED bw\'ewa?',
      answer: t('language') === 'en'
        ? 'AMODZ PROPERTIES LIMITED provides comprehensive real estate services including property sales, rentals, property management, real estate valuation, property development consulting, and investment advisory services.'
        : 'AMODZ PROPERTIES LIMITED ewa obuweereza bw\'ebintu obw\'amaanyi okuli okutunda ebintu, okupangisa, okuddukanya ebintu, okupima omuwendo gw\'ebintu, okubuulirwa ku kukulaakulanya ebintu, n\'okubuulirwa ku nsimbi.'
    },
    {
      question: t('language') === 'en'
        ? 'How do I list my property for sale?'
        : 'Nkola ntya okuwandiisa ekintu kyange okukitunda?',
      answer: t('language') === 'en'
        ? 'Contact us through our website, phone, or visit our office. Our agents will guide you through the listing process, including property valuation, documentation, and marketing your property to potential buyers.'
        : 'Tukubire ku mukutu gwaffe, essimu, oba jjangu ku ofiisi yaffe. Abakozi baffe bajja kukukulembera mu nkola y\'okuwandiisa, okuli okupima omuwendo gw\'ekintu, ebiwandiiko, n\'okutunda ekintu kyo eri abagula.'
    },
    {
      question: t('language') === 'en'
        ? 'Do you help with property rentals?'
        : 'Muyamba ku kupangisa ebintu?',
      answer: t('language') === 'en'
        ? 'Yes! We offer comprehensive property rental services. We help landlords find qualified tenants and assist renters in finding their ideal homes or commercial spaces.'
        : 'Ye! Tuwa obuweereza bw\'okupangisa ebintu obw\'amaanyi. Tuyamba bannannyini mayumba okuzuula abapangisi abatuufu era tuyamba abapangisi okuzuula amayumba gaabwe ag\'ekirooto oba ebifo by\'ebyobusuubuzi.'
    },
    {
      question: t('language') === 'en'
        ? 'What areas do you serve?'
        : 'Bitundu ki bye mukola?',
      answer: t('language') === 'en'
        ? 'We are based in Kampala, Uganda, and serve clients throughout Uganda and the East African region with mobile teams available for remote locations.'
        : 'Tuli mu Kampala, Uganda, era tuweereza bakasitoma mu Uganda yonna n\'ekitundu ky\'Ebuvanjuba bw\'Afrika n\'amatiimu ag\'entambula agaliwo ku bifo eby\'ewala.'
    },
    {
      question: t('language') === 'en'
        ? 'Are you certified?'
        : 'Mulina obukakase?',
      answer: t('language') === 'en'
        ? 'Yes, AMODZ PROPERTIES LIMITED is a licensed and registered real estate company operating under all relevant laws and regulations in Uganda.'
        : 'Ye, AMODZ PROPERTIES LIMITED ye kkampuni y\'ebintu ekiragiddwa era ewandiisiddwa ekola wansi w\'amateeka gonna ag\'enkizo mu Uganda.'
    }
  ]

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          {t('faqTitle')}
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left font-semibold text-dark-blue hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-down transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 border-t border-gray-200 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
