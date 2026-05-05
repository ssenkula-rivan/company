import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function HowToStart() {
  const { t } = useLanguage()
  
  const steps = [
    {
      number: 1,
      title: t('chooseYourProperty'),
      description: t('browseExtensiveCollection')
    },
    {
      number: 2,
      title: t('contactOurTeam'),
      description: t('reachOutToAgents')
    },
    {
      number: 3,
      title: t('payInitialDeposit'),
      description: t('securePropertyDeposit')
    },
    {
      number: 4,
      title: t('paymentPlan'),
      description: t('chooseFlexiblePlans')
    },
    {
      number: 5,
      title: t('constructionBegins'),
      description: t('expertTeamBegins')
    },
    {
      number: 6,
      title: t('propertyHandover'),
      description: t('receiveCompletedProperty')
    }
  ]

  return (
    <section id="how-to-start" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-6"
        >
          {t('howToStart')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto"
        >
          {t('followSimpleProcess')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border-t-4 border-orange">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="block absolute top-1/2 -right-5 w-10 h-1 bg-orange transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
