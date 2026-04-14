import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function SecondaryNav() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to properties page with search query
      window.location.href = `/properties?search=${encodeURIComponent(searchQuery)}`
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
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(241, 89, 43, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-file-invoice"></i>
                Get a Quotation
              </motion.button>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 max-w-md w-full"
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
                  onBlur={() => setIsSearchFocused(false)}
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
              {isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                >
                  <div className="p-3 space-y-2">
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-orange"></i>
                        <div>
                          <p className="font-medium text-gray-800">Kampala City</p>
                          <p className="text-xs text-gray-500">Prime locations in city center</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-orange"></i>
                        <div>
                          <p className="font-medium text-gray-800">Ntinda</p>
                          <p className="text-xs text-gray-500">Commercial and residential areas</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-orange"></i>
                        <div>
                          <p className="font-medium text-gray-800">Mukono</p>
                          <p className="text-xs text-gray-500">Affordable housing estates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
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
    </motion.section>
  )
}
