import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// All Uganda districts/locations
const allDistricts = [
  { name: 'Kampala', category: 'Central', hasProperties: true },
  { name: 'Wakiso', category: 'Central', hasProperties: true },
  { name: 'Mukono', category: 'Central', hasProperties: true },
  { name: 'Entebbe', category: 'Central', hasProperties: true },
  { name: 'Jinja', category: 'Eastern', hasProperties: true },
  { name: 'Mbale', category: 'Eastern', hasProperties: false },
  { name: 'Tororo', category: 'Eastern', hasProperties: false },
  { name: 'Soroti', category: 'Eastern', hasProperties: false },
  { name: 'Lira', category: 'Northern', hasProperties: false },
  { name: 'Gulu', category: 'Northern', hasProperties: false },
  { name: 'Arua', category: 'Northern', hasProperties: false },
  { name: 'Kitgum', category: 'Northern', hasProperties: false },
  { name: 'Mbarara', category: 'Western', hasProperties: true },
  { name: 'Kasese', category: 'Western', hasProperties: false },
  { name: 'Fort Portal', category: 'Western', hasProperties: false },
  { name: 'Kabale', category: 'Western', hasProperties: false },
  { name: 'Ntinda', category: 'Kampala', hasProperties: true },
  { name: 'Kololo', category: 'Kampala', hasProperties: true },
  { name: 'Kira', category: 'Wakiso', hasProperties: true },
  { name: 'Naalya', category: 'Kampala', hasProperties: true },
  { name: 'Najjera', category: 'Kampala', hasProperties: true },
  { name: 'Bweyogerere', category: 'Wakiso', hasProperties: true },
  { name: 'Kira', category: 'Wakiso', hasProperties: true },
  { name: 'Namugongo', category: 'Wakiso', hasProperties: true },
  { name: 'Seeta', category: 'Mukono', hasProperties: true },
  { name: 'Namasuba', category: 'Wakiso', hasProperties: false },
  { name: 'Kajjansi', category: 'Wakiso', hasProperties: false },
  { name: 'Gayaza', category: 'Wakiso', hasProperties: false },
  { name: 'Matugga', category: 'Wakiso', hasProperties: false },
  { name: 'Zirobwe', category: 'Luweero', hasProperties: false },
  { name: 'Wobulenzi', category: 'Luweero', hasProperties: false },
  { name: 'Bombo', category: 'Luweero', hasProperties: false },
  { name: 'Luweero', category: 'Central', hasProperties: false },
  { name: 'Mpigi', category: 'Central', hasProperties: false },
  { name: 'Mityana', category: 'Central', hasProperties: false },
  { name: 'Mubende', category: 'Central', hasProperties: false },
  { name: 'Kiboga', category: 'Central', hasProperties: false },
  { name: 'Masaka', category: 'Central', hasProperties: false },
  { name: 'Rakai', category: 'Central', hasProperties: false },
  { name: 'Lyantonde', category: 'Central', hasProperties: false },
  { name: 'Sembabule', category: 'Central', hasProperties: false },
  { name: 'Luwero', category: 'Central', hasProperties: false },
  { name: 'Nakasongola', category: 'Central', hasProperties: false },
  { name: 'Kayunga', category: 'Central', hasProperties: false },
  { name: 'Buikwe', category: 'Central', hasProperties: false },
  { name: 'Buvuma', category: 'Central', hasProperties: false },
  { name: 'Kalangala', category: 'Central', hasProperties: false },
  { name: 'Iganga', category: 'Eastern', hasProperties: false },
  { name: 'Kamuli', category: 'Eastern', hasProperties: false },
  { name: 'Mayuge', category: 'Eastern', hasProperties: false },
  { name: 'Bugiri', category: 'Eastern', hasProperties: false },
  { name: 'Busia', category: 'Eastern', hasProperties: false },
  { name: 'Pallisa', category: 'Eastern', hasProperties: false },
  { name: 'Budaka', category: 'Eastern', hasProperties: false },
  { name: 'Bukedea', category: 'Eastern', hasProperties: false },
  { name: 'Kumi', category: 'Eastern', hasProperties: false },
  { name: 'Ngora', category: 'Eastern', hasProperties: false },
  { name: 'Serere', category: 'Eastern', hasProperties: false },
  { name: 'Katakwi', category: 'Eastern', hasProperties: false },
  { name: 'Amuria', category: 'Eastern', hasProperties: false },
  { name: 'Kaberamaido', category: 'Eastern', hasProperties: false },
  { name: 'Kapelibwai', category: 'Eastern', hasProperties: false },
  { name: 'Buyende', category: 'Eastern', hasProperties: false },
  { name: 'Kaliro', category: 'Eastern', hasProperties: false },
  { name: 'Namutumba', category: 'Eastern', hasProperties: false },
  { name: 'Bududa', category: 'Eastern', hasProperties: false },
  { name: 'Manafwa', category: 'Eastern', hasProperties: false },
  { name: 'Namisindwa', category: 'Eastern', hasProperties: false },
  { name: 'Butaleja', category: 'Eastern', hasProperties: false },
  { name: 'Kibuku', category: 'Eastern', hasProperties: false },
  { name: 'Kapchorwa', category: 'Eastern', hasProperties: false },
  { name: 'Kween', category: 'Eastern', hasProperties: false },
  { name: 'Bukwo', category: 'Eastern', hasProperties: false },
  { name: 'Sironko', category: 'Eastern', hasProperties: false },
  { name: 'Pader', category: 'Northern', hasProperties: false },
  { name: 'Agago', category: 'Northern', hasProperties: false },
  { name: 'Abim', category: 'Northern', hasProperties: false },
  { name: 'Otuke', category: 'Northern', hasProperties: false },
  { name: 'Alebtong', category: 'Northern', hasProperties: false },
  { name: 'Apac', category: 'Northern', hasProperties: false },
  { name: 'Kole', category: 'Northern', hasProperties: false },
  { name: 'Oyam', category: 'Northern', hasProperties: false },
  { name: 'Dokolo', category: 'Northern', hasProperties: false },
  { name: 'Amolatar', category: 'Northern', hasProperties: false },
  { name: 'Nwoya', category: 'Northern', hasProperties: false },
  { name: 'Amuru', category: 'Northern', hasProperties: false },
  { name: 'Lamwo', category: 'Northern', hasProperties: false },
  { name: 'Adjumani', category: 'Northern', hasProperties: false },
  { name: 'Moyo', category: 'Northern', hasProperties: false },
  { name: 'Yumbe', category: 'Northern', hasProperties: false },
  { name: 'Koboko', category: 'Northern', hasProperties: false },
  { name: 'Maracha', category: 'Northern', hasProperties: false },
  { name: 'Zombo', category: 'Northern', hasProperties: false },
  { name: 'Nebbi', category: 'Northern', hasProperties: false },
  { name: 'Buliisa', category: 'Western', hasProperties: false },
  { name: 'Hoima', category: 'Western', hasProperties: false },
  { name: 'Kibaale', category: 'Western', hasProperties: false },
  { name: 'Kiryandongo', category: 'Western', hasProperties: false },
  { name: 'Masindi', category: 'Western', hasProperties: false },
  { name: 'Kagadi', category: 'Western', hasProperties: false },
  { name: 'Kakumiro', category: 'Western', hasProperties: false },
  { name: 'Bundibugyo', category: 'Western', hasProperties: false },
  { name: 'Ntoroko', category: 'Western', hasProperties: false },
  { name: 'Bunyangabu', category: 'Western', hasProperties: false },
  { name: 'Kabarole', category: 'Western', hasProperties: false },
  { name: 'Kamwenge', category: 'Western', hasProperties: false },
  { name: 'Kyenjojo', category: 'Western', hasProperties: false },
  { name: 'Kyegegwa', category: 'Western', hasProperties: false },
  { name: 'Bushenyi', category: 'Western', hasProperties: false },
  { name: 'Sheema', category: 'Western', hasProperties: false },
  { name: 'Mitooma', category: 'Western', hasProperties: false },
  { name: 'Buhweju', category: 'Western', hasProperties: false },
  { name: 'Rubirizi', category: 'Western', hasProperties: false },
  { name: 'Ibanda', category: 'Western', hasProperties: false },
  { name: 'Kiruhura', category: 'Western', hasProperties: false },
  { name: 'Isingiro', category: 'Western', hasProperties: false },
  { name: 'Ntungamo', category: 'Western', hasProperties: false },
  { name: 'Rukungiri', category: 'Western', hasProperties: false },
  { name: 'Kanungu', category: 'Western', hasProperties: false },
  { name: 'Kisoro', category: 'Western', hasProperties: false }
]

// Inquiry types
const inquiryTypes = [
  { id: 'land', label: 'Buy Land', icon: 'fa-map-marked-alt' },
  { id: 'rent', label: 'Rent Property', icon: 'fa-home' },
  { id: 'house', label: 'Buy House', icon: 'fa-building' },
  { id: 'apartment', label: 'Apartment', icon: 'fa-city' },
  { id: 'commercial', label: 'Commercial Space', icon: 'fa-store' },
  { id: 'plot', label: 'Plot for Development', icon: 'fa-chart-area' },
  { id: 'investment', label: 'Investment Property', icon: 'fa-hand-holding-usd' },
  { id: 'other', label: 'Other', icon: 'fa-question-circle' }
]

export default function SecondaryNav() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [inquiryType, setInquiryType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [filteredDistricts, setFilteredDistricts] = useState([])
  const searchRef = useRef(null)

  // Filter districts based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allDistricts.filter(district =>
        district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        district.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredDistricts(filtered)
    } else {
      setFilteredDistricts([])
    }
  }, [searchQuery])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDistrictClick = (district) => {
    setIsSearchFocused(false)
    setSearchQuery(district.name)
    
    if (district.hasProperties) {
      // Navigate to properties page with location filter
      window.location.href = `/properties?location=${encodeURIComponent(district.name)}`
    } else {
      // Show inquiry modal
      setSelectedDistrict(district)
      setShowModal(true)
    }
  }

  const handleSubmitInquiry = () => {
    if (!inquiryType || !phoneNumber) {
      alert('Please select what you want and provide your phone number')
      return
    }

    // Get selected inquiry type label
    const selectedInquiry = inquiryTypes.find(type => type.id === inquiryType)
    
    // Compose WhatsApp message
    const message = `Hello AMODZ Properties!%0A%0AI'm interested in *${selectedInquiry.label}* in *${selectedDistrict.name}* district.%0A%0AMy phone number: *${phoneNumber}*%0A%0APlease contact me with available options.`
    
    // WhatsApp API with company number
    const whatsappNumber = '256752830507'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Show confirmation message
    setShowModal(false)
    setShowConfirmation(true)
    
    // Reset form
    setInquiryType('')
    setPhoneNumber('')
    setSelectedDistrict(null)
    
    // Hide confirmation after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() && filteredDistricts.length > 0) {
      handleDistrictClick(filteredDistricts[0])
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-16 z-40 bg-white shadow-lg border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Get Quotation Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 15px 35px rgba(241, 89, 43, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-3 border-2 border-white"
              >
                <i className="fas fa-file-invoice text-lg"></i>
                <span className="text-lg">Get a Quotation</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 max-w-md w-full"
            ref={searchRef}
          >
            <form onSubmit={handleSearch} className="relative">
              <div className={`relative flex items-center transition-all duration-300 ${
                isSearchFocused ? 'scale-105' : 'scale-100'
              }`}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Find your location..."
                  className="w-full px-5 py-3 pr-12 rounded-full border-2 border-gray-300 focus:border-orange focus:outline-none bg-gray-50 focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 bg-orange text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <i className="fas fa-search text-sm"></i>
                </motion.button>
              </div>

              {/* Search suggestions dropdown */}
              <AnimatePresence>
                {isSearchFocused && filteredDistricts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-80 overflow-y-auto"
                  >
                    <div className="p-2">
                      {filteredDistricts.map((district, index) => (
                        <motion.div
                          key={`${district.name}-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                          onClick={() => handleDistrictClick(district)}
                          className="px-3 py-2 hover:bg-orange-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              district.hasProperties ? 'bg-green-500' : 'bg-orange-500'
                            }`}></div>
                            <i className="fas fa-map-marker-alt text-orange"></i>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{district.name}</p>
                              <p className="text-xs text-gray-500">
                                {district.category} Region
                                {district.hasProperties && (
                                  <span className="text-green-600 ml-1">• Properties available</span>
                                )}
                              </p>
                            </div>
                            {!district.hasProperties && (
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                Request
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Link href="/properties">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-blue hover:text-orange font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                <i className="fas fa-home"></i>
                <span className="hidden sm:inline">Properties</span>
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-blue hover:text-orange font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                <i className="fas fa-phone"></i>
                <span className="hidden sm:inline">Contact</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-orange to-orange-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedDistrict?.name}</h3>
                    <p className="text-sm text-white/80">{selectedDistrict?.category} Region</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <p className="text-gray-600">
                    We don't have properties in this location yet. 
                    <span className="font-semibold text-orange block mt-1">
                      Tell us what you're looking for!
                    </span>
                  </p>
                </div>

                {/* Inquiry Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setInquiryType(type.id)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          inquiryType === type.id
                            ? 'border-orange bg-orange-50 text-orange'
                            : 'border-gray-200 hover:border-orange-300 text-gray-600'
                        }`}
                      >
                        <i className={`fas ${type.icon} mb-1 block`}></i>
                        <span className="text-sm font-medium">{type.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                      +256
                    </span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="7XX XXX XXX"
                      maxLength={9}
                      className="w-full pl-14 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange focus:outline-none transition-colors"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send your request via WhatsApp
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmitInquiry}
                  className="w-full bg-gradient-to-r from-orange to-orange-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Send Request via WhatsApp
                </motion.button>

                {/* Cancel Button */}
                <button
                  onClick={() => {
                    setShowModal(false)
                    setInquiryType('')
                    setPhoneNumber('')
                  }}
                  className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Confirmation Toast */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 bg-white rounded-xl shadow-2xl border border-green-200 p-4 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-check text-green-600"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Request Sent!</p>
                <p className="text-sm text-gray-600">
                  Your inquiry has been forwarded. We'll contact you soon!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
