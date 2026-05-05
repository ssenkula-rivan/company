import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function CEO() {
  const { t, language } = useLanguage()
  
  return (
    <section id="ceo" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange to-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-primary-blue to-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dark-blue mb-4">{t('meetOurCEO')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange via-amber-400 to-primary-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* CEO Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 xl:order-1"
          >
            <div className="relative group">
              {/* Main profile card */}
              <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-primary-blue via-blue-700 to-orange rounded-3xl shadow-2xl p-10 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white border-opacity-50 shadow-xl">
                    <img 
                      src="/images/new.PNG" 
                      alt="Amoding Magret - CEO"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Amoding Magret</h3>
                  <p className="text-lg md:text-xl font-semibold mb-1">
                    {language === 'en' ? 'Chief Executive Officer' : 'Mukulu Omukulu'}
                  </p>
                  <p className="text-base md:text-lg opacity-90">
                    {language === 'en' ? '& Managing Director' : '& Omuddukanya Omukulu'}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                    <p className="text-sm opacity-80">
                      {language === 'en' ? 'Founder • Amodz Properties Limited' : 'Omutandisi • Amodz Properties Limited'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Achievement badges */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border-l-4 border-orange"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">2022</div>
                  <p className="text-xs text-gray-600 font-medium">Year Founded</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-l-4 border-primary-blue"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-blue">BSc</div>
                  <p className="text-xs text-gray-600 font-medium">
                    {language === 'en' ? 'Finance • Makerere' : 'Ensimbi • Makerere'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* CEO Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 xl:order-2"
          >
            {/* Strategic Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange"
            >
              <h4 className="text-xl md:text-2xl font-bold text-dark-blue mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-orange to-amber-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </span>
                {language === 'en' ? 'Strategic Vision' : 'Okulaba Okw\'Obukugu'}
              </h4>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Transforming Uganda's real estate landscape through innovative property development and youth empowerment initiatives.
              </p>
            </motion.div>
            
            {/* Core Competencies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-5 border border-orange/20 hover:border-orange/40 transition-colors">
                <h5 className="font-bold text-dark-blue mb-2 text-sm">
                  {language === 'en' ? 'Financial Acumen' : 'Obumanyirivu bw\'Ensimbi'}
                </h5>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {language === 'en' 
                    ? 'Makerere Finance graduate with strategic investment expertise'
                    : 'Omupulizigwa wa Makerere mu nsimbi n\'obumanyirivu bw\'ensimbi ez\'obukugu'
                  }
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-xl p-5 border border-primary-blue/20 hover:border-primary-blue/40 transition-colors">
                <h5 className="font-bold text-dark-blue mb-2 text-sm">Global Reach</h5>
                <p className="text-gray-600 text-xs leading-relaxed">Specialized diaspora client services and international investments</p>
              </div>
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-5 border border-orange/20 hover:border-orange/40 transition-colors">
                <h5 className="font-bold text-dark-blue mb-2 text-sm">
                  {language === 'en' ? 'Innovation' : 'Obuyiiya'}
                </h5>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {language === 'en' 
                    ? 'Modern residential solutions addressing market gaps'
                    : 'Eby\'okugonjoolamu amayumba ag\'omulembe ebigonjoola ebbanja ly\'akatale'
                  }
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-xl p-5 border border-primary-blue/20 hover:border-primary-blue/40 transition-colors">
                <h5 className="font-bold text-dark-blue mb-2 text-sm">Trust & Integrity</h5>
                <p className="text-gray-600 text-xs leading-relaxed">Transparent dealings with unwavering ethical standards</p>
              </div>
            </motion.div>
            
            {/* Leadership Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-primary-blue via-blue-700 to-orange rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -mr-20 -mt-20"></div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 relative z-10">
                {language === 'en' ? 'Leadership Commitment' : 'Okwewuubuza kw\'Obukulembeze'}
              </h4>
              <p className="text-base md:text-lg leading-relaxed relative z-10 italic font-light">
                {language === 'en'
                  ? '"Transforming property dreams into reality through innovative real estate solutions. Every development reflects our commitment to excellence, integrity, and your future success."'
                  : '"Okukyusa ebiruubirirwa by\'ebintu okuba mazima ng\'oyita mu by\'obuyiiya by\'ebintu. Buli kukulaakulanya kiraga okwewuubuza kwaffe ku butuukirivu, obwesigwa, n\'obuwanguzi bwo obw\'omu maaso."'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
