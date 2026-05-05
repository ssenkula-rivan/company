import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function MissionVision() {
  const { t } = useLanguage()
  
  return (
    <section id="mission" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-dark-blue text-center mb-20"
        >
          {t('ourMissionVisionGoals')}
        </motion.h2>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-orange"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-4">{t('ourMission')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('missionText')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-primary-blue"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-4">{t('ourVision')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('visionText')}
            </p>
          </motion.div>
        </div>

        {/* Goal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-dark-orange mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-4">{t('ourGoal')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('goalText')}
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-8">{t('focusAreas')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">{t('realEstateDevelopment')}</h4>
                <p className="text-gray-600 text-sm">{t('strategicPropertyDevelopment')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">{t('propertyInvestmentOpportunities')}</h4>
                <p className="text-gray-600 text-sm">{t('lucrativeInvestmentOptions')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">{t('propertyManagement')}</h4>
                <p className="text-gray-600 text-sm">{t('professionalManagement')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-dark-blue mb-2">{t('residentialCommercialConstruction')}</h4>
                <p className="text-gray-600 text-sm">{t('buildingQualitySpaces')}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Company History */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-blue/5 to-orange/5 p-10 rounded-2xl shadow-lg border-l-4 border-orange mb-16"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-6">{t('ourStory')}</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {t('foundedOn')} <span className="font-bold text-primary-blue">August 26, 2022</span> {t('language') === 'en' ? 'by' : 'nga'} <span className="font-bold text-primary-blue">Amoding Magret</span>, Amodz Properties Limited {t('establishedTrusted')}
            </p>
            
            <div className="bg-gradient-to-r from-primary-blue/5 to-orange/5 rounded-xl p-6 border-l-4 border-orange">
              <h5 className="font-bold text-dark-blue mb-3">{t('coreServices')}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">{t('landSalesAcquisition')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">{t('propertyDevelopment')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">{t('residentialConstruction')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span className="text-sm">{t('finishedHomes')}</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg">
              {t('commitmentExcellence')} <span className="font-bold text-primary-blue">{t('excellenceIntegrity')}</span> {t('ensuresEveryClient')}
            </p>
          </div>
          </div>
        </motion.div>

        {/* Development Sites */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-orange"
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">{t('ourDevelopmentSites')}</h3>
          <p className="text-gray-600 text-center mb-8">{t('activeDevelopmentSites')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange/10 to-orange/5 p-6 rounded-xl border-2 border-orange/20 hover:border-orange/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">{t('kapeeka')}</h4>
              <p className="text-gray-600 text-center text-sm">{t('language') === 'en' ? 'Premium plots and residential developments' : 'Ettaka ery\'omuwendo n\'okukulaakulanya amayumba'}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 p-6 rounded-xl border-2 border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">{t('seeta')}</h4>
              <p className="text-gray-600 text-center text-sm">{t('language') === 'en' ? 'Modern housing and land opportunities' : 'Amayumba ag\'omulembe n\'emikisa gy\'ettaka'}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange/10 to-orange/5 p-6 rounded-xl border-2 border-orange/20 hover:border-orange/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <h4 className="font-bold text-dark-blue text-center mb-2 text-lg">{t('mukono')}</h4>
              <p className="text-gray-600 text-center text-sm">{t('language') === 'en' ? 'Strategic location with growth potential' : 'Ekifo eky\'obukugu ekirina obuyinza bw\'okukulaakulana'}</p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              <i className="fas fa-info-circle text-orange mr-2"></i>
              {t('allSitesFeature')}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>
              {t('contactUsForSiteVisits')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
